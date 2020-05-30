# BBE 282i Sonic Maximizer Measurements

## The Need for Tone Controls

I'm reading the new edition of awesome [F. Toole's book "Sound
Reproduction."](https://books.google.com/books?id=tJ0uDwAAQBAJ) Here, in
**Chapter 4.4** he grieves for the demise of tone controls on modern
hi-fi preamps. Indeed, I'm recalling domestic vintage radio + turntable
combos my father and his friends had—there always were *"bass"* and
*"treble"* knobs. More expensive systems featured multi-band graphical
equalizers. Definitely, at that era everybody understood that both
program and the reproduction chain are not ideal, and some tonal
correction may be required.

However, the aspiration for a "clean" reproduction path shaved all the
extras off (they contaminate the sound!), and left us only with volume
controls on most of hi-fi units. This would work if all recordings were
perfectly balanced, and our hearing were linear (or we were always
listening at the same reference volume level). But since this is simply
not true, it's often desirable to shave off some extra high frequencies
that were added by the mixing engineer in order to "reveal" the vocals,
but ended up sounding really harsh, or to add some bass when listening
at low volume levels.

## BBE Sonic Maximizer Mystery

I started searching for a desktop unit that would implement just tone
controls, not a full equalizer—they are bulky and require too much
tweaking. But due to the aforementioned "purity" trend in audio
equipment, it's next to impossible to find such an unit. Of course, I
could just implement the tone controls as a DSP plugin, but at least
with Pulse Audio and LADSPA, it's not trivial to add real-time controls
to it. Also, virtual knobs never feel as good as physical ones.

Somehow, I've stumbled upon the family of units jointly called ["BBE
Sonic Maximizer"](http://bbesound.com/products/sonic-maximizers/default.aspx)
featuring just two control knobs—a good sign! However, the labels of the
knobs are quite cryptic: *"Lo Contour"* and *"Process"*, and there was
nothing about "tone control" in the description the unit, but rather
lots of promises in marketing-speak about achieving audio nirvana once this
unit is inserted into recording or reproduction chain. That looked
really suspicious.

