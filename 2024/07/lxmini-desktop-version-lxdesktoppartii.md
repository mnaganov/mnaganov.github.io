# LXmini Desktop Version (LXdesktop)—Part II: DSP Tuning

This post continues my story about the desktop version of LXmini speakers
[that I have built](/2024/06/lxmini-desktop-version-lxdesktoppart-i.html)
and set up on my computer desk in a somewhat unusual way:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBra0EYGcWhtyz-hfVxi0w9YbjYO0VNI5LmeLQZ330Ana1X08SLo7aI-F3LUkhzRLhzGJJj6KLOdUsYWpqqvc1pQ2mkH3OFEDIK8UU5DqASo806eIHw0JXX-bJe7RgZq4zBHFb8nUvYSTTvydDyKJPu3CAomAKcvE4aK8AcotWFo-FzCi4ZH1vZSWJdmBu/s16000/Desk-Plan-with-Angles.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBra0EYGcWhtyz-hfVxi0w9YbjYO0VNI5LmeLQZ330Ana1X08SLo7aI-F3LUkhzRLhzGJJj6KLOdUsYWpqqvc1pQ2mkH3OFEDIK8UU5DqASo806eIHw0JXX-bJe7RgZq4zBHFb8nUvYSTTvydDyKJPu3CAomAKcvE4aK8AcotWFo-FzCi4ZH1vZSWJdmBu/s577/Desk-Plan-with-Angles.png)

