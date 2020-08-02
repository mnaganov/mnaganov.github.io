# On Keyboards

I want to tell a story about my current computer keyboard.  A couple
of weeks ago I switched to Kinesis Advantage2 keyboard. This device
looks very unusual compared to most regular keyboards:

[<img src="https://1.bp.blogspot.com/-MShLZz0hQII/Xyb-Jc8VxqI/AAAAAAAARaU/Rmr3cjMaxgIZQSovaFn2EUDxNpRiVbYVwCLcBGAsYHQ/w640-h348/advantage2.jpg" width="640" height="348" />](https://1.bp.blogspot.com/-MShLZz0hQII/Xyb-Jc8VxqI/AAAAAAAARaU/Rmr3cjMaxgIZQSovaFn2EUDxNpRiVbYVwCLcBGAsYHQ/s750/advantage2.jpg)

As you can see, the design brings the ergonomics to the extreme and
fulfills several goals:

 * provide integrated wrist rests;
 * make better use of thumbs by putting more keys under them;
 * achieve more natural wrist positions;
 * provide similar path length from main 4 fingers to alphabet keys.

However, with this design a lot of keys were moved away from their
usual positions. The most notable differences are for the arrow keys,
brackets, and the keys that are located at periphery positions on
traditional keyboards like functional keys, tilde, and plus.

I'm not new to ergonomic keyboards. For a very long period I used
another keyboard by Kinesis called "Freestyle2":

[<img src="https://1.bp.blogspot.com/-HwrFK71P5B4/Xyb-UwwrpOI/AAAAAAAARaY/2VCtOAzGKk4Z4eeFRsW1xL2uS0gGLWbsQCLcBGAsYHQ/s640/freestyle2.jpg" width="640" />](https://1.bp.blogspot.com/-HwrFK71P5B4/Xyb-UwwrpOI/AAAAAAAARaY/2VCtOAzGKk4Z4eeFRsW1xL2uS0gGLWbsQCLcBGAsYHQ/s700/freestyle2.jpg)

As you can see, this keyboard is also ergonomic—it consists of two
halves that can be positioned at various angles. However, its layout
is more traditional and even somewhat superfluous—I've never made a
good use of the "shortcut" keys on the left (mostly because I use
actual shortcuts for all the actions these keys intend to provide, and
I can't use them for anything else as the keyboard doesn't allow for
remapping).

I'm in fact a big fan of keyboard shortcuts and learn them in any
application I use more or less frequently. I can't imagine using GMail
without shortcuts—at my job I receive from **100** to **200** emails
per day. While I was still using Freestyle2 I started noticing that my
right hand is aching after I had been using the bracket keys while going
through my inbox (the bracket keys are used in GMail to archive the
current email and go to the next one) and after active use of the
arrow keys for navigating in Emacs.

The Advantage2 keyboard was sitting in my drawer for a long time (at
the beginning of the COVID lockdown I had managed to get it at my
company's expense) but I was hesitating to start using it due to its
unorthodox layout. And as I've got the hand ache from using Freestyle2
I decided that it's a good opportunity to give Advantage2 a try.

I must admit, it took about **2** weeks until I could finally use it
without an extra mental effort for finding keys. The most infuriating
was "re-learning" the key combinations in Emacs.  For a lot of them
over the years I simply forgot what the actual keys are and was
invoking them using muscle memory exclusively. Since the key layout on
Advantage2 is different, I had to recall what are the keys used for
the combinations and had to learn where to find them on this keyboard.

Now I can clearly see benefits of using Advantage2: no wrist or arm
aching and typing feels more comfortable than on a traditional
keyboard.  Also, unlike Freestyle2 the Advantage2 keyboard is
programmable, meaning that you can remap keys and even record macros.
I actually did a couple of key remappings to make my typing more
comfortable.

## Key Remappings

First, I remapped the back space key (it's under the left thumb,
mirroring the space key under the right thumb) to serve as the
second space key. This is after my habit of having two separate
space keys on Freestyle2—I noticed that I end up pressing the
back space key on Advantage2 when I wanted to type a space.

OK, but the back space is a really useful key after all—where should
it go? I moved it to the nearby "Delete" key. It is still convenient
for an active operation. Good, but "Delete" is also useful in various
file managers as it allows deleting stuff. I found that on the left
side Advantage2 has an "extra" key—another copy of the backslash key:

[![](https://1.bp.blogspot.com/-tQHYB7kcyD8/Xyb-kNm2AvI/AAAAAAAARag/SiiYEuCvcscQST4_d_78FYqEUm9D2vgpACLcBGAsYHQ/s0/extra-insert.jpg)](https://1.bp.blogspot.com/-tQHYB7kcyD8/Xyb-kNm2AvI/AAAAAAAARag/SiiYEuCvcscQST4_d_78FYqEUm9D2vgpACLcBGAsYHQ/s600/extra-insert.jpg)

It's also used as the "Insert" key when you turn on virtual numeric
keypad. So I thought it's a good semantical link between "Insert" and
"Delete", and assigned the latter to this extra backslash key.

Finally, if you use Unix shells a lot you'll notice that the tilde key
is used very frequently. On traditional keyboards it's located to the
left from the number row. On Advantage2 for some reason this place was
given to the "+/=" key and the tilde key was moved to the bottom:

[![](https://1.bp.blogspot.com/-9P4xgLXI1SI/Xyb-tCVzIpI/AAAAAAAARao/_y3JfJdUv68XzrBZgDexwY56bZhb67PYQCLcBGAsYHQ/s0/tilde.jpg)](https://1.bp.blogspot.com/-9P4xgLXI1SI/Xyb-tCVzIpI/AAAAAAAARao/_y3JfJdUv68XzrBZgDexwY56bZhb67PYQCLcBGAsYHQ/s600/tilde.jpg)

The natural solution is to swap these two keys. So this is the layout
I ended up using:

[![](https://1.bp.blogspot.com/-udGFgraJsB0/Xyb-z_FlNjI/AAAAAAAARas/nbY49rFM2WU4AqWFImDnKPmKGk-xLlz4wCLcBGAsYHQ/d/advantage2-my-layout.jpg)](https://1.bp.blogspot.com/-udGFgraJsB0/Xyb-z_FlNjI/AAAAAAAARas/nbY49rFM2WU4AqWFImDnKPmKGk-xLlz4wCLcBGAsYHQ/s750/advantage2-my-layout.jpg)

And yet another cool feature of this keyboard is that all remappings
and macros are available as text files exposed on keyboard's internal
USB drive. For example, this is how my remappings are specified:

```
[=]>[`]
[`]>[=]
[intl-\]>[delete]
[delete]>[bspace]
[bspace]>[space]
```

This is what makes this keyboard a truly professional one.

## Practicing Typing

For a long time I practice my typing on
[Tipp10](http://online.tipp10.com) site. I know, there are myriads of
similar touch-type training sites. What I like about Tipp10 is their
scoring system which penalizes for typos. This stimulates you to type
slower but with less mistakes and build up speed slowly. The site also
allows for uploading your own typing lessons.

Building typing speed is something that doesn't come easy for me.
I'm trying to find any book or instruction that would be based
on a research on neuro-motor skills, but so far found none. The closest
thing I found is this free book on playing piano called ["Fundamentals
of Piano Practice."](http://www.pianopractice.org/)
It gives some practical advises on the exercises for developing
finger muscles and improving finger coordination, which helps to
build up speed and accuracy.

Of course, typing and playing piano are very different activities,
however I believe that they share some goals. I've learned a couple
of things from this book.

First is what they call "Hand Separate" practice. I've found that my
right hand is somewhat weaker and less accurate than the left one,
partially because I'm left-handed, and also because I had a minor
injury of my right hand resulted from winter biking. So it helped to
train this hand more intensely. This is where the design of Advantage2
is a real advantage—the hand zones are clearly separated.

The second technique is what the book calls "Parallel Sets" (PS for
short). Their strong side is that they can serve both as diagnostic
tests for the finger movement fluidness and as an exercise for
developing it.  The practice of the parallel sets is described to
length in the book, so I will not repeat it here. This is just an
example of custom typing exercises that I had created for myself in
Tipp10 (for QWERTY layout):

### PS Exercise 1

`aaaa ` x8, `jjjj ` x8, `ssss ` x8, `kkkk ` x8, for all front row keys.

### PS Exercise 2

```
asdf fdsa asdf fdsa asdf fdsa asdf fdsa
as as as as sa sa sa sa
sd sd sd sd ds ds ds ds
df df df df fd fd fd fd
asd asd dsa dsa asd asd dsa dsa
sdf sdf fds fds sdf sdf fds fds
```

And similar sequences for the right hand. There is also a variation
where I type left and right hand interleaved, for example:

```
ajsk ajsk ajsk ajsk ajsk ajsk
skdl skdl skdl skdl skdl skdl
```

### PS Exercise 3

```
ad ds sf ad ds sf ad ds sf ad ds sf
ads dsf ads dsf ads dsf ads dsf
adsf adsf adsf adsf adsf adsf adsf adsf
```

And similar sequences for the right hand. This exercise is actually
challenging. I've found that it really helps to do it for each hand in
isolation first.

---

In fact, all these exercises help to feel difference between
keyboards. I was doing them in parallel on Advantage2 and Freestyle2
keyboards, and I immediately felt the convenience of curved hand wells
of Advantage2 that helped to make the glide of fingers more fluid.

## Conclusions

I'm glad that I have switched to this keyboard. Among positive
sides I would specify:

 * great ergonomic design;
 * flexibility in configuration which makes this keyboard a real
   professional tool.

And on the flipside:

 * unorhodox layout which can interfere with muscle memory developed
   while writing program code and using code editors. This isn't
   a bummer, just requires some time for updating your muscle memory;
 * high price (but good quality).

I think Kinesis had understood these problems and at some point they
have introduced ["Freestyle
Pro"](https://kinesis-ergo.com/shop/freestyle-pro/) keyboard which has
the design of Freestyle2 and the customization engine of Advantage2.
It is also cheaper than Advantage2, so seems like a good alternative
to me.
