# Headphone Virtualization for Music Reproduction

This post is written after the presentation I gave to my colleagues.  Here I
tried to explain why making commercial stereo recordings to sound on headphones
as good and natural as they can sound on a well tuned stereo speakers is not an
easy task. This topic has much in common with the popular topics on "immersive"
or "3D sound" on headphones because essentially we want to reproduce a recording
in a way that makes the listener to believe that they are actually out there
with the performance and forget that they even have the headphones on. However,
this post deals specifically with commercial stereo recordings reproduction and
does not touch topics of AR/VR.

## Reproduction on Speakers

First we need to provide some context about speaker playback. Let's start with
the simplest case of a mono speaker located in a non-anechoic (that is, regular)
room. Imagine you are listening to some sound, for example pink noise, played
over this speaker. Although it's a very simple case, it demonstrates several
important things. We understand that the physical sound (acoustic waves) needs
to be received by the sensory system of our body—mainly ears, processed by our
brain, and as a result we have a *perception* (or *acoustic image*) of the
physical source formed in our mind. We also see the speaker, and the perceived
sound source will be in our mind anchored, or *localized* to the visual image of
the speaker.

[![](https://1.bp.blogspot.com/-AGGY4ZPT0yA/YF9jKs3CbGI/AAAAAAAAS5Q/jd59kbhZhnofjKurWmpyuc_sXmOWFJIQQCLcBGAsYHQ/s16000/single-speaker.gif)](https://1.bp.blogspot.com/-AGGY4ZPT0yA/YF9jKs3CbGI/AAAAAAAAS5Q/jd59kbhZhnofjKurWmpyuc_sXmOWFJIQQCLcBGAsYHQ/s348/single-speaker.gif)

This audio perception has a lot of associated attributes in our mind. Some of
them originate in the sound that is being reproduced by the speaker, like it's
*loudness* and *timbre*. Some of them are are specific to the relative position
of the speaker and the listener, and the properties of the room. Humans use both
ears (binaural listening), and our brain manages to recognize the source in both
audio inputs and derive the difference in sound levels and the times of arrival
(known as *Interaural Level and Time Difference*, ILD and ITD) for roughly
locating it in the horizontal plane of our mind's eye.

Moreover, in a non-anechoic room there will be reflections from the walls and
other objects, and the information will be extracted by the brain from ILD and
ITD of the reflected sounds to help us to estimate the distance to the sound
source and even the size of the room.

Moving to a reproduction using two speakers gives a possibility to provide even
more cues to the brain and create imaginary sound sources that are positioned
outside of the actual sound sources—the speakers. However, with two speakers the
acoustical picture becomes more complicated. Obviously, each ear receives sound
from both speakers and from wall reflections. With a good stereo setup the
listener can forget about the existence of the speakers and completely
disentangle them from the sound they are producing.

[![](https://1.bp.blogspot.com/-tmf8mKdBIxQ/YF9jPFIRzzI/AAAAAAAAS5U/1WF7QH0hy-sh7LX82UpNinlkgcmYl6kmACLcBGAsYHQ/s16000/stereo-speakers.gif)](https://1.bp.blogspot.com/-tmf8mKdBIxQ/YF9jPFIRzzI/AAAAAAAAS5U/1WF7QH0hy-sh7LX82UpNinlkgcmYl6kmACLcBGAsYHQ/s773/stereo-speakers.gif)

Through the long history of the development of stereo recording and playback
audio engineers learned how to use the stereo speaker arrangement for creating
phantom sources that are located anywhere in the horizontal plane between the
speakers and even outside them.  As a matter of fact, most commercially
available stereo recordings were produced for playback over speakers.

Use of multi-channel systems, especially with height channels helps to push
envelope even further and produce phantom sources anywhere around the listener.
Unlike a stereo setup where the perception of phantom sources might be quite
sensitive to the listener location, multi-channel systems handle even multiple
listeners with ease. Anyone who had a chance to visit a modern movie theater had
experienced the wonders of this technology.

## HRTF

However, even on stereo systems some of advanced sound engineers manage to
create phantom sources that are located above the speakers, to the side of, or
in a close proximity to the listener. These effects are achieved by applying
frequency filtering which imitates the physical filters of ear pinnaes and of
the head. Some example of tracks that I personally like are ["Edge of Life" by
Recoil](https://youtu.be/uI5qpjLoz2o) and ["One Step Behind" by Hol
Baumann](https://youtu.be/DVWjFC6NvvM).

This brings us the the topic of *HRTF* (Head-Related Transfer Function). It is
used a lot in the context of AR/VR, however, for our particular topic what we
need to understand that there exist two filters: the first is the physical
filter which is located between a sound source and an eardrum: the combination
of the torso, head, and the outer ear. They transform any external sound in
a way that greatly depends on the location of its source to the ear.

The second filter exists in our auditory system. It is quite complex, it uses
information arriving to both ears, visual cues, and our learned experience of
living with the physical fiter of our body. Its goal is to "undo" the effect of
the body filter and restore the original timbre of the sound source and use the
information from the body filter for locating the sound source.

A simple an efficient demonstration of this filter at work, as [pointed out by
S. Linkwitz](http://www.linkwitzlab.com/TMT-Leipzig'10/TMT-Hearing%20spatial%20detail.pdf),
is turning one's head from side to side while listening to music.  Although the
sound that reaches one's ear drums changes dramatically, the perception of the
timbre remains stable and the sound source just changes its position in the
auditory image. However, the filter of the auditory system doesn't restore the
timbre completely. If you try compare the auditory image of the noise from ocean
waves as heard facing them, and then from the back, the latter sound will be
noticeably lacking the boost of high frequencies that our ears pinnaes add.

It is important to note that due to assymetry of human bodies the physical
filters for the left and right ears are different, and so are the auditory
system filters that counteract them. This assymetry plays an important role,
along with ITLD and room reflections, in locating sound sources and placing them
correctly on the auditory image. As C. Poldy notes [in his tutorial on
headphones](https://www.aes.org/tutorials/download/file.cfm?ID=48), *"the
interaural differences are unique for each individual and could not be a
characteristic of the sound source."* This allows humans (and other creatures)
to derive the direction of the sound without rotating their heads.

Very simplified model of HRTF filters at work ([after
D. Griesinger](http://www.aes.org/e-lib/browse.cfm?elib=14964)) is as follows:

[![](https://1.bp.blogspot.com/-HPdtELdp2WI/YF9jZumk-NI/AAAAAAAAS5Y/8xlin3utZykWcI_xHxvpSV89Cylfkj7mACLcBGAsYHQ/s16000/Human-Hearing-Model.gif)](https://1.bp.blogspot.com/-HPdtELdp2WI/YF9jZumk-NI/AAAAAAAAS5Y/8xlin3utZykWcI_xHxvpSV89Cylfkj7mACLcBGAsYHQ/s700/Human-Hearing-Model.gif)

The "Adaptive AGC" block helps to restore alterations of frequency response due
to environmental conditions. This is similar to "auto white balance" function of
human's vision system. It helps to recover the natural timbre of familiar
sources which are altered, for example, by closely placed reflective surfaces.

## Reproduction on Headphones

Now we put headphones on—what happens? Because the drivers of headphones located
close to ears, or even in the ear canal, the natural physical filter is
partially bypassed and is partially altered due to the change in the ear
physics, for example, due to blocked ear canal, or new resonances added due to
presence of ear cups around the ear. Left and right headphone speakers are
usually tuned to be symmetric. The combination of these factors brings in
misleading cues to the auditory system and it can't anymore use the localization
mechanisms beyond those relying on simple interaural level difference. As a
result, the auditory image "resets" to "inside the head" sensation.

[![](https://1.bp.blogspot.com/-Zci46x3Ks0k/YF9jgowQ7xI/AAAAAAAAS5g/kLeXjCD14kot5ofhj-mw8JqgTcVtFgGxgCLcBGAsYHQ/s16000/headphones.gif)](https://1.bp.blogspot.com/-Zci46x3Ks0k/YF9jgowQ7xI/AAAAAAAAS5g/kLeXjCD14kot5ofhj-mw8JqgTcVtFgGxgCLcBGAsYHQ/s312/headphones.gif)

Another difference from stereo speaker playback is that in headphones left and
right channels of the recording do not "leak" to contra-lateral ears. This is a
remarkably good property of headphone playback and it is used a lot for creating
immersive experience, however it deviates from the reproduction setup what
stereo recordings are created for. Some recording and artificial effects that
are used for creating a wide auditory scene on stereo recordings inevitably stop
working when playing over headphones.

There exist several known approaches for bringing headphone playback closer
to speaker reproduction. I must note that some of them are specific to stereo
music reproduction—they are not needed for binaural recordings and binaural
renderings of multi-channel and object-based audio programs.

### Crossfeed

This is the technique that I was exploring a lot in the past, see my old posts
about [Redline Monitor Plugin](/2018/02/112db-redline-monitor-plugin.html) and on
[Phonitor Mini](/2017/10/re-creating-phonitor-mini-with-software.html). Crossfeed
is based on adding of slightly delayed copies of sound from the counter channel
to the direct channel. It is based on a simple spherical head model.

Adding a delayed copy of the signal to itself leads to comb filtering—it also
occurs natually in speaker playback and is likely taken into account by the
brain for approximating distances between audio sources.  My opinion is that
comb filtering should be kept to minimum to avoid altering the timbre of the
sound. For music playback I would prefer the least amount of comb filtering,
even if it results in less externalization over headphones.

### Multi-channel Rendering

Rendering of multi-channel audio over headphones can be based on the same
principle as crossfeed but with a more realistic head model, as it also needs to
take into account natural suppression of high frequencies caused by pinnaes of
the ears. It is likely that a binaural renderer for multi-channel audio relies
on more realistic HRTFs. For example, below are HRTF filters used by my [Marantz
AV7704](/2020/06/marantz-av7704-as-audio-hub.html) when playing a 5.1 multi-channel
program into the headphone output in "Virtual" mode:

[![](https://1.bp.blogspot.com/-wd8IaLa0KEA/YF9jpe2ooDI/AAAAAAAAS5k/F2P_U6AAFHMfxr74nfp1ABhZ5_gKjNMtwCLcBGAsYHQ/s16000/AV7704-5_1.png)](https://1.bp.blogspot.com/-wd8IaLa0KEA/YF9jpe2ooDI/AAAAAAAAS5k/F2P_U6AAFHMfxr74nfp1ABhZ5_gKjNMtwCLcBGAsYHQ/s700/AV7704-5_1.png)

An interesting observation is that the center channel is rendered using an
identity transfer function, although normally a frontal sound source will be
affected by HRTF, too.

The graphs above do not reveal how the simulation of acoustic leakage between
speakers affects the output signal. On the graphs below the test signal is
played simultaneously into the front left and front right channels. In the time
domain we see a delayed signal from the counter channel (ETC is shown for
clarity):

[![](https://1.bp.blogspot.com/-O2rDyYpKOWM/YF9jvUPa0xI/AAAAAAAAS5s/Y5miCh0NYUUNZJEg__q3tB1TywHEi12FACLcBGAsYHQ/s16000/AV7704-left_and_right_ir.png)](https://1.bp.blogspot.com/-O2rDyYpKOWM/YF9jvUPa0xI/AAAAAAAAS5s/Y5miCh0NYUUNZJEg__q3tB1TywHEi12FACLcBGAsYHQ/s700/AV7704-left_and_right_ir.png)

And in the frequency domain this unsurprisingly causes ripples to appear:

[![](https://1.bp.blogspot.com/-LwMIu1prv-8/YF9j5bfSXnI/AAAAAAAAS50/csAQlIRwy7wVu8mK47SCzh7O8wo7MHXDwCLcBGAsYHQ/s16000/AV7704-left_and_right_fr.png)](https://1.bp.blogspot.com/-LwMIu1prv-8/YF9j5bfSXnI/AAAAAAAAS50/csAQlIRwy7wVu8mK47SCzh7O8wo7MHXDwCLcBGAsYHQ/s700/AV7704-left_and_right_fr.png)

The headphone virtualizer in AV7704 doesn't go beyond simulating acoustic
leakage and directional filtering. However, there is yet another big thing
that could be added.

### Reverberation

The rooms that we have at home rarely have extensive acoustic treatment similar
to studios. Certainly, when setting up and tuning a speaker system in a room I
try to minimize the impact of reflections during the first **25 ms** or so, see
my [post about setting up LXmini in a living
room](/2019/10/case-study-of-lxmini-in-our-new-living.html). However, this setup
is still "live" and has a long reverberation tail. The latter is obviously
missing when playing over headphones. A slight amount of artificial reverb with
controlled delay time and level helps to "live up" headphone playback and add
more "envelopment" even for a stereo recording.

The standard LEDE design of audio studios also allowed for some diffused sound
coming from the back of the listener. This sound, which is decorrellated with
the direct sound from the speaker helps to enhance the clarity of the
reproduction. In fact, the more it is decorrelated, the better, since that
minimizes comb filtering.

### Headphones Equalization

These days measuring headphones is a popular hobby among tech-savvy audiophiles.
What these measurements show is that no two models of headphones are tuned the
same way. Although there are well known "recommended" target curves like Harman
Target Curve, or diffuse field target curve, which strives to make the sound
pressure delivered to the microphones of a head and torso simulator to resemble
the sound pressure they receive in a room with a lot of random
reflections. However, each designer tends to bring in some "voicing" to stand
off the crowd, and as a result, one might need to go a long way finding
headphones that satisfy their musical taste. I guess, if the customers ears and
body have similar dimensions as of some good headphone designer, the customer
could be quite happy with the tuning.

I had some fun trying [audio plugins](/2017/12/on-headphone-normalization.html) for
cross-tuning headphones to make them sound similar to other models, however the
outcome of these experiments was still somewhat unsatisfying. The only
equalization which seems to be useful is the one which ensures that the
headphones deliver a flat frequency response to the eardrums. This is a "ground
zero" equalization on top of which one can start putting on HRTFs and preference
tuning curves.

One problem when trying to achieve the flat equalization by means of plugins is
that the measurements that they use were taken on a head and torso simulator and
don't take into account how the headphones interact with **my** ears, thus the
resulting tuning is not flat. It's not even balanced correctly since my ears are
not symmetric. It's very easy to demonstrate this by playing over headphones
mono signal of banded tone bursts of chirps over the audible range—they move
arbitrarily from left to right.  This almost doesn't occur when playing the same
signals over a tuned pair of stereo speakers because their sound passes through
the "outer" HRTF filter—the body, and the audiory system can find a matching
pair of HRTFs for compensation.  When using headphones the matching pair of
HRTFs can not be found, thus no compensation occurs.

This is actually a serious problem, and a lot of research related to HRTFs is
devoted to finding ways of figuring out a personalized HRTF without physically
taking the subject into an anechoic chamber to measure HRTFs directly. However,
for simulating stereo speakers knowing full HRTFs (for sources in any direction)
are not required. Still, some degree of **personal** headphone equalization is
needed to achieve proper centering of mono images and placing the virtual
speakers in front of the listener in horizontal plane.

### Head Tracking

There is another way for dealing with the lack of a personal headphone
equalization.  Our hearing system takes a lot of cues from other sensory
systems: visual, motion, sense of vibrations, and from higher levels of
brain—all that to compensate for lacking and contradictory cues that our ears
receive. By changing sound according to head movements, e.g. with use of some
generic HRTFs, we can engage our adaptation mechanism to start making sense of
the changes that they produce. Obviously, using person's own HRTF would be
ideal, however providing auditory feedback for head movements relies on
the ability of our brain to learn new things that are useful for survival.

Gaming-oriented headsets with head tracking, e.g. [Audeze
Mobius](https://www.audeze.com/products/mobius) were available for a long time
already. And lately, mass consumer-oriented companies like Apple have also
adopted the head tracking technology for more realistic multi-channel audio
reproduction over headphones, and a lot of other companies will undoubtely
follow the suit.

## What's Next?

I'm going to discuss how headphone virtualization is implemented in Waves Nx,
and also my DIY approach based on D. Griesinger's ideas.
