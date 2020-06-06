# Understanding Microphone Calibration

A measurement microphone is an essential tool for doing any acoustic
system adjustments. Although it can not substitute ears and brain in
evaluating the quality of an audio setup, it's indispensable for a
number of tasks like speaker alignment.

When aligning speakers we perform relative measurements, for example—are
there any significant differences in the frequency response curves
between left and right speakers? What about time alignment? For these
tasks any measurement microphone working in audio range is suitable,
with no calibration required. However, once we start assessing absolute
parameters like the shape of the frequency response curve and try
"straightening" it, we need to be sure that the microphone itself
provides us with accurate data. After all, it's impossible to draw a
straight line using a curved ruler!

Here is when microphone calibration comes into play. Ideally, the
calibration file describes how exactly does this particular microphone
deviates from flat frequency response. Then the measurement program uses
this information to compensate the frequency response for the acquired
measurement data. Thus, if we measure a reference speaker tuned to flat
frequency response (like [NTi
Talkbox](https://www.nti-audio.com/en/products/talkbox)), we should
obtain a flat FR line, shouldn't we?

## A Bit of Theory

Before answering that, let's consider several basic definitions. If a
microphone receives only direct sound of an acoustic source, this is
called **free field** conditions. Because even "omnidirectional"
measurement microphones become more and more directional with rising of
the frequency, the orientation of the microphone capsule relative to the
sound source becomes important in this case. Thus, the main operating
condition is when the microphone is pointed towards the sound
source—**on-axis incidence**.

An opposite of free field is when the microphone receives the sound from
all directions (**random incidence**), this condition is called
**diffuse field**. In practice, we mostly deal with **reverberant
fields**—a mix of free and direct fields. Microphones are calibrated to
a flat frequency response either for free field conditions or for
diffuse field conditions. Due to imperfect omnidirectionality a pressure
microphone can not achieve a flat response simultaneously under both
conditions. Below is an illustration from G. Bore and S. Peus
"Microphones" brochure:

[![](https://1.bp.blogspot.com/-RapdNpIHqIY/XfmsqgR4d8I/AAAAAAAAPe0/vwVZAGRdd9IrQCZol2LIJvoUToLqRiUtACLcBGAsYHQ/s1600/diff-vs-free-field-fr.gif)](https://1.bp.blogspot.com/-RapdNpIHqIY/XfmsqgR4d8I/AAAAAAAAPe0/vwVZAGRdd9IrQCZol2LIJvoUToLqRiUtACLcBGAsYHQ/s1600/diff-vs-free-field-fr.gif)

Obviously, when measuring a sound source with a microphone, we need to
understand the conditions it was calibrated for. We also need to make
sure that we measure under these conditions! A lot of measurement
microphones accessible to audio enthusiasts are calibrated for a flat
response under anechoic (free field) conditions. That is, for the
previous example the calibration file will contain the data for the
black solid line, so the measurement program will compensate for its
excessive sensitivity at high frequencies. However, in domestic rooms
the field is reverberant—there is direct sound from the speaker mixed
with reflections coming from all the surfaces surrounding it.

With the advent of computer-based measurement tools simulating anechoic
conditions becomes easy. After recording a log sweep, the measurement
program performs forward and inverse Fourier transforms on it, obtaining
an impulse response (IR). On the IR graph, we can clearly see the
initial impulse and the sound contributed by reflections:

[![](https://1.bp.blogspot.com/-_6evSj0BsEk/XfsLTYtaR3I/AAAAAAAAPfg/haAPTNeYHecYDL0WAGVMfkNPyDoa9wstACLcBGAsYHQ/s1600/ir-with-reflections.png)](https://1.bp.blogspot.com/-_6evSj0BsEk/XfsLTYtaR3I/AAAAAAAAPfg/haAPTNeYHecYDL0WAGVMfkNPyDoa9wstACLcBGAsYHQ/s1600/ir-with-reflections.png)

If we window the impulse response to cut the reflections, we simulate
free field conditions. The drawback is that we also cut out information
about the frequencies having wavelengths longer than the window. The
approach than can deal with this issue better is called
[frequency-dependent windowing
(FDW)](http://users.spa.aalto.fi/mak/PUB/WASPAA2001_Karjalainen.pdf). It
windows each frequency individually and thus doesn't lose low frequency
information. In REW the user can specify how many cycles of each
frequency to keep:

[![](https://1.bp.blogspot.com/--pKvVgcPHM8/XfsMWMHulJI/AAAAAAAAPfs/Zr0x_Up6RC8Oj4i2opmb5OGhMtJ8c1N2wCLcBGAsYHQ/s1600/rew-ir-window.png)](https://1.bp.blogspot.com/--pKvVgcPHM8/XfsMWMHulJI/AAAAAAAAPfs/Zr0x_Up6RC8Oj4i2opmb5OGhMtJ8c1N2wCLcBGAsYHQ/s1600/rew-ir-window.png)

Acourate provides more advanced controls allowing to specify cycle count
for low and high frequencies, and before and after the main IR peak, all
independently from each other:

[![](https://1.bp.blogspot.com/-GXy9jEFI50o/XfsM7KFlVtI/AAAAAAAAPf0/RR5Auxm6_yY1mStvQ6DirpJN-4rS308UgCLcBGAsYHQ/s1600/acourate-fdw.png)](https://1.bp.blogspot.com/-GXy9jEFI50o/XfsM7KFlVtI/AAAAAAAAPf0/RR5Auxm6_yY1mStvQ6DirpJN-4rS308UgCLcBGAsYHQ/s1600/acourate-fdw.png)

Now back to the original question—if we measure a speaker tuned to give
a flat frequency response under anechoic conditions on axis using a
microphone with a calibration file for free field, and then use a fixed
gate (window) or FDW on the measured IR, we indeed should obtain a flat
frequency response graph.

## Practice

Over time, I have acquired **4** measurement microphones of different
makes and types:

1.  miniDSP UMIK-1 USB microphone with manufacturer's calibration files:
    on axis (**0** degrees) and **90** degrees;
2.  Dayton EMM-6 analog microphone with manufacturer's on axis
    calibration file;
3.  Josephson C550H analog microphone with no calibration;
4.  Another miniDSP UMIK-1 USB microphone which I bought from
    Cross-Spectrum Labs (CSL); it has both manufacturer's (miniDSP)
    calibration files and another set of calibration files provided by
    CSL: for **0, 45,** and **90** degrees orientation.

[![](https://1.bp.blogspot.com/-uVU7uEw6dTQ/Xf69SSows_I/AAAAAAAAPi8/4_rBH3ncWJIBD7asBlWG4OJmh3juQnhBgCLcBGAsYHQ/s1600/mics.jpg)](https://1.bp.blogspot.com/-uVU7uEw6dTQ/Xf69SSows_I/AAAAAAAAPi8/4_rBH3ncWJIBD7asBlWG4OJmh3juQnhBgCLcBGAsYHQ/s1600/mics.jpg)

There is an interesting story regarding the Josephson microphone. I've
reached out to Josephson to ask about calibration files and got the
following reply:

> We do not include individual calibration data at the price of the
> C550H, sorry. It is quite time-consuming to do that properly and we
> would rather not provide unsupported data. We are aware that some
> companies provide “calibration data” but without any supporting
> traceability or standard procedure it’s approximately meaningless.

What they mean here is that there exist standardized calibration
procedures that are performed by certified labs, and measurements
carried out after this calibration can be used in official reports. And
C550H is not at the price point to justify these procedures, despite
that it's the most expensive microphone of all four I have. Obviously,
after reading this statement I started questioning the quality of the
calibration files provided by Dayton and miniDSP, especially after I
have compared the calibration files from CSL and miniDSP for the same
UMIK-1 **(Mic 4)**:

[![](https://1.bp.blogspot.com/-vEe4W7ULS9c/XfxOf1J54RI/AAAAAAAAPgE/6bnUthD-h0k7WHBSkTVWVrpVFHSFEzh-QCLcBGAsYHQ/s1600/minidsp-vs-csl-0-deg.png)](https://1.bp.blogspot.com/-vEe4W7ULS9c/XfxOf1J54RI/AAAAAAAAPgE/6bnUthD-h0k7WHBSkTVWVrpVFHSFEzh-QCLcBGAsYHQ/s1600/minidsp-vs-csl-0-deg.png)

[![](https://1.bp.blogspot.com/-FBZmcLhlU0A/XfxPKOKuBXI/AAAAAAAAPgM/DP5G_EqCxBUKQlzDAKdZ2n45mKrDqrP6wCLcBGAsYHQ/s1600/minidsp-vs-csl-90-deg.png)](https://1.bp.blogspot.com/-FBZmcLhlU0A/XfxPKOKuBXI/AAAAAAAAPgM/DP5G_EqCxBUKQlzDAKdZ2n45mKrDqrP6wCLcBGAsYHQ/s1600/minidsp-vs-csl-90-deg.png)

The differences for on-axis response are quite significant—the resonant
peak is further up in frequency and is higher by **1 dB**! That's
interesting, right?

Then I decided to compare all **4** microphones by measuring the same
speaker using ground plane technique. The speaker was [RBH Sound E3c
center channel](https://rbhsound.com/e3c.php) which I corrected sligtly
using Acourate to give it a tighter IR. Since I was doing this
experiment in a small room, instead of actual floor I used my daybed:

[![](https://1.bp.blogspot.com/-oOearJ8k-sE/XfxW_AKp0SI/AAAAAAAAPhA/w6iTcO5T_lcUVeklAairA1ZKYwPDwM20ACLcBGAsYHQ/s1600/ground-plane.jpg)](https://1.bp.blogspot.com/-oOearJ8k-sE/XfxW_AKp0SI/AAAAAAAAPhA/w6iTcO5T_lcUVeklAairA1ZKYwPDwM20ACLcBGAsYHQ/s1600/ground-plane.jpg)

This speaker due its small size obviously lacks low frequency output,
but we can compare everything above **40 Hz**. This is how the
measurements look when no calibration files are used. The curves are
gated using FDW window of **3** cycles to create quasi-anechoic
measurement:

[![](https://1.bp.blogspot.com/-rAGjzN1-Iek/XfxSM-FoQTI/AAAAAAAAPgY/bSowd7uXobo9GhIFhVoKT9MMN5rd5bCkgCLcBGAsYHQ/s1600/no-calibration.png)](https://1.bp.blogspot.com/-rAGjzN1-Iek/XfxSM-FoQTI/AAAAAAAAPgY/bSowd7uXobo9GhIFhVoKT9MMN5rd5bCkgCLcBGAsYHQ/s1600/no-calibration.png)

All microphones are pretty much aligned except for the **Mic 1**
**(blue)** (miniDSP UMIK-1 with manufacturer cal only). If I apply
manufacturer's (miniDSP) calibration files for both UMIK-1 mics, they
agree very closely:

[![](https://1.bp.blogspot.com/-x_TqID5oG3c/XfxUMDCjzZI/AAAAAAAAPgk/xcNY3MIHwqct42TQ6YxTvd6l9V6JPI2UQCLcBGAsYHQ/s1600/minidsp-cal.png)](https://1.bp.blogspot.com/-x_TqID5oG3c/XfxUMDCjzZI/AAAAAAAAPgk/xcNY3MIHwqct42TQ6YxTvd6l9V6JPI2UQCLcBGAsYHQ/s1600/minidsp-cal.png)

That is good news, meaning that at least miniDSP are consistent with
their calibration method. Note that **Mic 1** was bought about **5**
years ago, and **Mic 4** just recently. The only slightly deviating mic
is Josephson **(Mic 3, cyan)**. If we would want to align its
measurements with UMIKs, we need to bump its response around **9.7 kHz**
for **1 dB** with **Q 1.6**.

Also note that Dayton **(Mic 2, magenta)** still doesn't have its
calibration applied. What if we apply it?

[![](https://1.bp.blogspot.com/-YP6tFnXLP_E/XfxVH9StotI/AAAAAAAAPgs/wHj8SxtMxIsLcbKbbU2Kq6N8u7lOTl_EQCLcBGAsYHQ/s1600/dayton-cal.png)](https://1.bp.blogspot.com/-YP6tFnXLP_E/XfxVH9StotI/AAAAAAAAPgs/wHj8SxtMxIsLcbKbbU2Kq6N8u7lOTl_EQCLcBGAsYHQ/s1600/dayton-cal.png)

Yikes! This is much worse than without calibration. Also note the
ruggedness of the calibration data—it works quite bad with smoothed
graphs obtained by applying FDW. Now I can see what Mr. Josephson was
meaning by "meaningless calibration".

What about CSL calibration data for UMIK-1 **(Mic 4)**? Here is the
graph of Mic 4 with CSL calibration applied **(green)**, Dayton with its
calibration **(magenta)**, and Josephson **(cyan)**. I've smoothed
UMIK-1 by 1/12 octave and Dayton by 1/6 octave:

[![](https://1.bp.blogspot.com/-SUHr6yNmGTA/Xf1j6v8jrgI/AAAAAAAAPhQ/2UgLCwwtSG0YTbKwGx8n-sefAH0Hf-KAQCLcBGAsYHQ/s1600/anechoic-cals.png)](https://1.bp.blogspot.com/-SUHr6yNmGTA/Xf1j6v8jrgI/AAAAAAAAPhQ/2UgLCwwtSG0YTbKwGx8n-sefAH0Hf-KAQCLcBGAsYHQ/s1600/anechoic-cals.png)

We can now see that UMIK-1 with CSL calibration is much closer to
Josephson, and Dayton with its questionable "calibration" is
nevertheless expressing some similarity, too. Since we know that CSL
calibration data is for achieving [flat response under free-field
conditions](http://www.cross-spectrum.com/measurement/mike_meas.html),
we now know what the target for Dayton and Josephson was, although
Josephson this time will need to be bumped down at high frequencies by
about **1 dB** to match CSL calibration.

Preliminary conclusions we can make so far:

-   Cross-Spectrum Labs and Dayton calibrations are for achieving flat
    response at free-field (anechoic conditions). Dayton's calibration
    data doesn't seem to be of a high quality, though.
-   miniDSP calibration for UMIK-1 looks more suitable for a flat
    response under reverberant (or diffuse?) field conditions. Dayton
    w/o calibration file also shows similar behavior.
-   Josephson sits somewhere in between. Its high frequency response
    needs to be decreased by about **1 dB** to achieve flat response
    under anechoic conditions and bumped up by **1 dB** to achieve flat
    response under reverberant conditions.
-   It's better not to use miniDSP UMIK-1 without its calibration file
    as in this case it's behavior doesn't match well any conditions and
    different mics show significantly different behavior.

## Test

What if we actually took a sound source with a frequency response that
is flat in anechoic conditions and try measuring it with these
microphones? I recalled that a couple years ago [I was using NTi Talkbox
as a reference
speaker](/2017/02/measurements-jbl-lsr-305-vs-krk-rokit.md)
and actually still have those measurements. At that time I only had
**Mic 1** (UMIK-1 with miniDSP calibration). However, having the results
from the previous experiment we can derive transfer functions for
transforming measurements done with that microphone into other ones.
Although that will not be as precise as actually measuring, but still we
will get a good approximation.

This is how NTi Talkbox frequency response looks under anechoic
conditions (from [its
specs](https://www.nti-audio.com/Portals/0/data/en/TalkBox-Specifications.pdf)):

[![](https://1.bp.blogspot.com/-TgUwca0b2P8/Xf19HgxFxBI/AAAAAAAAPhc/H-b7SLwQaxAbD_rpbgm18dTKe-6jkNRZgCLcBGAsYHQ/s1600/talkbox-fr.png)](https://1.bp.blogspot.com/-TgUwca0b2P8/Xf19HgxFxBI/AAAAAAAAPhc/H-b7SLwQaxAbD_rpbgm18dTKe-6jkNRZgCLcBGAsYHQ/s1600/talkbox-fr.png)

It should be reasonably flat from **100 Hz** to **10 kHz** on axis. And
this is how it was actually seen by Mic 1 on axis from the same distance
**(0.5 m)** with a FDW window of **3** cycles applied:

[![](https://1.bp.blogspot.com/-LAypjCqYDgM/Xf1-1frgA6I/AAAAAAAAPh4/VmraWBze_EsrHl0w9-j64Gc8DdwLbVP4gCLcBGAsYHQ/s1600/talkbox-mic1.png)](https://1.bp.blogspot.com/-LAypjCqYDgM/Xf1-1frgA6I/AAAAAAAAPh4/VmraWBze_EsrHl0w9-j64Gc8DdwLbVP4gCLcBGAsYHQ/s1600/talkbox-mic1.png)

Irregularities below **300 Hz** are due to room modes—they need to be
ignored. But look at the bump at **7.9 kHz**—that's clearly due to
insufficient compensation of the microphone coincidence bump in free
field conditions! This confirms that miniDSP factory on axis calibration
is not for a flat response under anechoic conditions.

In order to predict how would **Mic 4** have done the same measurement I
used the following formula:

**NTi<sub>4</sub>** = **NTi<sub>1</sub>** \* (**M<sub>4</sub>** / **M<sub>1</sub>**)

Which means, we derive a transfer function that transforms the
measurement done by **Mic 1** into a measurement done by **Mic 4** and
apply that function to the measurement of NTi Talkbox performed
using **Mic 1**. Then applied the CSL calibration for **Mic 4** and got
the following:

[![](https://1.bp.blogspot.com/-Ulov2I54qm8/Xf6zloYobCI/AAAAAAAAPiI/Kb_V4frSi_MPpB9KLRqFOhOeSddWzxm6ACLcBGAsYHQ/s1600/talkbox-mic4.png)](https://1.bp.blogspot.com/-Ulov2I54qm8/Xf6zloYobCI/AAAAAAAAPiI/Kb_V4frSi_MPpB9KLRqFOhOeSddWzxm6ACLcBGAsYHQ/s1600/talkbox-mic4.png)

Now, this is almost flat! Though, we can see a **0.5 dB** roll-off at
high frequencies, it's not clear whether it comes from windowing, or due
to imperfection of our simulation method. Unfortunately, I can't make a
direct experiment because I don't have access to that Talkbox anymore.

Josephson also shows a good result in this simulation:

[![](https://1.bp.blogspot.com/-qeZfpAVrHhk/Xf611eH4cbI/AAAAAAAAPiU/OjU2CQtNWzUWRikGJjmN2xQxoE7nACcWwCLcBGAsYHQ/s1600/talkbox-mic3.png)](https://1.bp.blogspot.com/-qeZfpAVrHhk/Xf611eH4cbI/AAAAAAAAPiU/OjU2CQtNWzUWRikGJjmN2xQxoE7nACcWwCLcBGAsYHQ/s1600/talkbox-mic3.png)

Confirmed—a speaker tuned to flat for free-field conditions indeed
measures as flat under quasi-anechoic conditions with a free-field
calibration applied. Also confirmed that factory calibration of UMIK-1
mics is not for a flat response in free-field.

## Conclusions

Choose the right tool for the job. In order to tune a speaker to a flat
response in free field I would choose either UMIK-1 with Cross-Spectrum
Labs calibration or Josephson C550H. For measurements in a reverberant
field UMIK-1 with factory calibration and Dayton with no calibration can
do a good job. In fact, the tuning of Josephson hits a sweet spot
allowing it to be used for both kinds of measurements.

Note that I only considered on-axis response of those microphones. For a
random incidence (**90** degrees) the results may be different. Also
note that the results for my Dayton EMM-6 may not apply to other
Daytons—I don't know how much variability do exist between their mics.
On the other hand, Josephsons are known to be pretty consistent.

A question remains how these differences in the target response of
measurement microphones do not prevent people from thinking that having
a "calibration" for their mic is all that they need, without wondering
what was it calibrated for? My answer to this is that people usually
experiment with their target curves anyway and make the final decision
judging by whether they like what they hear.
