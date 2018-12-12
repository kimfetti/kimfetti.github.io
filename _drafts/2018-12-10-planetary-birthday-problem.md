---
layout: page-fullwidth
title: "Finding Birthday Problem Twins on Mars"
subheadline: "Analytic Approximations"
meta_teaser: "_The birthday problem is a classic probability question with a surprising result.  In this post, we will not only solve this classic but also consider how the solution differs for every planet in our solar system._"
ser: ''
header:
    image: birthday_planet_header.jpg
    background-color: "#999999"
    caption: "Voyager Montage by NASA. Public Domain. Credit: NASA."
    caption_url: https://www.nasa.gov/index.html
image:
    thumb: birthday_planet_thumb.jpg
    homepage: birthday_planet_header.jpg
    caption: "Credit: NASA"
    caption_url: https://www.nasa.gov/index.html
categories:
    - mathematics
    - visualizations
---
<!--more-->

<div class="row">
<div class="medium-4 medium-push-8 columns" markdown="1">
<div class="panel radius" markdown="1">
**Table of Contents**
{: #toc }
*  TOC
{:toc}
</div>
</div><!-- /.medium-4.columns -->



<div class="medium-8 medium-pull-4 columns" markdown="1">

I was recently tasked with developing a challenge problem for the Metis data science bootcamp.  Perhaps it was my background in math or maybe my penchant for mild torture, but I decided to have students answer a few exercises from [Fifty Challenging Problems with Solutions][1] by Moesteller.  This is book is full of classic problems in probability, and I highly recommend it to anyone prepping for data science interviews!

One of my favorite sections in this book is the birthday series, which includes a version of the birthday problem.  This problem is about as famous as a probability question can get.  It has been featured on [NPR][2], written about in an [Arthur C. Clarke novel][3], and it even has its [own Wikipedia page][4]! 

The problem goes something along the lines of:

> <span class="teaser">You are throwing a party and inviting random people you have never met. What's the fewest number of people you need to invite to have at least 50% probability that two strangers will have the same birthday? (Birth year need not match.)</span>

If you haven’t solved this one before, feel free to take a moment and give it a shot.  Be warned -- __spoilers ahead__!

## Solving with Probability

Rather than the brute force approach, it turns out that the answer can be found much more easily by considering the complementary case; that is, “How many people can you invite to expect a 50% chance that all invited people have unique birthdays?”  This "unsuccessful" probability along with the "successful" probability will sum to one.  

Keeping the complementary case in mind, note that the first person at your party can have their birthday on any calendar day, but after that, each person must have a different day.  Let \\(p_u\\) be the probability that \\(r\\) people each have a different birthday. We find
\\[p_u = 1 \cdot \frac{N-1}{N} \cdot \frac{N-2}{N} \cdots \frac{N-r-1}{N} = \frac{N!}{(N-r)!N^r}\\]
where \\(N\\) is the number of days in a year.  

Backtracking to our original birthday problem, we now just need to find the minimum value of \\(r\\) people that satisfy:
\\[p_{s} = 1 - \frac{N!}{(N-r)!N^r} > \frac{1}{2}\\]

This expression doesn’t look so pleasant to be solved outright, so instead we can build a little solver in Python or the language of your choice to be able to compute \\(p_s\\) for any given \\(r\\) and \\(N\\).  Once we hit the \\(p_s = \frac{1}{2}\\) mark, we have our desired party size!  The table below illustrates the solution \\(r\\) for the 50% probability as well as a few others.

| Party Sizes for Select \\(p_s\\)
------ | ----- 
| \\({p_s}\\) | \\({r}\\)     
0.05    | 7
0.1     | 10 
0.25    | 15
**0.5** | **23**
0.75    | 32
0.9     | 41
0.999   | 70

If we invite just 23 people to our party, we will have a 50-50 chance that at least 2 people will share the same birthday, and inviting 60 or 70 people pretty much guarantees it.  

So it’s plain to see that \\(p_s\\) increases rapidly as our party gets bigger here on Earth.  But this led me to consider: “What would happen if the party took place on, say, Mars or Jupiter?”  Or in less whimsical terms: "How many people would we need if we varied the year length, \\(N\\)?"

## About Volkhov &lt;h2&gt; 

<dfn>Volkhov</dfn> is a low-contrast seriffed typeface with a robust character, intended for providing a motivating reading experience. Volkhov was designed by Ivan Petrov.

### Feeling Responsive uses Volkhov for...  &lt;h3&gt;

* &lt;h1&gt;-headings
* &lt;h2&gt;-headings
* &lt;h3&gt;-headings
* &lt;h4&gt;-headings
* &lt;h5&gt;-headings
* &lt;h6&gt;-headings


#### Heading in Volkhov &lt;h4&gt;

As a four-weight family it is well-suited for complex text environments being economic and legible, contemporary and prominent. Many of its design solutions relate to this purpose: large open counters, rather short descenders, and brutal asymmetric serifs.

##### Heading in Volkhov &lt;h5&gt;

Spacing in Bold is slightly increased compared to the normal weight, because the bold mass is mostly grown inwards. The Italic has a steep angle and a distinctive calligraphically reminiscent character, as a counterpart to the rigorous Regular.



## Modular Scale

*Feeling Responsive* explores the *2:3 perfect fifth* modular scale created with [www.modular-scale.com][7]. This is the modular scale of  *Feeling Responsive*.

44px @ 1:1.5 – Ideal text size  
16px @ 1:1.5 – Important number

| Modular Scale
------ | ----- | ----- | -------
44.000 | 1     | 2.75  | 338.462
36.000 | 0.818 | 2.25  | 276.923
29.333 | 0.667 | 1.833 | 225.638
24.000 | 0.545 | 1.5   | 184.615
19.555 | 0.444 | 1.222 | 150.423
16.000 | 0.364 | 1     | 123.077



## Typographical Elements
{: .t60 }

Here you'll find the [complete list of HTML5-Tags][1] and this is how they look like.

### &lt;hr&gt; Horizontal Line
<hr>


### &lt;pre&gt; Displaying Code
~~~
<html>
    <head>
        <title>Code Blocks</title>
    </head>
    <body></body>
</html>
~~~


### &lt;blockquote&gt; Quotation
<blockquote>Everything happens for a reason. (Britney Spears)</blockquote>

### &lt;blockquote&gt; and &lt;cite&gt;  together

> Age is an issue of mind over matter. If you don't mind, it doesn't matter.
<cite>Mark Twain</cite>


### &lt;ol&gt; Ordered Lists

1. Ordered List
2. Second List Item
3. Third List Item
    4. Second Level First Item
    4. Second Level Second Item
    4. Second Level Third Item
        5. And a third level First Item
        5. And a third level Second Item
        5. And a third level Third Item
4. Fourth List Item
5. Fifth List Item


### &lt;ul&gt; Unordered Lists

- Unordered List
- Second List Item
- Third List Item
    + Second Level First Item
    + Second Level Second Item
    + Second Level Third Item
        * And a third level First Item
        * And a third level Second Item
        * And a third level Third Item
- Fourth List Item
- Fifth List Item

### &lt;dl&gt; Definition Lists

Definition List
:   Bacon ipsum dolor sit amet spare ribs brisket ribeye, andouille sirloin bresaola frankfurter corned beef capicola bacon. Salami beef ribs sirloin, short loin hamburger shoulder t-bone.

Beef ribs jowl swine porchetta
:   Sirloin tenderloin swine frankfurter pork loin pork capicola ham hock strip steak ribeye beef ribs. Hamburger t-bone ribeye ham prosciutto bresaola.

Pancetta flank sirloin pork
:   short ribs shankle prosciutto landjaeger. Beef ribs turkey shoulder drumstick. Leberkas pork belly ribeye, bresaola jerky strip steak tenderloin bacon landjaeger short ribs beef ribs. Flank pork chop fatback tail kielbasa filet mignon jowl landjaeger bresaola tongue corned beef biltong.
:   Landjaeger spare ribs fatback corned beef tenderloin drumstick, swine chicken beef turkey biltong doner tri-tip filet mignon. 


### &lt;a&gt;
[Links][2] make the web exceptional.


### &lt;em&gt;
Let's *emphasize* how important responsive webdesign is.



### &lt;strong&gt;
This looks like **bold** text.



### &lt;small&gt;
<small>This is small text.</small>



### &lt;s&gt;

It's nice getting things done. Just strike through <s>finished tasks</s>.



### &lt;cite&gt;

<cite>Albert Einstein</cite>



### &lt;q&gt;

If you use &lt;q&gt; your text gets <q>automagically quotes around the text passage</q>.



### &lt;dfn&gt;

The &lt;dfn&gt; tag is a phrase tag. It defines a <dfn>definition term</dfn>.



### &lt;abbr&gt;

The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.



### &lt;time&gt;

The concert took place on <time datetime="2001-05-15 19:00">May 15</time>.


### &lt;code&gt;

Some `code: lucida console` displayed.



### &lt;var&gt;

The &lt;var&gt; tag is a phrase tag. It defines a <var>variable</var>.



### &lt;samp&gt;

Text surrounded by &lt;samp&gt; <samp>looks like this in monospace</samp>.



### &lt;kbd&gt;

Copycats enjoy pressing <kbd>CMD</kbd> + <kbd>c</kbd> and <kbd>CMD</kbd> + <kbd>v</kbd>.



### &lt;sub&gt;

This text <sub>lays low</sub> and chills a bit.


### &lt;sup&gt;

This text <sup>gets high</sup> above the clouds.



### &lt;i&gt;

This looks <i>italic</i>.



### &lt;b&gt;

This looks <b>bold</b>, too.



### &lt;u&gt;

<div><p><u>Underlining</u> content for emphasize is not the best choice. You can't read it so well.</p></div>



### &lt;mark&gt;
Let's <mark>mark this hint</mark> to give you a clue.



### &lt;br&gt;

Need a break? I give you three!<br><br><br>


## Footnotes

If you need footnotes for your posts, articles and entries, the Kramdown-Parser [^1] got you covered. How to use footnotes? Read this footnote. [^2]



 [1]: https://www.amazon.com/Challenging-Problems-Probability-Solutions-Mathematics-ebook/dp/B00A3M0VV8
 [2]: https://www.npr.org/templates/story/story.php?storyId=4542341
 [3]: https://en.wikipedia.org/wiki/A_Fall_of_Moondust
 [4]: https://en.wikipedia.org/wiki/Birthday_problem
 [5]: #
 [6]: #
 [7]: #
 [8]: #
 [9]: #
 [10]: #


[^1]: Find out more about Kramdown on <http://kramdown.gettalong.org/>
[^2]: Kramdown has an excellent documentation of all its features. Check out, on how to [footnotes](http://kramdown.gettalong.org/syntax.html#footnotes).

# &lt;h1&gt;-Heading in Volkhov

## &lt;h2&gt;-Heading in Volkhov

### &lt;h3&gt;-Heading in Volkhov

#### &lt;h4&gt;-Heading in Volkhov

##### &lt;h5&gt;-Heading in Volkhov

###### &lt;h6&gt;-Heading in Volkhov


## Tables

Even tables are responsive thanks to foundation. A table can consist of these elements.

<table>
  <caption>&lt;table&gt; defines an HTML table</caption>
  <colgroup>
    <col span="1" style="width: 15%;">
    <col span="1" style="width: 50%;">
    <col span="1" style="width: 35%;">
  </colgroup>
  <thead>
    <tr>
      <th>HTML Tag</th>
      <th>Defintion</th>
      <th>Style</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>&lt;caption&gt;</td>
      <td>defines a table caption</td>
      <td><code>font-weight: bold;</code></td>
    </tr>
    <tr>
      <td>&lt;colgroup&gt;</td>
      <td>specifies a group of one or more columns in a table for 
formatting. The &lt;colgroup&gt; tag is useful for applying styles to entire columns, instead of repeating the styles for each cell, for each row.</td>
      <td>no styling needed</td>
    </tr>
    <tr>
      <td>&lt;col&gt;</td>
      <td>specifies column properties for each column within a `&lt;colgroup&gt;` 
element</td>
      <td>no styling needed</td>
    </tr>
    <tr>
      <td>&lt;thead&gt;</td>
      <td>is used to group header content in an HTML table</td>
      <td><code>font-weight: bold;</code></td>
    </tr>
    <tr>
      <td>&lt;tbody&gt;</td>
      <td>is used to group the body content in an HTML table</td>
      <td>no styling needed</td>
    </tr>
    <tr>
      <td>&lt;tr&gt;</td>
      <td>defines a row in an HTML table</td>
      <td>no styling needed</td>
    </tr>
    <tr>
      <td>&lt;th&gt;</td>
      <td>defines a header cell in an HTML table</td>
      <td><code>font-weight: bold;</code></td>
    </tr>
    <tr>
      <td>&lt;td&gt;</td>
      <td>defines a standard cell in an HTML table</td>
      <td><code>font-weight: normal;</code></td>
    </tr>
    <tr>
      <td>&lt;tfoot&gt;</td>
      <td>is used to group footer content in an HTML table</td>
      <td>no styling needed</td>
    </tr>
</table>







</div><!-- /.medium-8.columns -->
</div><!-- /.row -->


