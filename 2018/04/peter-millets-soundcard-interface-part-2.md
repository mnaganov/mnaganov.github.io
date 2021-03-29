# Peter Millet's Soundcard Interface, Part 2

Lots of things happened while assembling my [Millet's Soundcard
Interface](/2018/03/peter-millets-soundcard-interface.html).
First, I discovered that the voltage mode switch can be
restricted to the required 4 positions by inserting small metal bits
that came with it into the holes around the shaft. This is where they
need to go:

[<img src="https://3.bp.blogspot.com/-nxBF_vyKtXw/WsrraMTTgqI/AAAAAAAAMag/-mRau8R4Yt4rnp-ekSADOPNBfW_KEgQ9gCLcBGAs/s320/switch-shafts.jpg" width="320" height="317" />](https://3.bp.blogspot.com/-nxBF_vyKtXw/WsrraMTTgqI/AAAAAAAAMag/-mRau8R4Yt4rnp-ekSADOPNBfW_KEgQ9gCLcBGAs/s1600/switch-shafts.jpg)

If you misplace the bit, use a magnet to pull it out. After inserting
the bits, cover the front side of the switch with the metallic sticker
that came with it.

While finding the right places for the bits I was turning the unit on
and off frequently and managed to break the power switch. I had to
solder the switch out—tough task, as it has 8 pins in total, and then
solder back a replacement. Fortunately, the board continued to work as
before.

By this time, Mumetal sheets have arrived and I started covering the
inside of the box with them. As a reminder, Mumetal is an alloy that
offers shielding from magnetic fields. There was one problem—there are
round mounting studs on the inside of the box so I had to make holes in
Mumetal. Doing that with a drill has turned out to be impossible—the
metal is very thin, and the drill was just tearing it.

I've found that the diameter of the mounting studs is the same as in a
standard paper puncher. However, the holes had to be done very far from
the edges. So I had to cut the Mumetal sheet into smaller pieces:

[<img src="https://4.bp.blogspot.com/-vQTGeg0IZD8/WsrvSzNIQxI/AAAAAAAAMas/NOAo842e5-Edgu1zHCo1StSvEzWyS_FRwCLcBGAs/s640/mumetal.jpg" width="640" height="379" />](https://4.bp.blogspot.com/-vQTGeg0IZD8/WsrvSzNIQxI/AAAAAAAAMas/NOAo842e5-Edgu1zHCo1StSvEzWyS_FRwCLcBGAs/s1600/mumetal.jpg)

This, of course had made the coverage to be non-continuous. In order to
restore it, I glued strips of Mumetal over the stitches, and then made
solder connections between the strips and the sheets under them (I used
an old style lead solder for that.)

This way, I've got a solid shield with close to zero resistance which
made an excellent chassis ground. One thing that was left to do is to
connect the board's signal ground to it. As a connection point, I've
chosen one of the outbound ground legs of the Murata DC/DC converter—so
the connection is as close to the power input as possible. It is also
convenient that the converter is on the edge of the board, so I could
use a very short wire between the it and the side wall of the box:

[<img src="https://2.bp.blogspot.com/-nVT1J0QY3qM/WswnBZLo7HI/AAAAAAAAMbA/PB_m6Vs6J40Tf88g787VbWdp7mhMcpdKgCLcBGAs/s320/ground.jpg" width="262" height="320" />](https://2.bp.blogspot.com/-nVT1J0QY3qM/WswnBZLo7HI/AAAAAAAAMbA/PB_m6Vs6J40Tf88g787VbWdp7mhMcpdKgCLcBGAs/s1600/ground.jpg)

I've checked that there is indeed a low resistance path between the
balanced input ground pins and the Mumetal walls. Note that all this
shielding didn't help to bring down the "zero level" of the device as I
was hoping.