So, why are the speakers are "toed out"? The idea is that since the full
range driver has a dipole dispersion pattern, if we turn it outwards, then
the null of the dipole becomes directed towards the opposite (ipsilateral)
ear, thus naturally contributing to the suppression of the acoustic
cross-talk between speakers. This effect these days is usually achieved
using DSP by injecting a suppressing signal into the opposite speaker (see
[a great post by Archimago and
STC](https://archimago.blogspot.com/2023/10/stereo-crosstalk-cancellation-xtc.html)
on this topic). However, it would be nice if the opposite ear would be
just naturally blocked hearing the sound from the speaker.

I've estimated the angle between the full range driver and the opposite
ear to be approximately **75°**, thus the suppression is not
maximal. However, it should still add extra **-5** to **-10 dB**
attenuation to head shadowing, depending on the frequency. I plan to
measure the exact attenuation profile some time later. Another feature of
setting the speakers this way is that the back of the speaker gets farther
from the back wall, at about the recommended minimum of **1 meter**.

## Ideas for Tuning

Since the original LXmini tuning was aimed to achieve flat response
on-axis (see [the design
notes](https://linkwitzlab.com/LXmini/Design.htm)), my unusual speaker
arrangement required a dedicated tuning. I started looking around for
ideas on to achieve close to ideal response in the time domain.

The author of Acourate Dr. Brüggemann holds a very strong position on
[using linear phase
crossovers](http://www.acourate.com/XOWhitePaper.pdf). Acourate can
generate various kinds of crossovers, both in minimum phase and linear
phase versions. Also, there are some tools (including a new one added in
the recent Version 3) which are intended to bring each driver as close as
possible to the corresponding band pass filter of the crossover, both for
amplitude and the phase. Together with proper time alignment of the sound
from each driver at the listening position, this allows to achieve "ideal"
summing of the acoustic crossover components, yielding the perfect Dirac
impulse response for the speaker as a whole.

Though, my initial concerns were about the pre- and post-ringing behavior
of the linear phase filters. As we know, they are symmetric around the
center, and the pre-ringing may potentially exceed the thresholds of
masking. When the components of a linear phase crossover sum up as
intended—with their peaks coinciding, the pre- and post-ringing components
from each crossover band cancel each other. However, if there are time
shifts—even as small as a fraction of a millisecond—this does not
happen. The example below is for a two-band linear phase Neville Thiele
crossover:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkW88oY30zOQdKX77NG6zk2VtRRpwP1thdDQTu6HYIPu9Sv-aow7t14FglmjLB5otvpeVnMT2X_6wWJU056pWs6SJjvdhALSPgh6KLa87F9R_veHtFlz8eFXOBZm4a6cX_34zx_IlCTlwptlRVNT6vRfBTQwVCFYNRtR6bIatskuXqjVkOxk4JJd8-KQAW/s16000/NT1-FR.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkW88oY30zOQdKX77NG6zk2VtRRpwP1thdDQTu6HYIPu9Sv-aow7t14FglmjLB5otvpeVnMT2X_6wWJU056pWs6SJjvdhALSPgh6KLa87F9R_veHtFlz8eFXOBZm4a6cX_34zx_IlCTlwptlRVNT6vRfBTQwVCFYNRtR6bIatskuXqjVkOxk4JJd8-KQAW/s600/NT1-FR.PNG)

This is how the summed impulse response looks like on the logarithmic
scale when the components are properly time aligned, and also for
**0.23 ms** and **0.5 ms** time of arrival difference:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRrPfV2_obKYB3HpD_ASd6SeARWAB2MNJ51gPzN63ikSj77ctvmTojXZOvMo2d3_snVmzAqegxb0OQh23ViXrc7ywElUS3SoJcX1Qw9jVM2ZXGFGvwInHucU6fh4LbcmjiTj356v_AqrbFIEjFQ1xB5zQAyD6ubc7cOQ98-B6-r46imRU7CTiP-zl3JXcH/s16000/NT1-IR-offsets.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRrPfV2_obKYB3HpD_ASd6SeARWAB2MNJ51gPzN63ikSj77ctvmTojXZOvMo2d3_snVmzAqegxb0OQh23ViXrc7ywElUS3SoJcX1Qw9jVM2ZXGFGvwInHucU6fh4LbcmjiTj356v_AqrbFIEjFQ1xB5zQAyD6ubc7cOQ98-B6-r46imRU7CTiP-zl3JXcH/s500/NT1-IR-offsets.PNG)

The red vertical line is the ideal IR which occurs in the ideal time
alignment case, and on the right are the IRs when one of the crossover
components is shifted. Recall that these delays correspond to a distance
difference of just about **7.88 cm** and **17 cm**—that's comparable to
the size of the human head.

When I started discussing this topic on the Acourate forum, one of the
members has pointed me out to [the white
paper](https://www.grimmaudio.com/wordpress/wp-content/uploads/speakers.pdf)
by B. Putzeys and E. Grimm on their ideas behind the DSP-based
implementation of the professional Grimm Audio LS1 speaker (which costs
quite a lot!). The authors used a minimum phase Linkwitz-Riley filter, but
compensated for its phase deviations using an inverse all-pass filter. If
we think about this approach, it effectively also yields a linear phase
filter. In fact, when crossover components get time shifted, the
combination of the crossover plus reverse all-pass filter also exhibits
pre-ringing, although its level is a bit lower, and what's more important,
the duration is shorter:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJDV-NwmW8JkcRW8t3R1VJwbgwkOED4Dm0SHn-zx21onkuBFXSGbSD3ik4ZUeTVGcFijjeJl_FHlpYuQaGpeJ1Vku-8kjjRvPmuR85hhyphenhyphenQo28YpyrNRoDiomFvcGAd6BO4LqhSAO6a50gz9WcVOdDPa3AZ0GuudGYkTc_TxoHOknL5QPBZ-w9NJNVCrVQU/s16000/LR4-IR-offsets.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJDV-NwmW8JkcRW8t3R1VJwbgwkOED4Dm0SHn-zx21onkuBFXSGbSD3ik4ZUeTVGcFijjeJl_FHlpYuQaGpeJ1Vku-8kjjRvPmuR85hhyphenhyphenQo28YpyrNRoDiomFvcGAd6BO4LqhSAO6a50gz9WcVOdDPa3AZ0GuudGYkTc_TxoHOknL5QPBZ-w9NJNVCrVQU/s500/LR4-IR-offsets.PNG)

(Note that the red IR is not an ideal Dirac pulse because although the
phase response of the all-pass filter I created is close to the phase
response of LR4, it is not exactly the same). However, these improvements
over the ringing of the Neville Thiele crossover are just due to the fact
that the LR4 crossover has more relaxed slopes to start with:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOlFwXd5sTp_ItfJlPIHvHfJD3pIc5In0vlY1FkEXM03PdrLMcghTpwG5hLYY7CEsR1kU9f5ybR-uc-bHRxZ6jzge2NJowynvgoogYQj5KOjOR3IG_1C96DfuFdYA8O2-N_oW-nayegu0AgRGu_T2Mh_wrHY_cU7t2moJYw2b7vtJmqRWXyXsj4F3GWzHC/s16000/LR4-FR.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOlFwXd5sTp_ItfJlPIHvHfJD3pIc5In0vlY1FkEXM03PdrLMcghTpwG5hLYY7CEsR1kU9f5ybR-uc-bHRxZ6jzge2NJowynvgoogYQj5KOjOR3IG_1C96DfuFdYA8O2-N_oW-nayegu0AgRGu_T2Mh_wrHY_cU7t2moJYw2b7vtJmqRWXyXsj4F3GWzHC/s600/LR4-FR.PNG)

Thus, instead of compensating for phase deviations of a minimum phase
crossover, which can be quite severe for high order crossovers, we can as
well just start with linear phase crossovers as they are much easier to
work with. For example, I wanted to use an asymmetric shape in which the
higher frequencies driver has more relaxed slope compared to the lower
frequencies driver. This is beneficial for the LXmini design because the
directional pattern of the full range driver yields more precise spatial
cues than the omnidirectional woofer. This approach also helps for the
pair of the woofer and the subwoofer because I only have one, so I would
like to experience a stereo bass as much as possible. The asymmetric shape
of crossover slopes at first yields a non-flat summed frequency response,
however this is easy to compensate (again, with a linear phase filter),
thanks to the fact that the phase shift, being always equal to zero, does
not affect the summing of amplitudes of the crossover components.

Another interesting observation. The fact that I'm performing the tuning
in a real room, not in an anechoic chamber, implies that I need to use
windowing of the measured frequency response. As I have realized after
brief experiments, the frequency dependent windowing (FDW) partially
suppresses pre- and post-ringing of linear phase filters. However, as a
result it also changes the shape of its frequency response by making it
less steep. In my opinion, this is a good trade-off. In the next section I
will show the shapes and IRs of the linear phase crossovers I have ended
up with.

## Crossover Preparation Details

The aforementioned Grimm Audio LS1 white paper has a suggestion on "ideal"
crossover points. From the psychoacoustics data, the authors state that
the directional pattern of the frequency response should be used down to
**300 Hz**. The original LXmini has its acoustic crossover point closer to
**790 Hz**, however it uses a 2nd order LR crossover thus the output from
the full range driver actually goes quite low in frequency range. So the
first thing I've done was to measure the raw response of the full range
driver. Here it is together with an FDW processed version:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbV5DJTYfdSMdA9FrXIbtb389AJZpHJ_olhfcKtbltJvJuog2ZY9JgPy8yu_UVDFH9LxizROs7MACpUtVpfQX3VcjL7keB8Ufny4sJvJ5BG95s2Qumh3ilhaL4UMsPdxeJqHhmxE1ivqj65Izyzxq91ZwyNBuOHcagVSszmi0gsGWO7-NhygcFt3lsCZXe/s16000/FR-Raw-and-FDW.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbV5DJTYfdSMdA9FrXIbtb389AJZpHJ_olhfcKtbltJvJuog2ZY9JgPy8yu_UVDFH9LxizROs7MACpUtVpfQX3VcjL7keB8Ufny4sJvJ5BG95s2Qumh3ilhaL4UMsPdxeJqHhmxE1ivqj65Izyzxq91ZwyNBuOHcagVSszmi0gsGWO7-NhygcFt3lsCZXe/s600/FR-Raw-and-FDW.PNG)

