# Spectral Correction of Phantom Audio Sources, Part I

I understand that the title of this series of posts sounds maybe too
scientific, so first I would like to clarify what I’m talking about. Let’s
state one of the most prominent challenges of audio reproduction. Complex
sound scenes (for example, music performances by groups of people) always
contain multiple sound sources. The number of individual sound sources in an
orchestra is vastly bigger than the number of loudspeakers that anyone’s
audio system has. Even if we consider a small band and a surround sound
system with multiple speakers, the problem still exists because the
performers are not necessarily arranged at the same locations as the
loudspeakers. In addition, in movies sound sources often change their
location dynamically. Because of that, when we play a recording on an audio
system, it has to create phantom audio sources originating from locations
**between** speakers. The simplest speaker setup which allows creating
phantom sources is the good old stereo, so that’s what we consider here. In
the context of stereo playback, we have two problematic aspects of
stereophonic playback: the phantom center and the reproduction of diffuse
sound fields.

## Phantom Center

The phantom center phenomenon is very “unnatural” in the sense that it very
rarely can be achieved in nature since it requires two almost identical
**synchronized** (in-phase) sources located symmetrically in front of the
listener. Yet, for some reason our brain seems to harness it just fine. This
is likely because, from a physics standpoint, a physical center produces
sound pressure level changes at both ears, which the brain successfully
integrates into a single auditory image. This is why the ‘synchronized’
(in-phase) property of the sources is so important. If the signals are out
of phase, the solid center image collapses into a spatially ambiguous,
unlocalizable haze; and if they arrive at sufficiently different times,
binaural fusion breaks completely, causing our brain to perceive them as two
separate auditory events.

It’s interesting that since the phantom center has been used for such a
long time in stereo recordings, there are still ongoing debates and
discussions between music production professionals on the use of physical
center channel vs phantom center, even with modern object-based formats
such as Dolby Atmos. The main argument for use of the phantom center by
audio producers is that the image of the audio source created by it is
perceived as being “fuzzier” and “warmer,” whereas a physical center is
more “point-like” and can have a “sharper” character.

However, more technically-oriented audio professionals never get tired of
pointing out one of the most widely recognized problems associated with the
use of phantom images—the comb filtering effect. Since a phantom sound
source is created by combining acoustic waves from two or more neighboring
speakers, when the wave from each speaker arrives to the listener’s ear at
slightly different times, their sum can produce both constructive and
destructive interference. This means, some frequencies will be boosted and
some attenuated. This, in turn, means the timbre of the phantom image will
differ from that of the physical source we are trying to imitate.

The change of the timbre may also affect the perceived location of the
source, for example, it can appear to be elevated, especially in the absence
of visual anchors—this is a psychoacoustical problem, a consequence of how
the auditory system works. As it had been demonstrated by J. Blauert,
narrow-band signals are perceived at specific elevations depending heavily
on their center frequency, regardless of the actual sound source location.

Besides being perceived as “warmer” and “fuzzier,” another notable
difference in the perception of phantom vs. physical sources is better
stability of the latter when the listener is moving in the acoustic space,
or when the listener simply turns or tilts their head. A phantom source
experiences more dramatic change in its tonality because the comb filtering
pattern changes immediately, and this affects the resulting tonal balance.

The well known solutions for the comb filtering problem are:

-   For stereo setups, one approach to eliminating the coloration due to
    cross-talk is to attempt to cancel the latter. Cross-talk cancellation
    can be abbreviated both as ‘CTC’ and ‘XTC,’ I will use the former
    acronym. There are different implementations of this approach, such as
    BACCH (see the description in [the “Immersive Sound”
    book](https://www.routledge.com/Immersive-Sound-The-Art-and-Science-of-Binaural-and-Multi-Channel-Audio/Roginska-Geluso/p/book/9781138900004))
    and [RACE](https://filmaker.com/papers/RGRM-RACE_rev.pdf).

-   For multichannel and Ambisonics setups the preferred approach is
    [slight
    decorrelation](https://pub.dega-akustik.de/DAGA_2022/data/articles/000344.pdf)
    of the physical components of a phantom source emitted by each speaker
    participating in its creation. That’s because there are many speakers
    around the listener, and tuning each pair of them for CTC becomes
    impractical.

Besides the comb filtering, there is another interesting problem which
affects the phantom center severely. Since the human HRTF differs for the
frontal and lateral directions, the phantom center created by lateral
speakers may have different tonality from a frontal physical center just
because there is a location mismatch: the brain thinks that the sound is
arriving from the front of the listener, so it applies reverse frontal HRTF,
but it is a wrong filter because the acoustic waves actually arrive from
sides. S. Linkwitz thought about this problem and [proposed to use a
shelving
filter](https://www.linkwitzlab.com/TMT-Leipzig'10/TMT-Hearing%20spatial%20detail.pdf)
based on the spherical head model. Conversely, D. Griesinger [argues
that](https://docs.google.com/document/d/1WV_8IMDno9kfUQ3TEOmoZj3VBKw-suQ0/edit?usp=sharing&ouid=100118554650115823766&rtpof=true&sd=true)
*“the frequency response is nearly constant as a sound source moves from
zero to ±30 degrees in the horizontal plane.”* With all respect to him, I
disagree with this statement—as we will see, frontal and side HRTFs are
significantly different. There is actually also a more recent, very detailed
research by V. Gunnarson (paper [“Spectral Correction of Audio Objects in
Stereophonic
Rendering”](https://uu.diva-portal.org/smash/get/diva2:1854677/FULLTEXT02.pdf)
from 2024) which clearly shows that the phantom center is affected by the
differences in HRTF, and this can be corrected using equalization.

## Diffuse Sources

For sure, the phantom center which represents the leading performer is very
important in stereo sound reproduction. However, there is also less
noticeable but equally important component of the audio scene: the diffuse
component which represents “the feeling of the space,” felt mostly
unconsciously. However, in live performance recordings this component may
jump to the listener’s attention when they are hearing applause. The
applause originates from a widely spread source, and reinforced by the hall
acoustics, creating a huge diffuse source with an enveloping feeling.

A stereo system trying to reproduce this diffuse source inevitably
struggles. The listener’s room may help if it has enough diffusing surfaces,
and the speakers are located far enough from the listener, but it’s not
always the case. Multichannel system, by design, are much better at
reproducing diffuse sources. However, as V. Gunnarson’s paper demonstrates,
even multichannel sources win from some room-tailored correction for diffuse
sound, and for a stereo system it’s really essential.

One example of such correction is the well known [“BBC
dip”](https://youtu.be/7WQ6Ig9j_y0). This is the speaker equalization which
technically was intended to smoothen the transition between the woofer and
tweeter which can cause a “power hump” in the upper-midrange making the
speaker sounding overly aggressive or “bright” in a reflective environment.
As judged by ear, this EQ was known to improve “spaciousness” and “depth” of
orchestral recordings. Both of these feelings are communicated to the
listener via the diffuse sound field.

## The Goals of My Exploration

In my hobbyist research I decided to explore the following questions:

1.  In the context of a stereo speaker setup, how is the difference between
    a physical and phantom center perceived? And what are the major
    contributing factors to this difference?

2.  How should an “ideal” phantom center sound? The ideal phantom center is
    achieved by making sure that the sound waves arriving from a pair of
    speakers to the listener’s ears are the same as from a real, physical
    center. This is hard to achieve in a domestic room due to high level of
    reverberant, reflected sound. However, we can use earspeakers—a weird
    kind of headphones that do not block or even cover the ears (because that
    creates its own problems), but rather are suspended very close to the
    listener’s ears—in order to simulate speaker playback under anechoic
    conditions.

3.  What can be done in order to make the phantom center produced by stereo
    speakers sound similar to a physical center, or the ideal phantom
    center? Are the techniques of stereo speaker sound correction such as
    CTC and decorrelation actually effective for my speaker setup?

4.  Similar questions about the diffuse field reproduction. If I don’t use
    purposefully built diffusers in my room, how can the reproduced diffuse
    field be corrected in order to be perceived as more enveloping? Unlike
    the phantom center situation where the reference can be provided easily,
    creating a reference diffuse field in a domestic room is challenging.

5.  If we consider the often used psychoacoustic metric of Inter-Aural
    Correlation Coefficient
    [IACC](https://pubs.aip.org/asa/jasa/article/92/4_Supplement/2469/671580/Interaural-cross-correlation-IACC-as-a-measure-of),
    how does it change between physical and phantom centers? The “Early
    IACC” (**0–80 ms**) is associated with “Apparent Source Width” (ASW),
    while the “Late IACC” (**>80 ms**) correlates heavily with “Listener
    Envelopment” (LEV). How is the IACC metric affected by phantom center
    correction? Also, can we improve the “feeling of space”?

## Simulating Phantom Center via Ambisonics Binaural

In order to avoid complications from the issues with room acoustics, let’s
first evaluate the ideal anechoic case. In the past, researchers had to
simulate physics of the interactions of acoustical waves with a spherical
head model, but these days we can perform a more realistic simulation using
a binaural renderer. My preferred approach is to encode an acoustic scene
containing left, right, and center speaker using Ambisonics and then render
it via KU-100 HRTFs. For this purpose, I use [IEM Ambisonic
plugins](https://plugins.iem.at/docs/plugindescriptions/): **MultiEncoder**
and **BinauralDecoder** configured for the 6th order Ambisonics and
connected as follows:

    3 Channel Source --> MultiEncoder ----> BinauralDecoder --> 2 Channels
                          -42° azimuth (L)                        L/R Ear
                           42° azimuth (R)                        Signals
                            0° azimuth (C)

This setup simulates an anechoic chamber with the KU-100 being in the center
of a circle with **3.25 meter** radius (this was the distance [used by
B. Bernschütz](http://audiogroup.web.th-koeln.de/PUBLIKATIONEN/Bernschuetz_DAGA2013.pdf)
when capturing KU-100 HRTFs), with speakers placed at **0°** and **±42°** in
the horizontal plane. I’ve chosen **42°** number not because it’s [“the
answer to
everything”](https://en.wikipedia.org/wiki/42_(number)#The_Hitchhiker's_Guide_to_the_Galaxy)
but rather because it’s the same angle that I have in my desktop setup.

Side note: although Ambisonics is prone to “spatial aliasing” and in theory
requires very high orders for reproducing correct magnitude **and** phase at
high frequencies, the [MagLS
method](https://pub.dega-akustik.de/DAGA_2023/data/articles/000535.pdf) used
by **BinauralDecoder** allows to produce correct magnitude **only** even at
high frequencies with relatively low Ambisonics orders.

Our goal here is to check out two things:

1.  What is the transfer function (EQ) for compensating the HRTF of a source
    at **42°** on the side of the head to sound like a source in the front of
    the head (**0°**). This is to check the EQ curve suggested by
    S. Linkwitz.

2.  What is the EQ for compensating the stereo phantom center to sound like a
    real, physical center. This way we will double-check the existence of the
    *“phantom image problem”*—as Toole calls it, see section 4.3.2 in [the
    4th edition of the “Sound Reproduction”
    book](https://resourcecentre.routledge.com/books/9781032761930), in
    particular Figure 4.4(d) which demonstrates the phantom center impairment
    due to stereo cross-talk in the anechoic case.

There are two things about these measurements and derivations that we need
to keep in mind:

-   The KU-100 HRTF captured by B. Bernschütz and used by **BinauralDecoder**
    are symmetric. This is not the case for any real KU-100 since its pinnae
    although being closely matched are still not absolutely identical, and
    this affects slightly the measurements at high frequencies. But this
    symmetry actually simplifies our task since we only need to consider
    speaker on one side.

-   When comparing physical and phantom center, their levels must be aligned.
    If we just align the levels of **speakers**, the phantom center will have
    bass twice as loud as the physical center, because of summing. Unlike the
    sound waves at midrange frequencies, the bass audio waves are largely
    unaffected by the presence of a head or even a full human torso, and they
    just combine mostly in phase which gives them a considerable boost. I
    suppose, Toole and his colleagues took this fact into account as their
    transfer function looks flat in the bass region.

So, here is the answer to the first question about the difference between a
side source and the frontal source, and I’ve overlaid it with the EQ curve
suggested by Linkwitz:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAymD81vj59TIGRhZ1nszK49JN5iDidKoUEG3l-2LxYJwfVA-lh7IbO6nnphM7ol8SRiSfkL90uf5865TfGOik_Z59ibFwlEXLrrH7q_GtmAvGOOuk579P0QWtlUramNengeaYBHPNzLfZyRxrmd6FmiFuw6k3iGepCr1mDEneiZrQRSMgtsdAM0zAMpza/s16000/42-to-0-KU100sim-vs-LinkwitzEQ.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAymD81vj59TIGRhZ1nszK49JN5iDidKoUEG3l-2LxYJwfVA-lh7IbO6nnphM7ol8SRiSfkL90uf5865TfGOik_Z59ibFwlEXLrrH7q_GtmAvGOOuk579P0QWtlUramNengeaYBHPNzLfZyRxrmd6FmiFuw6k3iGepCr1mDEneiZrQRSMgtsdAM0zAMpza/s700/42-to-0-KU100sim-vs-LinkwitzEQ.png)

As we see, in general his curve complies with the physical measurement. I
would not expect these curves to match completely because Linkwitz was
tuning his curve in a real room. However, I must note that his curve is
missing an important energy bump after **11 kHz** that I can actually hear
when comparing phantom vs. physical center by ear—more on that later.

This is the EQ graph demonstrating the impairment of the phantom center
compared to the physical center. I have overlaid it with the transfer
function graph from Toole, but I had inverted his graph because he is
showing how the phantom center is impaired, while I’m showing how the sound
of the physical center could be equalized in an anechoic chamber. Note that
I totally understand that minimum phase compensation, like traditional EQ,
can’t overcome destructive wave interference, however, I’m using EQ curves
instead of transfer function curves everywhere for consistency.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqAALcATk68rwVIMIeeoH2-gmDUvjfb9XJZZoU_uZmQ9lPKjLG3pTaiFRc3g-S1khTQyR2Ez-VwmqtGv4kEcNOoxv4MmJxwDhfJLB0PHaFTW2ZEgFLEXoOCTjZBly1qkObaO2qukq8koJpSiLah7wKQ4v4I7nEWRBvOsBTe6AwrbvZqG7dS93gYuK9SNrw/s16000/Phantom-to-Phys-KU100sim-vs-Toole.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqAALcATk68rwVIMIeeoH2-gmDUvjfb9XJZZoU_uZmQ9lPKjLG3pTaiFRc3g-S1khTQyR2Ez-VwmqtGv4kEcNOoxv4MmJxwDhfJLB0PHaFTW2ZEgFLEXoOCTjZBly1qkObaO2qukq8koJpSiLah7wKQ4v4I7nEWRBvOsBTe6AwrbvZqG7dS93gYuK9SNrw/s700/Phantom-to-Phys-KU100sim-vs-Toole.png)

Note that Toole’s data is only up to **5 kHz**. The exact location of
the EQ “hump” for correcting the dip does not match, probably due to
differences in the geometry of the KEMAR and KU-100, but the effect
is very similar.

When I checked the correction curve for the phantom center in the anechoic
case (D/R = ∞dB) by Gunnarson, it shows a decline by **-2 dB** in the bass
region, and the text confirms that this compensates for the summing of bass
from the frontal pair. That means, we can’t compare these curves directly
with our curves from the last picture.

As you can see, different methods for measuring or calculating compensation
curves for the phantom center yield different results. There is even more
disagreement about the diffuse field equalization.

## Simulating Diffuse Field via Ambisonics Binaural

Simulating enveloping diffuse field using two speakers is definitely more
challenging than simulating a discrete center. It is not even entirely clear
what should be our “reference sound source.” We can imagine an ideal
isotropic diffuse field which envelops the listener from all directions, but
this would be impossible to reproduce using a pair of speakers placed in
front of the listener, even with acoustic help from a good listening room.

Another issue is with the diffuse field transfer function—it’s usually too
smooth because it’s an average over all the sources on the sphere. Whereas,
the frontal transfer function always has a deep notch somewhere between
**8–10 kHz** due to destructive wave interference. As I noted above,
equalization can’t compensate it, especially under ideal anechoic
conditions. So it’s unlikely that it’s even possible to fully converge
these transfer functions.

If we consider the original goal of the diffuse field spectral correction,
starting from the “BBC dip,” we can see that its original purpose was to
[compensate for the difference between the acoustic space of a listening
room and a concert
hall](https://www.linkwitzlab.com/images/graphics/harwd.gif) (many thanks to
late Linkwitz for the scan). Gunnarson in his work proposes to use the
diffuse field compensation as a way to align the sound of speakers with *“a
reference ideal diffuse sound field,”* (as I mentioned, this is impossible
for a stereo setup) however he also mentions that the BBC dip was intended
for the same purpose.

So in my Ambisonics simulation I tried a couple of things. First I tried
creating a lot of sources behind the listener, spread across the entire rear
hemisphere, each playing its own random pink noise. When listened in
headphones via **BinauralRenderer** it sounded quite enveloping. However,
trying to equalize the frontal sources to have the same spectral profile
yielded unsatisfactory results.

Then I restricted the simulated diffuse field to two uncorrelated rear
sources, placed in symmetry with the front sources, that means at **±138°**.
This configuration looked similar to the classic [Quadraphonic
sound](https://en.wikipedia.org/wiki/Quadraphonic_sound) rectangle. I
recalled that the main acoustic flaw of quadraphonic was inability to create
stable side sources, and also the “hole in the middle” due to wider angle of
the front speakers, but reproduction of surround diffuse images was just
fine. Interestingly, when the front sources were equalized to have the same
spectral profile as these rear sources, they started sounding much more like
the “full rear hemisphere” setup that I have tried initially.

For comparison, here are my compensation curve, the BBC dip, and the diffuse
field compensation curve for stereo speakers (**D/R = 0dB**) which Gunnarson
sees as the “more detailed correction” than the former:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLTS4R3Vg4GFoJhwQQKZ3ixrV2ilr8BeAA-tQox0v4Drqr6_B8Eq_Z9mGjJ8McSIrfFHlAv-mTmmorM5q2P_yQr7eZGdOkWxPdqhyDORZ7VnMglS7krJQdqLtuph3X4-eDw4PM2ICimZ2tBzICKLp4Ayy2AQdyPqMN5L2Lv4EaSQd5VDb29HmimTMx56D2/s16000/St-to-DF-KU100sim-Gunnarson-vs-BBC-dip.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLTS4R3Vg4GFoJhwQQKZ3ixrV2ilr8BeAA-tQox0v4Drqr6_B8Eq_Z9mGjJ8McSIrfFHlAv-mTmmorM5q2P_yQr7eZGdOkWxPdqhyDORZ7VnMglS7krJQdqLtuph3X4-eDw4PM2ICimZ2tBzICKLp4Ayy2AQdyPqMN5L2Lv4EaSQd5VDb29HmimTMx56D2/s700/St-to-DF-KU100sim-Gunnarson-vs-BBC-dip.png)

Indeed, we can see that Gunnarson’s curve (green) has the same dip as the
BBC EQ curve (yellow), and in general it follows the trend of the KU-100
simulation curve (blue), albeit it is much smoother.

## Notes on Equalization Approaches

In previous sections we have touched the question of equalization of the
center image. Let’s consider how it can be achieved in practice. If we just
apply our hypothetical “phantom center EQ” to the entire stereo signal, that
will inevitably affect **all directions**, not just the phantom center.
Ideally, we need to apply our EQ to the phantom center only. For that, the
recording ideally needs to be object-based, that is composed of individual
audio tracks with attached coordinates that are used by a renderer which is
aware of the actual speaker configuration that is being used. However, as I
checked on the MPEG-H authoring plugin (version **4.0.0** from 2020) they
actually do not apply any spectral compensation to objects at the frontal
location when rendering into stereo **speakers.**

As for binaural rendering, the situation is different. Since a binaural
renderer employs some kind of HRTF, the results will be similar to our
anechoic simulation in the previous section. However, use of non-matching
HRTF with headphones lacking individual calibration can easily produce tonal
colorations on its own. Because of that, some binaural renderers use more
conservative curves. For example, [the paper “A Practical Approach to the
Use of Center Channel in Immersive Music
Production”](https://aes.org/publications/elibrary-page/?id=22322) by
K. Richard et al. compares Dolby Atmos binaural renderer vs. “true” binaural
rendering using KU-100 HRTFs. From the illustrations we can see that Dolby
binaural renderer uses much smoother curves that can be considered more like
“head-related equalization” rather than actual HRTFs.

For non-object-based recordings (that is, the majority of commercial
recordings), the only way to faithfully extract center objects is to perform
some neural network-based (or “AI”, to say it more fashionably) process of
stems extraction, and effectively re-synthesize the acoustic scene. But
this process is too complicated for me to try, and likely has its own
caveats. A more realistic approach is to apply some kind of upmixing into
multichannel, [at least into
LCR](/2025/08/finding-best-stereo-to-lcr-upmixer.html) and use the resulting
center channel as the approximation for center objects, process this center
with “phantom center EQ” and downmix back into stereo. Or start with a
multichannel mix in the first place.

The interesting thing is that even multichannel and object-based mixes can
have “phantom center” sources. As the K. Richard’s paper states, *“phantom
center images are often preferred over a discrete center, because of the
added spaciousness, envelopment, etc.”* For example, if we look at Pink
Floyd’s “Dark Side of the Moon” 5.1 mix from **2003**, and analyze the
correlation between left and right channels on the section of the “Time”
track with leading vocals (*“Taking away the moments that make up the dull
day”*), we can see that all three channels: Left, Center, and Right are
mutually correlated, and the levels of Left and Right are actually higher
than of the Center:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzekeq3BoKebSU4FCU7Qc5sl37mUUZwH_sV-uH_S1DeX0jZENiFaNpPz4dAhfi5mB0SfmkvVH8cHSLqPlPr5ch4ZTqccl1uflTeTdCeHgCZVGhRXcTYd99bkQpZXV0jfhO8emSgUREYjGHthdJsH04FtGqRX8AQQdjK38ZStyHxSyR6Aj5yHmYdA_N01pw/s16000/PF-Time-Correlation.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzekeq3BoKebSU4FCU7Qc5sl37mUUZwH_sV-uH_S1DeX0jZENiFaNpPz4dAhfi5mB0SfmkvVH8cHSLqPlPr5ch4ZTqccl1uflTeTdCeHgCZVGhRXcTYd99bkQpZXV0jfhO8emSgUREYjGHthdJsH04FtGqRX8AQQdjK38ZStyHxSyR6Aj5yHmYdA_N01pw/s917/PF-Time-Correlation.png)

That means, the producer intentionally wanted to achieve that classic
feeling of the phantom center vocal, however it has reinforced it a bit with
the physical center in order to avoid leaving a hole in the middle if the
listener has a wide home theater-like setup. The spectrums of the left and
right channels are not corrected for HRTF and are practically identical to
the center:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxJrAFoFMuy4HaYjsKgh7ei_26XL-hSN4uLaxDlhJk7Gu6bBaSrZnl0nQ_fyD7eOX_9iw2NWawAGU2ND7eewQbsK2y-uypyVh7UvZOqFfKH-O-G3UdwqInt0wJn8F-x-iRnuIA25ZZsb3hipkYimJBPdvi9VdyQseuT3a9-R_13wGQknIvhl2PLpi0COWu/s16000/PF-Time-Spectrum.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxJrAFoFMuy4HaYjsKgh7ei_26XL-hSN4uLaxDlhJk7Gu6bBaSrZnl0nQ_fyD7eOX_9iw2NWawAGU2ND7eewQbsK2y-uypyVh7UvZOqFfKH-O-G3UdwqInt0wJn8F-x-iRnuIA25ZZsb3hipkYimJBPdvi9VdyQseuT3a9-R_13wGQknIvhl2PLpi0COWu/s700/PF-Time-Spectrum.png)

I would hypothesize that since the level of the center channel here is much
lower than of the left and right combined, it gets psychoacoustically
integrated with the phantom center, and the resulting spectral discrepancy
is left unnoticed. Similarly to humans, automatic stereo to surround
upmixers also rarely pull all correlated components into the center channel
(they can do that, but the user has to enforce this setting), spreading them
instead across the front channels.

So, even use of a multichannel source (be it the actual multichannel mix, or
an upmix of a stereo source) still requires some work to find the correlated
components that form the phantom center acoustic image. But as I noted in
[the post on LCR
upmixing](/2025/08/finding-best-stereo-to-lcr-upmixer.html), extracting
three channels from two is an ill-posed problem. While modern upmixers are
excellent, they rely on active steering and decorrelation which inevitably
alters the phase relationships of the original stereo mix, often introducing
artifacts on complex or uncorrelated signals.

Paradoxically, the cheapest and most reliable tool—mid/side processing—can
provide better fidelity by avoiding introducing phase artefacts because it
does not create any new channels. By simply summing the signals from the
left and the right channels of a stereo recording we get a **6 dB** boost
for strongly correlated components. Note that it does not completely isolate
the center, thus our equalization will affect side-panned sources as well,
just to a lesser degree.

Many equalizers can work in the “M/S mode”—they transform left/right stereo
into mid-side, apply the EQ to these signals, and then transform them back
into stereo. However, if they use minimum-phase EQ filters (IIR filters
being a typical example), the change in the phase that these filters
inevitably have on the M/S components creates leakage between channels
during the reverse transformation into stereo, as I [have illustrated
previously](/2023/06/on-midside-equalization.html). Thus, a much cleaner
approach is to use a linear phase M/S equalizer which only affects the
magnitude of the signals. Note that it’s not without drawbacks, too—linear
phase filtering can add substantial latency and also may add pre-ringing
artifacts.

But linear filtering is what I use in practice, anyway. If the intended
equalization is relatively simple (like the Linkwitz EQ or the BBC dip),
then a plugin like [**ToneControl**](https://goodhertz.com/tone-ctrl/) by
Goodhertz can suffice. However, for a more “surgical” kind of EQ, I use
[**LP10**](https://ddmf.eu/lp10-linear-phase-equalizer-plugin/) by DDMF. Of
course, there is always an option to use generic convolution plugins with a
custom-made linear phase FIR filter, that’s in case the **10** bands
provided by **LP10** are not enough, or when we need to optimize the
latency.

Note that Linkwitz did not mention that he used anything like M/S EQ for
his proposed filter. I suppose, he was applying it to the whole stereo
signal? Same thing for the “BBC dip” which is also considered as the
“speaker EQ.” This makes these approaches more like tweaks on the
room/speaker target curve, rather than actual phantom source correction.

I think, this part was long enough, so I will stop here. In the next part of
the post, we will explore how real stereo speakers behave in a real room.
