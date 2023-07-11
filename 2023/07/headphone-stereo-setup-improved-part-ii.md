# Headphone Stereo Setup Improved, Part II

In [the Part I of these post
series](/2023/04/headphone-stereo-setup-improved-part-i.html), I presented the
architecture of my headphone audio processing chain along with an overview of
the research it is based upon. In the Part II (this post), I'm presenting test
tracks that I use in the process of adjusting the parameters, and the framework
and tools for understanding them. The description of the adjustment process thus
slips to upcoming Part III of this series of posts.

## A Simplified Binaural Model of Hearing

Before we dive into tracks, I would like to explain my understanding of binaural
hearing mechanism by presenting a simple model that I keep in my mind. Binaural
hearing a very complex subject and I'm not even trying to get to the bottom of
it. I have compiled together information from the following sources:

 - P. Damaske, *"Acoustics and Hearing"*, [2008 Springer book](https://link.springer.com/book/10.1007/978-3-540-78229-2);
 - D. Griesinger, *"Frequency Response Adaptation in Binaural Hearing"*, [2009 AES paper](http://www.aes.org/e-lib/browse.cfm?elib=14964);
 - R. Lyon, *"Human and Machine Hearing"*, [2017 Cambridge Uni book](https://www.cambridge.org/core/books/human-and-machine-hearing/3660166B40020EE587D94BB7A309FC12);
 - M. Takanen, G. Lorho, *"A Binaural Auditory Model for the Evaluation of
   Reproduced Stereophonic Sound"*, [2008 AES paper](http://www.aes.org/e-lib/browse.cfm?elib=14501),
   [2012 AES paper](http://www.aes.org/e-lib/browse.cfm?elib=16204);
 - G. Thiele, *"Equalization of Studio Monitor Headphones"*, [2016 AES paper](http://www.aes.org/e-lib/browse.cfm?elib=18350).

Note that the models presented in these sources are different from one another,
and as it usually happens in the world of scientific research, there can be
strong disagreements between authors on some points. Nevertheless, there is a
number of aspects on which most of them agree, and here is what I could distill
down:

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYU9J-_OpvNjjuESo7catZHt-mWXTRS73FmSlGrmw-420NHa2yEmH3iLMgSCPxp4X1M951DonYrXQzNkrqXyaeRxkdFOK8lWj-y1LgPMoL4ItQuBwCQqObovIWu2h5vbGwBL8HDsh9OTnPvwOMLmC50APDA5npfBKqfv1AwdQZ38jIxlZEQPM9Aq-iG-02/w406-h471/Binaural-Hearing-Model.png" width="406" height="471" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYU9J-_OpvNjjuESo7catZHt-mWXTRS73FmSlGrmw-420NHa2yEmH3iLMgSCPxp4X1M951DonYrXQzNkrqXyaeRxkdFOK8lWj-y1LgPMoL4ItQuBwCQqObovIWu2h5vbGwBL8HDsh9OTnPvwOMLmC50APDA5npfBKqfv1AwdQZ38jIxlZEQPM9Aq-iG-02/s721/Binaural-Hearing-Model.png)

From my understanding, after performing auto-correlation and per-band
stabilization of auditory images for the signals in each ear, the brain attempts
to match the information received from the left and the right ear in order to
extract correlated information. Discovered inter-aural discrepancies in time and
level allow the auditory system to estimate the position of the source, using
learned HRTF data sets. Note that even for the same person there can be multiple
sets of HRTFs. There is an understanding that there exist "near-field" and
"far-field" HRTFs which can help in determining the distance to the source (see
[this AES paper](http://www.aes.org/e-lib/browse.cfm?elib=18697) for an
example).

For any sound source for which the inter-aural correlation is not positive,
there are two options:

 - If the sound has an envelope (that is, a period of onset and then a decay),
   its position will likely be "reset" to "inside the head." This applies both
   to uncorrelated and anti-correlated sounds. I'm not sure about the reason of
   the "resetting" for anti-correlated signals, however for uncorrelated signals
   this is pretty obvious as no remote external sound source can produce
   unilateral audio images. So the brain decided that the source of the sound
   must be a bug near your ear, or maybe even inside it :)

 - If the sound lacks an envelope: a continuous noise or buzz for example, it
   can remain "outside the head," however it's position will not be determined.
   In the real world, I did encounter such cases in airport and shops, when a
   "secured" door left open somewhere far away is making continuous ringing or
   beeping, and the sound is kind of "floating" around in the air, unless you
   get youself close enough to the source of the signal so that the inter-aural
   level difference can help in localizing it.

An important takeaway from this is that there are many parameters in the
binaural signal that must be "right" in order for the hearing system to
perceive it as "natural."

## The Goniometer Tool

For me, the best tool for exploring properties of the correlation between the
channels of a stereo signal is [the
goniometer](https://en.wikipedia.org/wiki/Goniometer_(audio)). In its simplest
form, it's a two-dimensional display which shows the combined output from the
left and the right channels, in time domain. Basically, it visualizes the
mid-side representation which I was discussing in [the previous
post](/2023/06/on-midside-equalization.html). Usually the display is graded in
the following way:

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipeV5Kinna1qUekNs1IAQsEFwpc-G1w7PJZCWDeySRevHpFOvUr1nnqxyLYXF_AvyefGuAtHN8gvHps3iazd6FjVmimACriyy7l4BDE2S6vJWKDNNj5Tu7nqgSPgUNUNbQegobO13QM1mJodWB-hWP3qfSE6vDO4zAhRGcHrLYi3XOEvXSEiU5dYVxCxtn/w200-h190/Goniometer.png" width="200" height="190" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipeV5Kinna1qUekNs1IAQsEFwpc-G1w7PJZCWDeySRevHpFOvUr1nnqxyLYXF_AvyefGuAtHN8gvHps3iazd6FjVmimACriyy7l4BDE2S6vJWKDNNj5Tu7nqgSPgUNUNbQegobO13QM1mJodWB-hWP3qfSE6vDO4zAhRGcHrLYi3XOEvXSEiU5dYVxCxtn/s312/Goniometer.png)

Even this simplest implementation can already be useful in checking whether the
signal is "leaning" towards left or right, or perhaps there is too much
uncorrelated signal. Below are renderings of stereo pink noise "steered" into
various spatial directions. I have created these pictures based on views
provided by [the JS: Goniometer
plugin](https://reaper.blog/2012/09/js-effect-spotlight-gfxgoniometer/) bundled
with the Reaper DAW):

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgh1tcRhaOkTnlXRv7cs5lmDcdlXjFT9ib9gRKZ1w9Ct2KHa9JLQRCX6MlwQ-119NY_z1pB7WeG-cNE7r_0caX5T1rgl8LZ-bPJe2G5YjVIQmGO24FdfZwh767fZZkBFiPN8Nqw2Fsqx7NkgnHL-D7Qdhq2b4T8BhkGz1jNr5mS6OyWhtx0bKv61ecEkv10/w552-h308/Goniometer-Examples.png" width="552" height="308" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgh1tcRhaOkTnlXRv7cs5lmDcdlXjFT9ib9gRKZ1w9Ct2KHa9JLQRCX6MlwQ-119NY_z1pB7WeG-cNE7r_0caX5T1rgl8LZ-bPJe2G5YjVIQmGO24FdfZwh767fZZkBFiPN8Nqw2Fsqx7NkgnHL-D7Qdhq2b4T8BhkGz1jNr5mS6OyWhtx0bKv61ecEkv10/s1352/Goniometer-Examples.png)

The upper row is easy to understand, the interesting thing though is that while
purely correlated or purely anti-correlated noise produces a nice line—that's
because samples in both channels always carry either exactly the same or
strictly opposite values, the mix of correlated and anti-correlated noise sort
of "blows up" and turns into a fluffy cloud. Also, when panning purely
correlated or anti-correlated noise, it just rotates around the center. Whereas,
panning of the mix of correlated and anti-correlated looks like we are
"squeezing" the cloud until it becomes really thin. Finally, with initially
correlated signal, adding a small delay in one channel destroys correlation of
higher frequencies, and what used to be a thin line becomes a cloud squeezed
from the sides.

To see the latter effect in more detail, we can use a more sophisticated
goniometer implementation which also shows the decomposition in the frequency
domain, in addition to the time domain. For example, I use [the free GonioMeter
plugin by ToneBoosters](https://www.toneboosters.com/tb_goniometer_v1.html).
Below is the view on the same signal as in the bottom right corner of the
previous picture:

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUv3QFuKuiKcwmDE_r7QKk7AG6ORfGcWz9OACgkHo6Q3LaHMKLnHyB69Fpj9L2oRjmHGPK67MgQsqNHAG0CgU1Dd8dMJOt4A395hmS63pMgP4R0xnCLD5KWe-S4XROyLMoqIeyHPOHsyxggyDCcB8YfTALyr2xOKAF7oIjuJm1n7SRg7vn6ZOgblsMK2FJ/w589-h241/TB-Goniometer.png" width="589" height="241" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUv3QFuKuiKcwmDE_r7QKk7AG6ORfGcWz9OACgkHo6Q3LaHMKLnHyB69Fpj9L2oRjmHGPK67MgQsqNHAG0CgU1Dd8dMJOt4A395hmS63pMgP4R0xnCLD5KWe-S4XROyLMoqIeyHPOHsyxggyDCcB8YfTALyr2xOKAF7oIjuJm1n7SRg7vn6ZOgblsMK2FJ/s1447/TB-Goniometer.png)

The time-domain goniometer display is at the center—the same squeezed cloud, and
to the left and to the right of it we can see a frequency-domain view of
correlation and panning. This is the tool which I used to get an insight into
the techniques used for stereo imaging of my test tracks.

## Test Tracks

Now, finally, let's get to the tracks and how I use them. Overall, these tracks
serve the same purpose as test images for adjusting visual focus in optical
equipment. The important part about some of them is that I know which particular
effect the author / producer wanted to achieve, because it's explained either in
the track itself, or in the liner notes, or was explained by the producer in some
interview. With regular musical tracks we often don't know whether what we hear
is the "artistic intent" or merely an artefact of our reproduction system.
Modern producer / consumer technology chains like Dolby Atmos are intended to
reduce this uncertainty, however for traditional stereo records there are lots
of assumptions that may or may not hold for the reproduction system being used,
especially for headphones.

### Left-Right Imaging Test

This is Track 10 *"Introduction and Left-Right Imaging Test"* from ["Chesky
Records Jazz Sampler & Audiophile Test Compact Disc,
Vol. 1"](https://www.discogs.com/release/2818064-Various-Chesky-Records-Jazz-Sampler-Audiophile-Test-Compact-Disc-Volume-1). This
track is interesting because apart from conventional "between the speakers"
positions, it also contains "extreme left" ("off-stage left") and "extreme
right" positions that span beyond speakers. This effect is achieved by adding
anti-correlated signal to the opposite channel. Let's use the aforementioned
GonioMeter plugin for that. This is the "center" position:

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjk4ae8QHUdT_gmzKnwrQ0YmLhCckZ5cUFCFNmEUkgDAB9FBkmeWb2bTxSR0N2ZJ8rW1ofUYsWWQyFNZv8MgKPWkQ-bSXg1sBjYLX6_9Fuz-1GMeMQJbyz_-o2EPY6qgL_1YpALgZwkrRS7e32Fr0WEGyw7TOtCLOOU2F3VL4MrOQFCZr-h-tslVyu8-u4u/w590-h240/LR-Imaging-Goniometer-Center.png" width="590" height="240" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjk4ae8QHUdT_gmzKnwrQ0YmLhCckZ5cUFCFNmEUkgDAB9FBkmeWb2bTxSR0N2ZJ8rW1ofUYsWWQyFNZv8MgKPWkQ-bSXg1sBjYLX6_9Fuz-1GMeMQJbyz_-o2EPY6qgL_1YpALgZwkrRS7e32Fr0WEGyw7TOtCLOOU2F3VL4MrOQFCZr-h-tslVyu8-u4u/s1393/LR-Imaging-Goniometer-Center.png)

Midway between center and right:

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjE_VuomQzx7oya8XKBB_LQLo09lf6bUqpp3ISgNgPCVaO7k-fPwUYdVD8sdaqRgD4XC30ucgtYHabawE4KYBCBNzYmZ7hOvoc-TnPr06wKQD-v7tQ4xazANenxN0DKTRIzLm7fPeXAHatStmcdAXmxCk_W52kvGhvaTdWNqkr2Q3pn2HbZ-v4BH7ZyiST3/w590-h243/LR-Imaging-Goniometer-RightMidway.png" width="590" height="243" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjE_VuomQzx7oya8XKBB_LQLo09lf6bUqpp3ISgNgPCVaO7k-fPwUYdVD8sdaqRgD4XC30ucgtYHabawE4KYBCBNzYmZ7hOvoc-TnPr06wKQD-v7tQ4xazANenxN0DKTRIzLm7fPeXAHatStmcdAXmxCk_W52kvGhvaTdWNqkr2Q3pn2HbZ-v4BH7ZyiST3/s1423/LR-Imaging-Goniometer-RightMidway.png)

Fully to the right, we can see that the inter-channel correlation across the
frequency range is dropping to near zero or lower:

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSgfPrvY0Zwzl7AAVS1ABOmcJlpfggvaJGY2TecGSffscNqUjqR5REVQ2ViwLWnpbIUzjw9HwrvwTF8NIjcyO5L7uoSjG-Hpj0NFGycxDPFoZWOqhuq5Gi8E3JiRIdz6IiPxkgX2w668o35lIrPMbTkvGyouMLtRuA-lCEGenCRr5bsqlRifxnyXB-SugQ/w588-h241/LR-Imaging-Goniometer-RightFull.png" width="588" height="241" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSgfPrvY0Zwzl7AAVS1ABOmcJlpfggvaJGY2TecGSffscNqUjqR5REVQ2ViwLWnpbIUzjw9HwrvwTF8NIjcyO5L7uoSjG-Hpj0NFGycxDPFoZWOqhuq5Gi8E3JiRIdz6IiPxkgX2w668o35lIrPMbTkvGyouMLtRuA-lCEGenCRr5bsqlRifxnyXB-SugQ/s1405/LR-Imaging-Goniometer-RightFull.png)

Off-stage right, channels have entered the anti-correlated state, note that the
panning indicator at the top part of the time-domain view does not "understand"
the psychouacoustic effect of this:

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2w4mEMOb1zlelEROWuKv6UL4sgywbwBjbqi9zmXiTSBt7BsrjaQhaQ-AJNA7pth3vg7HZ7hAuthmp5IoJRT0m0kZSDqggWWgwUX-JA7h_-Thc8y90M74JvJzQNYPAVcJjHo4Lr9qVmNnsRklXArjupCNA0wyfMJ0zwuBUJsoyqh9tj7vdBcYLXaxWCH81/w593-h243/LR-Imaging-Goniometer-RightExtreme.png" width="593" height="243" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2w4mEMOb1zlelEROWuKv6UL4sgywbwBjbqi9zmXiTSBt7BsrjaQhaQ-AJNA7pth3vg7HZ7hAuthmp5IoJRT0m0kZSDqggWWgwUX-JA7h_-Thc8y90M74JvJzQNYPAVcJjHo4Lr9qVmNnsRklXArjupCNA0wyfMJ0zwuBUJsoyqh9tj7vdBcYLXaxWCH81/s1401/LR-Imaging-Goniometer-RightExtreme.png)

And for comparison, here is off-stage left—similarly anti-correlated channels,
however the energy is now on the left side:

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2ovuhPB4DcA3e-XL-uHJX00E_S8I7lzzqcHOJdFhzIbcJcXoUtcgHsVGC3DgaFNoG5dpffYC7tZdtTGkcL0BXJyAe-F8s_3uG7gdX9zoleAjsn1022Qelcr6Z0vFRJdQ5TPHSV5pBYoNylkJPfUHDJYXOTma1UvlBkJBgYsymOvpQ9k408yCQTTV6C5tN/w596-h248/LR-Imaging-Goniometer-LeftExtreme.png" width="596" height="248" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2ovuhPB4DcA3e-XL-uHJX00E_S8I7lzzqcHOJdFhzIbcJcXoUtcgHsVGC3DgaFNoG5dpffYC7tZdtTGkcL0BXJyAe-F8s_3uG7gdX9zoleAjsn1022Qelcr6Z0vFRJdQ5TPHSV5pBYoNylkJPfUHDJYXOTma1UvlBkJBgYsymOvpQ9k408yCQTTV6C5tN/s1414/LR-Imaging-Goniometer-LeftExtreme.png)

Considering the "extreme" / "off-stage" positions, we can see that although the
stereo signal is panned to the corresponding side, the opposite channel is
populated with anti-correlated signal. Needless to say, the "off-stage"
positions do not work with headphones unless some stereo to binaural processing
is applied. The brain is unable to match the signals received from the left and
the right ear, and "resets" the source position to "inside the head." Binaural
processing adds necessary leaking thus allowing the brain to find similarities
between the signals from the left and the right ears and derive the position.

Following the binaural model I have presented in the beginning of the post, the
"extreme" left and right positions from the *"Left-Right Imaging Test"* can't be
matched to a source outside of the head unless we "leak" some of that signal
into the opposite ear, to imitate what happens when listening over speakers.
However, if the room where the speakers are set up is too "live," these
"off-stage" positions actually end up collapsing to "inside the head"!
Also, adding too much reverb may make these extreme positions sounding
too close to "normal" left and right positions, or even push them between the
positions of virtual speakers.

That's why I'm considering this track to be an excellent tool not only for
testing binarual rendering, but also for discovering and fixing room acoustics
issues.

### Natural Stereo Imaging

This is Track 28 *"Natural Stereo Imaging"* from ["Chesky Records Jazz Sampler &
Audiophile Test Compact Disc,
Vol. 3"](https://www.discogs.com/release/6153186-Various-Best-Of-Chesky-Classics-Jazz-And-Audiophile-Test-Disc-Volume-3)
(another excellent sampler and a set of test recordings). The useful part in
this track is the live recording of a tom-tom drum naturally panned around the
listener. I have checked how the "behind the listener" image is produced, and
found that it also uses highly decorellated stereo. This is "in front of the
listener" (center):

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuBClCjPFz1KTYn0cYO_tKViWURS57cq5aDpI0RNEM169e0OC9gHt2-jTnwd0g3PWLL7qaL0-rPoX-ZC1vVvAG0b7grxtSCjwaUQcQkKL48TMbRj22q0NePLT12H89HlnJ1R-5yloDqXzqIDW5pAv7ulM0ktGzrIo4fBJ54_XJczxMac_L4fVuk7HeuUWu/w592-h246/Natural-Stereo-Front.png" width="592" height="246" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuBClCjPFz1KTYn0cYO_tKViWURS57cq5aDpI0RNEM169e0OC9gHt2-jTnwd0g3PWLL7qaL0-rPoX-ZC1vVvAG0b7grxtSCjwaUQcQkKL48TMbRj22q0NePLT12H89HlnJ1R-5yloDqXzqIDW5pAv7ulM0ktGzrIo4fBJ54_XJczxMac_L4fVuk7HeuUWu/s1420/Natural-Stereo-Front.png)

And this is "behind the listener":

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxPQvSpQYE75UbmAoypacwjypUJxF326loka5nGEs-oIHpD0UqaoqUyhKrYG-in18yLYpbIhl0gpDgQbDezh1wN6iPQvx8364DJke71SvKiwamIlLXfPeY115JCgu1u7hCIkcBoJfocq6PhQSM4SFoIuvlFCRQptUyY6yBNfqPqQ6HehVXzhYMg1gNwfO2/w592-h242/Natural-Stereo-Back.png" width="592" height="242" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxPQvSpQYE75UbmAoypacwjypUJxF326loka5nGEs-oIHpD0UqaoqUyhKrYG-in18yLYpbIhl0gpDgQbDezh1wN6iPQvx8364DJke71SvKiwamIlLXfPeY115JCgu1u7hCIkcBoJfocq6PhQSM4SFoIuvlFCRQptUyY6yBNfqPqQ6HehVXzhYMg1gNwfO2/s1414/Natural-Stereo-Back.png)

We can see that level-wise, they are the same, however the "behind the listener"
is has negative inter-channel correlation. Needless to say, correct reproduction
of this recording over the headphones requires cross-feed. But there is another
thing to pay attention to. As the drum is moving around the listener, in a
natural setting I would expect the image to stay at the same height. In
headphones, this requires both correct equalization of the frontal and diffuse
components, and some level of added reverberation in order to enrich the diffuse
component with high frequencies. If the tuning isn't natural, the auditory image
of the drum may start changing its perceived height while moving to sides and
behind the head, for example, it might suddenly start appearing significantly
lower than when it was in the front of the head.

### Get Your Filthy Hands Off My Desert

This is track 7 or 8, depending on the edition, of Pink Floyd's ["The Final
Cut"](https://www.discogs.com/master/19698-Pink-Floyd-The-Final-Cut) album. The
track is called *"Get Your Filthy Hands Off My Desert"* and contains a
spectacular effect of a missile launched behind the head and exploding above the
listener. The perceived height of the explosion helps to judge the balance
between "dark" and "bright" tuning of the headphones.

Another good feature of the track is the spaciousness. As I understand it, the
producer [was using the famous Lexicon 224 reverberation
unit](https://www.vintagedigital.com.au/lexicon-224-digital-reverberator/) (a
brainchild of Dr. David Griesinger) in order to build the sense of being in the
middle of a desert.

### The Truths For Sale (the ending)

This is the final 1/2 minute of the Track 4 from ["Judas
Christ"](https://www.discogs.com/master/27748-Tiamat-Judas-Christ) album by
gothic metal band Tiamat. For some reason it's not a track on its own, but it
really could be. I must say that I listen to this album since it was released in
**2002**, but never until I started digging into headphones tuning this fragment
really stood out for me. It was a pleasant shock when I've realized how much
externalized and enveloping can it sound. Similar to the Brian Eno's music (see
below), it's very easy to believe that the droning sound of the track is really
happening around you.

Being part of a metal album, this track contains a lot of bass. Perhaps, too
much. It's a good test to see whether the particular headphones are too heavy on
the bass side. In this case, their resonances seriously diminish the sense of
externalization because, thanks to the sensation of vibration, your brain
realizes that the source of the sound is on your head. That's why this track
complements well the previous one when checking the balance between low and high
frequencies.

### Spanish Harlem

Track 12 from the album ["The
Raven"](https://www.discogs.com/master/537474-Rebecca-Pidgeon-The-Raven) by
Rebecca Pidgeon is an audiophile staple. It's the famous *"Spanish Harlem"*
track, it presents acoustically recorded ensemble of instruments and a female
vocal. I use it for checking "apparent source width" and also localization of
the instruments when comparing between different processing tunings.

The producer of this record, Bob Katz,
[recommends](https://www.digido.com/portfolio-item/subwoofers/) checking for
bass resonances by listening to loudness of individual bass notes in the
beginning of the track. Although, his advice was addressing subwoofer tuning, it
applies to headphones as well, as they can also have resonances. Luckily, bass
unevenness is much less concerning with headphones.

### Ambient 1: Music For Airports

This is Track 1 from ["Ambient 1: Music For
Airports"](https://www.discogs.com/master/6265-Brian-Eno-Ambient-1-Music-For-Airports)
by Brian Eno. It doesn't have a real title, just a mark that it's track 1 on the
side 1 of the original vinyl issue of this album. This is an ambient track with
sound sources floating around and lots of reverb, another very good example of
the power of the Lexicon 224 reverb unit.

For me, this track is special because with a more or less natural headphone
tuning it allows me to get into a state of transcending inside the world built
by the sound of the album. My brain starts to perceive the recorded sounds as
real ones, and I get a feeling that I don't have any headphones in/on my ears. I
think, this happens because the sounds are somewhat "abstract" and it makes it
easier for the brain to believe that they actually can exist around me in the
room. Also, the sources are moving around, and this helps the brain to build up
a "modified" HRTF for this particular case.

It's interesting, that after "priming" the auditory system with this track, all
other tracks listened in the same session also sound very natural. I can easily
distinguish between tracks with a good natural spaciousness, and tracks that
resemble "audio cartoons," in the sense that they lack any coherent
three-dimensional structure. I suppose, this state is that's the highest level
of "aural awareness" which usually requires a room with a controlled reverb, and
a very "resolving" speaker system. I'm glad that I can achieve that with just
headphones.

### Immaterial

I could easily use the entire album
["Mine"](https://www.discogs.com/master/624053-Architect-Mine) by Architect (a
project of Daniel Myer, also known for the Haujobb project) for the purpose of
testing source placement and envelopment. This electronic album is made with a
solid technical knowledge about sound and understanding of a good spectral
balance, and is a pleasure to listen to. However, I don't actually listen to
this track myself during the tuning process. Instead, I render the track 5,
*Immaterial* via the processing chain after completing the tuning in order to
catch any clipping that may occur due to extra gain resulting from
equalization. Below are the short-term and overall spectral views of the track:

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEil8lhNHhbGhnuVRTeGsMLBfdReYMruXuzyAAPJ_tN9k5ga2ayyT4evxacS9R0QX8NZXsSnB1d-KATZU3iN73B5c2Y30cvl-nz1lf93N03VtLnnbvv_P5r6tRnCsBIq-4aw3S0kM5uaJ0eEAUY7Dj02W89dICt6q7OZWL6kT5tf73oWH8UooNSroW9z9BJ8/w640-h264/Immaterial-ShortTermSpectrum.png" width="640" height="264" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEil8lhNHhbGhnuVRTeGsMLBfdReYMruXuzyAAPJ_tN9k5ga2ayyT4evxacS9R0QX8NZXsSnB1d-KATZU3iN73B5c2Y30cvl-nz1lf93N03VtLnnbvv_P5r6tRnCsBIq-4aw3S0kM5uaJ0eEAUY7Dj02W89dICt6q7OZWL6kT5tf73oWH8UooNSroW9z9BJ8/s1249/Immaterial-ShortTermSpectrum.png)

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKPCOZdfyK3gqCm3OLqxw77oi4iDTFX0qj38ktRtzNNZzedUoLiNpAh4ekmG-77C8hiGwMH4ZkH22C9x0-OY9-hBmnLrueqTt1LtPmHUKDUp0pAcD7UOv0BvVwEm6GsfoJhciQw62xARaWdJVaIGuOxeL9L79Kavjjdzp74Ap3-hKCf_RA3HIKPj6V6oLr/w640-h266/Immaterial-LongTermSpectrum.png" width="640" height="266" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKPCOZdfyK3gqCm3OLqxw77oi4iDTFX0qj38ktRtzNNZzedUoLiNpAh4ekmG-77C8hiGwMH4ZkH22C9x0-OY9-hBmnLrueqTt1LtPmHUKDUp0pAcD7UOv0BvVwEm6GsfoJhciQw62xARaWdJVaIGuOxeL9L79Kavjjdzp74Ap3-hKCf_RA3HIKPj6V6oLr/s1315/Immaterial-LongTermSpectrum.png)

We can see that the track has a frequency profile which is actually more similar
to white noise, not pink noise, thus it features a lot of high frequency
content, that is, a lot of "air." That means, if I tilt the spectrum of the
processing chain in favor of high frequencies, with this track there is a higher
chance to encounter clipping. The sound material on this album also uses quite
massive synthesized bass. That's why it's a good track to validate that the gain
of the processing chain is right across the entire spectrum.

### Synthetic and Specially Processed Signals

I could actually list much more tracks that I briefly use for checking this or
that aspect of tuning, but we have to stop at some point.

While "musical" recordings are useful for checking general aspects of the
tuning, in order to peek into details, we can use specially crafted sounds that
represent a specific frequency band, for example. Traditionally, such sounds are
obtained from synthesizers or noise generators, however I've found that
processed "real" sounds tend to provide more stable results when judging the
virtual source position.

In my process, I use recordings of percussion instruments: tambourine, bongos,
and the snare drum. By themselves, they tend to occupy a certain subset of the
audio spectrum, as we can see on the frequency response graph below (the snare
drum is the green line, bongos are the red line, tambourine is the blue line):

[<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhT_IRk893DHHWRkn2obQiEKEPe0yzOvVPp-25pRaQtwf3dyoEsXPLUFeL5ccoitkBGdKDiKhVRrzVXLvtTErJR6Gd4U1XKn0tBlVYTalp1SeGOfKRp19KxKw39b53Q9uxYgJ8oAUK4eT9WT5PuqHeBR6o6bs0GzxO50IRpb-3PnRLV1TAsL5iDJQtxZC1T/w640-h426/percussion-frequencies.png" width="640" height="426" />](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhT_IRk893DHHWRkn2obQiEKEPe0yzOvVPp-25pRaQtwf3dyoEsXPLUFeL5ccoitkBGdKDiKhVRrzVXLvtTErJR6Gd4U1XKn0tBlVYTalp1SeGOfKRp19KxKw39b53Q9uxYgJ8oAUK4eT9WT5PuqHeBR6o6bs0GzxO50IRpb-3PnRLV1TAsL5iDJQtxZC1T/s700/percussion-frequencies.png)

However, to make them even more "surgical," I process them with a linear phase
notch filter and extract the required band. This of course makes the resulting
sound very different from the original instrument, however it preserves the
envelope of the signal, and thus the ability of the brain to identify it.  I use
the critical bands of [the Bark
scale](https://en.wikipedia.org/wiki/Bark_scale), as it has strong roots in
psychoacoustics.

I took these instrument recordings from an old test CD called [Sound
Check](https://www.discogs.com/master/411043-Alan-Parsons-Stephen-Court-Sound-Check),
produced in **1993** by Alan Parsons and Stephen Court. The CD contains a lot of
good uncompressed and minimally edited recordings, and for me, it stands together
with the demo/test CDs from Chesky Records.

## Consumer Spatializers

So, I'm going this DIY path, however these days there exist very affordable
spatializers built into desktop and mobile OSes that can do binaural playback
for stereo, and even employ head tracking, after "magically" guessing your HRTF
from photographs of your head and ears. For sure, I did try these, however
consumer-grade spatializers do not perform well on all my test tracks. For
example, the "off-stage" positions from *Left-Right Imaging Test* we not
rendered correctly by any spatializer I tried, instead it was collapsing to
inside the head. The closest to my expectation was the Apple spatializer for
AirPods Pro in the "head tracking" mode, however even in this case more or less
correct positioning was observed for the right "off-stage" position only.

Yet another problem with consumer-grade spatializers I tried is that for lower
latency they tend to use minimum-phase filters, and these distort the phase and
group delay while applying signal magnitude equalization. This essentially kills
the perception of the performance space which I preserve with my processing
chain where I always use linear-phase filters. Each time I tried to substitute
an LP filter with an MP equivalent (in terms of signal magnitude), the
reproduction was blurred down and degrading into essentially a two-dimensional
representation.

If I have a budget for that, I would go with a "proper" binaural spatializer
like [Smyth Realizer](https://smyth-research.com/). But I don't, and for me
making my own spatializer is the only viable alternative to get the sound I
want.

## Conclusions

It's a really long road to getting to a natural reproduction of stereo records
in headphones, and we are slowly making it. In the process of making anything
well, good tools are of a paramount importance. I hope that the description of
the goniometer, and its application to analysis of described test tracks, as
well as their intended use, did help. A lot more material will be covered in
subsequent posts.