Looking at the natural roll-off of the driver I have chosen **366 Hz** as
the crossover point. At the high frequency end, the full range driver due
to its relatively large size starts working in a breakup mode, thus losing
efficiency. Plus, I'm not listening to it on-axis and that creates a
natural roll-off at high frequencies. However, that's not a problem.
Since the speakers are located quite close to my ears, there is no need to
try to make the frequency response to be ruler flat at the high frequency
end because that makes the sound too harsh. So I generated a LR2 linear
phase crossover for **11 kHz** and used its low frequency part to taper
the response of the driver on the right side. This is how the final
crossover component looks like, overlaid with the raw windowed response:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqZqF91g3yiyhivyRcK2g3oxq3lokCuhd-anTlMJOQXv95FF5NI10L7Wl1ngi2rI7MQrUire-ViA_izOOJXBtFAHp1s11D8VbdEpAlSIZjtSEbr6ehr22UewGz_NrhYto2XejFPb9-ipkPDgoPw6IqVA3cLgWk2ZAUT33DptiHkoSfkiPO-zaRQVLfBjbC/s16000/FR-FDW-and-XO.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqZqF91g3yiyhivyRcK2g3oxq3lokCuhd-anTlMJOQXv95FF5NI10L7Wl1ngi2rI7MQrUire-ViA_izOOJXBtFAHp1s11D8VbdEpAlSIZjtSEbr6ehr22UewGz_NrhYto2XejFPb9-ipkPDgoPw6IqVA3cLgWk2ZAUT33DptiHkoSfkiPO-zaRQVLfBjbC/s600/FR-FDW-and-XO.PNG)

Similarly, for the woofer driver I have chosen **46 Hz** as the crossover
point. The slope on the left side is LR4, however on the right side I used
Neville Thiele 1st order crossover as it has a sharp, "brick wall"
slope. I passed it through the same frequency dependent window that I use
for the in-room measurements, and this has made the shape of the slope
more "relaxed". Below for comparison are the original NT1 slope overlaid
with a windowed one:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgY7hbQMcqNonib0GbOCMWjhxJGDtE-ItD0gfwZxmhml1x5CqD5I5zWFYabmICTOdQVmG8MtoLVcaRR0uALNfs5iyQfYTANmdq7t2cgixMpsXKO_o8Knhe0NlQO65PP0ty8VrX0-1mUtu0MCJyDD9K3jI735S1gueiN7oEuzJ5R5ODjCQEodlUx7J22KdbN/s16000/NT1-FR-and-FDW.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgY7hbQMcqNonib0GbOCMWjhxJGDtE-ItD0gfwZxmhml1x5CqD5I5zWFYabmICTOdQVmG8MtoLVcaRR0uALNfs5iyQfYTANmdq7t2cgixMpsXKO_o8Knhe0NlQO65PP0ty8VrX0-1mUtu0MCJyDD9K3jI735S1gueiN7oEuzJ5R5ODjCQEodlUx7J22KdbN/s600/NT1-FR-and-FDW.PNG)

There is not much difference in the time domain though:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOybbPOYDZRaT1YfiKK594vVVDJ1wCdU57sahrzk7AhJMbBRf7xRc-Fhw5WpWkTV9AJ4BQUkN8lmaQ3Dt_Cvg7BUitsnXTxfbACNKbx20g-DnPpiPLV395uAQ0wtkfTnL7ObJ82fShQm3xUzQQ7TM2WcXyIMOlg4rKObuXGb5bj3EQspWANE90W23x-pGn/s16000/NT1-IR-and-FDW.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOybbPOYDZRaT1YfiKK594vVVDJ1wCdU57sahrzk7AhJMbBRf7xRc-Fhw5WpWkTV9AJ4BQUkN8lmaQ3Dt_Cvg7BUitsnXTxfbACNKbx20g-DnPpiPLV395uAQ0wtkfTnL7ObJ82fShQm3xUzQQ7TM2WcXyIMOlg4rKObuXGb5bj3EQspWANE90W23x-pGn/s500/NT1-IR-and-FDW.PNG)

And this is how the designed crossover component looks on top of the
raw driver response:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5maty8nfJZ4sXFWmBZXxbJa0zA21G57ILswvSNHEZPV3Xs0iWQ1L2dUtfJsp9y_DzZtjsNnxvzR_u26j6MvbXKTKv7fhJdQToqxda4WkGd7sRcK2Jyf8JJeTAJoLumfkSDg4ZBbwxK_l9EhGOVfXayQIY4YzXIzz9j4Z6u9yK5i_zosRcAHGPWjYNJvaQ/s16000/Wfr-FDW-and-XO.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5maty8nfJZ4sXFWmBZXxbJa0zA21G57ILswvSNHEZPV3Xs0iWQ1L2dUtfJsp9y_DzZtjsNnxvzR_u26j6MvbXKTKv7fhJdQToqxda4WkGd7sRcK2Jyf8JJeTAJoLumfkSDg4ZBbwxK_l9EhGOVfXayQIY4YzXIzz9j4Z6u9yK5i_zosRcAHGPWjYNJvaQ/s600/Wfr-FDW-and-XO.PNG)

