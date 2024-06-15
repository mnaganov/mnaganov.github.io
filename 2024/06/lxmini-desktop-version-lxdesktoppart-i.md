# LXmini Desktop Version (LXdesktop)—Part I: Build

I would like to make a couple of posts regarding my project which was
going on for a long time—a couple of years, actually—and finally got
to a satisfying conclusion. As I wrote earlier (see [this
post](/2018/06/linkwitz-lxminifirst-impressions.html) and [this
post](/2019/10/case-study-of-lxmini-in-our-new-living.html)) I did
build LXmini speakers in their original version, and then was
experimenting a bit with different crossover settings and
tunings. Then after a house move, I could not use them as floor
speakers anymore, and decided to make a more radical experiment and
turn them into a desktop near field version. In this post I will talk
about the build differences versus the original design by S. Linkwitz,
and in subsequent post (or posts?) I will explain the tuning process.

## Major Differences

Let's start with the two most important changes.

### Height Reduction

The first obvious difference is of course the reduced height of the
speakers, since they have to stand on the desktop now. I always work
standing, and this puts my head a bit higher above the surface of the
desktop compared to a seated position. This is actually good because
the vertical stand of LXmini also doubles as the enclosure for the
woofer, and thus it shouldn't be too small in order to provide enough
spring back action for the woofer driver. I think there is no need to
remind everyone that LXmini are designed around simple plumbing
pipes. When choosing the height for the vertical stand pipe, I was
aiming to get the space between the bottom of the full-range driver
and the woofer at my eye level:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuEaWvvEMDGH2KxB8JzNCUH5iXiepoGKM868aiHzJnQVLQuL9Rfset3w6GB8k3k2Z7ReBNAiCapAWOkw_qM95xp3J6DcoX8HtHZzJGi7w6ZrpM5RyFAoi68BLmtzsvlGUgBod6eiBvLjEiqv71VuCOVFJNF48XTQrhIZawFvXhSbpb-um6DiZcA8baY88z/w324-h400/drivers.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuEaWvvEMDGH2KxB8JzNCUH5iXiepoGKM868aiHzJnQVLQuL9Rfset3w6GB8k3k2Z7ReBNAiCapAWOkw_qM95xp3J6DcoX8HtHZzJGi7w6ZrpM5RyFAoi68BLmtzsvlGUgBod6eiBvLjEiqv71VuCOVFJNF48XTQrhIZawFvXhSbpb-um6DiZcA8baY88z/s640/drivers.jpg)

The idea behind this requirement is that ears are about at the eye
level, and in order to preserve the distances from both drivers to the
ear as the head moves closer to or further from the speaker, the ear
and both drivers must form an isosceles triangle:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5pdlvjcxHCKgJkVE_izd-KIjAcdsSRgDnRGyyLgmSOIuxPwFKbtz-eN54OcZdg-1k_vUsTQROm687ZSUCAQxPiTC_wj9yXCX92JR4j4Orj2k9e4qnPOr5s7zi3ykpLVtandr64sm_ph1EkmC6sNcLHtvYqZMverbmUBGPR3Ao_fFuc4tCiZJhbbCMC7me/w400-h178/Driver_Distances.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5pdlvjcxHCKgJkVE_izd-KIjAcdsSRgDnRGyyLgmSOIuxPwFKbtz-eN54OcZdg-1k_vUsTQROm687ZSUCAQxPiTC_wj9yXCX92JR4j4Orj2k9e4qnPOr5s7zi3ykpLVtandr64sm_ph1EkmC6sNcLHtvYqZMverbmUBGPR3Ao_fFuc4tCiZJhbbCMC7me/s562/Driver_Distances.png)

Preserving the distances helps to maintain the time delay between the
drivers and the ear, which is important for preserving acoustical
summing of sound waves from the drivers.

The length of my vertical stand pipes ended up to be **43 cm** (**17
inches**). Obviously, the change of the working volume for the woofer
driver changes its frequency response, so I could not use the original
equalizer settings. However, this wasn't a problem for me since I knew
that I will end up using my own tuning anyway.

### The Speaker Connector

