# My Take on Headphone Dummy Load

[<img src="https://2.bp.blogspot.com/-TNH00nTMlug/WCjuUAPrZJI/AAAAAAAAK34/PHLJW856qKsH6_3a2ans9D_bHZ_ZZJCGwCK4B/s200/Overview.jpg" width="200" height="180" />](http://2.bp.blogspot.com/-TNH00nTMlug/WCjuUAPrZJI/AAAAAAAAK34/PHLJW856qKsH6_3a2ans9D_bHZ_ZZJCGwCK4B/s1600/Overview.jpg)

Following the idea of [Headphone Dummy Load by Warren
Young](http://www.tangentsoft.net/audio/hp-dummy.html), I've made my
take on implementing it. I noticed that [Sparkfun's Mini Solderable
Board](https://www.sparkfun.com/products/12702) fits neatly into Hammond
box 1590A recommended by Warren, and decided to use it as a base for the
assembly. Here is how the soldered board looks like:

[<img src="https://4.bp.blogspot.com/-PMAAjcLNRrk/WCjqyfIUfxI/AAAAAAAAK3c/5gfcoXHBctg4_V9Az3rulZyswPB7YIDXQCK4B/s400/Soldered-board.jpg" width="400" height="209" />](http://4.bp.blogspot.com/-PMAAjcLNRrk/WCjqyfIUfxI/AAAAAAAAK3c/5gfcoXHBctg4_V9Az3rulZyswPB7YIDXQCK4B/s1600/Soldered-board.jpg)

Note that the breadboard has internal connections (two groups of
vertical stripes), thus wires are only needed for connecting these two
groups together and for making horizontal connections.

The wires of the load impedance switch are soldered to the board, while
the input cable will be connected via the blue terminal. I think there
is an advantage in using the terminal: first, one can change the cable
without desoldering; and second, it's possible to attach probes of a
multimeter to the screws of the terminal, which can be useful if the
amplifier under test is not disassembled.

This is how I prepared the enclosure box for fitting the board assembly
inside:

[<img src="https://2.bp.blogspot.com/-ZXv-zW1IY2M/WCjsMery38I/AAAAAAAAK3k/jSUxHEj67B0ko0A7P7s4yxKCbACGqx01gCK4B/s400/Board-and-enclosure.jpg" width="400" height="283" />](http://2.bp.blogspot.com/-ZXv-zW1IY2M/WCjsMery38I/AAAAAAAAK3k/jSUxHEj67B0ko0A7P7s4yxKCbACGqx01gCK4B/s1600/Board-and-enclosure.jpg)

The mounting holes of the breadboard are isolated, but nevertheless I
decided to use nylon screws for mounting it. Nuts not only hold the
screws but also support the board in the air, preventing the contacts on
the bottom of the board from touching the enclosure.

After mounting the board inside and screwing the resistors to the
enclosure I ensured that the board sits very firmly. There wasn't even a
need to put a second pair of nylon nuts on top of the board--the latter
is held in place by the resistors:

[<img src="https://4.bp.blogspot.com/-XfaX9Bdqpo4/WCjthE-1mqI/AAAAAAAAK3w/ievAjSL9oG4Q738QbuUSziY10Mk-rwNLgCK4B/s400/Assembled-device.jpg" width="400" height="206" />](http://4.bp.blogspot.com/-XfaX9Bdqpo4/WCjthE-1mqI/AAAAAAAAK3w/ievAjSL9oG4Q738QbuUSziY10Mk-rwNLgCK4B/s1600/Assembled-device.jpg)

I used Phobya NanoGrease Extreme thermal paste (leftover from other
project) with the resistors.

Overall, this was an interesting and useful project, although not very
cheap. But the box is definitely more compact that 2 pairs of
headphones, and also the device should be more reliable in withstanding
accidental high voltages or currents from amplifiers under test.

Below is almost complete list of Mouser parts I used:

* Enclosure: Hammond 1590AGY
([546-1590A-GY](http://www.mouser.com/search/ProductDetail.aspx?r=546%2d1590A%2dGY));
* Rubber grommet: Heyco G1019
([836-G1019](http://www.mouser.com/ProductDetail/Heyco/G1019));
* Breadboard: Sparkfun Mini
PRT-12702 ([474-PRT-12702](http://www.mouser.com/ProductDetail/SparkFun-Electronics/PRT-12702));
* 33 Ohm resistors (pair): Ohmite TCH35P33R0JE
([588-TCH35P-33E](http://www.mouser.com/ProductDetail/Ohmite/TCH35P33R0JE));
* 330 Ohm resistors (pair): Ohmite TCH35P330RJE
([588-TCH35P-330E](http://www.mouser.com/ProductDetail/Ohmite/TCH35P330RJE));
* Switch: E-Switch 100DP3T1B1M1QEH
([612-100-H1111](http://www.mouser.com/ProductDetail/E-Switch/100DP3T1B1M1QEH));
* 3-pin terminal: Sparkfun PRT-08433
([474-PRT-08433](http://www.mouser.com/ProductDetail/SparkFun-Electronics/PRT-08433/));
* 4-40 screws (0.25" for resistors, 0.75" nylon for the board) and nuts.