The subwoofer was a bit interesting. Choosing the crossover did not
require any thinking because the crossover point was already set from the
woofer driver, and the type on the right side is also Neville Thiele 1st
order. However, since it's an active subwoofer with servo (Rythmic F12G),
it has some settings of its own. I experimented with different damping
settings and low-end extension, and found that low damping and the
extension down to **14 Hz** creates a time domain response which looks
close to the IR of the crossover if I invert its polarity. This is how
these IRs look like overlapped (the polarity IR of the subwoofer is
inverted):

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCno8nXlZIXTTtH3DKPjhlDeL0lcwCNlt5iy0f7ReAzwvBEWGHxpbLotC3wq5b6FIwAhtmU8tArIrAz474ggt8ETcFNSmPImUpODw_E3y5ZXD7whbZ0SubwCDPmtrTYz9TF7OYJIg-guB7TfApBXuaJBb16TpTYSPFpBp04tZM7cDqWy1UxqqPwEK0GEVM/s16000/Sub-TD-and-XO.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCno8nXlZIXTTtH3DKPjhlDeL0lcwCNlt5iy0f7ReAzwvBEWGHxpbLotC3wq5b6FIwAhtmU8tArIrAz474ggt8ETcFNSmPImUpODw_E3y5ZXD7whbZ0SubwCDPmtrTYz9TF7OYJIg-guB7TfApBXuaJBb16TpTYSPFpBp04tZM7cDqWy1UxqqPwEK0GEVM/s500/Sub-TD-and-XO.PNG)

And this is the final look on the crossover components that sum up into a
flat frequency response (with the high frequency range trimmed down) and a
zero phase response:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpaU6WP1DC9E5Vv-WJ1fWv9vz0Y52Trj5fccj7kylD_2GvUwZK1hpjQDgzHW7dhBBTrFFwE2hpLhpmk_nCnQBr1u-UPHtZSc8__Qqbuqwloc6_gKrL1sUmdRF8NoK9xITu8_iSfeeyC4AgcJW0NiywsZI1_jcNsHFifUDrKy7Q-xnVtkW-iK0XEwueNui0/s16000/All-XO.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpaU6WP1DC9E5Vv-WJ1fWv9vz0Y52Trj5fccj7kylD_2GvUwZK1hpjQDgzHW7dhBBTrFFwE2hpLhpmk_nCnQBr1u-UPHtZSc8__Qqbuqwloc6_gKrL1sUmdRF8NoK9xITu8_iSfeeyC4AgcJW0NiywsZI1_jcNsHFifUDrKy7Q-xnVtkW-iK0XEwueNui0/s600/All-XO.png)

Visually this crossover reminds of the Bessel low-pass filter (used in the
"RBessel" crossover type in Acourate) of a high order, however mine uses
even steeper slopes on rights sides.

## Driver Tuning Process

My tuning process has two major stages: the first to bring each driver as
close as possible to the behavior of the corresponding band pass filter of
the crossover (that also includes fixing the phase behavior), and the
second stage is to combine these drivers into a proper acoustic crossover.

I was doing all the measurements from the single position—the listening
position. Although it is possible to linearize drivers in the near field,
I did not use this approach due to two reasons. First, the full range
driver works as a dipole, and they must be measured from some distance.
Second, since I was interested in the performance of the crossover at the
listening position, this was the natural position to use for driver
linearization as well.

For the driver linearization I used the "Room Macros" of Acourate, setting
the "Target Curve" to be the desired crossover band pass behavior.
Obviously, I used the same window for the FDW of the measured driver
response as the one I used to process crossover parts during the
preparation stage. I did not use "Psychoacoustic" smoothing at the driver
linearization stage, instead I used more technical "1/12 Octave"
smoothing. I was also limiting the amplitude correction to avoid creating
a boost at the frequency bands where the response of the driver was
naturally decaying below the intended crossover suppression level.  As an
example, below is the correction filter for the woofer driver, overlaid
with the target:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFokoA_OC4JcwmyHBUxKS2-Naeq3u9MAE6BJ1tGKHS3nsLqtJ3_oswQqA2fBz1MuBCjBzKFFTxvR7THkEoYfQy1DioLIGC96i7hBtrTLZB18ipOE1tE-5cee0Cn2P6rkUHbBzfbXxGZSbYjDurINS7OAt00QF9H3rqfAdn3mk4u5nnyAWW3AY_xuhVaZEA/s16000/WfrInitialCorr.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFokoA_OC4JcwmyHBUxKS2-Naeq3u9MAE6BJ1tGKHS3nsLqtJ3_oswQqA2fBz1MuBCjBzKFFTxvR7THkEoYfQy1DioLIGC96i7hBtrTLZB18ipOE1tE-5cee0Cn2P6rkUHbBzfbXxGZSbYjDurINS7OAt00QF9H3rqfAdn3mk4u5nnyAWW3AY_xuhVaZEA/s600/WfrInitialCorr.png)

After the correction filter has been generated by "Room Macro 4" and the
result has been evaluated via a test convolution, I re-measure the driver
with the filter applied. Then I check the phase behavior. Since the
correction process of Acourate tries to bring the driver to the minimum
phase behavior, it will leave out phase deviations that present in the
minimum phase impulse response of the target curve. Note that when
equalizing an entire full-range speaker to a mostly flat target curve,
these phase deviations will end up outside the hearing range. However, for
a driver, since it has a limited frequency range the phase deviations will
typically end up near crossover frequencies, and this fact will make
proper time alignment more problematic. For example, this is the phase
response of the corrected woofer:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7ykw-EYKzqeNG9X8I70sg7uNP2XxP2fFVyQ-H0gwv-WNOUGwDZMaFZ8DnKpjoLsITFBgWJH4ZH7kbxdmDZ_wEOQaFeQW5R5buQyA1AUseZEyYYcYU15Ir-_tLBKPocaOm3EqGr0_V2hUhIIe6DfbvfeDNUEFo4qKOTsa0ZwdowUYCJEHlhEHe2reMLAMu/s16000/Wfr-PhaseWrap.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7ykw-EYKzqeNG9X8I70sg7uNP2XxP2fFVyQ-H0gwv-WNOUGwDZMaFZ8DnKpjoLsITFBgWJH4ZH7kbxdmDZ_wEOQaFeQW5R5buQyA1AUseZEyYYcYU15Ir-_tLBKPocaOm3EqGr0_V2hUhIIe6DfbvfeDNUEFo4qKOTsa0ZwdowUYCJEHlhEHe2reMLAMu/s600/Wfr-PhaseWrap.png)

