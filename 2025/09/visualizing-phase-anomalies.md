# Visualizing Phase Anomalies

In my [unofficial contest of LCR
upmixers](/2025/08/finding-best-stereo-to-lcr-upmixer.html) I encountered
multiple cases where the extracted center channel had audible
anomalies. These could most often be described as "musical noise" or
"underwater gurgling." This kind of artifacts can also be heard when
listening to audio content which had passed through low bitrate lossy
codecs. One of the reasons that these artifacts can occur is that the audio
signal gets processed in the frequency domain, and during the processing
the original phase information has been lost or degraded.

For my experiments, I was using two kinds of signals: pink noise and simple
two instruments music. From the information theory perspective they sit at
the opposite ends of the spectrum: the noise is entirely chaotic and lacks
any meaningful information, while music is highly organized on many
layers, so let's consider these cases separately.

## Pink Noise

One thing that I personally find interesting is realizing how important the
relative phase of various frequency components is. For example, if we look
just at the frequency spectrum of the phantom center signal extracted by
Bertom Phantom Center 2 from uncorrelated stereo pink noise, we will see
that the magnitude spectrum is in fact correct and matches the usual
spectrum of a pink noise (maybe it is not as "smooth", but these are very
minor irregularities):

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgc53hZh4qVeFVHQ5ua17ceKr5i9K0nKcEypmzyGZ0deXvV9KLjk_RG7zxYjvA7-QvtTBMInK0_uWIXAQHfg-ny4PYCJy7aW8Kass6lQIahJur8J6psZjZg6XD3gd40vzyYxVZKb_7xwIcCVd643VibpIMAjqbAbHne2kX4PWCna5ZF_AprO8GWRBky-iC7/w640-h364/pn-original-vs-bertom.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgc53hZh4qVeFVHQ5ua17ceKr5i9K0nKcEypmzyGZ0deXvV9KLjk_RG7zxYjvA7-QvtTBMInK0_uWIXAQHfg-ny4PYCJy7aW8Kass6lQIahJur8J6psZjZg6XD3gd40vzyYxVZKb_7xwIcCVd643VibpIMAjqbAbHne2kX4PWCna5ZF_AprO8GWRBky-iC7/s700/pn-original-vs-bertom.png)

Yet, an untrained ear can easily hear that this signal doesn't sound like
"clean" pink noise and has many artifacts:

[Phantom center extracted by "Bertom Phantom Center 2"](Demo-UncorrI_Bertom2.wav).

So all the issues are actually due to the phase component. But how to
understand what is exactly wrong with it? I'm a "visual" person, so I like
looking at graphs. However, the phase of audio signals is challenging to
visualize. On its own, it's not nearly as intuitive as the magnitude
spectrum. In fact, the visualization of the phase of real world signals is
even less intuitive than the time domain (waveform) view.

In the particular case of the noise, the phase must be random, basically
like the noise itself:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjOQ_DsRCFvtckiEgim1OMbw-zbl-CIpDsymnMkQjo0NZDFqnB3CL8gzHoSj3yg4ID23KEPfBPZgWDqMo7BJA-3JWuSRpiTuLGao_S0DA0LFJki06P-aLK7deFB2yW3RgGNEQOlz9VyMhaslSh_5ByPC7DI_id8HW1kOUt5fcqtkZckJlfaZXr6gBv17dL/w640-h358/pn-phase.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjOQ_DsRCFvtckiEgim1OMbw-zbl-CIpDsymnMkQjo0NZDFqnB3CL8gzHoSj3yg4ID23KEPfBPZgWDqMo7BJA-3JWuSRpiTuLGao_S0DA0LFJki06P-aLK7deFB2yW3RgGNEQOlz9VyMhaslSh_5ByPC7DI_id8HW1kOUt5fcqtkZckJlfaZXr6gBv17dL/s700/pn-phase.png)

So if we look at the raw view phase of a "proper" pink noise and try to
compare it with the phase of pink noise that has artifacts, we will not be
able to see much of a difference. Getting to a visualization that works
requires some understanding and creativity.

We can ask ourselves—what is the nature the artifacts that we are
observing?  That's actually the product of our hearing system which
automatically tries to find patterns—repeating fragments—in any information
it receives. This is normal because all the important sounds that we need
to hear: voices, noises from other creatures, and the sounds of nature also
have patterns in them. In a "clean" pink noise everything is very much
shuffled and the hearing system is unable to detect any patterns so it just
perceives it as "noise" (note since we can name it using only one word, the
entire "noise" phenomenon actually is just another sound pattern!).

