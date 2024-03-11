# Headphone Equalization For The Spatializer

As I have mostly finished my lengthy experiments with different approaches
to stereo spatialization and finally settled up on the processing chain
described [in this
post](/2023/12/headphone-stereo-improved-part-iii.html), I could pour
my attention into researching the right tuning for the headphones.
Initially I was relying on the headphone manufacturers to do the right
thing.  What I was hoping for, is that I could take headphones properly
tuned to either "free field" or "diffuse field" target, and apply just some
minor corrections in my chain. You can [read about my
attempts](/2023/04/headphone-stereo-setup-improved-part-i.html) to
implement "free to diffuse" and "diffuse to free field" transforms applied
to the Mid/Side representation of a stereo track.

## Why Factory Headphone Tuning Can't Be Used

However, since in the last version of my spatializer I actually came closer
to simulating a dummy head recording, I realized that using any factory
equalization of any headphones simply does not work—it always produces an
incorrect timbre. The reason is that my spatializer simulates speakers and
the room, as well as torso reflections, and even some aspects of the pinna
filtering—by applying different EQ to "front" (correlated) and "back"
(anti-correlated) components of a stereo recording. "3D audio" spatializers
(they are also called "binaural synthesis systems") that use real HRTFs
come even closer to simulating a dummy head recording. That means, if you
play the spatialized audio over headphones with their original, say, "free
field target" tuning, you will apply similar human body-related filtering
twice: once by the headphones themselves, and then also by the spatializer.

At some point I used to think that using headphones calibrated to the
diffuse field target is fine, because they are "neutral" (do not favor any
particular direction), but this assumption is also false. That's because
diffuse field equalization is an average over HRTFs for all directions—thus
it's still based on the human body-related filter. This is why more
advanced "3D sound" renderers have a setting where you specify the
headphones being used—by knowing that, they can reverse the factory
tuning. I also experimented with AirPods Pro and confirmed that they change
their tuning when switching between "stereo" and "spatialized" modes.

