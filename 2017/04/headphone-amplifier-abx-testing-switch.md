# Headphone Amplifier ABX Testing Switch Box

In order to figure out whether it's actually possible to distinguish
between reasonably transparent headphone amplifiers I've decided to
build a switch box. It's as simple as wiring together three TRS sockets
and a **3**-pole **2** positions switch. But knowing what amplifier one
is listening to can affect the outcome of evaluation. The key to making
unbiased judgements is blind testing and randomization.

So I decided to add to the box a "shuffling" switch. The idea is that
the person evaluating two amplifiers doesn't know which one is currently
active, that is, which amplifier is bound to which position of the
switch. This binding is chosen randomly by an assistant, unbeknown to
the evaluating person. Schematically the setup looks like this:

[<img src="https://docs.google.com/drawings/d/1cFjf-aRE3Jvdq5JEqNvYnTDQd4QTqb-VcAxVPSZGhHU/pub?w=998&amp;amp;h=200" width="640" height="128" />](https://docs.google.com/drawings/d/1cFjf-aRE3Jvdq5JEqNvYnTDQd4QTqb-VcAxVPSZGhHU/pub?w=998&amp;h=200)

Digital signal from the source is converted into analog signal and
duplicated to both headphone amplifiers under evaluation. Then outputs
from the amplifiers are shuffled (so the actual signal from the Amp A
may end up be labelled either "A" or "B", while the signal from the Amp
B will be labelled the opposite) and passed to the A/B switch which is
controlled by the evaluating person.

The "shuffler" and A/B Switch are encapsulated into one physical box. It
looks like this:

[![](https://2.bp.blogspot.com/-w05fj4bIapY/WPwys1lZJwI/AAAAAAAALZc/0--2F4h0q6cW79slKQrFBoC5fMrrCItZwCLcB/s1600/abx-box-outside.jpg)](https://2.bp.blogspot.com/-w05fj4bIapY/WPwys1lZJwI/AAAAAAAALZc/0--2F4h0q6cW79slKQrFBoC5fMrrCItZwCLcB/s1600/abx-box-outside.jpg)

As you can see, the state of the shuffling switch (labelled I / O:
"Inverse" and "Original") on the back (left photo) can not be seen when
looking at the front panel which hosts the A/B switch (right photo).

The shuffling is implemented trivially, here is the diagram for a pair
of wires from "A" and "B" inputs:

[<img src="https://docs.google.com/drawings/d/1Hkqp5KYydzRzwQJAsOhm8caeVfAeq_KRdztqWl6pIec/pub?w=537&amp;amp;h=267" width="320" height="159" />](https://docs.google.com/drawings/d/1Hkqp5KYydzRzwQJAsOhm8caeVfAeq_KRdztqWl6pIec/pub?w=537&amp;h=267)

Thus, when the shuffling switch is in the "O" ("Original") position, "A"
and "B" wires from the input correspond to "A" and "B" positions of the
A/B switch. When the shuffling switch is in the "I" ("Inverse")
position, they are swapped.

Since stereo signal needs 3 wires, this schematics need to be
triplicated. Thus for shuffling a **6**-pole **2** position switch has
to be used, while the A/B switch is a more common **3**-pole **2**
position.

As one can see from the diagram, there are **2** points where **3**
wires need to be connected together (**6** points in total for full
stereo signal). I've found it handy to use [Sparkfun's Square 1" Single
Sided proto board](https://www.sparkfun.com/products/8808), which
features connected groups by **3** of through-hole contacts. The inside
of the switch box looks like this (the board is on the right):

[<img src="https://1.bp.blogspot.com/-hpOFY3hl2ao/WP0MLlco_dI/AAAAAAAALZw/hT1vx3XT06opKeawkxt57moDcmj18V92wCLcB/s400/IMG_20170405_130858.jpg" width="400" height="316" />](https://1.bp.blogspot.com/-hpOFY3hl2ao/WP0MLlco_dI/AAAAAAAALZw/hT1vx3XT06opKeawkxt57moDcmj18V92wCLcB/s1600/IMG_20170405_130858.jpg)

One last important thing to keep in mind is that before doing any
comparisons, the volume levels of the amplifiers must be matched
**exactly**. The human ears are super sensitive to difference in
loudness, and a louder sound is always perceived as a "better sounding"
one.

In order to align the volume levels, I use the
[T-Cable](/2017/04/t-cable-for-output-level-measurements.html)
I crafted previously and a reasonably precise Agilent U1252B multimeter.
Be sure to measure the voltage on both left and right channels. Not
every single headphone amplifier I've tested featured precise match of
inter-channel voltage levels. On some amps the left channel is louder,
one some the right one. Make sure that the voltage levels of the loudest
channels match (it doesn't matter if on the Amp A the loudest is the
left one, while on the Amp B it's the right one).
