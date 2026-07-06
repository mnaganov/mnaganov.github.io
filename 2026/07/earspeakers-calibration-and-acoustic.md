# Earspeakers Calibration and Acoustic Measurements

The next step in my ongoing study of the phantom center and diffuse sound
colorations on stereo speakers (see [Part
I](/2026/05/spectral-correction-of-phantom-audio.html), [Part
II](/2026/06/spectral-correction-of-phantom-audio.html)) will be about the
“ideal” conditions for reproducing the phantom center that can be created
in a normal, non-anechoic room by means of **earspeakers.** These listening
devices are also known in research circles as “free-field” or “extraaural”
headphones. Their main difference from regular headphones is that they
create much less occlusion of the ears. This design factor allows them to
be used in situations where we need to compare sound from headphones with
external sounds directly. With earspeakers this is possible because the
listener does not have to take them off in order to be able to hear the
external sound practically unaffected by the headphones (although, as we
will see, this is not entirely true).

And this property of earspeakers is really unique. Even open-back
circumaural headphones of lightweight construction, for example
electrostatic headphones, do attenuate high frequencies severely (for
example, see the paper [“Comparing the effect of different open headphone
models on the perception of a real sound
source…”](https://openresearch.surrey.ac.uk/esploro/outputs/conferenceProceeding/Comparing-the-effect-of-different-open/99964066102346))
and also affect sound localization of external sources (see the paper [“The
Influence of Headphones on the Localization of External Loudspeaker
Sources”](https://aes.org/publications/elibrary-page/?id=18043)).

I read about [a
study](https://aes.org/publications/elibrary-page/?id=14224) in which the
researchers actually tried to compensate for the headphone-induced
attenuation by applying a reverse filter to the speaker signals. I tried
that myself with the Sennheiser HD800. However, I was not satisfied with
the result for two reasons:

1. Applying significant high-frequency amplification (an inverse filter for
   the occlusion from the headphones) to the sound from speakers evokes
   stronger room reflections and the overall result does not sound fully
   natural.

2. Since having headphones on the head also affects other components of the
   HRTF such as ILD and ITD, external sounds filtered by open-back
   headphones still are not perceived the same as without them, even with
   the spectrum being compensated. In particular, this affects the phantom
   center because it relies on the symmetry of the stereo pair.

So, having your ears unoccluded while experimenting with the phantom center
is actually a good idea. The problem is that all models of **acoustic
headphones** that leave your ears unoccluded do look really strange, if not
completely weird (see [this open-access
paper](https://aes.org/publications/elibrary-page/?id=22950) for photos).
There are only a couple of commercial models, namely: AKG K1000
(discontinued), Sony PFR-V1 (discontinued), MySphere 3.2 (still in
production; however, is rather expensive). These are very niche products,
and the discontinued models are hard to find for a reasonable price.

However, AR/VR researchers do love earspeakers because of their property to
allow hearing both natural and synthesized acoustic reality at the same
time, creating “augmented reality.” And researchers come up with various
designs and ideas for substitutes. One interesting example is a
modification of AKG K702 headphones with custom earpads that are cut out in
front and in the back (see [“DIY Modifications for Acoustically Transparent
Headphones”](https://research.aalto.fi/en/publications/diy-modifications-for-acoustically-transparent-headphones)).
I don’t have the K702, but I do have the K701 which is really the same
model, just without the detachable cable. So along with the K1000 and the
PFR-V1 I will try these as well.

I emphasized “acoustic headphones” in the paragraph above because another
well-known way of having ears unoccluded is to use **bone conducting
headphones.** I considered them initially, but then rejected them for a
number of reasons:

1. I don’t know how to calibrate them properly, as bone conduction works
   differently from acoustic transmission.

2. They usually use wireless (Bluetooth) connection which adds a lot of
   latency.

3. According to this
   [research](https://aes.org/publications/elibrary-page/?id=20343), “BC
   \[bone conducting\] earphone can’t provide enough interaural level
   difference (ILD)” and thus can affect perception of phantom sources,
   too.

But what about all these wireless earbuds with the “transparency” feature?
Sure, they have lots of microphones inside and outside, and a DSP. In
theory, they could implement an acoustic pass-through that is
indistinguishable from wearing no earbuds at all. However, the question is
why anyone would need that (apart from VR researchers). The goal of
engineers working on wireless earbuds is to ensure that the user does not
get hit by a car while listening to their favorite podcast, and that the
user can communicate with a flight attendant while having airplane engine
noise in the background—that’s it. For these scenarios, earbuds don’t
actually need to replicate the true transfer function of an unoccluded ear.
In fact, the DSP may artificially boost up certain frequency bands in order
to improve the external voice clarity, which is the opposite of what I need
for my research.

We see that achieving high-fidelity acoustic transparency is non-trivial.
So the goal of the exploration described here is to measure the key aspects
of earspeakers in order to ensure that I’m aware of their shortcomings.
Also, since I bought the K1000 and PFR-V1 second-hand, they are a bit old
(it’s practically impossible to buy them in new condition because they have
been discontinued) and thus may have some aging-related problems. Another
task is to check how the “transparentized” K701 compares to real
earspeakers.

This is what I measured for all three headphones:
-  electrical impedance;
-  usable frequency range;
-  distortion;
-  cross-talk;
-  acoustical transparency.

Also, since I tried using **miniDSP EARS** (or is it **HEARS**?—that’s what
is written on the label that I see on my device) for some of the
measurements, there are some notes about this peculiar acoustic tool.

## Electrical Impedance

This measurement is needed to ensure that the drivers are matched. For this,
I used QuantAsylum QA490 unit. My AKG K701 shows good alignment:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtaqs9ThDpLR5E5ixVS4GAMGKdylvXdWYbNbjdL-akV27M8cQ7uiCPen7D8kE4Hb9iUI7Z2w-vo_b9AYKeuaQM9LyACayO7-KBGLBBqMomf-mfQ0kmGjIlvtujYuT_UQtIXMwIhq6TRbW_G7O7wOZZAfdl3p0HVTkf-yLD_5_ubLBxRNL_KdVOHAAArlNq/s1600/K-701-Impedance.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtaqs9ThDpLR5E5ixVS4GAMGKdylvXdWYbNbjdL-akV27M8cQ7uiCPen7D8kE4Hb9iUI7Z2w-vo_b9AYKeuaQM9LyACayO7-KBGLBBqMomf-mfQ0kmGjIlvtujYuT_UQtIXMwIhq6TRbW_G7O7wOZZAfdl3p0HVTkf-yLD_5_ubLBxRNL_KdVOHAAArlNq/s469/K-701-Impedance.png)

However, in the PFR-V1 due to its age the left coil shows lower impedance
than the right one:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhK0sRes8HER7nAzJ3tzH7ccVof7gENPa2sUDeyHeYIYbly7u-K3ZpArHiYNBLmw23fjZqoOLrEtUnXOeA8b7UPhsr7EipF_hWpvtIP9ccvGf948xkqei9X00JdmTWbVeLLzsvnvly3ezUHHKd1O8sMJ8IKmgIjORqkHhice79RXfx3JGMvp77cchs4dLcu/s1600/PFR-V1-Impedance.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhK0sRes8HER7nAzJ3tzH7ccVof7gENPa2sUDeyHeYIYbly7u-K3ZpArHiYNBLmw23fjZqoOLrEtUnXOeA8b7UPhsr7EipF_hWpvtIP9ccvGf948xkqei9X00JdmTWbVeLLzsvnvly3ezUHHKd1O8sMJ8IKmgIjORqkHhice79RXfx3JGMvp77cchs4dLcu/s466/PFR-V1-Impedance.png)

Thankfully, the difference in the impedance seems to be constant across the
frequency range which means we can compensate for that by increasing
voltage (volume level) into the right speaker. I have found that I need to
add **+2 dB** to the right channel.

The AKG K1000 is more interesting because it uses a 4-pin XLR plug. I don’t
have an adapter from it to a TRS. I first tried to use QuantAsylum QA460 (a
speaker amplifier), however I found that the nominal impedance of the K1000
is **120 Ohm**, and that’s too high for the default value of the current
sensing resistor in the QA460—**0.01 Ohm**. QuantAsylum’s Matt
[recommends](https://quantasylum.com/blogs/news/speaker-impedance-measurements)
that the resistor value should be **100** times less than the load.

I did not want to resolder the resistor just for this measurement, so
instead of the QA460 I used Dayton Audio DATSv3. It worked fine and has
shown that the K1000 also has an imbalance between its speakers. Unlike the
PFR-V1, the imbalance of the K1000 is not uniform and is mostly pronounced
at mid to low frequencies:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnRj6afp2sLdcGhsbhAvnHbXjGySsoixgQHhsGegweimA8eECsrv6jrbh10ehnvXCo_WfacMg_hFdrTas8-v_JBIvdmutBMlhKfYAZm9GAD2N0uowRCfBlDNMWj7yYiEWGC6LboGtVrpBEXtEFCZsj3iCMXH1z87BjLHRLzehYeyiF3Q2l2hXmooqJIvOx/w400-h336/K-1000-Impedance-DATS.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnRj6afp2sLdcGhsbhAvnHbXjGySsoixgQHhsGegweimA8eECsrv6jrbh10ehnvXCo_WfacMg_hFdrTas8-v_JBIvdmutBMlhKfYAZm9GAD2N0uowRCfBlDNMWj7yYiEWGC6LboGtVrpBEXtEFCZsj3iCMXH1z87BjLHRLzehYeyiF3Q2l2hXmooqJIvOx/s751/K-1000-Impedance-DATS.png)

Sorry, DATS uses a bit less readable palette. So, for the K1000 I ended up
adding a low shelf filter at **2.36 kHz**, Q **0.8**, gain **+2 dB**, and a
peak at **3.3 kHz**, Q **5.5**, gain **+3 dB**. All this alignment was
checked acoustically on miniDSP EARS and Neumann KU-100.

Note that although I read in many places that AKG K1000 are “hard to
drive”, and sometimes people have to connect them to speaker amplifiers, I
did not have any issues with driving them. I used two headphone amplifiers:
the SMSL SP200 with “high gain” setting driven from the XLR input, and
Monoprice Monolith (THX AAA 788) driven from its digital input. Neither of
the amplifiers had any problems driving the K1000 to **100 dB** SPL and
even higher. That’s the level which is enough for my needs since that’s
**100 dB** near your ears, not at a speaker one meter away.

## Usable Frequency Response

Since earspeakers operate in a free-field condition—they do not create a
pressure chamber on the listener’s ear—all constraints of loudspeaker
drivers apply to them. Due to the small surface area of the driver, they
can’t be efficient at low frequencies. Typically, small (3"–4") loudspeaker
drivers that must produce bass are designed to have wider excursion so that
they can push and pull air more efficiently. However, it’s hard to design a
miniature headphone driver this way.

In an attempt to overcome this limitation, Sony PVR-V1 has a “bass duct”
which is intended to be placed near the ear canal entrance:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzQ7zxenc73QZOLDuphW-SuIDmkChCz-PLss-zWrsw6K7D0Yb6VyQGTfwaUmZRAWbnvr3bPHuKR5hppZ_cRtPfcF8MDmN4e1jpcYWtaHpRCvK8ETHxZND-9TYmd7X11AGVlBDnEcfVZOie3Qebq75i6bm4IpotWXvHKmypzhWhfKjP00TtXWYSwwqrbQKD/s320/sony-bass-duct.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzQ7zxenc73QZOLDuphW-SuIDmkChCz-PLss-zWrsw6K7D0Yb6VyQGTfwaUmZRAWbnvr3bPHuKR5hppZ_cRtPfcF8MDmN4e1jpcYWtaHpRCvK8ETHxZND-9TYmd7X11AGVlBDnEcfVZOie3Qebq75i6bm4IpotWXvHKmypzhWhfKjP00TtXWYSwwqrbQKD/s700/sony-bass-duct.jpg)

This creates challenges for measurement because artificial pinnae are
simplified and are made of silicone thus their retention force is much
lighter that of a real ear. So I tried measuring them both on the miniDSP
EARS and the Neumann KU-100. The results are actually consistent and show
severe bass limitation:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJj_dHt3v-7lGyLEjbK7UvDlJlLcDWqLcClK3Pyiq7eJQlRXi5hlwiRXmnYm2pHmmsQ5zZ3XkC-W57P-SbxUBFP3Ri_LhaB8QF1KyprwnEaIk1SjSTGDgRauSJa4Qivxq5E45hTeqaDcN4hHE6vMggAB1Gu0uAu1VOWDoEiEkF2-5DOVnJaKvlRc4c-tgO/s1600/pfr-v1-fr.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJj_dHt3v-7lGyLEjbK7UvDlJlLcDWqLcClK3Pyiq7eJQlRXi5hlwiRXmnYm2pHmmsQ5zZ3XkC-W57P-SbxUBFP3Ri_LhaB8QF1KyprwnEaIk1SjSTGDgRauSJa4Qivxq5E45hTeqaDcN4hHE6vMggAB1Gu0uAu1VOWDoEiEkF2-5DOVnJaKvlRc4c-tgO/s700/pfr-v1-fr.png)

Note that for this measurement I used the miniDSP EARS with “raw” calibration
file. I did not intend to produce a measurement comparable with data from
other rigs, I just wanted to figure out where they start to roll off low
frequencies. The result looks similar to [free-field
measurements](https://rinchoi.blogspot.com/2013/06/sony-pfr-v1-part3-in-depth-analysis.html)
performed long ago by Rin Choi, modulo the peak between **4–5 kHz** which
comes from EARS. Basically, the PFR-V1 earspeakers are only usable down to
**650 Hz** (**-6 dB** from the midrange) as trying to compensate for bass
loss via equalization will just drive up distortion in the driver.

The driver of the AKG K1000 is much better, and its bass starts to roll off
only below **90 Hz**. Although Hans Zimmer would not endorse use of these
headphones for listening to his music, this range is probably enough for
classical music.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmpOlputog2QcH0Tf5AMGYaIJIyeOIbDbnRQcvJnCX9iBENzjmHM4qA4OeXdgOw4Acmeh9okb1c8yhyD04qOd1pjcSiJEUOQXUMKo3n7quzvvAIH6kWx_3DhX_NAMWZLOKonBS_7BCCntHf-0MeQaYH-Rlcs-gIisAW3zZl2SBhEpvS7TdMqNpxZDweMjk/s1600/k1000-fr.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmpOlputog2QcH0Tf5AMGYaIJIyeOIbDbnRQcvJnCX9iBENzjmHM4qA4OeXdgOw4Acmeh9okb1c8yhyD04qOd1pjcSiJEUOQXUMKo3n7quzvvAIH6kWx_3DhX_NAMWZLOKonBS_7BCCntHf-0MeQaYH-Rlcs-gIisAW3zZl2SBhEpvS7TdMqNpxZDweMjk/s700/k1000-fr.png)

This is also obtained on EARS with “raw” calibration. Note that apart from
the lack of standardized calibration, both miniDSP EARS and Neumann KU-100
are perfectly adequate for measuring earspeakers because their operation
does not depend on replicating the true impedances of a human ear canal.

The AKG K701 with cut out earpads loses its sealing completely and thus
starts to roll off the bass early:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMTb2-dt0KGKici1P5wRyw2jeRaszuFCEMsWHakuZ9aJrNF0QS6jGcd2k-uL3JkABjgDggveSIslfTC8a8tal9dcvZqruoSV8y35xi3QuCjD0QIac6eo6rijs1MYwEjzmoQVGihwTTyn0yeV7ANmhxW2tZmcpBfyCk0I8H0nTacEcT3G4xGJC3lMCUDCFP/s1600/k701-fr.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMTb2-dt0KGKici1P5wRyw2jeRaszuFCEMsWHakuZ9aJrNF0QS6jGcd2k-uL3JkABjgDggveSIslfTC8a8tal9dcvZqruoSV8y35xi3QuCjD0QIac6eo6rijs1MYwEjzmoQVGihwTTyn0yeV7ANmhxW2tZmcpBfyCk0I8H0nTacEcT3G4xGJC3lMCUDCFP/s700/k701-fr.png)

For comparison, this is the FR of the left speaker for all three earspeakers:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhC1AnmJDSgxEtTWsTjMmacGaqx3o1TrbYYx2B8bpG5cGo6LXxUHcE-hqtJ5JblNMTwIyENhjucoMx6iioFDeTRW4L0S4TiuZT8BTf9kmcBIC1Iims7tjWMGMnsnUaxOLhwdxN8v6Fxe7nU357TYQlbHfCxOMnI9eZZZugxMaKFx8SkEfmvZYvgrue6Ou2U/s1600/all-fr.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhC1AnmJDSgxEtTWsTjMmacGaqx3o1TrbYYx2B8bpG5cGo6LXxUHcE-hqtJ5JblNMTwIyENhjucoMx6iioFDeTRW4L0S4TiuZT8BTf9kmcBIC1Iims7tjWMGMnsnUaxOLhwdxN8v6Fxe7nU357TYQlbHfCxOMnI9eZZZugxMaKFx8SkEfmvZYvgrue6Ou2U/s700/all-fr.png)

All in all, I think the K1000 is the most adequate earphone in terms of the
usable frequency bandwidth.

### SPL Calibration of miniDSP EARS

Yet another myth I had read, apart from the K1000 being hard to drive, is
that the miniDSP EARS is impossible to calibrate for loudness. This is how
I performed their SPL calibration. I found that the silicone ears can be
easily removed, opening access to the microphone capsule:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5sX45VVoAr6r5kicnHie_-p56RlQVpU6DW8yxlL6nDqbmuCCcGzbb9EDd-J9FYrXLqV2mrt8WEW3AHL6YsWWnILjJqorKE_8QB-NkTeGoLkjKQiQ04LbAuPUEN4rGsbIXNu42pk6FdIeJbEAIXO5PLRFtz_LoEzkQf6QeSQ4h9dpOkrsujb0lcvgHlP2V/w400-h263/ears-mic.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5sX45VVoAr6r5kicnHie_-p56RlQVpU6DW8yxlL6nDqbmuCCcGzbb9EDd-J9FYrXLqV2mrt8WEW3AHL6YsWWnILjJqorKE_8QB-NkTeGoLkjKQiQ04LbAuPUEN4rGsbIXNu42pk6FdIeJbEAIXO5PLRFtz_LoEzkQf6QeSQ4h9dpOkrsujb0lcvgHlP2V/s760/ears-mic.jpg)

The diameter of its wrapping grommet matches the size of the Beyerdynamic
MM-1 microphone so I used its adapter for coupling the acoustic calibrator:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWCH0oXegu_5WUg4eInJMrkfFbYfsz3ihwvBmZ2Q7B9o8znzcJWqnkB2FixULPoLW9HhkJGGMqbEIl0CPhrkfdRtgQ8fUEQTIC4AdvZIlNgRbjYX3gYubctvlVJm_T3zJiHJvA7NrSPpKnUfT23_Cl5sNLs6cCuSkOC3eJ3Lm-JTTKHlfR2aagt4X9HDIS/s320/ears-cal.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWCH0oXegu_5WUg4eInJMrkfFbYfsz3ihwvBmZ2Q7B9o8znzcJWqnkB2FixULPoLW9HhkJGGMqbEIl0CPhrkfdRtgQ8fUEQTIC4AdvZIlNgRbjYX3gYubctvlVJm_T3zJiHJvA7NrSPpKnUfT23_Cl5sNLs6cCuSkOC3eJ3Lm-JTTKHlfR2aagt4X9HDIS/s500/ears-cal.jpg)

I found that the capsules are well-matched. However, the sensitivity factor
specified in the calibration files is wrong which makes the SPL level
reported by REW to be off by about **20 dB**. I have switched the EARS to
**0 dB** gain and edited the calibration file to specify correct
sensitivity factor: **2.7** instead of **0.1 dB**.

One interesting thing that I did not know before is that on Windows at
least, REW monitors the software microphone gain and adjusts the reported
SPL number accordingly. This is a good thing because it allows the user to
adjust the gain so that the sound captured by the EARS at high SPL does not
get clipped in the digital domain.

## Distortion

I was mostly interested in whether my earphones have any significant
distortion that can affect loudness perception. By “significant” I mean
“higher than the room noise level.” Since earphones offer no isolation from
the room noise, this criterion works well. I ensured that the room noise
was **42 dB** or below (C weighted) while I was measuring.

When measuring using the KU-100, the distortion products for all three
headphones were below the noise floor in the mid-to-high frequency range. I
couldn’t measure bass distortion adequately due to higher level of ambient
noise in this region. Since with the open design the drivers have to work
hard, I would expect that they distort. However, it is known that our
hearing system is much less sensitive to low-frequency distortions, and
they also do not play an important role in my experiments, so that’s not a
problem.

However, with the miniDSP EARS there were peaks of the 2nd harmonic between
**4–5 kHz**. It was suspicious to me that this happens the same way for all
three headphone models. I also tried placing Genelec 8331A speaker close to
EARS and measuring it, and it has shown the same peak. So I think what
happens here is that the construction of the silicone pinnae of EARS
creates a resonance in that region and that overloads the microphone even
when the resulting peak is at modest **100 dB** SPL. That means, EARS are
not suitable for measuring headphone distortion.

## Cross-talk

That’s a practically interesting measurement. Since earphones are “open”
designs, there is cross-talk by definition. Will this create a coloration
of the phantom center? I measured it on the KU-100 in order to create a
realistic head shadowing condition.

What I have found is that the level of cross-talk is actually quite low. If
we consider the cross-talk from my speaker setup and hypothetically reduce
it by what can usually be achieved with application of Cross-Talk
Cancellation (CTC) in a non-anechoic room, the cross-talk from earspeakers
is still below that level.

By the way, while exploring this, I have discovered a nice feature of REW
that I did not know about for all these years of using it. On the SPL and
phase graph it’s possible to select a frequency range by dragging the mouse
cursor with Shift key pressed, and this shows min, max and average SPL for
that region. So calculating the average cross-talk level consists of two
steps:

1. Take the difference in dB (`A / B`) between the contra-lateral and
   ipsi-lateral transfer functions (“Trace Arithmetic” in REW). Since there
   are HRTF-induced notches and peaks all over the frequency range,
   applying 1/3-octave smoothing makes sense.

2. On the calculated SPL graph, select with Shift the frequency range of
   interest (I usually use **100–14000 Hz** to avoid areas where SNR is
   lower) and read the average SPL.

If we look this way on the SPL graph of the difference between the ipsi-
and contra-lateral sound for my desktop speakers (measured on the KU-100),
it shows the effect of the head shadowing (the more shadowing—the better).
The average level of shadowing is about **11 dB**, and it is slanted
towards high frequencies:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNf2Q_f63gWQyL3H4fIa9qXOUJRcZD62OQJlZpT_ARHTWwVG6oJ7zJu2H23yUWD6bqu1ESj3Ybxv5bK9Q_bXxdiZn6zjyygFxunb5UwOZxB0YwlNcwTN_gYuskxEbLjL_I2gKlQZjvlxGKjWXZAqak4cPiZ2JoN6yzRDIiK3ys60fFsPoiNXKqYRvgVrC0/s1600/speakers-xt.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNf2Q_f63gWQyL3H4fIa9qXOUJRcZD62OQJlZpT_ARHTWwVG6oJ7zJu2H23yUWD6bqu1ESj3Ybxv5bK9Q_bXxdiZn6zjyygFxunb5UwOZxB0YwlNcwTN_gYuskxEbLjL_I2gKlQZjvlxGKjWXZAqak4cPiZ2JoN6yzRDIiK3ys60fFsPoiNXKqYRvgVrC0/s700/speakers-xt.png)

Below is a table comparing the average shadowing among earspeakers:

| Earspeaker             | Avg. shadowing, **dB**   |
| ---------------------- | ------------------------ |
| AKG K1000              | 19                       |
| AKG K701 DIY Transp.   | 48                       |
| Sony PFR-V1            | 36.5                     |

If we consider the PFR-V1, their shadowing is **25 dB** better than on
external speakers. Considering that CTC algorithms for loudspeakers can at
best remove about **20 dB** of cross-talk, Sony already performs better.

The AKG K1000 is the worst performer, probably due to large size of
speakers and completely open design. On the graph below we can see that at
**3 kHz** its shadowing drops and matches the shadowing from speakers:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6k_2Mh7S4W3RmDcKAs2vL7MXbRVug6lAJAA6wtpz0yifh5jdmHIuo2NSm3tvNRgGl7OK-7mNAS3jYsIcUjGsrAb_O-KNjoOXHULTNwGNd3D2FKyfmTjsh9ffWp3HUlbTp7DI2fvSH6hI6_syZSQrli4Z-jHVWySueOky3t0Ux6-OwW3J54EwPdtZZf5BP/s1600/all-xt.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6k_2Mh7S4W3RmDcKAs2vL7MXbRVug6lAJAA6wtpz0yifh5jdmHIuo2NSm3tvNRgGl7OK-7mNAS3jYsIcUjGsrAb_O-KNjoOXHULTNwGNd3D2FKyfmTjsh9ffWp3HUlbTp7DI2fvSH6hI6_syZSQrli4Z-jHVWySueOky3t0Ux6-OwW3J54EwPdtZZf5BP/s700/all-xt.png)

