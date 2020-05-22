# MOTU UltraLite AVB: Hybrid Stereo + 5.1 Setup

I use [MOTU UltraLite AVB](http://motu.com/products/avb/ultralite-avb)
as my primary sound interface. It's a versatile and easy to use device,
with lots of audio inputs, outputs, and excellent DSP-based routing and
mixing capabilities. Once you have created a certain audio setup,
UltraLite AVB offers a way to save it and restore it later. For example,
I had a setup for **2.1** speaker configuration, and a setup for **5.1**
surround configuration (why they have to be different?—see below),
and I was switching between them depending on the material playing.

But switching between setups isn't something that my kids or wife can do
easily. So I decided to create a hybrid configuration that can be
applied to all my use cases. Here they are:

[![](https://2.bp.blogspot.com/-ZtCJF1TrIr8/WNgbZ3v9xXI/AAAAAAAALRY/3mcSgqASu1s36EUWokWOB_sSHcdXXqC7gCLcB/s1600/arrangements.png)](https://2.bp.blogspot.com/-ZtCJF1TrIr8/WNgbZ3v9xXI/AAAAAAAALRY/3mcSgqASu1s36EUWokWOB_sSHcdXXqC7gCLcB/s1600/arrangements.png)

**Use Case 1:** This one is active when kids play games. They sit next
to the computer, way behind the left and right monitors, so they can't
hear them properly. The only speaker that can deliver sound to them is
the [Cambridge Audio Minx
Go](https://www.cambridgeaudio.com/products/wireless-speakers/go)
located below the computer monitor.

**Use Case 2:** This one is for playing stereo content. The primary
speakers is a pair of [JBL
LSR305](http://www.jblpro.com/www/products/recording-broadcast/3-series/lsr305)
supported by [KRK 10s](http://www.krksys.com/krk-subwoofers/10s.html)
sub, comprising a **2.1** setup. But since there are also rear **KRK
RPG2 5** speakers set up for the surround use case, and the center
channel, these can be optionally engaged for widening the soundstage and
enhancing dialog clarity in movies.

**Use Case 3:** This is the real **5.1** surround setup where each of
the **6** speakers has its own channel to play. However, since the
speakers are not full range, bass parts of their channels need also to
be routed to the subwoofer, in addition to the LFE content.

The presence of additional speakers in the **2.1** setup doesn't allow
it to be used for the **5.1** case. Take for example, the left channel
in the **2.1** setup--it needs to be routed into the front left speaker,
as well as into the center, and into the rear left speaker, and this
routing is incompatible with the **5.1** setup, where the front left
channel only goes into the front left speaker.

On the computer side, achieving a hybrid setup is pretty easy. On Mac,
in Audio MIDI Setup app it's possible to assign different input channels
of a multi-channel audio interface to different configurations, e.g. for
stereo use input channels **1** & **2**, while for multichannel **5.1**
setup, use channels from **3** to **8**. Now, the question is, how to
configure MOTU to route the channels accordingly.

[<img src="https://2.bp.blogspot.com/-9WBNseFUnKo/WOFXjNAJb4I/AAAAAAAALTI/O6-uij9vkncZU4xAA8dq-UiHtQv8GqXyACLcB/s400/audio-midi-setup.png" width="400" height="311" />](https://2.bp.blogspot.com/-9WBNseFUnKo/WOFXjNAJb4I/AAAAAAAALTI/O6-uij9vkncZU4xAA8dq-UiHtQv8GqXyACLcB/s1600/audio-midi-setup.png)

This actually has turned out to be non-trivial. Mostly because the
approach for controlling routing and mixing used in MOTU products is
modeled after classical mixing boards used in studios. In practice that
means there are restrictions on what can be connected to what, and at
which stages effects can be applied.

The main effect I need is the equalizer—to perform some basic room
correction. Another important thing is digital attenuation which allows
aligning speaker output levels precisely, as knobs on inexpensive
powered monitors usually lack required precision—you can do basic
alignment with the knobs, but then if you need to make one of the
monitors softer, say by **1 dB**, the only way to achieve that is by
attenuating the corresponding channel on the sound card.

In order to visualize for myself all the allowed connections between
mixing stages of MOTU card, I've created the following diagram:

[![](https://1.bp.blogspot.com/-w0dLXNyF1hI/WNnm7amDP6I/AAAAAAAALSE/hLVomo9EFgIaCJfNazJafTNvhg-Yjd6kgCLcB/s1600/MOTU%2Bblocks.png)](https://1.bp.blogspot.com/-w0dLXNyF1hI/WNnm7amDP6I/AAAAAAAALSE/hLVomo9EFgIaCJfNazJafTNvhg-Yjd6kgCLcB/s1600/MOTU%2Bblocks.png)

See, it's actually not that simple. Each processing block can be
characterized with the following attributes:

-   how many inputs (and outputs) does it allow; typical values are
    **0**, **1**, and **many**. E.g. a sound card input can only output
    audio data to the DSP, so it have zero mixer inputs, but it can be
    used as a source to any number of other mixer blocks;
-   whether the block has effects; that's easy to figure out--only
    blocks that provide effects appear on the Mixing tab of MOTU control
    UI;
-   what is the way to route the output of the block back to DSP; E.g.
    the **"Mix Aux"** block—a plentiful resource, can't output to other
    mixing blocks, its output can only be chained via another **"Mixer
    Input"** block, and this connection is done using the Routing tab;
-   and finally, some stereo blocks can be split into independent mono
    channels, and some don't.

Note on the Reverb group: it's a special Mix Group because, first, it is
the only that contains a reverb effect, and second, other Mix Groups can
send to it directly from the Mixing tab, but not to each other. This
feature is expressed on the diagram as a special input marked **"R"**.

After figuring out the rules, and having the use cases in mind I've came
up with the following diagram of how the blocks should be connected:

[![](https://2.bp.blogspot.com/-PIMbjEAoJjI/WOFYluvEUMI/AAAAAAAALTU/Iji3PE3lgYwoAe_7jZYx2-JXOXDlfiuPQCLcB/s1600/Connections.png)](https://2.bp.blogspot.com/-PIMbjEAoJjI/WOFYluvEUMI/AAAAAAAALTU/Iji3PE3lgYwoAe_7jZYx2-JXOXDlfiuPQCLcB/s1600/Connections.png)

Here, "L" / "R" letters on inputs and outputs designate left and right
channel. I had to only use one channel on "Sub L" and "Sub R" groups
because equalizer settings are different for left and right channels,
and unfortunately a Mix Group can't be split into a pair of monos.

This is how the mixing configuration looks on MOTU UI (note that Mix Aux
strips didn't fit):

[<img src="https://2.bp.blogspot.com/-Z1vZn3hoNsk/WOFZie8oD0I/AAAAAAAALTc/771iC09gi64ik5qlwuAw7EAlGqlx2uBtQCLcB/s640/Mixing.png" width="640" height="483" />](https://2.bp.blogspot.com/-Z1vZn3hoNsk/WOFZie8oD0I/AAAAAAAALTc/771iC09gi64ik5qlwuAw7EAlGqlx2uBtQCLcB/s1600/Mixing.png)

Having a diagram at hand was really helpful to set everything up.

The Reverb group is used for the real channels in order to add a delay.
Unfortunately, there is no direct way to set up a delay on MOTU (that's
a big deficiency to my view, compared to miniDSP products). The trick
was to use a "Pre-delay" setting on Reverb effect, set all other
parameters of Reverb to minimum, and compensate with an EQ for a high
frequency shelving that Reverb creates. This restores the frequency
response, but not the phase, resulting in a non-uniform group delay. But
this is hardly noticeable.

As a conclusion, I would say that I greatly appreciate robustness of
MOTU configuration abilities, but I would really like to have some "DYI"
mode for DSP that would offer the following:

1.  Input bi-quad (or better, multi-pole multi-zero) coefficients
    directly.
2.  Remove the processing block "specializations".
3.  Input delays directly, not as part of the Reverb effect.
