# Linkwitz LXmini—First Impressions

Initially I was planning to do the next post about my measurements of
**FiiO E5** headphone amplifier—another attempt to "calibrate" my
measurement rig against [NwAvGuy's Prism
dScope](http://nwavguy.blogspot.com/2011/03/fiio-e5-headphone-amp.html),
but I've got sidetracked by another project.

It was long time ago when I've learned about loudspeakers designed by
Siegfried Linkwitz. His promise is to deliver a great sound in
conditions of untreated domestic rooms. Sounds challenging, and his
speaker designs depart greatly from traditional "boxes." One particular
model—[LXmini](http://www.linkwitzlab.com/LXmini/Introduction.htm)
looked very unusual—made from plastic drain pipes, with drivers
positioned orthogonal to each other. I've got a chance to attend a demo
at [Burning Amp festival](http://www.burningamp.org/), and they indeed
sounded quite nice to me.

[<img src="https://3.bp.blogspot.com/-niFba9COiqU/WxnwQOF-FTI/AAAAAAAAMoQ/_J6JeAWxsUwXLCTa_ri5Z40NAyz2DrBJwCLcBGAs/s320/drivers.jpg" width="320" height="302" />](https://3.bp.blogspot.com/-niFba9COiqU/WxnwQOF-FTI/AAAAAAAAMoQ/_J6JeAWxsUwXLCTa_ri5Z40NAyz2DrBJwCLcBGAs/s1600/drivers.jpg)

I bought build plans for LXmini, but was endlessly procrastinating
actually building them. Finally, I've made an effort—ordered
[the kit from
Madisound](https://www.madisoundspeakerstore.com/2-way-speaker-kits/lxmini-linkwitz-lab-speaker-kit-pair/)
and bought the rest of parts at Home Depot. Building took several days
mainly because I had to paint the parts, wait until they dry out, then
glue them together, then wait again. I've made the speakers in black.
Here they are:

[<img src="https://1.bp.blogspot.com/-cMSgSLV6Rdk/WxnwxwYB7oI/AAAAAAAAMoY/Uh6gZ302ZJc5Qe51FWb7SE1klYruEJamACLcBGAs/s400/lxmini-and-krk.jpg" width="220" height="400" />](https://1.bp.blogspot.com/-cMSgSLV6Rdk/WxnwxwYB7oI/AAAAAAAAMoY/Uh6gZ302ZJc5Qe51FWb7SE1klYruEJamACLcBGAs/s1600/lxmini-and-krk.jpg)

Compared to powered monitors on stands they look less bulky, giving
back to the room the sense of space.

## Choosing the Amplifier

All of Linkwitz designs use active crossovers based traditionally on
[miniDSP](https://www.minidsp.com/) boards (there are of course
variations due to DIY nature of this project). With this approach, each
speaker driver requires its own amplifier, so for the pair of speakers I
had to provide **4** channels of amplification.

I decided to look for an amplifier in a half-rack width body so I can
fit it into my gear rack. The woofer driver of LXmini [is rated for
8 Ohm impedance and "long term power handling" for 80 Watts](http://www.madisoundspeakerstore.com/approx-5-woofers/seas-prestige-l16rn-sl-h1480-5-aluminum-cone-woofer/).
The second—full range driver is **4 Ohm** and requires less power. So I
decided to look for a 4 channel amplifier rated for **100 Watts** into
**8 Ohms** to have some headroom.

The choice of half-rack width amplifiers has turned out to be not very
wide. I've found some models from pro audio equipment makers: Atlas,
Crestron, Parasound, QSC, and Stewart Audio. All of them were class
D—not surprising because heat sinks that are required for delivering
this amount of power via class AB would never fit into the half-rack format.
But I wasn't afraid of class D amp, as my **JBL LSR305** monitors use
them, and I can't see any difference from class AB amplifiers in **KRK
Rokit G5**.

I've chosen [SPA4-100 from
QSC](https://www.qsc.com/systems/products/power-amplifiers/energystar-amplifiers/spa-series/spa4-100/).
It was matching my requirements exactly, and the specs state very flat
frequency response. It isn't cheap though—costing above **$800**, but
QSC is a well known brand of pro amplifiers, so my hopes were for good
quality and long term reliability.

This is how it looks in my rack:

[<img src="https://3.bp.blogspot.com/-1vakmGVfaPM/WxnryRLOYgI/AAAAAAAAMoE/hiJtEWicI3oWLkJHcCSDg0RTjEcrmpDNgCEwYBhgL/s400/qsc-in-rack.jpg" width="286" height="400" />](https://3.bp.blogspot.com/-1vakmGVfaPM/WxnryRLOYgI/AAAAAAAAMoE/hiJtEWicI3oWLkJHcCSDg0RTjEcrmpDNgCEwYBhgL/s1600/qsc-in-rack.jpg)

## Initial Setup and Check

I decided to put LXmini at the front, replacing my KRKs. I also decided
to try to get rid of my center channel because the speaker (E3c) had a
non-uniform frequency response that was quite hard to correct, and I
could always distinguish it by ear from other speakers. This left me
with a bit unusual 4.1 configuration. However, it's not the infamous
"quadro" setup, but rather the traditional 5.1 layout, just without the
center.

Since LXmini require an additional DSP which has a non-negligible delay,
I used REW to make sure the speakers are time aligned with each other.
This process is based upon frequency response measurement, and when I
looked at the measured FR I was pleasantly surprised how well the
speakers are matched:

[<img src="https://4.bp.blogspot.com/-iXnhMvy45eo/WxipaN5HDrI/AAAAAAAAMnM/-fvob5C66A4AQ4EuaZqAPzhqn2SkX9vtgCLcBGAs/s640/LXmini-FR.png" width="640" height="346" />](https://4.bp.blogspot.com/-iXnhMvy45eo/WxipaN5HDrI/AAAAAAAAMnM/-fvob5C66A4AQ4EuaZqAPzhqn2SkX9vtgCLcBGAs/s1600/LXmini-FR.png)

The graphs use "psychoacoustic" smoothing. Obviously, the irregularities
at low frequencies are due to room modes. Judging by the right channel
(red), the natural roll off of the speakers starts at **50 Hz**. BTW,
I've configured my audio chain that I can drive LXminis either on their
own in stereo configuration, or as part of surround setup with
subwoofer. These graphs are for the stereo configuration.

The interesting thing about LXmini is that unlike traditional designs,
they have quite low crossover point—around **700 Hz**, and the full
frequency range above is covered by the top speaker. Thus, the top
speaker in LXminis is properly called "full range", not "tweeter."

Then I ran [LEDR
test](https://www.stereophile.com/features/772/index.html). In short,
it's a synthesized signal that exploits HRTF in order to achieve 3D
positioning of the test sound in order to help evaluating "imaging." In
a room-speaker system with tamed early reflections and reasonably flat
FR playing this test signal produces a remarkable effect of a sound
moving in an arc in different planes, including vertical one.

Previously I tried this test with my JBL and KRK speakers set as fronts.
The KRKs were producing a more realistic picture, although the
perception of vertical movement was quite weak. With JBL, everything was
smeared. In fact, even a simple test of playing pink noise through both
stereo channels wasn't producing any sensible phantom center image with
JBLs. That's why some time ago I put them to rear channels position
where they do their job better.

## Directionality and Energy Time Curve

The key to understanding why all those speakers have different ability
to resolve the sound stage in my room lies in the character of their
interaction with it. From [my previous comparison of my JBLs with
KRKs](/2017/02/measurements-jbl-lsr-305-vs-krk-rokit.md)
I know that JBLs have wider dispersion, due to the construction of their
high frequency horn. And [LXmini has the narrowest radiation
pattern—dipole (figure
8)](http://www.linkwitzlab.com/LXmini/Design.htm).

My listening area is not symmetric, with a wall and a large book shelf
on the left side. I do have space behind the speakers, and on the right
side. Due to the reflective surfaces being close on the left, I always
have to compensate for additional sound energy there by slightly
reducing the volume level of the left speakers (yes, the for the rear
one, too). Another issue with the room is that the ceiling is quite
low—**2.4** meters (**8'**). Though, there is a large sofa with cloth
cover and the floor is carpeted, creating some natural sound
absorption.

Apparently, there are lots of reflections in my room. The question is,
how harmful are they for the sound localization cues. A good hint for
answering this question is provided by the Energy Time Curve graph. Here
is a very good [introduction from Gik Acoustics on how to interpret
it](http://www.gikacoustics.com/unpacking-etc-time-domain-measurements-early-reflections/).
Bob Katz's book "Mastering Audio" also contains useful information about
the ETC.

Let's look at the ETC graphs for LXminis in my room (listening position,
the first **30** milliseconds):

[<img src="https://1.bp.blogspot.com/-V6tewwt2Nts/Wxip2VbALgI/AAAAAAAAMnU/oKEXWkdYeG8TpaYd0JJcmaDyvM7imLxjgCLcBGAs/s640/LXmini-L-ETC.png" width="640" height="334" />](https://1.bp.blogspot.com/-V6tewwt2Nts/Wxip2VbALgI/AAAAAAAAMnU/oKEXWkdYeG8TpaYd0JJcmaDyvM7imLxjgCLcBGAs/s1600/LXmini-L-ETC.png)

[<img src="https://2.bp.blogspot.com/-yhY3R2h7HVk/Wxip2nJPrnI/AAAAAAAAMnY/duhZVb_O1JI6GpxegeUKr8tpCqbCR0rbACLcBGAs/s640/LXmini-R-ETC.png" width="640" height="334" />](https://2.bp.blogspot.com/-yhY3R2h7HVk/Wxip2nJPrnI/AAAAAAAAMnY/duhZVb_O1JI6GpxegeUKr8tpCqbCR0rbACLcBGAs/s1600/LXmini-R-ETC.png)

I would say, they look really good. The initial impulse decays to almost
**-20 dB** during the first millisecond. And all the reflections
arriving within the first **30 ms** are below **-15 dB**. That's an
exemplary performance for an untreated room. For comparison, this is how
ETC graph looks for my KRKs:

[<img src="https://4.bp.blogspot.com/-i_qryX2rGfs/WxiqSz7bmSI/AAAAAAAAMno/hh8jN6-O6tMSvgBOjkek6EokNJ1y8cSQQCLcBGAs/s640/LXmini-vs-KRK-L-ETC.png" width="640" height="328" />](https://4.bp.blogspot.com/-i_qryX2rGfs/WxiqSz7bmSI/AAAAAAAAMno/hh8jN6-O6tMSvgBOjkek6EokNJ1y8cSQQCLcBGAs/s1600/LXmini-vs-KRK-L-ETC.png)

[<img src="https://4.bp.blogspot.com/-eiz-ym8ZzSQ/WxiqS90S9gI/AAAAAAAAMnk/LQ2OWvBRHFoCKPnnw6rK53MPtG3iEgsVgCLcBGAs/s640/LXmini-vs-KRK-R-ETC.png" width="640" height="328" />](https://4.bp.blogspot.com/-eiz-ym8ZzSQ/WxiqS90S9gI/AAAAAAAAMnk/LQ2OWvBRHFoCKPnnw6rK53MPtG3iEgsVgCLcBGAs/s1600/LXmini-vs-KRK-R-ETC.png)

I left the LXmini graphs as shadowed plots for comparison. Here we see
much stronger reflections arriving within the first **5 ms**. They must
be caused by wider radiation pattern. Some of the sound radiated to the
sides immediately reflects from a closely positioned surface and reaches
the listening position almost together with the main impulse. For the
JBLs the situation is even worse:

[<img src="https://3.bp.blogspot.com/-JOuOqW3y6Fc/WxiqpritBtI/AAAAAAAAMn0/yC03aYoiLzkPEs-zdttON0HGpNQ69_TXgCLcBGAs/s640/LXmini-vs-JBL-L-ETC.png" width="640" height="308" />](https://3.bp.blogspot.com/-JOuOqW3y6Fc/WxiqpritBtI/AAAAAAAAMn0/yC03aYoiLzkPEs-zdttON0HGpNQ69_TXgCLcBGAs/s1600/LXmini-vs-JBL-L-ETC.png)

[<img src="https://3.bp.blogspot.com/-0pFRMpO0jqM/Wxiqpm5swFI/AAAAAAAAMn4/DTsz1G1y4m06gArIYy_YEsA6Q180iWIXwCLcBGAs/s640/LXmini-vs-JBL-R-ETC.png" width="640" height="307" />](https://3.bp.blogspot.com/-0pFRMpO0jqM/Wxiqpm5swFI/AAAAAAAAMn4/DTsz1G1y4m06gArIYy_YEsA6Q180iWIXwCLcBGAs/s1600/LXmini-vs-JBL-R-ETC.png)

Here we see series of strong reflections arriving within the first **5 ms**,
and also that later reflections are stronger. I'm pretty much sure
this is due to much wider radiation pattern of JBLs.

But don't get me wrong, I'm not saying that **JBL LSR305** is a bad
speaker—no, it's in fact a good one, especially considering its price.
It has a flat frequency response and very good directionality. It's just
not for a room where reflective surfaces are located close to it. I'm
sure, in a more spacious room, or in an acoustically treated room where
strong early reflections are eliminated, it will sound great and will
not have any problems with imaging.

In fact, even in my room these JBLs work great as rear speakers, due to
their proximity to the listening area. In this case, their direct sound
dominates over any reflections and they sound very true to life.

## Conclusions

LXmini is a fantastic speaker for a small untreated room due to its
narrow radiation pattern. The phantom center image created by a stereo
pair of LXminis is so strong that I've got rid of my center speaker in
surround configuration.