(The numbers on the legend correspond to the **3 kHz** point).

So, probably it is a good idea to apply CTC to the K1000. It appears
especially effective because traditional nearfield CTC requires head
tracking since the head is constantly moving relative to the speakers.
However, since the K1000 always moves together with the head, the CTC
filter remains constant.

However, so far I did not succeed with creating a CTC filter for the K1000.
I tried using a method based on actual HRTF measurement. That’s because the
proximity of the earspeaker to the head makes the transfer function of
ipsi-lateral crosstalk highly dependent on the parameters of the head.

Also, unlike the louspeaker situation, the wavefront which reaches the
opposite ear is not planar—it is spherical. Because of that, when measuring
the actual transfer function at the opposite ear of the KU-100 I can see a
lot of group delay deviations, and the resulting impulse response does not
even have any distinctive peak—it looks more similar to ripples on a sea
surface. Because of that, achieving correct time alignment is
insurmountably challenging. I will try harder next time.

## Acoustical Transparency

This is an important consideration since I plan to switch between playback
in earspeakers and loudspeakers (that’s the whole point of using
earspeakers in the first place!). As I mentioned in the beginning, even
open-back headphones create significant alterations to the frequency
response of external sources, as well as to their ITD and ILD. Earspeakers
are a bit more transparent but not entirely.

