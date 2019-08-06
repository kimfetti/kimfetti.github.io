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

## Remove Spines

The first matplotlib default that we may want to update is the black box that surrounds each plot, so called "spines" in matplotlib.  One way to do this is to [get the current axis][1] through pyplot and update the visibility of each spine as desired.

Let's say we want to turn off the top and right spines, for example.  If we have imported matplotlib's pyplot submodule with:
```
from matplotlib import pyplot as plt
```
we just need to add the following to our code to improve matplotlib's defaults:
```
plt.gca().spines['top'].set_visible(False)
plt.gca().spines['right'].set_visible(False)
```

<center>
<img src="{{ site.urlimg }}spines.png" alt="Remove matplotlib spines" width = "800">
<p><em>Removing distracting spines can help people focus on your visual.</em></p>
</center>


## Explore Color Options

Matplotlib's [default colors just got an update][2] but you can still easily update them to make your plots more attractive or even to reflect your company's brand colors.

### Hex Codes 

One of my favorite methods for updating matplotlib's colors is to directly pass [hex codes][3] into the color argument because it allows me to be very specific about my color choices.  

```
plt.scatter(..., color='#2E9336')
```

[This handy tool][4] can help you select an appropriate hex color by testing it against white and black text as well as comparing several lighter and darker shades.  Alternatively, you can take a more scientific approach to choosing your palette by checking out [Colorgorical][5] by Connor Gramazio out of the Brown Visualization Research Lab.  The Colorgorical tool allows you to build a color palette by balancing various preferences like human perceptual difference and aesthetic pleasure.


### xkcd Colors

Another great way to update matplotlib's default colors is to utilize the [xkcd color library][6].  These 954 colors were specifically curated and named by the several hundred thousand participants of the [xkcd color name survey][7].  You can use them in matplotlib by prefixing their names with 'xkcd:'.

```
plt.scatter(..., color='xkcd:shamrock green')
```

<center>
<img src="{{ site.urlimg }}color.png" alt="Explore matplotlib colors" width = "800">
<p><em>Matplotlib default colors can easily be updated by passing hex codes or referencing the xkcd library.</em></p>
</center>


## Layer Visuals

Matplotlib allows users to layer multiple graphics on top of each other, which can help when comparing results or setting baselines.  Two useful properties can help control layer opacity (`alpha`) and ordering (`zorder`).

### Opacity

The alpha property in matplotlib controls an object's opacity.  This value ranges from zero to one with zero being fully transparent (invisible :eyes:) and one being entirely opaque.  Reducing alpha will make your plot objects see-through, allowing multiple layers to be seen at once, and this may also be useful if you are building a scatter plot with overlapping points.

```
plt.scatter(..., alpha=0.5)
```

<center>
<img src="{{ site.urlimg }}alpha.png" alt="Adjust matplotlib opacity" width = "800">
<p><em>Adjusting opacity by reducing alpha can help visualize points that overlap.</em></p>
</center>

### Order




## Annotate main points

### Add a rectangle to direct attention



## Baseline and highlight

### Horizontal and vertical lines

### Background shading 

Also include zorder, alpha here




[Check out this code on GitHub!](https://github.com/kimfetti/Blog/blob/master/planetary_birthday_problem.ipynb)  ||  [Check out my ODSC conference materials with Google Colab!](bit.ly/odscNyc19_dataviz)


 [1]: https://matplotlib.org/3.1.1/api/_as_gen/matplotlib.pyplot.gca.html
 [2]: https://matplotlib.org/3.1.1/users/dflt_style_changes.html#colors-color-cycles-and-color-maps
 [3]: https://htmlcolorcodes.com/
 [4]: https://www.w3schools.com/colors/colors_picker.asp
 [5]: http://vrl.cs.brown.edu/color
 [6]: https://xkcd.com/color/rgb/
 [7]: https://blog.xkcd.com/2010/05/03/color-survey-results/


