# Making friends with Windows and ARTA

## New Laptop

The Macbook Air I was previously using for my personal projects is now
retired. I have brought it to the office for playing music from local
files and streaming services through equalization and crossfeed plugins.
That's an interesting topic on its own, and I will do a post about it
some time later.

I decided that my new laptop needs to run Windows, because it seems to
be the operating system of choice for audio engineers. Indeed, on Mac I
had to use FuzzMeasure and REW which are designed primarily for
acoustical measurements. Whereas for PCs there are plenty of software
packages for electrical audio measurements that work with regular sound
cards. Potentially, one can run them on Mac via emulation, but my
attempts of trying that usually resulted in crashes and hangs.

While looking for Windows laptop I faced the harsh truth—Macbooks are
such a good laptops that finding a matching Windows machine is a
challenge. The usual weak point is quality of screens and touchpads.
After considering several cheaper laptop models I decided to bite the
bullet and buy Lenovo X1 Carbon, 5th generation. I have a 4th
generation Carbon as company-provided Linux laptop, and I almost enjoy
it for its small weight and durability. "Almost" due to the
touchpad—it's not very good. In fact, I prefer to use the "red dot"
joystick controller instead.

In comparison with the 4th generation, its successor adds a high
resolution screen, USB-C ports, and newer Intel chipsets. The touchpad
is also a bit better. And the laptops are now available in silver body
color in addition to the classic black.

[<img src="https://1.bp.blogspot.com/-gdfItFS9Q-8/WuEwm-WkQbI/AAAAAAAAMcg/5m1BV3JijEArgqrUnGt3kJ81Bgwq2UovQCLcBGAs/s400/laptop.png" width="336" height="400" />](https://1.bp.blogspot.com/-gdfItFS9Q-8/WuEwm-WkQbI/AAAAAAAAMcg/5m1BV3JijEArgqrUnGt3kJ81Bgwq2UovQCLcBGAs/s1600/laptop.png)

Here it is. It is even lighter than Macbook Air, and the screen is
better—the bezels are very thin, and the resolution is impressive **2550
x 1440** on a **14"** diagonal (the **27"** monitors I have at my office
use the same resolution). The IPS matrix provides very wide viewing
angles. 5th gen Carbon even beats Apple laptops in connectivity as it
has both USB-A and USB-C type ports, and HDMI.

From the hardware design point of view the only annoying thing is the
absence of a notch on the lower part of the body, which makes it hard to
open the laptop's lid using one hand only—the habit I earned over the
years of using MB Air. In fact, opening the lid even using two hands is
not that comfortable because the the material that the body is made of
is a bit slippery.

But the most annoying feature in the new laptop is the operating system.
Carbon comes with Windows 7 Pro preinstalled and I decided not to
upgrade it to Windows 10 yet because I was hoping that I could use my
old E-MU cards: **Tracker Pre** and **0404** (they are not fully USB
Audio compatible, and Creative Labs eventually has stopped releasing new
drivers for them.) Windows 7 feels complicated and cumbersome even
compared to modern Linux graphical desktops, let alone Macs.

Speaking of E-MU drivers, Creative Labs has abandoned them in beta
status for Windows 7 64-bit, and it really shows itself. I can configure
the cards, but when trying to use audio analyzer apps the system
hangs.

## Windows Audio Analyzers

