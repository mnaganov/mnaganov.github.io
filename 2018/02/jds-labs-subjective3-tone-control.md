# JDS Labs Subjective3 Tone Control

I know, JDS Labs themselves call it ["3 Band
EQ"](http://blog.jdslabs.com/2018/02/welcome-subjective3-a-three-band-eq/),
but I think it's more appropriate to consider it as a good old
traditional tone control. There is nothing bad in having tone controls,
in fact I've already been looking for one—I've even fitted BBE's Sonic
Maximizer into its role, although it's missing attenuation capabilities,
so I was very glad to learn that there is a real tone control
available.

The first thing I've tried using Subjective3 was to tame excessive high
frequencies in Beyerdynamic T90 headphones, and add a bit of bass to
them, and it worked out great! Here are the knob positions I've ended up
with for that:

[<img src="https://1.bp.blogspot.com/-zuLCiUGk65Y/WpMHfhnkRaI/AAAAAAAAMQU/zaD2c3_3tJszWnisaXde3VxuYpo6YTWLwCLcBGAs/s400/for-t90.png" width="400" height="108" />](https://1.bp.blogspot.com/-zuLCiUGk65Y/WpMHfhnkRaI/AAAAAAAAMQU/zaD2c3_3tJszWnisaXde3VxuYpo6YTWLwCLcBGAs/s1600/for-t90.png)

And here is the resulting frequency response—it's what we can call a
"tilt":

[![](https://4.bp.blogspot.com/-UlG12-FGa-4/WpMJr8sy0yI/AAAAAAAAMQg/FOnuIaHLBTcyvh8G7rfikf4rAX6r6gNwgCLcBGAs/s1600/For-T90-FR.png)](https://4.bp.blogspot.com/-UlG12-FGa-4/WpMJr8sy0yI/AAAAAAAAMQg/FOnuIaHLBTcyvh8G7rfikf4rAX6r6gNwgCLcBGAs/s1600/For-T90-FR.png)

Then I did some exploratory measurements of the device to check how
transparent it is. My general worry was that there are phase shifts, or
extra group delay, or distortions. But it turns out that the device is
pretty nicely engineered.

So let's see. First I've checked the bypass mode, then engaged mode with
all the controls set to neutral position. The only graph where I saw any
changes was THD:

[![](https://1.bp.blogspot.com/-VCzgbai0eGc/WpMLgRxEswI/AAAAAAAAMQw/RmP5hKquFcABJsH-6I50FAioYTk0c5WKQCLcBGAs/s1600/THD-Bypass-Neutral.png)](https://1.bp.blogspot.com/-VCzgbai0eGc/WpMLgRxEswI/AAAAAAAAMQw/RmP5hKquFcABJsH-6I50FAioYTk0c5WKQCLcBGAs/s1600/THD-Bypass-Neutral.png)

Here, the bolder plots are the 2nd harmonics level, and the thinner
plots are the 3rd harmonics.

Then I've started twisting the knobs to their minimum and maximum
positions. In fact, JDS Labs have already shown the frequency responses,
but no information about phase behavior and harmonics. So I've checked
what happens if all knobs are turned to maximum—in fact, nothing bad,
assuming that the input of the headphone amplifier doesn't overload,
because Subjective3 adds about **20 dB** of gain! But on the other hand,
it does not add any significant harmonics or phase shifts. So it's all
quite good.

One thing where I've encountered subpar performance was channel balance.
The first problem was, after I've played with the knobs it has turned
out to be impossible to bring them back to neutral positions.
Subjective3 employs Alps knobs, and they have a center notch that can be
felt physically. But this center position isn't a true neutral! Below
are measurements from two positions of the knobs that were at the
"neutral", super close to each other, yet they are both not truly flat,
and employ a difference of **\>0.2 dB**!

[![](https://3.bp.blogspot.com/-KGU7Bd4JtSg/WpNgtCXAyyI/AAAAAAAAMRc/t86CB-ENbushzAiFwUdXnByD0SBBBMcggCLcBGAs/s1600/Mid-Uncertainty.png)](https://3.bp.blogspot.com/-KGU7Bd4JtSg/WpNgtCXAyyI/AAAAAAAAMRc/t86CB-ENbushzAiFwUdXnByD0SBBBMcggCLcBGAs/s1600/Mid-Uncertainty.png)

So, that was left channel. After I've measured the right channel, I've
become even more sad, because the right channel had its own deviation
(remember, that's at the same knob setting!):

[![](https://1.bp.blogspot.com/-YEcoczgIQCk/WpNfHJTmGMI/AAAAAAAAMRQ/1IxaU7iLuMsJM7pLucuswdu1uo_gnbGDACLcBGAs/s1600/Channel-Balance.png)](https://1.bp.blogspot.com/-YEcoczgIQCk/WpNfHJTmGMI/AAAAAAAAMRQ/1IxaU7iLuMsJM7pLucuswdu1uo_gnbGDACLcBGAs/s1600/Channel-Balance.png)

And as we can see, the inter-channel difference is **\>0.1 dB**. That's
a lot! I think, I will unsolder the "Mids" knob because it doesn't seem
to be really needed, and it affects frequency balance in the region
where the ear is very sensitive. I will also check if it's possible to
balance the channels better.

Other than that, I've found no problems with this device. One thing I
would also like to note is that the frequency response shapes in
Subjective3 are after Baxandall, with no plateau typical for shelving
filters. Bob Katz explains why Baxandall's sloped shape is great for
tone equalization compared to the plateau of shelving filters:

> We notice \[by ear\] the sloped portion of the curve more than the
> flat portion at the frequency extremes, since the flat portion becomes a
> sort of reference for the ears, even though both extremes are boosted
> entirely above the midrange

*Bob Katz "Mastering Audio", third edition.*

Concluding, I would say this little unit is a must for all day listening
at desktop, because it easily allows to adjust the sound to your
personal preferences. The alternatives I'm aware of are:

-   Software digital EQ—not always applicable, also missing nice feeling
    of real knobs; although, digial EQ can be made really transparent,
    can use linear phase filters, and is super precise;
-   [BBE Sonic
    Maximizer](/2018/01/bbe-282i-sonic-maximizer-measurements.html)—lacks
    attenuation side, acts as an expander for highs, adds harmonics;
-   [RME ADI 2
    Pro](http://www.rme-audio.de/en/products/adi_2-pro.php)—that's a
    DAC/DSP/Headphone amp package with lots of capabilities, including
    tone controls, EQ, and loudness contours, really nice but not cheap;
-   [Dangerous Music Bax
    EQ](http://dangerousmusic.com/product/bax-eq/)—this is a mastering
    equalizer employing Baxandall tone curves and adjustable frequency
    ranges, superb quality, but the cost is really high.

So I think, in terms of price / quality ratio Subjective3 has its sweet
spot. Hopefully, I will be able to improve it even further.
