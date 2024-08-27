# LXmini Desktop Version (LXdesktop)—Part III: Binaural Tuning

This is another "technical note" about my experience of building and tuning
a pair of desktop speakers with a DSP crossover, based on the original
design of [the LXmini by Siegfried
Linkwitz](https://linkwitzlab.com/LXmini/Introduction.htm). This post is
about the aspect of tuning which helps to obtain the most natural
presentation of the audio scene encoded as a stereo format. As Linkwitz
itself explains in this [talk "Accurate sound reproduction from two speakers
in a living
room"](https://youtube.com/playlist?list=PLtAfPA5Ya0RPACE0U1zujxYOjVED3xdWy&si=gKDDz--LQvjD2X85),
a stereo representation is no more than an illusion which only appears in
the brain of the listener. However, this can be a rather realistic
illusion. It's realistic when the listener is able to forget that the sound
scene which he or she is hearing is created using the speakers. Ideally, the
speakers themselves should not be registered by the auditory brain as the
sound sources.

In the Q&A section of the talk, in particular, on [this video
fragment](https://youtu.be/pLuLRO_79tc?si=7WOsbSre7sBooxgE), somebody is
asking Siegfried what is the recommended speaker setup for a small room. And
he recommends putting the speakers wider, and to place the listening spot
closer to them. That's in fact what I've done in my setup (see [one of the
previous posts](/2024/07/lxmini-desktop-version-lxdesktoppartii.html) which
illustrates the arrangement). The idea behind this setup is to create sort
of "giant headphones"—this characteristic is attributed in to the sense of
envelopment that this setup can achieve. In fact, the sound of speakers
located at some distance is more natural for our auditory brain than the
sound from headphones because the sound from the speakers gets filtered by
our natural HRTF, thus it's easier for the brain to decode it
properly. However, our perception of sound from these "giant headphones"
suffers both from a strong interaction between the speakers
themselves—that's the crosstalk affecting the center image, and between the
speakers and the room—this interaction produces reflections and additional
reverb not existing on the recording—that's the "sound of the room."

The good part is that in my unusual setup the predominant dipole radiation
pattern of the speakers is supposed to reduce the crosstalk without
resorting to DSP tricks. And as for reflections, they can be filtered out by
the auditory brain when they are sufficiently separated from the direct
sound, and—that's another interesting point from Siegfried's talk—has the
spectral content which is similar to the direct sound. The last topic is
actually complex and different people have different views on it. However,
the cross-talk cancellation is something that can be easily measured.

## Cross-talk Cancellation

I have made two types of measurements: one is the usual log sweep which
allows recreating the impulse response and window it as necessary, and
another kind is a "steady state" measurement produced by taking "infinitely"
averaged RTA of a pink noise. Both measurements are made using a "dummy
head" technique, so they are binaural. However, since I don't have a proper
head and torso simulator at home, I just use my own head and [binaural
microphones by The Sound
Professionals](https://soundprofessionals.com/product/MS-TFB-2-MKII/) built
with the XLR outputs option so that they can be connected to the same sound
card used to drive the speakers. I use REW for these captures, and I have
purchased the "multi-mic input" option which is essential for this job since
I want to record both the ipsi- and contra-lateral ear inputs at the same
time.

The typical way to measure the effectiveness of the cross-talk cancellation
(XTC) efficiency is to consider the measurement at the ipsilateral (closer
to the speaker) ear and see by how much must it be attenuated in order to
obtain the same result as the measurement at the contralateral (farther from
the speaker, shadowed by the head) ear. The resulting frequency response
curve is the profile of the effective attenuation.

So let's see. If we look at the steady state response, the XTC from my
speaker arrangement is quite modest—around **-10 dB** in the best
case. Below is the spectrum of the attenuation for the left and for the
right ear:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBWkpVYlLVmMnjCgYiF91Nera61teBKvFjoQXkQkGbZTjV8o4GzsQh8qjKVnHLZeRMSiMhWQGcOsq-_6OTD0fiOdkm4SyC7OPth0PMS5sBUnZqKqw6BLjHzPxK1AhseVN_SeLU-dajQK_MMMaLL7Ed3s1SLRfMfmThZzqereIPdXchILmkeaj8m_lisPwU/s16000/SteadyStateSupp.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBWkpVYlLVmMnjCgYiF91Nera61teBKvFjoQXkQkGbZTjV8o4GzsQh8qjKVnHLZeRMSiMhWQGcOsq-_6OTD0fiOdkm4SyC7OPth0PMS5sBUnZqKqw6BLjHzPxK1AhseVN_SeLU-dajQK_MMMaLL7Ed3s1SLRfMfmThZzqereIPdXchILmkeaj8m_lisPwU/s700/SteadyStateSupp.png)

However, if we look at the direct sound only, by applying a
frequency-dependent window (FDW) of **8** cycles to the log sweep
measurement, results look much better, showing consistent attenuation values
between **-20** and **-10 dB**. It works better for one ear due to asymmetry
of the setup:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhv61R1MFA4JmS3wjkNo9xNJ3kt_tPC-XbRVUSJ0Doh_vnFxjSiqjcc8Q-mc8cSRSaTbjsJNR_rUaGrMz8HaJqGEw6EnFqK70TowxXVpw6Ax1hiev3WvGKwLMuwvYD_ZynaxEPXdLULRrGBVdepNZF7fORsswOCHe6oD387FlgE5kaut4sOad_gx6VWsVoh/s16000/DirectSoundSupp.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhv61R1MFA4JmS3wjkNo9xNJ3kt_tPC-XbRVUSJ0Doh_vnFxjSiqjcc8Q-mc8cSRSaTbjsJNR_rUaGrMz8HaJqGEw6EnFqK70TowxXVpw6Ax1hiev3WvGKwLMuwvYD_ZynaxEPXdLULRrGBVdepNZF7fORsswOCHe6oD387FlgE5kaut4sOad_gx6VWsVoh/s700/DirectSoundSupp.png)

Note that deep notches as well as a couple of peaks are due to comb
filtering from reflections and the effects of the dipole pattern itself.  I
must warn that just looking at what seems to the eye as the "average value"
on the graph and taking this as the suppression efficiency measure may be
self-deceiving. In order to calculate the actual negative gain of the XTC I
have measured the difference in RMS level of pink noise filtered via the
impulse responses of these natural attenuation filters. The results are
somewhat modest: **-4.7 dB** for the sound of the left speaker and
**-4.9 dB** for the sound of the right speaker.

For comparison of performance with DSP XTC solutions, I have checked the
Chapter 5 of [the book "Immersive
Sound"](https://www.routledge.com/Immersive-Sound-The-Art-and-Science-of-Binaural-and-Multi-Channel-Audio/Roginska-Geluso/p/book/9781138900004)
which talks about BACCH filters. There is a graph of a similar measurement
that I have done, they have made it using a Neumann KU-100 dummy head
in a real (non-anechoic) room using speakers set up at **60 degrees**,
**2.5 meters** distance from the head, with their filters turned on.
The Figure 5.12 of the book presents the measured spectrum at the ipsi-
and contra-lateral ears, and similarly they measure the effectiveness
of the XTC by subtracting these. I have digitized their graphs and
derived the attenuation curve, it is presented on the graph below
as the brown solid curve, and I have changed my curves to dashed and dotted
lines for readability purposes:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAXgGgT-U1T4AyTMRJbNi3-0pF0v87W18qR-w3WM7duaoA2kJHXz4wNYYvzIU9k4zMKfYzhJteY30B1KSqgac_dLuZsQYSbtX5aO47rGj-5k7Y_pfrX5UZ5g-lP-69RzKK0LSjP9yZZa2GHgy6LmIy4CAq1NNNAZOvS-0uCWLDlV1s7DhA0xZrT4Lgvfq2/s16000/LXdesktop-vs-Bacch-XTC.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAXgGgT-U1T4AyTMRJbNi3-0pF0v87W18qR-w3WM7duaoA2kJHXz4wNYYvzIU9k4zMKfYzhJteY30B1KSqgac_dLuZsQYSbtX5aO47rGj-5k7Y_pfrX5UZ5g-lP-69RzKK0LSjP9yZZa2GHgy6LmIy4CAq1NNNAZOvS-0uCWLDlV1s7DhA0xZrT4Lgvfq2/s700/LXdesktop-vs-Bacch-XTC.png)

We can see that the BACCH XTC does a better job, except in the region of
**7–10 kHz**. Also note that since I have a single subwoofer there is no
attenuation below **100 Hz**. The author of the chapter calculates the level
of attenuation as an average of the frequency response curve values across
the audible spectrum, and their result is **-19.54 dB**. However, since I
had digitized their graph, I could build a filter which implements it and
measure the resulting decrease of the RMS level of ping noise, the same
method that I used for my measurements. Measured this way, the effective
gain of the BACCH XTC is **-8.86 dB**. This is still better than my result,
but only by **4 dB**. So I must admit, DSP can do better job than natural
attenuation due to the speaker arrangement and the radiation pattern,
however as we can see from the chapter text, building a custom XTC filter
tailored to the particular setup is a challenging task, and there are many
caveats that need to be taken care of.

## Center Image Height

As I have explained in the section "Target Curve Adjustments" of [the
previous post](/2024/07/lxmini-desktop-version-lxdesktoppartii.html), in
order to provide correct rendering of the center image, the spectrum of the
sound from the speakers which are on the sides of the listener must be
corrected so that the phantom center image has the spectrum that a real
center source would have. The paper by Linkwitz which I cited in that post
contains necessary details. One good test for the correction is to make sure
that a source which is intended to be at the ears (or eyes) height is
actually heard this way. For that, I use the track called "Height
Test"—track 46 from the "Chesky Records Jazz Sampler & Audiophile Test
Compact Disc, Vol. 2".

## Merging Perceived Results of ITD and ILD Panning

Changing the spectrum of side images in the way described in the previous
section also helps to reduce attention to the speakers, because now sounds
coming from them do not have the spectral characteristic of a side source.

However, while listening to old engineered recordings (from 70s or earlier)
that use "naive" hard panning of instruments entirely to the left or to the
right by level adjustment only, I have noticed that this spectrum change is
not enough for decoupling the sound of an instrument from the speaker which
is playing it. Real acoustic recordings and modern tracks produced with
Dolby Atmos sounded better. This was likely because modern panning
techniques use both level and delay panning. They may actually use more—to
get a full idea of what is possible I used a panning plugin called ["PanPot"
by GoodHertz](https://goodhertz.com/panpot/).

While playing with a plugin using dry percussion sounds from the "Sound
Check" CD produced by Alan Parsons and Stephen Court I have noticed that
hard panned sounds using delay panning a perceived a bit "away" from the
speakers while level panned sounds are perceived coming from the speaker
itself. Schematically, it was perceived like this:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOdId-_bzL0D6NJWuJzfP3xAPEVX7jOxrKyWTo2ttC7r6zmAQTwA_6Y8hGUh8Xtvb0_8mrP37wZx9WmavZAvrFfeVr-qO6nCiAxAKhW9_9qIxvfJtKvRXjgAl9AiK_jiIPGmOHgh-XS3ApOC1mzOH9d0tXP8OlKYXkmPBr56nbo4HNEHWuQpt14jGJ18b1/s16000/ILD-ITD-Perception.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOdId-_bzL0D6NJWuJzfP3xAPEVX7jOxrKyWTo2ttC7r6zmAQTwA_6Y8hGUh8Xtvb0_8mrP37wZx9WmavZAvrFfeVr-qO6nCiAxAKhW9_9qIxvfJtKvRXjgAl9AiK_jiIPGmOHgh-XS3ApOC1mzOH9d0tXP8OlKYXkmPBr56nbo4HNEHWuQpt14jGJ18b1/s360/ILD-ITD-Perception.png)

I decided to combine them. In order to move hard ILD panned sounds I use
[the "Tone Control" plugin](https://goodhertz.com/tone-ctrl/), also by
GoodHertz. It can do Mid/Side processing, and I switched it to the "Side
only" mode. Recall from my previous [post on Mid/Side
Equalization](/2023/06/on-midside-equalization.html) that M/S decomposition
does not completely split out the phantom center from the sides. However, it
is good enough to tune hard panned sources.

I have prepared a test track which interleaves pure ILD and ILD+ITD panning
of a dry sound of a snare drum. While listening to it, I was experimenting
with the settings for the corner frequency, slope, and gain of the treble
shelf, as well as with overall gain of the side component. The goal was to
move the ILD panned source closer to the position of an ILD+ITD panned
source, and at the same time not to change its perceived tonality too much.
Obviously the results of panning using different techniques will never sound
identically, however, I could come close enough. As a result, the sound
scene has moved a bit away from me, behind the speakers plane:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6EloYYyl5bPnDceQJEVJu_PseiK58x0HHZkFlwDarMhj5vCtA6aSeytSLeHAJ_h05jnvNnAUCTyFpPJtNPxqcq2MdBDA-YJ_MtFls0_XAoeomUCcBsLDfnKWZ-sj2NuO2mAmiMCuI-KBtFEAJZARYWZfb7HgDY6DOz_bnC0XcuLARzp307e40LufjS8w7/s16000/SoundScene.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6EloYYyl5bPnDceQJEVJu_PseiK58x0HHZkFlwDarMhj5vCtA6aSeytSLeHAJ_h05jnvNnAUCTyFpPJtNPxqcq2MdBDA-YJ_MtFls0_XAoeomUCcBsLDfnKWZ-sj2NuO2mAmiMCuI-KBtFEAJZARYWZfb7HgDY6DOz_bnC0XcuLARzp307e40LufjS8w7/s424/SoundScene.png)

I have pictured the scene as going beyond the speakers because this happens
with some well-made recordings like the track 47 "General Image and
Resolution Test" from "Chesky Records Jazz Sampler & Audiophile Test Compact
Disc, Vol. 2" where the sounds of doors being shut are rendered well beyond
the speakers in a distance.

It's interesting that correction of the purely level-panned images really
helped to decouple the speakers from the sound they are producing! I used
tracks from the full OST to "The Holdovers" movie which feature a number of
records produced in 60s and 70s. Note that as far as I know, the full
version with all tracks is only available on vinyl—the usual issue with
licensing on streaming services prevents them from offering all the tracks.
And the producer of the OST decided not to bother themselves with offering a
CD.

## Banded Correlation and Decorrelation

Since my speaker system is not a dipole across the entire spectrum, and
walls are located nearby, there was still some "unnaturalness" of the image,
even though the quasi-anechoic frequency response looks correct. How can we
do further tuning without noticeably affecting the frequency response? The
trick is that we can change it depending on the correlation.

For example, while listening to the bass line of the "Spanish Harlem", I
have noticed that the first note, which is mostly delivered by the subwoofer
does not sound as strong as following notes, which are higher and are
delivered by the main speakers. I did not want to raise the level of the
sub, because I know it is at the right level, and listening to OSTs by Hans
Zimmer proves that—I don't want the sub to be any louder :). Instead, my
solution was to decrease level of the correlated component (the phantom
center) in the frequency range served by the woofers—they are
omnidirectional, thus their sound is reinforced by the walls. For that I
used [the "Phantom Center"
plugin](https://www.bertomaudio.com/phantom-center.html) by Bertom Audio.

Another correlation tweaking needs to be done in the high frequency region,
above **4.7 kHz**. I took the track I often use—the left / right imaging
test from "Chesky Records Jazz Sampler Vol. 1" and overlaid the "midway"
position announcement with "off-stage" position. Initial lack of correlation
due to somewhat excess of reverberation at high frequencies causes the
off-stage announcement to sound either in the front, in the position similar
to the "midway" position, or even "inside the head." By increasing the
correlation I was able to move it to the intended location. However, having
too much correlation causes the phantom center to become too strong and too
narrow, which makes the "midway" position to collapse to close to the
center. Thus, by hearing both announcements at the same time I can increase
the correlation to the just right amount.

Finally, I used a set of 1/3 octave band-filtered dry mono recordings of
percussion instruments converted to stereo: first with identical left and
right channels, then with the right channel inverted. This is the same set
of sounds that I used in [this post about
headphones](/2023/12/headphone-stereo-improved-part-iii.html). I compared
how loud the correlated version sounds to relative to anti-correlated. It is
expected that it should be of the same loudness or a bit louder, however I
have found that in the region between **400** and **900 Hz** anti-correlated
sounds are perceived to be louder than correlated. Unlike my previous
experience with traditionally arranged speakers, this time I was able to
reduce loudness of anti-correlated sounds in this band.

This perceptual correction helps to reduce attention paid to the details in
the sound produced by speakers that get amplified by the room too much.  The
sound becomes less fatiguing—that's yet another aspect of "naturalness." As
Linkwitz has put it, it's better to make our brain to add missing details
than trying to force it to remove extra details—that costs much more mental
effort which manifests itself in exhaustion resulting from long listening
sessions.

## Processing Chain

The description of the tuning process has turned out to be a bit lengthy.
Let's summarize it with a scheme of the filters that I put on the input
path. They are inserted before the digital crossover and correction filters
that I described in the [Part II of these post
series](/2024/07/lxmini-desktop-version-lxdesktoppartii.html).

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbjYCfg0zWXMWWgbQLRHb4aChZWqkUkA33wXuZWSgaCxNB9Dpn-ll48_oiw_F-4qRTjUGFOHam2YhooelF3lrJItDiyZHPk15UDLAd4ohfuRWSALIriMmlSAYuDx3fSfFk9nAglCVRwr85GCoHwNzrD4No9gAjcsk__nk9Bw-eVLcEmv-2lYQQysE5xOjY/w213-h400/InputChain.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbjYCfg0zWXMWWgbQLRHb4aChZWqkUkA33wXuZWSgaCxNB9Dpn-ll48_oiw_F-4qRTjUGFOHam2YhooelF3lrJItDiyZHPk15UDLAd4ohfuRWSALIriMmlSAYuDx3fSfFk9nAglCVRwr85GCoHwNzrD4No9gAjcsk__nk9Bw-eVLcEmv-2lYQQysE5xOjY/s681/InputChain.png)

So, first there is the Tone Control applied to the "Side" part of the M/S
decomposition, which is intended to move ILD-panned sounds a bit deeper
down the virtual scene to match ITD+ILD-panned sounds. Then there go
**3** instances of the Phantom Center plugin tuned at different frequency
bands that perform the job of correcting the effects of the room-speakers
interaction. I wish there was kind of an "equalizer" plugin that could
apply phantom center balancing to multiple bands—Bertom Audio, take a note :)