We can see that the phase gradually deviates from zero and "flips" over
the 180° angle at **47 Hz**. I treated these phase deviations using the
same approach as in the Grimm Audio white paper, which are in essence the
same approach as the one described by Dr. Brüggemann in his post ["Time
alignment of drivers in active multiway speaker
systems"](https://www.audiovero.de/acourateforum/viewtopic.php?t=213) on
the Acourate forum. That is, we need to "guess" an all-pass filter which
has a similar shape as the form of the phase deviation of the speaker, and
then put its reversal into the correction chain (that effectively means,
we need to convolve the reverse all-pass filter with our existing
filter). For example, for the woofer the corrected phase behavior looks
like this:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFN82a3ZpH2x3qitmARqDS4IbjQ5OUBJvoDnCv8v7CWcOiO4zLzXwHYJ0fINsDji7clP3RVpekqLSwQZLlqeJTmH1TEkH67lSYVAcH5O9D8wW9TBWsC-klAogjJThGudrPnZ54jpmpRhkru851BJKe29y6jNzTefiLv9Bq0Xp0_JdVJIJuuhfaDWVuZF5S/s16000/Wfr-PhaseCorrected.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFN82a3ZpH2x3qitmARqDS4IbjQ5OUBJvoDnCv8v7CWcOiO4zLzXwHYJ0fINsDji7clP3RVpekqLSwQZLlqeJTmH1TEkH67lSYVAcH5O9D8wW9TBWsC-klAogjJThGudrPnZ54jpmpRhkru851BJKe29y6jNzTefiLv9Bq0Xp0_JdVJIJuuhfaDWVuZF5S/s600/Wfr-PhaseCorrected.png)

Obviously, since it's an all-pass filter, the amplitude remains the same.
There shouldn't be more than 1 or 2 all-pass corrections needed. Only the
area within the driver working range must be corrected, and we must look
at the windowed response to avoid correcting for the effects from
reflections that very dependent on the mutual distances between the
driver, the reflecting surface, and the measurement point.

Now with each driver being brought as close as possible to the desired
crossover band-pass filter behavior, we need to "assemble" them into a
speaker by aligning their levels and times of arrival. To do that, first I
measured the speaker as is, and did a rough correction of driver
levels. Then I used the [the sine wave convolution
approach](https://www.audiovero.de/freedownload/Time_Alignment_of_Drivers_by_Sinewave_Convolution.pdf)
first for aligning the full range driver with the woofer, and then the
woofer with the subwoofer. At low frequencies, the convolved sines may
initially be considerably shifted from each other. Also, the low frequency
filter may be developing a bit slowly and have irregular sine amplitudes
in the beginning. To ensure that the resulting time alignment of the
drivers is proper, I had applied the same sine wave convolution step to
the crossover components and used the produced overlapping picture as a
reference. For example, this is how the sine waves of my crossover look
like for the **46 Hz** point:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzEf-JxAR9IIPXYQry1ipga_qx4zUaCMEZRPaKaqT2PUgSypoIAZBEdlkit5QL6vOrtYz1frIB-Ktu2mU2xupy2XWFlvVGvnvZwD8ik4MxaxFJRaPW99knAVnCHKVryLh2n4WhCqZdIg_Zq6o0-PsnnylONd1HvYR6V_31A1sICKRBDBC5BNpm7VaFiITx/s16000/XO-46-Sinewave.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzEf-JxAR9IIPXYQry1ipga_qx4zUaCMEZRPaKaqT2PUgSypoIAZBEdlkit5QL6vOrtYz1frIB-Ktu2mU2xupy2XWFlvVGvnvZwD8ik4MxaxFJRaPW99knAVnCHKVryLh2n4WhCqZdIg_Zq6o0-PsnnylONd1HvYR6V_31A1sICKRBDBC5BNpm7VaFiITx/s600/XO-46-Sinewave.png)

And this is how the results of sine wave convolution was looking initially
for the woofer and the subwoofer:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNqcSslUL0w_YEz-SiLwEa5q8d92sPi6CjkxqEhrRE7VA3st1wBqmIk64dkOootDz1y-4jd7aFsUhEDejr7J1bNQFAJcht_mjDr3rIOzpaDZ0MMiJ0sm0k3ZswnZoVxrOO9RlFtt_vMS6GTgy79DqAONXSLzmfi7s703RY1twOEkwDM0b7mvnr-0d68FqW/s16000/WfrSub-40-Sinewave.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNqcSslUL0w_YEz-SiLwEa5q8d92sPi6CjkxqEhrRE7VA3st1wBqmIk64dkOootDz1y-4jd7aFsUhEDejr7J1bNQFAJcht_mjDr3rIOzpaDZ0MMiJ0sm0k3ZswnZoVxrOO9RlFtt_vMS6GTgy79DqAONXSLzmfi7s703RY1twOEkwDM0b7mvnr-0d68FqW/s604/WfrSub-40-Sinewave.png)

Compared to the image before, it becomes obvious that the subwoofer (the
blue curve) needs to be shifted ahead in time of the woofer for a proper
alignment.

After applying gains and delays to the driver filters, I have made another
measurement and double-checked that the sine convolution on the measured
IRs produces the expected result.

## Target Curve Adjustments

Life would be too easy if we could just take the summed crossover response
and use it as a target for the overall speaker tuning. I tried that first
and was not impressed with how it sounded. The first problem was that the
vertical positions of virtual sources were too high while I would prefer
having them at the eye (or ear) level. The second problem was overall lack
of "weight" in the sound. The target curve was definitely asking for some
adjustments.

