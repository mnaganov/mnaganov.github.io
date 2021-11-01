# Headphone Stereo Setup

After making a [satisfying desktop stereo
setup](/2021/07/desktop-stereo-setup.html) I decided to do something
similar with headphones. As I had discussed before, right out of the box
[no headphones sound
convincing](/2021/03/headphone-virtualization-for-music.html) to me simply
due to physics and psychoacoustics issues that can't be solved using
traditional headphone construction. As a result it's just not possible to
reproduce a stereo record intended for speakers and expect having
instruments placed correctly in the auditory image, even on "flagship"
headphones. I'm always puzzled when I encounter phrases like "rock-solid
imaging," in headphone reviews especially accompanied with measurement
graphs confirming that the left and the right earphones are perfectly
matched. I don't know—perhaps the reviewer has a perfectly symmetric head
and body, and ideally matched ears—for my aging ears I know that the right
one is about **3 dB** more sensitive than the left one, so on perfectly
matched headphone drivers I naturally have the auditory image shifted to
the right slightly.

On the other hand, in order to achieve convincingly sounding stereo
reproduction in headphones it's not necessary to go "full VR", measure
individual HRTF of the listener in an anechoic chamber, and then perform
physically correct simulation of speakers as virtual sound sources placed
in front of the listener in a room, and moving around as the listener's
head moves. In fact, after trying to use Waves NX for some time, I've found
that head tracking only creates an additional distraction as it requires
periodic resetting of the "neutral" head position due to headband shifting
on the head. So I wanted something simpler, and I think I've found a good
middle ground for myself with my setup.

In my headphone setup I follow the same principles as when setting up the
desktop speakers—get the most important things right first, and then tune
up the rest, getting as close to "ideal" as possible, but stopping when the
cost of the next improvement becomes too high. However, the implementation
of these principles is a bit different. There isn't as much of "physical
alignment" in the headphone setup as one have to do for speakers. The only
thing I had to ensure is that the headphone amplifier stays linear and
doesn't produce distortions. Then most of the setup happens on the DSP
side. But even there a distinction between "main" and "fine" tuning do
exist.

As I had explained in [my earlier post on headphone
virtualization](/2021/03/headphone-virtualization-for-music.html),
reproduction over headphones lacks several components that we take for
granted when listening over speakers:

1. **Room reverberation.** This is a very important component which
   significantly supports the sound of the speakers themselves and also
   helps to place reproduced sources correctly in the auditory
   image. Acousticians love to talk about "direct-to-reverb" sound ratio
   when considering opera halls and other venues, as this is one of the
   parameters which separates good sounding spaces from bad sounding ones.

2. **Acoustical leakage between speakers.** This is considered as a negative
   factor in VR over speakers applications, because for VR one needs to
   control precisely the sound being delivered to each ear, however stereo
   recordings actually rely on this acoustical leakage. Without it, sources
   that are hard panned to one channel tend to "stick" to the headphone
   which is playing them, narrowing the sound stage considerably.

3. **Assymetries in the human body and the hearing system.** Listening over
   headphones makes the sounds coming into left and right ear very
   symmetric and this confuses the auditory system. Also, with aging,
   sensitivity of ears becomes less and less symmetrical, requiring
   individual tuning of headphones.

To achieve more realistic reproduction over headphones we need to replicate
the effects of the factors listed above. Some manufacturers of headphones
tried to do that in hardware, and we got products like AKG K1000
"earspeaker" headphones, which I guess sound almost right for stereo
records, but are quite cumbersome to use, not mentioning the price. A good
pair of open over-ear headphones can also come close to naturalistic stereo
reproduction because they allow for some inter-aural leakage as well as
slight interaction with the room. However, closed over-ear headphones and
IEMs are hopeless in this respect, and only electronic or digital solutions
can help them to produce a speaker-like stereo soundstage.

Before we dive into details of my setup, there are two main factors that
are indicative for me when judging correctness of headphones tuning:

- The sound is localized outside of the head. Although the actual perceived
  distance still depends on the recording, and sometimes it feels that the
  vocals are still very close to your face—for lots of modern records
  that's in fact the "artist's intention"—however, by quick A/B comparison
  with unprocessed headphone sounding one can quickly understand that
  although the sound appears to be close to the face, it's definitely not
  inside the head.

- Every instrument can be heard distinctively, similar to how it sounds
  over well-tuned stereo speakers. By replicating the natural HRTF of the
  person via headphone tuning we "place" each frequency band correctly in
  the auditory image, and this allows the auditory system to separate
  auditory streams efficiently.

