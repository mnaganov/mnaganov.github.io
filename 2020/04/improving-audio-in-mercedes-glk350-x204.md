# Improving audio in Mercedes GLK350 (X204), Part 2

In [Part 1](/2020/03/improving-audio-in-mercedes-glk350-x204.html)
of this post I explained how I replaced the "basic" speakers with the
ones from Harman-Kardon Logic 7 configuration and studied their behavior
with AudioFrog GSC610C passive crossover. Now it's time to install the
crossover into the car and tune the system.

## Installing the Crossover

Initially I was planning to fit the crossover somewhere inside the
door—affix it to the middle steel panel. However, the panel has turned
out to be quite uneven, to improve its rigidity, I guess—so the
crossover unit couldn't really fit anywhere on it. Then I went with the
plan B—installed the crossover into the door pocket at the bottom of the
door panel (also known as "map pocket"). It took about half of the
space, still leaving room for a water bottle. Learning from the hardware
designers of Mercedes, I used aluminium rivets to mount it.

[<img src="https://1.bp.blogspot.com/-AakfSonUcqY/XopPfADDDkI/AAAAAAAAQp8/6DhiusQdkTEYJLeHrpun0hlKtorSu2u1ACLcBGAsYHQ/s400/crossover-installed.jpg" width="351" height="400" />](https://1.bp.blogspot.com/-AakfSonUcqY/XopPfADDDkI/AAAAAAAAQp8/6DhiusQdkTEYJLeHrpun0hlKtorSu2u1ACLcBGAsYHQ/s1600/crossover-installed.jpg)

Obviously, I had to tap into the wire harness that goes from the cockpit
into the door to insert the crossover. And since I had installed the
crossover into a removable part of the door, I had to enable the
possibility to detach the connecting wires of the crossover. I ended up
with the following arrangement:

[<img src="https://1.bp.blogspot.com/-bmbwb6Q8la0/XopST5MgGxI/AAAAAAAAQqI/feiHYw_GmzQkQUc_WcsZQcbz-Ph8C6cSACLcBGAsYHQ/s640/door-wiring.jpg" width="468" height="640" />](https://1.bp.blogspot.com/-bmbwb6Q8la0/XopST5MgGxI/AAAAAAAAQqI/feiHYw_GmzQkQUc_WcsZQcbz-Ph8C6cSACLcBGAsYHQ/s1600/door-wiring.jpg)

There is a hatch in the door panel which is used to get access to the
electrical wiring of the door without actually removing the former.
There was still some room there so I put a screw terminals block that
joins elongated wires from the door harness with the wires of the
crossover unit. Would anyone need to remove the door panel, they will
need to unscrew the crossover wires first.

## Checking Tweeter Polarity

Now the most interesting part—squeezing the best possible sound from
this configuration. First I decided to check the sound of the door
speaker as a unit. The main problem with car door speakers is that the
drivers are placed very far from each other. Ideally, one would need to
listen to such a speaker from a good distance in order to achieve
"blending" between the tweeter and the woofer. Unfortunately, this isn't
an option in the car. The other problem is that the speaker components
are not equidistant from the listeners' ears. In sophisticated car audio
systems this problem is partially solved by installing a lot of speakers
and tuning the delay of each speaker driver individually. In my case
this wasn't an option though.

One thing I wanted to decide on is the polarity of the tweeter.
Initially I just followed the color codes of the wires, attaching brown
wires to "-" terminals of the crossover. However, this didn't exclude an
option that the tweeter could be wired in reverse polarity at the
factory to achieve better integration of the drivers. In order to check
which polarity works the best, I opened the door and set up a microphone
to be equidistant from the drivers (about **55 cm**).

[<img src="https://1.bp.blogspot.com/-tbk2Kx2tOP4/XopS67XJ5hI/AAAAAAAAQqQ/JNZfvvGLUp4muPqFu__4qt5-vhw1DS--wCLcBGAsYHQ/s640/door-speaker-measurement.jpg" width="640" height="480" />](https://1.bp.blogspot.com/-tbk2Kx2tOP4/XopS67XJ5hI/AAAAAAAAQqQ/JNZfvvGLUp4muPqFu__4qt5-vhw1DS--wCLcBGAsYHQ/s1600/door-speaker-measurement.jpg)

Then I captured the impulse response with the tweeter connected in the
initial wiring and inverted. The frequency response didn't differ
much:

[![](https://1.bp.blogspot.com/-C26-ueTK45g/XoeoyeyR7xI/AAAAAAAAQnI/aDIaN11KTiIDiRLf-27AQV4KZXoZLv4cACLcBGAsYHQ/s1600/Door-FR.png)](https://1.bp.blogspot.com/-C26-ueTK45g/XoeoyeyR7xI/AAAAAAAAQnI/aDIaN11KTiIDiRLf-27AQV4KZXoZLv4cACLcBGAsYHQ/s1600/Door-FR.png)

The response shown is FDW-windowed at **7** cycles to get rid of
surrounding reflections. Note that in both cases there is a huge notch
between **500–600 Hz**. Perhaps, it's caused by some reflection inside
the door—the quarter-length wavelengths involved here are
**17.2–14.3 cm**, and the door isn't fully stuffed with absorbing material,
so this seems to be a natural explanation.

However, the frequency response doesn't tell the full story. Here are
the impulse responses:

[![](https://1.bp.blogspot.com/-2et0XC0mQTo/XoerjQIsQ1I/AAAAAAAAQnU/5NtZhmBVmGgcGrb7PGb3mLulxeUHebejACLcBGAsYHQ/s1600/Door-IR.png)](https://1.bp.blogspot.com/-2et0XC0mQTo/XoerjQIsQ1I/AAAAAAAAQnU/5NtZhmBVmGgcGrb7PGb3mLulxeUHebejACLcBGAsYHQ/s1600/Door-IR.png)

As we can see, they look very much like mirror images of each other, and
the inverted one (**black**) looks more correct to me as it's main peak
goes in the positive direction. So I ended up inverting the tweeter
polarity. I think it's actually the "natural" polarity for the tweeter,
thus it seems that in the "basic" configuration the tweeter polarity was
inverted, and I just restored it back.

## Taming the Rear Door Speakers

As I mentioned in [Part 1](/2020/03/improving-audio-in-mercedes-glk350-x204.html)
of this post, I didn't replace the rear door speakers due to their
peculiar mounting. However, I wanted to find a way to minimize their
negative influence on the sound of the front speakers.

Fortunately, Audio 20 unit has an engineering menu (accessible by
pressing "Hang Up", "1", and "\#" buttons on the keypad simultaneously)
that gives access to the equalizer and low- and high-pass filters for
each door driver individually. I decided to leave to the rear door
drivers the role of low frequency extensions, so I set up for them a low
pass filter to **100 Hz** with a **12 dB / octave** roll-off:

[![](https://1.bp.blogspot.com/-dI_IOp_Lj-A/XopTg0WYGLI/AAAAAAAAQqc/NPYaVcK4a48GvGujHJiBg6FRA9LKMtq9gCLcBGAsYHQ/s1600/rear-door-lp-setting.jpg)](https://1.bp.blogspot.com/-dI_IOp_Lj-A/XopTg0WYGLI/AAAAAAAAQqc/NPYaVcK4a48GvGujHJiBg6FRA9LKMtq9gCLcBGAsYHQ/s1600/rear-door-lp-setting.jpg)

Besides eliminating incoherent sound, this also leaves more current for
the front speaker channels in the power amplifier.

## Aligning Front Door Speakers

While verifying the polarity of the tweeter, I also checked how similar
the resulting door speakers are. They were pretty close, which was good.
However, in the car the speaker setup is highly asymmetric due to the
presence of the steering wheel and the driver's body.

I was thinking for some time how to approach the alignment. I've found
the paper by M. Ziemba ["Test Signals for the Objective and Subjective
Evaluation of Automotive Audio
Systems"](http://www.aes.org/e-lib/browse.cfm?elib=9910) which suggested
the use of a stereo spherical microphone which simulates human head
better than a regular measurement mic or mic array. What I realized is
that a real human head with in-ear microphones constitute an even better
measurement device. Another advantage of using a real human is that we
also perform exact measurement of the actual acoustic crossover formed
by non-coincident door speaker drivers and the driver's body.

Recalling my visit to the [AES Conference on
Headphones](/2019/09/aes-conference-on-headphones-part.html) I
decided to buy [Sennheiser Ambeo
headset](https://en-us.sennheiser.com/in-ear-headphones-3d-audio-ambeo-smart-headset).
I learned that Sennheiser has sunset this product, but I've managed to
find it through 3rd party sellers. Yet another technical obstacle was
that the Ambeo headset was only available for iPhones and thus has a
Lightning connector. Thankfully, Anker has developed a [Lightning-to-USB
adapter](https://www.anker.com/products/variant/usbc-to-lightning-audio-adapter/A8178021)
which explicitly lists the Ambeo headset as one of the supported
products. This allows using this headset with laptops. The Ambeo headset
has turned out to be a very useful audio measurement instrument,
although not free from issues. I plan to do a separate post about it.

Now my strategy was to align the frequency response of the left door
speaker as measured by the left ear microphone with the frequency
response of the right door speaker as measured by the right ear
microphone. I used [Rational Acoustics Smaart
v8](https://www.rationalacoustics.com/smaart/smaart-v8/) in dual-channel
FFT mode to be able to look at the correlation graphs for the measured
transfer functions. Yet another useful feature of Smaart is the ability
to apply gating in the dual-channel mode. Since the car cabin is full of
reflections, it's important to ensure that we are equalizing the direct
sound within the integration period (the first **10 ms** of arrival). I
was using an **8 ms** window in my tuning process.

The tuning was done by manual real-time tweaking of the Audio 20
parametric equalizer. I didn't use REW because it isn't aware of the
correlation between the test signal and the captured audio output and
thus it might attempt to correct areas that are simply not correctable
because the dips are caused by destructive acoustic interference or
other acoustic interaction. Also, by tweaking PEQs manually in real time
I was able to see the changes instantly on the analyzer.

This is what I've got for the left speaker as measured by the microphone
in the left ear vs. the right speaker as measured by the microphone in
the right ear. The levels are matched for the purposes of comparison. In
reality the left channel is about **2 dB** louder due to proximity.

[![](https://1.bp.blogspot.com/-jjTzLcgbJbs/Xoj1LXJniiI/AAAAAAAAQos/HZy0aniEMQ4OiCtnF_nnw8T2SPizjXqdgCLcBGAsYHQ/s1600/Left-vs-Right-tuning.png)](https://1.bp.blogspot.com/-jjTzLcgbJbs/Xoj1LXJniiI/AAAAAAAAQos/HZy0aniEMQ4OiCtnF_nnw8T2SPizjXqdgCLcBGAsYHQ/s1600/Left-vs-Right-tuning.png)

This looks a bit scary, however this really demonstrates how challenging
the car cabins are for accurate sound reproduction. I couldn't make the
region of the left channel from **600 Hz** to **2 kHz** to match the
right channel—it seems that the dip is caused by acoustic interference.
Also note the **5 kHz** dip which is an artifact of measurements with
the Ambeo headset.

I've also made a [moving microphone average
measurement](http://www.aes.org/e-lib/browse.cfm?elib=19477) with both
left and right channels playing, in the area where the driver's head is
(w/o the driver being there, of course) using Beyerdynamic MM-1
microphone with diffuse field calibration profile. Here it is compared
to the [target curve recommended by
AudioFrog](https://www.audiofrog.com/wp-content/uploads/2017/09/Audiofrog-Target-Curve-REW.csv):

[![](https://1.bp.blogspot.com/-nMMl8MM4J-4/XoovGv7HGgI/AAAAAAAAQpc/BuVUEvum2bs0VFTaK5Xh_NaH1CxdhkTBQCLcBGAsYHQ/s1600/MMA-vs-AudioFrog.png)](https://1.bp.blogspot.com/-nMMl8MM4J-4/XoovGv7HGgI/AAAAAAAAQpc/BuVUEvum2bs0VFTaK5Xh_NaH1CxdhkTBQCLcBGAsYHQ/s1600/MMA-vs-AudioFrog.png)

I've got slightly more bass, but this is easily adjustable using the
tone controls. Also, the bass in the car anyway needs a bit of boost
while on the road due to engine and wheels noise. As we can see, there
is no dip at **5 kHz** we've seen on the measurement acquired via the
Ambeo headset. However, there is a wide dip at **500–700 Hz** likely the
same one we've seen on the door measurement, and also a narrower dip at
**2 kHz**. It can also be seen on the door measurement, and it could be
a result of an imperfect crossover overlap. If we recall the measurement
showing the effect of the crossover on the HKL7 drivers:

[![](https://1.bp.blogspot.com/-307Byy5pZBw/Xoowhe7bkSI/AAAAAAAAQpo/v4_VZ6H32JUOE6QVCMtfnaDsy4aqkMYjQCLcBGAsYHQ/s1600/HKL7-Acoustic.png)](https://1.bp.blogspot.com/-307Byy5pZBw/Xoowhe7bkSI/AAAAAAAAQpo/v4_VZ6H32JUOE6QVCMtfnaDsy4aqkMYjQCLcBGAsYHQ/s1600/HKL7-Acoustic.png)

I've set GSC610C to **"-3 dB"** setting to tame the high frequencies
(**yellow** graph) and we can see that it has the fastest decay at the
crossover point, however it's still a bit higher than w/o the crossover
(**green** graph, the topmost in the right part).

## Listening Impressions

I checked my usual "spatial" test tracks:

-   track 28 "Natural stereo imaging" from "Chesky Records Jazz Sampler
    & Audiophile Test Compact Disc, Vol. 3";
-   track 11 "LEDR" from "Chesky Records Jazz Sampler & Audiophile Test
    Compact Disc, Vol. 1"

For sure, the localization is much worse in the car cabin environment
with lots of reflections and asymmetric seating. On the first track,
there was no difference between "left" and "extreme left" (and right)
drum positions, however, the drum running around the listener still
could be imagined well. On the second track, the "going up" sound wasn't
actually moving, but the one making an arc from the left to right
speaker was perceived realistically—to my surprise.

I also checked some musical tracks and compared them to the sound in
Shure SRH1540 headphones matched by volume. The car sound was more
"relaxed" and even had spaciousness, it sounded more "enjoyable" than in
headphones, which sounded more "forward" and a bit brighter.

## Costs

Here is what this upgrade cost me (excluding tools):

-   HKL7 tweeters A2128201002, pair (from a disassembled car): **$30**
-   HKL7 woofers A2048202102, pair (new): **$318**
-   Door trim retainer clip A0009917940, pair: **$5**
-   AudioFrog GSC610C crossover, pair: **$194**

Total: **$547**

## Conclusions

This has turned out to be an interesting and challenging project,
requiring a lot of research (at a hobbyist level). I'm glad that I
started it, and like the result. It's a pity that basic car audio
packages do not sound well. Next time I will be buying a car, I will
definitely look into "premium audio" options.