The first problem is a consequence of the fact that any virtual source,
for example a rendering of the singer's voice, which is appearing to be in
front of the listener, is created by a pair of stereo speakers that are
physically located on the sides. In my case, the speakers are placed even
wider than the conventional "stereo triangle." As S. Linkwitz explains in
the paper ["Hearing Spatial Detail in Stereo
Recordings"](https://www.linkwitzlab.com/TMT-Leipzig'10/TMT-Hearing%20spatial%20detail.pdf),
if we consider the sound pressure on a very crude approximation of a human
head—a sphere—we will find that physical sources located in front of the
sphere and on the sides of it create very different sound pressure
distributions across the frequency range. A more precise description of
this distribution is of course the HRTF. Since the two audio streams that
represent the virtual central source arrive from the sides, they do not
have a proper frequency profile of a center source, and as a result, the
hearing system places this virtual source higher. A simple solution used
by Linkwitz is to apply a shelving filter which compensates for this
effect.

And the second problem—overall lack of weight, or a bass-shy presentation
from a flat target curve can be explained by the interaction with the room.
Running a bit ahead, below are comparisons of the speaker quasi-anechoic
response (FDW windowed) vs. the steady state room response, obtained from
the same measurement position by taking an RTA measurement of pink noise
playing continuously:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLiY7RGiPFHQ0nlKqqJ9kXYdJSYbrm_VxwnV-L_djr59yuSPhgTh4ZaYlxU31oZkmrdnI07QBO7xVTP5U_HYk7z3m3o4mPhRngPGqF5dWMBi2X2kmKlx7JX5gHwPqAOHmA5OLnkOlusNptso-N_Dmi3IQj0QTQbl3BokvhFcYHXTMAzUYgMJyZTyV-Q1Tt/s16000/FDW-vs-RTA-L.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLiY7RGiPFHQ0nlKqqJ9kXYdJSYbrm_VxwnV-L_djr59yuSPhgTh4ZaYlxU31oZkmrdnI07QBO7xVTP5U_HYk7z3m3o4mPhRngPGqF5dWMBi2X2kmKlx7JX5gHwPqAOHmA5OLnkOlusNptso-N_Dmi3IQj0QTQbl3BokvhFcYHXTMAzUYgMJyZTyV-Q1Tt/s700/FDW-vs-RTA-L.png)

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0OZF8-vmsOhWysv_q-HnPVZwbLoqUbePuvl744aRr8rrB7F5LKzYfZ7j4Hw-Wn1RuDj2JpQeHgDneGHRvQd5xBEXm4T5bzqX5ptEPguM9xuATomihVCxQ1c0_rdpZc6SP-44AsMgV4NYyB0Ts1ZxwW4q72cMH0b0L-GZQtbJsEaKZ3jBbkfJdulH2ejnS/s16000/FDW-vs-RTA-R.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0OZF8-vmsOhWysv_q-HnPVZwbLoqUbePuvl744aRr8rrB7F5LKzYfZ7j4Hw-Wn1RuDj2JpQeHgDneGHRvQd5xBEXm4T5bzqX5ptEPguM9xuATomihVCxQ1c0_rdpZc6SP-44AsMgV4NYyB0Ts1ZxwW4q72cMH0b0L-GZQtbJsEaKZ3jBbkfJdulH2ejnS/s700/FDW-vs-RTA-R.png)

We can see that the room "eats" the bass but amplifies high frequencies.
That's why adding more bass to direct sound as well as tapering the high
end seem to make sense. So after some experiments with well recorded tracks,
I have chosen the following target curve:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifU2ukax_XQSNDPN3D7ZubNuz1s5idT_0rdBsjGpE4_Fc5WH6zITNE8ZmloG2TkbLeFNDNWyYZbFvb1tcI8fg8dMthJMmhQc546NUPOsvDkYcHnJEn9ZsWZHIyLAt5ETmzp3EutRegfVH2zlm_yk9TdwYDs9vObRa6kztUgWUWrLFWT4RFN12zVrUHpyK2/s16000/Target-with-EQ.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifU2ukax_XQSNDPN3D7ZubNuz1s5idT_0rdBsjGpE4_Fc5WH6zITNE8ZmloG2TkbLeFNDNWyYZbFvb1tcI8fg8dMthJMmhQc546NUPOsvDkYcHnJEn9ZsWZHIyLAt5ETmzp3EutRegfVH2zlm_yk9TdwYDs9vObRa6kztUgWUWrLFWT4RFN12zVrUHpyK2/s600/Target-with-EQ.png)

On this graph it is compared to the initial "tapered flat" crossover
curve.

## The Final Correction and Measurements

The final step in the tuning process is to apply "Room Macros" to the
entire speaker using the target I have created. This time I used the
"Psychoacoustic" smoothing. This step fixes any remaining discrepancies in
the levels of the drivers. Below is the FDW response of the speakers after
applying the correction, overlaid with the target:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEis0wpcai-6tEqPvO9ywx4vrb4keXw9rIJYxKVOUlwDyrq8E3_SD5SPh6XtRdCGo7c4StCffFUjImrOQJO3XphaLO7Qla26-0617oYXGERLbt3uwZ-svVS7Vo8ntbcmXG7ciFUwpQ9r81yQJbcR5tl6urUOrTpN36zjbFLS2g6SdbBMldFgG7lKtqos0gCP/s16000/All-FDW-and-Target.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEis0wpcai-6tEqPvO9ywx4vrb4keXw9rIJYxKVOUlwDyrq8E3_SD5SPh6XtRdCGo7c4StCffFUjImrOQJO3XphaLO7Qla26-0617oYXGERLbt3uwZ-svVS7Vo8ntbcmXG7ciFUwpQ9r81yQJbcR5tl6urUOrTpN36zjbFLS2g6SdbBMldFgG7lKtqos0gCP/s600/All-FDW-and-Target.png)