Another major change was in the speaker connector. I'm a big fan of
SpeakON connectors by Neutrik. Since LXmini uses line-level crossovers
and an amplifier per driver, its speaker cable has **4** wires.
SpeakONs exist in various versions including the 4-pole—the model
NL4FC. SpeakONs are much more convenient and also safer than
traditional speaker posts for "banana" plugs which the original LXmini
design uses. The height of those posts and plugs allowed putting them
at the bottom of the speaker, however SpeakON connectors are
significantly longer and would not fit under the speaker. Thus, I had
to move connector to the back side of the speaker. This also makes the
connection process a lot easier.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg02g9Fk0M41TEJSKW97Q_Nw4-WkBxYuiL1Xpz72XkzZgPop0B3qvMfyzddqB1EajFhTlt0o0WrvjpT4pRris1EXtKS2a23Rg8Dydebn7Qe4H0q9qgvqcO2gpNovFd9ICSZsdd8pHUqfeI8Qdi7EIl5Wo_ShV3q0hx2K01FXkl5q7Tvs1OhUuvGvyOv7K00/w640-h454/speakon.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg02g9Fk0M41TEJSKW97Q_Nw4-WkBxYuiL1Xpz72XkzZgPop0B3qvMfyzddqB1EajFhTlt0o0WrvjpT4pRris1EXtKS2a23Rg8Dydebn7Qe4H0q9qgvqcO2gpNovFd9ICSZsdd8pHUqfeI8Qdi7EIl5Wo_ShV3q0hx2K01FXkl5q7Tvs1OhUuvGvyOv7K00/s700/speakon.jpg)

The receptacle for the SpeakON at the rear side also serves as a lock
holding the vertical pipe and its stand together. Because of that,
only one complementing bolt is required on the front side.

## Minor Tweaks

Besides these major changes, I also had a couple of ideas how to make
the assembly process more convenient.

### Threaded Bolt Holes

The first idea was to use 1/4-20 button cap Allen head bolts
everywhere possible, and eliminate the need for nuts by threading the
holes in pipes instead. This change makes the process of assembling
the top part of the speaker much easier. For example, one step of the
assembly procedure requires centering the full-range driver at the end
of the horizontal pipe by means of **3** of **4** screws. The original
design uses nuts screwed to the bottom of bolts—just enough to make a
flat surface:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7z4aTS_NbtdLRiW2XXwxrw0JpuGoqy1JGDZ4tix-iYJ4mpGxmj_pEMNss82ekLvagh78A4OFFcpCyFA-SxMJBd6kJRg7fywBChSS9oIrzj39VDN8rb_Qu0HJAGUm1ofkcYWR-xuTqkM8vTLaNoCY_S_hP4wQnJLjU-AkMOITZBTrNZIh_8XWbN6qIrFDp/w640-h333/original_fr_bolts.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7z4aTS_NbtdLRiW2XXwxrw0JpuGoqy1JGDZ4tix-iYJ4mpGxmj_pEMNss82ekLvagh78A4OFFcpCyFA-SxMJBd6kJRg7fywBChSS9oIrzj39VDN8rb_Qu0HJAGUm1ofkcYWR-xuTqkM8vTLaNoCY_S_hP4wQnJLjU-AkMOITZBTrNZIh_8XWbN6qIrFDp/s700/original_fr_bolts.jpg)

Aligning these bolts around the driver's magnet is a cumbersome
procedure due to the strong interaction between them. In my design,
the threaded boltholes prevent movement of the bolts, and screwing
them in while preserving alignment becomes much easier:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5RD_zgfFjUGjS_3jeO4V-zb5GpIg-moVdMbzCs6AqFw4vxisEe8kSkd9czReauvz9xDDYASEFoI7pbDPUFm2a-ZAuHlpnTOTfvdKZAEWPLYxoA5i5nojpH7sSafdyYPmZ2FCqco1zRQnMq7MXbdXG76RAqioRSRu6uM-6tigf3xYYM_l8IIlvch-ZAEL8/w446-h640/my_fr_bolts.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5RD_zgfFjUGjS_3jeO4V-zb5GpIg-moVdMbzCs6AqFw4vxisEe8kSkd9czReauvz9xDDYASEFoI7pbDPUFm2a-ZAuHlpnTOTfvdKZAEWPLYxoA5i5nojpH7sSafdyYPmZ2FCqco1zRQnMq7MXbdXG76RAqioRSRu6uM-6tigf3xYYM_l8IIlvch-ZAEL8/s700/my_fr_bolts.jpg)

