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

Cereal data used for all examples below

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

Matplotlib's [default colors just got an update][2] but you can still easily change them to make your plots more attractive or even to reflect your company's brand colors.

### Hex Codes 

One of my favorite methods for updating matplotlib's colors is to directly pass [hex codes][3] into the color argument because it allows me to be very specific about my color choices.  

```
plt.scatter(..., color='#0000CC')
```

[This handy tool][4] can help you select an appropriate hex color by testing it against white and black text as well as comparing several lighter and darker shades.  Alternatively, you can take a more scientific approach to choosing your palette by checking out [Colorgorical][5] by Connor Gramazio out of the Brown Visualization Research Lab.  The Colorgorical tool allows you to build a color palette by balancing various preferences like human perceptual difference and aesthetic pleasure.


### xkcd Colors

Another great way to update matplotlib's default colors is to utilize the [xkcd color library][6].  These 954 colors were specifically curated and named by the several hundred thousand participants of the [xkcd color name survey][7].  You can use them in matplotlib by prefixing their names with 'xkcd:'.

```
plt.scatter(..., color='xkcd:lightish blue')
```

<center>
<img src="{{ site.urlimg }}color.png" alt="Explore matplotlib colors" width = "900">
<p><em>Matplotlib default colors can easily be updated by passing hex codes or referencing the xkcd library.</em></p>
</center>


## Layer Visuals

Matplotlib allows users to layer multiple graphics on top of each other, which can help when comparing results or setting baselines.  Two useful properties can help control layer opacity (`alpha`) and ordering (`zorder`).

### Opacity

The alpha property in matplotlib controls an object's opacity.  This value ranges from zero to one with zero being fully transparent (invisible 👀) and one being entirely opaque.  Reducing alpha will make your plot objects see-through, allowing multiple layers to be seen at once, and this may also be useful if you are building a scatter plot with overlapping points.

```
plt.scatter(..., alpha=0.5)
```

<center>
<img src="{{ site.urlimg }}alpha.png" alt="Adjust matplotlib opacity" width = "800">
<p><em>Reducing opacity by decreasing alpha can help visualize points that overlap.</em></p>
</center>

### Order

Matplotlib's zorder property, however, controls how close objects are to the foreground.  Objects with smaller values for zorder are closer to the background, while those larger zorder values appear closer to the front.  For example, if I'm making a scatter plot with an accompanying line plot, I can bring the line forward by making its zorder larger.

```
plt.scatter(..., zorder=1)
plt.plot(..., zorder=2)
```

<center>
<img src="{{ site.urlimg }}zorder.png" alt="Control layer order with zorder" width = "600">
<p><em> Plot objects can be brought to the foreground or pushed to the background by changing zorder.</em></p>
</center>


## Annotate Main Points or Examples

An extremely powerful way to convey a specific point or add validity to your results is to directly annotate your matplotlib visuals with main points or specific illustrative examples.  To do this, just add annotation code specifying the desired text and position to your matplotlib visual.

```
plt.annotate(TEXT, (X_POSITION, Y_POSITION), ...)
```

When first approaching this cereal dataset, one might assume that "rating" is some kind score indicating cereals that consumers prefer.  In the zorder figure above, however, I built a quick linear regression model which shows that the correlation between calories per cup and ratings is practically non-existent, which makes the theory that "rating" is a consumer preference score unlikely.  This misconception becomes even more obvious once I take a look at the extremes: Cap'n Crunch has a very low rating while All-Bran with Extra Fiber is rated very highly.  And the cereal with the most calories per cup, Grape Nuts, is likely not meant to be consumed in such large quantities!

<center>
<img src="{{ site.urlimg }}annotate.png" alt="Annotate examples" width = "700">
<p><em> Annotating your visuals with a few examples can add legitimacy.</em></p>
</center>


## Baseline and Highlight

Adding a baseline to your visuals helps set expectations, which a shaded region can further emphasize your conclusions.  A simple horizontal line or background shading provides others with appropriate context and can speed along their understanding of your results. 

### Horizontal and Vertical Lines

For the examples that follows, let's consider the interplay between fat and sugar in our cereal dataset.  Simply plotting this relationship doesn't look too interesting at first, but it turns out the median fat per cup for these cereals is just 1 gram because many cereals contain no fat at all.  Adding this baseline helps people understand this fact much quicker.

<center>
<img src="{{ site.urlimg }}baseline.png" alt="Add a baseline" width = "800">
<p><em> A horizontal or vertical baseline can help set the stage for your data.</em></p>
</center>

In some cases, you may want to completely remove the default x- and y-axes that matplotlib provides and create your own axes based on some aggregate of the data.  This situation just requires removing spines as we did before, removing tick marks, and adding a horizontal and vertical lines.

```
#Remove ticks
plt.xticks([])
plt.yticks([])

#Horizontal and vertical lines
plt.axhline(Y_POSITION, ...)  #horizontal line
plt.axvline(X_POSITION, ...)  #vertical line
```

<center>
<img src="{{ site.urlimg }}new_axes.png" alt="Add a baseline" width = "600">
<p><em> You can also create new axes for your data by removing spines and ticks and adding custom lines.</em></p>
</center>

### Rectangle

Once we have plotted the cereals' fat vs sugars with these new axes, we can now see that there are very few cereals that are low in sugar but high in fat, which makes sense because cereals aren't typically savory.  To clearly make this point, we could draw attention to the upper left quadrant by drawing a rectangle around this area.  There are several shapes that you can draw on your matplotlib graphs via the [patches module][8], including a rectangle or even a [dolphin][9].  First import code for the rectangle patch.

```python
from matplotlib.patches import Rectangle
```

Then you just need to grab your current axes and add a rectangular patch.

```python
plt.gca().add_patch(Rectangle(X_POSITION, Y_POSITION), WIDTH, HEIGHT, ...)
```

where the x- and y-position refer to the lower lefthand corner.

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
 [8]: https://matplotlib.org/3.1.1/api/patches_api.html#module-matplotlib.patches
 [9]: https://matplotlib.org/3.1.1/gallery/shapes_and_collections/dolphin.html#sphx-glr-gallery-shapes-and-collections-dolphin-py