Since it is possible to generate an infinite amount of correctly sounding
versions of pink noise—we can just run the random numbers generator over
and over again—presence of artifacts does not mean that we have "deviated"
from some perfect condition of the phase of the noise signal. Instead, it
simply means that the artifacts are some periodic structures created due to
corrupted phase information. Because of that, one way of trying to
visualize these artifacts is to use some algorithm which is looking for
repeating information. One example of such algorithm is [the pitch
detector](https://en.wikipedia.org/wiki/Pitch_detection_algorithm).
Fortunately, Audacity includes one, and it indeed shows something for the
pink noise with artifacts. Check below:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiglzkQ8kMCzTLsvNXOgJd-hCJj8mnq0tG7jgzLbq7JFPTgnlY8bAK3psNTQJU_60qBqhgqvw1dzwYTKVt40NxNOB6Sd5B33-yCYwx619JMI1pJGnC0q1k_LEp4uPn4Si5ZnW1J1GCAbmU5wQ_gbavYInaPxd5_dtw80M6_jaFTzWCio91kY_P0kgX_TV2R/w450-h640/pink-noise-pitch.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiglzkQ8kMCzTLsvNXOgJd-hCJj8mnq0tG7jgzLbq7JFPTgnlY8bAK3psNTQJU_60qBqhgqvw1dzwYTKVt40NxNOB6Sd5B33-yCYwx619JMI1pJGnC0q1k_LEp4uPn4Si5ZnW1J1GCAbmU5wQ_gbavYInaPxd5_dtw80M6_jaFTzWCio91kY_P0kgX_TV2R/s1024/pink-noise-pitch.png)

On the top is the result of pitch spectrogram applied to a clean pink
noise, under it there are spectrograms of the noise extracted by Bertom
Phantom Center 2, UM225 in mode 6, and Dolby Surround algorithms. We can
see that the clean pink noise only shows some patterns at low frequencies,
and these actually are just processing artifacts (I've seen patterns at low
frequencies when examining a pure **1 kHz** sinusoid). But!—the noise with
actual audible artifacts shows some patterns in the region of
**500–3500 Hz** where the human ear is very sensitive, and that's what our
ear is hearing.

## A Bit More on Phase

So I mentioned above that the phase is very non-intuitive, but I also
mentioned that the phase is actually very important for proper signal
reconstruction. I would like to expand and illustrate these ideas a bit
more before we proceed to musical signals analysis.

First of all, let's separate cases of impulse responses and usual musical
signals. I'm bringing up impulse responses here because probably most often
you could have seen phase graps in audio analysis tools like Room EQ Wizard
(REW). You probably know that the value of the phase, since it's an angle
of a periodic function normally only goes from **-180°** to **180°** and
wraps there. For impulse responses, the continuity of the phase between
adjacent FFT bins is very important. That's why phase views always include
an "unwrap" function, which lines up an otherwise "jumpy" phase into a
continuous line.

However, for usual musical signals phase unwrapping rarely makes any sense
because transitions between FFT bins do not have to produce a continuous
phase. Take the case of the noise for example—here the bins change
completely independent from one another, and that's why trying to "unwrap"
phase of a noise will not produce any meaningful visualization.

Yet, in signals that have some structure, for example, in musical
signals—there actually exist very important relationship between phases of
groups of bins, but not necessarily ajacent ones. If you recall, the FFT
decomposes the source signal into a set of orthogonal sinusoids. Now, if we
imagine adding these sinusoids in order to get our original signal back, we
can realize that relative phases of sinusoids are very important for
creating various shapes of the signal in the time domain. For example,
let's consider a pulse which has the initial strong transient part. In
order to create that part from a set of sinusoids, their phases must be
aligned so that their peaks mostly coincide. As I explained in an [older
post](/2023/06/on-midside-equalization.html), the result of summing of
sinusoids with similar amplitudes greatly depends on their relative
phases. When phases are aligned, two sinusoids can produce a signal with at
most **+6 dB** boost, but if their phases are in an inverse relation, then
they can cancel each other completely instead.

