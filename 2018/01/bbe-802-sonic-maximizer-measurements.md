# BBE 802 Sonic Maximizer Measurements and Teardown

While watching this [YouTube video](https://youtu.be/-ATZQEnbWsk) that
analyzes the transfer function of the older model of the BBE Sonic
Maximizer—the 802 model, I've noticed one thing that I miss on the
current generation of Maximizers—the ability not only to boost high
frequencies (HF), but also to attenuate them. Out of curiosity, I've
bought an 802 unit on eBay and performed the same measurements I've done
previously for 282i.

## What's Inside

But first, I looked under the cover of the unit to see if it's based on
the same **NJM2153** chip as the 882 model, and I've found out that it
in fact isn't! This is what we can find inside:

[<img src="https://1.bp.blogspot.com/-h8kBwywqmwM/Wl7RNRVL8uI/AAAAAAAAMI4/qiISJ-ACB4QuQLHVwJ9UnoEdtmKE8nXAwCLcBGAs/s640/teardown-web.png" width="640" height="310" />](https://1.bp.blogspot.com/-h8kBwywqmwM/Wl7RNRVL8uI/AAAAAAAAMI4/qiISJ-ACB4QuQLHVwJ9UnoEdtmKE8nXAwCLcBGAs/s1600/teardown-web.png)

The first thing we can see is a pair (one per channel) of giant chips
marked "BBE." That's the original "sound enhancement" chip. It's
interesting, that compared to **NJM2153** package which has **20** pins,
of which **18** are actually used, this "BBE" chip only has **18** pins,
minus **1** not connected, thus only **17** are in use:

[<img src="https://2.bp.blogspot.com/-mgrOFvbziC4/Wl7dIEqa_cI/AAAAAAAAMJI/QmyqdGzAIhYBm3HVKgz0rNOyGk--qUQYACLcBGAs/s200/bbe-chip-pins.png" width="200" height="200" />](https://2.bp.blogspot.com/-mgrOFvbziC4/Wl7dIEqa_cI/AAAAAAAAMJI/QmyqdGzAIhYBm3HVKgz0rNOyGk--qUQYACLcBGAs/s1600/bbe-chip-pins.png)

It would be interesting to figure out what is the extra input that
**NJM2153** receives compared to the old BBE chip, but for that I will
need to trace the connections on the board. Although, that shouldn't be
hard since the board has in fact only one layer, I'd leave that for some
time later.

The other chips we can see here are opamp assemblies. There are **3** of
them per channel:

**NE5532N**—the ubiquitous audio opamp, used for balanced output;
**SGS LM324N** and **SGS TL074CN**—used for driving LEDs.

These are pretty much the same components that are used in the 882
model, except that 882 uses electronic balancing of inputs, and for that
purpose it employs two more pairs of NE5532. Whereas 802 only uses old
school transformer balancing (you can see a pair of small transformers
per channel.)

## Measurements

I'm presenting the measurements in the same order as for 282i
[here](/2018/01/bbe-282i-sonic-maximizer-measurements.md).

### Group Delay

Unlike 282i, this 802 unit doesn't affect group delay at all when it's
in bypass mode. From what I've seen in the frequency response
measurements, when in bypass mode, the 802 excludes all its circuits
from the signal path, which perhaps isn't true for 282i.

So, this is the group delay plot when processing is enabled:

[<img src="https://4.bp.blogspot.com/-vWAHfYhDCFY/WmAy_MgR5jI/AAAAAAAAMJo/F9tTVtjZAsg45tC6iwsShYmZBgi9Uo81QCLcBGAs/s640/group-delay.png" width="640" height="266" />](https://4.bp.blogspot.com/-vWAHfYhDCFY/WmAy_MgR5jI/AAAAAAAAMJo/F9tTVtjZAsg45tC6iwsShYmZBgi9Uo81QCLcBGAs/s1600/group-delay.png)

The numbers are pretty close to what manual is saying, discounting by
this unit's age. We can conclude that this functionality didn't change
much with the Maximizer evolution.

### THD

Here the things are becoming more spooky. Look at how harmonic
distortions increase when the unit is in processing mode (orange) versus
the loopback measurements (black):

[<img src="https://4.bp.blogspot.com/-polnq46Pzmc/WmA0SLEqtZI/AAAAAAAAMJ0/AKlLNlBjUwA9lqQ2x9UhTTIVh4b02vnTACLcBGAs/s640/harmonics.png" width="640" height="266" />](https://4.bp.blogspot.com/-polnq46Pzmc/WmA0SLEqtZI/AAAAAAAAMJ0/AKlLNlBjUwA9lqQ2x9UhTTIVh4b02vnTACLcBGAs/s1600/harmonics.png)

The faint line is the level of 3rd harmonics—it reaches **0.1%** for
middle frequencies and crawls up to **1%** for bass. Although, it
doesn't contradict the official specs—they say *"less than **0.15%** @
1 kHz"*, this is much worse than the modern 282i shows.

According to [John Siau's
calculations](https://benchmarkmedia.com/blogs/application_notes/interpreting-thd-measurements-think-db-not-percent),
**0.1%** of distortions translates into **-60 dB** noise below playback
SPL, which can be audible.

### Frequency Response

So, what about the ability to attenuate HFs, is it really there? Yes,
indeed:

[<img src="https://4.bp.blogspot.com/-pbZJy0LgBCA/WmFfd0XiAAI/AAAAAAAAMKE/ZsNJIcdDx4AeQKRoK62nOT9fRfthHHvBwCLcBGAs/s640/FR-web.png" width="640" height="266" />](https://4.bp.blogspot.com/-pbZJy0LgBCA/WmFfd0XiAAI/AAAAAAAAMKE/ZsNJIcdDx4AeQKRoK62nOT9fRfthHHvBwCLcBGAs/s1600/FR-web.png)

As we can see, setting the "Processing" knob to the minimum position
("1") attenuates the HF by **6 dB**. Setting it to the middle setting
("5") provides a flat-ish response, and turning "Processing" all the way
up produces a bump at about **4 kHz**.

However, we can also see that HF roll down quickly after **10 kHz** on
any setting, which is much less exciting. The modern versions of the
Maximizer demonstrate a flat FR up to **20 kHz** (when the knobs are at
their minimum positions.)

Finally, what about that non-linear frequency response that we have seen
on 282i and that effectively acts as an expander for HF. Yes, it's
there:

[<img src="https://3.bp.blogspot.com/-E39QhKyUMkM/WmFwVcOlUFI/AAAAAAAAMKU/-hE0UQ9LbIEE29zyDAUYP5aefH6hYkGxwCLcBGAs/s640/Max-Max.png" width="640" height="340" />](https://3.bp.blogspot.com/-E39QhKyUMkM/WmFwVcOlUFI/AAAAAAAAMKU/-hE0UQ9LbIEE29zyDAUYP5aefH6hYkGxwCLcBGAs/s1600/Max-Max.png)

(Note that the graphs were produced using white noise as a source
signal, thus at low frequencies the plots are wiggly.)

With both knobs at the maximum setting, we can see that the 802 unit
doesn't boost the HF if the signal level is low. Even more interesting
picture is when the "Processing" knob at the minimum level:

[<img src="https://3.bp.blogspot.com/-GE0fN8YkmWw/WmFwterj1SI/AAAAAAAAMKY/UOX7g77zY7MdN-yxOn9aAwqwaK212scGgCLcBGAs/s640/Max-Min.png" width="640" height="340" />](https://3.bp.blogspot.com/-GE0fN8YkmWw/WmFwterj1SI/AAAAAAAAMKY/UOX7g77zY7MdN-yxOn9aAwqwaK212scGgCLcBGAs/s1600/Max-Min.png)

As we can see, at low signal levels, the HF are less attenuated, so the
unit works as a compressor! If we align the lowest (red) plot with the
highest (magenta) one at **1 kHz**, the delta at **6 kHz** is about
**4 dB**.

## Conclusions

The older BBE Sonic Maximizer model 802 provides some interesting
abilities to manipulate high frequencies not available in the modern
models, but unfortunately suffers from high distortions level, and
compromised frequency range. Perhaps, at the time when it was introduced
(around 1980-s), these specs were acceptable, but currently they clearly
don't meet the bar. So unless you intend to process sources that by
their nature has high distortions and reduced frequency range (e.g.
analog tape), there is absolutely no point in using this ancient unit.
