# JDS Labs CMoyBB DIY

[<img src="https://2.bp.blogspot.com/-WrNqcxVkGnA/WDZN34UH-vI/AAAAAAAAK4s/Md9I2rcd5jsvYyk5rLXqUnom3mjqRx6dgCLcB/s320/cMoyBB.jpg" width="320" height="260" />](https://2.bp.blogspot.com/-WrNqcxVkGnA/WDZN34UH-vI/AAAAAAAAK4s/Md9I2rcd5jsvYyk5rLXqUnom3mjqRx6dgCLcB/s1600/cMoyBB.jpg)

As an exercise in soldering, I decided to make a CMoyBB from a [DIY kit
offered by JDS
Labs](https://www.jdslabs.com/products/72/cmoybb-diy-kit-standard/). And
I'm pretty much happy with the result! Not only the completed device can
actually be used, but it also offers quite a good sound.

I tried using the amp both with a mobile phone and with a DAC
([ObjectiveDAC also built by JDS
Labs](https://www.jdslabs.com/products/46/standalone-odac-rev-b/)). I've
found that with a DAC, since it outputs at line level, the resulting
gain is quite high and isn't very comfortable with low-impedance
headphones (I used **Beyerdynamic T5p**, they have an impedance of
**32 Ohms**)—playing any pop music with compressed dynamic range required
the volume on the amplifier to be set quite low. Though with a mobile
phone as a source the resulting volume is acceptable.

CMoyBB also offers bass boost setting which I enjoyed when using it with
**AKG K240** headphones that are very neutral by design.

I was also interested whether my assembly has any flaws from electrical
point of view. I couldn't detect any issues "by ear", so I decided to
try to measure the device. I have a spare Creative / E-MU Tracker Pre
sound interface which unfortunately only has outdated drivers that do
not work with the latest versions of Mac OS and Windows. But it is
happily supported by Linux. The only problem was to find any software
for performing tests. After looking for
[RightMark](http://audio.rightmark.org/) equivalents, I've found
[LXsndtest](https://sourceforge.net/projects/lxsndtest/). The app is a
bit outdated, too—it relies on legacy OSS sound API, and only supports
measurements in **16/48** resolution, but for my humble purpose this was
fine.

First I set up a rig to test performance of the sound card
itself—connected inputs to outputs directly using unbalanced TRS to RCA
transformers. What I've learned is that sound input must be turned off
in the system sound mixer, otherwise a feedback loop is created. Then I
connected my CMoyBB and adjusted its volume level to match what I've had
with loopback.

Below are frequency spectrum graphs for pink noise ("Noise" measurement
mode of LXsndtest), on top is loopback, below is CMoyBB (with bass boost
turned off):

[![](https://3.bp.blogspot.com/-vmY4ALxLX4U/WDZVV8DS4tI/AAAAAAAAK5I/q4jh-X5WVIE6N3eLDJcSKQPQVZ1oXmQKwCLcB/s1600/loopback-vs-cmoy.gif)](https://3.bp.blogspot.com/-vmY4ALxLX4U/WDZVV8DS4tI/AAAAAAAAK5I/q4jh-X5WVIE6N3eLDJcSKQPQVZ1oXmQKwCLcB/s1600/loopback-vs-cmoy.gif)

Not a big difference! The response is pretty much the same. Left / right
balance has become a bit worse—because the amp had to be set at
moderately low level. While finding the right volume setting I've
noticed that the balance becomes pretty much skewed at very low volume
level of CMoyBB (that's normal for inexpensive headphone amps). Noise
levels (bar graphs that LXsndtest displays under the spectrum graph) are
pretty much the same, too.

I also tried "Distortion" mode of LXsndtest for **1 kHz** sine wave
signal, and didn't find much difference between loopback and CMoyBB as
well (loopback results are on the left, CMoyBB is on the right):

[![](https://2.bp.blogspot.com/-OcKHbhk-aC0/WDZaJ96ghgI/AAAAAAAAK5Y/8Pt00Pb4CwovQ6m0huyc3Jc8rT3RlyBhACLcB/s1600/loopback-vs-cmoy-1000hz-dist.gif)](https://2.bp.blogspot.com/-OcKHbhk-aC0/WDZaJ96ghgI/AAAAAAAAK5Y/8Pt00Pb4CwovQ6m0huyc3Jc8rT3RlyBhACLcB/s1600/loopback-vs-cmoy-1000hz-dist.gif)

The actual figures don't make much sense by itself—as I've already
mentioned, LXsndtest only measures in 16-bit mode, and since Tracker Pre
has analog input level controls, it's quite hard to adjust the signal
level to use the entire 16-bit range. As one can see, I've only managed
to achieve effective 13/14-bit signal level. But again, the main result
is that there is no measurable difference with this kind of testing
equipment.

What about the bass boost mode of CMoyBB? Definitely, we have a boost:

[![](https://4.bp.blogspot.com/-ZqWUIseLYIQ/WDZayBpPvfI/AAAAAAAAK5c/YBVC9ZOR5Lkrd6Khw5A2l28sJpUuQxPWgCLcB/s1600/cmoy%252Bbb.gif)](https://4.bp.blogspot.com/-ZqWUIseLYIQ/WDZayBpPvfI/AAAAAAAAK5c/YBVC9ZOR5Lkrd6Khw5A2l28sJpUuQxPWgCLcB/s1600/cmoy%252Bbb.gif)

There is a **+8 dB** bump here (JDS labs spec says it's **+9 dB**),
which results in more than a **2x** perceptual bass volume increase.

The conclusion here is that CMoy headphone amp, and especially the JDS
Labs version of it is a great DIY project for a beginner electronic
hobbyist.

(JDS Labs is not a sponsor of this post and did not endorse it.)
