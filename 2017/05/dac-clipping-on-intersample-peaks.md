# DAC Clipping on Intersample Peaks

The article ["Intersample Overs in CD
Recordings"](https://benchmarkmedia.com/blogs/application_notes/intersample-overs-in-cd-recordings) on
Benchmark Media raises interesting topics of intersample peaks, and DAC
headroom. In short, this is what the article states:

-   **16-bit** **44.1 kHz** digital samples can be interpolated to
    achieve signal-to-noise ratio equivalent of **20-bit** systems,
    and modern DAC chips are capable of that;
-   but these chips don't provide digital headroom, and intersample
    peaks, when they occur, get clipped, producing audible non-harmonic
    distortions.
-   Benchmark DAC1 is susceptible to this problem, whereas in DAC2 and
    DAC3 this issue was addressed by introducing a design involving
    using an external interpolator, and driving DAC chips at **-3.5 dB**.
-   Maintaining headroom in DAC is important because in audio recordings
    normalized to **0 dBFS** intersample peaks can easily occur.

So I decided to test the DACs I use on the subject of headroom, and also
figure out what can be done to address the clipping problem without
resolving to buying DAC2 or DAC3 converters.

Let's take some measurements. I don't have Audio Precision, so I was
taking my measurements using an old trusty [E-MU Tracker
Pre](http://www.creative.com/emu/products/product.aspx?pid=17511)
connected to a notebook on battery power. In
[Audacity](http://www.audacityteam.org/) I created a **16-bit 44.1 kHz**
sound file containing **11025 Hz** sine wave phase shifted to **45°**
and normalized to **0 dBFS**.

## Creating Test Sample

BTW, generating this sine wave is not as straightforward as it may seem.
The **"Generate Tone"** Audacity function unfortunately doesn't allow
specifying the phase. The workaround is to use very powerful by not so
straightforward **"Nyquist Prompt"** effect instead.

First, generate **10** seconds of silence (it will become selected
automatically). Then in **"Effect"** menu choose **"Nyquist Prompt"**,
enter the following, and press **"OK"**:

```
(osc (hz-to-step 11025) 10 *table* 45))
```

This will replace the silence with a **11025 Hz** sine wave
phase-shifted to **45°**. Afterwards, normalize it to **0 dBFS** by
choosing **"Effect \> Normalize"** and entering **"0.0 dB"** as the
target value. The result should look like the left channel on the
screenshot below (with **"View \> Show clipping"** option enabled):

[![](https://2.bp.blogspot.com/-lhhguwe4EoY/WQ9oIqnt7SI/AAAAAAAALbE/Pj4phpn1BqcAyTEK8mj9TiskdtIVoerWwCLcB/s1600/sine-show-clippings.png)](https://2.bp.blogspot.com/-lhhguwe4EoY/WQ9oIqnt7SI/AAAAAAAALbE/Pj4phpn1BqcAyTEK8mj9TiskdtIVoerWwCLcB/s1600/sine-show-clippings.png)

The left channel represents the sine wave normalized to **0 dBFS**, the
right channel shows the same wave normalized to **-6 dBFS**. Note that
Audacity doesn't render sine wave images, like Adobe Audition does,
instead it just connects the dots representing sample values.

The red bars on the left channel warn us that these samples will
overshoot **0 dBFS** when rendered by DAC—that's because the "hat" of
the rendered analog sine wave will connect these dots and thus will end
up above the maximum value that can be represented using integer
values.

Let's look at this sine wave in the frequency domain (**"Analyze \> Plot
Spectrum"** in Audacity):

[![](https://4.bp.blogspot.com/-mJCUs9LhGeM/WQ9pgK6X3_I/AAAAAAAALbQ/sxZPxCZV7ys1-5ZZZkbwMJFAdmL0qhA4wCLcB/s1600/sine-freq.png)](https://4.bp.blogspot.com/-mJCUs9LhGeM/WQ9pgK6X3_I/AAAAAAAALbQ/sxZPxCZV7ys1-5ZZZkbwMJFAdmL0qhA4wCLcB/s1600/sine-freq.png)

I have changed the default settings of the analysis panel to use
Blackman-Harris window and **4096** FFT buckets. This provides the most
accurate result for the sine wave. As you can see, the panel shows that
the peak of the sine wave is at **+3.0 dBFS**.

## Tests

For each of the DACs I tested I was using the following sequence of
steps:

1.  Load the test signal wave into VLC audio player, ensure that its
    volume is set to **100%** (unity). Also check the OS sound level, it
    needs to be at **100%** as well.
2.  Connect the outputs of the DAC to the inputs of E-MU, and play the
    sample several times in order to set up input sensitivity on E-MU at
    the maximum level right before it starts to clip—this is to
    maximize signal-to-noise ratio at the input end.
3.  Now record the signal, check in Audacity that the input isn't shown
    as clipped, so if there was clipping it could only happen at the
    output DAC, not at the input ADC.
4.  Check the frequency domain to see if there are any extra frequencies
    in the recorded signal besides **11025 Hz**. The presence of extra
    frequencies mean that the DAC has clipped output and produced
    inharmonic distortions.
5.  If the DAC is clipping, check whether reducing volume at the player
    or at the OS level helps to get rid of distortions.

I started with Benchmark DAC1 since it is known that it doesn't provide
headroom and will clip. And indeed it does:

[![](https://2.bp.blogspot.com/-NVEsF7fIwvg/WQ9sXw8VflI/AAAAAAAALbc/82lb-IUNp6U95I1-g-f8YBUcRQbBA-v6ACLcB/s1600/benchmark-freq.png)](https://2.bp.blogspot.com/-NVEsF7fIwvg/WQ9sXw8VflI/AAAAAAAALbc/82lb-IUNp6U95I1-g-f8YBUcRQbBA-v6ACLcB/s1600/benchmark-freq.png)

Note that E-MU's input sensitivity is not as good as of the Audio
Precision frontend used by Benchmark Media for their post, so we don't
see the noisy spikes below **-90 dBFS**, but the presence of extra
spikes around the input signal frequency confirms that we indeed can
detect whether the DAC clips by using this technique.

The next thing I tested was Objective DAC of JDS Labs make. It has
turned out to be producing even harsher distortions:

[![](https://2.bp.blogspot.com/-qXsQnrxcGUM/WQ9tJUDXIUI/AAAAAAAALbg/gqtiXhofOrAAbUnMi470IJBM_RGU11aVwCLcB/s1600/odac-freq.png)](https://2.bp.blogspot.com/-qXsQnrxcGUM/WQ9tJUDXIUI/AAAAAAAALbg/gqtiXhofOrAAbUnMi470IJBM_RGU11aVwCLcB/s1600/odac-freq.png)

It was also interesting to find out that due to enormous distortions,
the resulting **0 dBFS** wave on the left channel was produced at lower
level than quieter but having enough headroom **-6 dBFS** wave on the
right channel. That's clearly a disaster.

### Do all DACs clip?

Indeed, the results were a bit disappointing—the "audiophile grade"
DACs are not very good at dealing with normalized CD recordings. Also,
the following statement from the Benchmark Media's post seems to be
leaving no hope:

> *Every D/A chip and SRC chip that we have tested here at Benchmark has
> an intersample clipping problem! To the best of our knowledge, no chip
> manufacturer has adequately addressed this problem. For this reason,
> virtually every audio device on the market has an intersample overload
> problem. This problem is most noticeable when playing 44.1 kHz sample
> rates.*

I started testing the other DACs I had lying around:

-   [Mayflower Electronics Desktop Objective 2 + ODAC
    combo](https://www.mayflowerelectronics.com/shop/digital-to-analog-converters/desktop-objective2-with-odac/)
    via headphone output;
-   [MOTU UltraLite AVB](http://motu.com/products/avb/ultralite-avb) via
    line output;
-   E-MU Tracker Pre line output;
-   MacBook Air (13-inch, Mid 2011) line output.

And to my surprise, I found that none of them has the audible clipping
problem! Look at the frequency analysis for MB Air (the only one among
the listed that has shown any IHD at all):

[![](https://4.bp.blogspot.com/-71txQGHoglo/WQ9vjK-sD-I/AAAAAAAALbw/n1pEguh4p-0asB9agaCZ9RZjOHaYpkoxwCLcB/s1600/mbair-freq.png)](https://4.bp.blogspot.com/-71txQGHoglo/WQ9vjK-sD-I/AAAAAAAALbw/n1pEguh4p-0asB9agaCZ9RZjOHaYpkoxwCLcB/s1600/mbair-freq.png)

There are very minor (I would say, inaudible) spikes from IHD, but it
looks much cleaner than the results of Benchmark DAC1!

The music production oriented sound interfaces (E-MU and MOTU) actually
have no oversample clipping at all—they provide enough headroom. I
guess most of the music pros oriented devices do, since during recording
and mixing quite loud transients can be produced, and these devices need
to handle them.

A bit surprising was the absence of clipping on the another version of
Objective DAC (the Mayflower version). I don't have a good enough
explanation for that except that the versions of ODAC they use are
different:

-   the JDS Labs one uses "UAC1 DAC" (the old revision of ODAC);
-   Mayflower uses "ODAC-revB" (the newer revision, see [this post by
    JDS Labs](http://blog.jdslabs.com/?p=1003)).

But JDS Labs never mention that "revB" has added headroom, and in fact
acknowledge that performance of the DAC at **0 dBFS** level is slightly
worse than at lower levels. So, still a mystery to me.

## Workarounds

But what if you have a DAC that is subjective to clipping, like
Benchmark DAC1 or an old version of ODAC? What I tried to do is first to
reduce the output volume level on the VLC player—this reduction happens
in the digital domain, and then, as a separate experiment—on the DAC
itself using OS volume control provided by DAC as part of the USB Audio
standard.

Not surprisingly, scaling the peaks below **0 dBFS** by reducing the
volume level at the player gets rid of distortions.

What's more surprising is that for ODAC reducing the volume level
with OS volume controls (I've set them to **-6 dB**) also remedies the
clipping. That was something new for me since my understanding was that
USB Audio volume control would apply to the analog wave that comes out
from the DAC chip. But it turns out that at least for ODAC, the chip
itself scales down the input digital signal before processing it.

Benchmark DAC1 doesn't provide external volume control via USB Audio
protocol, and the volume knob that it has applies the volume control in
the analog domain to the signal that has left the DAC chip (already
clipped), so it's not helping. The only option to avoid clipping with
DAC1 is to use the volume control at the music player.

## Conclusions

First of all, big kudos to Benchmark Media for raising awareness about
the facts that DACs can clip intersample overs, and that a lot of music
recordings actually have them.

But then I would like to steer away from their (not explicit but
assumed) conclusion that you should only buy their DAC2 and DAC3
products if you want to avoid the clipping problem. In fact, using pro
sound interfaces may be an answer, as well as simply reducing the output
volume level. Just don't hesitate to test the resulting signals
yourself.

## UPDATE

After reading some docs on ODAC / O2 interconnection I have discovered
that line out of my ODAC revB is accessible via the "line in" jack on
O2's front panel (so it's actually a dual purpose jack—it can serve
either as line input for O2 amp or as line output for ODAC—wicked
smart!). And I have repeated my measurements on intersample clipping.
Nothing changed however—the result look the same as the one recorded
via O2's headphone output—no IMD distortions.