Below is an illustration how set of sinusoids forms a pulse signal when
summed:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgO_eXKMCrSOaDJ1xNUV3Mm1mB9-oUK7PggqXzHy7v1ek-n8HD6NdkrvSIe_EIcjN-_RUN3KR4HNQu0t3t0LbLtcpUZEpeWphyphenhyphenRhH0HcUmd9rVdQZneSvBPwmEeZGxKydoo6tZagwV2hLpZYXNLr4mDCAhJOO94bvu7jrPc7WRGzd35vIstQvyErzBJc2fN/w418-h640/top10-reconstruction-td.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgO_eXKMCrSOaDJ1xNUV3Mm1mB9-oUK7PggqXzHy7v1ek-n8HD6NdkrvSIe_EIcjN-_RUN3KR4HNQu0t3t0LbLtcpUZEpeWphyphenhyphenRhH0HcUmd9rVdQZneSvBPwmEeZGxKydoo6tZagwV2hLpZYXNLr4mDCAhJOO94bvu7jrPc7WRGzd35vIstQvyErzBJc2fN/s1039/top10-reconstruction-td.png)

In this picture, we see the time domain view of the original signal—it has
the base frequency of **128 Hz**, and the first 9 sinusoids (these
contribute the most of the signal's energy) below it. We can also see the
waveform which we get by summing these 9 sinusoids. It's not quite the
original signal yet, but it close enough already. If we kept adding the
sinusoids specified by the remaining FFT bins, we would eventually
reconstruct the source signal. It's interesting to see that the amplitudes
of the basis sinusoids are quite small (**0.02** absolute value, or less),
yet they manage to create a peak which reaches almost **0.4**—**20** times
larger (!)—on the positive side and lower than **-0.4** on the negative
side. In order to be able to achieve this magnification it's very important
to maintain alignment between their phases!

The problem is that the alignment itself is not possible to see with a
"naked eye", as easy as, for example, we can see a fundamental and its
harmonics on a magnitude graph. Phase alignment is much more "technical",
in a sense that the values of phases are relative to the phase of the
corresponding basis sinusoid at the sample `0`, and the change with a
different speed depending on the bin frequency. If we look at the usual
frequency domain graphs: the magniture and the phase, the phase part is
not very "illustrative":

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7LF1yOQHXOhVnCb0LQqQOimWsKSOssnNGidNDKdYRvcUbKeft4Z7QpbS5tJHKEOKtUwCS5xNMiCJf7ib8py0VLyEKvlnEgdosI8syFVbBVTrDd5_FMbExY2MarxdbEp-n1CtmH8dvMabbD-HbWNXMGy87_wqj0I3FNqKElW2WjBIL1R7KiL0dSgfZ8oZN/w406-h640/top10-reconstruction-fd.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7LF1yOQHXOhVnCb0LQqQOimWsKSOssnNGidNDKdYRvcUbKeft4Z7QpbS5tJHKEOKtUwCS5xNMiCJf7ib8py0VLyEKvlnEgdosI8syFVbBVTrDd5_FMbExY2MarxdbEp-n1CtmH8dvMabbD-HbWNXMGy87_wqj0I3FNqKElW2WjBIL1R7KiL0dSgfZ8oZN/s1084/top10-reconstruction-fd.png)

As an another example, on the series of graphs below I'm shifting the pulse
forward in time. Since its shape is obviously preserved, the
**relationship** between the phases remains the same because the shape of
the signal is not changing, yet the values of phases are "jumping" around
with no obvious pattern:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiC5rgBVP1eWJyBeBNfj7ZkvRaHqOJwZNrLZa7ovJuRPZXebYVxhFs8RcnW_0_1hOoX-2cqJP8JKoTZ5seZu0KS8Sr6-2nSMsqU_l3pg7rC0ot5fjvw92zZeWyeliioLPVv6QRWqFBy8eierrx-QfagfeowtQZN3tKWNTp3z8sUwM42LDHyjRaNbjmiZioW/w547-h640/circular-td-shift.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiC5rgBVP1eWJyBeBNfj7ZkvRaHqOJwZNrLZa7ovJuRPZXebYVxhFs8RcnW_0_1hOoX-2cqJP8JKoTZ5seZu0KS8Sr6-2nSMsqU_l3pg7rC0ot5fjvw92zZeWyeliioLPVv6QRWqFBy8eierrx-QfagfeowtQZN3tKWNTp3z8sUwM42LDHyjRaNbjmiZioW/s945/circular-td-shift.png)