By the way, in the reasoning above I use dummy head recordings and
synthetic "3D audio" spatializatoin interchangeably, but is it conceptually
the same thing if we view it from the listening aspect? I think so. Dummy
head recordings are taken using a real person, or a head and torso
simulator (HATS) with microphones mounted at the ear canal
entrances. Sometimes it's not a complete HATS, but just a pair of ears
placed at the distance similar to the diameter of a human head. In any
case, the microphones placed into these ears block the ear canal (in the
case of HATS the canal might not even exist). Now, if we turn our attention
to HRTF-based 3D audio rendering, HRTFs are also typically measured with
mics placed at the blocked ear canals of a person (see [the book
"Head-Related Transfer Function and Acoustic Virtual
Reality"](https://link.springer.com/book/10.1007/978-981-13-9745-5) by
K. Iida as an example). So basically, a dummy head recording captures some
real venue (or maybe a recording playing over speakers in a room), while a
"3D audio" system renders a similar experience from "dry" audio sources by
applying HRTF filters and room reverb IRs to them.

It's actually a useful insight because it means that we can use the same
equalization of headphones for all of these: dummy head recordings,
"realistic" spatializers, and my stereo spatializer. Essentially, I can
decouple the tuning of my spatializer from the tuning of the headphones,
and validate the latter using other spatial audio sources. And I am also
able to compare these different sources directly, switching between them
instantly, which provides ideal conditions for doing A/B or blind
comparisons.

## Hear-Through Transfer Function

The problem is, finding correct equalization for playing any of the spatial
audio sources over headphones is actually a bit tricky. As I've mentioned
above, first we need to "erase" the factory tuning of the headphones, and
then re-calibrate them. But to what target? If we think about it, it must
be a transfer function from an entrance of a blocked ear canal to the
eardrum.  This actually sounds like a familiar problem. For example, if we
consider AirPods Pro, by their design they isolate the user from outside
noises, however one can enable the "transparency" mode which adds the outer
world back in.  In the audio engineering industry this is also known as the
"hear-through" function.

There is a good paper ["Insert earphone calibration for hear-through
options"](https://www.aes.org/e-lib/browse.cfm?elib=16875) by P. Hoffmann,
F. Christensen, and D. Hammershøi on the transfer function of a
"hear-through" device. The TF they use schematically looks like this:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNUu1jDzeSbx9r1hZojP996KrEMyAOwDH5T1iKPdJffaDztfhNaY5TpLTT4u_e9B3UprLKSQHW3-gpaGb9qd2z2iPx2hPeYXYLhXta7Ytfk-96uf9Z7ATc2V3e37zBd0zoU-wml3VTcmtfKJzEpgUhgSOiS9UbXRiXrjyL2VzeyWWs12NJJ1ZFzjWhUYVI/w400-h199/GenericHTTF-reduced.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNUu1jDzeSbx9r1hZojP996KrEMyAOwDH5T1iKPdJffaDztfhNaY5TpLTT4u_e9B3UprLKSQHW3-gpaGb9qd2z2iPx2hPeYXYLhXta7Ytfk-96uf9Z7ATc2V3e37zBd0zoU-wml3VTcmtfKJzEpgUhgSOiS9UbXRiXrjyL2VzeyWWs12NJJ1ZFzjWhUYVI/s700/GenericHTTF-reduced.png)

The curve starts flat, then it begins to elevate at **300 Hz**, reaching a
peak between **2–3 kHz**, then a sharper peak between **8–9 kHz**. It also
has a downward slope after **4 kHz**.  Note that in the paper there is a
discrepancy between the curve shown on the Fig. 2 and the target curve for
headphone tunings which appears on the Fig. 4.

In practice, we should consider this curve as an approximation only, since
for each particular earphone and ear canal the center frequencies of the
peaks and their amplitudes will be different.  The previously published
paper ["Sound transmission to and within the human ear
canal"](https://pubmed.ncbi.nlm.nih.gov/8675836/) by D. Hammershøi, and
H. Møller shows that rather high individual variation exists between
subjects when the TF from the outside of the ear canal to the ear drum is
measured.

Also note that this TF applies to in-ear monitors (IEMs) only. The paper
describes re-calibration of different IEMs to this target. Some of them
comply well with re-tuning, some are not. For my experiment, I decided to
use EarPods because they are comfortable—I have no physical ear fatigue
whatsoever, they use a low distortion dynamic driver (see [measurements on
RTINGS.com](https://www.rtings.com/headphones/reviews/apple/earpods)), and
they are cheap! Plus, you can put them into and out of your ear very
easily, unlike true IEM designs that require some fiddling in order to
achieve good sealing which blocks outside noises. Obviously, the lack of
this sealing with EarPods is one of their drawbacks. After putting them in,
you still hear everything outside, and what's worse, the timbre of outside
sounds is changed, although since we are not using them for augmented
reality purposes, this is not an issue. Yet another annoyance is that the
3.5 mm connector is rather flimsy, however, I have worked around that by
wrapping it into heat-shrink tubing:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhP8EcyvNR1I76lKlyuZA4gP1YDIgWEYqOFSD-UusKneOQIwadyuIYreSYH5gtJCOXllLnPZQQFSvtkkKMMZqY7T0mvMAFjQ6RO04-5Q628vDvZkRRMB6ItZWXeMbJJYFOKEnrZQQocKf_fdY-E3R45bAbyWe1G-pQIFb4P01H-xI1C6Sq2OHcU07hLYxJK/w318-h320/EarPodReinforced-reduced.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhP8EcyvNR1I76lKlyuZA4gP1YDIgWEYqOFSD-UusKneOQIwadyuIYreSYH5gtJCOXllLnPZQQFSvtkkKMMZqY7T0mvMAFjQ6RO04-5Q628vDvZkRRMB6ItZWXeMbJJYFOKEnrZQQocKf_fdY-E3R45bAbyWe1G-pQIFb4P01H-xI1C6Sq2OHcU07hLYxJK/s705/EarPodReinforced-reduced.png)

These drawbacks are not really serious—since we are not implementing actual
hear-through for augmented reality, there is no concern about hearing
modified sounds from the outside, and we will partially override them with
music. However, here is the main drawback of EarPods: due to their shape,
it is not easy to make a DIY matching coupler for them. Basically, you need
a coupler imitating a human ear. Luckily, I now have access to [a B&K head
5128-B](https://www.bksv.com/en/transducers/simulators/head-and-torso/hats-type-5128).
Thanks to its human-like design, EarPods can be easily mounted on it and I
could obtain reliable measurements.

Yet another challenge comes from the fact that I wanted to create an
individual hear-through calibration. That means, I wanted to be able to
adjust the peaks of the hear-through target on the fly. These peaks
actually depend on the resonances of the ear canal and the middle ear,
which are all individual. The B&K head has its own resonances, too. Thus,
even if I knew my individual HT target, calibrating to it on a B&K head
might not give me what I want due to interaction between an EarPod and the
ear canal of the B&K head.

So I came up with the following approach:

 1. Tune EarPods to "flat", as measured by the B&K head.
 2. Figure out (at least approximately) the TF of the B&K ear canal and microphone.
 3. Add the TF from item **2** back to the "flat" calibration TF.
 4. On top of the TF from item **3**, add the generic "hear-through" (HT) TF, and
    adjust its peaks by ear.

Why does this approach work? Let's represent it symbolically. These are the TFs
that we have:

 - B&K's own TF, that is, how the head's mic sees a "flat" low-impedance sound
   source at the ear canal entrance: **P_bk**;
 - EarPods, as measured by B&K: **P_epbk**;
 - Hear-Through TF—according to the paper it transforms a source inside
   a blocked ear canal into a source at the non-blocked ear canal entrance: **P_ht**.

We can note that **P_epbk** can be approximated by **P_eb * P_bk**, where
**P_eb** is the TF that we could measure by coupling an EarPod directly to
a microphone calibrated to a flat response. What we intend to do is to
remove **P_eb**, and replace it with a TF that yields **P_ht** when EarPods
are coupled with my ear canal. That is, our target TF is:

**P_tg = P_ht / P_eb**

When I calibrate EarPods to yield a flat response on the B&K head, I get an
inverse of **P_epbk**, that is, **1 / P_epbk**, and we can substitute
**1 / (P_eb * P_bk)** instead. Thus, to get **P_tg** we can combine the TFs
as follows:

**P_tg = P_ht * 1 / (P_eb * P_bk) * P_bk = P_ht * P_bk * 1 / P_ebbk**

And that's exactly what I have described in my approach above. I must note
that all these representations are of course approximate. Exact positions
of transfer function peaks shift as we move the sound source back and forth
in the ear canal, and move outside of it—one can see real measurements in
the "Sound transmission to and within the human ear canal" paper I've
mentioned previously. That's why it would be naive to expect that we can
obtain an exact target TF just from measurements, however they are still
indispensable as the starting point.

## Approximating B&K 5128 Transfer Function

So, the only thing which has to be figured out is the P_bk transfer
function. As I understand it, without a purposefully built earphone which
is combined with a microphone inside the ear, this is not an easy task. The
problem is that the SPL from the driver greatly depends on the acoustic
load. For example, if we use a simplest coupler—a silicon tube between the
earphone and a measurement mic, the measured SPL will depend on the amount
of air between them, and the dependency is not trivial. What I mean, it's
not just changing resonances and power decay due to distance increase.

I checked B&K's own technical report ["The Impedance of Real and Artificial
Ears"](https://www.bksv.com/media/doc/bn0221.pdf) with lots of diagrams for
impedance and transfer functions. I also tried some measurements on my own
using low distortion dynamic driver IEM (the Truthear Zero:Red I mentioned
in my previous posts). The main understanding that I have achieved is that
the ear canal and microphone of the B&K head exhibit a tilt towards high
frequencies. I was suspecting that because the EarPods tuned to "flat" on
the B&K (the **1 / (P_eb * P_bk)** TF) did sound very "dark." So I ended up
with creating a similar tilt, and the actual amount was initially tuned
based on listening, and then corrected when measuring the entire rig of
EarPods via **P_tg** on the same B&K head.

## Individual Hear-Through Tuning

As I've already mentioned before, the hear-through TF from the paper could
only be considered as a guideline because of individuality of ear canals
and the actual depth of insertion of earphones into them.

In order to figure out the individual resonances of the left and right ears
I used pink noise rendered into one stereo channel and spatialized via my
processing chain. I had two goals: get rid of the "hollow" sound (pipe
resonance), and make sure that the pink noise sounds like a coherent point
source. When the tuning is not right, it can sound as if consists of two
components, with the high frequency band placed separately in the auditory
space.

For this tuning process, I have created a prototype HT TF in a linear phase
equalizer (DDMF LP10), and then was tweaking center frequencies of the
peaks and their amplitudes. My final settings for the left and right ears
look like this:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGWCkum_AQOUvoOEBfP2DwgaGQUgwYyj3Rx_R3puuO65-BU_Z30Geq7_fNmaqIr-OVjC6NG7zHTGeRMzxFgnfunOlvrwRQfk1_sVAj-HudE9yhuxFqvmkG4h26ioIqraxuFga9FJmkFd4sjjjddh5mky4BrJEkBPWUczOJW1JapxN-3E5RgvIbkDljV4K7/w400-h397/HTTF-reduced.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGWCkum_AQOUvoOEBfP2DwgaGQUgwYyj3Rx_R3puuO65-BU_Z30Geq7_fNmaqIr-OVjC6NG7zHTGeRMzxFgnfunOlvrwRQfk1_sVAj-HudE9yhuxFqvmkG4h26ioIqraxuFga9FJmkFd4sjjjddh5mky4BrJEkBPWUczOJW1JapxN-3E5RgvIbkDljV4K7/s700/HTTF-reduced.png)

As you can see, compared to the "generic" TF pictured before, some changes
had to be made. However, they are only needed to compensate for the
features that got "erased" by the "flat" tuning. I had to restore back some
bass, and also diminish the region around **6 kHz** to avoid hearing sharp
sibilants.  This is how the final tuning looks like when EarPods are
measured by the B&K head:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGrpLPEI9zvFGMlWeSZeFh3wGOy4qbtleTu-mHHF7V-UTgalJiOCidwUB2WqEZ3uUqr3KRvAehexmnslbDXpOfviZZZKHJpj_80t6RaZDyWn1uLUQC5-JMUDkKhx6TqpDPesb0K47ToPvzh4IYz5lRH_saIV44sgWEmREnq-mGhgCOAZ058wK62psmfDuR/w640-h334/MyHTTFonBK.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGrpLPEI9zvFGMlWeSZeFh3wGOy4qbtleTu-mHHF7V-UTgalJiOCidwUB2WqEZ3uUqr3KRvAehexmnslbDXpOfviZZZKHJpj_80t6RaZDyWn1uLUQC5-JMUDkKhx6TqpDPesb0K47ToPvzh4IYz5lRH_saIV44sgWEmREnq-mGhgCOAZ058wK62psmfDuR/s700/MyHTTFonBK.png)

It looks rather similar to the target described in the "Insert earphone
calibration..." paper. Note that the difference in the level of bass
between the left and the right ear are due to my inability to achieve the
same level sealing on both artificial ears— I must say, coupling EarPods is
really non-trivial. Yet another difference is addition of dips around
**60** and **70 Hz**, as otherwise I could feel the vibration of the
drivers in my ears.

## Listening Impressions

As I have mentioned above, since we can consider dummy head recordings, "3D
audio" renderings, and my spatializer as equally footed sources which
require the same "hear-through" earphone calibration, I started with the
first two.

I have made some dummy head recording using [MS-TFB-2-MKII binaural
mics](https://soundprofessionals.com/product/MS-TFB-2-MKII/) by Sound
Professionals mounted on my own head. I tried both just recording sounds of
my home, and also recording pink noise played over stereo speakers (left
only, right only, correlated PN, anti-correlated PN, and correlated PN from
the back).  For the "3D audio" rendering I used [Anaglyph
plugin](http://anaglyph.dalembert.upmc.fr/). This is a free and simple to
use plugin which allows rendering a mono audio source via different HRTFs,
and apply different kinds of room reverbs.

I must say, I was impressed by the realism achieved! When playing sources
recorded or rendered in front of me, I was sure the sound comes from the
laptop sitting on my knees. Note that in Anaglyph I have set the source
height at **-15°** for achieving this effect.

Playing sources recorded from the back was a bit of a surprise—I have
experienced a strong back-front reversal with my own dummy head
recording. However, the rendering by Anaglyph and my own spatialization
chain produced much more realistic positioning.  Thus, either Sound
Professional's mics have some flaw which makes behind sources less "real,"
or "reality" is not what we want to achieve with these renderings— perhaps
the brain requires stronger "clues" to avoid FB reversals, and these clues
for some reason are not so strong in a dummy head recording.

But other than that, the dummy head recordings done with these mics are
very convincing. If you play a record back exactly at the same location
where it was recorded, the mind automatically connects sounds with the
objects around. Or you will experience a bit confusing feeling if the
visual scene has changed, say, a person which was talking on the recording
has left, and now the reproduced sound comes from an empty place.

I also noted how much the feeling of distance and location "collapses" when
a dummy head recording is played in another setting—another room for
example.  Our visual channel indeed has a strong dominance over the audio
channel, and seeing a wall at the location where the sound is "coming from"
in the recording completely changes the perception of the source's distance
to the listener.

Also, the feeling of the distance is greatly affected by the loudness of
playback, and perceived dynamic range. Thus, don't expect a lot of realism
from simple studio-produced stereo recordings, even when rendering them via
a "spatialization" engine.

## Fine-Tuning the Spatializer

Using these realisting reference recordings and renderings I was able to
fine tune my spatializer. Basically, I used pink noise positioned at
different locations, and was quickly switching between my spatializer and a
dummy head recording, or a rendering by Anaglyph. This was much more
precise and easier than trying to compare the sound in headphones with
sound in speakers! Even if you train yourself to put the headphones very
quickly on and off, and switching the speakers off and on at the same time,
this still does not happen quick enough. I've heard from James "JJ"
Johnston that switching time must be no longer than **200 ms**. With instant
switching, I could compare both positioning of sources and their
tonality. Note that these attributes are not independent because the
auditory system basically "derives" this information from incomplete data
which it receives from ears.

I noticed that the perceived distance to the sources rendered by my
spatializer is less than the distance of "real" or "3D audio" sources. When
switching between my spatializer and a DH recording, or Anaglyph, the
source was literally jumping between "far" and "near" while staying at the
same lateral angle and height.  Increasing the level of the reverb in my
spatializer puts the source a bit further away, at the cost of
cleanness. Similar thing with Anaglyph: with reverb turned off the sound is
perceived as being very close to the head. Yet, reverb adds significant
tonal artifacts. Since I'm not doing a VR, I decided that it's better to
have a cleaner sound closer to the face. In fact, a well produced recording
has a lot of reverb on its own, which helps to "feel" the sources as if
they are far away.

As a result of these comparisons, I have adjusted the level of the
cross-feed, and adjusted directional bands the Mid/Side equalization for
better rendering of "frontal" and "behind the back" sources. As I have
mentioned above, the sources from behind ended up sounding more "realistic"
with my rendering, compared to my own dummy head recordings.

Another interesting observation was that my spatialization produces more
"heavier" sounding pink noise than a dummy head recording. I actually
noticed the same thing with Apple's spatializer. I think this heavier
tonality is better for spatializing music, and maybe movies as well, so I
decided not to attempt to "fix" that.

## Bonus

While researching this topic, I found a paper by Bob Schulein and Dan
Mapes-Riordan with a very long title ["The Design, Calibration and
Validation of a Binaural Recording and Playback System for Headphone and
Two-Speaker 3D-Audio
Reproduction"](https://www.aes.org/e-lib/browse.cfm?elib=17453) on their
approach to doing dummy head recordings. The paper also suggests a
headphone equalization approach which is similar to what I ended up
using. In fact, the "Transfer function T2" from the paper has a lot in
common with the "hear-through" target function I used.  From the paper, I
came to [Bob's YouTube channel](https://www.youtube.com/@ImmersAV) which
features some useful dummy head calibration recordings, as well as
recordings of music performances, both captured by the mannequin called
Dexter which Bob built.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhghpJ3cYIWLwsMTkIvqNxYVtCvosBbK4FBbSRujwEkqMgIhIfdUho1TWVKp9yRQ1qb3BW1yUDXPdKlklTiDr7rHQla-_SjMv63gPe3iseb_Yi2r4_FPlveg2hv7_xDixg02jppTwTS7UzBloiT9_i8rtcXVut-ivMJO3WEK5aCkwG6qJk9YTpayVPQ6bWS/w252-h320/ImmersAV-reduced.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhghpJ3cYIWLwsMTkIvqNxYVtCvosBbK4FBbSRujwEkqMgIhIfdUho1TWVKp9yRQ1qb3BW1yUDXPdKlklTiDr7rHQla-_SjMv63gPe3iseb_Yi2r4_FPlveg2hv7_xDixg02jppTwTS7UzBloiT9_i8rtcXVut-ivMJO3WEK5aCkwG6qJk9YTpayVPQ6bWS/s761/ImmersAV-reduced.jpg)

Some notes on these recordings. I could hear that the tuning applied to the
recording is different on older vs. newer videos—it is indeed hard to come
up with the right tuning!  Then, on the "calibration" recordings where Bob
walks around Dexter, I was experiencing front-back reversals as well—that's
when listening to recordings with my eyes closed.  Thus, one either needs
to always look at the visual—this is what Bob proposes, or incorporate head
tracking into the reproduction process. However, using head tracking
requires replacing in the recording process the dummy head with ambisonics
mic, which captures the sound field in a more "generic" form, and then
rendering this ambisonics capture via a "3D audio" renderer.

Another weak point of "old style" dummy head recordings that I have noticed
is that minor creaking and coughing sounds coming from the audience
immediately distract attention from the performance. This happens
unconsciously, probably because you don't see the sources of these creaks,
and this forces you to look into the direction of the sound as it can be
potentially dangerous.  When sitting in a concert hall, this unconscious
switching of the attention happens much less because you have a wider field
of view, compared to the video recording. Whereas, in stereo recordings the
performance is captured using mics that are set close to the performers, so
all sounds from the auditory can be suppressed if needed during the mixing
stage.

## Conclusions

I'm really glad I have solved the "last mile" problem of the stereo
spatialization chain.  Also, the headphone tuning I came up with allows
listening to dummy head and "3D audio" recordings delivered with a great
degree of realism. It's also interesting that it turns out, for music
enjoyment we don't always need the reproduction to be "real." Much like a
painting or a photograph, not mentioning movies, actually represents some
"enhanced" rendering of reality and reveal the author's attitude to
it. Sound engineers also work hard on every recording to make it sound
"real" but at the same time interesting. Thus, the reproduction chain must
not ignore this aspect.
