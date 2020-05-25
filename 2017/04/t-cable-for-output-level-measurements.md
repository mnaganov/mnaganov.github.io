# T-Cable for Output Level Measurements and Surprise from Benchmark

When performing headphone amplifier comparisons (actually, any
audio-related comparisons), matching output levels is of a paramount
importance. Louder sounding equipment always perceived as sounding
"better" (unless it is clipping because it has exceeded its
capabilities). And human ears are amazingly sensitive to volume levels,
even a bit of difference in them may affect our judgements.

That means, before starting any comparisons of headphone amps "by ear"
make sure that they have been set up correctly. Two tools that are
helpful for this job are: good "true RMS" multimeter, and a special
cable that has open contacts for attaching probes (unless one is OK with
partially disassembling the amplifier or headphones to reach their
contact plates).

That's why I decided to make a simple pass-through 1/4" TRS T-Cable with
an outlet where multimeter cables can be connected to. This is how is
supposed to be used:

<img src="https://docs.google.com/drawings/d/1sA9JVOI8ya-T0TC2N01zjiYVk9pwmOhivVlWYzo_Idk/pub?w=591&amp;h=505" width="400" height="341" />

This is how an assembled cable looks like:

[![](https://2.bp.blogspot.com/-1kcHYan_QUo/WOa7lUif9eI/AAAAAAAALVU/SY005iiS0gE1-ludPJgSiGxd7mL3K2odgCLcB/s1600/cable.jpg)](https://2.bp.blogspot.com/-1kcHYan_QUo/WOa7lUif9eI/AAAAAAAALVU/SY005iiS0gE1-ludPJgSiGxd7mL3K2odgCLcB/s1600/cable.jpg)

After finishing the cable, I decided to test it with my headphone amps.
First I tried with **SPL Phonitor Mini** and **AKG K550** headphones.
I've connected the T-cable in between, and started playing a **1 kHz**
sine tone—a simple wave, so the multimeter doesn't have any problem
measuring the output level. As I expected, the output level was
increasing or decreasing with my volume adjustments, and levels of the
left and right channels matched pretty closely (within **1%**).

The next was **Benchmark DAC1 HDR**, and here I've got a big
surprise—the levels of the left and right channels were pretty much off
from each other—as much as **16%**. Something that I wasn't expecting
from this piece of equipment. I listened to this sine wave myself, and
indeed I noticed that it was shifted to the right, and the amount of
shifting was changing as I was adjusting the volume.

I've searched on the web, and found this old thread on [ProSoundWeb
forum](http://repforums.prosoundweb.com/index.php?topic=15076.0)
describing exactly the same problem I have, and the conclusion there was
that the left / right balance for headphones on DAC1 only holds at a
certain output level. This seems pretty strange to me, especially
combined with the fact that Benchmark has a remote control. So they put
a motorized volume pot in this amp, but couldn't make it to preserve
balance across the volume control range?

Having figured out this sad fact, I decided to adjust the balance on the
Benchmark. Thankfully, it has a trimpot for that. Here is how my setup
was looking like:

[<img src="https://1.bp.blogspot.com/--sg-Lz33zBI/WObJfzeQjUI/AAAAAAAALV8/yno_sVMnp14s4l6hwvJWCUhScEIQpvQqwCLcB/s640/benchmark-with-zoom.jpg" width="640" height="540" />](https://1.bp.blogspot.com/--sg-Lz33zBI/WObJfzeQjUI/AAAAAAAALV8/yno_sVMnp14s4l6hwvJWCUhScEIQpvQqwCLcB/s1600/benchmark-with-zoom.jpg)

The trimpot on this model is easy to find. What it seems to do is
adjusting the level of the left channel. After I balanced the channel
levels for a level of about **100 mV RMS**, I've found that it actually
only holds in this region. As soon as you move the volume slider by a
couple of marks, the sound is getting slightly out of balance again. Not
great, but at least I'm now aware of this issue.

For me, the conclusion is never trust the brands, and always check
everything with tools before jumping into any comparisons.
