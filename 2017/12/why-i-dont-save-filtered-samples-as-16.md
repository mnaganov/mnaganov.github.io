# Why I Don't Save Filtered Samples as 16-bit PCM Anymore

When I need to evaluate a filter on a set of samples of commercial music
in CD format, I used to render the filtered results into 16-bit PCM. The
reasoning I had behind that is somewhat rational:

-   first, as the source material is in 16-bit resolution, and I'm not
    enhancing dynamic range, storing the processed result in anything
    beyond 16-bit seems pointless;
-   comparing floating point numbers is never as precise as comparing
    integers—integer **5** is always **5**, whereas in the floating
    point world it can be represented either **5.00000**, or something
    like **5.000001** or **4.999999**;
-   although the immediate output from filters is in floating point
    format, there is a pretty deterministic procedure of converting
    floats into ints, unless dithering has been applied.

But as it turns out, the last statement is actually wrong. In the audio
world, there is no single "standard" way for converting ints into floats
and back. This is a good writeup I've found on this topic:
["Int-\>Float-\>Int: It's a jungle out
there!"](http://blog.bjornroche.com/2009/12/int-float-int-its-jungle-out-there.html)

The first suspicions had started crawling into my mind when I was doing
bitwise comparison of filtered results obtained from Audacity, Matlab,
and Octave, for the same input sample, and using the same filter. To my
surprise, the results were not quite the same.

## Performing Bitwise Comparisons with Audacity

By the way, the bitwise comparison is performed trivially in Audacity
using the following simple steps (for mono files):

1.  Open the first wave file in Audacity: **File \> Open...**
2.  Convert the track is in **32-bit float** format (via track's pop-up
    menu.)
3.  Import the second wave file: **File \> Import \> Audio...**
4.  Also make sure it is in **32-bit float**.
5.  Invert one of the waves: select wave, **Effect \> Invert**.
6.  Mix two waves together: **Tracks \> Mix \> Mix and Render to New
    Track**.

This creates a new track containing the difference between two waves in
time domain. If the wave files were quite similar, viewing the resulting
track in the default "Waveform" mode may look as a straight line at
**0.0**. In order to view the difference in the lowest bits, switch the
resulting track into "Waveform (dB)" mode.

Another option is to check the spectrum of the resulting wave using
**Analyze \> Plot Spectrum...** dialog. If there is no difference, the
spectrum window would be empty, otherwise some residual noise would be
shown.

Note that it is very important to convert into 32-bit, because if the
wave stays in 16-bit mode and there are samples with the minimum 16-bit
value: **-32768**, upon inversion they will turn into max positive
16-bit value which is **+32767**. And summing them up with their
counterparts from the original non-inverted track will produce samples
of value **-1**.

So, when I was comparing filtered wave files processed in different
systems with the same filter, and saved in 32-bit float format, usually
there was no difference (except for Octave—as it turns out, even recent
distributions of Octave, e.g. v4.2.1 are affected by [this
bug](http://savannah.gnu.org/bugs/?45490) which saves into 32-bit
integer instead of floats, and also stores **1.0** float value as minimum
negative 32-bit value: **-2147483648**, instead of max positive). But
once I started saving them in 16-bit format, the difference started to
become quite noticeable. Why is that?

## Determining Int16 Encoding Range

First, let's determine how Audacity, Matlab, and Octave deal with
converting between minimum and maximum float and int16 values.

In Audiacity, we can generate a square wave of amplitude **1.0**, which
in 32-bit mode will be a sequence of **1.0** and **-1.0** interleaved,
like here:

[![](https://2.bp.blogspot.com/-urgmwFGIhCE/WiNGB3sj4_I/AAAAAAAAMBo/-uA2gIJVW3EW2b_wL5Cmfgo-AILTJzUrQCLcBGAs/s1600/square-wave-aud-32f.png)](https://2.bp.blogspot.com/-urgmwFGIhCE/WiNGB3sj4_I/AAAAAAAAMBo/-uA2gIJVW3EW2b_wL5Cmfgo-AILTJzUrQCLcBGAs/s1600/square-wave-aud-32f.png)

After exporting it into a 32-bit float PCM wav file, it can be examined
with ["octal dump" (od)](http://man7.org/linux/man-pages/man1/od.1.html)
utility:

```
$ od -f aud-square32f.wav
...
0000120     1.000000e+00    1.000000e+00   -1.000000e+00    1.000000e+00
0000140    -1.000000e+00    1.000000e+00   -1.000000e+00    1.000000e+00
...
```

After exporting the same wave into a 16-bit int PCM wav file, it is
possible to see the same values represented as int16:

```
$ od -s aud-square16.wav
...
0000040                                               ...   32767   32767
0000060    -32768   32767  -32768   32767  -32768   32767  -32768   32767
...
```

Now Matlab R2017b. After loading the square wave from a 32-bit file,
it's easy to display it:

```
>> [float_wave, fs] = audioread('aud-square32f.wav', 'native');
>> format shortEng;
>> disp(float_wave(1:8))

     1.0000e+000
     1.0000e+000
    -1.0000e+000
     1.0000e+000
    -1.0000e+000
     1.0000e+000
    -1.0000e+000
     1.0000e+000
```

Then it's easy to export it into 16-bit again, and check how will it be
represented:

```
>> audiowrite('mat-square16.wav', float_wave, fs, 'BitsPerSample', 16);

$ od -s mat-square16.wav
...
0000040                                               ...   32767   32767
0000060    -32768   32767  -32768   32767  -32768   32767  -32768   32767
...
```

OK, that means, Audacity and Matlab use the same range for int16
representation: from **-32768** to **32767**. What about Octave
(v4.2.1)? The result of loading the floating point wave is the same, but
what about the export into int16?

```
$ od -s oct-square16.wav
...
0000040                                               ...   32767   32767
0000060    -32767   32767  -32767   32767  -32767   32767  -32767   32767
...
```

Interesting—it turns out that Octave only uses the range from **-32767**
to **32767**, for symmetry I suppose. It's even more interesting, that
if we load a 16-bit wave file produced by Audacity or Matlab into Octave
in 'native' mode, that is, without converting into float, Octave will
"scale" it in order to avoid using the value of **-32768**:

```
octave:5> [mat_int16_wave, ~] = audioread('mat-square16.wav', 'native');
octave:6> disp(mat_int16_wave(1:8))

   32766
   32766
  -32767
   32766
  -32767
   32766
  -32767
   32766
```

Personally, I find this quite odd, as I was considering the "native"
loading mode to be transparent, but it's actually not.

So, obviously, this discrepancy in the range of int16 used can be the
source of difference when performing bitwise comparisons. Can there be
another reason? Yes, and it's the way fractional values are rounded.

## Rounding Rules

For float numbers used in calculations, there is a variety of [rounding
rules](https://en.wikipedia.org/wiki/Rounding). I've made an
experiment—created floating point wave files with series of steps, and
converted them into int16 using Audacity, Matlab, and Octave. For the
step, I used different values depending on what range the framework
uses. Thus, 1 unit ("1u" in the table) can be different for the positive
and the negative range. The results are quite interesting:

|Float         |Audacity |Matlab  |Octave  |
|:-------------|--------:|-------:|-------:|
| -1.0         |  -32768 | -32768 | -32767 |
| -1.0 + 0.25u |  -32768 | -32768 | -32767 |
| -1.0 + 0.75u |  -32767 | -32768 | -32766 |
| -1.0 + 1u    |  -32767 | -32767 | -32766 |
| -1.0 + 2u    |  -32766 | -32766 | -32765 |
|  0.0 - 2u    |      -2 |     -2 |     -2 |
|  0.0 - 1.75u |      -2 |     -2 |     -2 |
|  0.0 - 1.25u |      -1 |     -2 |     -1 |
|  0.0 - 1u    |      -1 |     -1 |     -1 |
|  0.0 - 0.75u |      -1 |     -1 |     -1 |
|  0.0 - 0.25u |       0 |     -1 |      0 |
|  **0.0**     |   **0** |  **0** |  **0** |
|  0.0 + 0.25u |       0 |      0 |      0 |
|  0.0 + 0.75u |       1 |      0 |      1 |
|  0.0 + 1u    |       1 |      1 |      1 |
|  0.0 + 1.25u |       1 |      1 |      1 |
|  0.0 + 1.75u |       2 |      1 |      2 |
|  0.0 + 2u    |       2 |      2 |      2 |
|  1.0 - 2u    |   32766 |  32765 |  32765 |
|  1.0 - 1u    |   32767 |  32766 |  32766 |
|  1.0 - 0.75u |   32767 |  32767 |  32766 |
|  1.0 - 0.25u |   32767 |  32767 |  32767 |
|  1.0         |   32767 |  32767 |  32767 |

It seems that all the frameworks use slightly different rounding rules.
That's another reason why the wave looking the same in the floating
point format will look differently when rendered into int16.

## Conclusion

Never use 16-bit PCM for anything besides the final result for
listening. And then also use dithering. For any comparisons, and for
bitwise comparison, always use floats—they turn out to be less
ambiguous, and retain consistent interpretation across different
processing software packets.
