# My Setup for Headphone Listening, Part 2

Continuing the topic of my desktop setup for headphone listening, let's
recap what we had covered in [Part
1](/2018/06/my-setup-for-headphone-listening-part-1.md).
We have set up a transparent hardware chain at moderate cost, and
decided to make all the necessary adjustments on the software side using
DSP plugins. In order to route audio from any player program via the DSP
processing chain, on Mac we use [Audio
Hijack](https://rogueamoeba.com/audiohijack/), and on Windows—a
combination of [virtual loopback
cables](https://www.vb-audio.com/Cable/) and [a plugin host
program](http://www.virtualaudiostream.com/). I'm not covering Linux and
mobile platforms here, sorry.

## The Processing Chain

I don't believe in the existence of a perfect playback chain that would
suit all commercial recordings. Even if the chain itself is transparent,
the combination of recording's frequency balance and the headphone's
frequency curve may not suit your taste. Also, due to non-linearity of
human hearing, even changing playback volume affects perceived tonality.
So clearly, an ability to tweak tonal balance is required.

Also, when using closed headphones the reproduction sounds unnatural due
to super-stereo effect—each ear can hear its own channel only. This is
especially noticeable on recordings that employ some form of "spatial"
processing intended for speakers.

So our goals are pretty clear: being able to easily adjust levels of
high and low frequencies, and have
a [crossfeed](/2017/10/re-creating-phonitor-mini-with-software.md).
In addition, we can try adding some psycho-acoustic enhancement by
injecting 2nd or 3rd order harmonics (this is roughly equivalent to
using a tube amplifier). Previously, I was also enthusiastic about the
idea of [headphone frequency response
normalization](/2017/12/on-headphone-normalization.md).
Now I'm less excited, and I will explain why later. But if headphones
used are known to have some particular tonal issue, like the **6 kHz**
bump of [Sennheiser
HD800](https://www.innerfidelity.com/content/sennheiser-hd-800-s-tweaked-and-delightfuland-french-diy-response), adding a "normalizing" plugin could be a good idea.

So here is a conceptual diagram of the DSP chain I use:

[![](https://2.bp.blogspot.com/-gq03GxmZ1XQ/W0EKuu42vvI/AAAAAAAAM2M/TR4m6wVR5QQqmEtdy194hiQpLLyeGKW4QCLcBGAs/s1600/Headphone%2BProcessing%2BChain.png)](https://2.bp.blogspot.com/-gq03GxmZ1XQ/W0EKuu42vvI/AAAAAAAAM2M/TR4m6wVR5QQqmEtdy194hiQpLLyeGKW4QCLcBGAs/s1600/Headphone%2BProcessing%2BChain.png)

First comes a simple 2- or 3-band equalizer employing Baxandall curves.
I find these to be more pleasant sounding than typical shelving filters
of multi-band parametric equalizers.

The next block adds harmonic distortions. It helps to liven up some
recordings if they sound too dry and lack "dimension". I think, in small
controlled quantities harmonics sometimes can help. However, I prefer to
add them with a DSP plugin rather than with an amplifier.

Then comes a crossfeed plugin. An alternative is to use the crossfeed
feature of the headphone amplifier or DAC, if it has one. But using a
plugin allows to have crossfeed on any DAC / amp, so it's more
versatile. Also, if crossfeed is implemented as a plugin, it's possible
to add a headphone "normalization" plugin after it. I think that having
crossfeed after normalization defeats the purpose of the latter since
crossfeed will most likely change the carefully tuned frequency
response.

I run my chain at **96 kHz**, even when the source material is at
**44.1 kHz**. Use of higher sampling rates is common in music production
world, as they allow using smoother antialiasing filters during
processing, and also help reducing the quantization noise. Going up to
**192 kHz** or higher will consume more CPU resources, and considering a
modest amount of effects used, I don't think it's really needed.

At first, I was hesitating a bit whether should I use an integer
multiple of the source sampling rate, that is, **88.2 kHz** instead of
**96 kHz**, but then I realized that converting from **44.1 kHz** to
**48 kHz** can be expressed conceptually as first upsampling with a
multiplier of **160**, and then downsampling by **147**, both being
integer multipliers (44100 \* 160 / 147 = 48000). Also, a lot of good
DAC units have an upsampling DSP processor connected before the DAC
chip, for upsampling to **192 kHz** (TEAC UD-x01), **384 kHz**
(Cambridge Audio DacMagic Plus and Azur), **768 kHz** (!) (Pro-ject
DacBox DS2 Ultra), or even an "odd" value of **110 kHz** ([Benchmark
DAC1](https://benchmarkmedia.com/blogs/application_notes/13127453-asynchronous-upsampling-to-110-khz)).
So the DAC chip would never "know" what was the track's original
sampling rate.

Thus, there is no reason to worry about going from **44.1 kHz** to
**96 kHz** on the processing chain side, as modern software resamplers
should be transparent. This is assuming that the input signal doesn't
have intersample peaks. And we took care of this by lowering the digital
volume of the player (see
[Part 1](/2018/06/my-setup-for-headphone-listening-part-1.md)),
giving some headroom to the audio signal before it gets upsampled.

## Measurements

DSP plugins still need to be measured despite that their effects are
usually better documented than of hardware units. Why? Because there can
be surprises or discoveries, as we will see. Also, some plugins for some
reasons have uncalibrated sliders, labelled in a very generic fashion
like "0..10" and it's not clear what changes each step introduces. So
unless you have a very trained ear, it's better to measure first.

And the audio transport channels that we use, despite being fully
digital and thus supposedly "bit-perfect" still can introduce
distortions, or cause losses in audio resolution. This is an imperfect
world, and we need to be prepared.

### The Empty Chain

As an example, let's measure an empty processing chain consisting of
Windows 10 Pro (Build 17134.rs4\_release.180410-1804), Hi-Fi Virtual
Cable (from player to the effects host), VB-Audio Cable (from the
effects host to the analyzer input), and DDMF EffectRack (64-bit
version). The virtual stream on the EffectRack uses "Windows Audio
Exclusive mode".

One problem that I've noticed is that using a test sine signal at
**0 dBFS** causes distortion:

[<img src="https://4.bp.blogspot.com/-EjlgGI6c8uE/W0Dcsaz4l0I/AAAAAAAAM0g/RApdWRwr1MEnl9MhdN3aljj1__cyt8akwCLcBGAs/s640/HiFiCable%2Bvia%2BEffectRack%2Bvia%2BVB-Audio%2BCable%2B0dBFS%2B24-96%2BTHD.png" width="640" height="440" />](https://4.bp.blogspot.com/-EjlgGI6c8uE/W0Dcsaz4l0I/AAAAAAAAM0g/RApdWRwr1MEnl9MhdN3aljj1__cyt8akwCLcBGAs/s1600/HiFiCable%2Bvia%2BEffectRack%2Bvia%2BVB-Audio%2BCable%2B0dBFS%2B24-96%2BTHD.png)

But after lowering the input signal level by just **0.1 dB** it's gone.
I've double checked that the test signal is not overshooting **0 dBFS**.
I've also checked with [Bitter
plugin](https://www.stillwellaudio.com/plugins/bitter/) that the signal
is not clipping:

[<img src="https://1.bp.blogspot.com/-rpiyog6MmCU/W0Dc7n5onQI/AAAAAAAAM0k/7gcFax44-ykcyzEvc7XrVxSa09wAACw9ACLcBGAs/s320/Bitter-0dBFS.png" width="172" height="320" />](https://1.bp.blogspot.com/-rpiyog6MmCU/W0Dc7n5onQI/AAAAAAAAM0k/7gcFax44-ykcyzEvc7XrVxSa09wAACw9ACLcBGAs/s1600/Bitter-0dBFS.png)

Having that a lot of modern recordings have peaks normalized to
**0 dBFS** the advice I gave in
[Part 1](/2018/06/my-setup-for-headphone-listening-part-1.md) about
lowering the digital volume on the player by at least **3.5 dBFS** seems
especially useful in this case.

I'm not sure where this distortion is happening—it could be anywhere in
the kernel audio transport, in virtual cables, or in EffectRack.
However, I've also tried this experiment with DDMF virtual streams, and
with another effects host:
[PedalBoard 2](http://www.niallmoody.com/apps/pedalboard2), and the
result was the same, so I'm suspecting Windows audio chain. But I must
note that **0 dBFS** sine plays fine via lots of sound cards' physical
loopback, thus most likely it's a combination of Windows and virtual
cable drivers that causes this behavior.

The lesson from this measurement is that I should not use a **0 dBFS**
test signal when testing the processing chain.

Another curious thing I've found is that with some virtual cables
EffectRack causes distortion when there are no effects in the chain
(stream's audio input is directly shorted to audio output), but the
distortion is gone as soon as I insert a processing plugin, even if it
does nothing to the audio stream (all processing knobs are at zero
position).

By the way, using Bitter plugin is also helpful for verifying the actual
bit resoluton of the processing chain. As we have seen on the screenshot
above, on Windows I do actually have **24-bit** resolution. It's
interesting that on Mac with Audio Hijack the resolution seems to be
even better—**32-bit**:

[<img src="https://2.bp.blogspot.com/-zvhC1F5ETpw/W0DdrU8UtZI/AAAAAAAAM00/Ldt5tvmLV58IZYHxFk6hYvDD7qMU4v3GQCLcBGAs/s400/Bitter-Mac-0dBFS.png" width="205" height="400" />](https://2.bp.blogspot.com/-zvhC1F5ETpw/W0DdrU8UtZI/AAAAAAAAM00/Ldt5tvmLV58IZYHxFk6hYvDD7qMU4v3GQCLcBGAs/s1600/Bitter-Mac-0dBFS.png)

### The Equalizer

There is no shortage of equalizer plugins. My long time favorite was
[basiQ by Kuassa](https://www.kuassa.com/products/basiq/) because it's
free, simple to use, and it implements a good old 3-band Baxandall
equalizer. Typically I used it in very moderate amounts never going more
than **5** or **6** steps from the zero settings. This is how the
equalization curves look like:

[<img src="https://2.bp.blogspot.com/-_sV7g972dj0/W0EHOUfZiwI/AAAAAAAAM14/TeML2caHMX4vdpDJ_K3tpSoT5hLsWBXzwCLcBGAs/s640/basiQ-curves.png" width="546" height="640" />](https://2.bp.blogspot.com/-_sV7g972dj0/W0EHOUfZiwI/AAAAAAAAM14/TeML2caHMX4vdpDJ_K3tpSoT5hLsWBXzwCLcBGAs/s1600/basiQ-curves.png)

Note that even in "all zeroes" setting the frequency response isn't
entirely flat. I'm not sure if it's intentional, but it's better to be
aware of this (that's why we measure!) Also note that the amount of
correction resulting from the same amount of knob steps are not the same
for low, mid, and high frequencies. I think, this is to account for the
fact that human ear is less sensitive to changes in bass frequencies.

Another important thing is that when boosting any frequencies, the
resulting increase in the sound power must be compensated by decreasing
the output level of the plugin (the small knob at the bottom), otherwise
clipping may occur on loud music passages.

[![](https://2.bp.blogspot.com/-fjNQ2lbsez8/W0EDlz-J1GI/AAAAAAAAM1s/3PvbHZl0pu8aez2is9NHrH4u0emtyFJ9gCLcBGAs/s1600/basiQ-volume.png)](https://2.bp.blogspot.com/-fjNQ2lbsez8/W0EDlz-J1GI/AAAAAAAAM1s/3PvbHZl0pu8aez2is9NHrH4u0emtyFJ9gCLcBGAs/s1600/basiQ-volume.png)

But I've said that basiQ *used* to be my favorite plugin. I've migrated
to [Tone Control by GoodHertz](https://goodhertz.co/tone-ctrl), and this
is why. Although it only has **2** bands (vs **3** on basiQ), Tone
Control has an interesting offering of using a linear phase filter. That
means zero group delay—no frequency groups get delayed by processing.
This is important because some musical sounds (e.g. a hi-hat crash) are
wide band signals, and delaying some parts of this signal "smears" the
sound in time domain, which according to some theories affects [its
localization by
brain](http://manger-audio.blogspot.com/2011/11/perception-and-hearing-explained-by-new.html).

Tone Control isn't free, and actually it's quite expensive for a 2-band
equalizer (**$95!**). However, using it I could easily replicate my
setups in basiQ, and Tone Control can create web shortcuts for them to
use anywhere. Before that I tried [DDMF LP10
equalizer](https://ddmf.eu/lp10-linear-phase-equalizer-plugin/), which
also offers linear phase filters, but replicating delicate tone curves
of basiQ with it was very hard, so I decided to pay a bit more for Tone
Control.

### Harmonics Enhacement

I decided to experiment with adding harmonics after reading [this post
by Bob
Katz](https://www.innerfidelity.com/content/katzs-corner-episode-25-adventures-distortion).
I've found [Fielding DSP Reviver](https://www.fieldingdsp.com/reviver)
plugin, which costs just **$29**. I measured it in order to calibrate
the scales of its controls—they just go from "0" to "100", and also to
verify that they don't have aliasing problems.

After measuring the levels of THD of Reviver, I decided never to go
higher than "5" mark for both 2nd and 3rd harmonics. For the reference,
the "1" mark adds 2nd harmonic at **\~0.2%** THD (about **-55 dBFS**),
and for "5" it's a bit higher than **1%** THD (about **-40 dBFS**). And
for the 3rd harmonic the figures are a somewhat lower, so when both
sliders are at "5", this creates a natural harmonics picture:

[<img src="https://2.bp.blogspot.com/-TEjl8MPA9dc/W0Dn5ROlCeI/AAAAAAAAM1E/7PBygThLSdgIZbP192Wla69bly0TYgYlwCLcBGAs/s640/Reviver%2B5-5%2Bno%2BSerial.png" width="640" height="440" />](https://2.bp.blogspot.com/-TEjl8MPA9dc/W0Dn5ROlCeI/AAAAAAAAM1E/7PBygThLSdgIZbP192Wla69bly0TYgYlwCLcBGAs/s1600/Reviver%2B5-5%2Bno%2BSerial.png)

(I've put the cursor over the 2nd harmonic to show that it's at
**-39.95 dBFS**, while the 3rd as we can see is lower than **-40 dBFS**.)

Turning on "Serial" mode also adds 4th and 5th harmonics:

[<img src="https://1.bp.blogspot.com/-coH7pP5vZcY/W0DoaFUwc9I/AAAAAAAAM1M/fTIaxkEoJ8sbTysO1r0kXjhIe8eO1WNoQCLcBGAs/s640/Reviver%2B5-5%2Bwith%2BSerial.png" width="640" height="440" />](https://1.bp.blogspot.com/-coH7pP5vZcY/W0DoaFUwc9I/AAAAAAAAM1M/fTIaxkEoJ8sbTysO1r0kXjhIe8eO1WNoQCLcBGAs/s1600/Reviver%2B5-5%2Bwith%2BSerial.png)

Subjectively, adding harmonics may add "dimension" to sound, make it a
bit "fatter". It in facts helps some recordings from 70-s and 80-s to
sound better. My hypothesis is that for their production, tube
amplifiers were be used in studio, so they were sounding "rich" there.
But while being played via a transparent solid state chain on headphones
they sound more "bleak" and "flat". So adding back some distortions
helps.

However, I would not recommend abusing the harmonics plugin because,
unfortunately, adding those "euphonic" harmonic distortions also brings
in unpleasant non-harmonics. Dr. Uli Brüggemann of AudioVero explains
the reasons in [his
article](http://www.acourate.com/freedownload/k2/TheHarmonicDistortionMyth.pdf).
And indeed, if we look at IMD SMTPE and CCIF measurements for Reviver,
the level of SMTPE-measured distortions is quite high. So use it with
caution—keeping it turned on all the time defeats the purpose of having
a transparent reproduction chain. The effect of non-linear distortions
can also be seen on the frequency response graph which becomes
noticeably "fuzzier":

[<img src="https://2.bp.blogspot.com/-S6hNaUmb6Tg/W0Do4O6FmsI/AAAAAAAAM1U/7xa5PY4iVqwF4rOaTzVMremrP_Low5XmgCLcBGAs/s640/Reviver%2B5-5%2Bwith%2BSerial%2BFR.png" width="640" height="440" />](https://2.bp.blogspot.com/-S6hNaUmb6Tg/W0Do4O6FmsI/AAAAAAAAM1U/7xa5PY4iVqwF4rOaTzVMremrP_Low5XmgCLcBGAs/s1600/Reviver%2B5-5%2Bwith%2BSerial%2BFR.png)

### Crossfeed and Headphone Normalization

I covered both [Redline
Monitor](/2018/02/112db-redline-monitor-plugin.md)
and a couple of [headphone normalization
plugins](/2017/12/on-headphone-normalization.md)
in my [earlier posts](/2017/12/on-headphone-normalization-part-2.md).
For headphone normalization I would also prefer a plugin that has
"linear phase" mode.

Now I would like to explain why I'm actually not currently using
headphone normalization. From my experience, normalization indeed makes
the headphones sound different from their original tuning, which can be
exciting at first. But is it really a setup that you would want to use
all the time? I doubt that. I actually have doubts that normalization
can serve as a "reference", here is why.

There are several factors that can affect the headphone normalization
process: first, the same model of headphones isn't necessarily
consistent from instance to instance, and besides that, pad wear can
affect bass response. OK, some companies offer measuring your
headphones, and imagine we have done that. Then the second factor comes
in—your head. The dummy heads used in measurement use statistical
averages for head, ear pinna, and ear canal dimensions. But they are
obviously not the same as your head, and this will affect the shape of
the frequency response at the ear drum (see [this interesting thesis
work](http://lib.tkk.fi/Dipl/2008/urn012834.pdf) for details). And
finally, the target response is not set in stone. There are [several
versions of Harman target
curve](https://www.innerfidelity.com/content/harman-tweaks-its-headphone-target-response),
diffuse field curve, and your actual room curve.

So, there are just a lot of variables in the normalization process.
There is a solution that takes them all into account—the [Smyth
Realizer](http://www.smyth-research.com/), but it's too expensive for an
ordinary folk. Thus, since we are not interested in music production,
but only in pleasantly sounding reproduction, I've found that simply
using tone controls delivers a desired sound with much less effort.

## Conclusion

[<img src="https://4.bp.blogspot.com/-yd7yrb5xrwA/W0Dqhls_XhI/AAAAAAAAM1g/21nt8TLTFRYw1YvE4_oFI8M387R-Sof3QCLcBGAs/s640/Hijack%2Band%2BPlugins.png" width="640" height="388" />](https://4.bp.blogspot.com/-yd7yrb5xrwA/W0Dqhls_XhI/AAAAAAAAM1g/21nt8TLTFRYw1YvE4_oFI8M387R-Sof3QCLcBGAs/s1600/Hijack%2Band%2BPlugins.png)

For me, using a simple DSP processing chain and a transparent
reproduction chain has become a flexible and not too expensive way to
enjoy my music in headphones. This setup offers endless ways to
experiment with tonalities, "warmth", and soundstage perception while
staying with the same hardware.
