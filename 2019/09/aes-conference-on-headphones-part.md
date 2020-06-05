# AES Conference on Headphones, Part 1—Binaural Audio

I was lucky to attend the [AES Conference on
Headphones](http://aes.org/conferences/2019/headphones) held in San
Francisco on August 27–29. The conference represents an interesting mix
of research, technologies, and commercial products.

[<img src="https://1.bp.blogspot.com/-F3Rzw-zc5Z0/XWyZOYHpFkI/AAAAAAAAOro/BgYWcRQjNoYJziwhAO9bKK_GQzgYCLU-wCEwYBhgL/s320/AES%2BBanner.jpg" width="167" height="320" />](https://1.bp.blogspot.com/-F3Rzw-zc5Z0/XWyZOYHpFkI/AAAAAAAAOro/BgYWcRQjNoYJziwhAO9bKK_GQzgYCLU-wCEwYBhgL/s1600/AES%2BBanner.jpg)

I learned a lot of new things and was happy to have conversations with
both researchers and representatives of commercial companies that
produce headphones and other audio equipment.

There were several main trends at the conference:

-   Binaural audio for VR and AR applications
    -   HRTF acquisition, HCF
    -   Augmented reality
    -   Capturing of sound fields
-   Active noise cancellation
    -   "Hear through"
-   MEMS technologies for speakers and microphones
    -   Earphones and research devices based on MEMS
-   Headphone production: modeling, materials, testing, and measurements.

In this post I'm publishing my notes on binaural audio topics.

"Binaural audio" here means "true to life" rendering of spatial sounds
in headphones. The task here is as follows—using headphones (or
earphones) produce exactly the same sound pressure on the eardrums as if
it was from a real object emitting sound waves from a certain position
in a given environment. It is presumed that by doing so we will trick
the brain into believing that this virtual sound source is real.

And this task is not easy! When using loudspeakers, commercially
available technologies usually require use of multiple speakers located
everywhere around the listener. Produced sound waves interact with the
listener's body and ears, which helps the listener to determine
positions of virtual sound sources. While implementing convincing
surround systems is still far from trivial, anyone who had ever visited
a Dolby Atmos theater can confirm that the results sound plausible.

## HRTF Acquisition, HCF

When a person is using headphones, there is only one speaker per ear.
Speakers are positioned close to the ears (or even inside ear canals),
thus sound waves skip interaction with the body and pinnaes. In order to
render correct binaural representation there is a need to use a
personal [Head-related Transfer Function
(HRTF)](https://en.wikipedia.org/wiki/Head-related_transfer_function).
Traditional approaches to HRTF acquisition require use half-spheres with
speakers mounted around the person, or use moving arcs with speakers.
Acquisition is done in an anechoic room, and measurement microphones are
inserted into the person’s ear canals.

[<img src="https://1.bp.blogspot.com/-iHZ5GSJScEE/XWiFjCMcQ5I/AAAAAAAAOp4/mIfyBf0SNlEaHnNAjg2Kg_RZRgT4X9x3gCLcBGAs/s320/Traditional%2BHRTF%2BAcquisition.jpg" width="213" height="320" />](https://1.bp.blogspot.com/-iHZ5GSJScEE/XWiFjCMcQ5I/AAAAAAAAOp4/mIfyBf0SNlEaHnNAjg2Kg_RZRgT4X9x3gCLcBGAs/s1600/Traditional%2BHRTF%2BAcquisition.jpg)

Apparently, this is not a viable approach for consumer market. HRTF
needs to be acquired quickly and under "normal" (home) conditions. There
are several approaches that propose alternatives to traditional methods,
namely:

-   3D scanning of the person's body using consumer equipment, e.g. Xbox
    Kinect;
-   AI-based approach that uses photos of the person's body and ears;
-   self-movement of a person before a speaker in a domestic setting,
    wearing some kind of earphones with microphones on them.

On the conference there were presentations and demos
from [Earfish](https://www.earfish.eu/) and [Visisonics](https://visisonics.com/).
These projects are still in the stage of active research and offer
individuals to try them in order to get more data. Speaking of research,
while talking with one of the participants I've learned about
[structural decomposition of
HRTF](https://www.researchgate.net/publication/2536464_Structural_Composition_And_Decomposition_Of_Hrtfs),
where the transfer function is split it into separate parts for head,
torso, and pinnaes which are combined linearly. This results in simpler
transfer functions and shorter filters.

[<img src="https://1.bp.blogspot.com/-A-YwEdmp1gY/XWyZnHIAbjI/AAAAAAAAOrw/K_YQNSimZ0ong6DrM73seVuP0vJREmnpwCLcBGAs/s200/HRTF-demos.jpg" width="161" height="200" />](https://1.bp.blogspot.com/-A-YwEdmp1gY/XWyZnHIAbjI/AAAAAAAAOrw/K_YQNSimZ0ong6DrM73seVuP0vJREmnpwCLcBGAs/s1600/HRTF-demos.jpg)

There was an interesting observation mentioned by several participants
that people can adapt to “alien” HRTF after some time and even switch
back and forth. This is why research on HRTF compensation is
difficult—researchers often get used to a model even if it represents
their own HRTF incorrectly. Researchers always have to ask somebody
unrelated to check the model (similar problem in lossy codecs
research—people get themselves trained to look for specific artifacts
but might miss some obvious audio degradation). There is also a
difficulty due to [room divergence
effect](https://www.researchgate.net/publication/282322425_Investigating_the_room_divergence_effect_in_binaural_playback)—when
sounds are played via headphones in the same room they have been
recorded in, they are perfectly localizable, but localization breaks
down when the same sounds are played in a different room.

Although use of “generic” HRTFs is also possible, in order to minimize
front / back confusion use of head tracking is required. Without head
tracking, use of long (RT60 \> **1.5 s**) reverberation can help.

But knowing the person's HRTF constitutes only one half of the binaural
reproduction problem. Even assuming that a personal HRTF has been
acquired, it's still impossible to create exact acoustic pressure on
eardrums without taking into account the headphones used for
reproduction. Unlike speakers, headphones are not designed to have a
flat frequency response. Commercial headphones are designed to recreate
the experience of listening over speakers, and their frequency response
curve is designed to be close to one of the following curves:

-   free field (anechoic) listening environment (this is less and less
    used);
-   diffuse field listening environment;
-   ["Harman
    curve"](https://www.innerfidelity.com/content/harman-tweaks-its-headphone-target-response)
    designed by S. Olive and T. Welti (gaining more popularity).

And the actual curve is often neither of those, but rather is tuned to
the taste of the headphone designer. Moreover, the actual pressure on
the eardrums in fact depends on the person who is wearing the headphones
due to interaction of the headphones with pinnae and ear canal
resonance.

Thus, a complementary to HRTF is Headphone Compensation Function (HCF)
which "neutralizes" headphone transfer function and makes headphone
frequency response flat. As well as HRTF the HCF can be either
"generic"—measured on a dummy head, or individualized for a particular
person.

The research described in ["Personalized Evaluation of Personalized
BRIRs..."](http://www.aes.org/e-lib/browse.cfm?elib=20501) paper
explores whether use of individual HRTF and HCF results in better
externalization, localization, and absence of coloration for sound
reproduced binaurally in headphones compared to real sound from a
speaker. The results confirm that, however even with "generic" HRTF it's
possible to achieve a convincing result if it's paired with a "generic"
HCF (from the same dummy head). Turns out, it's not a good idea to mix
individualized and generic transfer functions.

Speaking of commercial applications of binaural audio, there was a
presentation and a demo of how Dolby Atmos can be used for binaural
rendering. Recently a recording Henry Brant's symphony “Ice Field” was
released on [HD streaming
services](https://www.hdtracks.com/brant-ice-field-binaural-edition) as
a binaural record (for listening with headphones). The symphony was
recorded using **100** microphones and then mixed using Dolby Atmos
production tools.

[<img src="https://1.bp.blogspot.com/-ujb_Htp9GZM/XWyUupn0trI/AAAAAAAAOrI/EZhIcpbkI_IxbTCXuvXnGwJ-d1tWZwDdgCLcBGAs/s200/San%2BFrancisco%2BSymphony%2B%2526%2BMichael%2BTilson%2BThomas%2B-%2BBrant%2BIce%2BField%2B%2528Binaural%2BEdition%2529.jpg" width="200" height="200" />](https://1.bp.blogspot.com/-ujb_Htp9GZM/XWyUupn0trI/AAAAAAAAOrI/EZhIcpbkI_IxbTCXuvXnGwJ-d1tWZwDdgCLcBGAs/s1600/San%2BFrancisco%2BSymphony%2B%2526%2BMichael%2BTilson%2BThomas%2B-%2BBrant%2BIce%2BField%2B%2528Binaural%2BEdition%2529.jpg)

It seems that the actual challenge while making this recording was to
arrange the microphones and mix all those **100** individual tracks. The
rendered "3D image" to my opinion isn't very convincing. Unfortunately,
Dolby does not disclose the details of Atmos for Headphones
implementation so it's hard to tell what listening conditions (e.g. what
type of headphones) they target.

## Augmented Reality

Augmented reality (AR) implementation is even more challenging than for
virtual reality (VR) as presented sounds must not only be positioned
correctly but also blend with environmental sounds and respect the
acoustical conditions (e.g. the reverberation of the room, the presence
of objects that block and / or reflect and / or diffract sound). That
means, an ideal AR system must somehow "scan" the room for finding out
its acoustical properties, and continue doing that during the entire AR
session.

Another challenge is that AR requires very low latency, **\< 30 ms**
for the sound to be presented from human's expectation. The latter is
tricky to define, as the "expectation" can come from different sources:
a virtual rendering of an object in AR glasses, or a sound captured from
a real object. Similarly to how video AR system can display virtual
walls surrounding a person, and might need to modify a captured image
for proper shading, an audio AR system would need to capture the sound
of the voice coming from that person, process it, and render with
reverberation from those virtual walls.

There was and interesting AR demo presented by Magic Leap using their AR
glasses ([Magic Leap One](https://www.magicleap.com/magic-leap-one))
and [Sennheiser AMBEO headset](https://en-us.sennheiser.com/finalstop).
In the demo, the participant could “manipulate” virtual and recorded
sound sources which also had AR presentations as pulsating geometrical
figures.

Another example of AR processing application is “Active hearing”, that
is, boosting certain sound sources analogous to [cocktail party effect
phenomenon](https://en.wikipedia.org/wiki/Cocktail_party_effect) performed
by human brain, but done artificially. In order to make that possible
the sound field must first be "parsed" by AI into sound sources
localized in space. [Convolutional Neural
Networks](https://en.wikipedia.org/wiki/Convolutional_neural_network)
can do that from recordings done by arrays of microphones or even from
binaural recordings.

## Capturing of Sound Fields

This means recording environmental sounds so they can be reproduced
later to recreate the original environment as close as possible. The
capture can serve several purposes:

-   consumer scenarios—accompanying your photos or videos from vacation
    with realistic sound recordings from the place;
-   AR and VR—use of captured environmental sounds for boosting an
    impression of "being there" in a simulation;
-   acoustic assessments—capturing noise inside a moving car or
    acoustics of the room for further analysis;
-   audio devices testing—when making active audio equipment (smart
    speakers, noise cancelling headphones etc) it's important to be able
    to test it in a real audio environment: home, street, subway,
    without actually taking the device out of the lab.

[<img src="https://1.bp.blogspot.com/-0BOBuLO8Bw8/XWyYg92_R2I/AAAAAAAAOrc/y-h2m8NMFJAs3XJjVVSsacBnw1lI2NiUQCLcBGAs/s320/Sound-field.jpg" width="257" height="320" />](https://1.bp.blogspot.com/-0BOBuLO8Bw8/XWyYg92_R2I/AAAAAAAAOrc/y-h2m8NMFJAs3XJjVVSsacBnw1lI2NiUQCLcBGAs/s1600/Sound-field.jpg)

The most straightforward approach is to use a dummy or real head with a
headset that has microphones on it. Consumer-oriented equipment is
affordable—Sennheiser AMBEO Headset costs about **$200**—but it usually
has low dynamic range and higher distortion levels that can affect sound
localization. Professional equipment costs much more—[Brüel & Kjær type
4101-B binaural
headset](https://www.bksv.com/en/products/transducers/acoustic/binaural-headsets/4101) costs
about **$5000**, and that doesn't include a microphone preamp, so the
entire rig would cost like a budget car.

HEAD Acoustics offers an interesting solution called
[3PASS](https://www.head-acoustics.com/eng/telecom_3PASS.htm) where a
binaural recording captured using their microphone surround array can
later be reproduced on a multi-loudspeaker system in a lab. This is the
equipment that can be used for audio devices testing. The microphone
array looks like a headcrab. Here is the picture from HEAD's flyer:

[<img src="https://1.bp.blogspot.com/-HUiCIivu1-Y/XXKcXTyGvfI/AAAAAAAAOuk/KBm0L2Xg-d8VJ_WQuC1dcEQ6zrcrVMVhgCLcBGAs/s320/HEAR-Headcrab.png" width="320" height="320" />](https://1.bp.blogspot.com/-HUiCIivu1-Y/XXKcXTyGvfI/AAAAAAAAOuk/KBm0L2Xg-d8VJ_WQuC1dcEQ6zrcrVMVhgCLcBGAs/s1600/HEAR-Headcrab.png)

When doing a sound field capture using a binaural microphone the
resulting recording can’t be further transformed (e.g. rotated) which
limits its applicability in AR and VR scenarios. For these, the sound
field must be captured using an ambisonics microphone. In this case the
recording is [decomposed into spherical
harmonics](https://en.wikipedia.org/wiki/Ambisonics#Higher-order_Ambisonics)
and can be further manipulated in space. Sennheiser offers [AMBEO VR
Mic](https://en-us.sennheiser.com/microphone-3d-audio-ambeo-vr-mic) for
this, which costs **$1300**, but plugins for initial audio
processing are free.
