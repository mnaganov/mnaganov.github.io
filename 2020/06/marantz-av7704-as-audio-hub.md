# Marantz AV7704 As An Audio Hub

I have a Marantz AV7704 A/V receiver that I was using for some
of my work projects.  I know Marantz well for their classic
"Hi-Fi" equipment: CD players and receivers. Originally an
American company, it was acquired by its Japanese competitor
Denon, forming a "D&M" holding. Then the holding was bought by
"Sound United" which now owns "Classé", "Denon", "Marantz", and
"Polk" brands. We can only hope that all these corporate games
didn't degrade the quality of the products.

Up until the last month I was considering this receiver for work
usage only but lately I decided to give it a bit more use and
hook it up for my daily listening. My goals were:

* eliminate computers and any other equipment with fans from the
  playback chain;
* have convenient remote controls;
* ensure that audio path is clean and works to its full performance.

So let's see how this receiver performs. The documentation on its
technical capabilities is quite scarce, it will be useful to
fill up missing information on measurements.

## First Look

This is quite a versatile receiver. If you look at its back panel
there is no shortage of inputs and outputs:

[![](https://1.bp.blogspot.com/-QWQxL-NlKSM/Xu7iOZU9d-I/AAAAAAAARFg/3nuprbbPLI8RFEPJXJt-EoUqRFs-gP_kQCK4BGAsYHg/d/back-panel.jpg)](https://1.bp.blogspot.com/-QWQxL-NlKSM/Xu7iOZU9d-I/AAAAAAAARFg/3nuprbbPLI8RFEPJXJt-EoUqRFs-gP_kQCK4BGAsYHg/s600/back-panel.jpg)

AV7704 supports **3** audio zones, and its remote has **14**
buttons for selecting an input. The inputs utilize a range of
technologies from good old analog to digital wireless. This is
somewhat overwhelming. I decided to wear a consumer hat first
and see what functions I can utilize.

### Inputs

My usage of AV7704 is **95%** for audio playback. I have the
following "use cases":

* streaming lossy stereo audio (Google Play Music and YouTube);
* playing lossless stereo audio from a home server (FLAC files);
* playing surround audio from a home server (DTS, MKA and MKV files).

Currently I have a stereo setup but nevertheless I enjoy
listening surround re-issues of famous albums downmixed into
stereo for headphones (binaural). Sometimes surround remixes
reveal background details that I missed on the original stereo
mixes.

What AV7704 can offer to me? It has a built-in HEOS player which
supports some streaming services and Internet radios, however
Play Music is absent from the list. Not a big problem—I have a
Chromecast HDMI dongle and NVidia Shield TV Pro set-top box that
I can connect to HDMI inputs.

Playing local stereo is of course supported by HEOS, and the
most convenient way for making files from a local server to be
accessible to HEOS seems to be via a Plex server. In theory HEOS
can connect to network shares directly, but I couldn't make it
work.

Unfortunately, HEOS doesn't support surround audio
files and neither does Chromecast. Shield comes to the rescue
offering a Plex client and VLC apps.  Both support "pass-thru"
mode for sending encoded surround audio to the HDMI output of
Shield directly.

AV7704 also has support for Bluetooth and AirPlay. However,
Bluetooth is obviously lossy and limited to stereo, and AirPlay
requires using a computer or an iOS device—not my option.

### Outputs

Here I've got somewhat atypical demands. I need optical output
to feed the
[miniBox](/2019/03/amp-dac-box-for-lxmini-minibox.md) for
LXminis and the subwoofer, with volume control! I need
parametric equalizers for interfacing [SPL Phonitor
mini](/2018/06/measuring-amb-m3-vs-spl-phonitor-mini.md)
headphone amplifiers.

This is where AV7704 falls short for me—it only offers HDMI outputs
and analog outputs (line and headphone), no SPDIF. Also, the EQ
on this unit is a classic ["Graphic EQ"](http://manuals.marantz.com/AV7704/EU/EN/GFNFSYuyviicam.php)
with fixed bands and no adjustment for the "Q" value of filters.
It's good that this receiver at least offers
[tone controls](http://manuals.marantz.com/AV7704/EU/EN/SEHFSYrsdmuabm.php),
I will need to use them when playing some records.

It is possible to split off SPDIF from an HDMI output by using one
of numerous "HDMI Splitter" boxes. I was considering that
until I discovered that AV7704 only offers volume control on its
analog outputs—not when sending audio via HDMI.

Failure? Not really—I have a trump in my sleeve—MOTU Ultra Lite
AVB card which I was previously using for [my surround
setup](/2017/04/motu-ultralite-avb-hybrid-stereo-51.md). This
card has **6** high quality line inputs, DSP, and both analog
and digital outputs. So I can use to complete the HDMI receiver
and Dolby / DTS processing functions of AV7704, great! And MOTU AVB
can work on its own, without a computer, thus my initial requirement
is still fulfilled.

The remote control requirement is fulfilled by AV7704, the
companion HEOS app for Android, and obviously other apps on Android
that can work with Chromecast.

### Configuration

This is how I hooked things up:

[![](https://1.bp.blogspot.com/-OQVM7fsUj3Y/Xu7iaYKDmjI/AAAAAAAARFw/QlTr_vfxiXEg9ZNmx85hAce1ZLKirDp_wCK4BGAsYHg/d/AV7704%2BConnections.png)](https://1.bp.blogspot.com/-OQVM7fsUj3Y/Xu7iaYKDmjI/AAAAAAAARFw/QlTr_vfxiXEg9ZNmx85hAce1ZLKirDp_wCK4BGAsYHg/s1097/AV7704%2BConnections.png)

I decided to use Zone 1 output for headphones (driven by SPL
Phonitor minis). XLR outputs of AV7704 connected to inputs of
MOTU AVB for headphone equalization.  Since the headphones are
connected to Phonitors which have volume controls, I don't need
to control volume on AV7704. So potentially I could send audio
to HDMI, split it out as SPDIF and send that to MOTU optical
input. I considered that option but found it inconvenient
because first, this will require adding yet another electronic
box to the configuration, and second, this will force MOTU AVB
to be clocked at the same sampling rate as HDMI audio, which is
normally 48 kHz. So using the analog XLR output is more robust,
although it adds an extra D/A->A/D conversion.

Specifically for surround downmixes I would prefer to use the
headphone output of AV7704 (HPH on the diagram) because
typically there are differences in how Dolby and DTS downmix to
speakers vs. headphones since the latter offer much better
channel separation.

And Zone 2 output (only RCA is offered for it) is used for
LXminis.  Since the miniBox is about two meters away from AV7704
and is powered from a different outlet I decided to use optical
connection between AV7704 and miniDSP in miniBox for full
isolation and less noise. For the speakers I have to use the
volume control of the AVR so the analog output is the only
option here. In order to convert analog into TOSLink I also
use MOTU AVB.

With all these extra D/A and A/D conversions and use of analog
outputs on AV7704 it is important to verify that there is no
signal quality degradation due to noise, output or input overload,
or any other issue. Also, AV7704 offers options like "direct"
output which clams to provide "purer" output and I'm curious
to validate these claims.

## Verification

### Digital Inputs

Need to recall two issues that can happen with digital recordings
that do not leave enough headroom due to aggressive mastering.
The first is [clipping of intersample peaks during resampling](/2017/05/clipping-in-sampling-rate-converters.md). The problem illustrated below:

[![](https://1.bp.blogspot.com/-CRAVsmLQgm8/Xu7ikcVwNBI/AAAAAAAARGA/a-IMBd855MsJ9V_r6t8HzU4nGgwjszbSQCK4BGAsYHg/d/intersample-peaks-resampling.png)](https://1.bp.blogspot.com/-CRAVsmLQgm8/Xu7ikcVwNBI/AAAAAAAARGA/a-IMBd855MsJ9V_r6t8HzU4nGgwjszbSQCK4BGAsYHg/s573/intersample-peaks-resampling.png)

If a record is digitally mastered in a way that puts non-peak
values of waveforms to maximum (or minimum) values of a particular
integer representation (16-bit or 24-bit integers), then
resampling can yield values that are outside of the domain of
the integer representation, which means clipping. This is what
I have encountered with Google Nexus Player with its mandatory
resampling of **44.1 kHz** content to **48 kHz**.

Presence of this problem can be detected purely in digital
domain by capturing the digital output of the player.  I decided
to check Chromecast, HEOS, and Shield whether they have this
issue. For that I used the same test files as back in 2017: a
sine wave phase shifted by **45°** and "normalized" to
**0 dBFS** digitally.

Recall that this isn't just a DSP geekery but rather a real issue
encontered in commercial CD recordings that were engineered
to sound "louder".

This is the test setup I used:

[![](https://1.bp.blogspot.com/-tz92qB5CCyg/Xu7irhYDL8I/AAAAAAAARGQ/3nTMnynIKJE3CsOZy5tLHSKNqck1SMdHQCK4BGAsYHg/d/Chromecast_HEOS_Shield%2BClipping%2BTest.png)](https://1.bp.blogspot.com/-tz92qB5CCyg/Xu7irhYDL8I/AAAAAAAARGQ/3nTMnynIKJE3CsOZy5tLHSKNqck1SMdHQCK4BGAsYHg/s1013/Chromecast_HEOS_Shield%2BClipping%2BTest.png)

I was capturing the digital output digitally by sending audio
to HDMI and using a splitter. The optical output from the splitter
was captured by MOTU AVB. What I've found is that Chromecast and
HEOS do not attempt to resample the input signal and hence do not
clip it, whereas Shield Pro always opens the HDMI output at
**48 kHz** and resamples **44.1 kHz** inputs to **48 kHz** with
clipping. Thus, the conclusion is—avoid using Shield Pro for
music playback except for encoded surround audio which is sent
to the AVR directly for further decoding, or if you are sure
the audio is at **48 kHz** already.

I also checked if I can ditch HEOS in favor of Chromecast for
local playback too, but quickly discovered that VLC can glitch
when casting to Chromecast, while HEOS always plays flawlessly.

### AV7704 Analog Outputs

What I wanted to verify is whether the quality of the XLR, RCA,
and the headphone output of AV7704 are on par with each other.
I used
[Cambridge Audio DacMagic Plus](https://www.cambridgeaudio.com/usa/en/products/hifi-and-home-cinema/dacmagic-plus)
as a reference.
I verified that its XLR and RCA outputs in fact have the same
linearity and I was expecting the same from AV7704.

However, as I started measuring I found that the RCA output of
AV7704 is much noisier than XLR. The fact that the noise was
fluctuating as I was touching the unit's screws at the back lead
me to the conclusion that it is missing proper
grounding. Indeed, the power input of AV7704 is two-pronged so
the enclosure if "floating".  I can understand why the
manufacturer has done that—it's in fact typical for consumer
equipment which normally uses unbalanced connections and thus
there is a high chance of creating a ground loop. However,
instead of simply not grounding the enclosure I would prefer to
have a "ground lift" switch as the last resort for solving
ground loop issues.

After I grounded the box by connecting a copper wire to one of
the screws on the back with one end and to the power strip
enclosure on the other, the noise situation has become much
better and indeed XLR and RCA started showing similar performance.
It seems that Cambridge Audio DAC is engineered better than
AV7704 since it performs great without requiring to be grounded.

As for the headphone output, I measured its output impedance and
found that it's quite high—**39 Ohm** which means it can only
damp well headphones with high input impedance—**300 Ohm** or
higher. Recall that I plan use the headphone output for surround
renderings, and my preference is to use IEMs in this case, as
they have less interaction with my ear pinnaes.  Since IEMs
typically have very low impedance, I ended up connecting the
headphone output of AV7704 to the line input of MOTU AVB which
constitutes a perfect load for this headphone output.

Yet another thing to consider is what is the optimal output level
from AV7704. This receiver in fact provides several options here:

1. Attenuated output: **0 dB** down to **-79.5 dB**.

2. Amplified output: **0 dB** up to **+18 dB** in case if
   the digital program level is too low.

3. Pure Direct output mode which bypasses processing circuitry
   and turns off all analog video circuits in an attempt to lower
   the noise.

The hardware test setup was essentially my playback setup. I
only added one extra connection: TOSLink output from MOTU into
AV7704 "CD" input. Here is how XLR, RCA (Zone 2), and the
headphone output are seen by MOTU AVB when the output level on
AV7704 is set to **-6 dBFS**.  I was using REW tone generator to
produce a sine tone of **1 kHz** at maximum dBFS:

[![](https://1.bp.blogspot.com/-VjO8KUaKhZc/Xu7i4Q-ILzI/AAAAAAAARGg/tNCIglWMIaAm0Jg2BShIvhR6MlLzxboXgCK4BGAsYHg/d/thdn-comparison.png)](https://1.bp.blogspot.com/-VjO8KUaKhZc/Xu7i4Q-ILzI/AAAAAAAARGg/tNCIglWMIaAm0Jg2BShIvhR6MlLzxboXgCK4BGAsYHg/s600/thdn-comparison.png)

As we can see, the headphone output (red) has the highest output
level and also the highest level of noise and harmonics. It's
interesting that only the headphone output has a small spike
around **60 Hz** which didn't went away after I grounded the
receiver.

The most linear output is XLR (green). It seems that **-6 dBFS**
is the sweet spot for it, as reducing attenuation to **0 dBFS**
significantly degrades its linearity and in "amplifying" modes
performance is unacceptable.

I was curious whether "Pure Direct" mode can deliver better
performance for Zone 1 outputs, however the results practically
didn't change at all. However, I don't use analog video inputs
and outputs (I'm curious who would these days), so perhaps there
is no interference from them in the first place. To me, the
"Pure Direct" mode looks like a heritage of the old days, and
I would prefer Marantz to remove the analog video I/O at all
rather than adding this mode.

In contrast, the Zone 2 RCA output (red) provides better S/N
ratio when amplified (at the cost of a slightly higher
distortion), but only up to a certain point. For it, **+9 dBFS**
is the frontier of linear behavior.

The summary of THD and noise for different outputs of AV7704
is in the table below. Note that I ran MOTU at **96 kHz** sampling
rate and didn't use a low-pass filter, thus the THD and noise
figures are across the whole range up to **48 kHz**.

| Output, mode     | 1 kHz RMS (Z) |   THD   | Noise   |   THD+N |
|:-----------------|--------------:|--------:|--------:|--------:|
| Z1 XLR, -6 dB    | -13.2 dBFS    | 0.0019% | 0.0021% | 0.0029% |
| Z1 HPH, -6 dB    | -9.2 dBFS     | 0.0018% | 0.0027% | 0.0033% |
| Z2 RCA, -6 dB    | -21.8 dBFS    | 0.0034% | 0.0063% | 0.0072% |
| Z1 XLR,  0 dB    | -7.2 dBFS     | 0.012%  | 0.0044% | 0.013%  |
| Z2 RCA, +9 dB    | -6.7 dBFS     | 0.0047% | 0.0036% | 0.0059% |

The official specs of AV7704
[specify](http://manuals.marantz.com/AV7704/EU/EN/GFNFSYbsjxinov.php)
distorion at **0.005%** over **20 Hz–20 kHz** range (not specifying
signal level), so it seems that my measurements are in the same
ballpark.

---

Yet another problem that can be encountered with DACs is lack of
headroom for intersample peaks. Even if there is no resampling
involved, DAC still can clip intersample peaks on aggressively
mastered tracks. As we can see below, putting non-peak values
of waveforms to maximum / minimum integer values can result in having
the peaks between samples to reach **+2.6 dBFS**:

[![](https://1.bp.blogspot.com/-VXesSQL05OQ/Xu7jG3IZq3I/AAAAAAAARGw/gEFYNyP74c4A0XhFOB-TSk1UITpkNY-uACK4BGAsYHg/d/intersample-peaks-dBFS.png)](https://1.bp.blogspot.com/-VXesSQL05OQ/Xu7jG3IZq3I/AAAAAAAARGw/gEFYNyP74c4A0XhFOB-TSk1UITpkNY-uACK4BGAsYHg/s590/intersample-peaks-dBFS.png)

Presence of this problem is checked by using the same files that
I used to detect intersample peaks clipping in digital domain.
I checked AV7704 and it doesn't have this problem, good!

## AV7704 Tone Controls

Tone controls are available for Zone 1 only and offer modification
of bass and treble in the range from **-6 dB** to **+6 dB**. I was
also interested in their operating frequency range and slope. Below
are the graphs of the transfer function for the tone controls:

[![](https://1.bp.blogspot.com/-PllyWTOJU4A/Xu7jOxu8jyI/AAAAAAAARHA/0WUaHBJhoO4_cF0JyY4R-AbQZsEn7wU6gCK4BGAsYHg/d/tone-controls.png)](https://1.bp.blogspot.com/-PllyWTOJU4A/Xu7jOxu8jyI/AAAAAAAARHA/0WUaHBJhoO4_cF0JyY4R-AbQZsEn7wU6gCK4BGAsYHg/s600/tone-controls.png)

The slopes of the tone controls are gentle, which is good. There
is some phase distortion which indicates that the tone controls
are implemented as recursive (IIR) filters, however due to gentle
nature of the phase changes the resulting group delay is zero.

I'm pretty sure the tone controls are implemented in a DSP as
they are very precise (unlike
[JDS Labs Subjective 3](/2018/02/jds-labs-subjective3-tone-control.md)),
and it seems strange to me that the control steps are **1 dB**.
I would like to have a better precision, at least by half of a dB.

## Conclusions

All in all, Marantz AV7704 offers good quality analog outputs.
Even the secondary zone offers good performance.  From my
experience, this receiver works reliably and predictably.  I
haven't encountered any serious glitches during a couple of
months I was using it. The built-in HEOS player is useful and
offers good quality playback.

Being a "consumer-oriented" (not a pro device), this receiver
has some useless extras, like the analog video I/O and "Pure
Direct" mode. These are seemingly relics from past models,
and Marantz, being a part of a big consortium isn't very good
at trimming extra functionality. I would gladly trade these
"features" for a digital audio output with digital volume
control which I could use for connecting LXminis.

Some annoyances that I have noticed with AV7704:

* turning connected TVs and monitors on and off interrupts
  audio playback; I guess, the AVR attempts to recognize the
  capabilities of the connected unit, however I'm not sure
  why the interruption happens even when the unit is being
  disconnected;
* interruption of audio also happens when changing audio
  modes and settings;
* HEOS app on Android can't play album tracks in the album
  sequence, and this is ridiculous as D+M is aware of this,
  and the fix is supposedly one line of code; at least, the
  version of HEOS app built into the receiver doesn't have
  this problem;
* HEOS app is limited to stereo tracks only;
* there is no indication of the current Zone 2 settings
  neither on the AVR panel nor as OSD on the Zone 2 TV, and
  this is very inconvenient; for example, to set up the
  output level of Zone 2, I had to go to the Settings menu
  of the unit.

Note that I haven't covered here capabilities of AV7704 in
decoding surround audio and downmixing it into **2** channels,
I hope to do that later. Also I haven't coverted the built
in room correction module (Audissey) partly because I do it
externally on miniDSP units, and it only applies to Zone 1
which I use for headphone playback only.
