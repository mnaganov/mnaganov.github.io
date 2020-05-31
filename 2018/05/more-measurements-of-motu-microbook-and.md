# More Measurements of MOTU Microbook and Millet's Soundcard Interface

I've got some progress playing with ARTA and harnessing Windows:

1.  Figured out how to operate the Microbook on Windows at **96 kHz**
    sampling rate—just use ASIO drivers instead of WDM. I guess, that's
    actually MOTU's fault—their WDM driver only allows selecting
    **96 kHz** mode for playback, but not for recording.
2.  Learned about averaging option in ARTA when doing spectrum analysis
    measurements—it helps to "thin out" plotting of the noise level. On
    the graphs from the previous post the noise level was depicted
    rather thick making it harder to get the figure in dB.
3.  Learned about "two channel mode" for frequency
    response measurements. In this mode one channel is used as a
    "reference", and this allows "subtracting" the transfer function of
    the sound card while measuring the frequency response of the device
    under test through the second channel of the card.
4.  And the frequency response can be measured even better with
    STEPS—another program from the ARTA package that uses modulated sine
    signals instead of periodic noise (although, this measurement takes
    substantially more time.)

I tried following the measurement procedures of NwAvGuy in his posts
about [audio
interfaces](http://nwavguy.blogspot.com/2011/02/behringer-uca202-review.html)
and [headphone
amplifiers](http://nwavguy.blogspot.com/2011/03/fiio-e5-headphone-amp.html).
He used Prism dScope, and it's interesting to compare its capabilities
with the ones of my hobbyist tools.

## MOTU Microbook IIc Loopback

Once again, I retested the loopback between Microbook's unbalanced line
output and balanced line in. I used this combination because the devices
that I plan to test have unbalanced (RCA) inputs, hence unbalanced line
out needs to be used. While Millet's Soundcard Interface has balanced
connections to the sound card. So the output needs to be unbalanced, and
the input balanced.

Another reason is that the balanced line input has more headroom, and
it's impossible to overload it while driving from the unbalanced out.

### THD

I started with THD. It can be measured with ARTA and STEPS. With ARTA,
it's only possible to test one frequency at a time. Here are
measurements at **0 dBFS** for **20 Hz**, **1 kHz**, and **20 kHz**. All
the measurements were done with **96 kHz** sampling rate:

[<img src="https://2.bp.blogspot.com/-FjOosYMrTF8/Wuk7OQBGnhI/AAAAAAAAMfI/5S9ucKUv7EQz69wA8D9EIPMwdT8nVbiCACLcBGAs/s400/MOTU%2BLine%2BU%2Bto%2BLine%2BB%2B20%2BHz%2B0%2BdBFS%2BTHD.png" width="400" height="277" />](https://2.bp.blogspot.com/-FjOosYMrTF8/Wuk7OQBGnhI/AAAAAAAAMfI/5S9ucKUv7EQz69wA8D9EIPMwdT8nVbiCACLcBGAs/s1600/MOTU%2BLine%2BU%2Bto%2BLine%2BB%2B20%2BHz%2B0%2BdBFS%2BTHD.png)

[<img src="https://4.bp.blogspot.com/-dPbPjUyjx4g/Wuk7OCSSdEI/AAAAAAAAMfA/BgwSbbdXB1AdHxJK6GM3l19VCovnBBJvwCEwYBhgL/s400/MOTU%2BLine%2BU%2Bto%2BLine%2BB%2B1000%2BHz%2B0%2BdBFS%2BTHD.png" width="400" height="277" />](https://4.bp.blogspot.com/-dPbPjUyjx4g/Wuk7OCSSdEI/AAAAAAAAMfA/BgwSbbdXB1AdHxJK6GM3l19VCovnBBJvwCEwYBhgL/s1600/MOTU%2BLine%2BU%2Bto%2BLine%2BB%2B1000%2BHz%2B0%2BdBFS%2BTHD.png)

[<img src="https://2.bp.blogspot.com/-soXunm-YQYY/Wuk7OdZVEpI/AAAAAAAAMfE/hmAE8UXnAAQKX0i1ce_tbXK04-7L2QG3ACEwYBhgL/s400/MOTU%2BLine%2BU%2Bto%2BLine%2BB%2B20000%2BHz%2B0%2BdBFS%2BTHD.png" width="400" height="277" />](https://2.bp.blogspot.com/-soXunm-YQYY/Wuk7OdZVEpI/AAAAAAAAMfE/hmAE8UXnAAQKX0i1ce_tbXK04-7L2QG3ACEwYBhgL/s1600/MOTU%2BLine%2BU%2Bto%2BLine%2BB%2B20000%2BHz%2B0%2BdBFS%2BTHD.png)

As I mentioned above, I started using averaging as it thins down the
noise plot, so we can see the noise floor more clearly.

The balanced input has **10 dB** of headroom, so any distortion products
that we see are likely caused by the line output. It's also interesting
that all graphs show a small noise bump between **2** and **3 kHz**.

This is full noise profile obtained with STEPS. There I had to limit the
test signal to **-3 dBFS** because otherwise it was overloading the
output:

[<img src="https://3.bp.blogspot.com/-pS_WGRPL_RU/Wuk89qEPUqI/AAAAAAAAMfY/BKzBS48TfXogaLoU7_FeK1FgQIgfPY37wCLcBGAs/s400/MOTU%2BLine%2BU%2Bto%2BLine%2BB%2B-3%2BdBFS%2BTHD%2BSTEPS.png" width="400" height="277" />](https://3.bp.blogspot.com/-pS_WGRPL_RU/Wuk89qEPUqI/AAAAAAAAMfY/BKzBS48TfXogaLoU7_FeK1FgQIgfPY37wCLcBGAs/s1600/MOTU%2BLine%2BU%2Bto%2BLine%2BB%2B-3%2BdBFS%2BTHD%2BSTEPS.png)

This agrees with the results from ARTA—the level of distortions is
lowest at the midrange, slightly higher at bass frequencies, and raises
steadily at high frequencies.

### Noise

For measuring noise I used NwAvGuys technique of playing a very low
level test signal—**1 kHz** at **-115 dBFS**:

[<img src="https://1.bp.blogspot.com/-HWNba0QNnwc/Wuk-NholvVI/AAAAAAAAMfk/2C0VpnPueH0lM2Y3xS1dIr4G94e6xJXPgCLcBGAs/s400/MOTU%2BLine%2BU%2Bto%2BLine%2BB%2BNoise%2B1000%2BHz%2B-115%2BdBFS.png" width="400" height="277" />](https://1.bp.blogspot.com/-HWNba0QNnwc/Wuk-NholvVI/AAAAAAAAMfk/2C0VpnPueH0lM2Y3xS1dIr4G94e6xJXPgCLcBGAs/s1600/MOTU%2BLine%2BU%2Bto%2BLine%2BB%2BNoise%2B1000%2BHz%2B-115%2BdBFS.png)

Starting from **400 Hz** the level of noise is mostly below **-140 dBFS**.
The strange peak between **2** and **3 kHz** can be seen again.

### IMD

I used both CCIF and SMTPE methods, as ARTA provides both. CCIF at
**0 dBFS** was giving a lot of distortions which were gone at **-1 dBFS**,
but I decided to stay at **-3 dBFS** for consistency with other
measurements:

[<img src="https://4.bp.blogspot.com/-CivZyWkshlE/Wuk_SPFNVJI/AAAAAAAAMf0/VCgV6D_RItoOq9zGAZDx48CWYaauRse5gCLcBGAs/s400/MOTU%2BLine%2BU%2Bto%2BLine%2BB%2BCCIF%2B-3%2BdBFS%2BIMD.png" width="400" height="277" />](https://4.bp.blogspot.com/-CivZyWkshlE/Wuk_SPFNVJI/AAAAAAAAMf0/VCgV6D_RItoOq9zGAZDx48CWYaauRse5gCLcBGAs/s1600/MOTU%2BLine%2BU%2Bto%2BLine%2BB%2BCCIF%2B-3%2BdBFS%2BIMD.png)

[<img src="https://3.bp.blogspot.com/-jW2E8rzeC5c/Wuk_R83I7uI/AAAAAAAAMfw/8k-u6BZ72GkXs1pOygIE5P7HBpPB4JIWgCEwYBhgL/s400/MOTU%2BLine%2BU%2Bto%2BLine%2BB%2BSMPTE%2B-3%2BdBFS%2BIMD.png" width="400" height="277" />](https://3.bp.blogspot.com/-jW2E8rzeC5c/Wuk_R83I7uI/AAAAAAAAMfw/8k-u6BZ72GkXs1pOygIE5P7HBpPB4JIWgCEwYBhgL/s1600/MOTU%2BLine%2BU%2Bto%2BLine%2BB%2BSMPTE%2B-3%2BdBFS%2BIMD.png)

SMTPE IMD at **0 dBFS** (not shown) is also a bit worse than at
**-3 dBFS** but not so radically as with CCIF test signal.

### Frequency Response

ARTA and STEPS show a bit different curves:

[<img src="https://1.bp.blogspot.com/-OFzy_oqORMI/WulAUW5Ig0I/AAAAAAAAMgE/j9LNm-_xfQY8i6q4iNQab7VTSUXegKvJACLcBGAs/s400/MOTU%2BLine%2BU%2Bto%2BLine%2BB%2B96%2BkHz%2BFR.png" width="400" height="277" />](https://1.bp.blogspot.com/-OFzy_oqORMI/WulAUW5Ig0I/AAAAAAAAMgE/j9LNm-_xfQY8i6q4iNQab7VTSUXegKvJACLcBGAs/s1600/MOTU%2BLine%2BU%2Bto%2BLine%2BB%2B96%2BkHz%2BFR.png)

[<img src="https://2.bp.blogspot.com/-x7Sj1dN5Np8/WulAUVRBY4I/AAAAAAAAMgA/QHbPTcafM54ahihf5d4vcxoh2xbpiBTegCLcBGAs/s400/MOTU%2BLine%2BU%2Bto%2BLine%2BB%2B-3%2BdBFS%2BFR%2BSTEPS.png" width="400" height="277" />](https://2.bp.blogspot.com/-x7Sj1dN5Np8/WulAUVRBY4I/AAAAAAAAMgA/QHbPTcafM54ahihf5d4vcxoh2xbpiBTegCLcBGAs/s1600/MOTU%2BLine%2BU%2Bto%2BLine%2BB%2B-3%2BdBFS%2BFR%2BSTEPS.png)

As we can see, STEPS curve has less steeper rolloff at high frequencies.
The STEPS manual says that FR measurements done with its method are more
precise than the measurements using periodic noise. If we zoom in the
STEPS curve we can see a small bump of the antialiasing filter, but it's
smaller than at **48 kHz** sampling rate—it wasn't even visible on the
previous graph:

[<img src="https://2.bp.blogspot.com/-LzHENIW08AU/WulA_kX-2dI/AAAAAAAAMgQ/J3RT91qUJiw_fzaifo106U6GN99qNQ8MgCLcBGAs/s400/MOTU%2BLine%2BU%2Bto%2BLine%2BB%2B-3%2BdBFS%2BFR%2BSTEPS%2BZoomIn.png" width="400" height="277" />](https://2.bp.blogspot.com/-LzHENIW08AU/WulA_kX-2dI/AAAAAAAAMgQ/J3RT91qUJiw_fzaifo106U6GN99qNQ8MgCLcBGAs/s1600/MOTU%2BLine%2BU%2Bto%2BLine%2BB%2B-3%2BdBFS%2BFR%2BSTEPS%2BZoomIn.png)

To me, the FR measured by STEPS is more realistic. It also looks similar
to what [John Reekie published in
HiFiZine](http://www.hifizine.com/2013/03/motu-microbook-ii/).

### What I Did Not Measure

NwAvGuy also provided measurments for inter-channel crosstalk and DAC
jitter. ARTA doesn't provide a measurement mode for the former, so I've
attempted to measure crosstalk by cris-crossing the output lines. This
way any inter-channel leaking of the test signal would show up on the
measured channel. But the results are very different between ARTA and
STEPS so I decided to study more about how to perform it correctly.

As for jitter, ARTA does measure it, but I'm not sure how to measure
jitter for **96 kHz** sampling rate. Usually jitter is measured with a
sine signal of 1/4th of the sampling rate. But for **96 kHz** this would
be **24 kHz**, and as as we have seen from THD measurements Microbook
has somewhat high distortion at high frequencies. So I will also read
more about how to perform this measurement correctly.

I also did not attempt doing time domain measurements, e.g. the square
wave test. Will try next time.

## P. Millet's Soundcard Interface

And now some re-measurements of my Soundcard Interface (SCI), this time
made at **96 kHz** sampling rate and with both ARTA and STEPS, so they
are directly comparable to the MOTU loopback measurements.

For the measurements, the left channel of MOTU's unbalanced line output
was connected to the SCI's BNC input, grounded. The SCI input
sensitivity was set to **2V** setting. SCI was powered from an USB power
bank to avoid creating a ground loop.

### THD

Same method as was used for MOTU loopback:

[<img src="https://3.bp.blogspot.com/-vUNnCZCLx0I/Wu0OZFQr28I/AAAAAAAAMgw/88ZFhuTFXwE4GDk0E7fAXyFRpZHLIwpTACLcBGAs/s400/SCI%2B20%2BHz%2B0%2BdBFS%2BTHD.png" width="400" height="277" />](https://3.bp.blogspot.com/-vUNnCZCLx0I/Wu0OZFQr28I/AAAAAAAAMgw/88ZFhuTFXwE4GDk0E7fAXyFRpZHLIwpTACLcBGAs/s1600/SCI%2B20%2BHz%2B0%2BdBFS%2BTHD.png)

[<img src="https://2.bp.blogspot.com/-apGt-OCtS0M/Wu0Ob1ymZzI/AAAAAAAAMg0/CXfbQaOlFoohVJINSMNIWmwxlvC92BhRQCLcBGAs/s400/SCI%2B1000%2BHz%2B0%2BdBFS%2BTHD.png" width="400" height="277" />](https://2.bp.blogspot.com/-apGt-OCtS0M/Wu0Ob1ymZzI/AAAAAAAAMg0/CXfbQaOlFoohVJINSMNIWmwxlvC92BhRQCLcBGAs/s1600/SCI%2B1000%2BHz%2B0%2BdBFS%2BTHD.png)

[<img src="https://4.bp.blogspot.com/-bNMTcxBZLzk/Wu0Od6OAF7I/AAAAAAAAMg4/Rgu1tcTa8Qgfi8un4cdY-92Z2VkR2Q6GACLcBGAs/s400/SCI%2B20000%2BHz%2B0%2BdBFS%2BTHD.png" width="400" height="277" />](https://4.bp.blogspot.com/-bNMTcxBZLzk/Wu0Od6OAF7I/AAAAAAAAMg4/Rgu1tcTa8Qgfi8un4cdY-92Z2VkR2Q6GACLcBGAs/s1600/SCI%2B20000%2BHz%2B0%2BdBFS%2BTHD.png)

As we can see from the RMS figures, SCI attenuates the signal by almost
**6 dB**. It could be the reason why the bump between **2** and **3 kHz**
originally seen on MOTU loopback measurements is almost gone. If
so, then it must be an artifact of MOTU's line in.

Here is a full THD profile obtained with STEPS:

[<img src="https://4.bp.blogspot.com/-uDq3-O_6NvI/Wu0Zss7f_8I/AAAAAAAAMhs/A31r90t1d2ckm_vLGXc4pTLSNVvl1UKcgCLcBGAs/s400/SCI%2B-3%2BdBFS%2BTHD%2BSTEPS.png" width="400" height="277" />](https://4.bp.blogspot.com/-uDq3-O_6NvI/Wu0Zss7f_8I/AAAAAAAAMhs/A31r90t1d2ckm_vLGXc4pTLSNVvl1UKcgCLcBGAs/s1600/SCI%2B-3%2BdBFS%2BTHD%2BSTEPS.png)

The differences THD between MOTU loopback and SCI are quite small (which
is good!), see the summary table at the end of the post.

### Noise

I also measured noise by sending **1 kHz** test signal at **-115 dBFS**:

[<img src="https://2.bp.blogspot.com/-aESpI-zeAt4/Wu0XYkfW5lI/AAAAAAAAMhg/ZF46Z82pUBMwW3TtqoWJmL5GldPq4raRgCLcBGAs/s400/SCI%2BNoise%2B1000%2BHz%2B-115%2BdBFS.png" width="400" height="277" />](https://2.bp.blogspot.com/-aESpI-zeAt4/Wu0XYkfW5lI/AAAAAAAAMhg/ZF46Z82pUBMwW3TtqoWJmL5GldPq4raRgCLcBGAs/s1600/SCI%2BNoise%2B1000%2BHz%2B-115%2BdBFS.png)

Although, I forgot to zoom the graph in before taking the hard copy. But
even at this scale, it can be seen that comparing to MOTU loopback, it
is higher by about **5 dB** starting from **200 Hz**. Overall, the
profile is quite even, and there are no problems at **60 Hz**.

### IMD

The signal level was at **-3 dBFS** to avoid any distortions from the
MOTU's out:

[<img src="https://4.bp.blogspot.com/-U9w03VTp5Hs/Wu0W_WRpUJI/AAAAAAAAMhQ/T2F2yyohz4ET6TOcSvo2uVAt0TZKzULEQCLcBGAs/s400/SCI%2BCCIF%2B-3%2BdBFS%2BIMD.png" width="400" height="277" />](https://4.bp.blogspot.com/-U9w03VTp5Hs/Wu0W_WRpUJI/AAAAAAAAMhQ/T2F2yyohz4ET6TOcSvo2uVAt0TZKzULEQCLcBGAs/s1600/SCI%2BCCIF%2B-3%2BdBFS%2BIMD.png)

[<img src="https://2.bp.blogspot.com/-xf8tdiWIfaA/Wu0XBZ1I3tI/AAAAAAAAMhU/_anYhe9ZTTYEiTm1waalVkkhd27CP45WQCLcBGAs/s400/SCI%2BSMTPE%2B-3%2BdBFS%2BIMD.png" width="400" height="277" />](https://2.bp.blogspot.com/-xf8tdiWIfaA/Wu0XBZ1I3tI/AAAAAAAAMhU/_anYhe9ZTTYEiTm1waalVkkhd27CP45WQCLcBGAs/s1600/SCI%2BSMTPE%2B-3%2BdBFS%2BIMD.png)

### Frequency Response

I used both ARTA and STEPS in two channel mode. The reference channel
was a direct loopback from MOTU's line out to in, thus the obtained
frequency response is not affected by MOTU's not so ideal
characteristics. ARTA and STEPS have produced quite similar curve for
SCI's FR, so here is the one from STEPS as it is less fuzzy:

[<img src="https://3.bp.blogspot.com/-wSGI227Nb90/Wu0ayvT1OsI/AAAAAAAAMh4/zRZu32PT29YUIXQuGKGkdFYGKweKB2jNwCLcBGAs/s400/SCI%2B-3%2BdBFS%2BFR%2BSTEPS.png" width="400" height="277" />](https://3.bp.blogspot.com/-wSGI227Nb90/Wu0ayvT1OsI/AAAAAAAAMh4/zRZu32PT29YUIXQuGKGkdFYGKweKB2jNwCLcBGAs/s1600/SCI%2B-3%2BdBFS%2BFR%2BSTEPS.png)

## Measurements Summary

So let's compare the numbers from MOTU loopback and SCI measurements:

|                                            | MOTU        | SCI         |
|-------------------------------------------:|:------------|:------------|
| Frequency Response **20 Hz** to **20 kHz** | +/- 0.98 dB | +/- 0.06 dB |
|                        THD **1 kHz**       | 0.00058%    | 0.00067%    |
|                        THD **20 Hz**       | 0.0015%     | 0.0048%     |
|                       THD **20 kHz**       | 0.035%      | 0.025%      |
|                 IMD CCIF **-3 dBFS**       | 0.022%      | 0.016%      |
|                IMD SMTPE **-3 dBFS**       | 0.0048%     | 0.0036%     |
|  Noise (unweighted) at **96 kHz** SR       | -101.3 dBFS |  -96.5 dBFS |

As we can see, the main drawback of SCI is the increase of the noise
floor by about **5 dB**. Note that the high noise figures are mostly due
to the low frequency range. Above **200 Hz** both MOTU and SCI are quite
good. Although, specialized measurement frontends like affordable [Quant
Asylum QA401](https://quantasylum.com/products/qa401-audio-analyzer)
have much more even noise floor across the entire measurement range.
