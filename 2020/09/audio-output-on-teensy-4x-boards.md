# Audio Output on Teensy 4.x Boards

I remember learning about Teensy for the first time several years ago
from a colleague. He was using [Google
WALT](https://github.com/google/walt) device for measuring audio
latency, and WALT is based on
[Teensy-LC](https://www.pjrc.com/store/teensylc.html) board. Back
then, this board had impressed me with its tiny size, albeit providing
a lot of features. Its processing power is very modest
though—Teensy-LC is based ARM Cortex-M0+ processor running at
**48 MHz**.

Recently I've started a project of a talking ABC board for my daughter
and decided to check what progress had Teensy made.  I was very
impressed learning that the latest (4th) version of Teensy emplys a
much beefier ARM Cortex-M7 processor running at **600 MHz**!  This
board is more powerful than the desktop computer I was using **25**
years ago, and that's at a fraction of the cost of that PC, and on the
footprint of a USB memory stick.

Note that Teensy is a microcontroller board which means it doesn't
have an operating system. This is what makes Teensy different from
Raspberry Pi, for example. This fact has a lot of advantages: first,
Teensy boots instantly, second, all the processing power of its CPU is
available to your own app. This also means that the board can't be
used for general PC tasks like checking Facebook. However, Teensy can
be used for more exciting things like building your own interactive
toy.

In my case I needed Teensy to play an audio clip (pronounciation of a
letter) in response to pressing of a button. Sounds easy, right?
However, one thing I needed to do is to figure out how to play audio
on Teensy. What I've learned is that Teensy 4.x offers a lot of ways
to do that. In this post I'm comparing various ways of making sound
on Teensy.

## Teensy 4.0 vs 4.1

Every Teensy generation comes in two flavors: small and slightly
bigger.  Below is the photo of Teensy 4.1 (top) and 4.0 (bottom):

[![](https://1.bp.blogspot.com/-Pj1sWO16MH8/X4z6mJY-1NI/AAAAAAAAR5U/P7TbLIM9CzIM-apTzBpHGExcZTo1D0edwCLcBGAsYHQ/s16000/teensies.jpg)](https://1.bp.blogspot.com/-Pj1sWO16MH8/X4z6mJY-1NI/AAAAAAAAR5U/P7TbLIM9CzIM-apTzBpHGExcZTo1D0edwCLcBGAsYHQ/s700/teensies.jpg)

Both boards use the same processor which means their basic
capabilities are the same. However, bigger size means more I/O pins
available.  Also, it's possible to add more memory to Teensy 4.1 by
soldering additional chips on its back side. For my project, the
important difference is that Teensy 4.1 has an SD card slot, whereas
4.0 only provides pins for it. I plan to use the SD card for storing
sound samples–the board's flash memory is unfortunately too small for
them. Storing samples on an SD card also simplifies their
deployment as I can simply write them down from a PC.

The audio capabilities of 4.0 and 4.1 are thus the same, so I will
be referring to the board simply as "Teensy 4" or "4.x".

## Teensy Audio Library

From the programming side Teensy is compatible with the Arduino family
of microcontrollers. The same Arduino IDE is used for compiling the
code, and the same I/O and processing libraries can be employed.

Teensy also has a dedicated [Audio
library](https://www.pjrc.com/teensy/td_libs_Audio.html) which in my
opinion is very interesting. The library has a companion [System
Design Tool](https://www.pjrc.com/teensy/gui/index.html) which allows
to design an audio processing chain really quick by drag'n'drop, and
then export it to the Arduino project.

[![](https://1.bp.blogspot.com/-VeDSHUWH2ME/X4z5pX6ShsI/AAAAAAAAR5I/tG8JNwUZDkggEbQyIRDjuScI0UKIJqPgQCLcBGAsYHQ/s16000/audio-design-tool.png)](https://1.bp.blogspot.com/-VeDSHUWH2ME/X4z5pX6ShsI/AAAAAAAAR5I/tG8JNwUZDkggEbQyIRDjuScI0UKIJqPgQCLcBGAsYHQ/s661/audio-design-tool.png)

Being a visual tool, Audio System Designer allows to explore the
capabilities of the library without a need to go through a lot of
documentation to get started. The documentation is built into
tool. The only drawback of the docs is that they are too short.
Although, this is partially compensated by numerous example programs.

The described audio capabilities are all based on the objects provided
by Teensy Audio Library.

## Output Power Requirements

My plan is to use an **8 Ohm** **0.5 W** [speaker from
Sparkfun](https://www.sparkfun.com/products/9151) for audio output in
my project. Thus, I'm comparing output from audio amplifiers using an
**8 Ohm** resistive load and ensuring **2 VRMS** output voltage
(approx. **6 dBV**). The goal is to achieve as "clean" output as
possible.

## Built-in Analog Output (MQS)

The chip that Teensy 4 is based on offers analog output solution which
is called MQS for "Medium Quality Sound". Not to be confused with
[Mastering Quality Sound](http://www.realhd-audio.com/?p=749) which
has the same abbreviation. MQS on Teensy 4 is a proprietary technology
of the chip maker (NXP). MQS allows connecting a small speaker or
headphones to the chip pins directly, without any external output
network.

Note the revision 3 of Teensy board has a built-in **12-bit** DAC. MQS
implements a **16-bit** DAC with small Class-D amplifier. However, not
very good ones. To me, "medium" in MQS is a stretch, coined by the
marketing department, and perhaps it would be more fair to call it
"LQS" for "Low Quality Sound".

Let's first take a look at a simple **1 kHz** sine wave in time domain:

[![](https://1.bp.blogspot.com/-F8fOqwRrD0o/X4FAjPQRPlI/AAAAAAAARyo/hblsmIm11jIwu7YIzFMkfnSv1_MMxhctACLcBGAsYHQ/s16000/mqs-1kHz-sine.png)](https://1.bp.blogspot.com/-F8fOqwRrD0o/X4FAjPQRPlI/AAAAAAAARyo/hblsmIm11jIwu7YIzFMkfnSv1_MMxhctACLcBGAsYHQ/s720/mqs-1kHz-sine.png)

It definitely looks very jaggy to me. Another problem detected by
using a DVM is a high DC bias offset: **1.64 VDC**.  It doesn't show
up on the graph because the audio analyzer is AC-coupled. This amount
of DC offset can pose a problem to line inputs and even to some
speakers.

Another drawback of MQS is that the chip doesn't provide muting for
the power-on thump. This can be worked around by adding a relay, after
all it's trivial to control it using a PWM output pin, however if you
have to use external parts, I would recommend using an external DAC
instead.

Below are a couple more measurement graph revealing shocking
simplicity of this output. First, as we can see on the frequency
domain graph, there is no antialiasing filter, so we can see the
mirror image of the original **1 kHz** frequency and its first
harmonic between **42–44 kHz** followed by a direct copy. That means,
the DAC/amp on the chip likely uses **44.1 kHz** sampling rate.

[![](https://1.bp.blogspot.com/-UYGipMH7u_c/X4FBYRls7HI/AAAAAAAARyw/CQKwdK_WBdwVULexxYJ4gqTDF9YTCppjwCLcBGAsYHQ/s16000/mqs-1kHz-THDN-linearX.png)](https://1.bp.blogspot.com/-UYGipMH7u_c/X4FBYRls7HI/AAAAAAAARyw/CQKwdK_WBdwVULexxYJ4gqTDF9YTCppjwCLcBGAsYHQ/s720/mqs-1kHz-THDN-linearX.png)

Frequency response in the audible range is rather flat:

[![](https://1.bp.blogspot.com/-h4wAkgDM2DA/X4FBsyjCuAI/AAAAAAAARy8/76Nbq_dFvEYVJUtAnVa6tDO32w-G_lQDwCLcBGAsYHQ/s16000/mqs-white-noise-logX.png)](https://1.bp.blogspot.com/-h4wAkgDM2DA/X4FBsyjCuAI/AAAAAAAARy8/76Nbq_dFvEYVJUtAnVa6tDO32w-G_lQDwCLcBGAsYHQ/s720/mqs-white-noise-logX.png)

When I tried to achieve the required **0.5 W** into **8 Ohm** I could
only squeeze out **1/100** of that (note that the graph is
A-weighted):

[![](https://1.bp.blogspot.com/-5WvN58DmHlU/X4fRsvwknVI/AAAAAAAAR3E/khmOyq6JdZYZ6-CvsMXn1ri7ZVnuJTJHACLcBGAsYHQ/s16000/mqs-0_005W-1kHz-THDN-logX.png)](https://1.bp.blogspot.com/-5WvN58DmHlU/X4fRsvwknVI/AAAAAAAAR3E/khmOyq6JdZYZ6-CvsMXn1ri7ZVnuJTJHACLcBGAsYHQ/s720/mqs-0_005W-1kHz-THDN-logX.png)

In my opinion, due to absence of any filtering, turn on click
protection, high DC bias, and low power, MQS output should only be
used during development and testing—it's indeed convenient that a
speaker can be attached directly to the board for a quick sound check.

## External Output Devices via I<sup>2</sup>S

Since built-in analog output has serious limitations, I've started
looking for external boards. Thankfully, Teensy supports
[I<sup>2</sup>S](https://en.wikipedia.org/wiki/I%C2%B2S) input and
output. Teensy actually supports plenty of those interfaces, offering
great possibilities for multi-channel audio I/O.

For my project mono output is enough. I tried a couple of inexpensive
external boards to check how much the audio output improves compared
to the built-in output.

### MAX98357A DAC/Amp

I bought [a breakout board](https://www.sparkfun.com/products/14809)
from Sparkfun to try this IC. The
[datasheet](https://cdn.sparkfun.com/assets/3/5/4/d/5/MAX98357A-MAX98357B.pdf)
calls the chip "PCM Class D Amplifier with Class AB Performance." Note
that it's a mono amplifier which either sums its stereo input, or just
uses only one of the two input channels.

[<img src="https://1.bp.blogspot.com/-EaTWxKjcmBY/X4z7bPy8yTI/AAAAAAAAR5c/iAQvtioLblQQkof3LsKbbrID_LO9ya2HACLcBGAsYHQ/w320-h252/max-breakout.jpg" width="320" height="252" />](https://1.bp.blogspot.com/-EaTWxKjcmBY/X4z7bPy8yTI/AAAAAAAAR5c/iAQvtioLblQQkof3LsKbbrID_LO9ya2HACLcBGAsYHQ/s500/max-breakout.jpg)

Hooking it up to Teensy is extremely easy. One needs to connect the
clocks: `LRCLK` and `BCLK` to the corresponding pins on Teensy, then
connect I<sup>2</sup>S data (`OUT1x`, I used `OUT1A`), and of course
power, which can be also sourced from Teensy. Then just use `i2s` or
`i2s2` output block in the Audio Designer. There is no volume control
on this breakout board, only the amplifier gain can be changed.

MAX98357A IC can accept a variety of sampling rates and bit depts,
however Teensy normally produces **44.1/16** audio signal. Looking at
the white noise output we can see that the MAX IC employs a proper
brickwall audio band filter at the DAC side:

[![](https://1.bp.blogspot.com/-daepkdmJvw0/X4FCNHQRlQI/AAAAAAAARzU/Jt5lkLBSesEG01w2gNINIuSqjJEILdK_ACLcBGAsYHQ/s16000/max-white-noise-linX.png)](https://1.bp.blogspot.com/-daepkdmJvw0/X4FCNHQRlQI/AAAAAAAARzU/Jt5lkLBSesEG01w2gNINIuSqjJEILdK_ACLcBGAsYHQ/s720/max-white-noise-linX.png)

The frequency response in the audible range is rather flat:

[![](https://1.bp.blogspot.com/-eStsryigLmI/X4FCUBmwkNI/AAAAAAAARzc/ZUaZvihMO5EaZzjtjRtJmqgMJ_T-ZwdbQCLcBGAsYHQ/s16000/max-white-noise-logX.png)](https://1.bp.blogspot.com/-eStsryigLmI/X4FCUBmwkNI/AAAAAAAARzc/ZUaZvihMO5EaZzjtjRtJmqgMJ_T-ZwdbQCLcBGAsYHQ/s720/max-white-noise-logX.png)

Another good feature of the IC compared to MQS is proper output muting
on power on to prevent pops. The speaker output has almost no DC
offset.

As for the jitter, the IC seems to employ clever synchronization
tricks. Initially after powering on the jitter is gross and the
noise floors is very high:

[![](https://1.bp.blogspot.com/-KKFLTOwnDfw/X4FClFzgneI/AAAAAAAARzs/H-pixihFKfsY05VeWNAmsPXI2zU36uGpwCLcBGAsYHQ/s16000/max-jitter-initial.png)](https://1.bp.blogspot.com/-KKFLTOwnDfw/X4FClFzgneI/AAAAAAAARzs/H-pixihFKfsY05VeWNAmsPXI2zU36uGpwCLcBGAsYHQ/s720/max-jitter-initial.png)

However, after **5–15 sec** the IC seems to stabilize its input
and drastically improve its output quality:

[![](https://1.bp.blogspot.com/-hgHfspMXjvI/X4FCr4XTaeI/AAAAAAAARz0/sbmndck4aDYTJkNnqy3d1VVUiGPOuB7zACLcBGAsYHQ/s16000/max-jitter-after-10s.png)](https://1.bp.blogspot.com/-hgHfspMXjvI/X4FCr4XTaeI/AAAAAAAARz0/sbmndck4aDYTJkNnqy3d1VVUiGPOuB7zACLcBGAsYHQ/s720/max-jitter-after-10s.png)

The MAX98357A was able to deliver the required **0.5 W** albeit with a
**10%** distortion (this graph was obtained with the amplifier
configured for **12 dB** gain):

[![](https://1.bp.blogspot.com/-OpfZ0Z21szw/X4fS97QQxpI/AAAAAAAAR3Q/FG7nyZi-tII4c4An3KC6J9UKxK8aPD6DQCLcBGAsYHQ/s16000/max-0_5W-1kHz-THDN-logX.png)](https://1.bp.blogspot.com/-OpfZ0Z21szw/X4fS97QQxpI/AAAAAAAAR3Q/FG7nyZi-tII4c4An3KC6J9UKxK8aPD6DQCLcBGAsYHQ/s720/max-0_5W-1kHz-THDN-logX.png)

It's interesting that the **5th** harmonic is dominating.

Considering the price of the chip, I would say that MAX98357A IC is a
good choice if only mono output is needed and has a lot of advantages
over the MQS output.

### Audio Adapter Board

Since the times of Teensy 3 its creators were offering an ["audio
shield" board](https://www.pjrc.com/store/teensy3_audio.html) which
is designed to cover the smaller version of Teensy completely.
Due to some changes in pin assignments on Teensy 4 the design
of the Audio Adapter Board was updated.

[<img src="https://1.bp.blogspot.com/-aekR2hhhvto/X4z8XKdM8DI/AAAAAAAAR5k/gzTIHRnhXtgOYVIXuR_EwlRp1MrCjatBACLcBGAsYHQ/w400-h328/audio-shield.jpg" width="400" height="328" />](https://1.bp.blogspot.com/-aekR2hhhvto/X4z8XKdM8DI/AAAAAAAAR5k/gzTIHRnhXtgOYVIXuR_EwlRp1MrCjatBACLcBGAsYHQ/s500/audio-shield.jpg)

The audio part of the Adapter board is based on the [SGTL5000
chip](https://www.pjrc.com/teensy/SGTL5000.pdf) which in addition to
ADC/DAC and amplifiers also offers some basic DSP functionality.

The Adapter board has line input and output, mic input, and headphone
output. It uses I<sup>2</sup>S interface for communicating with
Teensy. The board also offers an SD card slot and a controller for
it. Note that although Teensy 4 has an on-chip SD card controller,
there is no SD card slot on the 4.0 board. Adding it requires
soldering a cable to the corresponding pins on the back side of the
board, because the pin spacing and overall space is a bit tight for
soldering an SD card socket directly. Thus, for a Teensy-based audio
project it might be beneficial to attach the audio shield as it
provides both analog audio I/O and an SD card.

One thing many users of this board noted is that is must be connected
to Teensy using very short wires. The reason is due to use of an
additional (compared to MAX98357A) high-frequency master clock input
(`MCLK`) which runs at the frequency of several **MHz**.

The resulting jitter of the DAC is quite low, staying below **94 dB**
the carrier signal:

[![](https://1.bp.blogspot.com/-syCB-Ry58ms/X4FDGN4rvkI/AAAAAAAAR0A/vEZmuztpefcUUE1Q46pwR0KMmntwHEzdgCLcBGAsYHQ/s16000/shield-line-jitter.png)](https://1.bp.blogspot.com/-syCB-Ry58ms/X4FDGN4rvkI/AAAAAAAAR0A/vEZmuztpefcUUE1Q46pwR0KMmntwHEzdgCLcBGAsYHQ/s720/shield-line-jitter.png)

Surely, the SGTL5000 chip is advanced enough to have protection
against the power-on thump. The level of distortions is tolerable
(since it's a line output, I had connected it directly to the
analyzer's input):

[![](https://1.bp.blogspot.com/-NHo4xR9714w/X4FDNUagaEI/AAAAAAAAR0E/CgXfco_CRY43g0JpRcY3q5h2oBM-auKlwCLcBGAsYHQ/s16000/shield-line-1kHz-THDN-logX.png)](https://1.bp.blogspot.com/-NHo4xR9714w/X4FDNUagaEI/AAAAAAAAR0E/CgXfco_CRY43g0JpRcY3q5h2oBM-auKlwCLcBGAsYHQ/s720/shield-line-1kHz-THDN-logX.png)

Note a noise peak at **60 Hz**. I'm pretty sure it's the result of
insufficient shielding on this board because the measurement was taken
using differential input of the analyzer. This normally cancels out
any EMF noise induced on the probe wires.

The headphone output of the adapter board isn't powerful enough
to drive the load required for my project. So in addition to the
adapter board an external power amplifier has to be used.

## External Analog Amplifiers

I've tested two boards from Sparkfun: a mono Class-D amp, and a
classic Class-AB amplifier named "Noisy Cricket". These amplifiers
can be connected to the line output of the audio adapter board.

### Mono Class-D Amp (TPA2005D1)

This is a low power IC amplifier for which Sparkfun [has a breakout
board](https://www.sparkfun.com/products/11044). This is a rather old
chip TPA2005D1 from Texas Instruments which advertises a **10%** THD
on its [specs
sheet](http://cdn.sparkfun.com/datasheets/BreakoutBoards/tpa2005d1.pdf).

[<img src="https://1.bp.blogspot.com/-1mfNJLQALaA/X4z9DnEaTXI/AAAAAAAAR5s/HXRmxq_Ow9E4K3VorxdGl4udfci4oScrQCLcBGAsYHQ/s320/amp-breakout.jpg" height="320" />](https://1.bp.blogspot.com/-1mfNJLQALaA/X4z9DnEaTXI/AAAAAAAAR5s/HXRmxq_Ow9E4K3VorxdGl4udfci4oScrQCLcBGAsYHQ/s497/amp-breakout.jpg)

And indeed it does have a **10%** THD+N when driven up to the required
output power (the graph is A-weighted):

[![](https://1.bp.blogspot.com/-6ByMTIRUuEo/X4fUpH19CKI/AAAAAAAAR3g/FaxxHVA86DoBIeV-SESEsKjMTeRcK9HjACLcBGAsYHQ/s16000/amp-0_5W-1kHz-QA-3_342V-THDN-logX.png)](https://1.bp.blogspot.com/-6ByMTIRUuEo/X4fUpH19CKI/AAAAAAAAR3g/FaxxHVA86DoBIeV-SESEsKjMTeRcK9HjACLcBGAsYHQ/s720/amp-0_5W-1kHz-QA-3_342V-THDN-logX.png)

Note that I tested this chip on its own, providing an input from the
audio analyzer, and powering it using a bench power supply.  Despite
being tested under these "laboratory" conditions, the chip didn't show
a stellar performance. I also tried supplying a differential input
from the analyzer, and raising the input voltage up to the accepted
maximum of **5.5 VDC** but it didn't improve its performance.

It's interesting though, that being an unfiltered Class-D amplifier
with **250 kHz** switching frequency, this chip offers bandwidth which
is enough to serve the full range of the QA401 DAC at **192 kHz**
sampling rate:

[![](https://1.bp.blogspot.com/-lPJn1RNCOBc/X4FDs6XHPeI/AAAAAAAAR0Y/xd2vZNpudFwjWZNXW4-DXRE3hzne6VxcQCLcBGAsYHQ/s16000/amp-white-noise-QA-3_478V-linX.png)](https://1.bp.blogspot.com/-lPJn1RNCOBc/X4FDs6XHPeI/AAAAAAAAR0Y/xd2vZNpudFwjWZNXW4-DXRE3hzne6VxcQCLcBGAsYHQ/s720/amp-white-noise-QA-3_478V-linX.png)

So it seems that there shouldn't be a big difference in terms of audio
quality when using the MAX98357A chip via I<sup>2</sup>S directly, or
TPA2005D1 via the line output of the audio shield.

### Noisy Cricket (LM4853)

This is another IC amplifier from TI on a good quality [breakout
board by Sparkfun](https://www.sparkfun.com/products/14475),
which even includes a volume control. The IC is LM4853 amplifier
chip (not just an op-amp). It can work either as a stereo
amplifier, or as a mono amplifier in bridged mode.

[<img src="https://1.bp.blogspot.com/-17F1NvHkTB0/X4z97su0ZJI/AAAAAAAAR54/f2xvaeuWev42vqyZgsZT4J0Bn2ORxfxCgCLcBGAsYHQ/w400-h209/cricket-board.jpg" width="400" height="209" />](https://1.bp.blogspot.com/-17F1NvHkTB0/X4z97su0ZJI/AAAAAAAAR54/f2xvaeuWev42vqyZgsZT4J0Bn2ORxfxCgCLcBGAsYHQ/s700/cricket-board.jpg)

The [specs sheet of
LM4853](https://cdn.sparkfun.com/assets/0/f/e/b/b/lm4853.pdf) shows
much better distortion figures than for TPA2005D1.  I had configured
the board in mono mode and tested it in the same setup as TPA2005D1:
powered from a bench power supply (at **3.4 VDC**) and driven by QA401
signal generator.  The results were much better:

[![](https://1.bp.blogspot.com/-OFMs37cTcNk/X4z4ZNJ1bvI/AAAAAAAAR44/lhC80ynRWFYCQSfAgzUttbAweqwi9r9lQCLcBGAsYHQ/s16000/cricket-0_5W-1kHz-QA-3_342V-THDN-logX.png)](https://1.bp.blogspot.com/-OFMs37cTcNk/X4z4ZNJ1bvI/AAAAAAAAR44/lhC80ynRWFYCQSfAgzUttbAweqwi9r9lQCLcBGAsYHQ/s720/cricket-0_5W-1kHz-QA-3_342V-THDN-logX.png)

The 3rd harmonic is **50 dB** below the carrier level. For my toy
project this is good enough.

Looking at the frequency response, we see some roll-off in the bass
range, but I'm pretty sure that the speaker I'm going to use can't
go that low anyway, so it's not a big deal:

[![](https://1.bp.blogspot.com/-wcUuKKKh9lc/X4z4ZFgIloI/AAAAAAAAR40/dDj3KalqWhUpJRgciFH9rTXL-B1aG72nACLcBGAsYHQ/s16000/cricket-white-noise-QA-3_478V-logX.png)](https://1.bp.blogspot.com/-wcUuKKKh9lc/X4z4ZFgIloI/AAAAAAAAR40/dDj3KalqWhUpJRgciFH9rTXL-B1aG72nACLcBGAsYHQ/s720/cricket-white-noise-QA-3_478V-logX.png)

So, Noisy Cricket is a good choice for me. Hopefully I will be able
to achieve close to natural voice reproduction on my talking ABC.

## Conclusions

Despite that boards based on Class-D chips are more compact and likely
consume less power, when using a speaker of a classic cone
construction it seems better to use a classic Class-AB DAC/Amp
combination built from the Audio Adapter board and Noisy Cricket.

I'm putting a big rechargeable battery into this talking ABC, so
higher power consumption isn't a problem for me. Additional
convenience of using the audio shield comes from the fact that it has
mounting holes and an SD card for storing audio samples.

If a more sensitive speaker could be used which requires less driving
power, then an alternative solution is to use Teensy 4.1 which
already has the SD card slot on board, and connect the MAX98357A
DAC/Amp chip to Teensy's I<sup>2</sup>S output.

---

## Bonus: Built-in Digital Output—S/PDIF

I have moved this section to the end because this output finds no
application in my project. However, it's a new feature of Teensy 4
which also might be useful sometimes.

On the previous generations of the board, thanks to the efforts of the
Audio Library contributors, it was possible to emit signal in the
S/PDIF and ADAT formats programmatically. The nicety of the hardware
support added in Teensy 4 is that it consumes less power and allows
yielding the CPU to more interesting tasks.

The hardware S/PDIF output is as simple to use as MQS—it only requires
connecting an RCA output to the board pins. This output only supports
Audio CD output format: **44.1 kHz**, **16-bit**. I must note that
although the built-in S/PDIF worked for me on the Teensy 4.0, on its
bigger version 4.1 the S/PDIF sampling rate for some reason was
setting itself to **48 kHz** which made it unusable since Teensy Audio
Library doesn't seem to support it. Thus, I could only test the
built-in S/PDIF on Teensy 4.0.

Apparently, with a digital input there are no concerns about filtering
or non-linearity in analog domain. One thing I was curious to check
was the amount of jitter. I hooked up Teensy 4 to the S/PDIF input of
RME Fireface UCX interface and then used the same J-Test 44/16 test
signal generated using REW 5.20. RME was set to use the S/PDIF
clock. I played the same J-Test signal on Teensy and via USB ASIO to
be able to compare them.  Here is what I've got—the blue graph is from
USB, the red one is from Teensy:

[![](https://1.bp.blogspot.com/-FQmxSb_gTQA/X4FCBDSlhlI/AAAAAAAARzM/HMy1VU2onWcA_bf1CgjBcyvB4keB092iQCLcBGAsYHQ/s16000/spdif-jitter-via-rme-vs-asio-pcm.png)](https://1.bp.blogspot.com/-FQmxSb_gTQA/X4FCBDSlhlI/AAAAAAAARzM/HMy1VU2onWcA_bf1CgjBcyvB4keB092iQCLcBGAsYHQ/s720/spdif-jitter-via-rme-vs-asio-pcm.png)

As we can see, the output of Teensy has much more stronger
jitter-induced components around the carrier frequency, whereas there
are practically none for RME's own output.

Note that the peaks on the left side (up to **6.5 kHz**) is some
artefact of using **16-bit** test signal on a **24-bit** device
(RME). I tried another DAC (Cambridge Audio DacMagic Plus), another
computer, switched from PC to Mac, tried **16-bit** J-Test sample from
HydrogenAudio forum, but these spikes on the left were always there as
long as I was using **16-bit** J-Test signal, and they were completely
gone on **24-bit** test signal. I suspect there must be something in
the process of expansion of a **16-bit** signal to **24-bit** that
makes them appear.
