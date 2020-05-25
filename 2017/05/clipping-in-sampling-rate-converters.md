# Clipping In Sampling Rate Converters

In my last post, I investigated clipping of intersample peaks that
happen in DACs. But as I had started exploring the entire path of sound
delivery, I discovered that digital sound data can arrive to DAC already
"pre-clipped". And thus even a DAC with headroom will render it with
audible inharmonic distortions.

## Theory

The reason behind this is inevitable sample rate conversion when
sampling rates of the source material and of the DAC do not match.
Unfortunately, this happens quite often because during the evolution of
digital audio multiple sampling rates come into use. The major "base"
sample rates are **44100 Hz** originating from CDs (Red Book Audio
standard), and **48000 Hz** coming from digital video. Plus, there are
whole multiples of those rates: **88200**, **176400**, **96000**,
**192000** etc.

Having this variety, it's not surprising that sampling rate converters are
ubiquitous. Without them it would be impossible to correctly play, say
a **44100 Hz** CD audio via a **48000 Hz** DAC—the source audio will
be rendered with wrong rate and will have incorrect pitch.

But doing the conversion isn't trivial. What sample rate converter has
to do is basically render the sound wave into a mathematical curve, and
then resample the values of this curve using the target sample rate. The
problem that can occur here is that in a sound wave normalized to **0 dBFS**
the points of the target sample rate can overshoot this limit.

For example, below is a graph of a **11025 Hz** sine wave at **45°**
phase shift sampled at **44100 Hz** (blue dots), and sampled
at **48000 Hz** (red dots):

