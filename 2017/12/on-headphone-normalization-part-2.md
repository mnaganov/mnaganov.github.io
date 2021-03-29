# On Headphone Normalization Part 2

In [Part 1](/2017/12/on-headphone-normalization.html)
we have considered the need for headphone normalization and its
implementation in [Morphit plugin by
Toneboosters](https://www.toneboosters.com/tb_morphit_v1.html). In this
part, we will examine [Sonarworks
Reference](https://www.sonarworks.com/reference).

## Normalization with Sonarworks package

Sonarworks offers a package for recording studios called "Reference"
which consist of room correction software, headphone correction filters,
and system components that allow applying these corrections on a system
wide level. For non-professionals, Sonarworks also offer ["True-Fi"
package](https://www.sonarworks.com/truefi) which applies the same
headphone correction curves using a simpler UI. For the purpose of
writing this post, I've been playing with the implementation targeted to
pro users, which offers more tuning capabilities.

[![](https://3.bp.blogspot.com/-ef2mET4U9-Y/WjdSFK3qv_I/AAAAAAAAMD0/kwV7FMUi1GQACFFndzvQj4Lv6BTVP-bTgCLcBGAs/s1600/Sonarworks-Advanced.png)](https://3.bp.blogspot.com/-ef2mET4U9-Y/WjdSFK3qv_I/AAAAAAAAMD0/kwV7FMUi1GQACFFndzvQj4Lv6BTVP-bTgCLcBGAs/s1600/Sonarworks-Advanced.png)

I really like that the UI shows the grid for the response curves. It's
also great that all **3** curves: source, correction, and target can be
displayed on the graph.

However, Sonarworks doesn't offer the same degree of freedom for setting
up the source and the destination frequency responses as does Morphit.
The list of source responses only includes real headphone models, but no
artificial curves like "flat at the eardrum." The list of target
responses is even more limited, offering only a handful of speakers and
headphones, which are presented like riddles, e.g. *"A well respected
open hi-fi and mastering reference headphone model nr.650 \[...\]"*
Illustrated by a picture of Sennheiser HD650 as a hint. I guess, this
was done to work around some legal issues.

Here I have discovered the first curious thing—simulating HD650 using
"HD650 Average" measurement didn't result in a flat compensation curve,
and a similar thing with AKG K712:

[<img src="https://2.bp.blogspot.com/-KUuSdZzUW2U/WjdZg0sCoOI/AAAAAAAAMEM/VZA1k5Mq7084hO7N6PHbHVCn4W8yR9GyQCPcBGAYYCw/s400/Sonarwork-hd650.png" width="400" height="330" />](https://2.bp.blogspot.com/-KUuSdZzUW2U/WjdZg0sCoOI/AAAAAAAAMEM/VZA1k5Mq7084hO7N6PHbHVCn4W8yR9GyQCPcBGAYYCw/s1600/Sonarwork-hd650.png)

[<img src="https://1.bp.blogspot.com/-8Gkw3wkw2DU/WjdZaB1KoII/AAAAAAAAMEM/oMIEYiDw6TA9MtGkfRnhUSMOwq9VfKHQwCPcBGAYYCw/s400/Sonarwork-akg-k712.png" width="400" height="330" />](https://1.bp.blogspot.com/-8Gkw3wkw2DU/WjdZaB1KoII/AAAAAAAAMEM/oMIEYiDw6TA9MtGkfRnhUSMOwq9VfKHQwCPcBGAYYCw/s1600/Sonarwork-akg-k712.png)

[I've asked a question about this on Sonarworks' support
forum](https://sonarworks.zendesk.com/hc/en-us/community/posts/115007654893-Why-identity-simulation-filters-in-Reference-are-not-flat-),
and their representative confirmed my suspicion that the target curves
in the package are not as up to date as the source averaged
measurements.

## Target Curve of Sonarworks

OK, first question has been resolved. The next important question—what
does "Flat" target response mean for headphones. The UI doesn't help
much, it indeed shows the target response as flat. But as we know from
Part 1, it shouldn't really be flat at the earphone speakers.

My speculation is that since the package offers normalization for both
headphones and speakers, the team has decided, they will represent the
normalization from the speakers point of view. Thus, the "flat" target
setting for headphones must be "as heard using speakers calibrated to
flat response," but they did not specify under which conditions, and
with which tweaks. As we have seen with the Harman Target Curve and
Morphit, an honest "flat loudspeaker in a reference room as picked up at
eardrum" may not be a preferred setting due to its "dullness."

In order to provide an educated guess, I've performed the following
experiment. I've chosen the same headphone model—Shure SRH1540 as a
source both in Morphit and Sonarworks, and normalized a test sweep
signal separately using two plugins.

Then using "Trace Arithmetic" in Room Eq Wizard, I derived a transfer
function for transforming Morphit's filter response into Sonarworks',
and applied this transfer function to Morphit's "Studio Reference"
curve. Here is the result compared to Morphit's "Studio Reference"
(red) and "Studio Speaker" (which as we remember, resembles Harman
Target Response) (blue). The Sonarworks' approximated response is a
green curve.

[![](https://1.bp.blogspot.com/-z-4RalUhJFs/WkluwaS8nhI/AAAAAAAAMFg/3CnJQfo0-W8xgUKa1qft377yE-FKfYEaACLcBGAs/s1600/Sonarworks%2BTarget%2BCurve%2BGuess.png)](https://1.bp.blogspot.com/-z-4RalUhJFs/WkluwaS8nhI/AAAAAAAAMFg/3CnJQfo0-W8xgUKa1qft377yE-FKfYEaACLcBGAs/s1600/Sonarworks%2BTarget%2BCurve%2BGuess.png)

Note that this is only approximation since measurement data for SRH1540
is obviously different between Morphit and Sonarworks (it's hard to
perform headphone measurements reliably, especially at high
frequencies).

But still, we can see similar shapes here, confirming that Sonarworks
may be using something similar to either of the curves (and it's
definitely not a "flat" target response as their UI suggests). Two
remarkable differences can be seen though:

-   The response at high frequencies is rolling off. Indeed, the sound
    of normalized SRH1540 is duller with Sonarworks, unless additional
    treble adjustment is applied.
-   The bass is cranked up. Again, this can be heard very well. Though
    Sonarworks provides a bass control that allows **+/-6 dB**
    correction, which can fix this.

## Note on the Implementation

Another interesting thing concerning the Sonarworks Reference package is
that it can use different filter types for normalization. On the
"Advanced" tab, there is a choice between "Zero Latency", "Optimum", and
"Linear Phase" settings:

[![](https://3.bp.blogspot.com/-fb6dikCRpig/WklzGNsyR3I/AAAAAAAAMFs/LVPednEdsrsBv-RL-cTf0Uky2Dv2EiSFwCLcBGAs/s1600/Sonarworks%2BFilter%2BType.png)](https://3.bp.blogspot.com/-fb6dikCRpig/WklzGNsyR3I/AAAAAAAAMFs/LVPednEdsrsBv-RL-cTf0Uky2Dv2EiSFwCLcBGAs/s1600/Sonarworks%2BFilter%2BType.png)

"Zero Latency" means applying a recursive (IIR) filter (as in Morphit),
which has negligible latency but introduces some phase shifts.

"Optimum" is a shorter non-recursive minimum phase FIR filter of **500**
taps, that at **44.1 kHz** introduces a delay of about **11 ms**—still
OK for real-time operation.

"Linear Phase" is a longer FIR filter that achieves linear phase (no
phase changes), but has longer processing time, and also adds some
"pre-ringing."

## Which Product to Choose

Personally, I've stuck with Morphit because it's cheaper, and allows me
to see the target frequency response. On the other hand, Sonarworks
offers a system-wide component that applies normalization to all system
sounds. Although, this can also be achieved by means of using Morphit in
conjunction with [Audio Hijack Pro by Rogue
Amoeba](https://rogueamoeba.com/audiohijackpro/) which allows applying
plugins to system output, as well as capturing it.

Sonarworks also offers a service for measuring your personal headphones.
However, I would prefer the headphones to be measured for my own head,
not for a dummy head simulator, since factors as the shape of the pinna,
and the shape of ear canals greatly affect the resonances that occur in
the outer ear.