A paper by C.  Porschmann [“How Wearing Headgear Affects Measured
Head-Related Transfer
Functions”](https://audiogroup.web.th-koeln.de/FILES/Poerschmann_SASP2019.pdf)
measured how wearing the AKG K1000 affects the HRTF of the KU-100. I also
measured my earphones on the KU-100, using Genelec 8331A as an external
sound source:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHlZaDr8l1XQYWfb0zXwBlM2Ane4t7K9WVP2vILXTdzw0FQdKrL2st_jIeQcOi9TDmaedWn0-IiCScg_nXhjU3ESwKTq35u8EAVz8sOc3odEP9A9IxdHRQrUaGMWoLXSNksTj11XEngqlCK-yWH7Ue7cb9iIkd14zr13nqEz0o9cuYPohKT24OpQFXLrjP/s1600/occlusion.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHlZaDr8l1XQYWfb0zXwBlM2Ane4t7K9WVP2vILXTdzw0FQdKrL2st_jIeQcOi9TDmaedWn0-IiCScg_nXhjU3ESwKTq35u8EAVz8sOc3odEP9A9IxdHRQrUaGMWoLXSNksTj11XEngqlCK-yWH7Ue7cb9iIkd14zr13nqEz0o9cuYPohKT24OpQFXLrjP/s705/occlusion.jpg)

