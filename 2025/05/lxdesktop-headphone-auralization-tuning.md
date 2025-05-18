# LXdesktop Headphone Auralization Tuning

This post continues the previous post [LXdesktop Auralization with
Ambisonics](/2024/12/lxdesktop-auralization-with-ambisonics.md) providing
more details on the tuning of the chain that I have built, as well as some
listening impressions of myself and from other people to whom I have demoed
the setup.

## Evaluation of the Initial Version by Listeners

People who were participating in the listening demo were already familiar
with the "immersive audio" technology with its implementations on Android
and iOS as well as how binaural renderings done by Dolby Atmos and MPEG-H
authoring tools sound. They also understood how head tracking works, and
why it is needed. Still, everyone listening was surprised with a very wide
and externalized image provided by the ambisonic rendering. Another point
many people noticed was that when rotating the head, the scene was rotating
smoothly, with no perceivable "jumps" of the phantom center which usually
present on traditional discrete channel spatializers as one turns their
head in the direction of the left or right virtual speaker.

However, they have also noticed some drawbacks:

 - Some of the listeners have noted the "fuzziness" of the reproduced sound
   sources.
 - For some of the listeners the center image was feeling unnaturally
   elevated.
 - As people were switching between "raw" headphone playback (on Sennheiser
   HD600) and the binaural render, they noted that they wanted to get more
   bass for the latter.

I decided to take some time to address this feedback, and this had led me
to making some improvements for my playback chain.

## Improving Phantom Center Naturalness

The problem of the elevated phantom center frequently occurs when listening
to binaural records in headphones. It may also occur when listening to
regular stereo records with stereo speakers. Many people note that when
panning a mono source using amplitude panning between the left and the
right speaker, the trajectory of the rendered source may have a "rainbow"
shape, meaning elevated center.

Although the manifestation of the problem is the same, the reasons for its
occurrence are different for the speaker and the headphone playback. For
the playback over stereo speakers commonly cited reasons are:

1. Presence of reflections which make the phantom center image to be
   perceived as more fuzzy compared to the acoustic sources that originate
   mostly from one speaker.

2. Speakers are often not placed to have their acoustic center at the eye
   (ear) level, and this introduces a vertical component into the recreated
   sound scene.

3. Other spectral colorations caused by acoustic interference may create
   more energy in the bands that are associated by the brain with vertical
   sources. In the absence of visual clues, the auditory system assumes
   that the sound from an invisible source comes somewhere from above.

