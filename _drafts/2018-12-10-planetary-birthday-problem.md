---
layout: page-fullwidth
title: "Finding Birthday Problem Twins on Mars"
subheadline: "Analytic Approximations"
meta_teaser: "The birthday problem is a classic probability question with a surprising result.  In this post, we will not only solve this classic but also consider how the solution differs for every planet in our solar system."
teaser: "<em>The birthday problem is a classic probability question with a surprising result.  In this post, we will solve this classic and extend the result by considering how the solution differs for every planet in our solar system.</em>"

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

| Party Sizes for Select \\(\boldsymbol{p_s}\\)
------ | ----- 
| \\({\boldsymbol{p_s}}\\) | \\({\boldsymbol{r}}\\)     
0.05    | 7
0.1     | 10 
0.25    | 15
**0.5** | **23**
0.75    | 32
0.9     | 41
0.999   | 70

If we invite just 23 people to our party, we will have a 50-50 chance that at least 2 people will share the same birthday.  Inviting 60 or 70 people pretty much guarantees it.  

So it’s plain to see that \\(p_s\\) increases rapidly as our party gets bigger here on Earth.  But this led me to consider: “What would happen if the party took place on, say, Mars or Jupiter?”  Or in less whimsical terms: "How many people would we need if we varied the year length, \\(N\\)?"


## Planetary Results

<iframe align = "center" width = "600" height = "400" src="https://public.tableau.com/views/PlanetaryBirthdayProblem/Planets-50?:embed=y&:display_count=yes&publish=yes"/>


There is more text down here!


And even more still!!