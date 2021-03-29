# Amp & DAC box for LXmini (miniBox)

I'm rebuilding my audio system around RME Fireface UCX. According to
numerous user posts, RME devices are very reliable, so I'm hoping to
achieve overall better stability than with MOTU Ultralite AVB which goes
crazy approximately every three weeks. Personally I would tolerate this,
but since the system is used by my entire family, hearing from them that
"sound is not working AGAIN" has become somewhat annoying.

My surround system is **4.1** configuration. As I've explained in my
[post about LXmini](/2018/06/linkwitz-lxminifirst-impressions.html),
their super-stable and super-focused phantom center eliminates the need
for the central speaker in the surround configuration. I use LXmini both
for the front pair and for the surround pair. The surround pair is about
**4** meters away from the audio electronics—the shortest path. However,
speaker cables run along the wall, and would be perhaps twice longer.
This is why together with the second pair of LXminis I had built a
dedicated amplifier and DAC box which is located close to them.

While I'm rebuilding the main system, I've made a small upgrade to this
surround box as well. The main change is that I've connected it using a
digital SPDIF link, and started using Neutrik SpeakON ports for
connecting LXminis. Overall, the box now looks more like a complete
system on its own, so I decided to do a quick post about it.

Here is what I've got in it:

[<img src="https://3.bp.blogspot.com/-U7gLZX9dYY0/XHylEHkqEMI/AAAAAAAANh0/UNPOq6hvlIAD-YsUv9z_lX4D3Lt3-UMVQCLcBGAs/s640/front.jpg" width="640" height="388" />](https://3.bp.blogspot.com/-U7gLZX9dYY0/XHylEHkqEMI/AAAAAAAANh0/UNPOq6hvlIAD-YsUv9z_lX4D3Lt3-UMVQCLcBGAs/s1600/front.jpg)

It's a **2U** [half-rack
enclosure](http://www.allmetalparts.co.uk/56-5-inch-half-rack-cases) by
All Metal Parts company in the UK. On the lower level I put the QSC
SPA4-100 amplifier—I use it for the front pair of LXminis, too. Then
there is miniDSP 2x4 HD (one of the options recommended by S. Linkwitz),
and an inexpensive SPDIF coaxial to TOSLink optical converter by
Monoprice.

This is what I put on the rear side:

[<img src="https://4.bp.blogspot.com/-mohdm5gSyoQ/XHyuCUJAybI/AAAAAAAANiA/38ntJO-s354GxBN1pbUyNpmWeiDVHRcCACLcBGAs/s640/back.jpg" width="640" height="310" />](https://4.bp.blogspot.com/-mohdm5gSyoQ/XHyuCUJAybI/AAAAAAAANiA/38ntJO-s354GxBN1pbUyNpmWeiDVHRcCACLcBGAs/s1600/back.jpg)

Here we have a pair of 4-pole SpeakON connectors for the speakers, and
an SPDIF input (RCA). All the power inputs are connected directly: the
standard 3-prong AC receptacle on the back of the amplifier, and power
adapters from miniDSP and the SPDIF converter. I've also provided an USB
wire to miniDSP for the purposes of tuning and diagnostics.

Here is a diagram of the device:

[![](https://3.bp.blogspot.com/-H1aZ50zvRlU/XHy8Bpduh_I/AAAAAAAANiY/eJcspg-Utn8NyKHkJh1bXsDiBwS6rzy1ACLcBGAs/s1600/miniBox.png)](https://3.bp.blogspot.com/-H1aZ50zvRlU/XHy8Bpduh_I/AAAAAAAANiY/eJcspg-Utn8NyKHkJh1bXsDiBwS6rzy1ACLcBGAs/s1600/miniBox.png)

Now the obvious question: why did I chose a digital connection and
specifically the coaxial? A digital connection requires only **1** wire,
also since miniDSP is then connected using an optical TOSLink, there is
complete electrical isolation between the DAC / Amp circuitry of the
miniBox and the main system. Then, why didn't I just run a TOSLink cable
directly? Mainly because optical cables require a bit more care at
corners. A high quality low impedance coaxial cable seems like a more
robust option.

The usual concern with using SPDIF is jitter. Would the noise in the
cable create more jitter? My particular concern was also due to the fact
that the Monoprice coax to optical converter does not isolate the shield
of the coaxial input from the ground. Which means, the shield of the
cable connects ground planes of audio devices connected to different
power outlets—a perfect opportunity for a ground loop-induced noise to
occur. Although the coaxial cable I use (Belden 8241) has very low
shield resistance, still there can be some noise voltage added to the
digital signal.

To check whether there is a real problem, I ran jitter test (at
**48 kHz, 24-bit** resolution) in ARTA. First using miniDSP's USB input,
then using TOSLink connected directly to Fireface's optical output, and
finally in the actual working condition when Fireface is connected to
another power outlet, with a **5.5** meter coaxial cable running
from Fireface's coax output to miniBox. The resulting spectre, measured
using QuantAsylum QA401 on the outputs of miniDSP was always the same:

[![](https://1.bp.blogspot.com/-wx4-AhzHNhE/XH9c93byhmI/AAAAAAAANjM/pQZ7p4cS-6oFxaY1MWB8nN853bSQQkergCLcBGAs/s1600/jitter.png)](https://1.bp.blogspot.com/-wx4-AhzHNhE/XH9c93byhmI/AAAAAAAANjM/pQZ7p4cS-6oFxaY1MWB8nN853bSQQkergCLcBGAs/s1600/jitter.png)

Jitter is minimal and does not depend on how the digital signal gets
delivered to miniDSP. Note that similar results for USB and TOSLink
input are published at [Audio Science Review
forum](https://www.audiosciencereview.com/forum/index.php?threads/review-and-measurements-and-minidsp-2x4-hd-dsp-and-dac.2674/).
So I think there is no reason to worry about jitter here.

One more discovery I've made is that the coaxial to TOSLink Monoprice
converter I use only supports sampling rates up to **48 kHz**. Not a
problem for me because this is the sampling rate I intend to run the
Fireface at, so it can accept an optical input from Xbox directly.
However, would I decide to increase the sampling rate, I would need to
look for a different converter.
