# rvalue references and move semantics in C++11, Part 1

This is the presentation I have delivered recently to my colleagues.
When doing audio programming, a lot of times we need to think how to
write efficient code, and C++ move semantics help to avoid unneeded data
copying.

[![](https://3.bp.blogspot.com/-nnFQc3WjFbs/XF0GikueN8I/AAAAAAAANYI/yC7xkdxD3jgRx4-t9_TQ-QzQG37YbkIyACEwYBhgL/s1600/rvalues-00.png)](https://3.bp.blogspot.com/-nnFQc3WjFbs/XF0GikueN8I/AAAAAAAANYI/yC7xkdxD3jgRx4-t9_TQ-QzQG37YbkIyACEwYBhgL/s1600/rvalues-00.png)

This presentation is both for people who are new to C++ and used to
program in other languages, and for veteran C and C++ programmers who
still didn't quite catch up with the changes that had happened with the
introduction of the C++11 standard. The aim of this talk is to explain
how rvalue references and move semantics help to write more efficient
and readable code.

[![](https://1.bp.blogspot.com/-7q9AyMkd6Vo/XF0Gi3L_I7I/AAAAAAAANYQ/BOyyJ1BxJXYlfZ5_zdQd7OotNaguAeXKACEwYBhgL/s1600/rvalues-01.png)](https://1.bp.blogspot.com/-7q9AyMkd6Vo/XF0Gi3L_I7I/AAAAAAAANYQ/BOyyJ1BxJXYlfZ5_zdQd7OotNaguAeXKACEwYBhgL/s1600/rvalues-01.png)

We strive to write modular code, where data processing is distributed
among thousands of functions or methods (in object-oriented languages).
Typically, when passing data between functions we need to decide whether
we need to copy the data (which can be expensive) or rather use
[indirection](https://en.wikipedia.org/wiki/Indirection) and simply pass
the address of memory where the data is stored. The usual concern when
doing the latter is that it can lead to unexpected program behavior,
because the contract for data ownership is often neither expressed
formally, nor enforced. I'm not talking about [data
races](https://en.wikipedia.org/wiki/Race_condition) that happen in
multi-threaded code, but rather about getting unexpected results even in
the case of a single thread of execution.

[![](https://2.bp.blogspot.com/-xCBl8JjyBMo/XF0Gi6VRDBI/AAAAAAAANaU/fpcZO-AI-KsVbkbuMZ9GZuRYvozjbi0PQCEwYBhgL/s1600/rvalues-02.png)](https://2.bp.blogspot.com/-xCBl8JjyBMo/XF0Gi6VRDBI/AAAAAAAANaU/fpcZO-AI-KsVbkbuMZ9GZuRYvozjbi0PQCEwYBhgL/s1600/rvalues-02.png)

As an illustration of "unexpected behavior" of a single-threaded program
due to misuse of indirection, here is an arcane problem that was often
biting JavaScript programmers. For those who never programmed in
JavaScript, you need to know that functions in JS are first-class
objects and can be manipulated as easily as any other values, which
includes dynamic creation of functions at runtime. When a function is
created, it captures a subset of program state (it's called
["closure"](https://en.wikipedia.org/wiki/Closure_(computer_programming))).

In this example, we create **10** functions, each of them is intended to
return the current value of the for loop variable—**i**, and store them
in an array for later use. You ask, why would we even need to do
something like that? Well, in JavaScript the program is executed on the
user interface (UI) thread and in order to achieve smooth user
experience it is often needed to split some task into smaller pieces and
execute them one by one when the UI thread is otherwise idle.

So, when we try to execute the stored functions later, what results do
we actually get?

[![](https://1.bp.blogspot.com/-d1NbP83nkPw/XF0GjOxxpXI/AAAAAAAANaU/NPlqoBdXJ2IiTYOfyUANkj4mC_0-9xJPQCEwYBhgL/s1600/rvalues-03.png)](https://1.bp.blogspot.com/-d1NbP83nkPw/XF0GjOxxpXI/AAAAAAAANaU/NPlqoBdXJ2IiTYOfyUANkj4mC_0-9xJPQCEwYBhgL/s1600/rvalues-03.png)

Turns out, it's not what we expected—all the functions evaluate to the
value of **10**! This is because in JavaScript all the variables are
passed by reference, thus the `return i` part has captured a
**reference** to `i`, instead of its value, and thus when the function
gets executed, it returns the current value of `i`, accessed via the
reference.

Why is this code so confusing? One of the reasons is that `return i`
looks syntactically similar to `a[i]` construct, but they result
in different actions being performed. As for accessing the array element
its index needs to be known, in the expression `a[i]` the current
value of `i` is **evaluated** immediately. But since the evaluation of
the created function is postponed, so is the evaluation of `i` for the
`return i` expression.

[![](https://3.bp.blogspot.com/-tMUiTJ-3ieY/XF0GjRu1VOI/AAAAAAAANaU/xc2FoMPsd-0S2Pn7k7LDeOlXlsIqAgfRwCEwYBhgL/s1600/rvalues-04.png)](https://3.bp.blogspot.com/-tMUiTJ-3ieY/XF0GjRu1VOI/AAAAAAAANaU/xc2FoMPsd-0S2Pn7k7LDeOlXlsIqAgfRwCEwYBhgL/s1600/rvalues-04.png)

A clean solution came with EcmaScript 6 standard, which adds the keyword
`let` that needs to be used instead of `var` for introducing the
loop variable. Unlike `var`, `let` scopes the variable to the
block of code. Since the JS interpreter knows that the variable `i` is
going out of the loop's scope, it copies the value of `i` into the
function closure.

[![](https://2.bp.blogspot.com/-UbV_OzESRSg/XF0GjhkLF-I/AAAAAAAANaU/kNdqt_XbOd419QAx4EHFBJkRvpd-keTOQCEwYBhgL/s1600/rvalues-05.png)](https://2.bp.blogspot.com/-UbV_OzESRSg/XF0GjhkLF-I/AAAAAAAANaU/kNdqt_XbOd419QAx4EHFBJkRvpd-keTOQCEwYBhgL/s1600/rvalues-05.png)

If we intend to minimize copying by means of indirection, that is, via
passing variables to functions by reference, and at the same time would
like to guarantee program correctness, three strategies are possible:

-   **Prohibit any modifications to shared data.** This approach is
    taken to the extreme in [purely functional programming
    languages](https://en.wikipedia.org/wiki/Purely_functional_programming),
    where all data is immutable. However, the experience of writing
    programs in those languages is very different from what we find in
    traditional imperative programming languages (such as C++ and Java).
    For example, a "for" loop that we have seen in the example before
    simply couldn't exist in a purely functional PL, because it requires
    modifying the loop variable.
-   The second approach is to start with sharing a reference, and then
    **make a copy of data as needed**—typically when the recipient of
    the reference is about to modify the data. This approach is
    widely used by operating systems for physical memory pages, it is
    known as ["Copy on
    write"](https://en.wikipedia.org/wiki/Copy-on-write). However,
    determining the actual moment when the data needs to be copied
    without help from computer hardware is tricky, and can lead to even
    more overhead than eager data copying.
-   The third approach is to indicate clearly when the **data owner
    changes**. This way we can guarantee that the recipient of a
    reference to the data can then modify the data freely.

[![](https://3.bp.blogspot.com/-V3JBQNOzaM8/XF0GkNGaSoI/AAAAAAAANag/ZrdhM_Wjwt4UxDT4JbwaZ7HI-SUo19wWQCEwYBhgL/s1600/rvalues-06.png)](https://3.bp.blogspot.com/-V3JBQNOzaM8/XF0GkNGaSoI/AAAAAAAANag/ZrdhM_Wjwt4UxDT4JbwaZ7HI-SUo19wWQCEwYBhgL/s1600/rvalues-06.png)

These approaches are graphically illustrated here. Again, we consider
only the case of a single program thread. In all examples, function
`A` calls function `B`, and needs to pass in a big blob of data.

**Case 1)** If it is possible to guarantee that `B` does not modify
data, then it's safe to pass it by reference.

**Case 2)** If `B` needs at some point to modify the data which it has
received via a read-only reference, it makes a copy.

**Case 3)** It would be also useful to know that `A` in fact does not
need the data anymore, for example, it has prepared the data and now is
passing it to `B` for further processing. In this case, the data can
still be passed by reference, and `B` does not even need to make a
copy.

Before considering how these behaviors can be expressed in C++11, we
start with Java, C, and C++98 to illustrate some parallels and to help
people proficient in these languages roll into C++11 smoothly.

[![](https://4.bp.blogspot.com/-jlcJrkuiyck/XF0GkGaGtcI/AAAAAAAANaI/FtPhK5x1LVELxPkpAEQDGtvyGfKc3iCggCEwYBhgL/s1600/rvalues-07.png)](https://4.bp.blogspot.com/-jlcJrkuiyck/XF0GkGaGtcI/AAAAAAAANaI/FtPhK5x1LVELxPkpAEQDGtvyGfKc3iCggCEwYBhgL/s1600/rvalues-07.png)

Java gurus say that [everything in Java is passed by
value](https://www.javadude.com/articles/passbyvalue.htm). This requires
a clarification—the value of an object or an array variable is a
**reference** to the object or to the array. This makes sense because
declaring a variable of object type also requires initializing, for
example by calling the `new` operator. Thus, it's the reference to
the object that gets passed by value. I remember this thing being
confusing for C programmers because in C a declaration of a structure
variable allocates it automatically.

Another slightly confusing thing in Java for a C/C++ programmer, is how
the `final` keyword (the closest analog of the `const` keyword in
C/C++) works. As we will see from the examples, making an object
variable `final` does not prevent modifications to the referenced
object. The only way to guarantee object immutability in Java is to make
sure its class does not have any mutator methods. The canonical example
is the `String` class.

However, the drawback of making the `String` class immutable is that a
naive way of concatenating two strings requires copying the contents of
both strings into a new one. For efficient concatenation, a mutable
`StringBuffer` class has to be used (this is the approach that Java
compiler [typically employs under the
hood](https://redfin.engineering/java-string-concatenation-which-way-is-best-8f590a7d22a8)).

When passing a mutable object to another method, it's not possible to
specify using the Java language that the object is not going to be
modified there. If the caller needs to be sure, it would be better to
use an object of an immutable class.

[![](https://3.bp.blogspot.com/-gl1B_f8erfU/XF0GkaHX2CI/AAAAAAAANag/L9EPkR19Q4cDjrYcMAc0MBC-_tjqVhm7gCEwYBhgL/s1600/rvalues-08.png)](https://3.bp.blogspot.com/-gl1B_f8erfU/XF0GkaHX2CI/AAAAAAAANag/L9EPkR19Q4cDjrYcMAc0MBC-_tjqVhm7gCEwYBhgL/s1600/rvalues-08.png)

This is an illustration. For a primitive type, the `final` keyword
works as a C/C++ programmer would expect it to—it prevents the variable
value from being modified. However, a `final` variable of an object
type allows calling methods that change its contents, only the variable
itself can't be mutated.

The same way, if there is a method taking an object, and the argument is
marked `final`, it does not prevent the method from mutating the
object.

[![](https://1.bp.blogspot.com/-1jh9bcOckGg/XH3j2AQMIJI/AAAAAAAANjA/MB0FXmKvTBAnA33CCJUY1g8B1-oyv1NKACLcBGAs/s1600/rvalues-09.png)](https://1.bp.blogspot.com/-1jh9bcOckGg/XH3j2AQMIJI/AAAAAAAANjA/MB0FXmKvTBAnA33CCJUY1g8B1-oyv1NKACLcBGAs/s1600/rvalues-09.png)

Now, let's consider the language that was used as a base for C++—the C
language. Here, even variables of a **structure** type are passed by
value. However, the Java-like logic twist still applies to arrays—a
variable of an array type is a reference to the data location, thus when
passing an array to a function, its data does not get copied. In order
to pass an array by value, it needs to be wrapped within a structure.

C offers an explicit type for a variable holding an address of a memory
location—it's called **pointer**. In order to initialize such a
variable, an explicit "address of" (`&`) operator is used. Again,
since array variables are in fact references to data location, they can
be used the same way as pointers.

C also offers more explicit immutability specification. A pointer
variable can either be immutable itself (no reassignments are possible),
point to data that can't be altered, or both. However, the syntax for
specifying the immutability rules can look a bit confusing.

[![](https://1.bp.blogspot.com/-sR1xFQi5nkg/XF0GlFsq5mI/AAAAAAAANaQ/rYp0v-xI7yQcNJMbYSA3xlQrbA0ctbXzgCEwYBhgL/s1600/rvalues-10.png)](https://1.bp.blogspot.com/-sR1xFQi5nkg/XF0GlFsq5mI/AAAAAAAANaQ/rYp0v-xI7yQcNJMbYSA3xlQrbA0ctbXzgCEwYBhgL/s1600/rvalues-10.png)

Personally, I find C rules for specifying immutability more intuitive
than those in Java. If there is a const variable of a structure type,
any modifications to it are prohibited. Thus, a composite type behaves
very much like a primitive type.

As I've said before, a function parameter of a structure type is passed
by value.

[![](https://4.bp.blogspot.com/-GjPgg_vqkb4/XF0Glvr0kgI/AAAAAAAANaY/QnzpsH8AZYYWet0_U6g1RBcTNRa1PrScACEwYBhgL/s1600/rvalues-11.png)](https://4.bp.blogspot.com/-GjPgg_vqkb4/XF0Glvr0kgI/AAAAAAAANaY/QnzpsH8AZYYWet0_U6g1RBcTNRa1PrScACEwYBhgL/s1600/rvalues-11.png)

When looking at pointer types containing the `const` keyword, you need
to make sure you understand what it actually applies to. The first
example shows a const pointer to a structure. The second shows a
writable pointer to unmodifiable data, known as **pointer to const**.

The nice thing about C rules is that passing a structure by **pointer to
const** guarantees that the function will not modify it (well, it's
always possible to cast constness out, but you would hope the function
does not misuse this capability).

[![](https://1.bp.blogspot.com/-fO2g9iuTPAM/XF0Gl2qbuyI/AAAAAAAANaI/rncWZVXknYQlxZem-fkWlu14MI9Ymp5RgCEwYBhgL/s1600/rvalues-12.png)](https://1.bp.blogspot.com/-fO2g9iuTPAM/XF0Gl2qbuyI/AAAAAAAANaI/rncWZVXknYQlxZem-fkWlu14MI9Ymp5RgCEwYBhgL/s1600/rvalues-12.png)

Returning a structure from a C function turns out to be challenging.
Historically, returning by value required making a copy of the
structure. The [ANSI C (2nd)
edition](https://www.amazon.com/Programming-Language-2nd-Brian-Kernighan/dp/0131103628)
of K&R's book on C advises to return a structure by reference (using
pointer) to avoid copying.

Another reason why returning structs by reference is so popular with C
programmers is that it's an abstraction mechanism. When returning a
structure by reference the recipient does not need to know it's size,
thus it's possible to hide the definition of the structure. This
approach is used in the standard C library for the `FILE` type, for
example.

But returning a struct by a reference imposes risks that the recipient
might ignore the result, and thus create a memory leak. Also, some
functions do not actually allocate data dynamically and instead return a
pointer to some static data. You always need to read the function
documentation to figure this out.

Returning using a pointer also complicates the case when custom memory
pools are used in the program, so sometimes the allocation is done by
the caller, which then passes a pointer to allocated, but yet
uninitialized structure to the callee. This is in fact a manual
implementation of copy elision.

[![](https://4.bp.blogspot.com/-mEeQEl44Zl8/XF0GmOioLkI/AAAAAAAANac/BjMjyjXFumIUMqav4bAEsDJULpQjRJpPgCEwYBhgL/s1600/rvalues-13.png)](https://4.bp.blogspot.com/-mEeQEl44Zl8/XF0GmOioLkI/AAAAAAAANac/BjMjyjXFumIUMqav4bAEsDJULpQjRJpPgCEwYBhgL/s1600/rvalues-13.png)

On modern operating systems this optimization is performed automatically
by the compiler, and many popular ABIs support it (see the
summary [here](https://en.wikipedia.org/wiki/X86_calling_conventions#List_of_x86_calling_conventions)).
This optimization is called **copy elision**. It's mechanism is
explained on this slide.

This optimization applies only when the structure is returned by value.
This implies that on the recipient side it is allocated automatically.
The compiler treats the destination structure and the local structure in
the callee as the same variable. As a result, returning a structure by
value [has a negligible
cost](https://spin.atomicobject.com/2013/12/23/c-return-multiple-values/).

On the right I've placed a high-level pseudocode to show what exactly
the compiler does to the code on the left. Effectively, the function
doesn't return anything, but instead takes a pointer to the destination
memory. The constructor of the object created in the function is called
for that location.

[![](https://2.bp.blogspot.com/-PxQxL-lBK6U/XF0GmfAHYFI/AAAAAAAANaQ/Md1sXU0GRg4v4TjBlwZbyhvZh4UWpn5ewCEwYBhgL/s1600/rvalues-14.png)](https://2.bp.blogspot.com/-PxQxL-lBK6U/XF0GmfAHYFI/AAAAAAAANaQ/Md1sXU0GRg4v4TjBlwZbyhvZh4UWpn5ewCEwYBhgL/s1600/rvalues-14.png)

However, copy elision is not always applicable. On this slide we see the
case when inside the function there are several structures, and one of
them is chosen as a return value based on some condition. Obviously, the
compiler can't initialize two variables in the area designated for one
structure. Thus, on return a copy still has to be made.

[![](https://4.bp.blogspot.com/-rr9I59u5EnI/XF0Gmis6q1I/AAAAAAAANaU/hULK8ogJnTAO8izfMaJu7ewOElH6yOE1ACEwYBhgL/s1600/rvalues-15.png)](https://4.bp.blogspot.com/-rr9I59u5EnI/XF0Gmis6q1I/AAAAAAAANaU/hULK8ogJnTAO8izfMaJu7ewOElH6yOE1ACEwYBhgL/s1600/rvalues-15.png)

Compared to C, it's successor C++ in its initial widespread version
(referred to as C++98 or C++03) introduced a powerful concept of
**constructor** and **destructor** methods. Since they are called when
an instance of a class is being created or destroyed, these events can
now be observed by the program code. In C, the program can't observe
allocation of automatic (stack-allocated) structures. In C++ this is
possible.

This fact is exploited by the [RAII
pattern](https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization)—objects
with automatic storage class can be used for automatic resource
management. However, the copy elision optimization becomes observable by
the program code, too—it's possible to note whether a copy constructor
and a destructor were executed. This is why the return value
optimization ([RVO](https://en.wikipedia.org/wiki/Copy_elision)) had to
be defined at the level of the C++ language standard, and not merely as
an ABI convention.

[![](https://3.bp.blogspot.com/-6PsjqcxbT6Q/XF0Gmx-83-I/AAAAAAAANaU/xdBxcj4EywsFWNrbs4bFcW-rOa_hcx79QCEwYBhgL/s1600/rvalues-16.png)](https://3.bp.blogspot.com/-6PsjqcxbT6Q/XF0Gmx-83-I/AAAAAAAANaU/xdBxcj4EywsFWNrbs4bFcW-rOa_hcx79QCEwYBhgL/s1600/rvalues-16.png)

The fact that C++ also permits the programmer to "hide" constructors and
copy assignment operators allows the creating of non-copyable types. For
these types, an attempt to copy an instance causes a compilation error.
There are some good uses for this feature. Some classes manage physical
or OS resources, and a copy operation for them does not make sense. The
stream classes in the C++ standard library are non-copyable.

In the C++98 era, the mechanism for making a class non-copyable was
implemented as macros. In Google's C++ code this macro was initially
called `DISALLOW_EVIL_CONSTRUCTORS`, probably coming from the [famous
and now also obsolete](https://en.wikipedia.org/wiki/Don%27t_be_evil)
"Don't Be Evil" motto. Since the name wasn't quite exact—the macro was
disabling the copy constructor and copy assignment operator, it had been
later renamed to `DISALLOW_COPY_AND_ASSIGN`. The modern style
[recommends](https://google.github.io/styleguide/cppguide.html#Copyable_Movable_Types)
to use the more explicit `= delete` syntax introduced in C++11.

Using non-copyable types had drawbacks in C++98. Since copy elision was
considered as a nice-to-have optimization, old compilers could prohibit
returning an instance of a non-copyable class from a function by value.
This got finally sorted out in C++17 which makes copy elision mandatory.
Non-copyable types also couldn't be placed into containers, as they
might need to make a copy of an item, e.g. while resizing the internal
storage.

[![](https://3.bp.blogspot.com/-wa8bl2CIWxI/XF0GnUFqjYI/AAAAAAAANaI/sWCDVYkmHOo7ToLy54DE49My4iAEExQAACEwYBhgL/s1600/rvalues-17.png)](https://3.bp.blogspot.com/-wa8bl2CIWxI/XF0GnUFqjYI/AAAAAAAANaI/sWCDVYkmHOo7ToLy54DE49My4iAEExQAACEwYBhgL/s1600/rvalues-17.png)

Another addition in C++ was the **reference** type. It might seem to be
excessive—after all, C already has a very powerful **pointer** type. As
Bjarne Stroustrup explains in his book ["The Design and Evolution of
C++"](https://www.amazon.com/Design-Evolution-C-Bjarne-Stroustrup/dp/0201543303),
it was a consequence of allowing user-defined operators in C++ .

If we consider a subtraction operator for a hypothetical `Matrix`
class, it could be expensive to pass a Matrix by value. The C-style
solution—pass by a pointer—would require the caller to apply the
"address of (`&`)" operator to the operator arguments. However, the
resulting expression would look indistinguishable from pointer
arithmetic.

The solution was to leave the syntax at the call site as if the operator
arguments are passed by value, but at the caller specify that it
receives the arguments by reference.

[![](https://4.bp.blogspot.com/-rdkBC-tcx0I/XF0GnIpqkxI/AAAAAAAANaU/PtC9BG6AftEphxMup7uCEzWsOGHIesRMwCEwYBhgL/s1600/rvalues-18.png)](https://4.bp.blogspot.com/-rdkBC-tcx0I/XF0GnIpqkxI/AAAAAAAANaU/PtC9BG6AftEphxMup7uCEzWsOGHIesRMwCEwYBhgL/s1600/rvalues-18.png)

As we can see, the reference type is defined at a higher level of
abstraction than the pointer type, because it hides the fact that the
address of a value is taken. References are **aliases** for the original
variable. As a result, they don't have an associated storage on their
own, as pointers do. Thus, it's impossible to get an address of a
reference—the application of "address of (`&`)" operator yields the
address of the referenced value.

In order to simplify semantics of assignment into references, the
reference **itself** is considered to be immutable, it can (and must) be
initialized during declaration. Thus, placement of the **const** keyword
in the reference type declaration doesn't change anything, and always
means that the referenced value is immutable.

[![](https://2.bp.blogspot.com/-Kza6FT85jco/XF0GncpQ0JI/AAAAAAAANaM/HjhytopeXKAworjG9seMhRfByOUxPbomwCEwYBhgL/s1600/rvalues-19.png)](https://2.bp.blogspot.com/-Kza6FT85jco/XF0GncpQ0JI/AAAAAAAANaM/HjhytopeXKAworjG9seMhRfByOUxPbomwCEwYBhgL/s1600/rvalues-19.png)

Here is a simple example showing usage of a reference. The call site
looks the same regardless of whether the callee takes the argument by
value or by a reference. But for the callee, things look different. The
reference is bound to the argument, and any inadvertent modifications
will be reflected on the original value.

That means passing a value by reference can lead to confusion at the
caller site, similarly to what we have seen with the "Last Value"
Problem in JavaScript.

[![](https://3.bp.blogspot.com/-ITIK9oLKwi8/XF0Gnuk8-aI/AAAAAAAANaU/GK3xxPcwb20ESL86xsRj4KthTjebA3pSACEwYBhgL/s1600/rvalues-20.png)](https://3.bp.blogspot.com/-ITIK9oLKwi8/XF0Gnuk8-aI/AAAAAAAANaU/GK3xxPcwb20ESL86xsRj4KthTjebA3pSACEwYBhgL/s1600/rvalues-20.png)

That's why Google's C++ Coding Style [doesn't permit use of non-const
references](https://google.github.io/styleguide/cppguide.html#Reference_Arguments)
as function and method parameters. For an in/out parameter, a pointer
type must be used. This way, at the call site there is an indication
that the argument can be modified.

[![](https://2.bp.blogspot.com/-JINzfuntpkQ/XF0GoJVjI9I/AAAAAAAANaQ/Zl4twnrHDDgSxf6ZsaMZsisLJ9cYyZkbACEwYBhgL/s1600/rvalues-21.png)](https://2.bp.blogspot.com/-JINzfuntpkQ/XF0GoJVjI9I/AAAAAAAANaQ/Zl4twnrHDDgSxf6ZsaMZsisLJ9cYyZkbACEwYBhgL/s1600/rvalues-21.png)

A classic example where passing by a non-const reference was causing
confusion is the notorious `auto_ptr` class from C++98 standard
library. The intention behind it was good—to provide a smart pointer,
where the RAII pattern is used for automatic memory management.

However, in order to achieve that, the designers had to drop the
`const` keyword from the copy constructor and the assignment operator.
That's because the destination `auto_ptr` had to "steal" the managed
resource, invalidating the source `auto_ptr` object.

This behavior wasn't only confusing to human users. Standard containers
were not ready to this kind of behavior either, because they sometimes
need to make a temporary copy of an item, e.g. to use as a pivot element
during sorting, and then discard it. Containers assume that all copies
of an item are equivalent. However, `auto_ptr` clearly violates this
assumption, and that's why it was banned from being stored in standard
containers.

Needless to say, [don't
use](https://google.github.io/styleguide/cppguide.html#Ownership_and_Smart_Pointers)
`auto_ptr` in modern code.

[![](https://2.bp.blogspot.com/-6W-7B3vF5o4/XF0GoAPMvAI/AAAAAAAANaU/Tkvg-5VkN2MoR-RQSUmiK9iytFYehavLgCEwYBhgL/s1600/rvalues-22.png)](https://2.bp.blogspot.com/-6W-7B3vF5o4/XF0GoAPMvAI/AAAAAAAANaU/Tkvg-5VkN2MoR-RQSUmiK9iytFYehavLgCEwYBhgL/s1600/rvalues-22.png)

Apparently, you feel that it's time to jump into the great changes that
happened in C++11, and finally allowed to express this kind of object
behavior more clearly. But before we actually do that, let's consider
one more interesting aspect of references.

So, here is a situation—we have an integer variable, which we assign to
a const reference to a float, and then we change the variable's value. I
can assure you, this code is accepted by all C++ compilers.

What value will the float reference have afterwards? Obviously, **3**
outcomes are possible: `f` changes its value to match `i`; `f`'s
value remains the same (**42.0**), or this code causes undefined
behavior and formats your hard drive.

[![](https://4.bp.blogspot.com/-ajFBNpOosr8/XF0GofCSBJI/AAAAAAAANaM/2aWudniB6RozkJeqWyw43BZP28nlCCSaQCEwYBhgL/s1600/rvalues-23.png)](https://4.bp.blogspot.com/-ajFBNpOosr8/XF0GofCSBJI/AAAAAAAANaM/2aWudniB6RozkJeqWyw43BZP28nlCCSaQCEwYBhgL/s1600/rvalues-23.png)

The answer is—`f`'s value remains the same. Why? It's because the
compiler creates a temporary float value, and this is what `f`
actually references. The compiler uses the fact that the `int` type
can be implicitly converted into a `float`. This situation couldn't
happen with pointers because the compiler would simply reject the
attempt to initialize a pointer to float with a pointer to int.

That explains why Google C++ Style
[recommends](https://google.github.io/styleguide/cppguide.html#Implicit_Conversions)
tagging all single argument constructors with the `explicit` keyword
(unless implicit conversions need to be allowed for this class). This
prevents the compiler from silently using the constructor for implicit
type conversion.

Other curious things to consider here:

-   the reference must be `const`. As Bjarne Stroustrup explains, he
    decided that allowing a non-const reference to a temporary value
    would be even more confusing;
-   when we create a reference to a temporary, it's called **binding**.
    This extends the lifetime of a temporary until the moment when the
    reference goes out of scope. This is a very tricky behavior and it's
    easy to get into a trouble when a temporary is returned from a
    function.
-   since taking an address of a reference actually takes the address of
    the referenced value, we can obtain an address of a temporary!

[![](https://1.bp.blogspot.com/-nZCAW_Sb8wY/XF0Go60x0dI/AAAAAAAANag/T3wjdy1MBKgENtN3l_I1FRvGrEHvFDjQgCEwYBhgL/s1600/rvalues-24.png)](https://1.bp.blogspot.com/-nZCAW_Sb8wY/XF0Go60x0dI/AAAAAAAANag/T3wjdy1MBKgENtN3l_I1FRvGrEHvFDjQgCEwYBhgL/s1600/rvalues-24.png)

I've just said that having a writable reference to a temporary would be
confusing. In fact, an **rvalue reference** type introduced in C++11
does exactly that—it binds to temporaries (and to temporaries only), and
allows modifying them. Why on Earth would anyone want to do that?

[![](https://2.bp.blogspot.com/-GAU51NvGVUs/XF0Goj1ZtvI/AAAAAAAANaU/t4CvfrdKnLMsZGMsq_TwlKMleFdN08qeACEwYBhgL/s1600/rvalues-25.png)](https://2.bp.blogspot.com/-GAU51NvGVUs/XF0Goj1ZtvI/AAAAAAAANaU/t4CvfrdKnLMsZGMsq_TwlKMleFdN08qeACEwYBhgL/s1600/rvalues-25.png)

But before trying to answer that question, let's clear up on the naming.
What is an **"rvalue"**, exactly? Turns out, it's something people were
dealing with even in C++98, and even in C.

From language point of view, any **expression** in addition to the type
of the value emitted, also has an attribute which is called "value
category", which basically tells whether this expression can be assigned
to or not.

Let's consider an example of prefix and postfix increment. Since a
prefix increment returns a reference to the new value of the object,
that is, to the object itself, we can assign to it. This operation is
only possible in a language that has reference types. In order to
assign, we need to put the expression on the left side of the assignment
operator, that's why such expressions have **lvalue** category.

Postfix increment returns the previous value of the object, that is, a
temporary value. We can't assign to it, thus a postfix increment can
only be put on the right side of an assignment operator. Such
expressions have the **rvalue** category.

One caveat with using the "left side of an assignment" definition is
that there can be **const lvalue** expressions. Obviously, they can't be
assigned to, but could be, have we stripped them from the **const**
qualifier. So const lvalue expressions are still counted as lvalues.

lvalue and rvalue expressions are defined on a case-by-case bases. For
example, an expression for accessing a variable has lvalue category, and
so has a **prefix** increment or decrement, whereas a **postix**
increment or decrement has an rvalue category. The type category of some
expressions, e.g. of the conditional operator `?:` and comma operator
(`,`) depends on the categories of their operands. For the ternary
operator the rules are really complex.

[![](https://4.bp.blogspot.com/-N48VIpgNQtg/XF0Go4_P5iI/AAAAAAAANag/OjKotds6FGQA3lfDhAXYH0VELgV1zK04wCEwYBhgL/s1600/rvalues-26.png)](https://4.bp.blogspot.com/-N48VIpgNQtg/XF0Go4_P5iI/AAAAAAAANag/OjKotds6FGQA3lfDhAXYH0VELgV1zK04wCEwYBhgL/s1600/rvalues-26.png)

So this is how rvalue references can be used for good. C++ allows their
use as arguments of functions and methods. It in fact defines a new kind
of a constructor—the **move constructor**, and a new kind of the
assignment operator—the **move assignment**. They take an **rvalue
reference** as a parameter, which means they will be called for
temporary values, and for them only.

Since the argument is a temporary value, no other code could see it.
Thus, it's possible to "steal" its value, leaving the temporary in some
valid but otherwise unusable state, and let it get discarded. "Stealing"
of the value (moving from) for certain types can be implemented more
efficiently than copying from.

Recall the ["Proxy"
pattern](https://en.wikipedia.org/wiki/Proxy_pattern). Classes
implementing this pattern are typically lightweight by themselves, but
reference a big chunk of data (indirection!) Canonical examples from the
C++ standard library are `std::string` and `std::vector`. Another
name for this pattern in C++ is ["resource
handle."](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#SS-containers)

[![](https://2.bp.blogspot.com/-oYgF366BXP4/XF0GpRmLteI/AAAAAAAANaY/u6nKwtMESogDUi8yrJntd9aXQpodHdscwCEwYBhgL/s1600/rvalues-27.png)](https://2.bp.blogspot.com/-oYgF366BXP4/XF0GpRmLteI/AAAAAAAANaY/u6nKwtMESogDUi8yrJntd9aXQpodHdscwCEwYBhgL/s1600/rvalues-27.png)

This is why moving is more efficient for a "proxy" type. I'm using
`std::vector` as an example here. Copying a vector involves copying
both the instance of the vector class, and all the vector's elements.
The elements are not stored in the vector instance directly, but instead
are allocated outside of the class.

Thus, when moving from a vector the instance of the vector class still
has to be copied, but the vector elements don't have to. Since the moved
from instance is discarded anyways, the destination vector can simply
make its internal data reference to point to the elements of the old
vector. The actual implementation typically swaps the values of
important data members while performing a move.

[![](https://3.bp.blogspot.com/-t4mKXu5r6zI/XF0GpvjlWSI/AAAAAAAANac/xBvUkxe5Iv4AxNz3nV11l8wo269zyFyBACEwYBhgL/s1600/rvalues-28.png)](https://3.bp.blogspot.com/-t4mKXu5r6zI/XF0GpvjlWSI/AAAAAAAANac/xBvUkxe5Iv4AxNz3nV11l8wo269zyFyBACEwYBhgL/s1600/rvalues-28.png)

From the previous explanation it's easy to see what types can be moved
from more efficiently than copied. As an example, for primitive types
and their aggregations "moving from" is equivalent to copying. But for
"proxy" types that use indirection moving is more efficient.

Keep in mind that some standard library types like `std::string` or
`std::function` may or may not use indirection. When they don't it's
typically because the amount of data they carry is small, so it doesn't
hurt performance if they get copied. For strings, this approach is
called [small string
optimization](https://blogs.msmvps.com/gdicanio/2016/11/17/the-small-string-optimization/).

Any non-efficient type can be trivially converted into an efficient one
by introducing indirection—wrapping the type into a smart pointer. We
will talk about them in a minute.

[![](https://3.bp.blogspot.com/-wmcamO3UMDY/XF0GqBuy-kI/AAAAAAAANac/cE3yjAmVKzkAGQ-ZUCrLEWJGuoZyiG3fwCEwYBhgL/s1600/rvalues-29.png)](https://3.bp.blogspot.com/-wmcamO3UMDY/XF0GqBuy-kI/AAAAAAAANac/cE3yjAmVKzkAGQ-ZUCrLEWJGuoZyiG3fwCEwYBhgL/s1600/rvalues-29.png)

Unlike in the previous somewhat artificial example for references to
temporaries, you typically don't need to use rvalue references as
variables in real code. The most common usage for them is in arguments
of move constructors and move assignments. They can also appear in
overloads of functions or methods that are optimized for taking
temporary values.

[![](https://3.bp.blogspot.com/-kOuXk7PHYGI/XF0Gp1FMf-I/AAAAAAAANac/tEY-fe9bXGIZgJGSHhUOWySC9CoQgUJMgCEwYBhgL/s1600/rvalues-30.png)](https://3.bp.blogspot.com/-kOuXk7PHYGI/XF0Gp1FMf-I/AAAAAAAANac/tEY-fe9bXGIZgJGSHhUOWySC9CoQgUJMgCEwYBhgL/s1600/rvalues-30.png)

The introduction of move semantics helped C++ get a smart pointer that
actually works. It's called `std::unique_ptr`, and is designed to
automatically manage the lifetime of a dynamically allocated object.
There can only be one owner for a `unique_ptr` at any given time.
This is why copying is disabled for this class. For the purposes of
ownership transfer, move constructor and move assignment are used. This
is different from `auto_ptr` which was trying to use copy constructor
and assignment in an unusual way, as you remember.

Types that allow moving, and that's pretty much all of the types, are
called **moveable** types. It's possible for a type in C++11 to be
non-copyable but moveable. Such types are called **move-only** types.
There is another smart pointer type added in C++11 which can be copied,
it's called `shared_ptr`.

One technical moment I would like to direct you attention to is that
both move constructor and move assignment for `unique_ptr` are tagged
with the `noexcept` keyword. This states that these methods can't
throw exceptions, and it's a compile-time replacement for the
`throw()` statement which was used in the prior versions of the C++
standard.

[![](https://2.bp.blogspot.com/-L2JOHdiDh4I/XF0GqY_21ZI/AAAAAAAANag/KbDCmLmtAfER5RsUxfgcgS7oyypuQyHoACEwYBhgL/s1600/rvalues-31.png)](https://2.bp.blogspot.com/-L2JOHdiDh4I/XF0GqY_21ZI/AAAAAAAANag/KbDCmLmtAfER5RsUxfgcgS7oyypuQyHoACEwYBhgL/s1600/rvalues-31.png)

Another big change in the C++ standard library is that the classes now
support move-only types (recall that `auto_ptr` was not allowed in
containers), so it's possible to store `unique_ptr` in vectors, maps,
etc.

When you define a container of move-only types, the container naturally
becomes move-only, too. That also applies to structures and classes
containing move-only types as fields.

And an important change in the container behavior is that they can use
move semantics instead of copying during certain operations, for example
when resizing the internal container storage. This is good for
performance—for example, when a vector of vectors get resized, there is
no need to copy the contents of stored vectors. One caveat however, is
that containers use this optimization only if move constructor and
assignment are marked as exception-safe using the `noexcept`
keyword.

This behavior of containers doesn't change even when exception support
is disabled using compiler switches. That's why Google C++ Style
[recommends](https://google.github.io/styleguide/cppguide.html#noexcept)
not forgetting to put the `noexcept` specification on move
constructors and move assignment operators for your classes.