On the other hand, if we try to "play" with phase values we can easily
disrupt the phase alignment, and the pulse starts to "smear" or even
changes its shape completely. In the examples below, I have tried several
things: adding random shifts to the phases—this makes the signal "jittery,"
replacing all phase values with zeroes—this got me a completely different
signal, fully symmetric, and finally, I created a "minimum phase" version
of the signal by making sure that it has the most energy in the beginning,
like an acoustic pulse:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiE0c71QodDCFxfLjDvqXrNq-L1AsnODJsz-NYKDVUF9N9XfBQueUu0AtUcpCEZPOGpoG_wLn_7Meh_gVE_8PwMCr51qBjfENzp34-oqcUWjkdwXbrD7yv4_UiFZr2w0wcqVw2pw9WUqXH4juWlTfKMyRMtXlcUx2zOADHpXa79T_Ml2CQL7D1elS3eH74d/w550-h640/phase-manipulations.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiE0c71QodDCFxfLjDvqXrNq-L1AsnODJsz-NYKDVUF9N9XfBQueUu0AtUcpCEZPOGpoG_wLn_7Meh_gVE_8PwMCr51qBjfENzp34-oqcUWjkdwXbrD7yv4_UiFZr2w0wcqVw2pw9WUqXH4juWlTfKMyRMtXlcUx2zOADHpXa79T_Ml2CQL7D1elS3eH74d/s937/phase-manipulations.png)

So, the phase of the signal is really-really important. But if looking at
the raw phase graph does not really help us in detecting disruptions of the
phase information, what should we use then? The answer is that we should
use various derivatives of a spectrogram that take the phase information
into account. A "classical" spectrogram only shows the magnitude, which, as
we can see, means that we are throwing away half of the information about
the signal. But some types of spectrograms incorporate phase information
into the picture.  For example, below is the "classical" spectrogram of the
signals from the last example:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEUWULl6-8A5GQLegO21c1pyH76_My2oKvaCzAS0JxKRHKJNfRsjs-kVaS6AiWO2qDFa6nY5GpCQZAZBFyKEoFKMjF5TCBFxJCJt_V283GH5jvZuVol8qeEJo_vePY4wFoQEpfDMoSVG0pBjTRCNKfYgCxM-fvOmcSFmmkIs3R_sj1gqQK-pzr31pPhhQk/w640-h458/phase-degradations-spectrogram.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEUWULl6-8A5GQLegO21c1pyH76_My2oKvaCzAS0JxKRHKJNfRsjs-kVaS6AiWO2qDFa6nY5GpCQZAZBFyKEoFKMjF5TCBFxJCJt_V283GH5jvZuVol8qeEJo_vePY4wFoQEpfDMoSVG0pBjTRCNKfYgCxM-fvOmcSFmmkIs3R_sj1gqQK-pzr31pPhhQk/s1129/phase-degradations-spectrogram.png)

We can see the main problem of this visualization—the spectrogram view
loses the information about the exact moment when the pulse happens. But if
we use a ["reassigned"
spectrogram](https://en.wikipedia.org/wiki/Reassignment_method), then the
frequency-domain view becomes much sharper in the cases when the phase
information is consistent. But "mangled" (randomly shifted) phase also
produces a blurry image even on a reassigned spectrogram:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6BB1VT6ok6TMavB05pu9GqXDV1xjLhiexyr7A-cMInR2GYVvuMGRjy-eQ7i_lSCh1m8gj3Py36xdfAKchYPlA01gkYEXeXqJL7SSsdEMI-1Wz7i1CDdKVy3oCPjow4k4FnZgH8n4_A3vyJc2OZbxsANDA5F2BhK6gAFg-b2S4IEPJHd__XDVY4Li7jLl-/w640-h446/phase-degradations-reassigned.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6BB1VT6ok6TMavB05pu9GqXDV1xjLhiexyr7A-cMInR2GYVvuMGRjy-eQ7i_lSCh1m8gj3Py36xdfAKchYPlA01gkYEXeXqJL7SSsdEMI-1Wz7i1CDdKVy3oCPjow4k4FnZgH8n4_A3vyJc2OZbxsANDA5F2BhK6gAFg-b2S4IEPJHd__XDVY4Li7jLl-/s1155/phase-degradations-reassigned.png)

Now we have some clues, let's looks at our music signals.

## Music Signals

With the uncorrelated pink noise signal, we were in a strange situation
where a "reference" extracted center signal did not exist because in theory
there is no correlation between the channels and thus there no "correlated
phantom center" to extract. We could only compare the extracted center
channel with some "theoretical" pink noise, and look at presence of
patterns. However, in the case of music signals I do have the "source of
truth"—the signals that I had used to create my mix.

