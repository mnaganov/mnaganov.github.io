# Automatic Estimation of Signal Round Trip Delay, Part 2b

Let's continue examining
[jack\_delay](https://anonscm.debian.org/cgit/pkg-multimedia/jack-delay.git)—I
was curious, whether the method used by jack\_delay is described
anywhere. I tried looking for delay measurement methods used for
"satellite ranging" (mentioned in README file), but it seems that modern
GPS satellites use just a couple of frequencies, and effectively
transmit binary sequences.

So I emailed Fons Adriaensen, the author of jack\_delay, and he was very
kind to provide more details. He told me that the algorithm was used
about **30** years ago, and current methods used for satellite ranging
are indeed different. Fons also described the algorithm in a more
generic form. Later, I've found similar descriptions in books on radars.
I decided to provide the algorithm description here.

I would start with a more generic version of the approach, as described
by Fons and later discovered by myself in [this
paper](https://apps.dtic.mil/dtic/tr/fulltext/u2/a141375.pdf) by J. Clarke.
Let **F<sub>b</sub>** be the "base frequency" which defines the
minimum step of measurement. We use **N** frequencies
**F<sub>i</sub>** each of them is defined as an exact integer multiple
of **F<sub>b</sub>**: **F<sub>i</sub> = M<sub>i</sub> \* F<sub>b</sub>**,
where all **M<sub>i</sub>** are larger than **1**, and
are pairwise [coprime](https://en.wikipedia.org/wiki/Coprime_integers)
(that is, for any **j** and **k** from **\[1, N\], j ≠ k:
M<sub>j</sub> \> 1 ^ GCD(M<sub>j</sub>, M<sub>k</sub>) = 1**). In this
case, the sum of sine waves of frequencies **F<sub>i</sub>** is also a
periodic function with the period of
**∏<sub>i = 1..N</sub> M<sub>i</sub> \* F<sub>b</sub>**,
and the position within this
composite period can be calculated by considering the current phase of
each sine wave. This is basically what [Chinese reminder
theorem](https://en.wikipedia.org/wiki/Chinese_remainder_theorem) is
about.

To illustrate this idea, let's consider two sequences: one with period
**3** (going **0, 1, 2**), another with period **4** (going **0, 1, 2,
3**):

| Result | 0 | 1 | 2 | 3 | 4 | 5 | *6* | 7 | 8 | 9 |10 |11 | 0 |...|
|:-------|:-:|:-:|:-:|:-:|:-:|:-:|:---:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Seq 1  | 0 | 1 | 2 | 0 | 1 | 2 | *0* | 1 | 2 | 0 | 1 | 2 | 0 |...|
| Seq 2  | 0 | 1 | 2 | 3 | 0 | 1 | *2* | 3 | 0 | 1 | 2 | 3 | 0 |...|

As we can see, the pairs comprised from numbers of these two sequences
form a third sequence that starts repeating itself after **12**
iterations (**3 \* 4**). Thus, if someone provides us with a pair of
corresponding numbers from the first two sequences, say (***0***, ***2***),
we can unambiguously find their position in the composite sequence,
which is ***6***.

This is how the position can be calculated. Let's denote our periods
**3** and **4** as **m<sub>1</sub>** and **m<sub>2</sub>**. And the
given numbers (**0** and **2**)
as **a<sub>1</sub>** and **a<sub>2</sub>**. The number that we are
looking for is equivalent
to **a<sub>1</sub>** modulo **m<sub>1</sub>**, and
to **a<sub>2</sub>** modulo **m<sub>2</sub>**:

**x ≡ a<sub>1</sub> (mod m<sub>1</sub>) ≡ a<sub>2</sub> (mod m<sub>2</sub>)**.

Finding the position inside the composite sequence automatically
requires finding numbers **b<sub>1</sub>** and **b<sub>2</sub>** first,
such as **m<sub>2</sub> \* b<sub>1</sub> ≡ 1 (mod m<sub>1</sub>)**,
and **m<sub>1</sub> \* b<sub>2</sub> ≡ 1 (mod m<sub>2</sub>)**. These
numbers do exist because **3** and **4** are coprime. It's easy to see
that **b<sub>1</sub>** is **1**, and **b<sub>2</sub>** is **3**:

| Result | 0 | 1 | 2 | 3 | *4* | 5 | 6 | 7 | 8 | *9* |10 |11 | 0 |...|
|:-------|:-:|:-:|:-:|:-:|:---:|:-:|:-:|:-:|:-:|:---:|:-:|:-:|:-:|:-:|
| Seq 1  | 0 | 1 | 2 | 0 | *1* | 2 | 0 | 1 | 2 |  0  | 1 | 2 | 0 |...|
| Seq 2  | 0 | 1 | 2 | 3 |  0  | 1 | 2 | 3 | 0 | *1* | 2 | 3 | 0 |...|

The position is then calculated as a sum modulo **m<sub>1</sub> \* m<sub>2</sub>**:

**\[m<sub>2</sub> \* b<sub>1</sub> \* a<sub>1</sub> + m<sub>1</sub> \* b<sub>2</sub> \* a<sub>2</sub>\] (mod m<sub>1</sub> \* m<sub>2</sub>) =**
**\[4 \* 1 \* 0 + 3 \* 3 \* 2\] (mod 12) =**
**(0 + 18) (mod 12) =**
**6**.

When using multiple frequencies, the classical approach would require us
to perform the derivation of the delay in a single step for all
frequencies, as J. Clarke's paper illustrates.

However, as we have seen in [my previous
post](/2018/12/automatic-estimation-of-signal-round_30.md),
jack\_delay uses a loop where it considers the phase of each minor sine
wave separately against previously calculated yet still incomplete delay
value. The algorithm uses real (floating point) numbers for representing
the current delay value, and the phase of the current sine wave. But it
later transforms the result into an integer number, thus we can
enumerate intervals of the real functions, and work with integers
instead.

[<img src="https://1.bp.blogspot.com/-Tk3bARfd1QQ/XDZUrepmIsI/AAAAAAAANNI/cJwsn6UzOIYeb9ZLV3RpYnYZr3-oQ2SegCLcBGAs/s640/jack-delay-phase-delta-for-sine-4.png" width="640" height="409" />](https://1.bp.blogspot.com/-Tk3bARfd1QQ/XDZUrepmIsI/AAAAAAAANNI/cJwsn6UzOIYeb9ZLV3RpYnYZr3-oQ2SegCLcBGAs/s1600/jack-delay-phase-delta-for-sine-4.png)

If we consider **0.5** as an unit on the Y scale then the scaled delay,
having a range of **2.5**, maps into a sequence of **2.5 / 0.5 = 5**
integers: from **0** to **4** (**A**). And the current sine wave phase,
having a range of **1**, maps into a binary sequence (**B**). And
because the sequence **A** has an odd number of elements, its parity
flips when the sequence is restarted:

|**(B - A) mod 2** | *0* | *0* | *0* | *0* | *0* |  1  |  1  |  1  |  1  |  1  |
|:----------------:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|     **A**        | *0* |  1  | *2* |  3  | *4* | *0* |  1  | *2* |  3  | *4* |
|     **B**        | *0* |  1  | *0* |  1  | *0* |  1  | *0* |  1  | *0* |  1  |

This is exactly how jack\_delay creates a square wave with the period
length of **A \* 2**. Thus, we now have exact requirements for the
coefficient used for the current delay scaling. Considering that the
current delay is in range of **2 \*\* N**, multiplying by the
coefficient must yield an odd number multiplied by **1 / 2**. Thus, the
coefficient can be expressed as: **M / 2 \*\* (N + 1)**, where **M** is
any odd number. Since the coefficient is calculated via dividing the
current frequency by the base frequency, the formula for minor
frequency's value is:

**M / (2 \*\* (N + 1) \* f0)**

Recall that **f0** is **4096** and the values for **N** start with
**4**. This is basically the same conclusion we have made in the
previous post, but now the requirements for the values of **M** are
fully understood, and the underlying mathematical principle for
determining the delay is explained.

## Resilience to Channel Problems

Since the algorithm depends on uniform signal phase propagation,
anything that affects the phase of the signal in a non-uniform way
affects the outcome of the measurements using this method. On the other
hand, a lot of other issues in the transmission channel have no
effect.

-   **DC offset of the signal**—has no effect since it doesn't affect
    the phase.
-   **Noise**—adds random fluctuations to the phase, but since a) the
    algorithm uses a low pass filter for the frequency domain values,
    and b) it has error checks for gross fluctuations, noise does not
    affect the results.
-   **Clipping of the signal**—clipping creates additional harmonics,
    but since the algorithm only uses the value of the main harmonic,
    these additional harmonics are left out ignored.
-   **Echoes**—delaying the signal and adding it to the source creates
    an effect of a [comb
    filter](https://en.wikipedia.org/wiki/Comb_filter). It reduces or
    amplifies some frequency components of the test signal, but doesn't
    change their phases, thus it also does not affect the delay
    calculation.
- **Non-uniform group delay**—is the only thing that this method is
    sensitive to. Unfortunately, this is what frequently happens in acoustic
    measurements, due to different filters used. However, it could be
    compensated by applying an inverse filter first. It will be interesting
    to try this approach for measuring notoriously non-linear acoustic
    devices—subwoofers.
