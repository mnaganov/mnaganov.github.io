# DIY Headphone Equalization

## Motivation

Back in time I already experimented with commercial packages for
headphone equalization: [Morphit by
Toneboosters](/2017/12/on-headphone-normalization.html) and [Reference
by Sonarworks](/2017/12/on-headphone-normalization-part-2.html).  They
offer means for correcting the frequency response of selected models
of headphones in order to bring the sound closer to either a
"reference" target curve or to the sound of some other model of
headphones.

Although I still own Morphit I decided to try to devise my own way for
headphone equalization. I had the following reasons for this:

1. Although the range of headphone models measured by Toneboosters is
   quite wide, some of the models I do use: Audeze EL-8 Closed and
   Open are missing.

2. I intend to use parametric equalizers with limited number of
   filters available—the equalizer built into MOTU AVB card.  I also
   want to avoid using computers to save myself from the noise of
   their fans.

3. I wanted to be sure that I apply correction that is relevant to my
   pair of headphones and to my head. Sonarworks emphasize that there
   are variations between different pairs of the same model and offers
   a service to measure your pair, or to sell you a pair of headphones
   which they have measured on their rig.  I would also add that the
   low end performance of over-ear cans would differ depending on the
   state of the pads and the shape of the head of the person wearing
   them.

Thus my plan was to perform my own measurements of the headphones
I have and try to bring their sound closer to each other.
The practical task I had at hand was to bring the sound of
Beyerdynamic T90 and Shure SRH1540 to the sound of Audeze EL-8
I mentioned above. Why to do that? One word—comfort. Let's compare
how much do weight the headphones I own (with cable):

| Model              | Weight, grams  |
| :---               |            ---:|
| Audeze EL-8 Closed | 576            |
| Audeze EL-8 Open   | 533            |
| Beyerdynamic T90   | 394            |
| Shure SRH1540      | 331            |
| Massdrop 6XX       | 317            |
| AKG K240 Studio    | 290            |

Although I really love the sound of EL-8 (both variants) their weight
is killing me! So my plan was to equalize T90 to sound like the open
model and SRH1540 to sound like the closed model. I chose T90 and
Shure because their sound feels as "spacious" as in EL-8s, and it's
only their tuning that feels wrong to me: T90 have too much highs, and
it's unnatural and fatiguing, while SRH1540 have a very pronounced
V-shaped tuning which I wanted to "flatten".

## Measurement Methods

I used two methods I had previously mentioned in [this
post](/2020/05/sennheiser-ambeo-headset-applications.html): moving
microphone averaging (MMA) and on-head measurement using Sennheiser
Ambeo Headset. Since the time I've made that post I've got a couple of
updates on them.

### Clock Drift with Ambeo Headset

One problem I had with Ambeo Headset is that due to lack of external
synchronization use of Ambeo's ADC for input and an external DAC
for output resulted in clock drift which creates a spectral shift
when doing long (lasting several seconds) sweep measurements.

I have partially solved this problem by using the feature of Mac OS X
audio system called **"Aggregate Device"**. It allows combining
two or more digital audio devices into a single one, and what's
important, takes care of synchronizing their clocks:

