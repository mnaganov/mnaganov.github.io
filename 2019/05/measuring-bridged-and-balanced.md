# Measuring Bridged and "Balanced" Amplifier Outputs

For a long time this topic was troubling me—how to measure bridged mode
amplifiers properly. The problem here is that without taking precautions
it's possible to end up with an amp ruined by a short circuit. I think
I've got enough understanding about this matter and got some interesting
results by measuring one of the amps I use.

## Bridged Mode of Power Amplifers

A lot of commercial stereo amplifiers I've seen have "bridged mode"
feature which turns the unit into a mono amplifier of higher power. E.g.
on my Monoprice Unity amplifier, one needs to set the mode switch
accordingly, connect the **"+"** wire of the speaker to the right
**"+"** output, and the **"-"** wire of the speaker to the left **"-"**
output. Obviously, only one input (left) is used in this case.

[![](https://1.bp.blogspot.com/-6vrpvazg9D4/XPFWGKAMMrI/AAAAAAAAN2g/1Uq4f62YLFUlBbegm4K_NtMNwXUyibGmgCLcBGAs/s1600/Monoprice-back.gif)](https://1.bp.blogspot.com/-6vrpvazg9D4/XPFWGKAMMrI/AAAAAAAAN2g/1Uq4f62YLFUlBbegm4K_NtMNwXUyibGmgCLcBGAs/s1600/Monoprice-back.gif)

This mode is implemented in the amplifier by dedicating each of the
channels to one wire of the load, and inverting the input to one of the
amplifiers. Schematically, it looks like this:

[![](https://1.bp.blogspot.com/-iddLusS4UAU/XO4OfjJUUoI/AAAAAAAAN2I/HaK-qp1CGGQjMz36v3lLAp0ljy6zbn7rgCLcBGAs/s1600/Bridging.png)](https://1.bp.blogspot.com/-iddLusS4UAU/XO4OfjJUUoI/AAAAAAAAN2I/HaK-qp1CGGQjMz36v3lLAp0ljy6zbn7rgCLcBGAs/s1600/Bridging.png)

This configuration doubles voltage on the ends of the load compared to
regular stereo mode. In theory, this would result in **4x** power
increase into the same load, but in reality due to various losses it's
usually only a bit higher than **3x**. For example, the Monoprice Unity
100W amp is specified as delivering **50 Watt/channel** into
an **8 Ohm** load in stereo mode, and **120 W** into the same load when
bridged, that's **2.4x** ratio. Exemplary engineered AHB2 amplifier from
Benchmark offers a much higher increase of **3.8x** into the same load
when in bridged mode.

However, the bridged configuration potentially can add more distortion
because each channel effectively "sees" twice less load (e.g. **4 Ohm**
if an **8 Ohm** speaker is connected). Thus, it would be interesting to
measure the difference in distortion of bridged vs. regular mode. But
here is the catch—the **"-"** wire of the load is now connected to the
second amplifier's output. We can't connect it to the signal ground of
an audio analyzer anymore as this would short-circuit the amplifier.

Here is why it happens. Normally, the ground plane of the input audio
signal is the same as the ground plane of the output. When using an
audio analyzer, this allows directly comparing the input signal from the
signal generator to the output:

[![](https://1.bp.blogspot.com/-x3gxn9lnfBc/XPFecIAQSUI/AAAAAAAAN24/VEfXNY4XKFoQV7TGICBmjKeg9OrbLvEowCLcBGAs/s1600/Measurement.png)](https://1.bp.blogspot.com/-x3gxn9lnfBc/XPFecIAQSUI/AAAAAAAAN24/VEfXNY4XKFoQV7TGICBmjKeg9OrbLvEowCLcBGAs/s1600/Measurement.png)

However, in the bridged configuration the zero voltage point (reference
potential) for amp's output is virtual and located "in between" the
terminals of the load:

[![](https://1.bp.blogspot.com/-WbZbSbOBy78/XPFYR-2W-dI/AAAAAAAAN2s/gbKar5_W404AfQSxe7fontZKeJ6yZUOMQCLcBGAs/s1600/Measurement%2Bof%2BBridged.png)](https://1.bp.blogspot.com/-WbZbSbOBy78/XPFYR-2W-dI/AAAAAAAAN2s/gbKar5_W404AfQSxe7fontZKeJ6yZUOMQCLcBGAs/s1600/Measurement%2Bof%2BBridged.png)

The same situation can be encountered with Class-D amplifiers that are
designed for maximum efficiency. In this case so called [H-bridge
configuration](https://www.analog.com/en/analog-dialogue/articles/class-d-audio-amplifiers.html) is
used. That means, these amplifiers do not offer "single ended" mode at
all and always run in bridged mode. Not every Class-D amp use H-bridge,
but measurements for this class of amplifiers must be done with
caution.

### "Balanced" and "Active Ground" Headphone Amplifiers

And we encounter the same problem when we want to measure a headphone
amplifier with "balanced" or "active ground" output. Note that the
implementation of "balanced" output may vary—in the simplest case it
only means that left and right outputs do not share the ground point.
This is done to reduce channel crosstalk that [occurs due to
common-impedance
coupling](http://nihtila.com/2018/08/06/benefits-of-balanced-headphones-interconnection/).
In this case there is no additional amplifier on the **"-"** wire, and
thus connecting it to the ground of the analyzer input does not cause
any issues.

However, if "balanced" headphone output means "doubled circuitry"
(essentially, this is the same as "bridging" for a power amplifier), or
if the ground channel has a dedicated amplifier path, as in the [AMB M3
amplifier](/2017/03/amb-m3-headphone-amplifier.md) (this is called ["active
ground"](http://nwavguy.blogspot.com/2011/05/virtual-grounds-3-channel-amps.html)),
then we must avoid connecting the ground of the output to the ground of
the analyzer input.

## Measurement Techniques

Since we must avoid connecting the ground of the output to the ground of
the input, the simplest solution would be to leave the second wire of
the output "floating" and only connect the **"+"** wire to the signal
input of the analyzer. That's what I used myself in the past. In this
case, the analyzer will still uses the input ground as a reference. The
result might be off due to difference in levels between the "virtual
ground" point in the middle of the load and the input ground.

[<img src="https://1.bp.blogspot.com/-1YvyaE95lfE/XOy9bc_fLwI/AAAAAAAAN14/vokBQe07dEYwVF7aBj6ETY831KqfNXjIgCLcBGAs/s400/resistive-loads.jpg" width="400" height="224" />](https://1.bp.blogspot.com/-1YvyaE95lfE/XOy9bc_fLwI/AAAAAAAAN14/vokBQe07dEYwVF7aBj6ETY831KqfNXjIgCLcBGAs/s1600/resistive-loads.jpg)

For example, I created a symmetric load consisting of
two **4 Ohm** resistors. In this case, theoretically there is
a **0 V** point right between them. In practice, the measured difference
between the potentials of the output and input grounds was **0.35 V**.
That means, it's better to avoid connecting them because this voltage
will induce current into the input ground.

However, it's possible to use a second, floating analyzer unit for the
output. It's possible to use a battery-powered voltmeter for measuring
the voltage across the load, right? The same way, it's possible to use a
full analyzer, but only if it's not connected to the input. This way,
the analyzer on the output measures the output voltage relative to the
output ground, which gives correct results. But operating two analyzers:
one for generating signals, and another the measure the output can be
cumbersome.

Also, what if we can't split the load, e.g. if we are using a real
speaker instead of a resistor load? In this case we need to make a
differential measurement. For oscilloscopes, there are special probes
for this purpose. QuantAsylum QA401 has differential inputs (marked
**"+"** and **"-"**). We need to connect one side of the load to the
**"+"** input wire, and the other to the **"-"**, leaving input ground
floating. That's OK because the ground is not used as a signal reference
anymore. Here is how wiring looks like:

[![](https://1.bp.blogspot.com/-XUHX2iKs-o0/XPF2dS4K6OI/AAAAAAAAN3E/Uz1lxZrZb_0NX_tvNzm143xv9KwM15LfgCLcBGAs/s1600/Differential%2BMeasurement%2Bof%2BBridged.png)](https://1.bp.blogspot.com/-XUHX2iKs-o0/XPF2dS4K6OI/AAAAAAAAN3E/Uz1lxZrZb_0NX_tvNzm143xv9KwM15LfgCLcBGAs/s1600/Differential%2BMeasurement%2Bof%2BBridged.png)

Another advantage of a differential input is that any common mode noise
on the probes gets cancelled. What I have noticed is that on a
single-ended measurement I see a **60 Hz** spike often, but it
disappeared immediately after I have switched to differential input—with
same amp, same probes, and same connections. That means, the **60 Hz**
hum is induced into the probes' wires by electromagnetic fields from
nearby mains wiring.

## Measuring Monoprice Unity 100W Amp

As a practical exercise, I've measured THD and IMD on Monoprice Unity
100W Class-D amplifier. It does not use H-bridge configuration, that
means in stereo mode channels are driven from a single end and the
**"-"** wire of the speaker it at the input ground plane's potential.

### Bridged mode into 8 Ohm load, differential measurement

First I set the amp to maximum volume and checked with a true RMS
voltmeter the potential difference across an **8 Ohm** load while
driving the input with a **1 kHz** sine wave at **-10 dBV** (that's the
nominal consumer line level). The voltmeter was showing **19.55 Vrms**.
Note that the resulting power value (from the **V ^ 2 / R** formula) is
\~ **48 W**, which is twice less than **120 W** specified by the amp's
manual (perhaps, the manufacturer was using higher level of the input
signal). However, these levels seem right to me, in fact usually I don't
even run the amp at the maximum volume.

But even that output level is close to QA401's limits on the input
voltage (**20 Vrms**) so I decided to use a split load (**2 x 4 Ohm**
resistors in series) and lowered input signal to **-12 dBV**. This got
me **14.47 Vrms** across **8 Ohm** load, which is mere **26 W**. Over
the same load, a differential measurement with QA401 shows **23 dBV**
peak (agrees with the figure in **Vrms**), and if the load is specified
as **8 Ohm**, QA401 also shows **25 W** output power—nice.

I also tried measuring with QA401 over half load (**4 Ohm**). The peak
was now **17 dBV** (**7 Vrms**—half of what the full load has), so I had
to specify the load in QA401 as **2 Ohm** in order to get the same
**25 W** figure.

Here is what I saw in terms of THD and IMD:

[![](https://1.bp.blogspot.com/-RJf9dPM_zv4/XOx1GRkdr9I/AAAAAAAAN04/eRd4_il1DVc9D5EeAYb0MDgoozZAshFgACLcBGAs/s1600/THD-1kHz-_12dBV-8Ohm-Bridged-HalfLoad-25W.png)](https://1.bp.blogspot.com/-RJf9dPM_zv4/XOx1GRkdr9I/AAAAAAAAN04/eRd4_il1DVc9D5EeAYb0MDgoozZAshFgACLcBGAs/s1600/THD-1kHz-_12dBV-8Ohm-Bridged-HalfLoad-25W.png)

[![](https://1.bp.blogspot.com/-g2r-q5EnMwE/XOx1hjD3l7I/AAAAAAAAN1A/Qjn3-bcph_MEQHLLNK_wzRDMDRK6euxYwCLcBGAs/s1600/IMD-ITU_T-_12dBV-8Ohm-Bridged-HalfLoad-25W.png)](https://1.bp.blogspot.com/-g2r-q5EnMwE/XOx1hjD3l7I/AAAAAAAAN1A/Qjn3-bcph_MEQHLLNK_wzRDMDRK6euxYwCLcBGAs/s1600/IMD-ITU_T-_12dBV-8Ohm-Bridged-HalfLoad-25W.png)

Definitely not outstanding results, especially if we consider that this
is at less than **1/4** of the advertised power. One particularly
interesting issue is the amount of ultrasonic noise on the IMD
measurement. I suppose, this is caused by the fact that this amp uses a
weak anti-aliasing filter, as we can see from its frequency response
measurement:

[![](https://1.bp.blogspot.com/-pBBRomE4oRE/XOx2hM1dn-I/AAAAAAAAN1M/Q8ZnTuQsOZgF-U5Gq30Dp1loVThUCIZwgCLcBGAs/s1600/FR-8Ohm-Bridged.png)](https://1.bp.blogspot.com/-pBBRomE4oRE/XOx2hM1dn-I/AAAAAAAAN1M/Q8ZnTuQsOZgF-U5Gq30Dp1loVThUCIZwgCLcBGAs/s1600/FR-8Ohm-Bridged.png)

The graph is quite fuzzy due to amplifier's non-linearity, but still we
can see clearly that the downwards slope on the right is very gentle.
This could be good property for a Class-A or Class-AB amplifier, but
since Class-D effectively applies sampling to the input signal, the
output is better be treated by a brick wall filter.

### Single-ended mode into 8 Ohm load

I tried to achieve the same modest **25 W** for an **8 Ohm** load
(remember that the manual states that the amp outputs **50 W** into
**8 Ohm** in the single-ended configuration), however with the volume at maximum
the reading of the voltmeter reading was only **10.45 Vrms**, that's
less than **14 W** output power. I've increased the input signal level
to the nominal **-10 dBV**, and it got me about **22 W**. And even with
this lesser power, the THD have increased twice compared to bridged
mode, and the dual tone signal for the IMD was overloading the
amplifier, so I had to cut it the input for IMD back to **-12 dBV** (and
it still seem to overload).

[![](https://1.bp.blogspot.com/-fgc_DGcWjTg/XOx6JSPn9mI/AAAAAAAAN1Y/ZZsNadko7tEEywsmaA7bEbuR2c7iawikQCLcBGAs/s1600/THD-1kHz-_10dBV-8Ohm-Single-HalfLoad-22W.png)](https://1.bp.blogspot.com/-fgc_DGcWjTg/XOx6JSPn9mI/AAAAAAAAN1Y/ZZsNadko7tEEywsmaA7bEbuR2c7iawikQCLcBGAs/s1600/THD-1kHz-_10dBV-8Ohm-Single-HalfLoad-22W.png)

[![](https://1.bp.blogspot.com/-7HAeOtgyWMU/XOx6Oji3-zI/AAAAAAAAN1c/zbHz_erSbok9JVg17l0QOZTjqbv0jI_mACLcBGAs/s1600/IMD-ITU_T-_12dBV-8Ohm-Single-HalfLoad-22W.png)](https://1.bp.blogspot.com/-7HAeOtgyWMU/XOx6Oji3-zI/AAAAAAAAN1c/zbHz_erSbok9JVg17l0QOZTjqbv0jI_mACLcBGAs/s1600/IMD-ITU_T-_12dBV-8Ohm-Single-HalfLoad-22W.png)

## Conclusions

1. Bridged amplifiers can be measured properly using differential mode
of the QuantAsylum QA401 analyzer. If the output voltage is too large,
the load can be split to reduce the voltage. Necessary corrections have
to be applied if we want QA401 to display proper power figures. It's
always possible to double check the results using a true RMS
voltmeter.

2. Bridged mode also helps to defeat noise induced into probe wires by
electromagnetic fields, especially the notorious **60 Hz** hum.

3. The performance of Monoprice Unity 100W amp in single ended mode is
quite bad. For driving an **8 Ohm** load I would prefer using it in
bridged mode.

4. And this result was contrary to my expectations—bridged mode, when
driven at lower levels has much less distortion on this amplifier than
single-ended mode at nominal level. That's why it's always better to
measure first.