Another fiddly step of the assembly procedure is alignment of the
horizontal pipe to make the surface of the full-range driver to be
at the right angle to the surface of the woofer. The horizontal pipe
rests on **3** screws that have to be adjusted. The heads of two of
them are easily accessible:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJe1IRGJNMUv3FAuknHmtJY7l8fmhkg2ekC_AFqQQawCi_8FQg202_MyYVbIv-SgNM9EraPPmh_imicTwq4a1MpS87Fp5xDZYC4nWhBssIJcKaqzyXPRxeJXALOOsgp6VFdiw5WndWq-RjQsWUo0fcq5d0VDxK6OBCmHoxPUS8yjhF-OWIkAqlwiVmNnI6/w640-h366/fr_pipe_bolts.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJe1IRGJNMUv3FAuknHmtJY7l8fmhkg2ekC_AFqQQawCi_8FQg202_MyYVbIv-SgNM9EraPPmh_imicTwq4a1MpS87Fp5xDZYC4nWhBssIJcKaqzyXPRxeJXALOOsgp6VFdiw5WndWq-RjQsWUo0fcq5d0VDxK6OBCmHoxPUS8yjhF-OWIkAqlwiVmNnI6/s700/fr_pipe_bolts.jpg)

The third one in the original design must be a long one, and I did not
have such a long bolt, so instead I used a short one and was adjusting
it via a hole at the bottom of the woofer's plate:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAMQziZv1qpYnLHWuwzLxqw2FCxt5K-AA6cb5-b5KXwDBFVYC_VT_4AHb7C7YfnS6DNAbgSpaxv1qoh7hRrP625UIXW-pQZcOvXeZOvx0SSlPziK7_xRWAgYh0-4eOR_XNpBR-7lYqReo0ljjyNR574_xRdyc5YdV_qez-blgblAP_j29LLCte-wO65b2P/w365-h400/fr_pipe_bottom.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAMQziZv1qpYnLHWuwzLxqw2FCxt5K-AA6cb5-b5KXwDBFVYC_VT_4AHb7C7YfnS6DNAbgSpaxv1qoh7hRrP625UIXW-pQZcOvXeZOvx0SSlPziK7_xRWAgYh0-4eOR_XNpBR-7lYqReo0ljjyNR574_xRdyc5YdV_qez-blgblAP_j29LLCte-wO65b2P/s700/fr_pipe_bottom.jpg)

### Pipe Clamps

I have removed the top pipe clamp since it is purely decorative, and it
can vibrate at high frequencies, creating undesired resonance. The
bottom pipe clamp is functional since it holds the rubber collar on
top of the vertical pipe. In order to prevent its possible vibration,
first I have put a piece of rubber between the loose end of the clamp
steel stripe and the rest of it. Then I used a wire in order to secure
the loose end as much as possible:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlLgoVhtc39-akIWCpkEAmN2IYlikKj7pduJXLJvJ1dB6djhndfE68q6MMTU_ASR1whYbJs0pj7-Ny1ved_YfpUPP5Q3wnfTP-5_6UsiHd3OP_pErsOkN3w_djI7J0A9fW7OxvyjYyeCMQlQ1bq0plZPft5gSn0SqMs4zxAMJRHAgm7vcam57O6lB7lTms/w640-h462/clamp.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlLgoVhtc39-akIWCpkEAmN2IYlikKj7pduJXLJvJ1dB6djhndfE68q6MMTU_ASR1whYbJs0pj7-Ny1ved_YfpUPP5Q3wnfTP-5_6UsiHd3OP_pErsOkN3w_djI7J0A9fW7OxvyjYyeCMQlQ1bq0plZPft5gSn0SqMs4zxAMJRHAgm7vcam57O6lB7lTms/s700/clamp.jpg)

### Alignment Post (Not the best idea :)

Finally, this is the change which did not work as expected. I usually
use laser guides while setting up speakers. Since surfaces that we are
surrounded with in our homes are never ideal, the only true guides for
setting up things straight are gravity and lasers. With regular
rectangular boxes of convenient speakers, putting a laser level on top
of them is a trivial task, but with the round pipes of the LXmini
design it's not. So, my idea was to add a threaded post on top of the
speaker in order to mount a laser level on it.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpWMPCzT2qFDgPfNPQTNJmk6Kauz8LutZae13d9i8mcg5zLl4gfYbVW2-8cMO4KZuVXlz1lLg2RjlHZejVUc8hcu9kB3H3hOlXz3sgIp46U3ObqKwqmdBaN0QIVim9yMiGt227w5X7rORyjqTLRdU3HQ4coECzd4m6Min-VH4505ZkPT8-ynwyYGf9gbZz/w640-h502/bolt_and_laser.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpWMPCzT2qFDgPfNPQTNJmk6Kauz8LutZae13d9i8mcg5zLl4gfYbVW2-8cMO4KZuVXlz1lLg2RjlHZejVUc8hcu9kB3H3hOlXz3sgIp46U3ObqKwqmdBaN0QIVim9yMiGt227w5X7rORyjqTLRdU3HQ4coECzd4m6Min-VH4505ZkPT8-ynwyYGf9gbZz/s700/bolt_and_laser.jpg)

