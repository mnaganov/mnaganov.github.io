# Modular Audio Processing System, Part III

Finally, after [Part I](/2022/03/modular-audio-processing-system-part-i.html)
and [Part II](/2022/06/modular-audio-processing-system-part-ii.html), we are
getting to the last part of my audio system description. First I'll tell a
few words about the power unit, and then get into details about iterating on
the digital audio path, also presenting some measurments.

## The Power Unit

When there is a bunch of hardware units stacked in a rack and each of them
requiring a power outlet, a natural desire occurs to have only a single
power cord for the entire rack. For a long time a was using a simple
metal-housed power strip which I bolted on the side wall of the rack. At
some point I decided that I want to provide a more serious level of
protection for the equipment. I also wanted the power unit to be implemented
in the same half-rack form-factor as the rest of the equipment, and of
course I wanted it to have no fans.

Around that time I also learned about the principle with a somewhat
spiritually sounding name—the principle of "non-sacrificial" power
protection. There is nothing supernatural in it though. Most power filter
and protector strips used at home employ electrical elements that are
intended to take the impact of an electrical power surge and thus
"sacrifice" themselves, protecting the equipment this way. The elements used
for this noble role are called "metal oxide varistor" (MOV). The problem is
that power protectors never indicate how many MOVs contained in them are
still in a good shape, thus it's always a lottery when such a protector will
fail, possibly taking down the downstream equipment with it.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYS0QM4UaZx6thsJjOoDcPQqGBAHWiO5Bp4_Tw-_pToyGrT6iEkQjUFKmSNSS6fCaAz2IvehDbocpCu6gNdo2ZrC-FWloLFNpUENQq1wvGTJDVoUkEHUt5FfTYEVRA4VPZw2pnQZBUU6-BY61YdkGQbNX2v0LYqc4Bg2GNJt8phrt-L_ofQ1q8iJAjKQ/s16000/Middle-Atlantic-15Amp.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYS0QM4UaZx6thsJjOoDcPQqGBAHWiO5Bp4_Tw-_pToyGrT6iEkQjUFKmSNSS6fCaAz2IvehDbocpCu6gNdo2ZrC-FWloLFNpUENQq1wvGTJDVoUkEHUt5FfTYEVRA4VPZw2pnQZBUU6-BY61YdkGQbNX2v0LYqc4Bg2GNJt8phrt-L_ofQ1q8iJAjKQ/s700/Middle-Atlantic-15Amp.jpg)

