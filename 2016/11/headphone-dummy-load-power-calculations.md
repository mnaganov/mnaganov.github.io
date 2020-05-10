# Headphone Dummy Load Power Calculations

After I've shown my [Headphone Dummy
Load](/2016/11/my-take-on-headphone-dummy-load.html)
post to Warren, he kindly noted that using **35 W** power resistors for
this project is probably an overkill and suggested to do calculations on
the power rating of the PCB I used.

I looked at [Sparkfun's product
page](https://www.sparkfun.com/products/12702) for board specs, but
unfortunately there are none. So I downloaded [board design
files](http://cdn.sparkfun.com/datasheets/Prototyping/solderable_breadboard_mini.zip)
and opened them in [Eagle](https://cadsoft.io/). After examining the
board layout, I've figured out that the trace width used on the board is
**0.032"**. Using [EEWeb online PCB trace max current
calculator](https://www.eeweb.com/toolbox/internal-pcb-trace-max-current/),
I've obtained the following estimation:

[<img src="https://1.bp.blogspot.com/-ivjYSO0gPg4/WDC65397gsI/AAAAAAAAK4Q/WY5Z8_qNWFAK78mt4tBts_O0BEmVRddqACLcB/s400/PCB%2Bcalculator.png" width="286" height="400" />](https://1.bp.blogspot.com/-ivjYSO0gPg4/WDC65397gsI/AAAAAAAAK4Q/WY5Z8_qNWFAK78mt4tBts_O0BEmVRddqACLcB/s1600/PCB%2Bcalculator.png)

Max current that this PCB can hold is **1 A** (I used
**1 oz/ft<sup>2</sup>** as trace thickness as suggested on the [PCB basics
Sparkfun
page](https://learn.sparkfun.com/tutorials/pcb-basics/composition)).

What is a typical headphone signal current? I've conducted a little
experiment playing a **1 kHz** sine wave through a [Mayflower O2
headphone amp /
DAC](https://www.mayflowerelectronics.com/shop/digital-to-analog-converters/objective2-odac-combo-with-rear-power/)
connected to my dummy headphone load set at **33 Ohm** and obtained the
following figures using a "True RMS" multimeter:

* at "low gain" setting and volume set to maximum: **220 mV**, **0.7 mA**;
* at "high gain" setting and volume set to maximum: **580 mV**, **1.8 mA**.

From **P = I \* V** formula, it seems that a **35 W** resistor can
withstand up to **35 A** at **1 V**. That's a lot more that I would ever
need and **35** times more than the PCB itself can handle. I could just use
a **3 W** resistors instead which cost less than $1 each instead of $5
that I paid for these power resistors. Good to know!
