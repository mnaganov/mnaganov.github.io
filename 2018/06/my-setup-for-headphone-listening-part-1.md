# My Setup for Headphone Listening, Part 1

I listen to music on headphones a lot. This is my retreat from
distracting noise that often surrounds me at work and at home. I don't
normally use portable audio players or a mobile phone, instead I have
what is called a "desktop" system: a computer, a desktop DAC, a desktop
headphone amp, and closed over-ear headphones. At home, I also use a
couple of pairs of open over-ears when it's quiet around.

When listening on headphones, I can notice more issues with the
reproduction chain and in the recording, compared to listening on
speakers. That's why I pay a lot more attention to details for the
headphone setup. My goal here is to be able to relax and enjoy the music
on headphones the same way I can enjoy it on speakers.

## Hardware

The hardware part of the chain consists of three components: USB DAC,
headphone amplifier, and headphones. The criteria for choosing them is
easy to formulate—be as transparent as possible. That means, adding as
little distortions and colorations as possible, having precise
inter-channel balance and low crosstalk levels. I tend to avoid doing
any sound processing in the analog domain, relying on DSP plugins
running on the computer instead.

### DAC

As far as electronic components are concerned, it's quite easy to
fulfill the transparency requirements. Any modern DAC with the price
starting from **$200** does the job. Here are some not very expensive
DACs that I'm familiar with.