## Some Tracks to Listen To

Having achieved a good imaging through my speakers, I had re-listened to
many albums that I have pinned down in my collection. Here are some tracks
that I can recommend listening to:

 - **"The Snake and The Moon"** from the "Spiritchaser" album (2007) by Dead
   Can Dance. It starts with a buzzing sound rotating around the head. The
   rhythm of the song is set by an African drum pulsating at the center, and
   there are other instruments appearing at different distances and
   locations.
 - **"The Fall of the House of Usher"** multi-track piece from "Tales of
   Mystery and Imagination - Edgar Allan Poe" album (1976) by The Alan
   Parsons Project. Alan Parsons is known for his audio engineering
   excellence, and this debut album of his own band features rich and
   interesting combination of various kinds of instruments: synths, guitars,
   live choir etc. This album was at some point re-issued in a 5.1 version,
   but I still enjoy it in stereo.
 - **"Spark the Coil"** from "We Are the Alchemists" joint album (2015)
   by Architect, Sonic Area & Hologram is a rhythmical electronic piece
   with a very clear sound and precise instruments placement.
 - **"Altered State"** from the "360" (2010) album by Asura. Nice melodic
   piece with ethnic instruments and ambient electronics. The track produces
   good enveloping effect and delivers well positioned instruments.
 - **"Fly On the Windscreen (Final)"** from the "Black Celebration" (1986)
   album by Depeche Mode. Although the recording technique used here is not
   very sophisticated—one can hear that panning of some instruments is done
   with level only—it's interesting to listen into different kinds of reverbs
   applied to sound effects, instruments and vocals.
 - **"Prep for Combat"** from the "AirMech" game soundtrack released as
   the 2012 album by the industrial band Front Line Assembly. It uses rather
   powerful sounding electronic sounds that are panned dynamically and fly
   around the listener.
 - But of course, when we speak about powerful sound, it is hard to compete
   with Hans Zimmer whose **"Hijack"** track from the "Blade Runner 2049"
   OST (2017) is sending shivers down the spine and can be used as a great
   test of how well the subwoofer(s) is/are integrated with the main
   speakers.
 - **"Zen Garden (Ryōan-ji Temple Kyoto)"** from the classic "Le Parc" album
   from 1985 by Tangerine Dream starts with ambient sounds of wind and then
   adds gentle percussion sounds carefully panned along the virtual sound
   stage. I'm not sure which instruments are synthesized and which are real,
   but they all sound quite natural, with their locations well-defined.
 - And finally, one track which is not music but rather the recording of
   rain—featured at the very end of the movie **"Memoria"** (2021). I keep
   listening to it over and over again, especially in the evenings. It feels
   like you are sitting on a porch, watching rain and listening to delicate
   yet powerful rumbling of the thunder in the distance. It's funny that the
   track ends with someone coming up to the recording rig (you can feel
   their breathing) and turning it off—not sure why they did not cut this
   out during post-production, but it definitely enhances the feeling of
   realism of the recording :)