The idea did not work out because although the laser level holds well
on the post, it's practically impossible to set it up aligned properly
with the speaker itself. So, I had to abandon this idea and instead
put marks at the baseplate of the speaker, and this is where I put
the laser level during the set-up.

## Overall Look

This is how the desktop setup looked like initially (yes, the monitor
has exact square aspect ratio :):

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVgoyNGGpXGNEuZC1V9tyDIqxadJQJRXrhaT-M3BIOTcsOY9dE37vLJOK5EvEDOwUcM_hyys6ZRSlOd1mTvYAr_CX-FCyXn27ZgMfFDCj4xzDjTTEOA2KHnOxug7VlKdVTj4T8IoFDwMe5kHrdrgA_ObrQWZPMg887MhydxBeTPxtVl76PRmGVVDcMxYtT/s16000/old_setup.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVgoyNGGpXGNEuZC1V9tyDIqxadJQJRXrhaT-M3BIOTcsOY9dE37vLJOK5EvEDOwUcM_hyys6ZRSlOd1mTvYAr_CX-FCyXn27ZgMfFDCj4xzDjTTEOA2KHnOxug7VlKdVTj4T8IoFDwMe5kHrdrgA_ObrQWZPMg887MhydxBeTPxtVl76PRmGVVDcMxYtT/s700/old_setup.jpg)

Note that it is recommended to put dipoles at least **1 meter** from
the real wall, however in the desktop setup this is not possible.
Instead, I have acoustic absorbers mounted around the desk.

After living with this classical 60 degrees stereo setup for a while,
I decided to try to improve imaging by using the directional property
of dipoles in order to suppress the sound going into the opposite
(ipsilateral) ear. The speakers got moved closer to my side of the
desk, and were rotated **away** from me:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi55jfwHZ7GfdZOHb8XPvjy0Ygaw9F-HrUAlax6CdrhYUtZPUdl6FFeJ9VAHZRbDNEu-x3XoAcIxAoztDsZg5xbAS8ZKjpO9leLieo1Rc1XatrrLS9heD8JT022QBWhmRrmvTDfa-XnGXUCUCAFSlkwEkzFlgPABJ14Bc2LHjRbMo0owSB3F1v5-0PO930j/s16000/new_setup.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi55jfwHZ7GfdZOHb8XPvjy0Ygaw9F-HrUAlax6CdrhYUtZPUdl6FFeJ9VAHZRbDNEu-x3XoAcIxAoztDsZg5xbAS8ZKjpO9leLieo1Rc1XatrrLS9heD8JT022QBWhmRrmvTDfa-XnGXUCUCAFSlkwEkzFlgPABJ14Bc2LHjRbMo0owSB3F1v5-0PO930j/s700/new_setup.jpg)

Below is a schematic diagram, a view from above:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0GxH17hqDXelirt-VmEyvtphE_rgJ2EaGLODrxroci9ZmOepptq711g7VvnDHhS4Fm_TxvjbyoqqokdpL8ZYyOpy3J0QXFFvCl8x-LBFq_ElyaGJ4DfsFQPhAGsIeM3mRJg4NN26_kTc6g1S-hASqQOi646RjhyphenhyphenyuQr5-tw51dn619RjhAT8P6L842rIA/w640-h541/Room_Plan_2.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0GxH17hqDXelirt-VmEyvtphE_rgJ2EaGLODrxroci9ZmOepptq711g7VvnDHhS4Fm_TxvjbyoqqokdpL8ZYyOpy3J0QXFFvCl8x-LBFq_ElyaGJ4DfsFQPhAGsIeM3mRJg4NN26_kTc6g1S-hASqQOi646RjhyphenhyphenyuQr5-tw51dn619RjhAT8P6L842rIA/s711/Room_Plan_2.png)

The process of configuring the speakers for this setup will be
explained in the next post, stay tuned!
