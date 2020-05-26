# MiniDSP HA-DSP First Impressions

Being an audio geek I couldn't ignore this promising gadget from MiniDSP.
To me, MiniDSP products were always associated with loudspeaker and room
digital correction, but unexpectedly they have tried their design skills
in a relatively niche area of portable DACs and headphone amplifiers.
And thanks to their vast DSP experience, the resulting product has come
out very interesting and highly unique.

[<img src="https://3.bp.blogspot.com/-e3lsJKWZLxg/WZ-dfmURPnI/AAAAAAAAL1w/8qclOADGFjwkiopFA_8VahCu1NIjQxT9gCLcBGAs/s640/ha-dsp.jpg" width="640" height="235" />](https://3.bp.blogspot.com/-e3lsJKWZLxg/WZ-dfmURPnI/AAAAAAAAL1w/8qclOADGFjwkiopFA_8VahCu1NIjQxT9gCLcBGAs/s1600/ha-dsp.jpg)

There is a [very good
description](https://www.minidsp.com/images/documents/Product%20Brief%20-%20HA-DSP.pdf)
of HA-DSP from the manufacturer. I will give my own version of it,
coming from the possible range of functions that this device can
perform:

1.  HA-DSP can be used as a regular portable headphone amplifier taking
    analog input. Unfortunately, HA-DSP can't also be used as a power
    bank despite presence of a deceptively looking USB-A port on it.
2.  Since HA-DSP has USB inputs and is USB Audio Class compliant, it can
    also be used as a portable DAC for mobile devices and computers.
    However, I've encountered issues when I tried using it with some
    Android devices leading to mobile device reboots.
3.  The **3.5 mm** analog input port of HA-DSP also accepts mini-TOSLink
    jack, allowing to connect HA-DSP to audio gear that has optical
    output. Note that both analog and optical input has a cutoff
    frequency at **22050 Hz**, even if the output device provides a full
    range signal.

However, you can find numerous other portable DACs that can fulfill all
these scenarios and don't have the drawbacks I've mentioned. What makes
HA-DSP unique is the "DSP" part in it's name. If you know how to create
FIR and IIR filters, this little box offers a lot of room for audio
experiments, for example:

Make precise output frequency response adjustments using **10** bi-quad
IIR filters per channel.

Create arbitrary crossfeed effects with two parallel blocks of FIR
filters and cross-commutation.

Apply headphone target curve correction with FIR filters.

Switch between **4** configurations of the filters that can be tied to
different headphone models and crossfeed settings.

My own plan for this box is to replicate Phonitor Mini crossfeed filter,
and also to experiment with headphone correction based on the headphone
measurements from [Inner Fidelity
database](https://www.innerfidelity.com/headphone-measurements) and
[Isone MorphIt](http://www.toneboosters.com/tb-morphit/) filter.

I've already mentioned some drawbacks of HA-DSP. Another issue I
discovered while making measurements is some non-linearity of the
frequency response. My measurements of HA-DSP using [MOTU Microbook
IIc](http://motu.com/products/motuaudio/microbook) have shown early
roll-off in high frequency range. Below is a frequency response of
HA-DSP (blue) compared to Microbook's own (orange):

[<img src="https://4.bp.blogspot.com/-iBO88mzpTZk/WZ-anv1VI4I/AAAAAAAAL1Q/NlJZakp4GxMqDlbX7Oo6-E-uF3_eNuJmQCLcBGAs/s640/FR.png" width="640" height="265" />](https://4.bp.blogspot.com/-iBO88mzpTZk/WZ-anv1VI4I/AAAAAAAAL1Q/NlJZakp4GxMqDlbX7Oo6-E-uF3_eNuJmQCLcBGAs/s1600/FR.png)

On this graph, the HA-DSP's response plot uses Microbook calibration
from a loopback measurement. The good part, however, is that this
roll-off can be corrected using the on-board DSP as part of FIR filters
design.

## Conclusions

HA-DSP is definitely a device targeted to audio geeks. One would
probably need to carefully consider whether they would be able to use it
to full extent. If designing filters isn't your hobby, there are
definitely better alternatives in terms of cost and quality.