I compared the measurements from the paper with mine (using the SOFA files
they have provided) and discovered that although the IRs for bare KU-100
look quite similar to my measurements—modulo the effect of a different
distance from the speaker to the head—the measurements with AKG K1000 on
the head look significantly different. The peaks and notches simply do not
match. I started exploring this discrepancy and realized that the
acoustical shadowing that the K1000 creates is highly dependent on the
angle at which they are opened.

I think this leads to the important realization that measuring these
occlusion transfer functions must always be done for the current setup and
can’t be considered as “generic.” I suppose, the external speaker
directivity also may heavily influence the result, thus occlusion transfer
functions measured with a Genelec speaker will also differ from those
measured using an LXmini. Because of that, let’s consider the compensating
transfer functions for these three headphones just as a guideline.

Besides the data from the paper on headgear, another paper which had
introduced the idea of the “transparent” K701 (“DIY Modifications…”) also
has measurements of them and the K1000 on the KU-100. However, these
measurements are from certain directions: front, back, and top only. Note
that these two papers calculate the transparency in an opposite way. The
headgear paper divides “reference” (bare head) HRTF by the HRTF of the head
with the gear on, while the K701 paper carries the division the other way
around. In my view, since we need to compensate for the occlusion by
applying a reverse filter to the external speaker, we need to follow the
headgear paper approach.