As a final analogy, putting on properly tuned headphones feels similar to
wearing VR glasses—you feel "immersed" into scene, as if you are peeking
into it via some "acoustic window."

## The Tuning Process

The process of headphone tuning can be separated into several phases:

1. Simulate ideal reverberation conditions for the actual room we are
   listening in. Although we can simply capture the reverb of the room,
   it's usually far from "ideal" due to strong reflections. If you went all
   the way building an ideal physical room—congratulations!—you can just
   use the captured response directly. However, one can just build a great
   virtual version of their room instead.

2. Adjust the crossfeed and direct-to-reverb (D/R) ratio making sure that
   phantom sources end up placed correctly, especially those in "extreme"
   positions—outside the speakers. This tuning also moves the acoustic
   image out of the head.

3. Tune the inter-aural frequency balance. This way we emulate the natural
   HRTF and any deficiencies of the individual's hearing apparatus that the
   brain got accustomed to.

4. Finally, as an optional step we can use time domain signal correction to
   ensure that the electrical signal reaching the headphones has properties
   close to those of an ideal low-pass filter.

As for the headphones choice, my intention was to create tuning to use with
Shure SRH-1540 closed-back headphones. These headphones are very
comfortable to wear: lightweight, having a negligible pressure on the head,
and not causing my ears to sweat. However, their factory tuning is too much
V-shaped—a strange choice for "studio" headphones by the way. I strongly
prefer the tuning of headphones made by Audeze because it resembles very
close the sound of properly tuned speakers (and I have confirmed that by
measuring with in-ear microphones), but the weight of magnetic planar
headphones literally brings my head down (I made a comparison of the
weights in [one of my previous
posts](/2020/07/diy-headphone-equalization.html)), and their thick faux
leather pads quickly turn my ears into hot dumplings. So I ended up using
Audeze EL-8 closed back as a tool for tuning, but after finishing with it I
put them back into their box.

## Reverberation

The idea behind replicating the reverberation of the room is that once we
enter a room our hearing system adapts to it, and uses reflected sounds and
reverberation as a source of information for locating positions of
sources. This happens unconsciously—we just "feel" that the sound source is
out there, without actually "hearing" the reflected sounds, unless the
delay is large enough to perceive them as echoes. Thus, when we replicate
the reverberation of the room over headphones, this helps the auditory
system to perceive the sounds we hear as happening around us, in the room.

