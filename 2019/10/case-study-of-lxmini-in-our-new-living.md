# Case Study of LXmini in Our New Living Room

This summer we moved into a new rented house and finally I got some time
to set up LXmini in this new environment. I've learned a lot while doing
this and hope that sharing this experience could be useful for other
people.

Initially I was planning to recreate my old 4.1 surround setup with two
pairs of LXminis as front and surround speakers + KRK 10s subwoofer
(only for LFE channel). However, I tried watching a couple of movies on
a temporary stereo setup of LXminis and decided that stereo image they
create is immersive enough and I don't want to complicate the setup with
another pair.

The challenges I faced while getting the stereo setup right were
different from what I had in our old apartment. First, we have bought a
tall wide console for the computer and XBox, and I learned that the
console creates strong reflections if speakers are put too close to it.
On the other hand if I set the speakers further from the console, they
get either too close to the couch or to the side wall. Second, this
time I decided to use the subwoofer as a low frequency extension for
LXminis but didn't want to compromise their excellent output.

## Minimizing Reflections

This is a schematic drawing of the room. Note that the ceiling is quite
high and sloped. This reduces vertical room modes significantly. The bad
news is that the listening space is asymmetric and narrow. Below are
views from the top and from the side, all lengths are in meters:

[![](https://1.bp.blogspot.com/-2DYMJq6gQk4/XZgeTw4JdFI/AAAAAAAAO2Y/_N2_AAfFDx8mtDL81ZZFlmH2zNQWGnk7ACLcBGAsYHQ/s1600/Room.png)](https://1.bp.blogspot.com/-2DYMJq6gQk4/XZgeTw4JdFI/AAAAAAAAO2Y/_N2_AAfFDx8mtDL81ZZFlmH2zNQWGnk7ACLcBGAsYHQ/s1600/Room.png)

Blue circles represent the positions of the speakers in my temporary
setup. The orange circles is the final setup. I've spent some time
looking for the best placement and used a number of "spatially
challenging" test tracks:

-   tom-tom drum naturally panned around (track 28 "Natural stereo
    imaging" from "Chesky Records Jazz Sampler & Audiophile Test Compact
    Disc, Vol. 3");
-   LEDR test—HRTF-processed rattle sound (track 11 "LEDR" from "Chesky
    Records Jazz Sampler & Audiophile Test Compact Disc, Vol. 1");
-   phantom center test files from [Linkwitz Lab
    page](http://www.linkwitzlab.com/Loudspeaker-Room/phantom_center.htm).

When the speakers were placed too close to the console, LEDR was
sounding smeared and so were the phantom center tests. ETC curves were
also showing some strong early (\< **6 ms**) reflections:

[![](https://1.bp.blogspot.com/-_QCVceudwms/XZgkAgWgN4I/AAAAAAAAO2o/wwa_pFAdyxcqDXFhG7ywB2woS8MjI2YIwCLcBGAsYHQ/s1600/ETC%2BInitial%2Bposition%2BL.png)](https://1.bp.blogspot.com/-_QCVceudwms/XZgkAgWgN4I/AAAAAAAAO2o/wwa_pFAdyxcqDXFhG7ywB2woS8MjI2YIwCLcBGAsYHQ/s1600/ETC%2BInitial%2Bposition%2BL.png)

[![](https://1.bp.blogspot.com/-YyVP7uCFIX4/XZgkFatZsLI/AAAAAAAAO2s/5WqbBLVBR9g0xKh6fwcw8BKRI3fOYJsBwCLcBGAsYHQ/s1600/ETC%2BInitial%2Bposition%2BR.png)](https://1.bp.blogspot.com/-YyVP7uCFIX4/XZgkFatZsLI/AAAAAAAAO2s/5WqbBLVBR9g0xKh6fwcw8BKRI3fOYJsBwCLcBGAsYHQ/s1600/ETC%2BInitial%2Bposition%2BR.png)

I moved the speakers further from the console and placed them wider, so
they didn't get too close to the couch. Though, the right speaker was
now too close to the right wall. Fortunately, the reflections from the
wall can be defeated by rotating the speaker appropriately. The hint
that I've read in [the notes of S.
Linkwitz](http://www.linkwitzlab.com/listening_room.htm) was to put a
mirror to the wall and ensure that from the listening position I see the
speaker from the side. Since LXmini is a dipole speaker there is a null
at the side, thus the most harmful reflection from the nearby wall is
minimized. We can see that on the ETC graphs from the new position (the
graphs from the initial position are blended in for comparison):

[![](https://1.bp.blogspot.com/-77jgPdEOdic/XZl54SMKnlI/AAAAAAAAO3M/3XTXFHr6pbMF3kuu4jmCVQ_W3z_JCUtngCLcBGAsYHQ/s1600/ETC%2Bcomparison%2BL.png)](https://1.bp.blogspot.com/-77jgPdEOdic/XZl54SMKnlI/AAAAAAAAO3M/3XTXFHr6pbMF3kuu4jmCVQ_W3z_JCUtngCLcBGAsYHQ/s1600/ETC%2Bcomparison%2BL.png)

[![](https://1.bp.blogspot.com/-hyqmZoD3HLM/XZl5-JEFAOI/AAAAAAAAO3Q/njhYeQFcoGkgbAzMUQ79E9yZkyyHqJZogCLcBGAsYHQ/s1600/ETC%2Bcomparison%2BR.png)](https://1.bp.blogspot.com/-hyqmZoD3HLM/XZl5-JEFAOI/AAAAAAAAO3Q/njhYeQFcoGkgbAzMUQ79E9yZkyyHqJZogCLcBGAsYHQ/s1600/ETC%2Bcomparison%2BR.png)

For the left speaker, instead of the two reflections above **-20 dB**
within the first **6 ms** there is now one of a bit lesser power. For
the right speaker, the overall level of reflections arriving during the
first **6 ms** are significantly reduced, and its ETC graph resembles
more the ETC of the left speaker.

Playing the test tracks has also confirmed the improvement—now I can
feel the rattle sound in LEDR moving in vertical and front-back
directions clearly. Also, by avoiding creating strong reflections for
the right speaker, I've made it essentially equal to more "spacious"
left speaker placement, thus the asymmetry of the listening space
doesn't matter anymore. However, the resulting "aggressive" toeing in of
the right speaker has narrowed the listening "sweet spot". Apparently,
it's not easy to achieve a perfect setup under real life conditions.

## Equalizing Speakers

From my previous measurements I knew that the quality of the speaker
drivers used in LXminis make them well matched. However, my initial
measurements has shown some discrepancy which I wanted to correct:

[![](https://1.bp.blogspot.com/-Ox3kYCLCboE/XZpYGpKLY8I/AAAAAAAAO3o/8jh4fy_IpogxuH2gCuwGdmemOf8gmVf4wCLcBGAsYHQ/s1600/Before%2Bcorrection.png)](https://1.bp.blogspot.com/-Ox3kYCLCboE/XZpYGpKLY8I/AAAAAAAAO3o/8jh4fy_IpogxuH2gCuwGdmemOf8gmVf4wCLcBGAsYHQ/s1600/Before%2Bcorrection.png)

I'm not a fan of excessive equalization—I believe that our brains are a
much more powerful computers than our audio analyzers. But adding a
couple of filters to correct for speaker placement seems reasonable
here. In this case, I reduced the amplitude of one of the notch filters
in LXmini equalization and added a couple more filters:

[![](https://1.bp.blogspot.com/-1raBLTrad5M/XZpY1xLgcYI/AAAAAAAAO30/aej1BtTzArQyte9E0rCdN7i25Yh-bM6NgCLcBGAsYHQ/s1600/After%2Bcorrection.png)](https://1.bp.blogspot.com/-1raBLTrad5M/XZpY1xLgcYI/AAAAAAAAO30/aej1BtTzArQyte9E0rCdN7i25Yh-bM6NgCLcBGAsYHQ/s1600/After%2Bcorrection.png)

Note that I didn't do anything below **50 Hz** because I plan to use the
subwoofer with the crossover frequency at **45 Hz**.

Then I adjusted KRK 10s to inhibit its output in the range of
**30–60 Hz** to "boost" its output at **20 Hz**. Here I used filters
suggested by Room EQ Wizard for the listening position:

[![](https://1.bp.blogspot.com/-BSiQsmPPMJE/XZpXgfFR4NI/AAAAAAAAO3g/kfd4S_62uDYpChE449JwqHwLqMetGD0GwCLcBGAsYHQ/s1600/Subwoofer.png)](https://1.bp.blogspot.com/-BSiQsmPPMJE/XZpXgfFR4NI/AAAAAAAAO3g/kfd4S_62uDYpChE449JwqHwLqMetGD0GwCLcBGAsYHQ/s1600/Subwoofer.png)

## Subwoofer Alignment in Time Domain

This was the most challenging part. I connected subwoofer using a
cascaded miniDSP 2x4 HD in the following way:

[![](https://1.bp.blogspot.com/-5mEbw43yJTs/XZqX8HZxklI/AAAAAAAAO4s/ng7HU0RkxB0hUfaqsUskI0G4unA2-a5-QCLcBGAsYHQ/s1600/Cascaded%2BminiDSP.png)](https://1.bp.blogspot.com/-5mEbw43yJTs/XZqX8HZxklI/AAAAAAAAO4s/ng7HU0RkxB0hUfaqsUskI0G4unA2-a5-QCLcBGAsYHQ/s1600/Cascaded%2BminiDSP.png)

Additional processing delay, phase shifts, and asymmetric positioning
together create a framework which is challenging to analyze. Instead, I
decided to apply the approach suggested by the author of Acourate
software Dr. Ulrich Brüggemann. The procedure consists of the following
steps:

1.  Capture the impulse response of the main speaker using
    Acourate **without** the subwoofer.
2.  Capture the impulse response of **high-passed** main speaker
    **plus** the subwoofer. The high frequency part of the response
    allows Acourate to align these IRs in time.
3.  Convolve both impulse responses with a sine wave from the
    overlapping region.
4.  By comparing the mutual offsets of the resulting sine waves in the
    initial transient moment and during sustained period deduce time
    delay and possibly phase inversion.

As I've learned from my experience, aligning based on a single frequency
in the Step **3** may not provide the best results as at low frequencies
the phase and the group delay of speakers may fluctuate severely. So
instead of using a single sine wave I used a log sweep range in the bass
region. This doesn't provide data for aligning initial transients, but
for bass frequencies I think the sustained stage is much more
important.

Here is how convolutions with a log sweep from **40** to **100 Hz** were
looking initially for the left and right speaker:

[![](https://1.bp.blogspot.com/-73LgJKHFYv4/XZqPBvCWF1I/AAAAAAAAO4Y/82UeTnGSdu0YtLwbEP_r2it6dP8LgF52wCLcBGAsYHQ/s1600/Alignment%2BL.png)](https://1.bp.blogspot.com/-73LgJKHFYv4/XZqPBvCWF1I/AAAAAAAAO4Y/82UeTnGSdu0YtLwbEP_r2it6dP8LgF52wCLcBGAsYHQ/s1600/Alignment%2BL.png)

[![](https://1.bp.blogspot.com/-312Ft_25hHM/XZqPtKsbyHI/AAAAAAAAO4g/D7R_GObUhVc4Tmg3DEX-tLBTgoRfLjhrACLcBGAsYHQ/s1600/Alignment%2BR.png)](https://1.bp.blogspot.com/-312Ft_25hHM/XZqPtKsbyHI/AAAAAAAAO4g/D7R_GObUhVc4Tmg3DEX-tLBTgoRfLjhrACLcBGAsYHQ/s1600/Alignment%2BR.png)

The left graph is mostly aligned, while the right one shows a delay of
the main speaker for **2.5 ms**. It can be seen that even on the left
speaker, the alignment in the low bass region is poorer than at higher
frequencies. I don't consider that to be a problem because there the
contribution of LXminis is negligible. It's much more important to time
align the region where both the sub and the LXminis can be heard
together. It's also easy to see that if we attempt to use the crossover
frequency (**45 Hz**) as the anchor point for time alignment, the
speakers would be out of phase for higher frequencies which will result
in "sagged" frequency response.

To avoid compromising the alignment of the left speaker, I decided to
delay the sub for **1.25 ms** which improves alignment for the right
speaker, but doesn't degrade it too much for the left one. Below are the
graphs of LXminis filtered with Linkwitz-Riley 24 dB/oct crossover at
**45 Hz** and with added subwoofer:

[![](https://1.bp.blogspot.com/-tuCoaIyepdM/XZqL33DxfkI/AAAAAAAAO4M/6Wr3XYiGtjgmz2HdH9GJV2Wl3JpusR-RgCLcBGAsYHQ/s1600/LXmini%252BSubwoofer.png)](https://1.bp.blogspot.com/-tuCoaIyepdM/XZqL33DxfkI/AAAAAAAAO4M/6Wr3XYiGtjgmz2HdH9GJV2Wl3JpusR-RgCLcBGAsYHQ/s1600/LXmini%252BSubwoofer.png)

Definitely we can see extended bass range. You can also feel it :) I
think, setting the crossover point low allows to get the maximum
fidelity from the LXminis + subwoofer combination.

With all this laborious setup done, it's time to enjoy music!