[![](https://1.bp.blogspot.com/-DjTRJymUHG4/XwfqHJVApcI/AAAAAAAARM0/FJRBvbVv8mEwXrV4p2C5ZFOrPP0O6A2vACLcBGAsYHQ/d/os-x-aggregate-device.png)](https://1.bp.blogspot.com/-DjTRJymUHG4/XwfqHJVApcI/AAAAAAAARM0/FJRBvbVv8mEwXrV4p2C5ZFOrPP0O6A2vACLcBGAsYHQ/s672/os-x-aggregate-device.png)

This actually fixes the problem with shift of the measured amplitude
across spectrum. However, because the drift correction only happens
at certain periods, there is still phase shift occuring, especially
at high frequencies. Due to this care must be taken when averaging
multiple measurements.

### MMA and Ambeo On-Head Methods Accuracy

Recall that I tried using the MMA method for reverse engineering the
equalization applied by Audeze Cipher Cable for EL-8. Recently I
cross-checked these measurements by performing an electrical
measurement of this cable into a dummy load. Here is the FR graph
acquired by QA401:

[![](https://1.bp.blogspot.com/-ndisIdYn5UU/XwfqU14ALcI/AAAAAAAARM4/wJn0L7dqmg49OIEt55nWrU3a2uhiyzmjACLcBGAsYHQ/d/cipher-cable-qa401.gif)](https://1.bp.blogspot.com/-ndisIdYn5UU/XwfqU14ALcI/AAAAAAAARM4/wJn0L7dqmg49OIEt55nWrU3a2uhiyzmjACLcBGAsYHQ/s600/cipher-cable-qa401.gif)

It confirms that there is a bass boost, but no other modifications,
whereas my MMA measurements were also showing a "scoop" at middle
frequencies. So turns out that scoop is a measurement error.

I decided to figure out the accuracy and usable range of both
methods by doing several measurements in a row, averaging the result,
then repeating the same process and comparing the averages.
For the MMA method I came up with the following graph:

[![](https://1.bp.blogspot.com/-KPpqPUqZrv8/XwfqeFmLv5I/AAAAAAAARNA/GA0xHgsPf28NlwK2PUa15NopsKnEyNYtwCLcBGAsYHQ/d/mma-method-variability.png)](https://1.bp.blogspot.com/-KPpqPUqZrv8/XwfqeFmLv5I/AAAAAAAARNA/GA0xHgsPf28NlwK2PUa15NopsKnEyNYtwCLcBGAsYHQ/s600/mma-method-variability.png)

As we can see, the usable range is from **200 Hz** and the variance
is within **+/- 0.5 dB**. While on-head measurement using Ambeo
headset gives the following:

[![](https://1.bp.blogspot.com/-_zv-jHn3VuM/XwfqlVHNIYI/AAAAAAAARNI/Y7SeFIKiTn4snZBQPivOLaQ-fy32gOwUgCLcBGAsYHQ/d/on-head-method-variability.png)](https://1.bp.blogspot.com/-_zv-jHn3VuM/XwfqlVHNIYI/AAAAAAAARNI/Y7SeFIKiTn4snZBQPivOLaQ-fy32gOwUgCLcBGAsYHQ/s600/on-head-method-variability.png)

So, the usable range is up to **4 kHz** with the same variance. That
means, the range from **200 Hz** to **4 kHz** can be used for
judicious merging of the curves. Note that the resulting curve can't
be compared with measurements obtained using standard headphone
rigs. However, it can be used for comparing the tuning of various
on-ear headphones and deriving equalization between them.

Note that even measurements done using different "standardized" head
and torso simulators still can't be compared directly, as it can be
seen from the past exchanges between Tyll Hertsens (ex-Innerfidelity)
and
[Head-Fi](https://www.innerfidelity.com/content/head-fi-contradicts-innerfidelity-sony-mdr-z1r-measurements),
and
[Audeze](https://www.innerfidelity.com/content/how-do-measurements-sound-audeze).

Also note that before averaging the measurements done using Ambeo
Headset I had to convert them to minimum phase first, because the
clock drift I mentioned above produces skewed phase:

[![](https://1.bp.blogspot.com/-_Vr07-BoNSA/Xwfqxr_snvI/AAAAAAAARNQ/xg3tZ974fBUI3AL_zmm1NCUAR2wgx4qIwCLcBGAsYHQ/d/on-head-phase-shift.png)](https://1.bp.blogspot.com/-_Vr07-BoNSA/Xwfqxr_snvI/AAAAAAAARNQ/xg3tZ974fBUI3AL_zmm1NCUAR2wgx4qIwCLcBGAsYHQ/s600/on-head-phase-shift.png)

Thus we can only average the magnitude data. But that's OK considering
that the MMA method, being a single channel measurement also provides
magnitude data only.

## The Equalization Process

This is the process I used:

1. Obtain an averaged measurement of the headphones' left driver from
   **5** MMA measurements. I was performing these measurements by
   waving slowly the headphone earcup playing pink noise in front of
   the Beyerdynamic MM-1 microphone while capturing RTA 1/48 octave
   measurements in REW with infinite aveaging until I've reached
   **100** averages.

2. Obtain an averaged measurement of the same driver from **5** on-head
   reseatings, this time using a **1M** measurement sweep from the
   headphone into Sennheiser Ambeo Headset microphone.

3. Merge the averaged measurements somewhere between **1 kHz** and
   **2 kHz**. I understand that this brings uncertainty in the process.
   However, the point can actually be found by comparing the slopes
   of the two curves. I applied 1/12 octave smoothing to both curves
   to simplify the process.

4. Repeat the same process with another pair of headphones.

5. Calculate the equalization curve by performing "A / B" operation
   in REW, where **A** is the curve of the target headphones and
   **B** is the curve of the headphones being equalized.

6. Approximate this curve by adjusting PEQ in MOTU AVB equalizer.

Now here is an example of applying these steps to equalize
Beyerdynamic T90 to sound like Audeze EL-8 Open back.

Below are the averaged graphs obtained for T90 from MMA and on-head
measurements:

[![](https://1.bp.blogspot.com/-tWAoGh11DxY/Xwfq8AMyIPI/AAAAAAAARNY/kzaO15bsgJ8T7FJPr9eWGsqs3aNaYMkOQCLcBGAsYHQ/d/t90-mma-head.png)](https://1.bp.blogspot.com/-tWAoGh11DxY/Xwfq8AMyIPI/AAAAAAAARNY/kzaO15bsgJ8T7FJPr9eWGsqs3aNaYMkOQCLcBGAsYHQ/s600/t90-mma-head.png)

The merge point is at **2 kHz**. And below are the averaged graphs
for Audeze EL-8 Open:

[![](https://1.bp.blogspot.com/-hMSsc5M5E9w/XwfrEFmUOcI/AAAAAAAARNc/udKrmcjhb8kRJ_TCjol7U6YRyj4VCBTTgCLcBGAsYHQ/d/el8-open-mma-head.png)](https://1.bp.blogspot.com/-hMSsc5M5E9w/XwfrEFmUOcI/AAAAAAAARNc/udKrmcjhb8kRJ_TCjol7U6YRyj4VCBTTgCLcBGAsYHQ/s600/el8-open-mma-head.png)

Note that the **5–8 kHz** drop that Tyll and Audeze were arguing about
is absent from the MMA measurement. Whereas the notch around
**5–6 kHz** seen in on-head measurements done using Ambeo headset is the
artefact of this headset, it appears on almost all measurements I've
done using this technique.

And after we have obtained two merged curves it's time to divide
them and obtain the suggested equalization curve. Below this curve
is superimposed with the actual curve I've ended up using applying
using the parametric equalizer of MOTU AVB. It doesn't follow the
suggested curve precisely, it's a compromise that takes into account
capabilities of the DSP on MOTU and my subjective judgement obtained
by fast switching between these headphones on various tracks:

[![](https://1.bp.blogspot.com/-CimX9DrrB3w/XwfrNrkWyBI/AAAAAAAARNk/D1uYAQlw5_En_-muodP5RpxmAHmzz9zrgCLcBGAsYHQ/d/t90-to-el8-open.png)](https://1.bp.blogspot.com/-CimX9DrrB3w/XwfrNrkWyBI/AAAAAAAARNk/D1uYAQlw5_En_-muodP5RpxmAHmzz9zrgCLcBGAsYHQ/s600/t90-to-el8-open.png)

[![](https://1.bp.blogspot.com/-5vKk5lKkKyM/XwfrTplFppI/AAAAAAAARNo/_u9CCuu5vFQE_0znLxcD-6293lRsRBQNACLcBGAsYHQ/d/t90-to-el8-open-motu.png)](https://1.bp.blogspot.com/-5vKk5lKkKyM/XwfrTplFppI/AAAAAAAARNo/_u9CCuu5vFQE_0znLxcD-6293lRsRBQNACLcBGAsYHQ/s600/t90-to-el8-open-motu.png)

As we can see the equalization does shave off some high frequency
from the factory tuning of T90 making them sounding more neutral.

And the similar procedure has been applied to equalize Shure SRH1540
to sound more like Audeze EL-8 Closed back. The suggested and
resulting equalization curves are below:

[![](https://1.bp.blogspot.com/-VqswErvx6tw/XwfrdH0fbLI/AAAAAAAARNs/mbMKTMUseWMstLyPNQtcckGcbp3bm8GtwCLcBGAsYHQ/d/srh1540-to-el8-closed.png)](https://1.bp.blogspot.com/-VqswErvx6tw/XwfrdH0fbLI/AAAAAAAARNs/mbMKTMUseWMstLyPNQtcckGcbp3bm8GtwCLcBGAsYHQ/s600/srh1540-to-el8-closed.png)

[![](https://1.bp.blogspot.com/-UBZrM-pfEo0/XwfrjWRhYGI/AAAAAAAARN4/tiO7ts4tGLAb1cq52RQC9tbaQ9_-R_HnQCLcBGAsYHQ/d/srh1540-to-el8-closed-motu.png)](https://1.bp.blogspot.com/-UBZrM-pfEo0/XwfrjWRhYGI/AAAAAAAARN4/tiO7ts4tGLAb1cq52RQC9tbaQ9_-R_HnQCLcBGAsYHQ/s600/srh1540-to-el8-closed-motu.png)

The major correction here is to "straighten" the V-shape of
the factory tuning.

The downside of the equalization done using IIR PEQ filters is
non-uniform group delay. Ideally we would want to use linear
phase filters. This is something to consider for future
improvements.

## Conclusions

Personally I liked the result of re-tuning which allowed me to
combine the comfort of one pair of headphones with the sounding
of another pair. As with any equalization we need to understand
its limits. Of course, the properties of the drivers used in
the headphones have great influence on the perceived sound "quality".
As an example, initially I tried to make Massdrop 6XX to sound
like EL-8 Open (recall that 6XX are second lightest headphones
among those I have), however I was missing the sense of spatiousness
and of having the soundstage wider than the headphones. T90 replicates
this feeling better.

What are the alternatives for the approach I used here?

1. Use ready-made equalization toolkit like Morphit. Pros are
   obvious: you just select the source and the target headphones
   and start "morphing". However, its database is not complete,
   and after all, you don't know how close your two pairs of
   headphones are to their measurements.

2. Use some database provided by an enthusiast. Similar to the
   previous one but this time the equalization curve must be derived
   by yourself. This is doable if the database provides the data in
   some numerical format, not just pictures. Here the same concern
   about the variability between headphone instances applies.  Be sure
   **not** to mix measurements provided from different sources. I know
   it appears compelling to compile graphs from various sources in
   order to create the most complete database, but this just doesn't
   make sense since curves from different rigs are not directly
   comparable. Reading [this
   post](https://crinacle.com/2020/04/08/graphs-101-how-to-read-headphone-measurements/)
   by Crinacle explains a lot of things that can deviate from rig
   to rig.

3. Order calibration for your headphones from a company like
   Sonarworks. I would do that if I were using headphones for
   professional music production, but for entertaiment purposes this
   seems like an overkill. Also, at least Sonarworks provide
   calibration data in a proprietary format only usable with their
   software. And fulfillment of measurement orders takes weeks, so it
   would be wise to approximate the equalization on your own before
   committing to that.

4. Buy or build a complete measurement rig. Yes, that's the way to go
   if you intend to perform measurements and equalizations
   routinely. Here the question is about the reliability of
   measurements. For example, I've heard from owners of the miniDSP
   EARS rig that it's not very accurate at high frequencies, thus
   either a lot of averaging is required, or use of a different method
   like MMA is needed for obtaining measurements in that region.
   Whereas rigs from GRAS and other established measurement companies
   are pricey.