[![](https://3.bp.blogspot.com/-K62t5nQD_Vs/WRjgTAVxnSI/AAAAAAAALcw/Aq-2pLewpO4rnwYP-zayqIh3nO-t57FWgCLcB/s1600/sine-samples.gif)](https://3.bp.blogspot.com/-K62t5nQD_Vs/WRjgTAVxnSI/AAAAAAAALcw/Aq-2pLewpO4rnwYP-zayqIh3nO-t57FWgCLcB/s1600/sine-samples.gif)

As you can see, at the **48 kHz** sampling rate the dots are closer to
each other, and some of the **red** dots have values of above (or below)
the margins of the original **44.1 kHz** sampling rate.

Had the source wave **44.1 kHz** wave been normalized to **0 dBFS**, the
**blue** dots that currently have approximate values of **0.5** and
**-0.5** would be at **1** and **-1**, respectively. Thus, the values of
the **48 kHz** sampling would end up above **1** (or below **-1**).
Which means if the converter is using integer representation for
samples (**16**-bit or **24**-bit), and doesn't provide headroom, it
will not be possible for the converter to render those values, as they
will exceed the limit of the integer. Thus, they will be clipped, and
this will result in a severe distortion of the source wave.

The same thing can happen in a conversion from **48 kHz** down to
**44.1 kHz**, or when upsampling from **48 kHz** to **96** or **192 kHz**.
Basically, any conversion that results in emerging of new sample values
can produce values that exceed the peak value in the source wave. The
only potentially "safe" conversion is when the source wave get
downsampled to a whole multiple, e.g. from **96** to **48 kHz**, because
this operation can be performed by simply throwing out every other
sample.

## Practical Examples

### Google Nexus Player

[<img src="https://4.bp.blogspot.com/-pQD3v_djnEM/WRjoip2rSWI/AAAAAAAALdA/GT7UASFwfTEnC8cW1REP4K3od1TIQklggCEw/s320/nexus-player.jpg" width="320" height="227" />](https://4.bp.blogspot.com/-pQD3v_djnEM/WRjoip2rSWI/AAAAAAAALdA/GT7UASFwfTEnC8cW1REP4K3od1TIQklggCEw/s1600/nexus-player.jpg)

Here am examining sound paths that I have at home. Let's start with
Google Nexus Player. It's a rather old thing, and I don't think it
pretends to be a "Hi-Fi" player, but nevertheless I use it from time to
time, and I would like to see what it does to sound.

This is my setup: the HDMI output from Nexus Player goes into an LG TV,
and it separates audio via TOSLINK connection that goes into [E-MU
0404](http://www.creative.com/emu/products/product.aspx?pid=15185) music
interface, and then to SPL Phonitor Mini. As in the last post, for
measurements I will be using E-MU Tracker Pre card connected to a laptop
on battery power.

I use two sound files for test: one is the same as the last time
(**11025 Hz** sine wave at **45°** phase in a **44.1 kHz** FLAC), and
another is **12 kHz** sine wave at **45°** in a **48 kHz** FLAC. Both
files were uploaded to my Play Music locker. I'm aware that Play Music
uses lossy **320 kbps** MP3 on their servers, but for these simple sine
wave files this generous bitstream is effectively equivalent to
lossless. At least, Play Music doesn't perform any resampling.

Since TVs are designed to be used with video content, their preferred
sampling rate for audio is **48 kHz**. I haven't found any way to change
that setting for my TV. So first in order to test the signal path, I
played the **12 kHz** sine wave file (**48 kHz** SR), and captured it
from the line output of E-MU 0404 also using **48 kHz** sampling rate on
Tracker Pre. The result on the frequency analysis is a beautiful clean
peak at **12 kHz** with no distortions at all:

[<img src="https://1.bp.blogspot.com/--l5ErPhv4dc/WRjGQLlA1iI/AAAAAAAALcc/y48j_MgnXv4ofaNcpdsjnIi9wNCtq7cOgCLcB/s640/fugu-48k.png" width="640" height="484" />](https://1.bp.blogspot.com/--l5ErPhv4dc/WRjGQLlA1iI/AAAAAAAALcc/y48j_MgnXv4ofaNcpdsjnIi9wNCtq7cOgCLcB/s1600/fugu-48k.png)

However, **48 kHz** isn't the typical sampling rate for the content on
Play Music store—since their source is CD content, most of the albums
are using **44.1 kHz** sampling rate. Even YouTube uses **48 kHz**
sampling rate audio as I have discovered (I've checked with VLC
player, it can open YouTube video streams). Not sure about the sampling
rate used in Play Movies, though.

So let's now play the **44.1 kHz** sine wave file using the same setup.
The only change I've made is setting the capturing sampling rate to
**44.1 kHz** on Tracker Pre. And the result is pretty ugly:

[<img src="https://1.bp.blogspot.com/-ZtqOikKai9s/WRjGgoxVl-I/AAAAAAAALcg/QD1h7x9C-4ETvr6I-DM5TNQSzOR9m4jCACLcB/s640/fugu-44k.png" width="640" height="484" />](https://1.bp.blogspot.com/-ZtqOikKai9s/WRjGgoxVl-I/AAAAAAAALcg/QD1h7x9C-4ETvr6I-DM5TNQSzOR9m4jCACLcB/s1600/fugu-44k.png)

If I wasn't really happy about how the frequency analysis looked for
Benchmark DAC1, this one simply made my hair stand. The resampler in
Nexus Player clips severely. What's even worse, there is not much I can
do about that, since there are no controls over digital attenuation or
sampling rate. Too bad. At least now I know why snare drum on
"Gasligting Abbie" by Steely Dan doesn't sound good when played via this
setup.

### Dune HD Smart H1

[<img src="https://4.bp.blogspot.com/-WeCH7lQ-B8w/WRjpcd36eYI/AAAAAAAALdE/igQfuZFKFREMtSQ6EDtuUnlesM5zP_CIwCLcB/s320/dune-hd.jpg" width="320" height="147" />](https://4.bp.blogspot.com/-WeCH7lQ-B8w/WRjpcd36eYI/AAAAAAAALdE/igQfuZFKFREMtSQ6EDtuUnlesM5zP_CIwCLcB/s1600/dune-hd.jpg)

I also have an old Dune HD player connected to the same LG TV. Unlike
Nexus Player, Dune offers a lot of control over playback. It also
supports FLAC format. Again, I started with playing a **12 kHz** sine
wave at **48 kHz** SR just to make sure that the sound path is clean,
and it was all OK.

Then I played a **11025 Hz** sine at **44.1 kHz** SR, and again got a
lot of distortion (although the level of distortion peaks is lower than
on Nexus Player):

[<img src="https://1.bp.blogspot.com/-S3awysmZ4XQ/WRjGrUdXqxI/AAAAAAAALck/824E3GR0SoIDdZHkkvqy-zieaXx0gtMDACLcB/s640/dune-44k.png" width="640" height="484" />](https://1.bp.blogspot.com/-S3awysmZ4XQ/WRjGrUdXqxI/AAAAAAAALck/824E3GR0SoIDdZHkkvqy-zieaXx0gtMDACLcB/s1600/dune-44k.png)

But here at least I can do something to fix that. I can't change the
sampling rate, but Dune offers digital volume control, even in dB scale.
I used it to reduce the volume by **4 dB** down, providing enough
headroom for the resampler, and the result is a beautiful clean
**11025 Hz** peak:

[<img src="https://1.bp.blogspot.com/-WOvvrgNbsJo/WRjG_chI0uI/AAAAAAAALco/OAVU0jfgmG08eKm9aE5zbOi3JHs-IKPEACLcB/s640/dune-44k-_6db.png" width="640" height="484" />](https://1.bp.blogspot.com/-WOvvrgNbsJo/WRjG_chI0uI/AAAAAAAALco/OAVU0jfgmG08eKm9aE5zbOi3JHs-IKPEACLcB/s1600/dune-44k-_6db.png)

Great, now I have much more confidence in my setup.

### PC-based Playback

By PC I mean Macs as well. On desktops and laptops there is a lot more
control over the parameters of the digital audio signal path—it's easy
to change the sampling rate on the DAC to match the sampling rate of the
source material, also the majority of digital players offer digital
attenuation. So there is no problem ensuring that nothing clips the
digital signal on its way to the DAC.

The practical advice here is—if you are not sure about the sampling
rate of the source material, use the digital volume control on the
player to reduce the volume and thus provide some headroom for the
sampling rate converter. Setting volume down to **-4 dB** (or about
**80-85%** if the volume control uses percents) should do the job.

## Conclusion

Sampling rate converters are ubiquitous, and conveniently adapt the
source audio stream to ensure that it will play regardless of the
sampling rate set on the DAC. However, as we have found out, they are
not transparent and can easily clip intersample peaks, thus producing
audible inharmonic distortions.

To avoid that, make sure the sampling rates match between the played
material and the DAC, or at least reduce the digital volume a bit to
offer some headroom for the sampling rate converter.
