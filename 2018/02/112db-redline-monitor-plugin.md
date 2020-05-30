# 112dB Redline Monitor Plugin

While looking around for other crossfeed implementations, I've found
Redline Monitor by the audio company called
["112dB"](https://www.112db.com/). It's a plugin which is intended to be
used with DAWs for simulating loudspeaker sound on headphones. On Mac,
with Audio Hijack Pro it's quite easy to hook it up to the system audio
output. The plugin has several emulation options, some of them missing
on Phonitor headphone amplifiers, but it's price (**$69**) calls for a
thorough evaluation before buying it. Thanks to generosity of 112dB, the
plugin is available for a **60** days trial period, which I'm using the
get some insight into how it works.

## Controls

Let's check out the controls of the plugin. Those are very similar to
the controls found on Phonitor:

[<img src="https://2.bp.blogspot.com/-hrek8w8ZHlY/WnPpzusgKiI/AAAAAAAAMLE/8ii5cYc4YAEm3648PaFdViAj29EuPt7-gCLcBGAs/s320/Redline-Monitor-UI.png" width="320" height="178" />](https://2.bp.blogspot.com/-hrek8w8ZHlY/WnPpzusgKiI/AAAAAAAAMLE/8ii5cYc4YAEm3648PaFdViAj29EuPt7-gCLcBGAs/s1600/Redline-Monitor-UI.png)

I would start with the rightmost control—the simulated distance to
loudspeakers. I think, it's the most interesting control because the
type of processing and the resulting sound changes dramatically
depending on its current value. When the value is "**0 m**", the plugin
effect is the most non-intrusive and resembles Phonitor's processing.
All other settings of this switch introduce rather serious phase shifts
and comb filtering to simulate room reflections.

The *"Soundstage"* control defines the total angle between the simulated
speakers. *"Center"* is center signal attenuation. The *"Dim"* switch
pre-attenuates the input signal to make sure that the processes signal
doesn't clip. The rest of the switches are mostly needed for
professional monitoring purposes, they are covered in [the
manual](https://www.112db.com/redline/monitor/help/Redline%20Monitor%20Manual.pdf).

## Confession

While doing my comparisons between Phonitor line of headphone amplifiers
and Redline Monitor, I went through manuals for [Phonitor
2](https://spl.info/wp-content/uploads/Phonitor_2_BA_EN.pdf) (this
manual I have never opened before) and Phonitor mini. This was the first
time when I discovered the tables and graphs in Phonitor 2 manual (page
**17**), and also noticed the statement *"With the Angle switch you
define the frequency-corrected channel crosstalk. In this case, we are
dealing with „Interaural Time Difference“ (ITD)"* in Phonitor mini's
manual.

This was a very surprising discovery for me, because previously I was
sure that Phonitor has almost linear phase response, and doesn't
introduce any group delay. The delay was never showing up in my
measurements, for reasons yet unknown. But from the manuals, it was
obvious that Phonitor also employs ITD.

But that was all for good. And in fact, making such discoveries that I
would otherwise have missed is one of the reasons I write this blog.

## Equalization Differences

First I've checked how the equalization graphs of Redline Monitor look
like, compared to similar settings on Phonitor mini. I've made the
following settings on Redline Monitor:

Phantom center: **-1.2 dB**
Soundstage: **60** degrees
Distance: **0** meters

Which are semantically equivalent to the following settings on
Phonitor:

Crossfeed level: **Low**
Angle: **30** degrees (this is between the speaker and the center, thus
soundstage is **60** degrees)
Center: **-1.2 dB**

Surprisingly, the graphs look very different:

[![](https://4.bp.blogspot.com/-T6wLI_pykDU/Wnu44cx8RBI/AAAAAAAAMNY/H7BrdQhhZE4icxSb7C3J5ClcdYAZPY0igCLcBGAs/s1600/redline-vs-phonitor.png)](https://4.bp.blogspot.com/-T6wLI_pykDU/Wnu44cx8RBI/AAAAAAAAMNY/H7BrdQhhZE4icxSb7C3J5ClcdYAZPY0igCLcBGAs/s1600/redline-vs-phonitor.png)

The amplitudes, the knee frequency, the inter-channel level—just
everything is different, only the general principle stays the same.

However, if we look at group delay graphs, they look very much the same
(again, at equivalent settings):

[![](https://3.bp.blogspot.com/-jLhCEOcQIsw/Wnu6Ep-KKII/AAAAAAAAMNk/BmLit05g3zcZSyrwBBGLjcjgTjdercwjwCLcBGAs/s1600/group-delay-vs.png)](https://3.bp.blogspot.com/-jLhCEOcQIsw/Wnu6Ep-KKII/AAAAAAAAMNk/BmLit05g3zcZSyrwBBGLjcjgTjdercwjwCLcBGAs/s1600/group-delay-vs.png)

One small difference is that Redline Monitor has **300 μs** ITD as low
frequencies, while Phonitor 2 has **200 μs** ITD.

## Sonic Differences

In order to perform an ABX test, I've processed several music excerpts
using Redline Monitor, and also recorded them via Phonitor mini
crossfeed matrix (after I have discovered that [my Phonitor
simulation](/2017/10/re-creating-phonitor-mini-with-software.md)
lacks group delay, I decided I shouldn't use it for tests). The same
processing settings were used that are specified in the section above.
The goal was to check can Redline Monitor and Phonitor mini be
distinguished, and which one would I prefer.

The results are not very conclusive. Perhaps, the choice of tracks
wasn't revealing enough, or I do need to train my listening skills
better. With the modest processing amount I was applying, I couldn't
even reliably distinguish the source from processed tracks, and
distinguish Redline Monitor from Phonitor. The good news is that there
isn't much change to the tonal balance with either crossfeed
implementation.

## "Distant" Modes

Let's go back to Redline Monitor's settings and check what happens to
its transfer function when we start increasing the simulated distance to
the speakers. Here the center image is at **0 dB** attenuation, the
soundstage is **60** degrees. I started with **0 m** distance,
proceeding in **0.5 m** increments up to **2 m** setting. Below is the
graph of resulting frequency response, where darker colors represent
larger distances. The blue plot is for the left channel, the red plot is
for the right channel:

[![](https://3.bp.blogspot.com/-o5K3sKshPIY/WnqHxigjl0I/AAAAAAAAMM4/R035NC8NuhoMMqbGE71VIG-ILVa0N6hlACLcBGAs/s1600/distance.png)](https://3.bp.blogspot.com/-o5K3sKshPIY/WnqHxigjl0I/AAAAAAAAMM4/R035NC8NuhoMMqbGE71VIG-ILVa0N6hlACLcBGAs/s1600/distance.png)

I guess, the ripples simulate the interaction of reflected sound with
direct sound that happens when listening to loudspeakers in a room. The
farther the listener is, the more enveloped they are in the reverberant
field. As we can see, the amplitude of ripples is increasing with the
distance, making the sound more and more colored.

It would be interesting to judge correctness of this simulation from the
psychoacoustic point. In real conditions, the ears and the brain can
"listen through" the room, discarding these colorations, but the brain
has much more information, e.g. changes in received sound with subtle
head moves, which are absent in this simulation. So the question is open
whether these ripples just color the sound, or are they "converted" into
speaker distance information by brain, or both processes happen to some
degree simultaneously.

## Conclusions

I think, Redline Monitor can be used as a substitute for Phonitor mini
when the latter is unavailable. Although, their processing is a bit
different, one needs a very trained ear in order to distinguish between
those two implementations.

For Redline Monitor, I would recommended to use **0 m** distance setting
in order to avoid comb filtering occurring with the other settings of
the *"Distance"* control.