**Cambridge Audio DacMagic** series. The entry level models: **DacMagic
100** and **DacMagic Plus** used to be expensive back in time of their
introduction, but now have become cheaper because they don't handle DSD
and MQA. So for people not interested in those formats these DACs now
represent a good deal. Especially DacMagic Plus with its internal
operating sampling rate of **384 kHz** and selectable output filters.
Ken Rockwell had published [a very thorough review of this
unit](https://kenrockwell.com/audio/cambridge/dacmagic-plus.htm). Note
that due to high impedance of the headphone output (**50 Ohm**),
DacMagic Plus should not be used as a headphone amplifier, but rather
only considered as a DAC.

[<img src="https://3.bp.blogspot.com/-b4jsOnTYIAU/WzRqAV_gkjI/AAAAAAAAMz0/DsUwKsAQYZo5JbMnsAr47CBVNWD8Tib0gCLcBGAs/s640/DacMagicPlus.jpg" width="640" height="196" />](https://3.bp.blogspot.com/-b4jsOnTYIAU/WzRqAV_gkjI/AAAAAAAAMz0/DsUwKsAQYZo5JbMnsAr47CBVNWD8Tib0gCLcBGAs/s1600/DacMagicPlus.jpg)

**E-MU 0404.** This legendary external sound card of the past is now a
bargain because it's not USB Audio Class compatible, and E-MU / Creative
Labs have abandoned updating drivers for it, so it's not usable on
modern OS versions. However, it has an SPDIF input, so it can be used as
an SPDIF DAC driven by a USB Audio Class compliant pro audio card, or
the optical output of the computer. For example, I connect it to my
**MOTU Microbook IIc** which has a coaxial SPDIF output. 0404 only
supports sampling rates up to **96 kHz** over SPDIF. The other caveat is
that an instance of an old OS (e.g. WinXP running in a virtual machine)
is still needed in order to set up the sampling rate of this card.

[<img src="https://1.bp.blogspot.com/-bmIBF5bI3jU/WzRld50IxlI/AAAAAAAAMzg/F_ooRR7qXC4v_Ai3JTCDIeAXHNHoUzkKACLcBGAs/s400/0404.jpg" width="400" height="323" />](https://1.bp.blogspot.com/-bmIBF5bI3jU/WzRld50IxlI/AAAAAAAAMzg/F_ooRR7qXC4v_Ai3JTCDIeAXHNHoUzkKACLcBGAs/s1600/0404.jpg)

**JDS Labs EL DAC.** Haven't tried it personally, but the price fits the
budget. JDS Labs generally follow the principle of designing transparent
equipment with good objective characteristics. The measurements are
published
[here](http://blog.jdslabs.com/2018/03/el-dac-measurements-optical-vs-coaxial-vs-usb/).

**TEAC UD-301.** A cheaper option than UD-5xx series. The UD-501 model
was [measured by
Archimago](http://archimago.blogspot.com/2013/05/measurements-teac-ud-501-pcm-performance.html)
and looks really solid. UD-301 used the same DAC chip, but doesn't have
the option for selecting the type of the output filter.

### Headphone Amplifier

Decent transparent headphone amplifiers are not hard to find either, as
we can see from my previous post on [measurements of AMB M3 and SPL
Phonitor
Mini](/2018/06/measuring-amb-m3-vs-spl-phonitor-mini.md).
I also use the desktop version of **Objective2** headphone amplifier.

### Headphones

Headphones are more tricky as there is no clear objective criteria on
how headphones should sound like. I'm aware of Harman target
equalization curve, but first, it's [still under
development](https://www.innerfidelity.com/content/harman-tweaks-its-headphone-target-response),
and second, not every headphone manufacturer follows it. Anyways, the
frequency balance of the headphones can be corrected in the software
chain, so the main requirement is about low distortion levels.
Personally, I stuck myself with **Shure SRH1540**. I was also enjoying
**Beyerdynamic T5p** until they broke. Both of those are closed over-ear
headphones.

I've got some open over-ears as well: **Beyerdynamic T90**, **Massdrop
Sennheiser HD6xx**, and **AKG K240**. These are all different sounding,
with K240 being the most uncolored but also adding the most distortions,
T90 sounding the most "airy", and adding extra high frequencies, with
HD6xx being somewhere in the middle.

To summarize, I strive to have the reproduction chain as transparent as
possible. I do not use tube amplifiers, for example. I know they can
sound nice, but the distortions they add can't be taken out if needed.
On the other hand, if the chain is transparent, it's easy to add any
tweaks and "euphonic" distortions at the prior stage—on the computer.

## Software

### Player

The software chain starts with the music player. I'm not very picky
about them. My primary sources are **Google Play Music** for streamed
content, and **Foobar2000** or **VLC** for grabbed CDs and high
resolution (24/96) files.

The only thing I need to tweak in the player is to set its output level
so it has [headroom for intersample
peaks](/2017/05/dac-clipping-on-intersample-peaks.md).
As it had been demonstrated in that post, a digital sound file can
contain encoded sound waves that while being converted into analog would
exceed the normal level of **0 dBFS**. And thus, having slightly more
than **3 dBFS** of headroom is recommended. For the Play Music player
this means setting the volume control two steps below the maximum output
volume:

[![](https://4.bp.blogspot.com/-7VQn2xBOs2o/WzGjRSr95lI/AAAAAAAAMx0/wRJs3AuBq8cmRb8Nbm1k5e63smMNWdRDwCLcBGAs/s1600/play-music-volume.jpg)](https://4.bp.blogspot.com/-7VQn2xBOs2o/WzGjRSr95lI/AAAAAAAAMx0/wRJs3AuBq8cmRb8Nbm1k5e63smMNWdRDwCLcBGAs/s1600/play-music-volume.jpg)

This provides attenuation by **-6 dBFS** (one step attenuates by
**-3 dBFS**), which is more than enough.

For VLC I settled up with **82%** of output volume (about **-4 dBFS**
attenuation), and for Foobar2000, setting the volume control to
**-3.5 dBFS** provides the necessary headroom. This is a very important
step, as any further sound processing step could result in clipping, and
distortions caused by clipping can't be removed afterwards.

### Plugin Host and Audio Capture

The most important component of the processing chain is the plugin host.
I use hosts that allow intercepting system audio or audio from a
specific application. On Mac I use [Audio
Hijack](https://rogueamoeba.com/audiohijack/). This is an easy to use
and stable application that includes a kernel module for capturing sound
output. I think it can only host AudioUnit plugins, but generally it's
not a problem since all the plugin makers provide their modules in
different formats.

[<img src="https://4.bp.blogspot.com/-iz56qzBHC8k/WzRhOJNefDI/AAAAAAAAMzE/cCC7gb8hVrcSLQc4UzSAjfJcKHlGj02DQCLcBGAs/s640/Audio%2BHijack.png" width="640" height="252" />](https://4.bp.blogspot.com/-iz56qzBHC8k/WzRhOJNefDI/AAAAAAAAMzE/cCC7gb8hVrcSLQc4UzSAjfJcKHlGj02DQCLcBGAs/s1600/Audio%2BHijack.png)

On Windows things are more complicated. There is a free open-source app
called [Equalizer
APO](https://sourceforge.net/projects/equalizerapo/) which installs
itself as a filter for the selected audio interface. It can host VST
plugins. However, I've got a couple of issues with it. First, it doesn't
allow VST plugins to show their meters. Second, it crashed when I was
attempting to add **Redline Monitor**—[my current favorite crossfeed
plugin](/2018/02/112db-redline-monitor-plugin.md).
Since Equalizer APO is open source it should be possible to fix both of
these annoyances, but I haven't got to this yet.

Instead, I found another plugin host app called ["Virtual Audio
Stream"](http://www.virtualaudiostream.com/). It allows using **4**
independent effect racks. In order to capture applications or system
sound output, VAS provides virtual audio devices, but they are limited
to **44.1 kHz**. However, any other "virtual cable" device can be used
instead. I use ["Virtual Audio Cable"](https://www.vb-audio.com/Cable/),
where the "Hi-Fi" version supports sampling rates up to **384 kHz**.

[<img src="https://1.bp.blogspot.com/-cUTimGGkwRM/WzRlFffFTCI/AAAAAAAAMzY/hqAFFljF2mU3bcjFiX5EhxtiIRn1nttzACLcBGAs/s640/EffectRack.png" width="640" height="480" />](https://1.bp.blogspot.com/-cUTimGGkwRM/WzRlFffFTCI/AAAAAAAAMzY/hqAFFljF2mU3bcjFiX5EhxtiIRn1nttzACLcBGAs/s1600/EffectRack.png)

The next big topic is the list of plugins that I use with these hosts,
and their settings. This will be covered in the next post.