I tried [ARTA](http://www.artalabs.hr/),
[AudioTester](http://www.audiotester.de/), and the package from
[Virtins](http://virtins.com/). AudioTester looks a bit outdated, and it
wasn't stable enough. The MultiInstrument package from Virtins seems to
be designed more like an oscilloscope replacement. ARTA appeared as the
best choice—it was easy enough to figure out how to make the
measurements I needed even without the manual, and when I looked into
the manual I was pleasantly astonished that descriptions of all
measurements are accompanied with the underlying DSP theory.

The only thing I haven't yet figured out completely (and it seems more
like a problem with Windows 7 rather than with ARTA) is how to use my
**MOTU Microbook IIc** with **96 kHz** sampling rate. So by far, I was
making all my measurements in **48 kHz** mode.

## Some Measurements

### MOTU Line Out to Line In Loopback

I started with a simple loopback from MOTU's unbalanced **Line Out** to
its balanced **Line In**. I used unbalanced out because this is the out
I can use throughout the entire experiment (not all amplifiers have a
balanced line in.) I shorted the balanced cold input (ring on TRS) to
the ground—this was resulting in less noise than leaving it floating.
The laptop was running on battery. This is how THD, IMD, and Frequency
response (FR) graphs of the loopback connection look like:

[![](https://4.bp.blogspot.com/-zAFOZB18VaI/WuFCy6GcQtI/AAAAAAAAMc8/Mqb4znV42GAg0OU5EgISDPVUGCWsBBC7ACLcBGAs/s1600/MOTU-loopback-thd-imd.png)](https://4.bp.blogspot.com/-zAFOZB18VaI/WuFCy6GcQtI/AAAAAAAAMc8/Mqb4znV42GAg0OU5EgISDPVUGCWsBBC7ACLcBGAs/s1600/MOTU-loopback-thd-imd.png)

[![](https://1.bp.blogspot.com/-jXhpZa_qioQ/WuJ9uykxnmI/AAAAAAAAMeU/ozdxCmYoJlwvfQj8SGwU0EMwKxv5t86UACLcBGAs/s1600/MOTU-loopback-fr.png)](https://1.bp.blogspot.com/-jXhpZa_qioQ/WuJ9uykxnmI/AAAAAAAAMeU/ozdxCmYoJlwvfQj8SGwU0EMwKxv5t86UACLcBGAs/s1600/MOTU-loopback-fr.png)

This is what I was expecting. The FR has slight bass rolloff and a small
bump from the antialiasing filter—the same thing I observed on Mac with
[FuzzMeasure](https://www.rodetest.com/). The levels of noise and
distortions are very low which confirms that this MOTU card is a good
choice for hobbyist measurements. The 2nd and 3rd harmonics can be seen
on the THD graph, but their level is very low.

### Soundcard Interface Loopback

Now these are measurements of a loopback through [P. Millet's Soundcard
Interface](http://pmillett.com/ATEST.htm) (SCI). I have connected MOTU's
unbalanced line out to SCI's input, ground referenced. SCI's input range
was set to **2 V**. I powered SCI from the second USB-A port of my
laptop. Potentially, this could introduce a ground loop noise, but it
didn't—the ground loop noise usually looks like a spike at **60 Hz** as
we will see later.

[![](https://4.bp.blogspot.com/-QFHjP_ISObw/WuFECMmjAlI/AAAAAAAAMdQ/ssvLRPo8E-cVaFVCBeWxVWlSxnsxywXigCLcBGAs/s1600/SCI-loopback-thd-imd.png)](https://4.bp.blogspot.com/-QFHjP_ISObw/WuFECMmjAlI/AAAAAAAAMdQ/ssvLRPo8E-cVaFVCBeWxVWlSxnsxywXigCLcBGAs/s1600/SCI-loopback-thd-imd.png)

Here the overall noise floor has raised by about **10 dB**, but it's
interesting that the 2nd and 3rd harmonics have disappeared. Since the
input level is the same, perhaps they were resulting from a slight
overloading of MOTU's Line Out. The frequency response didn't change
compared to MOTU loopback.

From these measurements I can conclude that Mr. Millet has created a
highly transparent device. Hopefully, [my extensive efforts on making a
properly shielded and grounded
case](/2018/04/peter-millets-soundcard-interface-part-2.md)
also have helped.

The next thing I have tried was using different power sources for the
SCI: a USB power bank, the USB-C ports of laptop, and a multi-voltage
switching power supply. The power bank is as clean as USB-A, and for the
last two sources the results are below:

[![](https://2.bp.blogspot.com/-kuLrxdM8AZ4/WuFGNw_s6CI/AAAAAAAAMdc/wJOxQScnFcs_4Hn7xZn7gpKA2Km0XnuVwCLcBGAs/s1600/SCI-usb-c-power-adaptor-thd.png)](https://2.bp.blogspot.com/-kuLrxdM8AZ4/WuFGNw_s6CI/AAAAAAAAMdc/wJOxQScnFcs_4Hn7xZn7gpKA2Km0XnuVwCLcBGAs/s1600/SCI-usb-c-power-adaptor-thd.png)

As we can see, the USB-C port indeed creates a ground loop (note the
spike at **60 Hz** and its harmonics), and the wall power supply is the
worst.

### SPL Phonitor Mini

Next step—try SPL Phonitor Mini. I have connected MOTU's unbalanced
**Line Out** to Phonitor's unbalanced inputs, then connected [the dummy
headphone
load](/2016/11/my-take-on-headphone-dummy-load.md)
I've made a long time ago to Phonitor's output via my
[T-Cable](/2017/04/t-cable-for-output-level-measurements.md).
Then using a BNC to banana males I have connected needle multimeter
probes to the T-Cable's outlet. This way I have created a parallel
connection for the Soundcard Interface to the dummy load.

[<img src="https://2.bp.blogspot.com/-rmvJDj0TjmE/WuFAKlRZboI/AAAAAAAAMcw/Rm6ezdsYlVUKlcZXwM1npHaOFlrWssIJACLcBGAs/s400/tools.jpg" width="383" height="400" />](https://2.bp.blogspot.com/-rmvJDj0TjmE/WuFAKlRZboI/AAAAAAAAMcw/Rm6ezdsYlVUKlcZXwM1npHaOFlrWssIJACLcBGAs/s1600/tools.jpg)

I have set the dummy load to **33 Ohms**, and turned up Phonitor's
volume until the reading on the SCI was showing **1 V**. The signal
level in ARTA for the **1 kHz** sine was showing the same RMS value as
in my previous experiment. So now we can directly compare to SCI's
loopback.

[![](https://3.bp.blogspot.com/-I5evwxVszAU/WuFHNS_9fTI/AAAAAAAAMdk/yBMmRBVu8kYLps51Wdt8GKUgZh48KIqEQCLcBGAs/s1600/phonitor-thd-imd.png)](https://3.bp.blogspot.com/-I5evwxVszAU/WuFHNS_9fTI/AAAAAAAAMdk/yBMmRBVu8kYLps51Wdt8GKUgZh48KIqEQCLcBGAs/s1600/phonitor-thd-imd.png)

The level of noise remains the same—I think, Phonitor's noise level is
lower than SCI's. There are more harmonics seen, this is expected for a
power amplifier, so the overall THD numbers have raised. The frequency
response didn't change compared to original MOTU Loopback measurement
which means Phonitor has a flat response.

### MOTU's Headphone Output

Now if we want to distinguish between a good and a bad headphone
amplifier, let's measure the headphone output on the MOTU Microbook.
Here we see much more distortions. Also, even on the maximum volume,
MOTU's headphone output could only deliver **0.65 V** into the same
**33 Ohms** load, whereas Phonitor while delivering **1 V** wasn't
even in the middle of its volume knob range.

[![](https://1.bp.blogspot.com/-5_xICe-vZ4A/WuFJBdJvYMI/AAAAAAAAMd0/mDi8jCDBXSUygFfDTR4K8wDg2dCIbRDqQCLcBGAs/s1600/MOTU-headphone-thd-imd.png)](https://1.bp.blogspot.com/-5_xICe-vZ4A/WuFJBdJvYMI/AAAAAAAAMd0/mDi8jCDBXSUygFfDTR4K8wDg2dCIbRDqQCLcBGAs/s1600/MOTU-headphone-thd-imd.png)

[![](https://1.bp.blogspot.com/-T8SvXtEgjF4/WuJ-RjYrN1I/AAAAAAAAMec/zP3NVYW04gwK0pLY_unY0OZjM7BVPLc5wCLcBGAs/s1600/MOTU-headphone-fr.png)](https://1.bp.blogspot.com/-T8SvXtEgjF4/WuJ-RjYrN1I/AAAAAAAAMec/zP3NVYW04gwK0pLY_unY0OZjM7BVPLc5wCLcBGAs/s1600/MOTU-headphone-fr.png)

So here we can see a rolloff of high frequencies and more distortions.
Also, for some reason there is some noise at **60 Hz**, with harmonics,
although SCI was powered from a power bank, so there was no loop
connection through laptop's USB ports, and the laptop was on battery
power.

## Conclusions

I don't regret I've switched to a Windows laptop from a Macbook because
indeed there are far more audio engineering applications. I have only
done very simple tests so far, and I'm excited about the possibilities
this setup had opened.