Even more suspicious were reviews on different forums (mostly related to
sound recording), where people were either raving about how this unit
improves the sound of recorded drums and makes their sound "punchier",
or advising not to waste money on this unit because it's snake oil. A
lot of [YouTube
videos](https://www.youtube.com/results?search_query=bbe+sonic+maximizer) demonstrate
processing results, and from watching them it seemed like the unit
really adjusts the tone, but then there were always people saying that
it's not a tone control, however they couldn't provide any specific
details.

## Digging into Details

I was looking for any objective measurements of the Maximizer, but
finding none. At last, I've found three manuals: one for an [older 802
unit](http://www.bbesound.com/products/manuals/802_manual.pdf), another
for a [newer 882
unit](http://www.bbesound.com/products/manuals/882_manual.pdf), and
another for the [modern version
882i](http://www.bbesound.com/products/manuals/882i_manual_rev4.pdf).

The manual for 882i is the most useless one—it only says about "envelope
distortion" occurring in speakers that this unit is designed to solve,
provides unit connection schemes, and brief technical specs stating some
distortion figures, and the fact that tone correction happens at
**50 Hz** and **5 kHz**, with maximum attenuation of **+12 dB**.

The term *"envelope distortion"* is equivalent to *"group delay
distortion"* which means adding non-uniform delay to different groups of
frequencies. According to ["Electroacoustics" book by M.
Kleiner](https://books.google.com/books?id=zm_OBQAAQBAJ&lpg=P523&pg=P523#v=onepage&q&f=false),
[horn](https://en.wikipedia.org/wiki/Horn_loudspeaker) and [transmission
line speakers](https://en.wikipedia.org/wiki/Transmission_line_loudspeaker)
are susceptible to noticeable group delays. Seems like the BBE unit can
actually be useful for PA and old studio monitors if you don't have a
DSP processor. But I think modern speakers and especially modern
powered studio monitors have required compensation circuits built-in.

The manual for 802 actually explains what the unit does in terms of
group delay. The audio signal is split into **3** frequency groups by
dividing the spectrum at **150 Hz** and at **1200 Hz**. The LF group is
delayed by **2.5 ms**, the Mid-Frequency (MF) group is delayed by
**0.5 ms**. The HF group is left intact.

As for tone correction, the LF group is simply boosted according to the
"Lo Contour" knob. The amount of HF boosting actually depends both on
the "Process" knob and the RMS level of the MF group. This is the most
intriguing stuff.

Here the manual for 882 comes to help. Very atypically for commercial
electronic products, this manual contains the actual electronic circuit
scheme of the device. It shows that the heart of the 882 is **NJM2153**
chip which also has [a technical
manual](https://www.njr.com/semicon/PDF/NJM2153_E.pdf). Finally, we can
see some graphs!

[<img src="https://4.bp.blogspot.com/-WQTJashOUqs/WlKzRoAJLAI/AAAAAAAAMGQ/FS3DCnmbjxUsLQevGhfaNFeKuDBfene-wCLcBGAs/s400/NJM2153-FR-8b.png" width="400" height="396" />](https://4.bp.blogspot.com/-WQTJashOUqs/WlKzRoAJLAI/AAAAAAAAMGQ/FS3DCnmbjxUsLQevGhfaNFeKuDBfene-wCLcBGAs/s1600/NJM2153-FR-8b.png)

This plot supposedly shows the amount of frequency correction applied
when both "Lo Contour" and "Processing" knobs are at the maximum
position. The LF boost remain constant **+12 dB** regardless of the
input signal level. Whereas the HF boost depends on the input signal
level. Here is another graph, a "cross-section" at **10 kHz**:

[<img src="https://3.bp.blogspot.com/-ULEZab4y7tA/WlK0bmbE2sI/AAAAAAAAMGc/8GccrOBld-8_mCx99eYjb10dS4MQxbFEgCLcBGAs/s400/HF-Gain.png" width="378" height="400" />](https://3.bp.blogspot.com/-ULEZab4y7tA/WlK0bmbE2sI/AAAAAAAAMGc/8GccrOBld-8_mCx99eYjb10dS4MQxbFEgCLcBGAs/s1600/HF-Gain.png)

Interestingly, that the description of the NJM2153 chip doesn't align
well with what the manual for the 802 unit is saying. The chip
description says that the amount of HF boost depends on the overall
input signal level, but the 802 manual states that it depends on the RMS
of the MF group only. Perhaps, this implementation detail was changed
from 802 to 882.

It's also interesting what happens when the "Processing" knob is at the
minimum value—does HF group get attenuated if the input signal level is
low, or maintains the input level? On the EC schematics, the VCA is
controlled from directly from the signal level meter, so it should not
depend on the "Processing" knob. But it's better to check.

## Measurements

I've bought an unbalanced desktop version of the BBE Sonic
Maximizer—[model
282iR](http://bbesound.com/products/sonic-maximizers/282i.aspx). From
scarce technical specs revealed in the manuals, it seems to use the
same processing pipeline as 882 or 882i does, but is made in a different
form factor, and with combined knobs for left and right channels. Also,
as I've said, 282iR uses unbalanced RCA or **3.5 mm** inputs and
outputs, so it has **3 dB** lower output level than 882i which uses
balanced XLR connections.

Since the BBE unit is an analog line-level signals processor, it's quite
trivial to measure it using an ordinary sound card. I was using MOTU
Microbook IIc.

### Group Delay

Let's start with group delay. It remains the same for any input signal
level, and the only parameter that affects it is whether the unit is in
bypass mode:

[<img src="https://4.bp.blogspot.com/-6N4ZYqyfbLI/WlLLx-PhrJI/AAAAAAAAMGs/dDo9krwFHfssgjEZ1YuZUAtDgokO6j98ACLcBGAs/s640/GD.png" width="640" height="266" />](https://4.bp.blogspot.com/-6N4ZYqyfbLI/WlLLx-PhrJI/AAAAAAAAMGs/dDo9krwFHfssgjEZ1YuZUAtDgokO6j98ACLcBGAs/s1600/GD.png)

The bypass mode is the **red** plot, the **green** plot is when
processing is engaged. As we can see, in processing mode the unit indeed
adds **\~2.5 ms** group delay to LF, and **\~0.5 ms** to MF (as an
average value). Thus, the unit adds some GD distortion even when it is in
bypass mode.

### THD

The manual for 282i states **\< 0.1%** at **-10 dBu** input across the
entire **20–20000 Hz** range. That's actually quite a lot (not good). In
fact, it seems to be an order of magnitude better:

[<img src="https://2.bp.blogspot.com/-2W-wUOPIaDI/WlLOIE8J4sI/AAAAAAAAMGw/x_8yt2ZCWdIj_wUPEpy4Igu2ldMBJoSXQCLcBGAs/s640/THD.png" width="640" height="265" />](https://2.bp.blogspot.com/-2W-wUOPIaDI/WlLOIE8J4sI/AAAAAAAAMGw/x_8yt2ZCWdIj_wUPEpy4Igu2ldMBJoSXQCLcBGAs/s1600/THD.png)

This plot shows the 2nd harmonic. The **black** plot is loopback
measurement for Microbook. **Red** is bypass, **green** is processing
mode with both knobs at the minimum setting. As we can see, the level
with processing enables is **\< 0.01%**.

### Channel Balance

Since the 282i unit is designed to process both channels at once, I'm
expecting the unit to maintain the original balance of the input
signal.

As I've checked, in bypass mode the balance is held very much precisely.
Looking at the 882 unit schematic, the bypass mode just directly
connects output to input, so that's what I would expect. In processing
mode, the difference is about **0.1 dB** at **1 kHz**—not too bad, but
could be better.

### Frequency Response

Finally, the most interesting part. Since the FR of the unit changes
with the signal level, I was using Microbook's hardware white noise
generator and was performing a real-time FFT analysis in Room EQ Wizard.
The method was to change the level of the noise, and observe how it
affects the output frequency response. The resulting curves are not that
pretty as obtained from sine sweeps, but still reflect the trends.

As it can be seen from the graph, the frequency response plots at
maximum "Lo contour" and "Processing" knob setting indeed resemble of
those from the NJM2153 chip manual shown above. The level of bass boost
remains unchanged, while the level of HF boost falls down once the sound
level becomes low, thanks to the attenuator controlled by the input
level monitor.

[<img src="https://1.bp.blogspot.com/-WoybqJ5vuMs/WlLd07HHjlI/AAAAAAAAMHI/9ClS81JktnMx4CpFtnxPP3oe8NY04rsZwCLcBGAs/s640/Max-Max.png" width="640" height="340" />](https://1.bp.blogspot.com/-WoybqJ5vuMs/WlLd07HHjlI/AAAAAAAAMHI/9ClS81JktnMx4CpFtnxPP3oe8NY04rsZwCLcBGAs/s1600/Max-Max.png)

With the knobs at the minimum position, the HF range can even be
attenuated for low power signals.

[<img src="https://1.bp.blogspot.com/-0ufpCicraFs/WlLd7YM_e_I/AAAAAAAAMHM/-yV5oatH-FkW7_S9r8wR7NgnvyOuLIkGQCLcBGAs/s640/Min-Min.png" width="640" height="340" />](https://1.bp.blogspot.com/-0ufpCicraFs/WlLd7YM_e_I/AAAAAAAAMHM/-yV5oatH-FkW7_S9r8wR7NgnvyOuLIkGQCLcBGAs/s1600/Min-Min.png)

## Conclusions

Recall that I've encountered the BBE Sonic Maximizer while looking for a
tone controls device. So, can Maximizer be used as a tone control?
Somewhat. It definitely can boost LF or HF, which is good. As for the
opposite direction—cutting, it depends. For bass it's not needed as
often. For treble, I'm curious how the variable attenuation actually
helps. Need to check with actual commercial recordings.

Another thing—the group delay. It's definitely not needed for headphones
because over-ear models anyways use a single driver. Does the group
delay introduced by the unit affect the sound negatively? I will need to
check with wide spectrum transients like drums and percussion.

And some additional distortion that the unit adds when processing is
engaged. Certainly, **0.01%** of 2nd harmonics isn't fatal, but specs of
[Grace SDAC](https://www.massdrop.com/buy/massdrop-x-grace-design-standard-dac)
and [Phonitor Mini](https://spl.info/en/products/headphone-amplifier/phonitor-mini/specifications.html)
feature at least **10x** less distortion. Although, we can say that
those [add some warmth](https://www.soundonsound.com/techniques/analogue-warmth)
to the sound. Again, need to do some listening.
