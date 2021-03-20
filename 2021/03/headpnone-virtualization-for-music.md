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

[[Picture]]

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
from both speakers and from wall reflections.

[[Picture]]

Through the long history of the development of stereo recording and playback
audio engineers learned how to use the stereo speaker arrangement for creating
phantom sources that are located anywhere in the horizontal plane between the
speakers and even outside them.  Obviously, most commercially available stereo
recordings were intended for playback over speakers.

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
the head. Some example of tracks that I personally like are "Edge of Life"
by Recoil (Alan Welder?) and "?" by Hol Baumann [Links !!!].

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

[[Picture]]

A simple an efficient demonstration of this filter at work, as pointed out by
S. Linkwitz, is turning one's head from side to side while listening to
music [Link]. Although the sound that reaches one's ear drums changes
dramatically, the perception of the timbre remains stable and the sound source
just changes its position in the auditory image. This is remarkable.

It is important to note that due to assymetry of human bodies the physical
filters for the left and right ears are different, and so are the auditory
system filters that counteract them. This assymetry plays an important role,
along with ITLD and room reflections, in locating sound sources and placing them
correctly on the auditory image. As C. Poldy notes [[Link]], *"the interaural
differences are unique for each individual and could not be a characteristic of
the sound source."* This allows humans (and other creatures) to perceive
the direction of the sound without rotating their heads.

Very simplified model of HRTF filters at work (after D. Griesinger) is as
follows:

[[Picture]]

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
mechanisms beyond those relying on simple inter-level difference. As a result,
the auditory image "resets" to "inside the head" sensation.

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
on [...]. Crossfeed is based on adding of slightly delayed copies of sound from
the counter channel to the direct channel. Inevitably, this leads to comb
filtering—it also occurs natually in speaker playback and is likely taken into
account by the brain for approximating distances between audio sources.
My opinion is that comb filtering should be kept to minimum to avoid altering
the timbre of the sound. For music playback I would prefer the least amount
of comb filtering, even if it results in less externalization over headphones.

### Reverberation

The rooms that we have at home rarely have extensive acoustic treatment
similar to studios. Certainly, when setting up and tuning a speaker system
in a room I try to minimize the impact of reflections during the first
**20 ms** or so, see my [post about setting up LXmini in a room]. However,
this setup is still "live" and has a long reverberation tail. It is obviously
missing when playing over headphones. A slight amount of artificial reverb
with controlled delay time and level helps to "live up" headphone playback
and add more "envelopment" even for a stereo recording.

The old-fashioned LEDE design of audio studios also allowed for some diffused
sound coming from the back of the listener. This sound, which is decorrellated
with the direct sound from the speaker helps to enhance the clarity of the
reproduction.

### Multi-channel Rendering

If the source audio is multi-channel, it is possible to create a somewhat
more immersive rendering on headphones by employing HRTFs. Even generic,
non-individualized HRTFs can create an impression of sounds coming from
behind and from above. For example, below are HRTF filters used by
my [[Marantz AV7704]] when playing a 5.1 multi-channel program into
the headphone output in "Virtual" mode:

[[Images]]

