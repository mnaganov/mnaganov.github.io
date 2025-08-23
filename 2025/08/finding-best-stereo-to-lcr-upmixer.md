# Finding the Best Stereo-to-LCR Upmixer

In my last post on tuning my headphone auralization setup, I noted that some
"future work" was needed to improve the sonic quality of stereo-to-LCR
upmixing. Specifically, I needed a way to extract the phantom center channel
from a standard stereo source while avoiding audible artifacts. Center channel
extraction is needed because, from my experience with creating an auralization
chain, making the phantom center sound "externalized" (experiencing it out of
the head) requires the most effort. So, I went down the rabbit hole of testing
center extraction plugins, and I found that there is always a trade-off
between extraction efficiency and resulting audio quality.

## Upmixing Approaches

First, let's quickly review approaches that can be used for stereo signal
upmixing. For a much more comprehensive overview I would recommend checking
[the PhD thesis work by Sebastian
Kraft](https://openhsu.ub.hsu-hh.de/bitstream/10.24405/14379/1/openHSU_14379.pdf]. Note
that for my purpose I only consider the extraction of the center channel,
which is one of the simplest form of upmixing. The resulting channel
configuration is often called "LCR": "Left, Center, Right."

### Mid/Side and Matrix Approaches

The simplest approach for extracting the center channel is Mid/Side
decomposition, which I discussed previously in [one of my
posts](/2023/06/on-midside-equalization.html). As we know, by summing the left
and right channels together, we automatically boost the signal that is
identical in both channels, creating the effect of the "phantom center." Many
simple plugins, like the excellent and free [Voxengo
MSED](https://www.voxengo.com/product/msed/) and [GoodHertz MidSide
Matrix](https://goodhertz.com/midside-matrix/) can isolate this Mid signal
perfectly.

The problem? This isn't a true center extractor. It's a "center summer." A
sound panned hard left is still present in the Mid channel, albeit at half its
original amplitude (**-6 dB**). This means that Mid/Side decomposition doesn't
separate what's exclusively in the center from what's panned elsewhere.

A generalization of Mid/Side is "matrix" approaches which allow producing more
channels from stereo for playback over surround speakers
configuration. Processing is done completely in the time domain, which makes
it fast and minimizes the possibility of creating any audible artifacts. The
downside is that they are fairly limited in their ability to truly decompose
real musical signals into components; what they do is mostly "energy
rebalancing." Some tricks that matrix processors can employ include changing
the processing coefficients "on the fly" to "steer" the dominant sound to the
speaker at the most appropriate location, and also adding a delay to rear
channels to create more ambience.

### Correlation, STFT, and "Musical Noise"

To achieve better separation, proper upmixers don't just sum or subtract the
channels. They analyze the signal using a [Short-Time Fourier Transform
(STFT)](https://en.wikipedia.org/wiki/Short-time_Fourier_transform), which
breaks the audio into tiny time slices and analyzes the frequency content of
each slice. Within each slice, the algorithm examines the inter-channel
correlation across every frequency bin and the lateral energy. This approach
has some similarity to the process our brain uses when analyzing inputs from
the left and right ears:

* If a frequency is highly **correlated** (i.e., similar in phase and energy)
  between the left and right channels, it's likely panned to the center.

* If it's **uncorrelated** and one channel (left or right) has substantially
  more energy then it belongs to that channel.

* But if it’s **uncorrelated** and the energy is **the same** in both
  channels, then it’s usually considered to be the "ambient" component.

* The interesting case is when the signals are **anticorrelated** (highly
  correlated but one channel is a phase inverted copy of another). This kind
  of signal usually sounds very confusing when played both via stereo speakers
  and headphones, and I don’t think there is a consensus whether it should be
  considered to be in the center channel or rather spread into side channels.

Note that instead of aggregating inter-channel correlation across all
frequency bins together, we can instead consider groups of bands with similar
correlation. As explained in S. Kraft’s PhD thesis, this can be used for
inferring the location of each instrument, since in a musical composition the
instruments are usually arranged in non-overlapping bands.

The weak point in this elegant approach is phase reconstruction. When the
algorithm creates a new center channel by manipulating the magnitude of the
frequency bins and then performs an inverse STFT to go back to the time
domain, it has to guess what the phase of the extracted center should be. What
makes this issue worse is that the STFT approach processes the input signal in
"chunks" which are glued together. Thus, the phases for the same frequency bin
may not even be continuous between chunks, and this creates audible artifacts,
infamously known as **"musical noise."**

If we use a dual mono signal, for example my favorite is pink noise, then if
the algorithm uses the average phase between two channels, it gets the true
phase value because both channels contain the same noise. However, the "acid
test" that I used for upmixers is an uncorrelated pink noise. The theoretical
version of this signal has zero correlation between the left and right
channels. Thus, an ideal extractor should produce silence, as there is no
"center" information to extract. This all in theory, however, and requires the
signal to have an infinite length. In practice any real, finite "uncorrelated"
pink noise still has some non-zero correlation happening here and there across
frequency bands. The shorter the time interval we are looking at, the more
pronounced these spurious correlations are. As an example, below is a graph
which shows per-band absolute correlation values for such "uncorrelated" pink
noise over time, using STFT, and the resulting phantom center energy that such
an algorithm can infer from it:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhs5eHLv0VnnGlC-Nyie_57Ndaem0wVF-qBY8mIa6G1BlW5n9AdDPJ2jVUc-7Wx3sQUX5F-fhh1F9WNoXVuZStEmBP8IiRLgF0CYbYecZkT9vlLvZRHdnE_DK3_TGqlbbvjzNIP7zR4ojeFYY8ITDxAW3Dt-A8qddf1kLvCn98xF9ILcsQMhTZj_VxDCUGm/w550-h640/uncorrI-energy-and-corr.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhs5eHLv0VnnGlC-Nyie_57Ndaem0wVF-qBY8mIa6G1BlW5n9AdDPJ2jVUc-7Wx3sQUX5F-fhh1F9WNoXVuZStEmBP8IiRLgF0CYbYecZkT9vlLvZRHdnE_DK3_TGqlbbvjzNIP7zR4ojeFYY8ITDxAW3Dt-A8qddf1kLvCn98xF9ILcsQMhTZj_VxDCUGm/s960/uncorrI-energy-and-corr.png)

As the center extractor "locks" on these spurious correlations (values with
absolute value close to **1**), it can put them into the phantom center (the
actual result also depends on the energy balance, as we have noted
above). Thus, any sufficiently loud phantom center sound extracted from the
uncorrelated noise is purely an artifact of the processing algorithm itself.

As noted in the paper ["Frequency-Domain Two- to Three-Channel Upmix for
Center Channel Derivation and Speech Enhancement" by
E. Vickers](https://aes2.org/publications/elibrary-page/?id=15112), in the
"traditional" application for upmixers these artifacts may not be a big issue
because when all channels are presented over speakers, acoustic summation of
their parts happens, and the resulting acoustical "downmix" may conceal the
artifacts. However, in my headphone virtualization application I perform
separate processing of the center channel, and as a result the partial
artifacts lose their initial match, so the resulting sum can still reveal
themselves in the binaural downmix as unnaturally sounding artifacts. This is
why my goal is to have an upmixer with minimal artifacts.

## Testing the Contenders

To find the best tool for the job, I devised a simple test to evaluate
separation quality and artifact generation. I pitted a few different classes
of plugins against each other:

* [Bertom Audio Phantom Center](https://bertomaudio.com/phantom-center.html)
  plugin which I employed initially for my headphone chain—it uses the STFT
  approach. While I was working on the post, Tom released the new version
  called Phantom Center 2 which has a bit more settings, but the underlying
  principle is still the same.

* [A.O.M. Stereo Imager
  D](https://aom-factory.jp/products/stereo-imager-d/)—another center
  extractor which also uses the correlation approach.

* Inexpensive upmixer plugin from **Waves
  Audio**—[UM225](https://www.waves.com/plugins/um225-um226). It has several
  modes, and I have tried two of them because they sounded completely
  different: mode **5** ("Steady Center") and mode **6** ("Stereo Preserve").

* "Industry standard" expensive [Halo Upmix](https://nugenaudio.com/haloupmix)
  plugin by **Nugen Audio**, which I used in LCR mode, with the "Hard Center"
  preset.

* Hardware implementations of surround upmixers: **Auro 2D,** **Dolby
  Surround,** and **DTS Neural:X** from the [Marantz AV 7704
  AVR](/2020/06/marantz-av7704-as-audio-hub.html). AV 7704 was configured for
  LCR output (no surround channels) and a narrow center image.

Since for commercial upmixers their actual implementation is kept in secret,
we can only guess it by the results they produce. In order to understand the
behavior of upmixers better, I used the following test signals:

* **Correlated stereo pink noise** (dual mono signal). This should normally go
  into the center channel, however some upmixers also "spill" it into side
  channels (this behavior may be configurable). This spilling may also cause
  the upmixer to decorrelate the output channels in order to avoid producing
  comb filtering which can happen when identical signals from different
  speakers reach the listener at non-equal times.

* **Uncorrelated Stereo Pink Noise.** As we have already discussed, this
  signal in its ideal form has zero correlation between the left and right
  channels. An ideal extractor should produce very quiet cleanly sounding pink
  noise.

* **Mono Pink Noise** (left channel only). Naturally, this signal also has
  close to zero correlation between the left and the right channels, however
  all the energy is on the left side. My expectation is that the extractor
  should produce perfect silence in the center channel, as all the signal
  should be panned hard left.

* Simple **music track** which I have produced myself by combining dry
  recordings of a saxophone and an acoustic guitar. The sax is hard-panned to
  the left channel, and the guitar is panned into the center (dual mono).

Besides these tracks, I also used the [Plugindoctor app by
DDMF](https://ddmf.eu/plugindoctor/) to quickly examine the linearity of
plugins and hardware implementations. To my surprise, one of the plugins had
some issues with that—maybe it’s good for "artistic" purposes, but in my case
the requirement is that the processing algorithm should be as transparent as
possible.

## The Results

The actual results have turned out to be very interesting. Since my intention
was to stick to the "best" upmixer, I introduced a ranking system with **5**
dimensions, each on the scale from **5** (best) to **1** (worst). This is what
they are:

* For the correlated pink noise: what is the relative level of the center to
  sides (ideally, there should be no sides). And what is the audible quality
  of it—are there any artifacts? I grade both factors on the scale from **5**
  to **1**, and average them.

* For the uncorrelated pink noise: again, how loud is the center compared to
  side channels (ideally, there should be no center), and are there any
  audible artifacts?

* Same for the mono pink noise (which is also uncorrelated)—does it spill into
  the center channel (or even the right channel), and does the quality
  degrade?

* How well the upmixer extracts the phantom center from music—am I hearing
  just the central instrument, or am I also hearing the left-panned
  instrument? Also, what is in the right channel—which should ideally be
  silent. Are there artifacts in the music—also, for all **3** output
  channels. Again, I average these scores into one grade.

So, what we have—"phantom center" extractors, following their design goal, are
the best in actually extracting the center, but since they use the STFT
approach, they have issues with the phasing artifacts which can be heard both
on uncorrelated noise and on music.

Whereas surround upmixers may have less artifacts, however they may "spill"
even a strongly correlated center into all **3** channels. Again, maybe this
is fine with actual multi-speaker playback, but this is not what I would
prefer for my application.

Artifacts for the uncorrelated pink noise vary widely. Below are examples of
how they sound with:

* [Dolby Surround upmixer](Demo-UncorrI_Dolby.wav)
* [A.O.M. Stereo Imager D](Demo-UncorrI_AOM.wav)
* [Waves Audio UM225, Mode 5](Demo-UncorrI_UM225_5.wav)
* [Bertom Phantom Center 2](Demo-UncorrI_Bertom2.wav)

Artifacts for music are also quite interesting. Here are some examples from
the right channel of the resulting LCR upmix—which should be silent, IMO! Note
that the actual level of this channel in the produced upmix was much lower,
but I have normalized it to **-14 dB LUFS** to be able to hear the artifacts
more clearly:

* [Dolby Surround upmixer](Demo-Music_Dolby.wav)
* [DTS Neural:X upmixer](Demo-Music_DTS_N.wav)
* [Bertom Phantom Center 2](Demo-Music_Bertom2.wav)
* [A.O.M. Stereo Imager D](Demo-Music_AOM.wav)

Here is a beautiful diagram with the summary. None of the upmixers is perfect,
there is always a tradeoff between the degree of channel separation and the
induced artifacts. It seems that for my needs Halo Upmixer works the best
(it’s at the top position on the chart):

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZ93MameG90c9oX8Wy554LFhO3vVz6QiYCfAOkEkMG0lGPgAB7OPMYa4eqKr17J-LR_mtFGZ8C0JjpYJUHrPVaKcUOzLQnpcm1OdwwhVd6_FRDK4DTbkTPegwjp4D9WdTBhniFUfkn_8SlOyC_SdkohbiezB1ZLtK-peYIzb8LQaCjv1ZschyphenhyphenRecSTMm-e/s16000/center-separation-and-quality.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZ93MameG90c9oX8Wy554LFhO3vVz6QiYCfAOkEkMG0lGPgAB7OPMYa4eqKr17J-LR_mtFGZ8C0JjpYJUHrPVaKcUOzLQnpcm1OdwwhVd6_FRDK4DTbkTPegwjp4D9WdTBhniFUfkn_8SlOyC_SdkohbiezB1ZLtK-peYIzb8LQaCjv1ZschyphenhyphenRecSTMm-e/s540/center-separation-and-quality.png)

Other plugins / upmixers are listed in clockwise direction, so the next best
is actually the **Bertom Phantom Center** which I was using before—it has the
known problem with artifacts. Then came the hardware implementations of
upmixers from AV 7704 with **Auro 2D** having the best
quality. **A.O.M. Stereo Imager D** could be ranked higher than them because
it offers separation which is close to ideal (better than Bertom Phantom
Center!), however for some reason it has pretty bad aliasing revealed on a
simple dual mono sine signal:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsjKpDY8qRmqMuihMW3eQHmTnMMsI5LE81xz19Rbg_alixusdZt1fjoktJ6053CijEU_nfuZYCu2Z25kfN4ZGzeZr_j9m5bCNVQaFh-g4HBrEoeQojYuwFloqq8ofk4IAME8r7qNjJomUadIzRrYawEQ6FgbdI0WsSNHujHBl7h3lmFOLaqRalcgEWvFZH/w640-h470/StereoImager-THD.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsjKpDY8qRmqMuihMW3eQHmTnMMsI5LE81xz19Rbg_alixusdZt1fjoktJ6053CijEU_nfuZYCu2Z25kfN4ZGzeZr_j9m5bCNVQaFh-g4HBrEoeQojYuwFloqq8ofk4IAME8r7qNjJomUadIzRrYawEQ6FgbdI0WsSNHujHBl7h3lmFOLaqRalcgEWvFZH/s800/StereoImager-THD.png)

Note that they do not appear if I leave the knobs for Center and Side gains at
their default value, but they show up as soon as I start moving them. I
contacted A.O.M. about this issue, and their reply was rather edgy, stating
that they are not going to fix any "imperfections" in order to avoid
potentially changing the sound of the plugin—oh, well.

Finally, cheaper upmixers by **Waves Audio** seem to have low cost for a
reason—they are not very good at separating out the center channel, and
exhibit strong artifacts on some of my test signals.

## Conclusion

I ended up purchasing Halo Upmixer (just the basic version)—I think it’s worth
its money. One big disadvantage of it is reliance on the **iLok** copy
protection system which requires use of a USB dongle (that’s in 2025!). I set
it up on my MacBook Air which I use as a portable setup. For a more stationary
setup I can use **Auro 2D** on Marantz AV7704 (note that I haven’t tried that
for real, so there might be caveats).

I plan to come up with another post which dives deeper into the analysis of
these artifact problems. It’s interesting to see how the artifacts look on
visualizations.