Below are occlusion graphs for each earspeaker, for frontal (**0°**), side
(**42°**), and rear (**138°**) directions. For side directions, this is for
the ipsilateral ear only. Also, for compatibility with the graphs from
papers, my graphs are time windowed for **3 ms** and **1/3 octave**
smoothing applied.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj57hISf3bnHyoSOHFBz7pzRqyRmrU4vsQlWQYmzhLR-nM9CGSaV7fmP3cUjmqw4gOGXPWPpNyt9-NwKbv9lrEtYdTniXXkFHO7O3jHrSH2arFDaoz1pdpnu0m4r0spzlvxcy2pNvIvBjuKJxTq5KtQupj5lxXc532_flReceOCiP_ps4JTx8T0tM0llfvr/s1600/k1000-occl.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj57hISf3bnHyoSOHFBz7pzRqyRmrU4vsQlWQYmzhLR-nM9CGSaV7fmP3cUjmqw4gOGXPWPpNyt9-NwKbv9lrEtYdTniXXkFHO7O3jHrSH2arFDaoz1pdpnu0m4r0spzlvxcy2pNvIvBjuKJxTq5KtQupj5lxXc532_flReceOCiP_ps4JTx8T0tM0llfvr/s700/k1000-occl.png)

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6rOyof4cHrDKdPmdI9RN4QBJxzfdc87Y7Nit_HwUJlNFIQhYmgepqW6xTyHwp8Dr_yDIxvdqBjAOQeuOJRngk8JyPH9hovy0W5F8CsiQPKMVdnOqS9pBtLLjVdhocKry6g6vFQNf09sltiOpsjSmw6glm7EiDncp2NpUHk34WwfNxTBqWAWUnIBdjtzmn/s1600/k701-occl.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6rOyof4cHrDKdPmdI9RN4QBJxzfdc87Y7Nit_HwUJlNFIQhYmgepqW6xTyHwp8Dr_yDIxvdqBjAOQeuOJRngk8JyPH9hovy0W5F8CsiQPKMVdnOqS9pBtLLjVdhocKry6g6vFQNf09sltiOpsjSmw6glm7EiDncp2NpUHk34WwfNxTBqWAWUnIBdjtzmn/s700/k701-occl.png)

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeV0NJEIIAVvF0OF7ZE6I5obwxDvx3Y_vL-T8IHGaSzNsUpXvY60UQTLr8GsKiJp4YX1VeVKA6TjxGO2xwIJMWBNapg3YwZsQ08vxhfh9q6dznfVFzQwtZlBm8nrdxyPiSGh0tlDhEE2qEcHg2j52i4GgFLKkcoFq-QNEXNTZjv-TnTBRNjbES_T6xV-qD/s1600/pfr-v1-occl.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeV0NJEIIAVvF0OF7ZE6I5obwxDvx3Y_vL-T8IHGaSzNsUpXvY60UQTLr8GsKiJp4YX1VeVKA6TjxGO2xwIJMWBNapg3YwZsQ08vxhfh9q6dznfVFzQwtZlBm8nrdxyPiSGh0tlDhEE2qEcHg2j52i4GgFLKkcoFq-QNEXNTZjv-TnTBRNjbES_T6xV-qD/s700/pfr-v1-occl.png)

We can see that Sony PFR-V1 is the most unoccluding earspeaker, with AKG
K1000 coming next, and the “DIY Transparent” K701 modification is actually
not so transparent for rear sources.

## Conclusions

Unfortunately, none of the earspeakers is an ideal one. Here is their
comparison on the acoustic parameters:

| Earspeaker        | LF cutoff, **Hz**  | Shadowing, **dB**  | Transparency |
| ------------------| ------------------ | ------------------ | ------------ |
| AKG K1000         | \~60               | 19                 | Fair         |
| AKG K701 DIY Tr.  | \~300              | 48                 | Poor         |
| Sony PFR-V1       | \~700              | 36.5               | Good         |

Thus, for simulating anechoic listening on speakers, it makes sense to use
the Sony PFR-V1 as much as possible, by limiting the sound sample choice
according to the headphone bandwidth. One caveat here is that by cutting
out this frequency range we sufficiently limit the bandwidth below
**1.5 kHz** where the auditory system uses ITD for sound source
localization.

The AKG K1000 can be used for wider selection of samples and does not have
any issues providing ITD cues; however, we need to take care about reducing
its cross-talk, and compensating for partial loss of transparency when
comparing its output with external loudspeakers.