For headphone playback, especially when doing "3D", "binaural" or
"immersive", one of the common problems is the mismatch between the
listener's own and the simulated HRTFs. Similar to the reason 3. for the
speaker playback, mismatched HRTFs can also push more energy into the
frequency bands associated by the brain with vertical source
placement. This is a quote from [the
interview](https://en-us.neumann.com/newsroom/the-man-behind-the-neumann-ku-100-dufytw)
with the "father" of the Neumann KU-100 dummy head Stephan Peus describing
this problem in the context of binaural recordings made with it:

>  We have also changed the "pitch angle" of the ears somewhat. In
>  listening tests with the KU 81, it had been noticed that sound sources
>  in the horizontal plane usually tended to be perceived slightly upward
>  during reproduction. This is related to a characteristic “dip” in the
>  horizontal frequency response of our outer ears. For every natural ear,
>  that dip is at a slightly different frequency. This does not interfere
>  with natural hearing, because we “adjust” the location of sound sources
>  with the help of our eyes throughout our lives. If we are now given a
>  certain configuration by the dummy head, we cannot correct visually. As
>  it happened, the aforementioned dip in the horizontal frequency response
>  of the KU 81 caused sound events from the front to be perceived as
>  slightly shifted upward. In the KU 100, we therefore adjusted the angles
>  of the ear cups relative to the vertical so that the imaging is now
>  correct horizontally and vertically.

Now, imagine what happens when we **simulate** speaker playback over
headphones, via HRTFs of a dummy head! I suppose, all of these problems
combine and affect the perception of the phantom center even stronger. I
can't fix the HRTF issue because in my processor I just use the HRTFs of
the KU-100 head (via the [IEM BinauralDecoder
plugin](https://plugins.iem.at/docs/plugindescriptions/#binauraldecoder)).
However, I was able to some extent fix the "fuzziness" of the phantom
center.

My approach uses the same idea as speaker crosstalk cancellation, however
in my case I did not have to use any actual XTC filters. First, let's recap
the essence of my approach. Using a stereo speaker setup and an Ambisonics
microphone I have captured transfer functions between each speaker and each
microphone capsule in order to simulate real-time recording of the speakers
by the microphone:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjb7RUucI-ouSKE_MyL0kefyodCrm78uIXh_GHdYM8GTDM9D4DYsalu_Oz81GkLfPxP6J8WF-Wz5hMedQIF8xSWXMdkqd85OjRBX55ueJQyHmA4T9scaHEJiXJFtgDQlQjy-OjsxFr4Jcq8U8WQVJ5G7aQfhlqC9w9hs0UOMTm-Y04vs-CSpI_uyIGm4NZH/w640-h362/final-chain.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjb7RUucI-ouSKE_MyL0kefyodCrm78uIXh_GHdYM8GTDM9D4DYsalu_Oz81GkLfPxP6J8WF-Wz5hMedQIF8xSWXMdkqd85OjRBX55ueJQyHmA4T9scaHEJiXJFtgDQlQjy-OjsxFr4Jcq8U8WQVJ5G7aQfhlqC9w9hs0UOMTm-Y04vs-CSpI_uyIGm4NZH/s1024/final-chain.png)

Now we can realize that if we render the left and the right speaker
**separately** (each on its own track), on the output we will get ipsi- and
contra-lateral signals for each of them separately—that gives us **4**
channels: for each combination of left/right speaker and left/right
ear. When mixing these signals for the binaural presentation we can control
how much cross-talk we want to have in the end. First I have tried having
no cross-talk at all—that's the ideal XTC! However this did not sound
natural at all, resembling very much the regular "headphone sound", just
with extra reverb. The resulting phantom center was very close to the face.
I have found that attenuating ipsi-lateral paths by about **6 dB** produces
the most natural result and yields a very compact and clean sounding phantom
center. Recall that HRTFs of the dummy head already incorporate some head
shadowing, this is why the extra attenuation does not need to be excessive.

Did it fix the perceived center elevation problem? Yes, it did! However,
fixing the phantom center this way had a negative effect on the width of the
perceived sound scene—instead of appearing wide in front of me, the left
and right sides have now collapsed close to my ears. Why is that? This has
reminded me of the dilemma that people often mention on audio forums: why
speaker listeners want to reduce the crosstalk between them, while
headphone listeners often want to add crosstalk, via cross-feed circuits or
plugins? The answer is—they are tackling different problems.

As I have noted earlier, the XTC is aimed to fix the coloration and
fuzziness of the phantom center by attenuating ipsilateral audio paths from
stereo speakers to ears, and making the sound waves achieving ears to have
the characteristic closer to a "real" center source in front of the
listener's head.

And the cross-feed mostly fixes reproduction of lateral sources in
headphones. If we consider hard-panned dry sources that only exist in one
of stereo channels, these sound very unnatural on headphones because only
one ear receives the signal for them, resulting in "inside the head"
localization. This is because lateral sound sources occurring outside of
the listener will always be heard by both ears, with natural attenuation
from head shadowing, and time of arrival difference.

So it seems that we need to decompose our stereo signal and separate
"phantom center" signals from lateral signals. In multi-channel and
object-based audio scene representations this decomposition is given, but
for stereo sources we have to do some work. I decided to employ the
approach similar to the one described in the post [Headphone Stereo
Improved, Part III](/2023/12/headphone-stereo-improved-part-iii.md).
I separated the stereo stream into **3** components:

 - mostly correlated components: the "phantom center";
 - mostly uncorrelated components: lateral signals created by
   hard left/right amplitude panning;
 - the rest: components lacking strong correlation, or anti-correlated:
   the ambience.

I thought I could use a multichannel upmixer for this. However, after
experimenting with [the free SpecWeb tool
set](https://www.surroundbyus.com/pub/guides/SpecWebGuide.pdf) and
inexpensive [Waves UM225](https://www.waves.com/plugins/um225-um226) I have
realized that although upmixers use conceptually the same approach for
components separation, their end goal is a bit different because their
target is a multi channel speaker system. Thus they are designed to
"spread" virtual sources softly between pairs of speakers, for example, the
phantom center is also "translated" into some energy in the left and right
channels, but I need to extract it in almost "solo" fashion. Also, in
multichannel setups there are typically no dedicated channels for
"ambience", and ambient components are also spread across all channels. It
is possible that with some practice I could set up an upmixer to avoid
spreading and do what I need, but decided to leave that for later.

So, instead I decided to use the Bertom "Phantom Center" plugin for this
operation. But how to extract lateral sources? While the phantom center is
composed of fully correlated components, the "residue"—the non-correlated
components is composed from a mix of lateral and "diffuse" sounds. So I
came up with the following topology for extracting lateral sounds, which
uses both the "Phantom Center" and Mid-Side approach:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguRdTioDH2RfJHMKps51dzED8yTkdHamixCo_Cr00uTJD3zblupMVoL8xrskHm_nfm_iu-xRX9rZGqrSv1Ad901RvSUO0N1zdeta40NJBE1bnz9Jv-axkvxSfCRxmQYj4VAO32xvCFo-vdoALyRNyF_IBszgA2meLXfKFswcVZyQ4bZGLb7L4SoiC8BreR/w640-h342/3ComponentSeparation.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguRdTioDH2RfJHMKps51dzED8yTkdHamixCo_Cr00uTJD3zblupMVoL8xrskHm_nfm_iu-xRX9rZGqrSv1Ad901RvSUO0N1zdeta40NJBE1bnz9Jv-axkvxSfCRxmQYj4VAO32xvCFo-vdoALyRNyF_IBszgA2meLXfKFswcVZyQ4bZGLb7L4SoiC8BreR/s891/3ComponentSeparation.png)

The idea is that if we invert one of the channels, and process the result
via the "Phantom Center", it will extract the anti-correlated, "diffuse"
components. This way we can separate them from lateral components and end
up with **3** sound "streams" that I have enumerated above. To illustrate
the result, here is how this plugin setup separates a set of Dirac pulses
which correspond to different source positions, based on their correlation:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQtwYlk37J9ZEbEmfboTbevf1ydsi0j8KoTHBAza7s3bm0tEmiQ7z_rS_PkV3jzO3B19vWW2ZeximbWItYGLaKv9Rd83xUl8M0Hjs_2A2qWST6VftNIN5RstryiYPKeYKV-MN05nEgXnRMAaDh4nyl7nvTtEFieL0R2IcPcp8x_bRkTZLI5GZjqCFGZz40/w640-h346/StereoDecomposition.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQtwYlk37J9ZEbEmfboTbevf1ydsi0j8KoTHBAza7s3bm0tEmiQ7z_rS_PkV3jzO3B19vWW2ZeximbWItYGLaKv9Rd83xUl8M0Hjs_2A2qWST6VftNIN5RstryiYPKeYKV-MN05nEgXnRMAaDh4nyl7nvTtEFieL0R2IcPcp8x_bRkTZLI5GZjqCFGZz40/s1886/StereoDecomposition.png)

If you want to refresh your understanding of interchannel correlation,
please refer to my old post [On Mid/Side
Equalization](/2023/06/on-midside-equalization.md). Of course, this
decomposition only works correctly for amplitude-panned sources, because
the correlation meter in the "Phantom Center" plugin uses zero-lag setting,
however in practice this approach yields good results for stereo records.

Note that in the end I have settled on **98%** setting for the "Phantom
Center" to avoid sharp transitions between the streams.

So, from this preprocessor we have **3** pairs of outputs (the
aforementioned **3** streams). Each pair is processed independently, and
moreover, each channel of the pair has its own speaker-to-binaural
processing path, which yields **4** channels, thus at the output we have
**12** channels, each of them representing a certain component of the
stereo field, as rendered via particular speaker, on the path to each
ear. This gives us full control on how to mix these components for binaural
playback and allows us to use both XTC and cross-feed at the same time,
applied to proper kinds of acoustic sources. I have ended up with following
mixing matrix in Reaper:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEIl9Mmx4XLnyAl2uQOLWc2vXy9j8Qd9A_JfcvHlqO81SosYLf9d3_1oW-v6XdjfBKDh-UWUffjzhL86QA7EM0QCMr8eLTY8FLgPhbbVaP2WODDruFq2VivTzGRKRgAtRnDIo3Q1-1SaP8M3AKMAnEZptjWKwjBiT5f8hkr5K4DtIpEXRha_0-btIstmjq/s320/DecompositionDownmix.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEIl9Mmx4XLnyAl2uQOLWc2vXy9j8Qd9A_JfcvHlqO81SosYLf9d3_1oW-v6XdjfBKDh-UWUffjzhL86QA7EM0QCMr8eLTY8FLgPhbbVaP2WODDruFq2VivTzGRKRgAtRnDIo3Q1-1SaP8M3AKMAnEZptjWKwjBiT5f8hkr5K4DtIpEXRha_0-btIstmjq/s422/DecompositionDownmix.png)

From left to right, the first **4** channels are the center: Left speaker
to left ear, and to right ear, then right speaker to left and right ear.
Then the next **4** channels are the lateral components, in the same order,
and the last **4** channels are the ones representing "ambience".

As a bonus, I had realized that by defeating the effect of head shadowing
for ambient components by boosting ipsi-lateral paths I can achieve even
better externalization of the virtual sound scene. In my previous
spatializer I had achieved the same effect by just boosting uncorrelated
components.

I have made the final adjustments to the balances by listening to
correlated and anti-correlated pink noise, making sure that they both sound
centered. I ended up wondering why the required interchannel balance is not
symmetric, and my hypothesis is that first, of course use of non-individual
HRTFs may cause this, and the second reason may be due to not fully
symmetric speakers setup in the room (see my [earlier posts on
LXdesktop](/2024/08/lxmini-desktop-version-lxdesktoppart.md)). In future I
will try to correct that by making a better speaker setup.

## Fixing the Bass

Of course, as audiophiles we always enjoy rich and deep bass, and headphone
makers usually try to add more bass to their headphones. As I and other
people have found while comparing "raw" stereo sound to the sound of the
binaural rendering, the latter was lacking bass noticeably. That seemed
strange to me, considering that I have a good subwoofer and I never feel
the lack of bass when listening to my LXdesktop setup.

Trying just to boost up the bass of the binaural renderer's output led to
excessive on the head vibration of headphone drivers which was ruining the
externalization effect. This needs to be done in some other way, I decided.

After reading a bit more about the implementation of the BinauralDecoder, I
noted that it uses [the *MagLS*
approach](https://pub.dega-akustik.de/DAGA_2018/data/articles/000301.pdf)
for interpolating between sampling points of measured HRTFs. This approach
is intended to minimize the amplitude differences only. Although the
authors say that this approach is only used starting at **2 kHz** which may
imply that interaural time differences are preserved for the frequencies
below, I decided to check what will happen if I actually add them.

Since I have separate signal paths for the left and right ear, I decided to
employ [my "almost linear phase" ITD
filters](/2023/09/almost-linear-phase-crossfeed.md), and I was not
disappointed—the sense of a good deep bass has returned back to my binaural
renderer! It's interesting that these filters have flat amplitude, they do
not boost the energy of the bass at all. Yet, somehow adding a correct
shift in phase between the ipsi- and contra-lateral ear makes the bass
sound to be perceived as stronger. While doing A/B switching between
filter/no-filter configuration I have realized that maybe this phase shift
allows the auditory system to "focus" on the bass and perceive it as coming
from a compact source. Whereas mostly in-phase bass creates an impression
of some ambient rumbling, and is not perceived to be as strong, even at the
same energy level.

After some experiments with the cutoff frequency, I have ended up with
**500 Hz** for the "center" source, **750 Hz** for the lateral components,
and no ITD filtering for ambience. Raising the cutoff frequency or trying
to apply the filter to the ambient component was causing moving of virtual
sources closer to the face, and I did not like it.

One technical issue that use of this block creates is addition of latency.
Since the filters are symmetric linear phase style, and they need good
resolution in the bass region, they create a delay of **170 ms**. And since
they have to be placed **after** the BinauralDecoder, this latency affects
the head tracking.

## Adjusting the Tonality

It's never easy to tune an audio reproducing system to the ideal tonality
(does one even exist?). My binaural renderer is of course not an exception
to this rule. The first difficulty in obtaining the right tuning is that
there are many uncertainties in how I had captured the speakers and the
room, and also how the captured system is rendered using the binaural
renderer and the headphones. The second reason is that the perceived
tonality changes depending on how the brain perceives the location, the
size, and the distance to virtual sources.

So we don't know how precise our measurements are, and we need to use our
perceptions for tuning as well. However, in order to do that efficiently we
would like to be able to make instant comparisons with some reference. One
good reference I have found, thanks for [Archimago's
post](https://archimago.blogspot.com/2025/03/musings-trust-empirical-testing-and.html),
was the binaural version of the ["Touch
Yello"](https://shop.yello.com/en/products/yello-touch-yello-15th-anniversary-2)
album released as a Dolby Atmos remaster in 2025 on a Blu-ray. The binaural
version sounded quite good when listening with Sennheiser HD600 so I
decided to use the frequency domain measurement of it as a reference for
fine-tuning my binaural chain.

The Blu-ray contains both the stereo and the binaural versions, so I was
able to measure frequency curves both for the binaural rendering of the
stereo version via my chain, and of the original binaural version. Below is
the result of comparison of ERB smoothed curves. The FR of the original
binaural version is in blue and red, and the FR of my version is orange +
light teal:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2NdxWllX_pUR4jQ2JOKlSRAz3e_8rBcork-RaRslF2Hs8smip2mfixzxVNmohjhz2X4GyJTnIATmQUQEJBIUHP8k14pGLByeV5kq7SjxH12DwYxmNSBNRAlOhVeyxGZ342IhPjbORV5SFLh8LBHemIKBOO5Zc0ChfXRq1OowNK4gWGdRREqR01XB4kJ2g/w640-h474/yello-out-of-dawn-binaural-HD600.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2NdxWllX_pUR4jQ2JOKlSRAz3e_8rBcork-RaRslF2Hs8smip2mfixzxVNmohjhz2X4GyJTnIATmQUQEJBIUHP8k14pGLByeV5kq7SjxH12DwYxmNSBNRAlOhVeyxGZ342IhPjbORV5SFLh8LBHemIKBOO5Zc0ChfXRq1OowNK4gWGdRREqR01XB4kJ2g/s800/yello-out-of-dawn-binaural-HD600.png)

It can be seen that the official binaural version has somewhat V-shaped
(raised both bass and treble, with a dip in the mids) tuning compared to my
rendering. My initial plan was to try to match them as closely as
possible. However, as I have quickly understood, due to the fact that my
rendering sounds as being farther from the listener than the original
binaural version, their spectral shapes can't be just the same. Instead, my
approach was to find the regions where there is a significant difference
and then try adjusting these bands while listening to the changes in
tonality and perception. The goal was to obtain more natural tonality for
my rendering and minimize the changes in **perceived** tonality when
switching back and forth between mine and the "official" binaural versions.

In the end my version sounds more spacious and is better externalized,
while the original binaural rendering sounds closer to the face and is much
"denser". You can compare the results yourself by using YouTube and Google
Drive links below (the Drive version uses AAC at **320 kbps** while YouTube
transcoded it into Opus **140 kbps**). Note that although my rendering is
done specifically for Sennheiser HD600, you can anyway use any reasonable
headphones to check it. I even used Apple EarPods for some testing! Just
one note—if you are listening on modern headphones that support "spatial
audio", make sure you turn it off and just use the plain stereo mode:

 - [YouTube | Yello Stereo to Binaural demo](https://youtu.be/WE5dc3kYS5o)
 - [Drive | Yello Stereo to Binaural
demo](https://drive.google.com/file/d/1TDdHrEyF-F5NS3nE79X-DSwyLGMnKzLu/view?usp=drive_link)

(Of course, these are provided for educational or personal use only).

A question one can ask—what is it besides the frequency balance that makes
the original binaural rendering to be perceived very close to the face,
while my rendering sounds much more externalized? One reason I have found
is the objective measurement of the interaural cross correlation
(IACC). Below are two graphs comparing IACC for these two binaural versions
for the time position about **0:30**:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJuNfNdANX-ot2Y2Zdi26jmxId_2VkjI_bJyPiVdNwauNIFON1AfHt2Ow9i9AEAiWHhAoHtG93vffChY9LRfGOm7NROPoLLLOOXPr1Oo6SzhlL3teTVgECke313k15SFT2mZ2vAoU0hwdHJUMwgrLijMXoae8exj-7pURTPGxADmqpc-7Yh4lNN0oAvUuu/w400-h281/Yello-IACC-Original.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJuNfNdANX-ot2Y2Zdi26jmxId_2VkjI_bJyPiVdNwauNIFON1AfHt2Ow9i9AEAiWHhAoHtG93vffChY9LRfGOm7NROPoLLLOOXPr1Oo6SzhlL3teTVgECke313k15SFT2mZ2vAoU0hwdHJUMwgrLijMXoae8exj-7pURTPGxADmqpc-7Yh4lNN0oAvUuu/s558/Yello-IACC-Original.png)

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9SGvmHI_pGHcWHXOHQwHRBtm2UqkFjaBiV6wRKFR_CmBMUyw1XeuBrMrYUfvReScbiF81C5FsDXvrzGnW56cjz2IaAREys5vIBNXvgLxqvn2a_RXvv4QBNeqttlAySXsX2KiZGhFM0qU4U6knwQzVahdCQimLwQA-mLcKaOLjs6k4HRBqUQfZSC9GMd-P/w400-h284/Yello-IACC-B3C.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9SGvmHI_pGHcWHXOHQwHRBtm2UqkFjaBiV6wRKFR_CmBMUyw1XeuBrMrYUfvReScbiF81C5FsDXvrzGnW56cjz2IaAREys5vIBNXvgLxqvn2a_RXvv4QBNeqttlAySXsX2KiZGhFM0qU4U6knwQzVahdCQimLwQA-mLcKaOLjs6k4HRBqUQfZSC9GMd-P/s558/Yello-IACC-B3C.png)

We can see that my rendering is much less correlated in the high frequency
region starting from **2 kHz** which corresponds better to a more spacious
listening experience. IACC is one of the metrics used by acousticians for
objectively comparing sound of different concert halls (see the book by
Y. Ando and P. Cariani ["Auditory and Visual
Sensations"](https://link.springer.com/book/10.1007/b13253)) and different
microphone setups (see the book by E. Pfanzagl-Cardone ["The Art and
Science of Surround and Stereo
Recording"](https://link.springer.com/book/10.1007/978-3-7091-4891-4)).

Another "source of truth" for the tonality that I have found are recordings
produced by [Cobra Records](https://cobrarecords.com/). Whereas the Yello
binaural production was a result of binaural rendering done from Dolby
Atmos master, recordings done at Cobra are real acoustical recordings [done
simultaneously](https://positive-feedback.com/reviews/music-reviews/binaural-recordings-cobra-records/)
by conventional multi-mic setups for stereo and surround, and using the
KU-100 head for the binaural version. If you recall, the IEM
BinauralDecoder plugin is also based on KU-100 free field HRTFs, and thus
comparing the rendering of Cobra's stereo records processed by my chain
with their binaural versions makes quite a fair apples-to-apples comparison.

Unfortunately, I do not know for which headphones their binaural version is
intended for. I can imagine it should be for some diffuse field equalized
headphones. So, as an example, here is an excerpt from
["Extemporize"](https://cobrarecords.com/catalogue/albums/extemporize/)
piano album, where my chain is rendered for HD800, again both as YouTube
and "offline" files:

 - [YouTube | Schubert Stereo to Binaural demo](https://youtu.be/2G7yVCFgWr8)
 - [Drive | Schubert Stereo to Binaural demo](https://drive.google.com/file/d/1Mui4DQAlJDHYTW96CGIOU4i8dsljEGs6/view?usp=drive_link)

One thing that I have noted when comparing my binaural rendering with
Cobra's binaural recording is that the latter for some reason have left and
right channels swapped, and I have fixed that for my comparison test.  The
difference between these recordings / renderings is more subtle than with
Yello track—the stereo recording is really good by itself! Still, I hope
you could get the similar experience of the sound moving away from the head
when listening to the rendering via my processing chain.

For completeness, this is a similar comparison of ERB-smoothed frequency
responses of these renderings:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDGaw9NPICLDUFf1JPWIwt10QGnDqo0iMLt0QkO1CCtv1LP2pGcKKLVOGtiBKrOm0hGVPFcj_5JrzTYhVJCSy6XKFYkTC4WZNIN7sTvqO5ndOcyUIM-6pSh-YrBGVLCCYeVm97czNgXduW-z99_WEFRqv8TEh_Ed1hFnS4pCvGpyPN5Bdv4f9UgRx1uX1Q/w640-h496/schubert-d-899-binaural.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDGaw9NPICLDUFf1JPWIwt10QGnDqo0iMLt0QkO1CCtv1LP2pGcKKLVOGtiBKrOm0hGVPFcj_5JrzTYhVJCSy6XKFYkTC4WZNIN7sTvqO5ndOcyUIM-6pSh-YrBGVLCCYeVm97czNgXduW-z99_WEFRqv8TEh_Ed1hFnS4pCvGpyPN5Bdv4f9UgRx1uX1Q/s800/schubert-d-899-binaural.png)

Again, it's a pity that producers of these binaural recordings do not
specify which headphone would they recommend for listening to them. The
page at Cobra Records site
[says](https://cobrarecords.com/information/binaural/) "any brand or style
will work (nothing fancy required!)"—to me that sounds too generous. I
know, you can hear **a difference** using any headphones, but for actually
experiencing "being there" the tonal balance of the headphones used for
binaural reproduction is very important.

## Using More Headphones for Auralization

With the equalization which needs to be applied to the headphones in order
to achieve the "natural" equalization for the immersive playback all of
them start to have similar tonality. Yet, the impression that we have when
listening to them is still not the same. Even with the same EQ target,
different headphones create different listening impressions due to
differences in their drivers and their interaction with our ears.

Another important aspect of headphones apart from how they sound is how
they feel on the head: their clamping force, size of the earpads, the
weight etc. I have found Sennheiser HD800 and Shure SRH1840 to be very
comfortable for long listening sessions. However, unfortunately neither of
them is on the list of headphones originally measured by B. Bernschütz on
KU-100 and thus they are absent from [the EQ
list](https://git.iem.at/audioplugins/IEMPluginSuite/-/tree/master/BinauralDecoder/Source/EQ?ref_type=heads)
of the IEM BinauralDecoder plugin.

However, I'm lucky to have access to the state-of-the-art headphone
measuring system B&K 5128, so I used it to derive EQ filters turning HD800
into HD600 which are on the list of the BinauralDecoder. Note that EQuing
headphones to sound like some other model is actually a non-trivial
task. At the last NAMM convention I had a conversation with a
representative of [TiTumAudio](https://www.titumaudio.com/) company that
makes headphones that can imitate a number of commercial headphones. He
noted that actually copying the sound of other headphones requires tweaks
that are beyond simple LTI processing (that is, EQing). This is why I
specifically have chosen HD600 as the target for HD800 as their drivers are
probably the closest in their non-linear properties, compared to headphones
from other makers. In a similar fashion, I use AKG K240DF (which are on the
BinauralDecoder) list as the target for other headphones by AKG,
Beyerdynamic DT990 as the target for other Beyers, and discontinued Shure
SRH940 for more modern models.

One technical challenge I have encountered when creating filters for these
conversions is that the measurements for the left and right ear of the
B&K 5128 never match **exactly**. Instead of using an average between left
and right ear, I decided to leave them different. However, in order to
avoid distorting phase relationship between left and right channels, I have
made these conversion filters linear phase (8k taps). Since that creates an
extra delay, I put this correction block before the SceneRotator in order
to reduce the latency of head tracking.

## Complete Processing Chain

Summarizing the processing blocks mentioned in the previous sections,
this is what I ended up with:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTS6xAs9tXtcXJ-DKSHiCf94TQdNZuWKD9xzlHs4nUX48dehQnoBfnShXLHx2e1ZnvYw1ATcWkIBBBtWd2p3Po8Q6NTbqoQxV_n_qc1awpKfyEmDrPkMityUijuutFr2Cc4ZGSH_0Vbr-kaFXI55ITv8RwUm7Iu0UpSN4zuDKvD7aHl8HGC66Ts_OdZgDi/w640-h348/CompleteProcessingChain.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTS6xAs9tXtcXJ-DKSHiCf94TQdNZuWKD9xzlHs4nUX48dehQnoBfnShXLHx2e1ZnvYw1ATcWkIBBBtWd2p3Po8Q6NTbqoQxV_n_qc1awpKfyEmDrPkMityUijuutFr2Cc4ZGSH_0Vbr-kaFXI55ITv8RwUm7Iu0UpSN4zuDKvD7aHl8HGC66Ts_OdZgDi/s1131/CompleteProcessingChain.png)

It may look big, but after all these are all only necessary components.
Realistic binaural rendering is not an easy task!

## Music Tracks Used for Evaluation

While iterating on my spatializer, and also during preparation to demoing
it to other people, I have come up with a list of songs available on Apple
Music that have good spatial properties. They represent different musical
styles: classical, pop, electronic, metal, etc. They also represent
different recording styles: acoustic recordings, engineered stereo
recordings, some modern Dolby Atmos tracks (rendered into stereo).

Roughly, I can classify them into several categories based on which
attributes of the reproduction they can help testing. Of course, some
tracks do belong to several categories.

 1. Great stereo acoustic recordings with natural vocals and instruments
    - All Roads to the River / **Breaking Silence** by Janis Ian
    - Also sprach Zarathustra, Op. 30, TrV 176 by Richard Strauss
    - Grandmother / **The Raven** by Rebecca Pidgeon
    - L'Égyptienne / **Les Sauvages** by Béatrice Martin
    - No Flight Tonight / from **Chesky Records 10 Best**, by The Coryells
    - Pipeline / **Two Doors** by Michael Shrieve
    - The Firebird Suite (1919 Version): V. Infernal Dance of King Kaschey by Igor Stravinsky
    - The Wrath of God: Pt. 1 by Sofia Gubaidulina
    - Violin Concerto No. 1: III. Quarter note by Philip Glass

 2. Engineered records with strong emphasis on spaciousness
    - An Echo of Night / **The Pearl** by Brian Eno & Harold Budd
    - An Ending (Ascent) / **Apollo: Atmospheres and Soundtracks** by Brian Eno
    - Animal Genesis / **Oxymore** by Jean-Michel Jarre
    - Barco / **Insen** by Ryuichi Sakamoto & Alva Noto
    - Contrapunctus 8, A 3 / **Laibachkunstderfuge** by Laibach
    - Day One (Interstellar Theme) / **Interstellar (OST)** by Hans Zimmer
    - Get Your Filthy Hands Off My Desert / **The Final Cut** by Pink Floyd
    - High Hopes / **The Division** Bell by Pink Floyd
    - Resonance / **Resonance** by Boris Blank
    - Ripples in the Sand / **Dune (OST)** by Hans Zimmer
    - The Snake and the Moon / **Spiritchaser** by Dead Can Dance
    - Troubled / **Passion (The Last Temptation of Christ OST)** by Peter Gabriel

 3. Synthesized stereo scenes, not as "spacious" but still interesting
    - Another One Bites the Dust / **The Game** by Queen
    - Birds / **Nameless** by Dominique Fils-Aimé
    - Bubbles / **Wandering—EP** by Yosi Horikawa
    - Jeremiah Blues (Part 1) / **The Soul Cages** by Sting
    - Me or Him / **Radio K.A.O.S.** by Roger Waters
    - On the Run / **The Dark Side of the Moon** by Pink Floyd
    - Rocket Man / **Honky Château** by Elton John
    - Space Oddity / **David Bowie (aka Space Oddity)** by David Bowie
    - The Invisible Man / **The Miracle** by Queen
    - Voice of the Soul (1996 Demos) (Instrumental) / **The Sound of Perseverance** by Death
    - What God Wants, Pt. I / **Amused to Death** by Roger Waters

 4. Not quite "spacious" but with good "visceral impact"
    - Dyers Eve / **...And Justice for All** by Metallica
    - Flint March / **Small Craft On A Milk Sea** by Brian Eno, Jon Hopkins & Leo Abrahams
    - Heatmap / **Warmech** by Front Line Assembly
    - Lie to Me / **Some Great Reward** by Depeche Mode
    - Single Blip / **Ssss** by VCMG

When demoing, I realized that most of these tracks are unknown to most
people. They were generally choosing either Hans Zimmer's songs, or Pink
Floyd, and for some reason the Rocket Man was also popular.

## Remaining Issues (Future Work)

Essentially, I have two kinds of problems: one kind stems from the fact
that instead of using artificial models of speakers and the room I use a
capture of real speakers in a real room, so any of its flaws get
aggravated by the processing and the listening on headphones. The second
kind of problems lies purely in the DSP domain and hopefully can be fixed
more easily.

### Fixing Speaker Setup and Room Asymmetry

As noted in the section "Improving Phantom Center Naturalness", my
Ambisonic capture of the room is not perfectly balanced thus requiring some
correction. This is not the problem of the capture process, but rather the
fact that it captures the imperfections of my setup, and they get
aggravated by headphone listening. Having a better, more symmetric setup
should help.

### Reducing Room Ringing

This issue I have encountered when I was listening to male vocals
recording. This was opera tenor [Joseph
Calleja](https://en.wikipedia.org/wiki/Joseph_Calleja) performing "I
Lombard" by Verdi. I had experienced a very uncomfortable sensation of
"ringing" and "compression" in the sound of Calleja's singing. I had
compared my rendering to the original recording and noticed that some of
these artefacts are already there, due to the reverberation of the hall
when the recording was made. Then I listened on the speakers, and noted that
these artefacts are even more pronounced due to the reverberation added by
my room. I think the primary sources for these are comb filtering and
flutter echo that interact with the harmonics of the singer's voice.

I have realized that if I had invited Joseph Calleja to actually sing
in my room, I would likely hear this compression and ringing as well. I
recalled that I actually can notice these artifacts when listening to live
vocals while sitting in acoustically mediocre halls.

What can I do about that? Ideally, I would like to reduce the reverberation
of my room captured by the IRs, and treat the reflections. However it's not
easy to apply this cleanup post hoc on already captured IRs. I decided that
next time I will probably put some sound absorbing materials at the back
side of the microphone in order to produce a bit more "dead" IRs.

### Achieving Better Quality of Stereo Field Decomposition

As noted in the paper by E. Vickers ["Frequency-Domain Two- to
Three-Channel Upmix for Center Channel Derivation and Speech
Enhancement"](https://aes2.org/publications/elibrary-page/?id=15112),
frequency-domain audio processes may produce certain artifacts, often
described as "musical noise" or "watery sound."  This is indeed what I can
hear when I decompose pink noise into correlated and anti- and uncorrelated
components and then listen to each of them separately. When the processed
sound gets combined back together, these artifacts are mostly masked,
however they still may pop up when listening to music with lots of
transients. Ideally, I would like to find a more "high fidelity" way of
decomposing the stereo sound field.

I have contacted Tom from Bertom Audio regarding the artefacts produced by
the Phantom Center plugin, and his answer was that unfortunately nothing
can be done to the current version of the plugin to get rid of them
completely. So a possible solution to this may be studying the way for
achieving the same decomposition using one of those expensive high quality
upmixing plugins.

### Solving the Latency Problem of ITD filters

As I have previously noted, the ITD filters which are required for good
bass reproduction when binaural rendering is done via IEM BinauralDecoder
have noticeable latency. So I either need to find a binaural renderer for
Ambisonics which produces similar inter-aural phase, or re-create the
filters in some mixed-phase way, with much lower latency.