However, another consideration that we need to take into account is that
none of the upmixers I tested, except "AOM Stereo Imager D," was able to
separate the center instrument from the side instrument cleanly. In other
words, the extracted center, instead of containing only the "centered"
instrument (the guitar) also had a mix in of the saxophone sound (which was
panned hard left). Similarly, the left channel also had the saxopone with a
mixed in sound of the guitar. For example, comparing the original clean
saxophone (bottom) with the processed version (top), we can see that new
harmonics have been mixed into the original signal:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbCqZ0fuUjiofi4eWQnztPvqNAzHiJ9gYGVixzUDhOhSBb_Rl0EUuFakPEtfDsxHuwrvA3Xonf_tjuWtXlUvXttAMrwkHROuzDYvPtSCDqPgkiDAIZVgl91NgTKG68jICnxzV8_FSj0Rhnkm0aTVkkJc7njLy7YmH8OuQSYutRg2ETDNmwhHD7ekgZugea/w554-h640/sax-reassigned.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbCqZ0fuUjiofi4eWQnztPvqNAzHiJ9gYGVixzUDhOhSBb_Rl0EUuFakPEtfDsxHuwrvA3Xonf_tjuWtXlUvXttAMrwkHROuzDYvPtSCDqPgkiDAIZVgl91NgTKG68jICnxzV8_FSj0Rhnkm0aTVkkJc7njLy7YmH8OuQSYutRg2ETDNmwhHD7ekgZugea/s856/sax-reassigned.png)

If we look at the extracted center channel (which contains the guitar),
we actually can see some blurriness of transients compared (at the top)
compared to the original clean signal (at the bottom):

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0gtMXBo68HgM1PTXPGsBILE9cad7R2HIM9leI2c5eHlDvWS1gK6ocOK75yDHBDMPkgQw1AdEdAm0d2F_C2199JV-UUzIG4kOWu6Y_B3HJeM47VMbmcAOJNOuYcsBtVGs9qZc-DOM7EltSuaKuQ7LMqwbCsa-2AbaqnoDhRRiOp1P9fWa9ea-pdBoW3KOR/w568-h640/guitar-extracted-reassigned.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0gtMXBo68HgM1PTXPGsBILE9cad7R2HIM9leI2c5eHlDvWS1gK6ocOK75yDHBDMPkgQw1AdEdAm0d2F_C2199JV-UUzIG4kOWu6Y_B3HJeM47VMbmcAOJNOuYcsBtVGs9qZc-DOM7EltSuaKuQ7LMqwbCsa-2AbaqnoDhRRiOp1P9fWa9ea-pdBoW3KOR/s856/guitar-extracted-reassigned.png)

That indicates that the phase of the extracted signal is not as good as it
was in the original signal. Even more drastic is phase mangling in the
right channel which in the source stereo did not contain any hard panned
instrument tracks, and only carried the equivalent with the left channel
part of the centered instrument. After extracting it, in the ideal case the
right channel should become empty, but instead it contained a very poor
sounding mix of both instruments, although at very low volume.  For
comparison purposes, I have normalized its level with other channels.  From
looking at the reassinged spectrogram we can see a lot of blurriness so
there is no surprise that it sounds pretty artificial:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjHcw13VVLJBb868NWsaiG7bVdFOeUI_fKUdalbfo8OQyh0rpL4OCw476jX3OJGxSRmD83rIoJwNqXDplnFNbWbhsZdWWGKgZePuUM2_9OJyEo69bpSnoG5hHKrQFHD9g7KIjGrBC1_59kHVUkU8jFqmmCwlMNUdM7u8W642ZMVprGpYxqj2u2GnXmfQ8B/w546-h640/guitar-reassigned.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjHcw13VVLJBb868NWsaiG7bVdFOeUI_fKUdalbfo8OQyh0rpL4OCw476jX3OJGxSRmD83rIoJwNqXDplnFNbWbhsZdWWGKgZePuUM2_9OJyEo69bpSnoG5hHKrQFHD9g7KIjGrBC1_59kHVUkU8jFqmmCwlMNUdM7u8W642ZMVprGpYxqj2u2GnXmfQ8B/s853/guitar-reassigned.png)

[Loudness-normalized right channel](Demo-Music_Bertom2.wav)

## Conclusions

Looking at how hard it is actually to separate stereo signal into
components, I'm amazed with the capabilities of our hearing system that can
do it so well. Of course, the extraction techniques based on such low level
parameters as cross-correlation can't achieve the same result because they
do not "understand" the underlying source signals. Source separation (or
stems separation) using neural networks trained on clean samples of various
types of musical instruments and speech can produce much better results,
especially if the reconstruction is able create natural phase—annotations
to some of the tools often mention that.

As for my initial task of finding a visual representation for phase issues,
I don't think I have fully succeeded. So far, I've only found
representations that can illustrate a problem after it has been detected by
ear. But I wouldn't rely on these visualizations alone, without listening,
for judging the quality of any algorithm.
