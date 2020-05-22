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

<img src="https://lh6.googleusercontent.com/36rVS027dQReiHh5ddNOkgqEsu4Mb-GLDxdhOz5XvgSYnpYnfEuKsTjuYDOqGdV_dIwKg4W81zLL3DN3uzWNS0fi57j_E161FqUQJtN-uMR-vhzEX3ddOe0_lVzHt5h5Fb0ZEHTc" width="287" height="427" />

It's actually turned out to be a neatly built power supply,
ground-referenced case, with fuses, and as a bonus—an LCD displaying
current voltage. The **V-** ground is floating (not connected to mains
ground), just as M3 design requires.

## Case

That has turned out to be the most interesting experience for me.
Assembled board is quite big (**7" x 5"**) and tall, and a ventilated case
is recommended. I found these requirements to be quite close to those of
Mini-ITX PC form factor, and started looking for a nice looking computer
case. I ended up buying [Morex 557 Universal
Mini-ITX](http://www.mitxpc.com/proddetail.php?prod=557) case. Here is
where the challenges has started.

<img src="https://lh6.googleusercontent.com/PR1SSJ6RpQDBA0FDlGgcYV4zBkrsxK4JU72Ij_O9sOs2Fe494YbBbvEB3eXmQ5q2MXeOdDMTINzeUsGc58JRX6ASysD0P-aK5byD2S9PxTjBxA20PtVOXc52YyRlX7yk9jmWxCSW" width="427" height="401" />

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

<img src="https://lh3.googleusercontent.com/re8m3WDyL5YH6nlzwIxbVTbevzDVylci1IUIbYvqbe2knYO4PIrELEaIYTS6TdkIpfbW5G3RZN7A36LKzPfTlECpm6lEDJsAq6nUAvfe8FYbpNp6NV37E_N5mgAAHHQuhUPTwdgH" width="533" height="440" />

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

<img src="https://lh6.googleusercontent.com/fJIzddT_0I4ojquGlQqLPAzKD4EMVTVYc8S6M6802cfjRmjx9uvIFhwDWxrHWSs_tlgc4TcaPZ9GbUVMHsnoVt90xbAzBTL8KMnl7wH-a6OY0h1NH3Sf5ZRmRqH9V1WnR2CNbK7T" width="427" height="313" />

The final stroke was to cover the holes for USB ports on the front
panel. See what I came up with :)

<img src="https://lh6.googleusercontent.com/q8YJXh4txlBiMfZ1sOgdp11EJWsU9piL-p5QjU8vGDre9hOn78oirak8w-67-cpRWBh57dsQZJmqkTAxdhjncI7wu0mTZ7sTO0D6phrMKDsoZxooowGMWXi9zR8xOSu-gcYV32Xo" width="602" height="279" />