I captured the reverberation of my room using the classic technique of
recording a pop of a balloon. Then I took the [NX
TrueVerb](https://www.waves.com/plugins/trueverb) plugin and tried to tune
the parameters so that resulting reverb matches the one I've
captured. Speaking of "ideal" reverberation—I liked the idea of "ambechoic"
room pioneered by G. Massenburg—I read about in the book ["Acoustic
Absorbers and
Diffusers"](https://www.amazon.com/Acoustic-Absorbers-Diffusers-Theory-Application/dp/1498740995).
The physical implementation of "ambechoic" requires using a lot of
wide-band diffusers in order to "break up" all the reflections while
retaining the energy of the reflected sound. In the virtual recreation, I
simply turned off early reflections simulation and set the density of the
emulated reverb tail to maximum value, and this is what I've got (ETC
graph):

[![](https://1.bp.blogspot.com/-3Wd7P8VzmbQ/YYA3z2I8ibI/AAAAAAAAUMU/nFQ4zupfyf4Z_lSw3NjF2GKpZBV9Q_PnACLcBGAsYHQ/s16000/reverb-sim-etc.png)](https://1.bp.blogspot.com/-3Wd7P8VzmbQ/YYA3z2I8ibI/AAAAAAAAUMU/nFQ4zupfyf4Z_lSw3NjF2GKpZBV9Q_PnACLcBGAsYHQ/s740/reverb-sim-etc.png)

The first strong reflection (marked by the cursor) is created by the
Redline Monitor, more on that later. Note that the reverb tail still looks
a bit spiky, but this is the best I could obtain from TrueVerb.

I'm not very good at matching reverbs "by ear" so I used two tools: the IR
measurements of Smaart V8 and the RT60 calculator of Acourate. The first
has a good proprietary algorithm for finding the D/R ratio and overall
decay times, the second shows in a convenient form decay times for each
frequency band, and can display tolerance curves from standards.

Below are side by side comparisons of ETC for the real vs. emulated rooms
as shown by Smaart V8:

[<img src="https://1.bp.blogspot.com/-4axdgrb872Y/YYA39qAGMpI/AAAAAAAAUMY/LAyRKZCcmx0vmqDjST-OVT9BI11YMf2cACLcBGAsYHQ/w640-h347/sim-and-room-reverb-etc.png" width="640" height="347" />](https://1.bp.blogspot.com/-4axdgrb872Y/YYA39qAGMpI/AAAAAAAAUMY/LAyRKZCcmx0vmqDjST-OVT9BI11YMf2cACLcBGAsYHQ/s741/sim-and-room-reverb-etc.png)

I tried to get them as close as TrueVerb's controls allowed me to do.  The
early decay time (EDT) of the simulation is much shorted due to absence of
early reflections, but I don't think it's an issue. The RT60 time is
**25%** shorter—I was trying to make it the same as of the room, however
there are limits on the granularity of settings in TrueVerb. However, this
shorter time is still good according to the comparison graph below—it shows
per-frequency decay times along with tolerance boundaries from DIN 18041
standard for music reproduction calculated by Acourate for the room of my
size:

[![](https://1.bp.blogspot.com/-XnAANE5nTn4/YYA4JfWJlrI/AAAAAAAAUMc/u2ibeBEOd9Eu-tR_c476Z6meNhLjxpjCACLcBGAsYHQ/s16000/sim-and-room-reverb-rt.png)](https://1.bp.blogspot.com/-XnAANE5nTn4/YYA4JfWJlrI/AAAAAAAAUMc/u2ibeBEOd9Eu-tR_c476Z6meNhLjxpjCACLcBGAsYHQ/s740/sim-and-room-reverb-rt.png)

Although I didn't try matching reverbs "by ear" I still listened to them
carefully as measurements alone do not provide the full picture. During my
early experiments I was intending to use the built-in reverb of my MOTU
soundcard—after all it comes for free! However, despite looking similar on
the measurement side, MOTU's reverb sounded horrible with very distinctive
flutter echo. By the way, dry recordings of percussive musical instruments
like castanets or bongos are turned out to be excellent for revealing any
flaws in artificial reverbs.

## Cross-feed and D/R ratio

TrueVerb was designed to be sufficient on its own for providing a stereo
reverb and controlling its frequency response. However, the degree of
control it provides wasn't enough for my specific needs. As a result, I
ended up using the mono version of TrueVerb on two parallel buses, and
augment it by Redline Monitor and an equalizer. Here is the connections
diagram:

[![](https://1.bp.blogspot.com/-EuWm0W4GRAc/YYA4Tnush6I/AAAAAAAAUMk/MDwnoaGgnPIcuki1c8f2lgO4TAjyT7E4gCLcBGAsYHQ/s16000/d-r-processing-chain.png)](https://1.bp.blogspot.com/-EuWm0W4GRAc/YYA4Tnush6I/AAAAAAAAUMk/MDwnoaGgnPIcuki1c8f2lgO4TAjyT7E4gCLcBGAsYHQ/s613/d-r-processing-chain.png)

Note that TrueVerb outputs the reverb tail only. This way, I've got full
control over the stereo dispersion and the spectral shape of the reverb
tail. After playing with different settings on Redline Monitor I've ended
up with 90 degree soundstage—this way, the reverb is sounding "enveloping",
which was exactly my goal.

The direct sound is placed on a separate bus, with its own instance of
Redline Monitor and own set of cross-feed parameters. By altering the
volume control on this bus I can change the direct to reverb ratio.

On the Redline Monitor for the direct sound I've pinned the "speaker
distance" parameter to the minimum value above zero: **0.1 meter**. What
I've found is that zero distance doesn't provide convincing
externalization, however increasing of the speaker distance adds
considerable combing effect, see my [previous post about Redline
Monitor](/2018/02/112db-redline-monitor-plugin.html) for graphs.  What I
could see on the ETC graph is that enabling the "speaker distance" knob
adds virtual reflections. Here I compare the settings of **0 meter**
distance, **0.1 meter**, and **2.0 meter**:

[<img src="https://1.bp.blogspot.com/-sW4uOV5OoRg/YYA4cpDtTSI/AAAAAAAAUMs/Mb2CkwjHH1YvzqkBDTLdaB3zCMzayJ1BgCLcBGAsYHQ/w640-h335/redline-etc.png" width="640" height="335" />](https://1.bp.blogspot.com/-sW4uOV5OoRg/YYA4cpDtTSI/AAAAAAAAUMs/Mb2CkwjHH1YvzqkBDTLdaB3zCMzayJ1BgCLcBGAsYHQ/s740/redline-etc.png)

I suppose, the presence of reflections emulates the bounce of the sound
from the mixing console (since Redline Monitor is intended for studios). As
the "speaker distance" increases, the level of these reflections becomes
higher compared to the direct impulse. That's understood—the further one
moves away from the speakers, the more levels of the direct sound and the
first reflection become similar. However, this increases the amplitude of
comb filtering ripples, thus the minimum possible "speaker distance" is
what we want to use. This settings keeps the emulated reflection at
**-26 dB**, below the level of the direct sound—an acceptable condition if
we consider a real acoustic environment.

After fixing the speaker distance I've spent some time tweaking multiple
parameters which have turned out to be interconnected for the auditory
system since changing one had effect on another:

  - the soundstage width,
  - the attenuation of the center channel (both parameters are
    on the Redline Monitor), and
  - relative levels between the direct sound bus and the reverb bus
    (D/R ratio).

While tweaking them I used stereo soundstage test tracks from Chesky
Records demo CDs to ensure that sounds panned to left and right positions
sound in headphones as if they are indeed coming from the corresponding
speaker, and that "extreme" left and right—beyond the speakers—are
reproduced convincingly. I also used music tracks with strong, energetic
"in your face" mix (album "Cut" by the industrial "supergroup"
[C-Tec](https://en.wikipedia.org/wiki/C-Tec)) to ensure that I could put
the vocals further away from my face.

I tried to avoid attenuating the reverb too much compared to the direct
sound as this dramatically decreases the perceived distance to the
source. However, having the reverb too strong was breaking the perception
of "extreme" left and right source positions, and so on. So finding the
sweet spot for the combination of the simulation parameters turned out to
be a challenging task and it actually gave me some intuitive understanding
of how real speakers can interact with a real room.

## Aligning Amplitude Response

Basically, what I have achieved through the previous stages is creating a
virtual speaker setup in a virtual room with reverb similar to the one I
have in my real room. Now I had to align the frequency response of that
setup—as I hear it via the headphones—with the frequency response of my
real speakers—as their sound reaches my ears. This process is often
referred to as "headphones equalization." Traditionally it's done using a
head and torso simulator, but I don't have one so I used in-ear microphones
on my own head—that's even better because done this way the tuning becomes
personal.

I used my [Sennheiser Ambeo
Headset](/2020/05/sennheiser-ambeo-headset-applications.html) for this
task. I have captured the amplitude response of the speakers in Smaart V8
over the Ambeo sitting in my ears. Then I captured the amplitude response
of EL-8s—also via Ambeo—and it has turned out to be quite close to
speakers—no surprise that I like the sound of EL-8s so much.  I must note
that the positioning of centered banded noise was still wrong in EL-8
headphones. So even if I'd chosen to stick with them I still have to do
some personal tuning, more about this later.

Nevertheless, what I wanted is to tune my SRH-1540s. I started measuring
them, and they turned out to be way off the speaker sound "baseline": too
much bass, and too much treble—the V-shape tuning in action. So I started
equalizing them "in real time"—by adjusting the equalizer. I used a linear
phase equalizer ([LP10 by
DDMF](https://ddmf.eu/lp10-linear-phase-equalizer-plugin/)) to avoid
altering the inter-aural time difference (ITD). This is because sharp EQ
curves implemented using minimum phase filters can significantly affect the
phase and thus change the ITD, since the tuning for the left and right ears
is not symmetric.

After setting the amplitude response, I removed Ambeo from my ears—what a
relief!—and performed final tuning strokes to make sure that all frequency
bands are positioned consistently within the auditory image. This is
extremely important in order to avoid spreading of auditory images of
individual instruments.

For this step of tuning I used test signals generated by [DGSonicFocus app
by Dr. Griesinger](http://dgsonicfocus.com/). The app produces bands of
noise centered between the channels. It can produce either correlated or
decorrellated noise—I was using the latter option. When listening over
correctly tuned speakers these test signal create a phantom center
image. Thanks to my initial amplitude correction for headphone output, some
of the bands were already placed correctly in the auditory image, but some
still not, mostly in the high frequency range, because it's hard to tune
high frequency region correctly from measurements only—they tend to be too
volatile. So I used my ears instead, and by applying peaking EQs in the
same linear phase equalizer managed to "move" all the bands to the center.

Below are the resulting EQ curves for SRH-1540. Note just how asymmetric
they have to be in order to create a convincing auditory image for me over
headphones:

[<img src="https://1.bp.blogspot.com/-BtRashEsC8w/YYA4-93sjLI/AAAAAAAAUM4/riG6np4tucgAuuye7Yjgfy5toSmhGO1XQCLcBGAsYHQ/w640-h336/hrtf-eq.png" width="640" height="336" />](https://1.bp.blogspot.com/-BtRashEsC8w/YYA4-93sjLI/AAAAAAAAUM4/riG6np4tucgAuuye7Yjgfy5toSmhGO1XQCLcBGAsYHQ/s740/hrtf-eq.png)

I would compare this tuning process to making an individual pair of
prescription glasses. Hopefully with advances in customer audio it will
become much easier some day.

## Time-Domain Tuning (optional)

Since I really enjoy what DSP filters produced by Acourate do to my
speakers, I questioned myself whether it's worth to try applying Acourate
to the headphone chain. After all, we are simulating speakers in a room so
why not to try applying a room correction package to this simulation?

I did not plan doing acoustic measurements at the ear entrance as my
equipment simply lacks the required precision. I decided to do the
measurements at the analog electrical boundary by tapping into the
headphone wires using my
[T-Cable](/2017/04/t-cable-for-output-level-measurements.html). I
temporarily bypassed the equalizer as it's linear phase, and its setting is
asymmetric. From the measurements I've found that left and right outputs
are almost identical, as I was expecting them to be on a proper audio
chain. So, both the digital and the electrical analog chains are already
almost perfect—is there really any room for improvement?

I ran Acourate's correction macros for these measurements, and it still
managed to do something to the shape of the impulse response. Below is the
difference, I think Acourate made it to look more like a minimum-phase
response, notice the deeper "sagging" of the amplitude after the initial
peak:

[<img src="https://1.bp.blogspot.com/-QShTF_PJEoo/YYA5GT2JNHI/AAAAAAAAUM8/4mckMvjbM8gUV7DdtVxxoPM6RHx6O5t3QCLcBGAsYHQ/w640-h249/hp-chain-filt.png" width="640" height="249" />](https://1.bp.blogspot.com/-QShTF_PJEoo/YYA5GT2JNHI/AAAAAAAAUM8/4mckMvjbM8gUV7DdtVxxoPM6RHx6O5t3QCLcBGAsYHQ/s700/hp-chain-filt.png)

Did this correction change anything? Not too much in general, however
percussion instruments started sounding a bit differently, and I would say
towards more "natural" side. I loaded these corrections into a convolver
plugin—adding it increased latency, but not significantly, since I already
had the linear phase EQ plugin in the chain. Now I've got a feeling that
I'm really done with the setup.

## Putting it all Together

For completeness, here is the full processing chain I use for headphones
tuning. I run it in Ardour together with the DSP filters for the speakers
tuning:

[<img src="https://1.bp.blogspot.com/-rx7eyiX3uQQ/YYA5Qw-O_JI/AAAAAAAAUNE/2PHjjrBk5jIRhJmo6mrbhFgDyzeubC87QCLcBGAsYHQ/w400-h381/headphone-processing-chain.png" width="400" height="381" />](https://1.bp.blogspot.com/-rx7eyiX3uQQ/YYA5Qw-O_JI/AAAAAAAAUNE/2PHjjrBk5jIRhJmo6mrbhFgDyzeubC87QCLcBGAsYHQ/s770/headphone-processing-chain.png)

Note that I marked how the sections of the chain conceptually relate to
simulated speaker reproduction. As I noted previously, instead of multiple
plugins for the "Room" part I could potentially use just one good reverb
plugin, but I haven't yet found an affordable one which would fit my needs.

Despite using lots of plugins, the chain is not heavy on computations, and
Ardour takes no more than **15%** of CPU on my 2015 Mac mini (as measured
by the Activity Monitor), leaving the fan being silent (and recall that
Ardour also runs the speaker correction convolver).

## Conclusions

Compared to setting up speakers, which was mostly done "by the book,"
setting up headphones required more experimenting and personal tweaking,
but I think it was worth it. Would be interesting to do similar setup for
IEMs, although doing measurements in this case for aligning with the
speakers response will be challenging for sure.

About the time when I started doing these experiments, Apple has announced
support for Atmos and binaural headphone rendering on headphones in their
Music app. I took a try listening for some Atmos-remastered albums over
headphones on an iPhone. The impression was close to what I have achieved
for stereo recordings with my headphone setup—the same feeling of natural
instrument placement, generally wider soundstage, and so on—definitely
superior to a regular stereo playback over headphones. I was impressed that
Apple and Dolby have achieved this effect over non-personalized headphones!
On the other hand, expecting each album to be remastered in Atmos is
unrealistic, so it's good I'm now able to listen to original stereo
versions on headphones with the same feeling of "presence" that Apple
provide in Atmos remasters.
