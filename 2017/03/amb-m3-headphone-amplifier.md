# AMB M3 Headphone Amplifier

I was looking into assembling this headphone amplifier for a long time,
since I've learned about it's existence from [Bob Katz'
article](http://www.innerfidelity.com/content/katz%E2%80%99s-corner-episode-7-mosfet-magic).
It's really an interesting design, featuring Class A operation and an
active ground channel. I'm not sure that the latter actually makes a lot
of sense (there are both
[pro](http://www.meier-audio.homepage.t-online.de/grounds.htm) and
[contra](http://nwavguy.blogspot.com/2011/05/virtual-grounds-3-channel-amps.html)
articles about it). But the combination of Class A operation and a
discrete second stage based on MOSFETs definitely sounds interesting and
is different from any other headphone amp I have.

From all the different options this design offers, I have chosen to
build it with adjustable gain (instead of bass boost, since I'm not
really interested in the latter). I've calculated the required resistors
ratio to achieve **2x** to **6x** gain range—this is the same range that is
used by default in Objective 2 headphone amp, and in my M3 it's possible
to increase the gain gradually.

## Board Assembly

I've ordered all the parts I could from AMB's shop (that cost me around
**$100**), and the remaining parts from Mouser (also about **$100**). After
parts from Mouser has arrived, I discovered that the opamps (AD8610AR)
have SOIC-8 package instead of DIP-8 that I was hoping for, so I had to
solder them onto adapters (my first SMD soldering experience BTW!).

I was also thinking how to make all the external connections (inputs,
outputs) detachable, and came up with a decision to use [Molex 2 wire
assemblies](https://www.sparkfun.com/products/9918) I found on Sparkfun.
This has turned out to be very handy while I was experimenting with
placing the board into the case and had to re-connect them multiple
times.

In general, soldering the components wasn't hard at all—the board is
quite spacey. The range of components' heights varies greatly from
low-profile resistors and capacitors to big capacitors and heatsinks of
MOSFETs, so make sure you arrange them by height prior to soldering.

## Power Supply

I didn't even think about building my own, after reading about all the
necessary precautions one must to follow when working with high voltage
circuits. I decided to just buy a ready made linear power supply. I've
found one based on [Zero Zone
board](http://www.ebay.com/itm/ZERO-ZONE-15W-HIFI-Linear-Power-supply-kit-inlcude-transformer-/131628523223).
It can go up to **24 V** at **0.6 A**, which is enough for M3.

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8sb-fsD_9LiyEiJPsYNWSXVRSPmVmnrVhl1LZUHWmSIEIKYgAcAFyo1yZH-sckPwAnLkMgKssLaPeSfRNUYdesv4BgwnWIFyFswMARsF2vCkdOlCs626-4X-WJ8ZeeTOyRNfy69AxdaoabnwtWxg-UKLwVayple2KErwdnuiakPKnsEgtxuFjY2k9zA/w269-h400/power-supply.jpg" width="269" height="400" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8sb-fsD_9LiyEiJPsYNWSXVRSPmVmnrVhl1LZUHWmSIEIKYgAcAFyo1yZH-sckPwAnLkMgKssLaPeSfRNUYdesv4BgwnWIFyFswMARsF2vCkdOlCs626-4X-WJ8ZeeTOyRNfy69AxdaoabnwtWxg-UKLwVayple2KErwdnuiakPKnsEgtxuFjY2k9zA/s3516/power-supply.jpg)

It's actually turned out to be a neatly built power supply,
ground-referenced case, with fuses, and as a bonus—an LCD displaying
current voltage. The **V-** ground is floating (not connected to mains
ground), just as M3 design requires.

## Case

That has turned out to be the most interesting experience for me.
Assembled board is quite big (**7" x 5"**) and tall, and a ventilated case
is recommended. I found these requirements to be quite close to those of
Mini-ITX PC form factor, and started looking for a nice looking computer
case. I ended up buying [Morex 557 Universal
Mini-ITX](http://www.mitxpc.com/proddetail.php?prod=557) case. And this is
where the challenges have started.

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlO8r4CF3DtRlxCvJm2QWsRoT1NFXG-S7BtTMzseLkEXdqEDVHN9UVBP7HOkm87pu4cms-nlMd8sxxgsTyAMvKvjs04raGejM7GzdQdNJietBIxzTEbAgPhWxYHu1e1AZszo5oeYTUiZg7RimPb1WQQuKMUImKFl9mijr_dKGF0TVG1DJN7A-A3KBv3Q/w400-h376/inside-the-case.jpg" width="400" height="376" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlO8r4CF3DtRlxCvJm2QWsRoT1NFXG-S7BtTMzseLkEXdqEDVHN9UVBP7HOkm87pu4cms-nlMd8sxxgsTyAMvKvjs04raGejM7GzdQdNJietBIxzTEbAgPhWxYHu1e1AZszo5oeYTUiZg7RimPb1WQQuKMUImKFl9mijr_dKGF0TVG1DJN7A-A3KBv3Q/s3024/inside-the-case.jpg)

First, the case doesn't have a back panel—it is supposed to come on the
PC board. Second, ITX motherboard mounting holes obviously didn't match
against the holes on the M3 board. Third, the front panel had to be
modified to accommodate the volume pots and the giant Neutrik 1/4" jack
([NJ3FP6C-B](http://www.neutrik.com/en/audio/plugs-and-jacks/locking-1/4-chassis-jacks/nj3fp6c-b))
I've bought. The good part, though, was that the case had a toggle
power button with LED. The button itself wasn't of any use, but the
case's LED connector fit nicely the Molex connector I've put on the M3
board for LED.

I've bought a sheet of medium thickness ABX plastic. I used it both for
making the back panel, and for carrying the board's rear part. The front
part is resting securely on volume pots (and this also makes them
grounded, as M3 design recommends) and a little shelf used for latching
the front plastic panel onto the inner metal panel. This way, I also
have solved board mounting problem.

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipH08zbjOZK25W9pnAkjjKiDY96f1HHEYxImYX3GZXzP_tCJN_IBarWaP5Qc-cvmWlUh_O17kqTMVuy6qkdRnIYCboxpO687RxA5DMs9va5OtlRIz5Kt1K-Yct4jiojEq3p4xl96wPqKaMaQEWrkDSAHoshBwg4w36ZbqoQHjvTxmGZA8iOEkUURKmiw/w400-h295/back.jpg" width="400" height="295" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipH08zbjOZK25W9pnAkjjKiDY96f1HHEYxImYX3GZXzP_tCJN_IBarWaP5Qc-cvmWlUh_O17kqTMVuy6qkdRnIYCboxpO687RxA5DMs9va5OtlRIz5Kt1K-Yct4jiojEq3p4xl96wPqKaMaQEWrkDSAHoshBwg4w36ZbqoQHjvTxmGZA8iOEkUURKmiw/s3395/back.jpg)

For the volume pots, a regular **8 mm** drill bit worked fine. The Neutrik
jack has the same diameter as XLR jacks (that is, enormous), which is
called "size D" and is about **15/16"** in diameter. I couldn't find a hole
saw of this exact diameter in our local Orchard store, so I ended up
using a **1"** (**25 mm**) saw, and it has turned out that the jack covers it
nicely. But I would still recommend trying to get a saw of **15/16"**
diameter if you would like a more exact match.

The fact that the rear panel is plastic helped in ensuring that the
power jack is isolated from the ground. But this also mean that the RCA
input jacks are not grounded either. So I soldered a wire to one of IG
holes on the board, and secured the wire to one of the case's screws.

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2IkqU5gq279g6I9Hr9Vc2V3a7JJzymSUB2deiJ6UWrGOCNXkMJ57SOcIux2ATcTzVNu8qdHhnS-gqS3O6pJsl2Eusj3MTIQzw7m5PRABzL0c1TLJwXqyPOBE6fMdKDm_iiCmqufBfXn0CGJmcruEn0p2pOuQSQnKy9zu9XvcWPt8AkdmpcyHDDrHYLg/w400-h331/board-in-case.jpg" width="400" height="331" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2IkqU5gq279g6I9Hr9Vc2V3a7JJzymSUB2deiJ6UWrGOCNXkMJ57SOcIux2ATcTzVNu8qdHhnS-gqS3O6pJsl2Eusj3MTIQzw7m5PRABzL0c1TLJwXqyPOBE6fMdKDm_iiCmqufBfXn0CGJmcruEn0p2pOuQSQnKy9zu9XvcWPt8AkdmpcyHDDrHYLg/s3568/board-in-case.jpg)

The final stroke was to cover the holes for USB ports on the front
panel. See what I came up with :)

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMNKbwJ9lykPcinN3FogpneauZsBKDQYGyCehMxddZAfItGkIUHXOVuEeev3Jq1xkmI59rDPi8eveick9eY9xEAX44DUOYi2UQa6J2CyTVK5hJcvsK8x87sAdEepBkH4CHsfPEKBFpq1goHBV9K5vzE6SohH1ksCbgREAWpbY0nOibUwYEFd8c_Y0mUw/w400-h188/front.jpg" width="400" height="188" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMNKbwJ9lykPcinN3FogpneauZsBKDQYGyCehMxddZAfItGkIUHXOVuEeev3Jq1xkmI59rDPi8eveick9eY9xEAX44DUOYi2UQa6J2CyTVK5hJcvsK8x87sAdEepBkH4CHsfPEKBFpq1goHBV9K5vzE6SohH1ksCbgREAWpbY0nOibUwYEFd8c_Y0mUw/s4024/front.jpg)
