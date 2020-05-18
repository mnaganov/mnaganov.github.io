# Reconstructing SPL Phonitor Mini Crossfeed with DSP

## Motivation

When it comes to using headphones, I'm a big fan of the
[crossfeed](https://en.wikipedia.org/wiki/Crossfeed) effect. I'm not
sure if it really reduces fatigue (I haven't seen any studies on this
topic), but it definitely helps in "pushing" the sound out of the head,
and helps to perceive spatial cues of good stereophonic recordings the
same way as it happens when listening on speakers.

For a long time I was using the [BS2B
plugin](http://bs2b.sourceforge.net/) inserted into the output chain of
Pulse Audio on Linux. And I was pretty happy with it until I bought [O2
headphone amplifier /
DAC](https://www.mayflowerelectronics.com/shop/digital-to-analog-converters/objective2-odac-combo-with-rear-power/).
One for the defining features of this amplifier is a very low output
impedance which helps in reproducing bass frequencies faithfully (see
the [NwAvGuy's
explanation](http://nwavguy.blogspot.com/2011/02/headphone-amp-impedance.html) why
excessive output impedance rolls off bass frequency response). Coupled
with Beyerdynamic DT770 headphones, this had revealed a huge defect in
the BS2B plugin—its overly aggressive bass amplification, as a result
of mixing in bass frequencies from the opposite channel (the essence of
crossfeed).

I changed BS2B's setting to the most conservative
"650 Hz, 9.5 dB"—this helped to reduce the devastating effect of the
bass amplification, but had almost moved the sound back into my head.
I started looking for alternatives.

One particular amplifier that attracted my attention was [SPL Phonitor
mini](https://spl.info/en/products/headphone-amplifier/phonitor-mini/overview.html)
—the little brother of monstrous and expensive Phonitor 2, offering
the same (albeit with a more modest set of parameters) crossfeed
feature. Phonitor mini also has very low output impedance, so I decided
that people who were tuning its crossfeed feature definitely wouldn't
allow explosive basses to sneak in. And I was right—Phonitor mini
sounds amazing, and its crossfeed feature is indeed very nicely tuned.
Phonitor's crossfeed pushes the sound out of the head as expected, but
at the same time doesn't very much alter the sense of the original
sound.

[<img src="https://2.bp.blogspot.com/-418c7loRa-g/WG8em-F0eRI/AAAAAAAALBI/fcf76bExnM0k7seiVUeiSa5NGIL6QqdPgCLcB/s400/IMG_20170105_190719.jpg" width="400" height="151" />](https://2.bp.blogspot.com/-418c7loRa-g/WG8em-F0eRI/AAAAAAAALBI/fcf76bExnM0k7seiVUeiSa5NGIL6QqdPgCLcB/s1600/IMG_20170105_190719.jpg)

Now I've got a new problem—being used to the natural sound of
Phonitor's crossfeed, I started to lack it when I was away. The Phonitor
(even "mini") is definitely not a portable device. I ended up buying a
second Phonitor mini, so I can use it both at home and at the office,
but this still didn't solve the problem of listening on the go. Also, I
didn't want myself to be locked in into using Phonitor headphone
amps exclusively.

I started looking for other crossfeed plugins besides BS2B (portable
headphone amplifiers with crossfeed are still a rarity and add some
inconvenience to mobile setups). What I discovered, is that there are
basically two kinds of crossfeed plugins: one class of them is based on
the same ideas as BS2B (the original idea explained by Bauer in 1965,
then extended and improved by [S.
Linkwitz](http://www.linkwitzlab.com/headphone-xfeed.htm), [Chu
Moi](https://web.archive.org/web/20150315000724/http://headwize.com/?page_id=739),
and others), and the other class uses HRTF and room simulation
([ToneBoosters Isone](http://www.toneboosters.com/tb-isone/),
[adv\_xfeed](http://web.archive.org/web/20150325164349/http://www.changstar.com/index.php/topic,1054.20.html))
and even add head tracking ([WavesNx](http://www.waves.com/nx)). Plugins
from both classes does not sound the same as Phonitor's crossfeed—not
as natural I would say. Especially the plugins that try to actually
simulate a pair of speakers in a room—the sound that they produce
definitely isn't intended for enjoying music.

[<img src="https://3.bp.blogspot.com/-yuGnaBUbyVQ/WG8fh-MprUI/AAAAAAAALBM/k7g-2-6BPWAKEVeA-eu1yUsc-7w2ZWszgCLcB/s200/IMG_20170105_192828.jpg" width="151" height="200" />](https://3.bp.blogspot.com/-yuGnaBUbyVQ/WG8fh-MprUI/AAAAAAAALBM/k7g-2-6BPWAKEVeA-eu1yUsc-7w2ZWszgCLcB/s1600/IMG_20170105_192828.jpg)

One crossfeed implementation I've encountered that stood out from the
others was in [JBL Synchros
S700](https://www.jbl.com/over-ear-headphones/SYNCHRO+700.html) active
headphones. This implementation also sounds quite natural, but it is
can't be separated away from these particular headphones, and enabling
it also enables a built-in equalizer, which adds tonal coloration that I
didn't like.

So I finally decided to figure out what is so special about the
Phonitor's crossfeed, and whether it's possible to reproduce it in a
digital form so it can be used on the go, with any DAC, amplifier, and
headphones.

## Analyzing Audio Filters with RoomEQ Wizard

[RoomEQ Wizard (REW)](https://www.roomeqwizard.com/) is an indispensable
tool when it comes to room and loudspeaker acoustic analysis. But it can
be used for analyzing any sound chain. I decided to look into the
characteristics of the crossfeed filter in BS2B plugin, and compare it
with the filter of Phonitor Mini.

There are 3 characteristics that are useful when analyzing how a filter
affects audio signal:

-   *frequency response* of the filter—how does it attenuate or
    amplify each frequency band;
-   *phase response* of the filter—what happens to the phase angle of
    the signal on each frequency band;
-   and *group delay*—it's a derivative of the *phase response*, but
    it is useful on its own, it shows how each frequency band is delayed
    compared to the source signal.

The crossfeed filter mixes into each direct channel sound from an
opposite channel, thus these characteristics need to be specified twice:
for the direct and mixed-in signals.

### BS2B Crossfeed Implementation

In fact, [the page of the BS2B
filter](http://bs2b.sourceforge.net/) shows the *frequency response* and
the *group delay* graphs on Figures **2.1** and **2.2**, respectively.
The **blue** lines are for the direct channel signal, and the **red**
lines are for the opposite channel signal. E.g. if we consider the left
input channel, the blue line on the graphs shows what the filter outputs
on the left output channel, and the red line shows what the filter
outputs on the right output channel, mixing it with the original signal
on the right channel. The **green** line on the frequency graph shows
the frequency response if both input channels receive the same
input—then what you get on each channel is the sum of the direct and
the opposite signal. As we can see, the BS2B filter indeed boosts bass
frequencies.

Note that the graphs shown on the BS2B filter is *theoretical* response.
I decided to measure the actual response with REW in order to be able to
perform apples-to-apples comparison. Here I encountered one shortcoming
of REW—it is designed for real-time measurements and doesn't support
loading of stimulus and response sound files for static analysis. But
this can be worked around. I used REW's Sound Generator dialog for
saving the signal called "Measurement Sweep" as a .wav file (this is the
same signal that REW uses for real-time analysis). This file contains
the sweep in both channels, and I replaced the right channel with
silence in order to be able to consider one input channel alone.

[<img src="https://3.bp.blogspot.com/-FSSPVI-j-6o/WG8qR8Rsz2I/AAAAAAAALBk/igblixdrjQA3ujMxyKmEi9SSzrUMwazdQCLcB/s400/Screen%2BShot%2B2017-01-05%2Bat%2B9.23.53%2BPM.png" width="400" height="107" />](https://3.bp.blogspot.com/-FSSPVI-j-6o/WG8qR8Rsz2I/AAAAAAAALBk/igblixdrjQA3ujMxyKmEi9SSzrUMwazdQCLcB/s1600/Screen%2BShot%2B2017-01-05%2Bat%2B9.23.53%2BPM.png)

Then I processed this sweep .wav file (the stimulus) with
**bs2bconvert** and obtained the response .wav file. I split this stereo
file into two mono files containing each channel separately.

Now I had to trick REW into believing that it's doing a real-time
analysis. For that, I used [Rogue Amoeba's
Loopback](https://www.rogueamoeba.com/loopback/) app (on Mac).
**Loopback** allows creating virtual sound devices that can work like
pipes. I assigned the loopback device to be the default sound output,
and specified it as an **input** in REW. Then I opened the left channel
response .wav in [VLC](http://www.videolan.org/vlc/index.html), started
REW's measurement process, and clicked **Play** in VLC. And it
worked—REW accepted the played back .wav as a response of the system
under measurement. Then I repeated the same steps this time playing the
right channel response .wav.

Here is the *frequency response* graph of the BS2B filter (the
*measured* response as opposed to *theoretical*) with the default
settings "700 Hz, 4.5 dB":

[<img src="https://1.bp.blogspot.com/-fS-eM8yMsx0/XsIV5TbnuGI/AAAAAAAAQ7c/jr-StXjZMHcgn0AtXmn6bFxdJRYIczxsQCLcBGAsYHQ/s640/bs2b-freq.jpg" width="640" height="347" />](https://1.bp.blogspot.com/-fS-eM8yMsx0/XsIV5TbnuGI/AAAAAAAAQ7c/jr-StXjZMHcgn0AtXmn6bFxdJRYIczxsQCLcBGAsYHQ/s1600/bs2b-freq.jpg)

The **light blue** line is the original sweep signal, so we can see how
signals are attenuated. It can be seen that the filter is a bit noisy on
the opposite channel **(red)** at the very end of the spectrum, but I
don't think this can actually be heard.

This is the *phase response* of the filter:

[<img src="https://3.bp.blogspot.com/-1ukgLANRC08/WG8vBKZnfmI/AAAAAAAALB8/FiSAik3yE3sbaS6P1GS6Ln1homJQkxYVgCLcB/s640/bs2b-phase.jpg" width="640" height="348" />](https://3.bp.blogspot.com/-1ukgLANRC08/WG8vBKZnfmI/AAAAAAAALB8/FiSAik3yE3sbaS6P1GS6Ln1homJQkxYVgCLcB/s1600/bs2b-phase.jpg)

Phase is almost left unchanged for the direct channel **(blue)**, but is
bent for the opposite channel **(red)**. Again, some jitter is
visible at high frequencies.

And the group delay:

[<img src="https://4.bp.blogspot.com/-vizUqHgjUn0/WG8wCgdCSWI/AAAAAAAALCE/90jPw3Ajw6kwZ0jvkWTlmkGkjukqNvnOQCLcB/s640/bs2b-gd.jpg" width="640" height="348" />](https://4.bp.blogspot.com/-vizUqHgjUn0/WG8wCgdCSWI/AAAAAAAALCE/90jPw3Ajw6kwZ0jvkWTlmkGkjukqNvnOQCLcB/s1600/bs2b-gd.jpg)

Note that wobbliness in the beginning is probably an artifact of REW's
processing—it shows up even on the original sweep **(light blue)**
which is supposed to be flat. I had to smooth up the graph by 1/3 octave
because group delay, being a derivative is very sensitive to any jitter
in the phase response (and there is actually some jitter at low
frequencies on the phase response graph above).

It can be seen that the opposite **(red)** signal is delayed in the bass
region for approx. **200 microseconds** (**0.2 ms**), and the direct
**(blue)** signal goes forward by **50 microseconds** (**0.05 ms**),
forming a **250 microseconds** delay for frequencies below
**1000 Hz** which is supposed to provide [binaural cues for the sound source
localization](https://en.wikipedia.org/wiki/Sound_localization#ITD_and_IID).

### Phonitor mini Crossfeed Implementation

Measuring Phonitor mini with REW is a straightforward task—just need to
connect it criss-cross to a sound card. The crossfeed matrix of Phonitor
has different settings: processing strength, emulated speakers angle,
and center channel attenuation. I used the following settings for the
measurements: **medium** strength, **30°** angle, **-1.2 dB**
attenuation.

On the graph below, the *frequency response* of Phonitor (direct **blue** and
opposite **red**) is plotted against BS2B's (direct **green** and
opposite **yellow**):

[<img src="https://4.bp.blogspot.com/-u3PPgpKLE00/WHGf3E7yojI/AAAAAAAALCg/mIK4fYxsOxc_HzBxVpKip3iDSKlj68qHQCLcB/s640/phonitor-vs-bs2b-freq.jpg" width="640" height="336" />](https://4.bp.blogspot.com/-u3PPgpKLE00/WHGf3E7yojI/AAAAAAAALCg/mIK4fYxsOxc_HzBxVpKip3iDSKlj68qHQCLcB/s1600/phonitor-vs-bs2b-freq.jpg)

It's easy to see that Phonitor's changes to the source frequency
response are much more delicate compared to BS2B. With the same vertical
scale I was using for BS2B graphs, Phonitor's response looks almost
flat. Below is the same graph with the Phonitor's response only,
magnified:

[<img src="https://4.bp.blogspot.com/-EZ7D8q0l8Dc/WHGgzhAT2tI/AAAAAAAALCo/mF38VJVRjvcoqPYcuxgA9gwBVea9eq3jQCLcB/s640/phonitor-freq.jpg" width="640" height="336" />](https://4.bp.blogspot.com/-EZ7D8q0l8Dc/WHGgzhAT2tI/AAAAAAAALCo/mF38VJVRjvcoqPYcuxgA9gwBVea9eq3jQCLcB/s1600/phonitor-freq.jpg)

On the **direct** channel, the swing of the highpass filter is only
about **2.5 dB**, and on the **opposite** channel, there is a small
peak of about **0.5 dB**, and slight attenuation of high frequencies.

Now let's look at the *phase response:*

[<img src="https://1.bp.blogspot.com/-dwWSGU1cjTA/WHGh8QY-L-I/AAAAAAAALC0/4vFeRxK-OZQ0rcpVULyjVyU-6H6QsXCnACLcB/s640/phonitor-vs-bs2b-phase.jpg" width="640" height="336" />](https://1.bp.blogspot.com/-dwWSGU1cjTA/WHGh8QY-L-I/AAAAAAAALC0/4vFeRxK-OZQ0rcpVULyjVyU-6H6QsXCnACLcB/s1600/phonitor-vs-bs2b-phase.jpg)

Phonitor's alteration of the phase (again, direct is **blue**, opposite is **red**)
is much more uniform than BS2B's and doesn't exceed **15°** for frequencies
below **10 kHz**.

And the *group delay* (1/3 octave smoothed):

[<img src="https://1.bp.blogspot.com/-WFugM2qVPKQ/WHGjMAnvO9I/AAAAAAAALDA/yDYl6NyRmrYEkd2ugF85ArLNO7lju_AuwCLcB/s640/phonitor-vs-bs2b-gd.jpg" width="640" height="336" />](https://1.bp.blogspot.com/-WFugM2qVPKQ/WHGjMAnvO9I/AAAAAAAALDA/yDYl6NyRmrYEkd2ugF85ArLNO7lju_AuwCLcB/s1600/phonitor-vs-bs2b-gd.jpg)

Phonitor introduces about **150 microseconds** (**0.15 ms**) delay for
low frequencies, and almost doesn't affect frequencies above **500 Hz**.
Note that frequencies above **2 kHz** are delayed equally, thus
intra-channel delay is **0**.

The overall conclusion is that Phonitor's implementation of crossfeed
affects the source signal very slightly compared to BS2B's
implementation. No wonder it reproduces the original headphones sound
much more faithfully.

### DSP Reconstruction of Phonitor Mini Crossfeed

From the phase response graph of Phonitor mini, it can be seen that
there is nothing complex in the filters used for both the direct and the
opposite channel. The only issue is how to guess the exact parameters
for them. For that, I used an iterative process, starting from initial
guesses, measuring the result, and comparing it with the Phonitor's
graphs (REW's **Overlays** dialog is an ideal tool for this task).

[<img src="https://4.bp.blogspot.com/-SwH5APAlC5k/WHHNkpYtdDI/AAAAAAAALD4/9TX0rS064dQ5ruOe8Z62feVMRefw7o21ACLcB/s320/motu-xf.png" width="281" height="320" />](https://4.bp.blogspot.com/-SwH5APAlC5k/WHHNkpYtdDI/AAAAAAAALD4/9TX0rS064dQ5ruOe8Z62feVMRefw7o21ACLcB/s1600/motu-xf.png)

I used DSP built into [Motu UltraLite
AVB](http://motu.com/products/avb/ultralite-avb) sound interface. The
interface features freely configurable routing matrix, and a 4-band
bi-quad equalizer per channel. For each of input channels, first I
duplicated them into direct / opposite pairs, and then mixed together
the direct from one channel and the opposite from another channel. Below
is the configuration of the equalizer I ended up with:

Direct channel:

-   Shelf high-pass filter at **200 Hz +2.3 dB**;
-   Channel attenuation **-2.3 dB** to compensate the filter.

Opposite channel:

-   Shelf high-pass filter at **750 Hz -0.3 dB**;
-   Peak filter at **180 Hz +0.5 dB Q 0.55**;
-   Channel attenuation **-9.9 dB** to match the inter-channel delta of
    Phonitor's filter.

How does the resulting filter measures up? Here is the *frequency
response* in comparison with the Phonitor's filter:

[<img src="https://2.bp.blogspot.com/-Wal6nWPw08g/WHGojPTuWCI/AAAAAAAALDQ/eCCqCjTAVEkwFvnQfSL0hjSNSfPph6G-QCLcB/s640/motu-vs-phonitor-freq.jpg" width="640" height="336" />](https://2.bp.blogspot.com/-Wal6nWPw08g/WHGojPTuWCI/AAAAAAAALDQ/eCCqCjTAVEkwFvnQfSL0hjSNSfPph6G-QCLcB/s1600/motu-vs-phonitor-freq.jpg)

The DSP filter (direct is **blue**, opposite is **red**) features a bit different
slope for the direct channel (and is somewhat more noisy at high
frequencies). The opposite channel filter features the response very
close to Phonitor's.

Here is a comparison of *phase responses:*

[<img src="https://2.bp.blogspot.com/-O9UdjjR_JZI/WHGqKs7i8DI/AAAAAAAALDc/zYZSVxpouiEXyKjv22MsQUdGYFUGUSEFQCLcB/s640/motu-vs-phonitor-phase.jpg" width="640" height="336" />](https://2.bp.blogspot.com/-O9UdjjR_JZI/WHGqKs7i8DI/AAAAAAAALDc/zYZSVxpouiEXyKjv22MsQUdGYFUGUSEFQCLcB/s1600/motu-vs-phonitor-phase.jpg)

I was impressed by Phonitor's implementation
(direct is **green**, opposite is **yellow** channels)—remember that
it's fully analog, yet it is much more coherent for both channels,
and is flatter than what the
DSP implementation produces (direct **red** / opposite **blue**).

And finally, the *group delay* (also 1/3 octave smoothed):

[<img src="https://2.bp.blogspot.com/-pdvWnO0eLFI/WHGrHeOcsLI/AAAAAAAALDk/4PzFE7QSsZQjlCuk3FjY6P_tcZJr_A7mACLcB/s640/motu-vs-phonitor-gd.jpg" width="640" height="336" />](https://2.bp.blogspot.com/-pdvWnO0eLFI/WHGrHeOcsLI/AAAAAAAALDk/4PzFE7QSsZQjlCuk3FjY6P_tcZJr_A7mACLcB/s1600/motu-vs-phonitor-gd.jpg)

Again, Phonitor's direct channel group delay (**green**) is much
smoother than of my reconstruction (**blue**). However, the opposite
channels match almost exactly.

So yes, there is no magic in Phonitor's crossfeed, it's just different
from what the majority of other implementations use. However, note the
quality of the filters—analog (!) filters in this amplifier box. After
this study, the high price of Phonitor has been fully justified for me.
Recall that all the other characteristics, like signal-to-noise ratio,
distortion, and the output impedance of Phonitor mini also meet very
high quality standards, and with the crossfeed filter turned off it is
fully transparent in the signal chain.

## ABX Comparison

Enough with measurements, it's interesting whether the DSP
implementation actually sounds the same as Phonitor's. I took a [free
sound track of african safari drums
recording](http://www.freestockmusic.com/2013/international-production-music/free-african-stock-music-african-safari-drums)
that was used by Dr. Meier for
[demonstrating](http://www.meier-audio.homepage.t-online.de/crossfeed.htm)
the effect of crossfeed in his Corda amplifiers. This track features
drums that are sometimes panned extremely to one side, and when
listening without crossfeed this actually induces a physical
discomfort.

I have prepared 3 recordings of this track. All of them were played on
the Motu UltraLite interface, passed through SPL Phonitor mini, and then
captured back again using Motu. The difference was in whether crossfeed
is activated, and on which unit.

1.  Full stereo (both crossfeed filters off)
    \[[listen](https://drive.google.com/open?id=0B9COAT9bzemLNWZydWczNThVT0U)\].
2.  With crossfeed activated on Motu's DSP
    \[[listen](https://drive.google.com/open?id=0B9COAT9bzemLQ09lQmtfemJlNjQ)\].
3.  With crossfeed activated on Phonitor
    (**medium** strength, **30°** angle, **-1.2 dB** attenuation)
    \[[listen](https://drive.google.com/open?id=0B9COAT9bzemLX0JMbENQeXVxZEU)\].

Then I was playing the tracks back via [O2 headphone amplifier /
DAC](https://www.mayflowerelectronics.com/shop/digital-to-analog-converters/objective2-odac-combo-with-rear-power/) in [Beyerdynamic
T90](http://north-america.beyerdynamic.com/shop/t-90.html) headphones,
and used [Lacinato ABX](http://lacinato.com/cm/software/othersoft/abx)
comparator tool. This is a really great tool, as it allows applying fine
tuning of attenuation and time offset to the tracks under comparison,
enabling seamless switching between them (such alignment is a must when
doing blind tests, as even a slight difference in output levels can
provide a clue for distinguishing between the tracks).

I was able to distinguish correctly between the **tracks 1** and **2**
with a great confidence—**14** times out of **15**. Then I tried to
distinguish between the **tracks 2** and **3**, and my attempts were not
better than a pure guess—**8** times out of **15**. This proves that
crossfeed is not just a mind trick, and my DSP implementation closely
imitates the one in Phonitor (with the settings stated above).

Out of curiosity, I also compressed the **track 2** with the same
parameters as in Dr. Meier's demo, and performed a "shootout" between
the original stereo track, Dr. Meier's track with "natural crossfeed
filter" applied, and my **track 2**. Out of **15** runs, I have chosen
my **track 2** as "best sounding" **13** times, and Dr. Meier's just
**2** times, and rejecting the original stereo recording all the time.
