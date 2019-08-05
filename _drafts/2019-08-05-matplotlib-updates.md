---
layout: page-fullwidth
title: "Simple Ways to Improve Your Matplotlib"
subheadline: "Data Visualizations"
meta_teaser: "Matplotlib's default properties often yield unappealing plots that can be off-putting to many users.  This post offers several simple ways to improve upon these defaults and help spruce up your matplotlib visualizations."
teaser: "<em>Matplotlib's default properties often yield unappealing plots that can be off-putting to many users.  This post offers several simple ways to improve upon these defaults and help spruce up your matplotlib visualizations.</em>"

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
    - visualizations
show_meta: true
comments: true
---
<!--more-->


Intro statements - the defaults for matplotlib aren't great.  Can move to Seaborn (more on that later) but you can also use special commands to make your matplotlib plots look a lot better.

I recently gave a talk at ODSC NYC about data visualization...

# Remove spines

One of the first matplotlib default that we may want to update is the black box that surrounds each plot.  There are a few ways to do this, but one way is to get the current axis through pyplot and update the visibility of each desired spine.

Let's say we want to turn off the top and right spines, for example.  If we have imported matplotlib's pyplot submodule with:
```
from matplotlib import pyplot as plt
```
we just need to add the following to our code:
```
plt.gca().spines['top'].set_visible(False)
plt.gca().spines['right'].set_visible(False)
```
and we will have improved upon matplotlib's defaults.

<center>
<img src="{{ site.urlimg }}spines.png" alt="Update matplotlib spines" width = "900">
</center>




# Explore color options

## Hex codes 
Colorgorical

## xkcd library


# Layer visuals

## zorder

## alpha



# Annotate main points

## Add a rectangle to direct attention



# Baseline and highlight

## Horizontal and vertical lines

## Background shading 

Also include zorder, alpha here




[Check out this code on GitHub!](https://github.com/kimfetti/Blog/blob/master/planetary_birthday_problem.ipynb)  ||  [Check out my conference materials with Google Colab!](https://public.tableau.com/profile/kimberly.fessel#!/vizhome/PlanetaryBirthdayProblem/Planets-50)



