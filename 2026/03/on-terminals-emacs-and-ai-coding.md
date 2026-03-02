# On Terminals, Emacs, and AI Coding

Not an audio post, just some thoughts on programming hackery, see also my
old similar posts [On Keyboards](/2020/08/on-keyboards.html) and [Long Live
16 Color Terminals](/2022/11/long-live-16-color-terminals.html).

I think we have now entered the "Golden Age" of programming and use of
computers in general—all thanks to AI. That's because Programming tasks
that once took days can now be finished in a couple of hours. A personal
example of this is my experience extending [the Emacs
editor](https://www.gnu.org/software/emacs/). This is ages old "universal"
editor—its original concept was created in 1976 at the MIT AI Lab, while
GNU Emacs program that I use today was created in the mid-80s. However, it
is still popular today among programmers and geeks thanks to its infinite
possibilities in customizing and embracing new technologies. I use it every
day and continue customizing it to my needs.

The customization of Emacs is done by writing some Emacs Lisp code. If your
need is simple, like creating some custom action, or fixing some annoying
behavior, a small code snippet usually suffices. If your demand is more
serious, like enabling code highlighting and completion for some obscure
programming language, you need to create a relatively big chunk of code,
which in Emacs world is called a "package." If you are lucky, someone has
already faced the same problem and written a package to solve it. In that
case, the only thing you need to do is to plug this package into your
configuration.

If your need is more or less unique for some reason, then you have to write
code yourself. It's not super hard, but it's tedious, mainly because you
need to study extensive Emacs APIs and consider how to express the solution
in terms of list structures manipulation. Also, you need to write code that
handles errors, and make sure that your solution works with acceptable
speed. In order to accomplish all this, you used to have to comb through
Emacs documentation, source code, and if nothing helps, resort to seeking
help at online forums—this is what programming used to be. Since I usually
needed to deal with this stuff during my work hours, the thought of writing
a complex Emacs extension in my spare time sparked no joy.

Enter the Age of AI. Now, if I need to solve some simple Emacs
customization task, or fix an annoyance, I can simply ask an LLM, *"In
Emacs, how do I ... ?"*, and it comes with a helpful answer and a snippet
of Emacs Lisp code which does the thing you have asked about. In this way,
I quickly resolved minor Emacs "friction points" that had bugged me for
years. One big annoying thing still remained though—adding support for
proper displaying of output from semi-interactive build and install scripts
and programs in "shell" and "compilation" modes of Emacs. To explain this
problem, I first need to give a brief lesson in computer history.

## A Brief Course in Unix Terminals (and Editors) Evolution

The interface between humans and computers has evolved constantly since
their inception. At first, humans had to program computers—that is, setting
them up for solving a particular problem—by patching cables between
physical ports, or flipping myriad switches ([examples from
Wikipedia](https://en.wikipedia.org/wiki/Harvard_Mark_I)). And computers
were presenting the results of their work using arrays of lights. After the
next computer interface evolution step people could enter data into
computers using manually perforated cards, and the computer could print the
calculation results on long rolls of paper, using motorized versions of
typewriters. Both of those kinds of interfaces were not very much
interactive, and required a good amount of planning ahead in order to avoid
wasting precious compute time.

The interaction aspect had been improved by combining the aforementioned
motorized typewriters with a typewriter-like keyboard (see [this
article](https://en.wikipedia.org/wiki/Teletype_Model_33) about the
legendary "Model 33" teletype). Finally, humans could type their commands
or code in, and the computer could print the result immediately. You might
have noted that this is already very similar to how we are interacting with
AI assistants on the Web today, except that teletypes were much noisier.

Crucially, even at this early stage, a distinction between "symbol" and
"control" characters was already apparent. When you see a printed page, you
only see the letters of alphabet and punctuation—that's symbols. However,
for producing this page, the typewriter operator (being that human or a
computer) also needed to use some commands in order to drive the typewriter
actions like performing a step roll of the paper, or move the printing head
forward or back. Each of these actions was coming to the typewriter on the
same lines as printable symbols, and is encoded using a control character.

Thus, when a computer sends the result to a typewriter terminal, symbol
characters are interleaved with control characters in the same "stream" of
data. Same thing for the human—although most of the typewriter keys are for
inserting symbols, some keys like "carriage return" and "backspace" are for
sending commands. The computer also has a bonus command called "bell" which
it had adopted from telegraphy (so it actually predates computers). This
command originally rang a physical bell inside the teletype machine.
Nowadays, the computer just emits a short beep in order to attract the
operator's attention.

Despite being quite basic, this typewriter interface had already opened a
way to create interactive text editor programs. The most well known
line-oriented text editor is `ed`. Its interface was designed to be very
minimalist and terse, in order to save paper. `ed` was called "the standard
text editor" in Unix OS—and now this is a hacker's joke. In fact, `ed` is
still supplied with most OSes that descend from Linux.

Upon launching `ed`, you see no prompt; the program simply waits for your
commands. The command is typically just one character, plus parameter. If
`ed` does not understand your command, it prints `?`, that's it. Since the
file you are editing can be lengthy, `ed` does not reveal its
contents—instead, you have to explicitly ask it to show a region of lines,
and of course you can not edit them "in place", you need to enter a command
for making each edit. Also, since on a typewriter it's not possible to
correct typing mistakes in-place—there was no concept of "line editing"
using "cursor left / right" commands, you could only use "backspace" and
then re-type part of your command, or discard the entire command line and
re-type from scratch. Needless to say, editing text files using these basic
capabilities required very good memory, skills, and a lot of patience.

Nevertheless, it was the best user interface that programmers had at that
time, and in fact the early Unix OS code was written using `ed`. As Brian
Kernigan recalls in ["UNIX A History and a Memoir"
book](https://www.cs.princeton.edu/~bwk/memoir.html), there were three main
components that allowed development of Unix for PDP-7 computer on the
computer itself: an editor (and that was `ed`!), an assembler, and a
kernel.

In the next evolutionary step, paper teletypes were replaced by "glass
teletypes." These used CRT displays instead of paper, and their keyboards
started resembling modern ones. Note that these early glass teletypes did
lack the **scrollback buffer**, thus the lines that have been scrolled away
are gone forever. In some sense, this was a downgrade from paper rolls. On
the other hand, since typed characters were appearing on a screen, it was
possible to make in place corrections in the typed command text, and even
move the cursor left and right in order to correct typos in the middle of
the command—no more retyping!

The capabilities provided by this new type of terminals have spurred
improvements to `ed` editor. First, it has got a command for showing a
whole page of text from the file being edited, taking advantage of the
silent nature of video terminals. This version was called
[`em`](https://en.wikipedia.org/wiki/Ex_(text_editor)). Note that `em`
still had to be conservative in what it displays because the connection
line between the terminal and the computer was often painfully
slow. Implementing in-place editing for a whole document—a "visual"
editing—was not yet possible.

A lot of standard Unix utilities like `bash`, `cat`, `du` still operate in
a similar line-oriented mode and thus are still technically compatible with
typewriter-style terminals. In fact, Emacs exploits this fact by emulating
a "dumb" terminal (that's another name for the kind of terminal that only
understands basic cursor moving commands) in its "shell" mode. But in fact,
since Emacs works on a real computer, its shell mode is much smarter,
because it can hold the screen history of your entire session, and you can
go back to any previous command, change it as needed, and send again.

Back in time, similar capabilities had also appeared in new generations of
terminals that got their own CPU and RAM, and thus could hold in their
memory much more than just one screen of text. They also got colors! The
companies making them have coined the term "smart terminal." The terminal
technologies started to be a hot topic among technology companies (very
much like AI these days), and there was a "Cambrian explosion" of terminal
models, each with their own set of features.

These new features of smart terminals gave birth to a whole new set of
control commands. Since the controlled display area had expanded from a
single line into a two-dimensional array, there were commands that control
the cursor position on the screen, and perform screen clearing and
scrolling. For compatibility, and due to technical constraints, these new
commands were not single characters anymore (as "backspace" and "carriage
return" are), but rather entire sequences of characters, starting with the
"escape" command symbol.

The terminal controlling commands were still sent inline with the printable
symbols. When a smart terminal saw a command, it processed it
immediately. This was usually resulting in a cursor position change, or the
current color change, or enabling bold font, or something else (note that
some similarity with HTML language can be noted, except that unlike HTML
tags, control commands do not have a closing pair). If it was a symbol
character outside of the command, the terminal just printed it. To get a
sense of how many terminal models and various types commands were there,
take look at the "terminal information database"
[here](https://invisible-island.net/ncurses/terminfo.ti-entries.html).

Finally, smart terminals created possibility for visual editing, and
the `ex` editor was reworked into `vi`. The first versions of `vi` were
implemented by relying on `ex` running in visual mode. You could still
use the same commands that `ex` has inherited from `ed`, but you could also
navigate and scroll the document you are editing. The modern versions of
`vi` still use these two modes of operation.

Of course, other visual versions of existing UNIX system utilities
started to appear, for example, `top` is a visual interactive version of
`ps` (processes control), and `more` and `less` are visual pagers,
offering an alternative to line-oriented `cat`.

By the way, that terminal information database I mentioned above was not
created just for lessons in computer history. In fact, it was solving the
problem of **standardization** of the "terminals zoo". When a visual
program runs, it needs to know what the terminal is capable of, and also
what is the exact control characters sequence for each terminal command
(remember that there were hundreds of smart terminal models). There was a
library called
[`curses`](https://en.wikipedia.org/wiki/Curses_(programming_library))
which acted as a translator between a program and a
terminal. Unfortunately, a lot of modern command-line scripts and utilities
are unaware of this translation mechanism, and use control sequences
"blindly", assuming that the terminal is able to interpret them
correctly. In part, this works because these days we use "terminal
emulator" programs that typically use the same set of control
characters. But when this is not the case, the user starts seeing a flurry
of cryptic sequences that start with `^[` (the escape character) in the
program's output.

Besides the need for standardization, another interesting engineering
aspect that had emerged was the ability of terminal
**virtualization**. Since, as I mentioned previously, terminal control
characters are in the same stream with program's output, and user cursor
control commands are in the same stream with program's input, the standard
UNIX mechanism for I/O streams redirection created a possibility of
emulating terminal behavior within a visual program. Normally a visual
program assumes that it uses the entire screen of a physical terminal (the
terminal provides its dimensions in rows and columns). But if one program
launches another, it can direct the I/O streams of the child process into
itself, and maintain a **virtual** terminal for it. For example, the parent
program may run several child processes and maintain a virtual screen for
each of them (this is what the utility called `screen` does). Or it can
allocate a subsection of the terminal (half of a screen, for example) to a
child process, and run two of them side by side. This kind of virtual
terminal manager programs is called "terminal multiplexer", with `tmux`
being a well known example.

An interesting question emerges: since there is only one user, with only
one keyboard, if a terminal multiplexer is running two other visual
programs side by side, which one is receiving the input? The answer is—the
input is received by the parent program, which then sends it to the child
process which currently has "focus." To give the user the ability to switch
focus, or send any other commands to the parent program, they need to
prepend their input with a "control sequence" (or "escape sequence"). As an
example, for `screen`, the default control sequence is `Ctrl-a`. When
`screen` receives it, it understands that it does not need to retranslate
what follows this command to the child process, but rather interpret it
itself.

The virtualization can be arbitrarily nested. For example, you can launch
`screen`, and inside it launch another instance of it, but you need to be
careful with control sequences. `screen` has a command "send escape
command", thus in order to send a control command to the nested `screen` we
send the command "send escape sequence" which is interpreted first by the
parent `screen`, and after it executes it (and thus sends the escape
further down), the nested `screen` enters the command interpretation
mode. If you need to send control commands to the nested `screen`
frequently, you should really change the default "escape sequence" for it
(to `Ctrl-b`, for example) so that the parent `screen` sends it directly.

Another problem that virtual terminal programs solve is working around the
fact that in Unix, a process can only be "bound" to one terminal only. This
reflected the normal use case of a user logging from a terminal into the
OS, and when they log out, all their processes are automatically
terminated. The only possibility for a process to outlive its terminal is
to "detach" from it and become a "daemon" process. In fact, most of the OS
own processes are daemons, so they can run even if no users are logged
in. However, users cannot easily interact with a daemon—normally, the
output from it goes into a log file, and commands are sent to the daemon
using UNIX signals.

Terminal multiplexers / emulators created a new possibility of user session
persistence. Since they launch the user's program under a virtual terminal,
it is not bound to a physical terminal, and can run until next system
restart, like a daemon. However, since the multiplexer also has a
user-visible part, that user program can interact with the user
normally. And in fact, only that user-visible part of the terminal
multiplexer gets terminated if the user's physical terminal gets
disconnected from the OS. When the user reconnects, it can re-attach to the
already running session of `screen`, and continue their work. But this
feature makes the implementation of `screen` and `tmux` rather complicated
because the user can reconnect using a **different** kind of
terminal. Thus, essentially the terminal multiplexer needs to perform
adaptation of terminal control sequences that the user's visual program is
sending to the virtual terminal into equivalent control sequences of the
current physical terminal.

## What is Wrong with Terminal Emulation in Emacs?

With that history in mind, I can explain the Big Friction Point that I had
with running command-line programs under Emacs.

Emacs entered the text editor scene much later than `vi`, and it was
designed right from the start to be a visual editor, so it does not have
the line-oriented mode like `vi` does. Moreover, since Emacs pretends to be
an operating system in itself (that's another popular hacker's joke), it
offers both dumb terminal emulators (the "shell" mode, and the
"compilation" mode), as well as full smart (or visual terminal)
emulators. That means, you can run `vi` inside Emacs if you wish to. The
caveat with visual terminal emulation in Emacs is that it goes against two
important principles of its design.

First, very much like Macintosh OS design, Emacs strives for having unified
key mappings across its editing modes, that's to avoid interrupting users
"mental flow." However, a `vi` instance running inside an Emacs virtual
terminal still expects standard `vi` input. And it will assume that it has
entire control of the user's input and output. So, as it was discussed
above on the example of `screen`, the terminal emulator of Emacs normally
needs to capture entire user input and send it to `vi`. And in order to
interrupt that, the user needs to send some "escape" command to
Emacs. Thus, visual terminal emulators in Emacs also need to have at least
two "modes", and this is inconvenient, because it breaks normal key chord
control for the user. The built-in emulator called `term` calls these modes
**char** (in which the user input goes into the child process) and **line**
(in which the child process does not receive any input and the user can
manipulate its output using normal Emacs commands). And if you are
interacting with the nested app and the rest of Emacs, you need to switch
them frequently.

The second thing of visual terminal emulation that goes against Emacs
design, is that a program designed for a smart terminal can only have one
output view (recall that in the design of Unix, an interactive program can
be bound to a single instance of terminal only). Although both `tmux` and
`screen` do allow connecting multiple clients to the same session—this is
often used for "live" or pair programming sessions—but since the program
"sees" only one terminal—the virtual terminal which `tmux` or `screen`
emulates—it can adjust its view to one terminal size only. There are only
two viable choices for the terminal multiplexer here in terms of which
terminal size it can report to the nested app: either use the size of the
smallest terminal for all connected physical terminals, or report the size
of the "current" one, and admit corrupt visual state on physical terminals
that have non-matching size. Note that this problem is somewhat a corner
case for traditional terminal multiplexers, but Emacs naturally allows
viewing the same text file (which is abstracted into a "buffer") in
multiple views simultaneously, this situation can happen quite
naturally. And in this case, a buffer associated with a terminal for a
visual program can be displayed correctly in a single view of the buffer
only.

So, basically, existing terminal emulation solutions for Emacs are all of
two kinds. The first kind simulates a dumb terminal (like "shell" mode
does), and this allows to transform the output of the program into a normal
Emacs text buffer (with colors attributes, thanks to `ansi-color`
package). And this, in its own turn, allows this buffer to be manipulated
using standard Emacs editing commands, and also allows displaying it
simultaneously using views of different sizes. But if the user runs a
utility that uses more "advanced" terminal control characters, the output
from it can go awry. As I mentioned before, a lot of terminal-based
utilities, including build tools, and even OS's own tools, do not query the
terminal type and just assume that they can use arbitrary terminal
displaying tricks for their fancy progress bars.

The second kind of Emacs terminal emulator provide full screen emulation.
From what I have seen on various forums, a lot of Emacs users sidestep the
problem of garbled output by resorting to this kind of emulation. That is,
these people run their shells and builds in full terminal emulators under
Emacs. Some of these emulators, like
[`eat`](https://codeberg.org/akib/emacs-eat), offer to solve the keyboard
input problem by providing a third "hybrid" mode—`eat` calls it
**semi-char**—where **most** symbols are sent into the child process, but
**some** are interpreted as usual by Emacs. So maybe the user can remain in
the "semi-char" mode for longer time while interacting with an app running
under Emacs, but once they will need, for example, to copy some output from
it, and for that they will have to engage into mode switching, which can be
disrupting to their mental flow.

So we see, that the hybrid solution from `eat` is applied on the user
input side. My idea was to make a hybrid on the program's output side
instead. That is, to evolve the shell mode into a third kind of terminal
emulator, which still mostly supports the dumb terminal emulation mode,
but allows the child process to use a subset of control characters for
displaying fancy progress statuses. After all, once the long action carried
by the app completes, it normally erases all its intermediate output, and
the result looks very much like an output from a good old line-oriented
program. To state it in another way, I don't need to run `vi` in my
"evolved shell", but I need to be able to run `apt get install` and observe
a normally looking progress bar instead of colorful garbage interleaved
with control characters that the Emacs "shell mode" does not understand.

By the way, as I read in the materials about the unsuccessful planned
successor of Unix OS—the [Plan 9
OS](https://en.wikipedia.org/wiki/Plan_9_from_Bell_Labs)—its terminal
(called `9term`) was built around similar ideas of considering program
output as buffers of text, and dropping support for terminal control
sequences completely. `9term` was behaving more like Emacs shell or eshell
modes, representing the program output as a stream of text and making the
terminal basically a text editor which allows the user to work both with
the history of commands and with the program output as if they were a text
file. In Plan 9, if someone needed a visual program, they had to make it
a GUI app, and building "TUI" interfaces was considered a thing of the
past.

## The Helping Hand of AI

By then, I had already been using AI in "assistant" mode for quite a
while. That means asking questions and then copy-pasting fragments of
AI-generated code, basically it's a replacement for Web and forum
searches. But true AI agentic coding (also known as "vibe coding") is
completely different, and I had to start learning it.

Luckily, I was already experiencing something similar for a couple of years
thanks to the reliance of modern tech companies on "vendors", or what is
called "outsourcing." In this model, if there is a programming task that
can be delegated to another company, this should be preferred to using the
company's own engineers time on it. This is just basic cost reduction
effort. Since outsourcing companies are located in geographical areas with
lower labor costs, they can offer much lower hourly rate.

So, I was already doing a lot of programming tasks in the manner where I
was just formulating some high-level idea of what should be done, and how
the produced code should be tested. Then I was reviewing the code
contributions from my vendors, and passing them back my comments. Does that
sound familiar? Right, this is very similar to how "vibe coding" works,
with two major differences: the cycle speed with vendors is typically
longer, measured in days, thus you don't get that "vibe" feeling, and the
capabilities of human vendor programmers used to be better than of AI
agents. I said "used to be" because with late 2025 models I had noticed a
big shift in their programming abilities.

I decided the time was right to unleash the power of those new AI models to
help me to finally fix my Big Annoying Thing with Emacs. Since I knew what
I need to achieve, I did not have to ask AI to come up with an
"implementation plan." Instead, I started with writing tests for my new
Emacs mode extension. For this, I still used AI in assistant mode, and it
was really helpful in constructing these pesky ANSI escape sequences for
the scenarios that I cared about. The LLM was also able to analyze a full
output from `apt` package installation session in order to find out which
terminal control sequences it uses, and create a script which emulates its
output.

Having these tests, I had established a "continuous integration" (CI) loop
where I was loading the code of my extension into Emacs (by this time,
there was no code yet), launching those test scripts, and comparing the
results with "golden" outputs which I have produced with `screen`. Time to
unleash a fully autonomous AI coding!

This is where the real fun began. I was using Gemini CLI, and at first I've
made a mistake of letting it use the 2.5 version of the LLM.  And it was
really struggling, to the point that it could not even write a correct Lisp
code. Lisp syntax is very minimalist and consists of lots of parentheses
that need to be balanced. Surprisingly, Gemini 2.5 had big problems with
that. It actually broke my CI loop at first, because it was writing code
that was causing Emacs to fail to load the module, or to hang up
completely. This was something I had never experienced with vendors (I told
you, so far humans were better programmers than AI). After I made my CI
loop more resilient, the AI has entered its own loop by endlessly trying to
fix the Lisp syntax, and never succeeding, eventually falling into a mode
when it was continuously streaming its looping chain of thought into my
terminal. Having wasted a couple of hours on this, I was about to give up
and was considering to switch back to assistant mode of coding.

But then I've done two things: had switched to the "latest preview" model
of Gemini, which was 3 at that time, and, again with help of AI, improved
the project instructions, specifically insisting that the agent writes
"Parinfer-compatible" code, and verifies it thoroughly. This was a night
and day improvement—the agent finally managed to fix almost all failing
tests by writing correct code, and I started feeling good vibes.

Over a week, during my spare time, we had finished the implementation to
the point that I could really run my build script in Emacs "compilation"
buffer and the output was looking exactly as it looks on a terminal with
full capabilities. During this period, I was following the usual principles
of Test-Driven Development: always write the test first, make sure the
changes fix it, and do not regress anything else, then do a refactoring of
code, and of test. So it's like a real engineering cycle, except that I
only had to type in plain English—no more coding myself.

I also realized that the AI agent is capable not only of writing code and
tests, but actually **investigating** problems, and it can even write their
own tools for that—like a real human programmer! At that point my feelings
towards the agent shifted, and I started to consider them as my colleague,
at least, like a robotic colleague, something like WALL-E robot, maybe. I
still had to help this robot sometimes to fix Emacs Lisp parenthesis
issues. That was mainly because I wanted to save my time, and also money.

Yes, one thing I would like to mention is the cost of this exercise. I have
ended up spending about **$55** on the inference, which is of course not a
lot, but you need to realize that this wasn't a big project either. So when
I'm reading about huge projects that involve hierarchies of AI agents, I
think they can burn a lot of money each day! Besides all the useful work
that the agents do, when a problem gets really hard for them, they can
easily end up dwindling down into a "confusion spiral," and that is all at
your expense!  So be careful—I really would not let a swarm of agents to
work without close human supervision.

## Parting Thoughts

If you are interested, the resulting Emacs extension is
[here](https://github.com/mnaganov/comint-9term/blob/master/comint-9term.el).
I called it `comint-9term` to indicate that it extends `comint` (command
interpreter) mode of Emacs, and it delivers the spirit of the `9term`
terminal from the Plan 9 OS.

The code is complete now, I'm just planning to continue fixing any edge
case scenarios that I might encounter. After all, as I have explained
above, this hybrid terminal scenario is a bit unusual, and operates on a
boundary between dumb and smart terminals, so some scripts or programs with
super creative approach to progress displaying may cause issues. But the
AI has added "tracing" sub-mode, so whenever that happens, I can grab a
trace, and give it to my AI agent for analysis.

From this "vibe coding" experience, and also from reading experiences of
other people, I think this new human-computer interaction mode will
stay. Even if some of the companies that are currently making "frontier"
LLMs will collapse due to economic reasons, the technology is out there,
and people will find ways to make it more economical and efficient.

AI is definitely the new way for writing computer programs, and I think it
may change how we treat our phones (or TVs, or cars). Since the appearance
of the first iPhone, it was always annoying me that smartphones and tablets
were always treated as "embedded" devices, which means, you had to program
them using a "real" computer, despite the fact that the CPU power of modern
phones is orders of magnitude greater than the supercomputers of the 1980s,
let alone the personal computers. Compared to a Z80 (the heart of [ZX
Spectrum](https://en.wikipedia.org/wiki/ZX_Spectrum)), a modern phone is
like a starship compared to a bicycle.

I know, one big obstacle of using your phone for programming was absence of
a real keyboard. Since phones do not have a convenient keyboard, writing a
program for them in a "traditional" way was a pain. But not anymore!
Finally, with AI it's possible to write a program for your phone using only
your phone (in theory, at least), by talking to an agent who is building
and debugging the app for you. Thus, personal devices can become something
like home computers have become for kids 40 years ago. So, despite all the
"AI gloom" regarding its economic effects, I look into the future with big
enthusiasm.