And below is the phase response of the speaker—as we can see it is indeed
close to the "zero phase" (this is also the windowed version which
excludes phase deviations due to reflections):

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQ7t57B3WHKTEUb11AeVZYmD56hIkfAgvFYOgcFWZ_wML6aS4Mj7MdS_IwNyURuRfUu43_LJ7RYhubcLOE4Q2hybUEct7GsqrfFujIW0NAqFu1tbTrSXzblwSgsjQcXdBQh3oy-E4A5Oap3FQ95ow8sJ3up1tUlsRtAdux3Z3GTapoqKvYfkPe2onvVwAS/s16000/All-Phase.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQ7t57B3WHKTEUb11AeVZYmD56hIkfAgvFYOgcFWZ_wML6aS4Mj7MdS_IwNyURuRfUu43_LJ7RYhubcLOE4Q2hybUEct7GsqrfFujIW0NAqFu1tbTrSXzblwSgsjQcXdBQh3oy-E4A5Oap3FQ95ow8sJ3up1tUlsRtAdux3Z3GTapoqKvYfkPe2onvVwAS/s600/All-Phase.png)

I checked the group delays by using the "ICPA" function of Acourate ("Room
Macro 6"), and found only one very high-Q group delay deviation, not worth
correcting.

The step responses of the speakers look good:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiu5cFR1A75ON26oZ8vXNNFkazcBVSNhEcj1Nrt8xzgk8NNcCCmW7QY2DhUnCG3i7v2fpvXAcFdHxlPOH38SCn1Cmh6tvShwPPDRxCTA4qAKK4SSA5JLH3TObOjFvBBVx9zZuRPVW_z13jShBlTZ2RVKD_a43uLvcRFcQ4m57prjiNNl8GrYFsxOJpMQLl_/s16000/AllStep.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiu5cFR1A75ON26oZ8vXNNFkazcBVSNhEcj1Nrt8xzgk8NNcCCmW7QY2DhUnCG3i7v2fpvXAcFdHxlPOH38SCn1Cmh6tvShwPPDRxCTA4qAKK4SSA5JLH3TObOjFvBBVx9zZuRPVW_z13jShBlTZ2RVKD_a43uLvcRFcQ4m57prjiNNl8GrYFsxOJpMQLl_/s500/AllStep.png)

Note that these are responses without any windowing, so they do not look
fully identical due to reflections and asymmetry of the room. It can be
clearly seen from the Energy Time Curve (ETC) graphs produced by RoomEQ
Wizard (REW):

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZ3zDKFDbLz8ZCy4Jeadv_jnvj7rEqiHV1-PzWmGRmQ3MPpj32BNINCI_QMZCtNBJrqJpwZFn3TtTtwz9yufWuKi4Lo_XVbpxRAU9wo5uXZ280RgeLhP3Bu5HX7YEH7yYc9vWozxGx0VxrByQexcBic2yKQdgxoAZxQRzMznxsOR1S1Q682g65SMjpAoXV/s16000/ETC.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZ3zDKFDbLz8ZCy4Jeadv_jnvj7rEqiHV1-PzWmGRmQ3MPpj32BNINCI_QMZCtNBJrqJpwZFn3TtTtwz9yufWuKi4Lo_XVbpxRAU9wo5uXZ280RgeLhP3Bu5HX7YEH7yYc9vWozxGx0VxrByQexcBic2yKQdgxoAZxQRzMznxsOR1S1Q682g65SMjpAoXV/s700/ETC.png)

Since this is a small room, strong reflections start appearing quite
early, but it's hard to do anything about that because there are windows
behind my listening position—I can't put any acoustic treatment there.

Also using REW, I checked the distortion measurement and observed the
known issue with Seas FU10RB drivers of the raised 2nd harmonic distortion
level between **1** and **2 kHz**, also noted in the ["Erin's Audio
Corner"
review](https://www.erinsaudiocorner.com/loudspeakers/linkwitz_lx_mini/#harmonic-distortion)
when he was measuring the LXminis:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKb9jcxTW0f1t_jsZpisWxLsqRjcylT_8NOw8vTap7pC5X8aEYdmHIkXmTWrLpOA7KOOrvxKSwxK2vBWg0Kytm_6Gq-wz4xZKlVheOekWg_9yTEFv17cmFX38KT9Ae4KyKab6H6PYWszRhXDTHYvhlkOL_fWmak0ECCFsGQ47RVFmmOnXrwHkgiR3m6XJI/s16000/Distortion-L.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKb9jcxTW0f1t_jsZpisWxLsqRjcylT_8NOw8vTap7pC5X8aEYdmHIkXmTWrLpOA7KOOrvxKSwxK2vBWg0Kytm_6Gq-wz4xZKlVheOekWg_9yTEFv17cmFX38KT9Ae4KyKab6H6PYWszRhXDTHYvhlkOL_fWmak0ECCFsGQ47RVFmmOnXrwHkgiR3m6XJI/s700/Distortion-L.png)

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhS6ZJ4jGzkyNi86DySmgPZvQWNzFMi3D7tgEojSZBeRa0Niv7dODByPaHxGO3B9_-_vb_Mq8ZqFZ26d0D31Gfn7zYTvAfFuw3upPkeU_uzzqKFe1zMWYvUn9y1cy51hxaP7Svdc-YVvaqo2oIYb9j19a0OAoJEDnAVlYvRjpjRxP__qBfCyrZN04eZnzU0/s16000/Distortion-R.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhS6ZJ4jGzkyNi86DySmgPZvQWNzFMi3D7tgEojSZBeRa0Niv7dODByPaHxGO3B9_-_vb_Mq8ZqFZ26d0D31Gfn7zYTvAfFuw3upPkeU_uzzqKFe1zMWYvUn9y1cy51hxaP7Svdc-YVvaqo2oIYb9j19a0OAoJEDnAVlYvRjpjRxP__qBfCyrZN04eZnzU0/s700/Distortion-R.png)

