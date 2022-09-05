# MOTU: Multichannel Volume Control

Going beyond simple 2-channel volume control still presents a challenge,
unfortunately. The traditional design is to view a multichannel audio interface
as a group of multiple stereo outputs, and provide an independent volume control
for each group, without an option to "gang" multiple outputs together. True
multichannel output devices are normally associated with A/V playback, and
indeed modern AVRs do present flexible options for controlling the volume,
including support even for active crossovers. For example, the Marantz AV7704
which [I was using for some time](/2020/06/marantz-av7704-as-audio-hub.html) has
this option. However, AVRs usually have a large footprint in terms of consumed
space.

Computer-based solutions are even more flexible, and in recent years come in
compact forms and fanless cases, making them a more attractive alternative to
AVRs. I was using a PC running AcourateConvolver also for a long time. I didn't
mind that it applies attenuation in the digital domain, because it does that
correctly, with a proper dithering. However, Windows does not appear as a
hassle-free platform to me, because it always unceremoniously wants to update
itself and restart exactly when you don't want it to do so.

After the Windows computer which I was using for AcourateConvolver broke, the
solution I had switched to was RCU-VCA6A by RDL (Radio Design Labs), which seems
to work reliably, does not want to update itself, and does not introduce any
audible degradation into the audio path (at least, [compared to the VCA built
into the QSC
amplifier](/2022/06/modular-audio-processing-system-part-ii.html)). But still,
it's an extra analog unit, could we get rid of it?

Turns out, the solution was right there all the time since I started my audio
electronics hobby. It can be trivially done using ingenious control software of
"MOTU Pro Audio" line of audio interfaces, which includes my MOTU Ultralite AVB.
Interestingly, the first thing that I had noticed when I bought this audio
interface is that the control app runs in the browser, talking to the web server
running on the card. This was in a sharp contrast to the traditional approach to
install native apps on the host Mac or PC.

What I failed to realize, though, is that the control app actually has two
layers. There is the visible UI part, but also the invisible server which
provides a tree-like list of the audio card resources. Thus, in order to
automate anything related to the audio interface management there is no need to
work "through" the web app, it's allowed to talk to the server part
directly. This is great, because any automation which tries to manipulate the UI
is fragile by definition.

I've found [the reference manual for MOTU's AVB Datastore
API](https://cdn-data.motu.com/downloads/audio/AVB/docs/MOTU%20AVB%20Web%20API.pdf),
which is indeed very simple, and any CLI web client can work with it.  Another
useful fact that I have discovered by accident is that although the datastore
server reports the range of accepted values for the trim level of analog outputs
1–6 being only from **-24 dB** to **0 dB**, it happily accepts lower values,
thus the effective trim level of all analog outputs is the same, going down to
**-127 dB**.

I decided to re-purpose some of the physical controls on the card itself to
serve my needs. Since I have a dedicated headphone amplifier, I never use the
phones output, thus the rotary knob and the associated trim level for the phones
output can instead be used to control the trim level of the analog outputs. When
turning the knob, the current volume level is displayed on the audio interfaces'
LCD screen. This is needed because the knob is just a rotary encoder, not a real
attenuator, thus it does not have an association between the current level and
the knob's position. This fact actually makes it much less comfortable than the
VCA volume pot which I've made myself to use with RCU-VCA6A. With the encoder
it's convenient to perform small adjustments—a couple of dBs up or down, but
turning the volume all the way down requires too many turns. Thus, I also wanted
to have a mute button. I decided that since I never have used the second mic
input, I can use it's "Pad" button to fulfil this role. The "Pad" button has a
state, and it's lit when it's turned on.

In order to implement these ideas, I had to write a script. I decided not to
use Python to avoid over-designing the solution, instead I turned to something
really simple, stemming from the original UNIX systems of 70-s—a bash script.
In fact, this solution is truly portable as the POSIX subsystem is part of any
modern operating system, including even Windows (via WSL).

The logic of the script is simple. I use the volume of the phones output as the
source value for all analog outputs driving my desktop speakers: outputs
1–5. The volume of the output 6 is used to store the mute level. Thus, in
practice it can be a full mute, or it can be just a "dim" (for example,
**-40 dB**). The value of the pad for Mic 2, as I've mentioned before, is used
to switch between normal and mute trim levels. This way, the control logic can be
described as follows:

 1. Read the current values of the "main" and "mute" trims, and the value
    of the mute toggle switch.
 2. Depending on whether the device is supposed to be muted according to the
    switch, swap the values as needed.
 3. Apply the volume to the analog outputs.

Then the script uses the ETag polling technique to ask the server to report back
when any of the values have changed as a result of user's action (this is also
described in MOTU's manual). Then all goes back to the start.

The full script code is [here on
GitHub](https://github.com/mnaganov/volume-control/blob/master/motu-volume.sh),
it's only about **70** lines of code. If needed, this way of controlling the
MOTU interface can be extended to be fully remote.
