# Switched to Markdown

After writing about **50** posts I decided to do something about
how I typeset them. Previously I was using Blogger post editor
in "Compose" (WYSIWYG) mode. It allows to get job done, however
there was no complete control over the details of
formatting. For example, I like to use non-breaking spaces
between values and their units, as in **"1 kHz"**, so they don't
end up on different lines. However, Blogger editor doesn't show
"special" characters. They can only be viewed in HTML mode,
however the text looks overwhelming with all the extra tags and
attributes that Blogger's WYSIWYG editor throws in.

Another huge missing feature of the Blogger editor is "find and
replace". There is "find" function built into the browser but
no "replace". Again, you can work around by copying the HTML
source into a capable editor, doing all the work there, then
pasting back. Hopefully you haven't screwed up the HTML tags.

I realized that I would like to use my favorite editor for
writing posts and then convert them into HTML (just once!),
paste the result into Blogger and be happy. These days
Markdown is the standard way for typesetting moderately complex
pages, and its minimalist nature makes the page source look very
readable even without syntax highlighting.

So Markdown it be. Where is it convenient to store Markdown
sources? GitHub pages is a good place since GitHub offers a
built-in renderer for them. The renderer also adds some nice
"extensions" to basic Markdown. Decided—I will use GitHub
pages for storing the Markdown originals and continue posting
them on Blogger, because people actually do read the posts there.

## Converting old pages

As an experiment in feasibility of this approach I decided to
convert my existing blog pages to Markdown and "distill" them back
into HTML. This would help to establish the process and iron
out all the possible issues. This also ensures that the blog
"mirror" on GitHub doesn't have dangling links to old posts.

I downloaded the archive of this blog via Blogger's **"Back up
content"** function. It provides a huge XML file containing
all the posts in HTML format, so it's easy to cut out their content
for further processing.

For conversion I used [Pandoc](http://pandoc.org) tool which
among numerous formats supports both HTML and GitHub "flavor" of
Markdown. So, for the old pages the process was as follows:

1. Save the post as HTML file, convert it into GitHub markdown
   using Pandoc:
   ```
   pandoc input.html -f html-native_divs-native_spans \
   --shift-heading-level-by=-1 --atx-headers -t markdown_github \
   -o output.md
   ```
   By trial and error I figured out that I like the results of
   the deprecated `markdown_github` converter better than its
   `gfm` replacement. For some pages I used `--shift-heading-level-by`
   because I was using `<h3>` HTML headers and needed to have
   them "level up"-ed.
2. Clean up the converted Markdown: remove trailing whitespace,
   extra line breaks, make sure all non-breaking spaces are in place,
   etc.
3. Preview the Markdown file using excellent [grip](https://github.com/joeyespo/grip)
   tool. This saves from unnecessary uploads to GitHub.
4. Convert the Markdown back to HTML for Blogger:
   ```
   pandoc output.md -f markdown_github -t html -o distilled.html
   ```
5. Paste the "distilled" HTML back to Blogger.
6. Upload the Markdown to GitHub.
7. Compare the looks and make necessary adjustments to Blogger styling.

The last step also helped me to resolve long standing annoyances
with the default CSS styles used by "Awesome Inc" Blogger theme.
I put my CSS overrides into **"Advanced \> Add CSS"** section in
the theme editor.

BTW, I'm not exaggerating about the converted back HTML being
"distilled".  Blogger puts so much superfluous formatting that
the size of a file containing a post from Blogger typically
reduces by **25–50%** after converting back and forth via
Markdown!

Of course, the conversion isn't without flaws, and Markdown does in
fact offer less formatting capabilities than Blogger. Let's consider the
differences in detail.

### Post links

I decided to use the same file structure for Markdown posts, this makes
converting links easier. The conversion is needed because GitHub uses
names of the Markdown files—`md` extension, while Blogger uses `html`.
I made all the post links to be "site relative" (starting from `/`)
so it doesn't matter where the page is actually hosted.

This way, a link to a previous post in Markdown looks like this:

```
[as shown in the previous post](/2019/06/previous-post.md)
```

and when "distilling" Markdown source to HTML I replace `md` with `html`.

**Update Mar 28, 2021** I've noticed that Github now only replaces
`.md` to `.html` extension in the links of the top-level `README.md`.
So I have changed all other cross-references in posts to use
`.html`:

```
[as recently shown in the previous post](/2019/06/previous-post.html)
```

This is even better as now there is no need to do the aforementioned
replacement.

### Pictures

There are a lot of pictures in this blog, I decided to leave
them hosted on Blogger. The reason is that Blogger server can
resize the picture to a smaller size from the parameters
specified in the image URL. These smaller images are used for
previews in the article. After clicking on the preview a full
size picture is served. This is more efficient than serving a full
picture only and sizing it down in the browser.

This approach also works when links to images host on Blogger
are used in Markdown arcticle on GitHub. As I've figured out,
GitHub in addition makes a copy of any externally hosted image
for serving from its own CDN, so it really doesn't make sense to
pull out images to GitHub manually.

One notable loss is that Markdown doesn't allow specifying alignment
and interaction with text for pictures, so they are always aligned
to the left and can't have text fills on the size.

### Code

Up to the [redesign](https://blogger.googleblog.com/2020/05/a-better-blogger-experience-on-web.html)
Blogger wasn't offering dedicated code formatting. I used monospace
font with non-breaking spaces for sequences of multiple
spaces. While converting, I changed all those code fragments to use
Markdown fenced code blocks.

### Tables

Similar thing for tables. I used tabulated monospaced
formatting. This wasn't super convenient. I converted these
ersatz tables into Markdown tables which translate into actual
HTML tables for Blogger. This looks better. The only
inconvenience is that GitHub Markdown doesn't allow "headerless"
tables.

### Colors

Markdown doesn't have means for colorizing text. It's actually good
for accessibility (think screen readers, color blind people), but I used
to highlight text with colors when discussing graph. Now I will have
to provide more annotations on the graph itself.

### Miscellaneous

1. In Markdown the header of the post is specified on the first
   line using `#` style (heading level 1). In Blogger the header
   stored separately.
2. Special characters like "non-breaking space", "em dash" need to
   be written using corresponding Unicode characters in Markdown.
   Note that the sequence of three dashes `---` is used in Markdown
   for horizontal breaks.

## Writing a new post

I'm writing this post in Markdown and the life feels good. The only
culprit is adding pictures. I still want them to be stored on Blogger.
For example, I want to post an image of the same post in Blogger
and on GitHub. Here is what I have to do. After preparing the
image, I upload it to Blogger and insert into the post draft.
Then I copy the link and transform it into Markdown link format.
This is the result:

[<img src="https://1.bp.blogspot.com/-SFV-p8ko81g/Xt8TQ1CnGCI/AAAAAAAARBY/4GeLwzfOumIqZsKeUJOcrdxFKmQosnDRACK4BGAsYHg/w400-h371/blogger-and-github.png" height="371" width="400" />](https://1.bp.blogspot.com/-SFV-p8ko81g/Xt8TQ1CnGCI/AAAAAAAARBY/4GeLwzfOumIqZsKeUJOcrdxFKmQosnDRACK4BGAsYHg/s782/blogger-and-github.png)

The GitHub mirror of this blog is now located here: https://mnaganov.github.io

## Testimonials

Both [Pandoc](http://pandoc.org) and [grip](https://github.com/joeyespo/grip)
are awesome tools that helped me a lot with converting my posts
into Markdown and back into HTML. I highly recommend them for
any document conversion work and Markdown authoring.
