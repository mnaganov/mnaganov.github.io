# Challenges While Performing Crossfeed Measurements

Since I've started working on the [SPL Phonitor
Mini](https://spl.info/en/products/headphone-amplifier/phonitor-mini/overview.html)
crossfeed filter replication, I've learned so many things that I will
need several posts in order to describe them all. Let's start with the
analog part.

## Channel Imbalance

As I've mentioned in the previous post, I have a goal of replicating
Phonitor Mini crossfeed settings using DSP in
[HA-DSP](https://www.minidsp.com/products/dsp-headphone-amp/ha-dsp). The
first task I was faced with was performing accurate measurements of
Phonitor's filters. They are quite delicate—the amplitude of the filters
doesn't exceed **3 dB**, and the attenuation of direct vs. opposite
channels need to be replicated. Not surprising, this task required a
lot of attention to the details. Especially when using budget hardware
(I use [MOTU MicroBook
IIc](http://motu.com/products/motuaudio/microbook) as my capturing tool)
which has limits on the precision it can provide.

In addition to being delicate, crossfeed filters involve signal summing
due to partially mixing signals from the left and right input channels.
This can be a problem when using inexpensive sound card for measurement,
thanks to slight channel imbalance. As an example, below are the
measurements of all the combinations of *"Main"* output and *"Line"*
input channels on MicroBook:

[<img src="https://4.bp.blogspot.com/-e9zKNvNDB1U/WbdRS6M5W8I/AAAAAAAAL2o/iypewqEKfNsn4ojfnC2zx3c53bsp-65lgCLcBGAs/s640/Main-to-Line-Measurements.png" width="640" height="494" />](https://4.bp.blogspot.com/-e9zKNvNDB1U/WbdRS6M5W8I/AAAAAAAAL2o/iypewqEKfNsn4ojfnC2zx3c53bsp-65lgCLcBGAs/s1600/Main-to-Line-Measurements.png)

It's easy to see that no pair matches exactly in the recorded signal
level. What that means to our crossfeed measurements, is that even if we
ignore own channel imbalance of Phonitor Mini (which is also present in
reality), the records of the sum of left and right channels (from
crossfeed) captured by left and right inputs of MOTU will have different
levels.

Unfortunately, the input and output attenuation controls on MicroBook,
despite being digital, do not provide required resolution in order to
compensate these offsets. This also means that one needs to be careful
with performing calibration of the soundcard—there need to be separate
calibration profiles per input / output channel combination.

I wasn't particularly happy with the discovered lack of balance, so I
decided to try other inputs and outputs, as MicroBook has several of
them. This time I used unbalanced line output, and *"Guitar"* input.
Since it's a mono input I used a Y-cable **3.5 mm** TRS into two **1/4"** TS,
connecting each one of them in turn. This time the channels balance was
much better, just **0.003 dB** offset:

[<img src="https://3.bp.blogspot.com/-4KJtADmgtNs/WbdSSXcr3kI/AAAAAAAAL2w/tohEdWTQaV4Ami2Sz1K5CDtyd8R6uPEBACLcBGAs/s640/Line-to-Guitar-Measurements.png" width="640" height="444" />](https://3.bp.blogspot.com/-4KJtADmgtNs/WbdSSXcr3kI/AAAAAAAAL2w/tohEdWTQaV4Ami2Sz1K5CDtyd8R6uPEBACLcBGAs/s1600/Line-to-Guitar-Measurements.png)

It may appear as if the second graph has a much steeper rolloff on ends,
but this is only because this time I've magnified more along the
vertical scale. When placed next to each other, the graphs do not show
such a dramatic difference:

[<img src="https://1.bp.blogspot.com/--w9u7SWqUpA/WbdT6Mi1shI/AAAAAAAAL28/VF5greTcevYqwAR_nmXvWpOWt7btUN7vACLcBGAs/s640/Line-vs-Guitar.png" width="640" height="444" />](https://1.bp.blogspot.com/--w9u7SWqUpA/WbdT6Mi1shI/AAAAAAAAL28/VF5greTcevYqwAR_nmXvWpOWt7btUN7vACLcBGAs/s1600/Line-vs-Guitar.png)

Using the "Line to Guitar" configuration, I connected MOTU's unbalanced
line out to Phonitor's unbalanced input, and one channel of Phonitor's
headphone output again via a Y-cable to the guitar input. This is how
"flat" Phonitor (no crossfeed applied) measures in this setup:

[<img src="https://4.bp.blogspot.com/-HVHHVu2eYPk/WbdVGTocG1I/AAAAAAAAL3I/-xM9XoGyelM485AllyhgFniwiJZJCfiPQCLcBGAs/s640/Phonitor-Flat.png" width="640" height="444" />](https://4.bp.blogspot.com/-HVHHVu2eYPk/WbdVGTocG1I/AAAAAAAAL3I/-xM9XoGyelM485AllyhgFniwiJZJCfiPQCLcBGAs/s1600/Phonitor-Flat.png)

Note that the channel offset is now about **0.015 dB** instead of
**0.003 dB** of the loopback connection, due to slight imbalance
introduced by Phonitor.

On headphone amplifiers  the channel balance usually skews as volume
level changes (unless it's a super expensive super precise amplifier,
apparently the Mini isn't one). It's anyway unknown how the crossfeed
circuit affects channel balance, so I decided not to try to find a
volume knob position providing a smaller offset, having that this volume
position gives me the highest signal level without the need to engage
the amplifier on the guitar input, which would contribute to
non-linearity and noise.

It's worth mentioning that Phonitor didn't change the shape of the
curve. Plotted on the same graph, its response covers the loopback
response exactly. That's great—this is what you expect from a
"transparent" audio equipment.

## Noise

Another problem I faced was noise. Since for measurements I have to
connect several pieces of electrical equipment together, this creates a
possibility for ground loops to appear. There is a great article by Bill
Whitlock on the origins of ground loops, available for free download
[here](http://www.jensen-transformers.com/wp-content/uploads/2014/08/an004.pdf)
(need to apply for a free registration first).

For example, when measuring Phonitor (which is a stationary amplifier),
I had to disconnect the laptop running measurement software from AC
power, since otherwise a ground loop was created via two connections to
mains power.

More challenging was avoiding ground loops when measuring HA-DSP. It
runs on battery power, but unlike Phonitor contains its own DAC, which
means I had to connect it to USB port of the same laptop. This creates a
ground loop via two USB connections (from MOTU and HA-DSP). In fact, the
noise level introduced by this loop was about **30 dB(Z)**, I had to get
rid of it. I've considered several ways to do that:

1.  Instead of USB, use optical input on HA-DSP. But the issue with this
    approach is that MicroBook doesn't provide an optical output, only
    coaxial, so I had to add another piece of equipment in order to do
    conversion. Also, my preliminary experiments using the optical
    output of Mac Mini have shown that HA-DSP has an additional
    brickwall filter at about **24 kHz** on this signal path (even if
    the TOSLINK connection is operated at **96 kHz**).
2.  Instead of USB or optical input, use the analog output on MOTU
    connected to analog input on HA-DSP. Since MOTU provides a good
    separation of audio and USB grounds, this connection doesn't
    introduce a ground loop. But the obvious drawback is that it
    involves additional A/D conversion on HA-DSP, and it's also limited
    to **24 kHz** frequency top range.
3.  Use USB, but insert an isolating transformer after analog output of
    HA-DSP. The issue with an isolating transformers it that they are
    non-linear, except for really expensive ones. Since we are doing
    audio measurements, it would be inconvenient to insert a distorting
    component.
4.  Use USB via USB isolation. Obviously, doesn't introduce any analog
    distortions, but the issue with the majority of USB isolators is
    that they are based on [Analog Devices ADuM3160 and
    ADuM4160](http://www.analog.com/en/products/interface-isolation/isolation/usb-isolators.html)
    chips, which are limited to USB "Full Speed". In theory, Full Speed
    should provide bandwidth enough to pass **96 kHz / 24-bit** stream,
    but in practice, High Speed USB DAC chips fall back to **48 kHz /
    24-bit** if the connection can't provide bandwidth enough for
    **192 kHz / 24-bit**. This is true for HA-DSP. There are a couple of High
    Speed USB isolators, but they cost about **4x** times compared to a
    normal Full Speed isolator.

I decided to go with the option **4**, and bought [a Full Speed isolator
from USConverters](http://www.usconverters.com/usb-isolator). After all,
**48 kHz** impulse response can be upsampled to **96 kHz** (this is the
operating rate of HA-DSP) easily.

Below is the plot of measured channel imbalance of HA-DSP output from
USB, at **48 kHz**, with DSP bypassed:

[<img src="https://2.bp.blogspot.com/-H7aTRAWzYBo/WbdkziS5YNI/AAAAAAAAL3Y/6Jy2niDJe68gWo6cLa0hSFBRsAzV-FeXgCLcBGAs/s640/HA-DSP-Flat-1.png" width="640" height="444" />](https://2.bp.blogspot.com/-H7aTRAWzYBo/WbdkziS5YNI/AAAAAAAAL3Y/6Jy2niDJe68gWo6cLa0hSFBRsAzV-FeXgCLcBGAs/s1600/HA-DSP-Flat-1.png)

As it can be seen, the channel offset is about **0.04 dB**—that's
considerably more than of Phonitor. Another issue is more noise—it can
be seen on an unsmoothed plot. And that's even after making **5**
consecutive measurements and averaging them.

Yet another issue is different roll-off at high frequencies:

[<img src="https://4.bp.blogspot.com/-YABx08mZs7E/WbdlgtpqNFI/AAAAAAAAL3g/IpoTS_wrSsIvEpwye0JDZUNX-i0Q-9howCLcBGAs/s640/HA-DSP-Flat-2.png" width="640" height="444" />](https://4.bp.blogspot.com/-YABx08mZs7E/WbdlgtpqNFI/AAAAAAAAL3g/IpoTS_wrSsIvEpwye0JDZUNX-i0Q-9howCLcBGAs/s1600/HA-DSP-Flat-2.png)

As it can be seen, the difference at **20 kHz** is about **0.9 dB**!
Recall that the same input was used on MOTU, so the difference is
definitely due to HA-DSP. Fortunately, this can be compensated as part
of filter design process.

**UPDATE 9/14/2017:** Turns out, the early roll-off for HA-DSP is an
artefact of averaging of measurements. In fact it's not that bad, I'll
publish updated measurement graphs in the next post.

## Conclusion

I think that's enough for now, and it's just the beginning of my
findings! Will publish more soon.
