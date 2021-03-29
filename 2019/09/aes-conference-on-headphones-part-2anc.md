# AES Conference on Headphones, Part 2—ANC, MEMS, Manufacturing

I continue to share my notes from the recent [AES Conference on
Headphones](http://aes.org/conferences/2019/headphones). This post is
about Active Noise Cancellation (ANC), Microelectromechanical (MEMS)
technologies for speakers and microphones, and topics on headphones
manufacturing, measurement, and modelling.

## Active Noise Cancelling

Apparently, Active Noise Cancelling (ANC) is a big thing for the
consumer market and is an interesting topic for research because it
involves both acoustics and DSP. ANC technologies save our ears because
they allow listening to music in noisy environments without blasting it
at levels that damage hearing. Typically, ANC is implemented on closed
headphones or earphones as their physical construction allows to
attenuate some of the noise passively, especially at middle and high
frequencies. Low frequency noise has to be eliminated using active
technologies. Since this requires embedding electronics into headphones,
even for wired models, it also gives headphone designers a good
opportunity to add "sound enhancing" features like active equalization
and crossfeed.

The obvious approach to active noise cancellation is to put a microphone
on the outer side of the ear cup and generate an inverse sound via the
speaker to cancel the noise at the eardrum. However, as there is always
some leakage of the noise inside the ear, "slow" or too aggressive noise
inversion will create unpleasant [comb filter
effect](https://en.wikipedia.org/wiki/Comb_filter) due to summing of the
noise with its delayed inverted copy.

An interesting idea that helps to win some time for more precise noise
cancelling is to capture the noise from the ear cup on the opposite ear,
as in this case the acoustic wave of the noise will have to travel some
extra distance over the head. However, as an engineer from Bose has
explained to me, the actual results will depend on the plane of the
sound wave with respect to the listener.

One consideration that has to be taken into account when generating an
inverse noise is to avoid creating high peaks in the inverse transfer
function from notches in the original function. The process that helps
to avoid that is called "regularization". It is described in [this AES
paper](http://www.aes.org/e-lib/browse.cfm?elib=18517) from 2016.

Use of ANC puts additional requirements on the drivers used in the
headphones. As low frequency noise needs the most attenuation, a high
displacement speaker driver is required to produce an adequate counter
pressure. This typically requires increasing the size of the driver
which in turn increases the amount of distortion at higher frequencies.
[This paper](http://www.aes.org/e-lib/browse.cfm?elib=20526) contains an
interesting analysis of these effects for two commercial drivers.

### "Hear Through"

"Hear Through" is a commonly used term for describing the technology
that presents the environmental sounds to the listener wearing noise
cancelling headphones. This is achieved by playing the sound captured by
the outer microphone into the corresponding ear (basically, performing a
real-time "dummy head" sound field capture which I was describing
in [the previous
post](/2019/09/aes-conference-on-headphones-part.html)).
The Sennheiser AMBEO headset and [AKG N700NC
headphones](https://www.akg.com/Headphones/Wireless%20Headphones/AKG+N700NC+WIRELESS.html)
implement "hear through", however not perfectly according to my
experience—the external sound has some coloration and some localization
problems. Although, that doesn't affect the ability to understand
speech, it still feels unnatural, and there is some ongoing research to
make "hear through" more transparent.

According to the study described in the paper ["Study on Differences
between Individualized and Non-Individualized Hear-Through
Equalization..."](http://www.aes.org/e-lib/browse.cfm?elib=20520), there
are two factors that affect "transparency" of the played back sound.
First, it is the fact that closed headphones act as a filter when
interacting with the ear, and this filter has to be compensated. Second,
it's already mentioned sound leakage. Because "hear through" involves
sound capture, processing, and playing back, it has non-negligible
latency that creates a comb filter with the original leaked noise. The
researchers demonstrated that use of personal "hear through"
equalization (HT EQ, specific both to the person and the headphones) can
achieve very convincing reproduction. However, the acquisition of HT EQ
parameters has to be performed in an anechoic room (similar to classic
HRTF acquisition), and thus is not yet feasible for commercial products.

##  MEMS Technologies

I must admit, I've been completely unaware of this acronym before I
attended the conference. But turns out, this technology isn't something
new. A portable computer you use to read this article contains several
MEMS microphones in it. The key point about this technology is that
resulting devices are miniature and can be produced using the same
technologies as the ones used for integrated circuits (IC). The
resulting device is packaged into a surface mounted (SMD) component. The
use of IC process means huge production volumes are easily possible, and
the variation in components is quite low.

Initially I thought that MEMS means piezoelectric technology, but in
fact any existing transducer technology can be used for engineering MEMS
speakers and microphones: electret, piezo, and even electrostatic as was
demonstrated in the paper ["Acoustic Validation of Electrostatic
All-Silicon MEMS-Speakers"](http://www.aes.org/e-lib/browse.cfm?elib=20522).

MEMS microphones are ubiquitous. The biggest manufacturer is Knowles.
For example, their popular
model
[SPH1642HT5H-1](https://www.knowles.com/docs/default-source/model-downloads/sph1642ht5h-1-rev-b.pdf)
has high SNR and low THD costs less than **$1** if bought in batches.
Due to the miniature size MEMS microphones are omnidirectional across
the whole audio range. Because of this fact I was wondering whether
MEMS microphones can be used for acoustic measurements. Turns out,
researchers were experimenting with them for this purpose since 2003
(see [this IEEE paper](https://ieeexplore.ieee.org/document/1257368)).
However, the only commercially available MEMS measurement microphone I
could find—from IK Multimedia—[doesn't seem to provide a stellar
performance](https://www.audioxpress.com/article/fresh-from-the-bench-ik-multimedia-arc-2-5-mems-test-microphone).

Engineering a MEMS speaker is more challenging than a microphone due to
miniature size. Apparently, the output sound level decays very quickly,
so currently they can't be used for laptop or phone speakers. The only
practical application for MEMS speakers at the moment is in-ear
headphones where the effect of a pressure chamber in an occluded ear
canal boosts their level a bit. A prototype of MEMS earphones was
presented in the paper ["Design and Electroacoustic Analysis of a
Piezoelectric MEMS In-Ear
Headphone"](http://www.aes.org/e-lib/browse.cfm?elib=20524). The
earphone is very minimalist and can be made DIY because it basically
consists of a small PCB with a soldered on MEMS speaker and a 3D-printed
enclosure. The performance isn't satisfying yet, but there is definitely
some potential.

## Headphones Manufacturing, Measurement, and Modelling

This is a collection of notes that I've gathered from the workshop on
"Practical Considerations of Commercially Viable Headphones" (a
"workshop" format means that there was no paper submitted to AES), my
chats with engineers from headphone companies, and conversations with
the representatives of measurement equipment companies.

### Speaker driver materials

The triangle of driver diaphragm properties:

[![](https://1.bp.blogspot.com/-Y0crY-jZSKo/XXgoETm-NEI/AAAAAAAAOvo/TV_7u6i89b88qH_X1otzE0CmMoVvnIBEACLcBGAsYHQ/s1600/Triangle%2Bof%2Bdriver%2Bdiaphragm%2Bproperties.png)](https://1.bp.blogspot.com/-Y0crY-jZSKo/XXgoETm-NEI/AAAAAAAAOvo/TV_7u6i89b88qH_X1otzE0CmMoVvnIBEACLcBGAsYHQ/s1600/Triangle%2Bof%2Bdriver%2Bdiaphragm%2Bproperties.png)

The effect of the low mass is in a better sensitivity, as lower force is
required to move the diaphragm. Good mechanical damping is needed for
producing transients truthfully and without post-ringing. And the higher
the rigidity, the more the diaphragm resembles a theoretical "piston",
and thus has lower distortion.

In practice, it is hard to satisfy all of the properties. For example,
the classical paper cone diaphragm has good rigidity but high mass.
Rigid metal diaphragms may lack damping and "ring". I would also
add the fourth dimension here—the price. There are some diaphragms on
the market that satisfy all three properties, but they are very
expensive due to use of precise materials and a complicated
manufacturing process.

Driver diaphragms for headphone speakers are typically produced from
various polymers as they can be stamped easily. In terms of the
resulting diaphragm quality, the following arrangement has been
presented, from worst to best:

-   [PET (Polyethylene
    terephthalate)](https://en.wikipedia.org/wiki/Polyethylene_terephthalate);
-   [PEN (Polyethylene
    naphthalate)](https://en.wikipedia.org/wiki/Polyethylene_naphthalate);
-   [PEI
    (Polyetherimide)](https://en.wikipedia.org/wiki/Polyetherimide);
-   [PEEK (Polyether ether
    ketone)](https://en.wikipedia.org/wiki/Polyether_ether_ketone).

However, it looks like even better results are achieved with beryllium
foil ([used by Focal
company](https://www.focal.com/sites/www.focal.fr/files/shared/catalog/document/whitepaper_headphones.pdf)), but these diaphragms are quite expensive.

If we step away from dynamic drivers, planar magnetic drivers are very
well damped and have a lightweight diaphragm, they also move as a plane.
The problem with their production is a high chance of defect, each
speaker has to be checked individually, that’s why they mostly used in
expensive hi-end headphones. Big companies like AKG, Beyerdynamic,
Sennheiser, and Shure use classic dynamic drivers even on their flagship
models.

### Measurements and Tuning

Regarding the equipment, here is a measurement rig for over-ear and
in-ear headphones from Audio Precision. It consists of [APx555 Audio
Analyzer](https://www.ap.com/analyzers-accessories/apx555/), [APx1701
Test
Interface](https://www.ap.com/analyzers-accessories/accessories/apx1701/)
(basically a high-quality wide bandwidth amplifier), and [AECM206 Test
Fixture](https://www.ap.com/analyzers-accessories/accessories/aecm206/)
to put the headphones on.

[![](https://1.bp.blogspot.com/-SL4ftjzKlnc/XXqrzH2ZPjI/AAAAAAAAOv8/6605iyxjDZ0zMWzd5VdpJ2KKw2FpgimZwCLcBGAsYHQ/s1600/AP%2BRig%2Bsmall.jpg)](https://1.bp.blogspot.com/-SL4ftjzKlnc/XXqrzH2ZPjI/AAAAAAAAOv8/6605iyxjDZ0zMWzd5VdpJ2KKw2FpgimZwCLcBGAsYHQ/s1600/AP%2BRig%2Bsmall.jpg)

APx555 is modular. The one in the picture is equipped with a Bluetooth
module, and I've been told that it supports HD Audio protocols: AAC,
aptX, and LDAC.

Besides AP's AECM206 test fixture, a full head and torso simulator
(HATS), e.g. [KEMAR from
GRAS](https://www.gras.dk/products/head-torso-simulators-kemar) can be
used. For earphone measurements it is sufficient to use [an ear
simulator](https://www.gras.dk/products/ear-simulator) as earphones do
not interact with the pinna.

Companies Brüel & Kjær and Listen Inc also presented their measurement
rigs and software. Prices on this equipment are on the order of tens of
thousands of dollars, which is what you would expect.

Measuring the headphones correctly is a challenging problem. There is a
nice summary in [these slides, courtesy of CJS
Labs](http://www.cjs-labs.com/sitebuildercontent/sitebuilderfiles/HeadphoneMeasurements.pdf).
The resulting frequency response curves can vary due to variations in
placement of the headphones on the fixture. Usually, multiple trials are
required with re-positioning of the headphones and averaging.

When measuring distortion, the first requirement is to perform it in
quiet conditions to avoid external noise from affecting the results.
Second, since measurement microphones are typically band-limited to the
audio frequencies range, THD measurement at high frequencies can't be
done adequately using the single tone method. Instead, non-linearity is
measured using two tone method (intermodular distortion).

The usual "theoretical" target for headphones is to imitate the sound of
good (linear) stereo loudspeakers. The deviation between frequency
response of the headphones from the frequency response recorded from
loudspeakers using a HATS simulator is called "insertion gain". Ideally,
it should be flat. However, listening to the speakers can happen under
different conditions: extremes are free field and diffuse field. So the
real insertion gain of headphones is never flat, and it is usually
tweaked according to the taste of the headphones designer.

There is one interesting effect which occurs when using closed-back
headphones or earphones. Due to ear canal occlusion, the sound level
from headphones must be approximately **6 dB** higher to create the same
perceived loudness as from a loudspeaker. This is called “Missing 6 dB
Effect”, and a full description can be found in [this
paper](https://www.etymotic.com/media/publications/erl-0137-1982.pdf).
Interestingly, the use of ANC could help with reducing the effects of
occlusion, see the paper ["The Effect of Active Noise Cancellation on
the Acoustic Impedance of
Headphones"](http://www.aes.org/e-lib/browse.cfm?elib=20498) which was
presented on the conference.

Speaking of ANC, measuring its performance is yet another challenge due
to the absence of industry-wide standards. This is explained in the
paper ["Objective Measurements of Headphone Active Noise Cancelation
Performance"](http://www.aes.org/e-lib/browse.cfm?elib=20500).

### Modelling and Research

Thanks to one of the attendants of the conference, I've learned about
works of Carl Poldy (he used to work at AKG Acoustics, then at Philips),
for example his [AES seminar from 2006 on Headphone
Fundamentals](http://www.aes.org/tutorials/download/file.cfm?ID=48). It
provides classical modelling approaches using electrical circuits and
[two-port ABCD model](https://en.wikipedia.org/wiki/Two-port_network).
The two-port model can be used for simulating in the frequency domain.
Time domain simulation can be done using SPICE, see [this publication by
Mark Kahrs](https://secure.aes.org/forum/pubs/conventions/?elib=15038).

However, these modelling are more of "academic" nature. "Practical"
modelling was presented by the representatives of [COMSOL
company](https://www.comsol.com/products). Their Multiphysics software
can simulate creation of acoustic waves inside the headphones and how
they travel through the ear's acoustic canals and bones. This was quite
impressive.

Another interesting paper related to research, ["A one-size-fits-all
earpiece with multiple microphones and drivers for hearing device
research"](http://www.aes.org/e-lib/browse.cfm?elib=20523) presents a
device that can be used in hearables research. It consists of an ear
capsule with two dynamic drivers and two microphones. It is called
"Transparent earpiece", more details are available
[here](https://www.hoertech.de/en/f-e-products/transparent-earpiece-2.html).
