# On Headphone Normalization

## What is Headphone Normalization

The world of headphones is a jungle. There are thousands of headphone
models on the market, each with its own sound signature. Every aspect of
headphone build affects the sound. A lot of headphone makers also come
up with their own "sound style", e.g. having lots of bass, or a "bright"
sound, or neutral "studio reference" signature which is preserved along
the model range.

Several factors comprise the sound signature: frequency response, added
distortions, degree of matching between left and right drivers. Unlike
the world of loudspeaker makers, which is moving towards the acceptance
that the speaker frequency response should be a smooth slope downwards
from low to high frequencies, the world of headphone manufacturers is
still struggling to figure out the standard for the frequency response
curve. The main reason for that is the fact that unlike the sound from
loudspeakers, the sound emitted by headphones bypasses several "body
filters" on its way to the eardrum.

The sound that we hear from outside sources partially reflects from the
shoulders, and receives significant coloration from the outer ear. Thus,
a sound from a loudspeaker with ideally flat frequency response being
heard in an acoustically treated room is actually far from "flat" when
picked up by the eardrum.

[![](https://1.bp.blogspot.com/-9O3bf3UrL5E/Wjn-k0vxijI/AAAAAAAAMEo/c4Lk27mfwh4czkiMUahLf9dyyageLvXtwCLcBGAs/s1600/iems.png)](https://1.bp.blogspot.com/-9O3bf3UrL5E/Wjn-k0vxijI/AAAAAAAAMEo/c4Lk27mfwh4czkiMUahLf9dyyageLvXtwCLcBGAs/s1600/iems.png)

Now if we take in-ear monitor headphones that are inserted directly into
the ear canal and radiate sound directly to the eardrum, and make their
frequency response flat, what would be perceived by the listener is a
sound with strongly attenuated vocals (because our outer ears do a great
job of amplifying sound in the frequency range of vocals), not appealing
at all. It had been understood that in-ear monitors thus need to have a
frequency response curve that employs filtering applied by the shoulders
and by the outer ear.

With over-ear headphones the situation is even more complicated because
although they bypass the shoulders "filter", they still interact with
the outer ear of the listener.

So it's universally been understood by the headphone manufacturers that
headphones must have non-linear frequency response in order to sound
pleasing, but there is still no universal agreement on the exact shape
of the frequency response. Also, since most of the headphones are
passive devices with no electronics inside, the target frequency
response is determined by their physical make. Sometimes it can be
challenging to achieve the desired frequency response by just tweaking
materials and their shapes, and in cheaper headphone models the
resulting frequency response is usually a compromise.

Here is where DSP normalization comes in. Since we listen to headphones
via digital devices, we can put a processing stage before feeding the
sound to the headphones in order to overcome the deficiencies of the
headphones build, or to override manufacturer's preferred "signature."

I'm aware of two software packages that do such kind of processing:
[Morphit plugin by
Toneboosters](https://www.toneboosters.com/tb_morphit_v1.html), and
["Reference" package from
Sonarworks](https://www.sonarworks.com/reference). In this article I'm
using Morphit because its functionality allows for more educational
explanations.

## Normalization with Morphit by Toneboosters

Morphit is built as an audio processing plugin, so by itself it can't be
applied systemwide. And it is not available on Linux. I was
experimenting with it on a Mac by adding it to Audacity and applying it
as a filter to sine sweeps.

The task of Morphit is to apply a frequency response correction curve
that changes the sound signature of certain headphone model into
something else. For this, two things must be known: the frequency
response of the headphones being corrected, and the target frequency
response.

Morphit has three modes of operation: **"Correct"**, **"Simulate"**, and
**"Custom"**. The last mode is the most adjustable—it allows to specify
the source frequency response, the target response, and additional
correction of up to **4** parametric EQ filters. **"Simulate"** mode is
the same, but lacks the EQ filters. **"Correct"** mode is the simplest
one—it sets the target frequency response to **"Generic studio
reference"**. I will be using **"Custom"** mode as the most robust
one.

On the UI, Morphit shows the correction curve, not the target. But it's
easy to see the target curve as well—we need is to set the source EQ
curve to flat, and the corresponding setting is called **"Generic flat
eardrum"**. So, here is how we can see what **"Generic studio speaker"**
target setting looks like:

[![](https://1.bp.blogspot.com/-4jXpom1MI9o/Wjb3Yln39FI/AAAAAAAAMDQ/mAdRPanJNBAuYjOkNzP4n8rIv38HkpoVgCLcBGAs/s1600/Viewing-target-curve.png)](https://1.bp.blogspot.com/-4jXpom1MI9o/Wjb3Yln39FI/AAAAAAAAMDQ/mAdRPanJNBAuYjOkNzP4n8rIv38HkpoVgCLcBGAs/s1600/Viewing-target-curve.png)

The only problem with the Morphit's UI is that it lacks any grids and an
ability to overlay the graphs. Fortunately, we can do that in
FuzzMeasure by importing the processed test signals. Here is what we get
for **"Generic studio reference"**, **"Generic HiFi"**, and **"Generic
studio speaker"**:

[![](https://4.bp.blogspot.com/-g47MhlM-tjc/WjcB7l13pYI/AAAAAAAAMDg/A1u9sKsREWAMt1KzFLIwehCDbhBQJKvgQCLcBGAs/s1600/Morphit-Curves.png)](https://4.bp.blogspot.com/-g47MhlM-tjc/WjcB7l13pYI/AAAAAAAAMDg/A1u9sKsREWAMt1KzFLIwehCDbhBQJKvgQCLcBGAs/s1600/Morphit-Curves.png)

The curves certainly have some similarities: low frequencies stand out
above the middle range, there is a prominent peak at about **3 kHz**,
and after it the high frequencies start to roll off. These
characteristics resemble what is known as "Harman Target Response for
Headphones", and it is thoroughly dissected by the headphone expert Tyll
Hertsens
[here](https://www.innerfidelity.com/content/headphone-measurements-explained-frequency-response-part-two).
I would like to compare the attenuation values between the curves of the
Harman TR, and the ones on the graph. Note that in Tyll's article the
level at **200 Hz** has been chosen as the **0 dB** reference point, and
for comparison I had offset Morphit's curves to the same level.

|**Freq**   |Eardrum |**Harman** |Stud Spk|   HiFi  |**Stud** **Ref**|
|----------:|-------:|----------:|-------:|--------:|---------------:|
|  **60 Hz**|   0 dB |  **+4 dB**| +4.2 dB| +3.6 dB |   **+0.9 dB**  |
| **200 Hz**|   0 dB |   **0 dB**|    0 dB|    0 dB |      **0 dB**  |
|**1.2 kHz**|  +3 dB |  **+3 dB**| +2.9 dB| +1.7 dB |   **+0.7 dB**  |
|  **3 kHz**| +15 dB | **+12 dB**|+11.9 dB| +9.9 dB |   **+8.5 dB**  |
| **10 kHz**|  +5 dB |   **0 dB**| +2.1 dB| +1.3 dB |   **+2.8 dB**  |
| **18 kHz**|  -7 dB | **-13 dB**|   -9 dB| -0.3 dB |   **-8.5 dB**  |

As we can see, the **"Studio Speaker"** setting of Morphit is pretty
close to the Harman Headphone Target curve, but the bass on the
**"Studio Speaker"** starts to roll off after about **38 Hz**.

In his article, Tyll suggests some refinements to the Harman curve:

-   flattening the rise from **200 Hz** to **1.2 kHz**;
-   lowering the peak at **3 kHz**;
-   adding a peak near **10 kHz** that naturally occurs due to ear canal
    resonance.

As it can be seen, those are very similar to the differences that we can
see between the **"Studio Speaker"** and **"Studio Reference"** curves.
Plus, the **"Studio Reference"** curve offers a flat LF line from about
**110 Hz** and below and shifts the main peak a bit to the left: from
**3.1 kHz** to **3.3 kHz**. The **"HiFi"** setting sits somewhere in
between, and doesn't have the sharp rolloff at HF.

### Subjective Evaluation

I performed blind testing using Shure SRH1540 headphones comparing the
**"Studio Speaker"** and **"Studio Reference"** settings, and the latter
was sounding better on most of the test tracks. The only drawback is
that on some tracks the amplification of the **6–12 kHz** region can
sound too bright, adding harshness to "s" and "t" sounds. This can be
heard very well on tracks *"Little Wing"* by Valerie Joyce and on *"Hung
Up"* by Madonna. This is the same drawback that I experienced when
listening to MBQuart 400 and Beyerdynamic T90 headphones. But with other
track this brightness is usually well perceived by myself.

### Note on the Implementation

I haven't found an explicit confirmation, but it seems that Morphit uses
a recursive (IIR) filter. First, the plugin has only about **3 ms**
latency and second, the phase profile of processed waves is the same as
in recursive filters that I've built myself in order to replicate
Morphit's curves.

## Do All Normalized Headphones Sound the Same?

I would not be expecting that despite that we are equalizing the
frequency response of several headphones to the same target response. As
I've mentioned in the very beginning, there are more additional
parameters that define the "sounding" of particular headphones. One is
the level of distortions that headphone's drivers introduce—they can
change timbres of instruments by adding extra harmonics. Another is how
well the drivers are balanced—this affects imaging.

As a simple experiment, I took **3** different headphone models: AKG
K240 Studio, Sennheiser HD6xx (Massdrop version of HD650), and Shure
SRH1540, then normalized some samples of commercial recordings to the
same target curve for each of the headphones, and listened through.

The tonal balance has indeed been aligned. For example, K240 initially
being very neutral, after normalization also started displaying
excessive brightness of Madonna's *"Hung Up"* For all headphone models, the
vocals have become much clearer.

But despite this sameness, I could still hear the individual
characteristics of these headphones. K240's comparatively narrow
soundstage didn't change. SRH1540 were still showing somewhat stronger
bass than two other models due to closed earcups, and so on.

So there is no magic in normalization, it can't make bad headphones
sound like the best ones, but it can be useful in situations where it is
needed to remove the sound colorations added by the manufacturer to
express a certain "sound signature".
