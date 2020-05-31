# Measuring AMB M3 vs. SPL Phonitor Mini

I've [built AMB's M3 headphone
amplifier](/2017/03/amb-m3-headphone-amplifier.md)
more than a year ago and I enjoyed it all this time. Judging purely from
listening experience, I was quite sure that my build doesn't have any
major flaws. Also, I was confident in the M3 measurements that
[Bob Katz has
done](https://www.innerfidelity.com/content/katzs-corner-episode-8-my-current-affair) for
his unit. However, I decided to perform some on my own. As my
measurement rig is not super precise, I decided to measure M3 side by
side with a commercial headphone amp to have a better grip with reality.
I've chosen SPL Phonitor Mini because I think it's in the same "weight
category" as M3.

AMB M3 is a two stage amplifier, with the first stage based on opamps,
and the second stage on MOSFET transistors (with big heat sinks!)
Although formally the amp has Class AB topology, its enormous power
allows it to stay in Class A for most of the use cases. Another
distinguishing feature of M3 is "active ground"—that is, the ground
channel also goes through the same amplification stages as left and
right channels. Personally, I'm on the same side with NwAvGuy who
said [that it's not a good
idea](http://nwavguy.blogspot.com/2011/05/virtual-grounds-3-channel-amps.html).
But it's interesting to see what practical consequences this design
choice actually has.

SPL Phonitor Mini is one of my favorite headphone amplifiers for a long
time. Initially this was due to its awesome crossfeed implementation.
Now that I've found some [comparable DSP
implementations](/2018/02/112db-redline-monitor-plugin.md),
this is of a less importance. But I still enjoy Phonitor for its power,
reliability, and the fact that it has both unbalanced and balanced
inputs. Besides crossfeed, Phonitor has another feature—high-voltage
rail (**120 VDC**), which helps to achieve low noise floor.

## Notes on Measurements

In [my previous
experiments](/2018/05/measuring-behringer-uca202.md)
I found that I can trust my measurements of frequency response, THD,
channel balance, and output impedance. I put less faith into my IMD
measurements, but for comparison between two amplifiers this should be
OK. So this is the set I decided to stick with.

I learned that when measuring an amp with a driven ground like in M3 (or
a fully balanced amp), the ground channel of the probe must be left
floating. I'm not entirely sure about whether this only applies to
mains-powered measuring equipment (mine isn't) or not. But just in case,
I decided to stick to this method. And for consistency I decided to
measure both amplifiers the same way. Also for consistency, I was using
unbalanced inputs on Phonitor (that's the only input on my M3).

I let both amps to heat up for an hour before measuring them. For most
of measurements, I set the volume level on both amplifiers to output
**400 mV** into a **33 Ohm** resistive load using a **1 kHz** sine wave.
The line output of MOTU Microbook IIc was attenuated to **-3 dBFS**.

## Results

### THD

Here I was pleasantly surprised by superiority of M3. Below is graph of
THD for **1 kHz** sine, M3 is on the front, in orange, Phonitor is
on the back, in cyan:

[<img src="https://4.bp.blogspot.com/-BIFnpptcjV0/WyHs1G5djTI/AAAAAAAAMpE/hzTsAkxYNwIhEhKYuHBdsrqWFA8PM1-OACLcBGAs/s640/M3%2B400%2BmV%2B33%2BOhm%2B1%2BkHz%2BTHD%2Bvs%2BPhonitor.png" width="640" height="440" />](https://4.bp.blogspot.com/-BIFnpptcjV0/WyHs1G5djTI/AAAAAAAAMpE/hzTsAkxYNwIhEhKYuHBdsrqWFA8PM1-OACLcBGAs/s1600/M3%2B400%2BmV%2B33%2BOhm%2B1%2BkHz%2BTHD%2Bvs%2BPhonitor.png)

It can be seen that M3 almost doesn't have harmonic distortions from the
test signal, and it's **60 Hz** hum spike is at noise level. Here is the
same graph with M3 alone:

[<img src="https://2.bp.blogspot.com/-o-Z9iOR4q64/WyHtV28WqbI/AAAAAAAAMpM/Wzvun5fV6qwLAfkSuYADVF4hZKAujDS7ACLcBGAs/s640/M3%2B400%2BmV%2B33%2BOhm%2B1%2BkHz%2BTHD.png" width="640" height="440" />](https://2.bp.blogspot.com/-o-Z9iOR4q64/WyHtV28WqbI/AAAAAAAAMpM/Wzvun5fV6qwLAfkSuYADVF4hZKAujDS7ACLcBGAs/s1600/M3%2B400%2BmV%2B33%2BOhm%2B1%2BkHz%2BTHD.png)

That's very impressive. Even considering that Phonitor's harmonics are
below audible threshold, on M3 they are practically absent. It's
interesting that on Bob Katz's graphs
([here](https://www.innerfidelity.com/content/katzs-corner-episode-8-my-current-affair)
and
[here](https://www.innerfidelity.com/content/katzs-corner-episode-25-adventures-distortion))
the **60 Hz** spike is more prominent. Perhaps that depends on the power
supply?

The results for a **20 Hz** sine are also very good, this is M3:

[<img src="https://3.bp.blogspot.com/-Xd7qHAbzTTM/WyHu6miZUqI/AAAAAAAAMpY/dx7OQw2_Pqoz57jqdNvDZ8LOBOx30_bZwCLcBGAs/s400/M3%2B400%2BmV%2B33%2BOhm%2B20%2BHz%2BTHD.png" width="400" height="275" />](https://3.bp.blogspot.com/-Xd7qHAbzTTM/WyHu6miZUqI/AAAAAAAAMpY/dx7OQw2_Pqoz57jqdNvDZ8LOBOx30_bZwCLcBGAs/s1600/M3%2B400%2BmV%2B33%2BOhm%2B20%2BHz%2BTHD.png)

And this is Phonitor Mini:

[<img src="https://3.bp.blogspot.com/-0R3Knk8A7NY/WyHvFKGMzHI/AAAAAAAAMpc/_1CpMk1YjUY7fPhKjfNcPTY_9ZyCkKbNQCLcBGAs/s400/Phonitor%2B400%2BmV%2B33%2BOhm%2B20%2BHz%2BTHD.png" width="400" height="275" />](https://3.bp.blogspot.com/-0R3Knk8A7NY/WyHvFKGMzHI/AAAAAAAAMpc/_1CpMk1YjUY7fPhKjfNcPTY_9ZyCkKbNQCLcBGAs/s1600/Phonitor%2B400%2BmV%2B33%2BOhm%2B20%2BHz%2BTHD.png)

Apparently, **400 mV** output level is a piece of cake for both
amplifiers. I decided to crank them both up to produce **3 V RMS** into
a **33 Ohm** load. Distortion levels are now noticeably higher in both
amps, but still below audibility (again, M3 is orange, Phonitor
is cyan):

[<img src="https://2.bp.blogspot.com/-MBq0Yzntw_c/WyHxN2W4vHI/AAAAAAAAMps/rvFjLNYIA7A122g6DR9Lu8HrlOqOK2d4ACLcBGAs/s640/M3%2B3%2BV%2B33%2BOhm%2B1%2BkHz%2BTHD%2Bvs%2BPhonitor.png" width="640" height="440" />](https://2.bp.blogspot.com/-MBq0Yzntw_c/WyHxN2W4vHI/AAAAAAAAMps/rvFjLNYIA7A122g6DR9Lu8HrlOqOK2d4ACLcBGAs/s1600/M3%2B3%2BV%2B33%2BOhm%2B1%2BkHz%2BTHD%2Bvs%2BPhonitor.png)

It's interesting to note that the level of THD of M3 at **3 V** output:
**0.0061%** is still lower than Phonitor's level of THD into **440 mV**:
**0.0074%**. That demonstrates how much power M3 has. And just a
reminder, please don't rely on THD+N numbers on these graphs—they are
quite high due to relatively high noise floor of my measurement rig.

### IMD

Here M3 also demonstrated better performance. Here is SMTPE IMD for M3:

[<img src="https://3.bp.blogspot.com/-dsv8rwdPfds/WyMnmqXniWI/AAAAAAAAMp4/Up-g4wAOVxs0AI9pOXdbjZp7SFSI0GQYwCLcBGAs/s640/M3%2B400%2BmV%2B33%2BOhm%2BSMTPE%2BIMD.png" width="640" height="440" />](https://3.bp.blogspot.com/-dsv8rwdPfds/WyMnmqXniWI/AAAAAAAAMp4/Up-g4wAOVxs0AI9pOXdbjZp7SFSI0GQYwCLcBGAs/s1600/M3%2B400%2BmV%2B33%2BOhm%2BSMTPE%2BIMD.png)

And for Phonitor Mini:

[<img src="https://3.bp.blogspot.com/-Zj-im7HE7vI/WyMnvl4FE1I/AAAAAAAAMp8/2oWgDU9r-G8dmBDbOFq8hag1n3iau4ZVgCLcBGAs/s640/Phonitor%2B400%2BmV%2B33%2BOhm%2BSMPTE%2BIMD.png" width="640" height="440" />](https://3.bp.blogspot.com/-Zj-im7HE7vI/WyMnvl4FE1I/AAAAAAAAMp8/2oWgDU9r-G8dmBDbOFq8hag1n3iau4ZVgCLcBGAs/s1600/Phonitor%2B400%2BmV%2B33%2BOhm%2BSMPTE%2BIMD.png)

As we can see, there are a lot more sidebands on the **7 kHz** signal
caused by **60 Hz** signal played along with it.

And here is CCIF IMD for M3:

[<img src="https://1.bp.blogspot.com/-BE3KpN9z59A/WyMoKmKcuGI/AAAAAAAAMqI/xIYmc2w7QwoD-z7b8X81IB85dwQTh2BSwCLcBGAs/s640/M3%2B400%2BmV%2B33%2BOhm%2BCCIF%2BIMD.png" width="640" height="440" />](https://1.bp.blogspot.com/-BE3KpN9z59A/WyMoKmKcuGI/AAAAAAAAMqI/xIYmc2w7QwoD-z7b8X81IB85dwQTh2BSwCLcBGAs/s1600/M3%2B400%2BmV%2B33%2BOhm%2BCCIF%2BIMD.png)

And for Phonitor Mini:

[<img src="https://3.bp.blogspot.com/-AX9S0WaI4-M/WyMoSPf0z4I/AAAAAAAAMqM/oAgLQ-hthaM06yzooBgDG9USuDPS4AXvgCLcBGAs/s640/Phonitor%2B400%2BmV%2B33%2BOhm%2BCCIF%2BIMD.png" width="640" height="440" />](https://3.bp.blogspot.com/-AX9S0WaI4-M/WyMoSPf0z4I/AAAAAAAAMqM/oAgLQ-hthaM06yzooBgDG9USuDPS4AXvgCLcBGAs/s1600/Phonitor%2B400%2BmV%2B33%2BOhm%2BCCIF%2BIMD.png)

The **1 kHz** signal—the result of interaction between **19 kHz** and
**20 kHz** signals is more visible, although it's level is at
**-100 dBFS**, which is inaudible.

### Frequency Response

I would not expect anything but a ruler flat response from both of these
amplifiers, and indeed this was the case:

[<img src="https://3.bp.blogspot.com/-7qymE3E0ym8/WyMqURKIjJI/AAAAAAAAMqc/JdypR-aZrzc5R4aoDUEYFbizN-yOa-xUwCLcBGAs/s640/FR%2Band%2Bchannel%2Bbalance.png" width="640" height="326" />](https://3.bp.blogspot.com/-7qymE3E0ym8/WyMqURKIjJI/AAAAAAAAMqc/JdypR-aZrzc5R4aoDUEYFbizN-yOa-xUwCLcBGAs/s1600/FR%2Band%2Bchannel%2Bbalance.png)

The channel balance is also exemplary. It's **0.078 dB** for Phonitor,
and **0.061 dB** for M3. And remember that I've built M3 by hand!

### Stereo Separation (Crosstalk)

It's the only measurement where M3 has shown worse results than
Phonitor. Here is Phonitor:

[<img src="https://2.bp.blogspot.com/-vd3z2NA7xgY/WyMsAoUDctI/AAAAAAAAMqo/PzJyOrulRkEuftT4a7UxeTXczpW6WCE-wCLcBGAs/s640/Phonitor%2BCrosstalk.png" width="640" height="440" />](https://2.bp.blogspot.com/-vd3z2NA7xgY/WyMsAoUDctI/AAAAAAAAMqo/PzJyOrulRkEuftT4a7UxeTXczpW6WCE-wCLcBGAs/s1600/Phonitor%2BCrosstalk.png)

The crosstalk level stays at **-74 dBFS** until **1 kHz**, and then
climbs up to **-64 dBFS**. It's definitely better than [Behringer UCA202
was showing](/2018/05/measuring-behringer-uca202.md).
Now let's look at M3:

[<img src="https://3.bp.blogspot.com/-5ciP7t6OfRw/WyMsnDVOXbI/AAAAAAAAMqw/VEtttxQCxiI5wJKzJoSBIS4m07PlJ2BRQCLcBGAs/s640/M3%2BCrosstalk.png" width="640" height="440" />](https://3.bp.blogspot.com/-5ciP7t6OfRw/WyMsnDVOXbI/AAAAAAAAMqw/VEtttxQCxiI5wJKzJoSBIS4m07PlJ2BRQCLcBGAs/s1600/M3%2BCrosstalk.png)

Here variation is less—within **4 dB**, but the overall level is
higher—at **-60.5 dBFS**. Why is that? Bob Katz obtained similarly high
figure: **-42 dBFS** into **20 Ohm** load. But the crosstalk was
improving (becoming lower) as the load impedance was growing higher. Bob
explains this with the fact that the driven (active) ground of M3 has
output impedance.

Considering the worse absolute value, Bob says that anything better than
**-30 dBFS** is insignificant. Thus, **-60 dBFS** isn't a big deal.

### Output Impedance

Another victory of Phonitor: **0.06 Ohm** of output impedance versus
**0.11 Ohm** on M3. Although, I'm not sure this measurement has the same
meaning considering the driven ground of M3.

## Conclusions

M3 is a transparent amplifier. The absence of distortions is due to its
enormous power capacity. I actually doubt that the driven ground has
much influence on its performance. It would be interesting to build a
version of M3 with classical passive ground channel. Like [LXmini
speakers](/2018/06/linkwitz-lxminifirst-impressions.md),
it's a great design that can be reliably built and provide consistence
level of performance.
