# Measuring QSC SPA4-100 Amplifier and Understanding Driving Modes of Speakers

As I had mentioned a couple of times (see
[this](/2019/03/amp-dac-box-for-lxmini-minibox.md)
and
[this](/2018/06/linkwitz-lxminifirst-impressions.md)
posts), I drive my DIY LXmini speakers from [QSC
SPA4-100](https://www.qsc.com/systems/products/power-amplifiers/energystar-amplifiers/spa-series/spa4-100/)
power amplifier. I had chosen it because of its compact form-factor (1U
half rack) and power capabilities (**4 x 100W** channels) that fit
perfectly the LXmini use case. Finally, I've got time to do some
measurements on it. While I'm very much satisfied with the sound I'm
getting from this amp + speakers, there are a couple of questions I want
to get an answer for:

1.  What is the difference in output between the cases when unbalanced
    or balanced inputs are used with this amplifier.
2.  Does the bridged output mode of the amp provide any improvements in
    THD compared to single ended mode (the effect that [I've seen with
    Monoprice Unity
    amplifier](/2019/05/measuring-bridged-and-balanced.md)).
3.  How a more expensive Class D amplifier (QSC) stands in measurements
    against a less expensive one (Monoprice).

I decided to measure the amp in **4 Ohm** output mode driving
**4 Ohm** and **8 Ohm** loads. This corresponds to the nominal
impedances of LXmini's full range driver ([SEAS Prestige FU10RB
H1600-04](http://www.seas.no/index.php?option=com_content&view=article&id=377:h1600-04-fu10rb&catid=53&Itemid=466))
and woofer ([SEAS Prestige L16RN-SL
H1480](https://www.madisoundspeakerstore.com/approx-5-woofers/seas-prestige-l16rn-sl-h1480-5-aluminum-cone-woofer/)).
For the loads I used wire-wound resistors attached to massive heat
sinks.

## Single Ended Mode

### Output Power

Below is the table of results obtained by driving one channel of the amp
with a **1 kHz** sine signal from QuantAsylum QA401. The voltage was
measured over the load using Agilent U1252B TrueRMS multimeter:

| Load, Ohm | Input, dBV  | Output, Vrms | Power, W |
|:---------:|:------------|:-------------|---------:|
|  8        |   0, unbal  |  16.74       |  35      |
|  8        |  -4, bal    |  20.88       |  54.5    |
|  4        |   0, unbal  |  16.55       |  68.5    |
|  4        |  -4, bal    |  20.58       |  105.6   |

Trying to go above **-4 dBV** for a balanced input was tripping the
input limiter. This is consistent with the manufacturer's specification
for the input sensitivity which is **+4 dBu** = **1.78 dBV** \~ **-4 dBV**
of balanced input (doubling of logarithmic voltage is approx.
**+6 dBV** increase). The gain of the amplifier for unbalanced input is
**24.5 dB**. In balanced mode it's slightly above **30 dB**.

Output power figures are also consistent with the manufacturer's
specification. Maximum output power is achieved when maximum allowed
input is provided. It can also be seen that the maximum is not
achievable when using unbalanced output as the input voltage is limited.
This is important as miniDSP 2x4 HD only has unbalanced outputs. They
are specified as having **2 Vrms = +8 dBu** maximum level, so it's
possible to hit the limiter when setting the output gain on miniDSP too
high.

I must say that the resulting sound power from LXminis together with the
subwoofer so far was enough for playing quite loud in my living room.
But it's good to know that power output can be increased if I switch to
balanced inputs on the amplifier.

### Distortion and Frequency Response

For these measurements I hooked up QuantAsylum QA401 in parallel to
resistive load. There is a caution in the amplifier manual warning
against connecting any output to the ground. I suppose, trying to do
that will trip the short circuit detection circuit in the amplifier. So
I used differential connection instead, leaving probes ground connectors
floating.

[<img src="https://1.bp.blogspot.com/-QpcCZUX90eM/XbYROUJrxlI/AAAAAAAAO8s/LTpbxQrPys8pRkGQ5J4HsMwkkxJ9MY53gCLcBGAsYHQ/s640/no-ground-warning.png" width="640" height="184" />](https://1.bp.blogspot.com/-QpcCZUX90eM/XbYROUJrxlI/AAAAAAAAO8s/LTpbxQrPys8pRkGQ5J4HsMwkkxJ9MY53gCLcBGAsYHQ/s1600/no-ground-warning.png)

The lowest THD was achieved while driving an **8 Ohm** load in **4 Ohm**
output mode (the picture was taken while using balanced input to the
amplifier):

[![](https://1.bp.blogspot.com/-WFFgcS6MstI/XbUeQ_bVeSI/AAAAAAAAO7w/imWKx4er4BgKqtNwKdNS9QBQfV61OwCCACLcBGAsYHQ/s1600/bal_inp_-5dBV_unbal_out_4Ohm_8Ohm_load-lowres.png)](https://1.bp.blogspot.com/-WFFgcS6MstI/XbUeQ_bVeSI/AAAAAAAAO7w/imWKx4er4BgKqtNwKdNS9QBQfV61OwCCACLcBGAsYHQ/s1600/bal_inp_-5dBV_unbal_out_4Ohm_8Ohm_load-lowres.png)

Note that there are two small "spikes" around the test frequency which
look surprisingly similar to jitter peaks from DAC tests. I suppose,
it's totally possible with Class D amplifiers as they effectively sample
the input signal. Thus, small variations in the frequency of the
triangle wave generator used for sampling can cause some samples to be
off by a small amount. Although, there isn't much worry about that as
these spikes are below **-110 dB** from the main signal, so they are
inaudible. Harmonics and aliases also look very small compared to the
main signal.

Testing IMD shows more severe distortion and strong aliases at about
**60 kHz**:

[![](https://1.bp.blogspot.com/-AFUBN5i1iBQ/XbUgJQ8TEkI/AAAAAAAAO78/jE9tIkEf8vwjOZH3L1YEB65vT_vwA3XgACLcBGAsYHQ/s1600/bal_inp_-10dBV_unbal_out_4Ohm_8Ohm_load-IMD-lowres.png)](https://1.bp.blogspot.com/-AFUBN5i1iBQ/XbUgJQ8TEkI/AAAAAAAAO78/jE9tIkEf8vwjOZH3L1YEB65vT_vwA3XgACLcBGAsYHQ/s1600/bal_inp_-10dBV_unbal_out_4Ohm_8Ohm_load-IMD-lowres.png)

Looks like the antialiasing filter is "slow". Indeed, we can see that
from the FR graph:

[![](https://1.bp.blogspot.com/-GymvCwlNKCU/XbUgxPtxjwI/AAAAAAAAO8E/8PaX9j-zw1MXw9zrNMf8gH_eovQeedfFACLcBGAsYHQ/s1600/bal_inp_-35dBV_unbal_out_4Ohm_8Ohm_load-FR-lowres.png)](https://1.bp.blogspot.com/-GymvCwlNKCU/XbUgxPtxjwI/AAAAAAAAO8E/8PaX9j-zw1MXw9zrNMf8gH_eovQeedfFACLcBGAsYHQ/s1600/bal_inp_-35dBV_unbal_out_4Ohm_8Ohm_load-FR-lowres.png)

I also saw similar weak filtering on Monoprice's Class D amplifier and
at that point decided that it's because it's a rather cheap model. But
now I'm seeing the same on a more expensive amp. Looks like
manufacturers decided to use a weak filter to avoid compromising power
output. Out of curiosity I also tried measuring the frequency response
with a real speaker load, hoping that the inductivity of the speaker
would act as a low pass filter, but instead I've got absolutely the same
graph. It's good to be aware of this issue.

Driving a **4 Ohm** load in **4 Ohm** mode yields slightly higher
distortion figures. If for an **8 Ohm** load we have THD+N **0.0074%**,
for a **4 Ohm** load it becomes **0.0115%**.

## Balanced Mode

This is where things get pretty interesting. I looked up in the manual
how to enable balanced mode, and found that this amplifier doesn't have
a switch for that. Instead, the manual says "drive both inputs at the
same level, connect the positive terminal of Output 1 and the negative
terminal of Output 2 to the load":

[<img src="https://1.bp.blogspot.com/-fjLt81dXSQ8/XbYUWzghL2I/AAAAAAAAO84/Tld8idg_DewxpYbPFSkAg8DiHxQJop2twCLcBGAsYHQ/s640/bridged-mode.png" width="640" height="418" />](https://1.bp.blogspot.com/-fjLt81dXSQ8/XbYUWzghL2I/AAAAAAAAO84/Tld8idg_DewxpYbPFSkAg8DiHxQJop2twCLcBGAsYHQ/s1600/bridged-mode.png)

This forced me to pause and think a bit about what does that mean for
Channels 2 and 4 in non-bridged mode. Since there is no switch for the
bridged mode, the amplifier always works the same way regardless of
whether we use it for driving two channels in single ended mode, or one
channel in bridged mode. For Channels 1 & 3 this doesn't cause any
issue—the positive wire of the output gets driven by the amplifier. But
what about Channels 2 & 4? It seems that they must be driven via the
negative wire of the output and in an inverted phase. Is that true? To
answer that, first I connected QA401 left and right inputs to both ends
of the load connected to Channel 1, L (blue) to "+", R (red) to "-":

[![](https://1.bp.blogspot.com/-LT8UIzIscOo/XbYYC1hEH3I/AAAAAAAAO9E/RKLOmwcuTa0dsm9fQBC76P3A7GOp4xKQgCLcBGAsYHQ/s1600/non_bridged_out-lowres.png)](https://1.bp.blogspot.com/-LT8UIzIscOo/XbYYC1hEH3I/AAAAAAAAO9E/RKLOmwcuTa0dsm9fQBC76P3A7GOp4xKQgCLcBGAsYHQ/s1600/non_bridged_out-lowres.png)

We see a natural voltage drop across the resistive load confirming that
the amplifier only drives the "+" wire. What about Channel 2
(connections are done the same was as for Channel 1):

[![](https://1.bp.blogspot.com/-Mk3bGxJbJJo/XbYYvMQh8-I/AAAAAAAAO9M/FKKYqVYSQ8oWjU-V67gUbKwym0-D0RjMACLcBGAsYHQ/s1600/non_bridged_out2-lowres.png)](https://1.bp.blogspot.com/-Mk3bGxJbJJo/XbYYvMQh8-I/AAAAAAAAO9M/FKKYqVYSQ8oWjU-V67gUbKwym0-D0RjMACLcBGAsYHQ/s1600/non_bridged_out2-lowres.png)

Yes, it's completely opposite—the "-" wire is active! For checking
signal phase I connected the left input of QA401 to "+" of Channel 1,
and the right input to "+" of Channel 2. Since the positive wire of
Channel 2 receives attenuated signal, I adjusted the attenuator on
Channel 1 to make the levels to be similar:

[![](https://1.bp.blogspot.com/-IgUCvwtL1O0/XbYZcVkBEJI/AAAAAAAAO9Y/8QbEhL1VZFc_lkZ_A7TMRjvuJMtCKxnRwCLcBGAsYHQ/s1600/unbal_out1_L_out2_R_to_plus-lowres.png)](https://1.bp.blogspot.com/-IgUCvwtL1O0/XbYZcVkBEJI/AAAAAAAAO9Y/8QbEhL1VZFc_lkZ_A7TMRjvuJMtCKxnRwCLcBGAsYHQ/s1600/unbal_out1_L_out2_R_to_plus-lowres.png)

In time domain, we can see that Channel 1 and Channel 2 are driven in
opposite phases.

Wait, does it mean that Channels 2 and 4 have inverted polarity when the
amplifier is used in single ended mode? Actually no, because speakers
are differential devices. I'll talk about this later. Just in order to
verify that the polarity is correct, I connected two identical speakers
the same way to Channel 1 and Channel 2, placed a microphone between
them and ran Acourate's "Microphone Alignment" procedure:

[<img src="https://1.bp.blogspot.com/-YJkuDE77TIA/XbYbtj0BRII/AAAAAAAAO9k/W2oz_cVPJZkbEl2WNYSiVuj_1yt0li6twCLcBGAsYHQ/s640/speaker-polarity-check.png" width="640" height="477" />](https://1.bp.blogspot.com/-YJkuDE77TIA/XbYbtj0BRII/AAAAAAAAO9k/W2oz_cVPJZkbEl2WNYSiVuj_1yt0li6twCLcBGAsYHQ/s1600/speaker-polarity-check.png)

As we can see, both speakers are in phase, no need to worry. Let's
continue to measurements.

### Output Power

I ran a couple of measurements into **4 Ohm** load in bridged mode from
an unbalanced input.

| Load, Ohm | Input, dBV  | Output, Vrms | Power, W |
|:---------:|------------:|:-------------|---------:|
|  4        |   0, unbal  |  32.77       |  268.5   |
|  4        |  -4, unbal  |  20.63       |  106.4   |
|  4        | -10, unbal  |  10.33       |  28.4    |

As we can see, the voltage gain in bridged mode from unbalanced input is
the same as for single ended mode from balanced input—**30 dB**.
Doubling the output voltage allows for almost **4x** increase in the
output power—compare **68.5 W** into **4 Ohm** from **0 dBV** that we
have seen for the single ended mode vs. **268.5 W** from the same input
in bridged mode. Nice! But what about distortion?

### Distortion

Unfortunately, distortion doesn't look good. I had to lower the input
level to **-10 dBV** to avoid clipping on the input of QA401, and
distortions graph from a **1 kHz** input looks like this:

[![](https://1.bp.blogspot.com/-ztXAk85_2rM/XbZiP23ZUsI/AAAAAAAAO-A/7UtkExDZi9cPW5ElZmJCC3ethnPwtrJ7gCLcBGAsYHQ/s1600/unbal_inp_-10dBV_bridged_out_4Ohm-lowres.png)](https://1.bp.blogspot.com/-ztXAk85_2rM/XbZiP23ZUsI/AAAAAAAAO-A/7UtkExDZi9cPW5ElZmJCC3ethnPwtrJ7gCLcBGAsYHQ/s1600/unbal_inp_-10dBV_bridged_out_4Ohm-lowres.png)

Two tone distortion produces high levels of ultrasonic noise (from same
**-10 dBV** level):

[![](https://1.bp.blogspot.com/-cIHqaa27uH0/XbZipEU_uNI/AAAAAAAAO-M/57CblD7tGJAbLfEenpVJjpUp749p6kg3gCLcBGAsYHQ/s1600/unbal_inp_-10dBV_bridged_out_4Ohm-IMD-lowres.png)](https://1.bp.blogspot.com/-cIHqaa27uH0/XbZipEU_uNI/AAAAAAAAO-M/57CblD7tGJAbLfEenpVJjpUp749p6kg3gCLcBGAsYHQ/s1600/unbal_inp_-10dBV_bridged_out_4Ohm-IMD-lowres.png)

And remember, that's for **10 Vrms** output (**28.4 W** power). In
single ended mode even **20 Vrms** output produced much less distortion.
Clearly, the bridged mode of this amplifier is designed for something
like PA applications, not for high fidelity.

## Conclusions on the QSC SPA4-100 Amplifier

Answering the questions I've stated in the beginning of this post. We
can see that this QSC amplifier is way more linear in its best operating
mode (single ended) than cheaper Monoprice in its best mode
(bridged)—just take another look at the graphs in [the post about
Monoprice](/2019/05/measuring-bridged-and-balanced.md).

Also, QSC's capabilities are specified much closer to real measurements
than what Monoprice had specified. And clearly, higher price point of
QSC is fully justified.

The bridged mode produces higher distortion even at lower input signal
levels. This can be explained by the fact that each driving amplifier in
this case "sees" twice less load. As we have observed on the **4 Ohm**
vs **8 Ohm** load, distortion in this amplifier increases as the load
impedance decreases. I suppose, it increases even more with **4 Ohm**
load gets divided in half by bridging.

What is common for both amplifiers is that there are some visible
ultrasonic artefacts that are not filtered out even when using a real
inductive speaker load. So actually, driving some sensitive speaker at
high output level may overload and even damage it due to excessive high
frequency energy.

## Speaker Driving Modes

We can see that the audio engineers at QSC are very creative. As we have
observed, the same speaker can be driven by this amplifier in **3** modes:

-   from the "+" terminal in positive phase;
-   from the "-" terminal in inverted phase;
-   from both terminals.

Does it make any difference to the speaker? In fact, no because what
speaker "sees" is the difference of potentials between its "+" and "-"
terminals. Say, we have **1 V** (relative to some arbitrary reference
point) applied to "+" terminal, and **0 V** applied to "-" terminal. The
speaker "sees" **1 V - 0 V = +1 V** voltage. This voltage drives the
cone forward (if enough current is supplied by the amplifier).

What if we apply **0 V** to the "+" terminal and **-1 V** to the "-"
terminal? The speaker "sees" **0 V - (-1 V) = +1 V** voltage. This
voltage drives the cone forward. Now, what if we apply **0.5 V** to the
"+" terminal and **-0.5 V** to the "-" terminal? Absolutely the same
thing.

This is why it's possible to drive a speaker from the "-" terminal using
an inverted signal. The speaker will behave the same as if driven from
the "+" terminal using the signal in the original phase. Same thing
happens if we drive the speaker from both sides. The only participant
for which bridging matters is the amplifier. After internalizing all
this stuff, I've re-read the post from Benchmark Media about [myths of
balanced headphone
connections](https://benchmarkmedia.com/blogs/application_notes/audio-myth-balanced-headphone-outputs-are-better) and
this time I understood every word from it. Practicing with amplifiers
helps to understand the theory!