Whereas, the power protector I've bought: [Middle Atlantic
PD-415R-SP](https://www.legrandav.com/products/power/horizontal_rackmount_power/series_protection_power_distribution/pd-415r-sp)
was intentionally built using a MOV-free design. Another feature advertised
by the manufacturer is EMI filtering between the sockets, which is nice to
have, at least in theory, when one has to mix digital and analog equipment
and use switched power supplies. I must admit, I partially defeated the last
feature by using power socket splitters, because the power unit
unfortunately only has **4** sockets, while I have **7** pieces of equipment
to power. However, since there is a lot of equipment and wires packed into a
compact rack, there is a lot of EMI "flying" around, thus filtering just at
connection points is not enough anyway.

To close the topic on the power unit, another its drawback besides not
having enough sockets is relatively high price—around **$350–$500**,
depending on the dealer. However, if we divide this price per socket, and
compare to the price of equipment it protects, it seems like a reasonable
investment.

## The Digital Path

Finally, the fun part. My aim was to ensure that practically any digital
source of audio could be connected to the input of the DSP. This is because
I don't want to limit myself to use of certain streaming services or stick
to media software like Roon. I'm a long time Google Play / YouTube Music
user, I ripped my audio CDs, I also might want to play something via a
browser. In addition, recently I decided to subscribe to Apple Music because
they have switched to lossless streaming, and even offer "high resolution"
versions for many popular albums—with a monthly fee which is less than a
cost of a typical CD this was an easy decision.

In order to be able to use wide variety of software-based audio sources, one
needs to use a real computer, or at least a mobile device. Initially I tried
using the same Mac Mini which runs my DSP, however the performance of this
8-year old machine is clearly not enough to avoid glitches when running a
browser alongside Reaper. Also I realized that I want a device with its own
screen and keyboard input, so I can use it while I work. So I took off a
shelf an old MacBook Air which I connected directly to the MOTU card by
Ethernet via [the AVB
protocol](https://en.wikipedia.org/wiki/Audio_Video_Bridging). After a short
period of use it has become obvious that modern browsers can pose a heavy
load for any old computer—after half an hour of streaming YouTube Music the
MacBook Air was always turning its fan on and ruining the listening
experience.

I firmly decided that I need a fanless device, so I restored another "Air"
device—this time an iPad Air—it had its screen broken and I worked around
this with a help of an adhesive "screen protector" film. Then I started
considering options for getting digital audio out the iPad (mine has a
3.5 mm analog output, but...) and I realized there are plenty of ways:

 - AirPlay, which can be used either over wireless or over wired network
   connection. Since iPad needs to be connected to a charger, the wired
   option seems to be more appropriate, especially if an Ethernet dongle
   with PoE (Power-over-Ethernet) is used—just a single wire needs to go
   into the device!

 - HDMI output via a dongle—since it's an old iPad model, it has a Lightning
   output, thus use of an Apple-made dongle is preferred.

 - USB output via a different type of dongle. Obviously, this dongle needs a
   power input, too. Unfortunately, USB audio interfaces that can provide
   power are less frequent to encounter than I would like.

Let's compare these options more thoroughly.

### Comparison of Digital Output Alternatives for iPad

#### AirPlay

The AirPlay protocol—it's not a secret that [it is based on an open RTSP
streaming protocol](https://en.wikipedia.org/wiki/AirPlay#Protocols), and
once the encryption key that Apple uses was extracted, there are now plenty
of open-source clients. I have a Raspberry Pi lying around (naturally, I
amassed a lot of old computing devices), and I found the [DigiOne SPDIF
"hat"](https://allo.com/sparky/digione.html) for RPi from a company that
seems to care about audio quality—Allo.com. Another option is to connect Pi
to an USB Audio Class compliant sound card.

I decided to try
[shairport-sync](https://github.com/mikebrady/shairport-sync) AirPlay
client. After going through its docs I have realized that unlike the AVB
protocol, AirPlay does not have a notion of "master clock," which means that
the sender and the receiver of audio essentially run "freewheleed."  Thus,
even if both use the same nominal sampling rate (the AirPlay protocol always
uses **44.1 kHz** sampling rate), due to difference between the
**effective** sampling rates (for example, the ends up running at
**44099 Hz** and the receiver at **44101 Hz**), frames can be dropped or
zero frames needs to be stuffed into the stream, thus glitches are
unavoidable without a special precaution. In order to avoid glitches
**shairport-sync** resamples the received audio to the sampling rate of the
playback device. The effective sampling rate of the sender is discovered
from timestamps sent together with audio data.

After playing with shair-port sync, I must admit that I'm impressed with the
efforts of its author Mike Brady to make a software that "just works."
However, since I didn't really have to transport audio far away and over
wireless networks, I decided that perhaps all this complexity of
re-synchronization at the receiver side can be avoided. Another important
shortcoming of **shairport-sync** is that it only supports sampling rates that
are multiples of **44.1 kHz**, and according to [this answer by
Mike](https://github.com/mikebrady/shairport-sync/issues/928) use of other
base rate (that is, **48 kHz**) is not possible without a substantial rework
of the software.

#### HDMI

The second option was to use HDMI output. I dismissed HDMI on the grounds
that I only need a stereo output, have no interest in multichannel
encoded content. Also, use of HDMI has some additional shortcomings:

 - iOS always uses **48 kHz** sampling rate (at least, with the HDMI audio
   splitter that I have), which enforces resampling at playback time of all
   the content that Apple Music offers: the majority of albums on Music use
   **44.1 kHz** sampling rate (so far I've only encountered one album in
   **48 kHz**, it was *"Waiting for Cousteau"* by J.M. Jarre). The "Hi-Res"
   content uses either **96 kHz** or **192 kHz**. Note that Apple Music may
   still display a "Hi-Res Lossless" logo while resampling the "Hi-Res"
   content down to **48 kHz**, which is clearly misleading.

 - No volume control on the digital side. Since iPad assumes it plays on
   some TV or an AVR which offers its own volume control, it always outputs
   at digital full scale. This obviously leads [to clipping of intersample
   peaks](/2017/05/clipping-in-sampling-rate-converters.html).

 - iPad bears extra load because it also streams its screen along with the
   audio signal. The HDMI dongle gets warm pretty fast, too.

Thus, use of HDMI output is not an optimal solution for my scenario. This
leaves us with the USB output option via "camera kit."

### Dealing with USB Output Reliability Issues

The camera kit has a fat ugly wire which goes into iPad, and needs two
incoming wires: one for the USB device, and one for power. I really wanted
to hide the dongle inside the equipment rack and started looking for a
Lightning extender. This has revealed an interesting fact—there exist no
"MFi certified" (that is, approved by Apple) Lightning extenders. The
extenders which claim to be "certified" are absent from [the Apple's
database](https://mfi.apple.com/account/accessory-search). Apple does not
make them either, nor does Belkin (the only accessories manufacturer which I
would trust). Nevertheless, I still tried to use an extender wire which at
least was shielded (a lot of extenders sold on Amazon are not even shielded,
making them suitable only for charging purposes), and it was *mostly*
working, except when it didn't. From time to time Apple Music was stopping
playing in the middle of a song—the playback was still "going" on the
screen, but there was no sound until the next song.

Finding the source of instability turned out to be a challenging task.
Besides trying different Lightning extender wires I also tried **3**
different USB transports: Douk Audio U2 Pro, Xing AF200, and finally RME
FireFace. None of them were working reliably, including FireFace, and this
was really suspicious, knowing that RME is usually rock-solid. Luckily, RME
provides an iOS app which allows checking the state of the audio card mixer,
and there I could see that whenever audio stops playing, it actually just
stops coming from the software, despite the fact that the software (for
example, Apple Music) was happily showing that it is playing. Also, while
configuring FireFace to work as a USB Audio Class device, I have read some
insightful information in its manual regarding connection to Apple
devices. RME strongly recommends connecting the USB dongle to any Apple
device directly. Finally, this is how I ended up connecting my dongle, and
this has solved the stability problem for all USB transports I used.

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipx01afNNAnsYK5Z0GJdF7aUF8xPcug1b8kgGW9woNtk9faXKgntjpah60roTJYOLE4paBUQyreCS2D2tCytQv5pN45eUwMinPtC-Uud0QW9bbyfKl1iLulFLcdYXbcClZ3NIHFsrJ0hsoB7zkoVNH8vWdYGz72gDa-tXok3NwMaNvScJ7LBlS97DIQw/w320-h148/Xing-AF200.jpg" width="320" height="148" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipx01afNNAnsYK5Z0GJdF7aUF8xPcug1b8kgGW9woNtk9faXKgntjpah60roTJYOLE4paBUQyreCS2D2tCytQv5pN45eUwMinPtC-Uud0QW9bbyfKl1iLulFLcdYXbcClZ3NIHFsrJ0hsoB7zkoVNH8vWdYGz72gDa-tXok3NwMaNvScJ7LBlS97DIQw/s600/Xing-AF200.jpg)

I chose Xing as my USB transport because it has a screen which shows the
current sample rate, attenuation, and playback state. Also, it offers the
best variety of digital outputs, including an AES3 balanced digital output
which I connected to the input of the sample rate converter.

### Power Sources for iPad and Xing AF200

I need to mention that the difficulty with finding the source of iPad's
playback instability was exacerbated by the need to find the right power
supply for it and for the USB transport. I thought I could just plug the
iPad into any USB power outlet and be done with it. However, life is not so
easy. First, iPad is picky about power sources—there are various proprietary
charging protocols used by Apple, and apparently iPad has some
expectations. Obviously, Apple's own charger is accepted, however I've found
that it creates a voltage offset between the ground of the output signal and
the power ground.

The voltage offset results from a combination of unwanted AC and DC
voltages. The AC part is usually some kind of harmonics of the 60 Hz from
the power outlet or oscillations produced by the conversion
circuitry. Having an offset (either DC or AC) is undesirable because if the
USB transport is powered from the same charger, this offset is propagated to
the "ground" wire of any electrical unbalanced output, and this can easily
cause instability in reception on the input side.

I tried Anker PowerPort 6 charging unit, however its output offset from the
power ground is just enormous, around **37V**, and this is clearly
problematic. I guess, nobody at Anker was envisioning use of this charger in
an AV setup.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbKsF11VvuLV57JDgt7r6Xg0QwT6Xf3FozPNx8DHwXJ_KT0nwfo3AlOoGQF9gxyBeQUxqPcjTn29985qPpCNHQTgli5SOuHbYsuewLDOCctqXJgmSJdJvsZalpMFbGF5ds_YiBUgLitLSRExxfNtebcpbmcPoAvqk7EregvB--Y8ohv_B10I34fJP-2g/s16000/Power-Supplies.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbKsF11VvuLV57JDgt7r6Xg0QwT6Xf3FozPNx8DHwXJ_KT0nwfo3AlOoGQF9gxyBeQUxqPcjTn29985qPpCNHQTgli5SOuHbYsuewLDOCctqXJgmSJdJvsZalpMFbGF5ds_YiBUgLitLSRExxfNtebcpbmcPoAvqk7EregvB--Y8ohv_B10I34fJP-2g/s684/Power-Supplies.jpg)

Finally, I ended up using one of USB ports on the Mac Mini. iPad had no
problem charging itself from this port, and it has no significant voltage
offset. However, its output power is limited, and I have to power both the
iPad and the USB transport. Luckily, the Xing USB transport can also accept
an external DC power input, thus leaving USB connection for data transfer
only. Unfortunately, it can not send power to iPad. If only it could do that
it would obviate the need for an extra USB power wire.

Since all these wires going back and forth and making loops between devices
can easily become sources of noise voltages due to ground potentials
difference, when choosing a power supply for Xing AF200, I was looking for
something flexible. Thankfully, Allo.com has covered that as well, offering
an excellent **5V** low-noise power supply called
["Nirvana"](https://allo.com/sparky/nirvana-smps.html) which offers a
"ground lift" switch for the DC output, as well as a ground connector. Thus,
one can always configure it in a way which eliminates difference in ground
potentials.

Later I found that a powered USB hub by Amazon Basics is also properly
engineered to have only a negligible voltage offset on its USB outputs
(relative to the power ground), however it's not as flexible as Nirvana
SMPS. All in all, the resulting connection scheme looks like this:

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmxbRHG2a4DRHRhhhZOapGuEXPh-T60O6OEhbGk-i-fxf6vVXTs7lTGPJKvazuB5fmhMNIQT3pYL6cyFj97dk_GLhL_7ntGT1HqXnL7LRCo-pDu_Wfy9f-iXYGlgsCBAhFqnVicriE7KucxBzoA45mpC1YFS5L7icxrWf44LImsR6y3otEZohRIPySaw/w354-h400/Digital-components-and-power.png" width="354" height="400" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmxbRHG2a4DRHRhhhZOapGuEXPh-T60O6OEhbGk-i-fxf6vVXTs7lTGPJKvazuB5fmhMNIQT3pYL6cyFj97dk_GLhL_7ntGT1HqXnL7LRCo-pDu_Wfy9f-iXYGlgsCBAhFqnVicriE7KucxBzoA45mpC1YFS5L7icxrWf44LImsR6y3otEZohRIPySaw/s607/Digital-components-and-power.png)

Needless to say, after all these adventures I'm not a big fan of consumer
digital audio equipment. Although I have found a stable configuration, it
still feels a bit fragile, for example, once I tried to use a different
USB-A/C cable between the "camera kit" dongle and Xing, and this immediately
had broken the stability of playback. Apparently, consumer-grade equipment
is not designed for use in complex AV systems.

### Mutec MC-6 Sample Rate Converter

*A quick note on the company name: please don't confuse
["Mutec"](https://mutec-net.com/) with
["Mytek"](https://mytek.audio/)—company with a similarly sounding name which
also makes audio equipment.*

In the world where each digital device is capable of doing sample rate
conversion, and the state of modern software converters is really good, why one
would still need to use a hardware sample rate converter? For me, this is just a
matter of convenience. The MC-6 unit has **4** inputs of various formats: AES3
(balanced XLR), AES3id (BNC), SPDIF (RCA), and TOSLink (optical), as well as the
same outputs, plus BNC ins and outs for word clock. In normal SRC mode, only one
of the inputs is active. The ability to choose among multiple inputs places the
MC-6 unit into the same role which a pre-amp plays in "classic" hi-fi setups.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4Sk_J8CHYRnHQ-Q7tpuH1Z-ZdSH_C4KZY3_9yGocqD4Zaz6o9dtCJp_YvndwaTJxu1oQz_oGMoH0MZWFSFUCpTtD-pBuznBBv1qQNKK7xboDxD4d-Ixrmoi6kR98BaDDELziJQQpVcqhiTKQnowNeeFP3PAt74hmAuJgIRR1UmxDgR-X4CI3iE2oLZg/s16000/Mutec-MC6.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4Sk_J8CHYRnHQ-Q7tpuH1Z-ZdSH_C4KZY3_9yGocqD4Zaz6o9dtCJp_YvndwaTJxu1oQz_oGMoH0MZWFSFUCpTtD-pBuznBBv1qQNKK7xboDxD4d-Ixrmoi6kR98BaDDELziJQQpVcqhiTKQnowNeeFP3PAt74hmAuJgIRR1UmxDgR-X4CI3iE2oLZg/s700/Mutec-MC6.jpg)

I also need to mention that the unit is perfectly engineered—switching
between inputs and locking onto the source, as well as losing sync if the
source gets disconnected does not cause any audible pops. Unlike consumer
devices like iPads this unit is built for a constant 24/7 use and works
absolutely reliably. I prefer to use XLR and TOSLink ports because they have
a good tolerance for surrounding EMI and differences between ground
potentials of units. As we have seen in the section about power sources, use
of consumer-oriented power supplies can easily result in huge voltage
offsets.

Regarding the clipping of oversampling peaks——this is something [I always
try to prevent](/2021/12/youtube-music-and-intersample-peaks.html) because I
often listen to recordings which accidentally or deliberatly leave no
digital headroom. Unfortunately, MC-6 does not provide any headroom, it's
not really possible with digital-to-digital conversion done in the integer
domain—thus, it clips intersample peaks. Being aware of that, in order to
avoid clipping on albums that are mastered without any digital headroom I
use attenuation on the USB transport (Xing). I usually set it to **-4 dB**,
switching to unattenuated output for classical recordings which are usually
mastered the right way.

## Measurements

Measuring digital paths is trickier than analog ones. In order to look at
digital signal in analog domain, which can reveal issues with cables, one
needs a wide bandwidth oscilloscope—I don't have it. Another "classical"
test is the [J-Test](https://www.tnt-audio.com/clinica/jitter2_e.html),
which can reveal issues in digital paths by looking purely from the digital
side. The idea of J-Test is that it creates certain pattern of bits which
can provoke unwanted modulations in the digital signal while it's being
transmitted. These bit patterns are specific to the sampling rate being
used. Thus, when a sampling rate converter is inserted, these bit patters do
not really work as intended when we look at the output from the converter.

I decided to apply a different approach. For sampling rate converters, there
is [a set of tests proposed by the Infinite Wave
team](https://src.infinitewave.ca/help.html) which evaluates how well
low-pass filters of the converter suppress aliased frequencies, and also
characterizes the properties of the filters. As it can be seen from [the
results page](https://src.infinitewave.ca/), the primary application of
tests is for software sample rate converters. Hardware implementation can
introduce more nonlinearity, and also can have "imperfect" effective sample
rates, deviating from the nominal sample rate. Thus, in addition to the
tests done by Infinite Wave I also did THD measurements using Acourate.

Since the team at Infinite Wave uses specialized software, I investigated
how can I make similar tests using Audacity and REW. I used a regular log
sweep for checking aliases using the Spectral analysis in REW. Note that the
measurement log sweep has a regular frequency change rate, compared to a
more specialized sweep used by Infinite Wave. This explains the difference
in curve shapes, while the idea of the test is preserved. And for
characterizing the low pass filter I simply passed a Dirac pulse via the
chain. Since the chain is digital, we have a transfer system which is very
close to textbook.

My primary interest was to check what is happening to a digital signal
played at **44.1 kHz** from iPad while it is passing through my digital
equipment chain to the MOTU interface which runs DSP at **96 kHz** sampling
rate. I also tried sending test signals via AirPort to the Rasperry Pi
equipped with a DigiOne SPDIF "hat" and running **shairport-sync**.

Below is the diagram of both chains. It demonstrates similarities between
them and shows differences. The difference in the resulting sampling rates:
**96 kHz** vs. **88.2 kHz** can be ignored. Note that I used a wired
Ethernet connection between iPad and Raspberry Pi in order to avoid possible
packet losses over WiFi. It was the same iPad in both cases, and I used VLC
to play test signals.

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0f9cGeGz8y_DCg1WYAXY1T5zyTJOHyJUfYYUXmRt44N9H1-i94OujhAdtLkRxjWLK7WaMBqhZYOUIYIyahXfbN3E3bhqcxT57F6jQ4SfEM4vRWxye9lFkqBO75I9hS5yryrgh4GNmt3kUetBTJe44GvNFjcMbRbQF5FoWlIq79uYMd09AGzgwhXREiQ/w640-h368/Resampling-Paths.png" width="640" height="368" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0f9cGeGz8y_DCg1WYAXY1T5zyTJOHyJUfYYUXmRt44N9H1-i94OujhAdtLkRxjWLK7WaMBqhZYOUIYIyahXfbN3E3bhqcxT57F6jQ4SfEM4vRWxye9lFkqBO75I9hS5yryrgh4GNmt3kUetBTJe44GvNFjcMbRbQF5FoWlIq79uYMd09AGzgwhXREiQ/s749/Resampling-Paths.png)

### Mutec MC-6

Let's start with the impulse response of MC-6 which was obtained by passing
a Dirac pulse through it:

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEsTCXe5d61VS2mw7aPXMIyrFLY_a_SstpZcVuY3CKpL82gaHtOzj-Gls1eTbgiom8-nHCZ7w4yAzl1lNCDNgoHz2tjSZ_SspJ5JqjNuAhS0notj0K5wtNJCRS7K13DbM-eAHFdHOx0C-_XM0LT0odRtfxIhMlzEj97eOFSe9-I6iWKyL27VRCoz0RjQ/w640-h337/MC6-Impulse.png" width="640" height="337" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEsTCXe5d61VS2mw7aPXMIyrFLY_a_SstpZcVuY3CKpL82gaHtOzj-Gls1eTbgiom8-nHCZ7w4yAzl1lNCDNgoHz2tjSZ_SspJ5JqjNuAhS0notj0K5wtNJCRS7K13DbM-eAHFdHOx0C-_XM0LT0odRtfxIhMlzEj97eOFSe9-I6iWKyL27VRCoz0RjQ/s700/MC6-Impulse.png)

We can see that MC-6 uses a linear phase low-pass filter. Let's look at
its passband and transition bands (this is the same frequency response
graph, just framed differently):

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsUaE7Euz_xsGqKkGNNNwypf3dq4aS-jI66oqT4gBAvFKOZMuEa-OTYVHHxlxXGOJ9Yzqvkc9gvC0b91cIOt7ZrMSHwDIltXxrkbRoEWFJqfMUtS3RhSnc5jvpNc7WoSVConvFyQMLrvsmpv4ZPC6Sm5TMkGDjZ5v1vEa_c5Tbkq5h2K_Ed2i5drqjgg/w640-h362/MC6-Passband.png" width="640" height="362" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsUaE7Euz_xsGqKkGNNNwypf3dq4aS-jI66oqT4gBAvFKOZMuEa-OTYVHHxlxXGOJ9Yzqvkc9gvC0b91cIOt7ZrMSHwDIltXxrkbRoEWFJqfMUtS3RhSnc5jvpNc7WoSVConvFyQMLrvsmpv4ZPC6Sm5TMkGDjZ5v1vEa_c5Tbkq5h2K_Ed2i5drqjgg/s700/MC6-Passband.png)

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhM0FD_0_jLIodLjtw1JsmJ0iaoq3c08xusAI4D2K3HKPlzt-vmK7dF6JbeTDDhviseUujpbcd8hNt-1hJShDEyrvd_fhQpLXIehSGq73JuE5vNmLf4dCZMCuzvzh2Oo1azeoCJ07QDKsMRPD4Z4KuRua6kSRd025MT8z9drOoS87ligRhQ41Fib5n5vA/w640-h362/MC6-Transition.png" width="640" height="362" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhM0FD_0_jLIodLjtw1JsmJ0iaoq3c08xusAI4D2K3HKPlzt-vmK7dF6JbeTDDhviseUujpbcd8hNt-1hJShDEyrvd_fhQpLXIehSGq73JuE5vNmLf4dCZMCuzvzh2Oo1azeoCJ07QDKsMRPD4Z4KuRua6kSRd025MT8z9drOoS87ligRhQ41Fib5n5vA/s700/MC6-Transition.png)

We can see that the response is flat up to **20 kHz**, then it abruptly
goes down, essentially trimming out everything past **24 kHz**. I suppose,
the ripples on the passband graph are artefacts of REW's own processing.
Note two interesting moments:

 - The low pass filter does not attenuate sufficiently frequencies in the
   region from **22 kHz** to about **23.5 kHz**. I think, this is an
   engineering trade-off to limit pre-ringing.

 - The phase does not stay flat and lags, which I find surprising for
   a linear phase filter. I will dig deeper into the reason behind this,
   it can be caused by REW processing, or it can be actual lag due
   to asynchronous sample rate conversion.

After figuring out the time- and frequency-domain properties of the filter
we can now explain the spectrogram of a log sweep:

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwkrSZasnAR29zeI_X7V_0-umC7jP96XRNzltxyFZLuejVFGgG0CmDWSOVcTcRv529HNkqXvYVp3mnwxwZdtcfkWynt4XEJlDzuw3xOuqTwl0sHNj_pZVQaAnIXTWUHGcgRUI2ZLav87WXLf2aW5QQXOmWMer07bYaPUqqh8__s3uWgl5tc7JFWQl0iA/w640-h370/MC6-Sweep-Spectrogram.png" width="640" height="370" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwkrSZasnAR29zeI_X7V_0-umC7jP96XRNzltxyFZLuejVFGgG0CmDWSOVcTcRv529HNkqXvYVp3mnwxwZdtcfkWynt4XEJlDzuw3xOuqTwl0sHNj_pZVQaAnIXTWUHGcgRUI2ZLav87WXLf2aW5QQXOmWMer07bYaPUqqh8__s3uWgl5tc7JFWQl0iA/s700/MC6-Sweep-Spectrogram.png)

We can see that near the end there is some aliasing. I can explain that by
the fact that aliases that have appeared after converting from **44.1 kHz**
were not sufficiently attenuated by the low pass filter. I think the
approach to filtering used by MC-6 is similar to "allow aliasing" option of
the sample rate converter of [the SoX
toolkit](http://linux.die.net/man/1/sox).

Finally, let's look at the distortion for a **1 kHz** sine wave. Below are
graphs for the sine at **-0.1 dBFS** and **-60 dBFS**:

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZ0AVFdBU6XyWCSFD1comrH4Z-z90x1sY82S78FykFuELqvjnI4PyvZNdcQ8i-3hchHMqHfocLi-qrOvFQlt6ifB1q2_cMdp4v6McE9aYdwwM7s-lJvHF2amBC0GxWITbN9N0Ya7M4R4MtfLnIH66RIfSFMXdsuz5-RVxWS6Ef0CHKGNg46mAvr5aFrQ/w640-h406/MC6-1kHz.png" width="640" height="406" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZ0AVFdBU6XyWCSFD1comrH4Z-z90x1sY82S78FykFuELqvjnI4PyvZNdcQ8i-3hchHMqHfocLi-qrOvFQlt6ifB1q2_cMdp4v6McE9aYdwwM7s-lJvHF2amBC0GxWITbN9N0Ya7M4R4MtfLnIH66RIfSFMXdsuz5-RVxWS6Ef0CHKGNg46mAvr5aFrQ/s700/MC6-1kHz.png)

We can see that the **-60 dBFS** is very clean, whereas the "almost full scale"
wave exhibits some non-linearity. As we can see, even digital paths are
not completely free from level-dependent non-linearities. However, measured
distortion and noise levels are far below audibility thresholds:

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsg2T4LpMl8V8cEDIL5cK-wnhXJPYNAUJUo9HkK2Dv4_C867j-oTdQxdseyzyblT8034hrDbQk9kPKhzkJS-MjZ6zSrn2wg0zeia187jdpSiQj2-C97pnxCW99v_PXBmlH3jxO3l-lY-xTSLRknQzHgUM3Jm4ycw221jHIlDXWxUVQw7OJe4gNJAPZ6A/w640-h398/MC6-1kHz-THD.png" width="640" height="398" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsg2T4LpMl8V8cEDIL5cK-wnhXJPYNAUJUo9HkK2Dv4_C867j-oTdQxdseyzyblT8034hrDbQk9kPKhzkJS-MjZ6zSrn2wg0zeia187jdpSiQj2-C97pnxCW99v_PXBmlH3jxO3l-lY-xTSLRknQzHgUM3Jm4ycw221jHIlDXWxUVQw7OJe4gNJAPZ6A/s700/MC6-1kHz-THD.png)

And just to confirm to myself that my choice of the protocols and equipment used
for the digital audio path was correct, I made a couple of measurements of the
AirPort path via **shairport-sync** running on Raspberry Pi (recall the diagram
above).

### AirPlay via shairport-sync

After I have looked a the waveform of the recorded logsweep as it was produced by **shairport-sync**
I already got some doubts:

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiedwG6ohzwBoK5XCXGdiFI7G30M6tymFw8k39SYwYBUdd-MF5qRUtURKUbOrSxiUsPuFPsGVCxPXvAe088ouC7k3mzRJgAvSe79BSfGpxdHivI6GtlypAPwamAETE3_WUYE6kRgyyNLKqknnn69U-Eu0F2fTxtwMnm9fwsiWxLawUNq2dMkcIKYXKV5A/w400-h210/shairport-Sweep-TD.png" width="400" height="210" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiedwG6ohzwBoK5XCXGdiFI7G30M6tymFw8k39SYwYBUdd-MF5qRUtURKUbOrSxiUsPuFPsGVCxPXvAe088ouC7k3mzRJgAvSe79BSfGpxdHivI6GtlypAPwamAETE3_WUYE6kRgyyNLKqknnn69U-Eu0F2fTxtwMnm9fwsiWxLawUNq2dMkcIKYXKV5A/s718/shairport-Sweep-TD.png)

Note spurious "hairs" above the **0.5** mark—those were not present in the
original signal, as the entire sweep is at **-6 dBFS** (that's **0.5** on
this scale).  We can see that the frequency response graph is also rather
jaggy:

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcejAgqnWxPdP-NSRkA27Yn1ekCWzijF5HlNexmHMYPNop2LoNdAzQVAdTP2jCjEN_2Jcqw0OFn3WYuLFLr_G_yM3jWX4DkygnOTQUpx7tMkd90acNbYqYeZltxH_pD1yL0ggrwT25Ga9RrxfluqgobUI6G7iPsEL17iGGYGwjMGM6s5hCBMF2QgjDOA/w640-h338/shairport-FR.png" width="640" height="338" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcejAgqnWxPdP-NSRkA27Yn1ekCWzijF5HlNexmHMYPNop2LoNdAzQVAdTP2jCjEN_2Jcqw0OFn3WYuLFLr_G_yM3jWX4DkygnOTQUpx7tMkd90acNbYqYeZltxH_pD1yL0ggrwT25Ga9RrxfluqgobUI6G7iPsEL17iGGYGwjMGM6s5hCBMF2QgjDOA/s700/shairport-FR.png)

Unsurprisingly, the spectrogram of the sweep shows a lot of artifacts as well:

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX5iDH8e2yBhPCWCWOHxXh8FMg4SmDCSiLMG_yCIc4Ms8B3SZsZLQKm10OrWrjuqyTLKEz5eN6vyQttiSwVto4lDYU4WCtn9S6bZatUSni6difmCxSeNwEWDxWKuu9qCPfRrSfDDgQxsbVxb3TMEpKhogX4WMEEGdCjUY6JMeWppr0SDKNbNavfn4RXA/w640-h370/shairport-Sweep-Spectrogram.png" width="640" height="370" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX5iDH8e2yBhPCWCWOHxXh8FMg4SmDCSiLMG_yCIc4Ms8B3SZsZLQKm10OrWrjuqyTLKEz5eN6vyQttiSwVto4lDYU4WCtn9S6bZatUSni6difmCxSeNwEWDxWKuu9qCPfRrSfDDgQxsbVxb3TMEpKhogX4WMEEGdCjUY6JMeWppr0SDKNbNavfn4RXA/s700/shairport-Sweep-Spectrogram.png)

Note that **shairport-sync** was built with support for resampling via SoX,
and I have enabled it in the config file. Just to make sure that the rest of
the chain (Raspberry Pi, DigiOne, and RME FireFace) works correctly, I
pushed the same logsweep file onto Raspberry Pi, and played it using SoX,
also with resampling—and there were no artifacts on the recorded sine wave
and on the spectrogram. That means, the artifacts we see with
**shairport-sync** are caused either by the AirPlay protocol itself (maybe,
it's not actually lossless after all?), or resynchronization done by
**shairport-sync**. In any case, this has confirmed that my choice of using
digital output over USB was the right one.

## Conclusions

Building an audio processing and playback chain is not a trivial task even
when using off-the shelf components completely. It's not only the
performance of each individual component that matters, but also the way they
are connected together. Even in a chain where audio is transmitted
predominantly via digital paths, these can still be non-linear effects and
losses of the signal. To my opinion, this illustrates very well the idea
which Rod Elliott has expressed in [his
article](https://sound-au.com/articles/analogue-vs-digital.htm), that
"digital" is just an abstraction—a very powerful one, but still an
abstraction, and that "analog" aspects like voltages and currents must
nevertheless always be taken into account.
