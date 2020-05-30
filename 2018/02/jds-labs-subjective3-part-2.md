# JDS Labs Subjective3, Part 2

As I was unhappy with the imprecision of "Mid" tone control on
Subjective3, I decided to get rid of it—I don't see a point in having it
anyway. So I opened my unit, and desoldered VR2 pot away. After that
I've re-measured the frequency response and channel balance, and it got
more even:

[<img src="https://3.bp.blogspot.com/-RwFIoj1sx60/WpYQGMOgU6I/AAAAAAAAMS4/arrff-O92C87DPlPINbr7LH4jRa-6Lk8gCLcBGAs/s640/Channel-Balance-Mod.png" width="640" height="356" />](https://3.bp.blogspot.com/-RwFIoj1sx60/WpYQGMOgU6I/AAAAAAAAMS4/arrff-O92C87DPlPINbr7LH4jRa-6Lk8gCLcBGAs/s1600/Channel-Balance-Mod.png)

The inter-channel difference is **\~0.3 dB**, which isn't superb, and
I'm thinking how could this be fixed.

I've also measured the pot I desoldered, and indeed it's not very well
balanced. At the middle (notched) position it shows:

-   for the left channel: **23.5 kOhm** one side, **24.8 kOhm** the
    other side;
-   for the right channel: **24.98 kOhm** one side, **23.94 kOhm** the
    other side.

So if you are soldering Subjective3 yourself, think twice if it's really
needed to put the "Mid" tone control in. At least, measure it first to
check how well its channels are balanced.

Another thing that was puzzling me since I saw the partial schematics of
Subjective3
[here](https://docs.google.com/document/d/1BfyhLS_QiHZWYvWVe0haBIzKETG079xjho-e0sKz9N8/edit)
is whether it preserves absolute phase. Clearly, the schematics shows
that the filter network is attached to the inverting input of the opamp.
And I've actually checked whether the polarity is preserved by listening
to in-phase stereo pink noise, where left channel was going through
Subjective3, and right channel was connected directly, and there is no
inversion.

[![](https://4.bp.blogspot.com/-BlwElnRoYCs/WpYQ4VEiXzI/AAAAAAAAMTE/Rihgb-UjfdoUsROwQTfzpdrc3hI2s0khwCLcBGAs/s1600/schematics.png)](https://4.bp.blogspot.com/-BlwElnRoYCs/WpYQ4VEiXzI/AAAAAAAAMTE/Rihgb-UjfdoUsROwQTfzpdrc3hI2s0khwCLcBGAs/s1600/schematics.png)

Then I've found an explanation of this fact by examining the board and
finding another stereo opamp there, near the output connectors. So
apparently, it is used to restore the polarity.

[<img src="https://1.bp.blogspot.com/-uDaWuNibu0g/WpYThX9bRHI/AAAAAAAAMTQ/AZ-uL0xa14A9c9V3UaxqBFUiyRJLovWuACLcBGAs/s640/Board-front.png" width="640" height="540" />](https://1.bp.blogspot.com/-uDaWuNibu0g/WpYThX9bRHI/AAAAAAAAMTQ/AZ-uL0xa14A9c9V3UaxqBFUiyRJLovWuACLcBGAs/s1600/Board-front.png)

And yet another thing I've figured out by disassembling my unit is that
ready-made units soldered by JDS Labs employ DC source coupling. As it
can be seen, **C2\_L** and **C2\_R** capacitors are left out, and their
mounting holes are short-circuited. This may be a bit risky if the signal
source is not of a good quality.
