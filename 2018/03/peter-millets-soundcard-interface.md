# Peter Millet's Soundcard Interface

From [excellent series of articles by Stuart
Yaniger](http://www.audioxpress.com/authors/23380/stuart-yaniger)
"Practical Test & Measurement" I've learned about [Peter Millet's Soundcard
Interface device](http://pmillett.com/ATEST.htm). In short, this is an
analog adapter for transforming voltages in the range from
**20 millivolts** to **200 volts** into the range accepted by
soundcard's line input—about **1 volt**. The device also offers
protection for the soundcard inputs from accidental high voltages.

The application of this device is for testing audio amplifiers. Below is
a general connection scheme:

[<img src="https://1.bp.blogspot.com/-W76rQktC6Bg/Wrf5XfGGfnI/AAAAAAAAMY8/yadisX7xuu4cjBNu5LX7Feto0cDqD7lsQCLcBGAs/s640/test-rig.gif" width="640" height="219" />](https://1.bp.blogspot.com/-W76rQktC6Bg/Wrf5XfGGfnI/AAAAAAAAMY8/yadisX7xuu4cjBNu5LX7Feto0cDqD7lsQCLcBGAs/s1600/test-rig.gif)

The amplifier under test is connected to a load. The load can be either
real speaker or [a dummy
load](/2016/11/my-take-on-headphone-dummy-load.html)—a
resistor, for example. The soundcard interface is connected in parallel
to the load. Since the interface's input impedance is about **100 kOhm**,
it draws only little current by itself (for a comparison,
typical oscilloscope input has **1 MOhm** impedance.) The output from
the soundcard interface goes into a soundcard, which is connected to a
PC (or Mac) running measurement software.

The input to the amplifier is provided directly from the soundcard's
line output. Though if it's a mobile phone with an analog output or a
portable audio player, the test signal can be played from the device
itself.

## The Good

What is so good about the Mr. Millet's device? First, you must build it
yourself, which is fun. Second, it's cheap compared to "pro" measurement
frontends. Let's see:

-   [QuantAsylum QA401 Audio
    Analyzer](https://quantasylum.com/products/qa401-audio-analyzer)
    costs **$450**;
-   [Avermetrics Averlab](https://www.avermetrics.com/products/averlab/)
    costs **$3000**;
-   Prism Sound dScope Series III can be found used for about **$8000**.

I've spent **$265** (shipping excluded) on the parts for the Soundcard
Interface. If you are in electronics DIY hobby seriously, you may have
some parts already or buy them in larger quantities, which will take the
price even lower. Sure, the Millet's device plus a soundcard may not
deliver the same precision of measurements as those frontends, but for
home projects it's enough.

The third good thing about this interface is that it doesn't require any
specialized software. All the "pro" interfaces mentioned above come with
dedicated software which you may or may not find easy to use. But for
soundcard measurements, there are lots of audio analyzer software tools,
some of them are even available for free. So it's possible to compare
and choose what better suits your needs.

Speaking about alternatives, I must also mention recently emerged [Jan
Didden's L\|A Autoranger](https://linearaudio.nl/la-autoranger) which
from its description seems to be similar to the Millet's interface, and
has a comparable price. One great thing about the autoranger is that it
automatically adjusts itself to the input signal level, like "pro"
measurement interfaces do. Sounds interesting, I will perhaps try it
some time later.

## The Bad

So far, I have only soldered up the device and calibrated its zero and
full scale levels.

[<img src="https://1.bp.blogspot.com/-YZ2IAd6XfYY/WrcS4tvqwmI/AAAAAAAAMYU/dMF_dGdgnrsj783248EJFj3n0-VB8zfAwCLcBGAs/s400/calibration.jpg" width="400" height="220" />](https://1.bp.blogspot.com/-YZ2IAd6XfYY/WrcS4tvqwmI/AAAAAAAAMYU/dMF_dGdgnrsj783248EJFj3n0-VB8zfAwCLcBGAs/s1600/calibration.jpg)

One really important issue that must be addressed is the level of noise
produced by the device itself. While having the PCB lying open on my
table, I couldn't get the "zero" level lower than **0.9 mV** (P. Millet
is saying that "zero" on his unit is **0.3 mV**.)

Folks from the diyAudio forum report that putting the board into a
shielded enclosure helps to reduce the noise. Since the enclosure
suggested by Mr. Millet is made of plastic, I've ordered a couple of
MuMetal Ultraperm Permalloy sheets to cover the box from inside. In
fact, this is the same approach that E-MU was using for their line of
audio interfaces, e.g. 0202 and 0404. Their bodies are made of plastic,
but on the inside of the boxes there is isolating coating. Hopefully,
this will help.

## What's Next

After I finish with shielding the enclosure and assembling the device I
will start measuring the parameters of the device itself, and will try
it on some headphone amplifiers.