Also there is a bit more distortion between **300–500 Hz** probably
because the full range driver is being pushed harder.  The distortion in
the right speaker around **100 Hz** due to an interaction with a room
mode—if I move it to a different position, this peak disappears.  And I'm
not sure why each harmonic trace ends up with a funny upwards curve—this
must be a measurement artifact.

The resonances from room modes can be seen on the spectrogram:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCzgHBDz0qlrQ82C59GXiC5YtHm6jq_KlmisDDsCBV6Tc8uauy1ge_x3013juECJ4Kgch6Ra3mbh5p96GiB_ffdpfW9drreQzi_Gq_i6Bf8WQ-wV67olnhpT28HGBh6O4Se6e17Wh1GcMVflmaop_DKKSdtgsbxoKzoNfQ4SQYG2ZFb_9KEHT0j1o4f_wT/s16000/Spectrogram-L.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCzgHBDz0qlrQ82C59GXiC5YtHm6jq_KlmisDDsCBV6Tc8uauy1ge_x3013juECJ4Kgch6Ra3mbh5p96GiB_ffdpfW9drreQzi_Gq_i6Bf8WQ-wV67olnhpT28HGBh6O4Se6e17Wh1GcMVflmaop_DKKSdtgsbxoKzoNfQ4SQYG2ZFb_9KEHT0j1o4f_wT/s700/Spectrogram-L.png)

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXMUbBi6u0MFDVbDrG0QglsqQW8jQWcgAn-AxtOf52Gq4qID_SzoErBm1wrDj7BBnib8pYmnTg-BUKnBM8SAMZFO8ghQJj2AI11SDTAJU0g9KdnIxSa3xemMFjuJISzv8BqJw0rxiFP4KY7vEchS6BaEbHAWB9Zxm-Y675hNg3Rfm26LfjuknFPH7JCveH/s16000/Spectrogram-R.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXMUbBi6u0MFDVbDrG0QglsqQW8jQWcgAn-AxtOf52Gq4qID_SzoErBm1wrDj7BBnib8pYmnTg-BUKnBM8SAMZFO8ghQJj2AI11SDTAJU0g9KdnIxSa3xemMFjuJISzv8BqJw0rxiFP4KY7vEchS6BaEbHAWB9Zxm-Y675hNg3Rfm26LfjuknFPH7JCveH/s700/Spectrogram-R.png)

I decided to order some more bass traps, will see if they actually help to
reduce the effects from room modes.

## Does Non-Ideal Summing Induce More Pre-ringing?

Now let's try to get back to one question from the beginning of the post.
Recall the simulations of non-ideal summing of the acoustical linear phase
crossover and the associated pre- and post-ringing. I decided to check
what happens in reality. For that, I have moved the measurement mic by
**17 cm** to the right and re-did measurement. Below are the resulting
step responses. This one is for the left speaker, overlaid with the
original (where the crossover components are time aligned):

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg70eDBE5dk7Jx-S-JwAxu4hjqb71moDZ2ixa8fZ2RWd7SNDznyrE_GKE8S7d5aa81qcMM400fDfQ073FZWxePuzqspaUG3D54CXQsNbui71Nrn3WP7HQn8g863-HfBY5JP6J9G3-keuarDBxmuH5G4GD0L9ON_Zg2VjNXJn_1cp-x9j_y1l2kpcgwKoHoi/s16000/MovedPreringing-L.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg70eDBE5dk7Jx-S-JwAxu4hjqb71moDZ2ixa8fZ2RWd7SNDznyrE_GKE8S7d5aa81qcMM400fDfQ073FZWxePuzqspaUG3D54CXQsNbui71Nrn3WP7HQn8g863-HfBY5JP6J9G3-keuarDBxmuH5G4GD0L9ON_Zg2VjNXJn_1cp-x9j_y1l2kpcgwKoHoi/s600/MovedPreringing-L.png)

Note that since the causal part of the IR is dominated by the room
reflections it is not possible to judge the effect on post-ringing. As for
the pre-ringing, it seems that it is actually lower in the IR recorded
from the microphone position shifted off the perfect alignment.

And this is the right speaker:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbfctFLsKZZ9WmIUIGz7zVUclOqSf_WavSJr7_Dw-62ci6vWZb8Zrh3Dl1mh1Rd5E3iw4ZvqXwC7bfUkVqFcWGGP6hTONaRDE9JCADoH5-2ooQhgOedOpEXFMx1a0xl12to1DMvMSLNXep3l3SoRqZqyb5-0AJjeN1ykZOmv89oLqc82wW3p7DPJbz4QpY/s16000/MovedPreringing-R.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbfctFLsKZZ9WmIUIGz7zVUclOqSf_WavSJr7_Dw-62ci6vWZb8Zrh3Dl1mh1Rd5E3iw4ZvqXwC7bfUkVqFcWGGP6hTONaRDE9JCADoH5-2ooQhgOedOpEXFMx1a0xl12to1DMvMSLNXep3l3SoRqZqyb5-0AJjeN1ykZOmv89oLqc82wW3p7DPJbz4QpY/s600/MovedPreringing-R.png)

We can see that for this one there is indeed a bit more
pre-ringing. Evidently, the real acoustic behavior of speakers is much
more complicated than these ideal models. And for a proper evaluation of
the crossover behavior off-axis an anechoic chamber should be used.

Does this all matter? Maybe not so much, after all. Anyway, there is no
ideal solution when we are trying to combine a full-range speaker from
several band-limited drivers. If we are striving to get a perfect
solution, we actually need to avoid using crossovers at all, by using a
single driver, for example, an electrostatic panel or [the Manger
Transducer](https://mangeraudio.com/en/discover/about/the-manger-sound-transducer/).
The Manger seems to me like a variation on a coaxial driver, however due
to use of a single, specially engineered diaphragm it probably does not
suffer from the Doppler effect. Anyway, that's a different price level.

## To Be Continued

Of course, it's interesting to discuss how this setup sounds like, however
this post has already ended up being quite long. I will write about
listening impressions and other things separately.
