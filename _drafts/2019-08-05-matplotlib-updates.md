---
layout: page-fullwidth
title: "Simple Ways to Improve Your Matplotlib"
subheadline: "Data Visualization"
meta_teaser: "Matplotlib's default properties often yield unappealing plots that can be off-putting to many users.  This post offers several simple ways to improve upon these defaults and help spruce up your matplotlib visualizations."
teaser: "<em>Matplotlib's default properties often yield unappealing plots that can be off-putting to many users.  This post offers several simple ways to improve upon these defaults and help spruce up your matplotlib visualizations.</em>"


header:
    image: lego_header.jpg
    background-color: "#999999"
    caption: "Photo by Alice Bartlett. Cropped and resized by author."
    caption_url: http://bit.ly/31rt1Zq
image:
    thumb: lego_thumb.jpg
    homepage: lego_header.jpg
    caption: "Photo by Alice Bartlett. Cropped by author."
    caption_url: http://bit.ly/31rt1Zq
categories:
    - visualizations
show_meta: true
comments: true
---
<!--more-->

[Matplotlib][12] is typically the first data visualization package that Python programmers learn.  While its users can create basic figures with just a few lines of code, these resulting default plots often prove insufficient in both design aesthetics and communicative power.  Simple adjustments can lead to dramatic improvements, however, and in this post, I will share several such tips on upgrading basic Matplotlib figures.

In the examples that follow, I will be using information found in [this Kaggle dataset about cereals][10].  I have normalized three features (calories, fat, and sugar) by serving size to better compare cereal trends and ratings.  Details about these data transformations and the code used to generate each example figure can be found on [GitHub][11].


## Remove Spines

The first Matplotlib default to update is that black box surrounding each plot, comprised of four so-called "spines."  To adjust them we first [get our figure's axes][1] via pyplot and then change the visibility of each individual spine as desired.

Let's say, for example, we want to remove the top and right spines.  If we have imported Matplotlib's pyplot submodule with:

```python
from matplotlib import pyplot as plt
```

we just need to add the following to our code:

```python
plt.gca().spines['top'].set_visible(False)
plt.gca().spines['right'].set_visible(False)
```

and the top and right spines will no longer appear.  Removing these distracting lines allows more focus to be directed toward your data.

<center>
<img src="{{ site.urlimg }}spines.png" alt="Remove matplotlib spines" width = "800">
<p><em>Removing distracting spines can help people focus on your visual.</em></p>
</center>


## Explore Color Options

Matplotlib's [default colors just got an update][2] but you can still easily change them to make your plots more attractive or even to reflect your company's brand colors.

### Hex Codes 

One of my favorite methods for updating Matplotlib's colors is directly passing [hex codes][3] into the color argument because it allows me to be extremely specific about my color choices.  

```python
plt.scatter(..., color='#0000CC')
```

[This handy tool][4] can help you select an appropriate hex color by testing it against white and black text as well as comparing several lighter and darker shades.  Alternatively, you can take a more scientific approach when choosing your palette by checking out [Colorgorical][5] by Connor Gramazio from the Brown Visualization Research Lab.  The Colorgorical tool allows you to build a color palette by balancing various preferences like human perceptual difference and aesthetic pleasure.


### xkcd Colors

The [xkcd color library][6] provides another great way to update Matplotlib's default colors.  These 954 colors were specifically curated and named by the several hundred thousand participants of the [xkcd color name survey][7].  You can use them in Matplotlib by prefixing their names with "xkcd:".

```python
plt.scatter(..., color='xkcd:lightish blue')
```

<center>
<img src="{{ site.urlimg }}color.png" alt="Explore matplotlib colors" width = "900">
<p><em>Matplotlib's default colors can easily be updated by passing hex codes or referencing the xkcd library.</em></p>
</center>


## Layer Visuals

Matplotlib allows users to layer multiple graphics on top of each other, which proves convenient when comparing results or setting baselines.  Two useful properties should be utilized while layering: 1) `alpha` for controlling each component's opacity and 2) `zorder` for setting objects to the foreground or background.

### Opacity

The alpha property in Matplotlib adjusts an object's opacity.  This value ranges from zero to one with zero being fully transparent (invisible 👀) and one being entirely opaque.  Reducing alpha will make your plot objects see-through, allowing multiple layers to be seen at once as well as allowing overlapping points to be distinguished, say, in a scatter plot.

```python
plt.scatter(..., alpha=0.5)
```

<center>
<img src="{{ site.urlimg }}alpha.png" alt="Adjust matplotlib opacity" width = "800">
<p><em>Decreasing alpha reduces opacity and can help you visualize overlapping points.</em></p>
</center>

### Order

Matplotlib's zorder property determines how close objects are to the foreground.  Objects with smaller zorder values appear closer to the background, while those with larger values present closer to the front.  If I'm making a scatter plot with an accompanying line plot, for example, I can bring the line forward by increasing its zorder.

```python
plt.scatter(..., zorder=1)  #background
plt.plot(..., zorder=2)     #foreground
```

<center>
<img src="{{ site.urlimg }}zorder.png" alt="Control layer order with zorder" width = "600">
<p><em> Plot objects can be brought to the foreground or pushed to the background by adjusting zorder.</em></p>
</center>


## Annotate Main Points or Examples

Many visuals can benefit from the annotation of main points or specific, illustrative examples because these directly convey our ideas and boost the validity of our results.  To add text a Matplotlib figure, just include annotation code specifying the desired text and its location.

```python
plt.annotate(TEXT, (X_POSITION, Y_POSITION), ...)
```

The cereal dataset used to produced this blog's visuals contains nutritional information about several brand name cereals along with a feature labeled as "rating."  One might firstly assume that "rating" is a score indicating cereals that consumers prefer.  In the zorder figure above, however, I built a quick linear regression model showing that the correlation between calories per cup and rating is practically non-existent, and it seems unlikely that calories would not factor into consumer preference. We may already be skeptical about our initial assumption about "rating," but this misconception becomes even more obvious once I examine the extremes: Cap'n Crunch is the lowest rated cereal while All-Bran with Extra Fiber rates the highest.  Annotating the figure with these representative examples immediately dispels false assumptions about "rating," which more likely indicates a cereal's nutritional value. (I have also annotated the cereal with the most calories per cup; Grape Nuts is likely not meant to be consumed in such large quantities! 😆)

<center>
<img src="{{ site.urlimg }}annotate.png" alt="Annotate examples" width = "700">
<p><em> Annotating your visuals with a few examples can improve communication and add legitimacy.</em></p>
</center>


## Baseline and Highlight

Adding a baseline to your visuals helps set expectations, while a shaded region can further emphasize your conclusions.  A simple horizontal line or background shading provides others with appropriate context and can speed along their understanding of your results. 

### Horizontal and Vertical Lines

For the examples that follows, let's consider the interplay between fat and sugar in our cereal dataset.  Simply plotting this relationship doesn't look too interesting at first, but it turns out the median fat per cup for these cereals is just 1 gram because many cereals contain no fat at all.  Adding this baseline helps people understand this fact much quicker.

<center>
<img src="{{ site.urlimg }}baseline.png" alt="Add a baseline" width = "800">
<p><em> A horizontal or vertical baseline can help set the stage for your data.</em></p>
</center>

In some cases, you may want to completely remove the default x- and y-axes that matplotlib provides and create your own axes based on some aggregate of the data.  This situation just requires removing spines as we did before, removing tick marks, and adding a horizontal and vertical lines.

```python
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

Then you just need to grab your current axes and add a rectangular patch:

```python
plt.gca().add_patch(Rectangle(X_POSITION, Y_POSITION), WIDTH, HEIGHT, ...),
```

where the x- and y-position refer to the lower lefthand corner.

<center>
<img src="{{ site.urlimg }}rectangle.png" alt="Add a rectangle" width = "600">
<p><em> To draw people toward a particular part of your visual, consider adding a rectangle.</em></p>
</center>

### Shading 

Instead of using a rectangle, shading provides another option for drawing attention to a particular region on your plot.  There are a few ways to do this.  

Firstly, if you'd like to highlight an entire horizontal or vertical region, you can use `axhspan` or `axvspan` by adding the following to your plot code:

```python
plt.axhspan(Y_START, Y_END, ...)  #horizontal shading
plt.axvspan(X_START, X_END, ...)  #vertical shading
```

Previous options like `alpha` and `zorder` also help here because you will likely want to make your shading more transparent and/or move it to the background of your figure.

<center>
<img src="{{ site.urlimg }}shading.png" alt="Shading for highlighting" width = "800">
<p><em> Background shading also provides an effective way to highlight a particular region of your plot.</em></p>
</center>


Another way to add shading is to define two lines and fill between them.  This method even takes an optional argument called `where` which allows you to filter your highlight region.

```python
plt.gca().fill_between(X_VALUES, LINE1, LINE2, WHERE=FILTER, ...)
```

To shade the same region that we drew a rectangle around previously, we can just predefine an array of equally spaced x-values and filter on them as needed.

```python
sugars = np.linspace(df.sugars_per_cup.min(), df.sugars_per_cup.max(), 1000)

plt.gca().fill_between(sugars, df.fat_per_cup.median(), df.fat_per_cup.max()*1.05, 
                       WHERE=sugars < df.sugars_per_cup.median(), ...)
```

<center>
<img src="{{ site.urlimg }}fill_between.png" alt="Fill between lines" width = "600">
<p><em> Background shading can also be accomplished by filling between two lines.</em></p>
</center>



## Conclusion

mostly about telling story quicker - highlight annotate, layering.  and removing extraneous bits spines, ticks etc.




[Check out this code on GitHub!][11]  ||  [Check out my ODSC conference materials with Google Colab!](bit.ly/odscNyc19_dataviz)


 [1]: https://matplotlib.org/3.1.1/api/_as_gen/matplotlib.pyplot.gca.html
 [2]: https://matplotlib.org/3.1.1/users/dflt_style_changes.html#colors-color-cycles-and-color-maps
 [3]: https://htmlcolorcodes.com/
 [4]: https://www.w3schools.com/colors/colors_picker.asp
 [5]: http://vrl.cs.brown.edu/color
 [6]: https://xkcd.com/color/rgb/
 [7]: https://blog.xkcd.com/2010/05/03/color-survey-results/
 [8]: https://matplotlib.org/3.1.1/api/patches_api.html#module-matplotlib.patches
 [9]: https://matplotlib.org/3.1.1/gallery/shapes_and_collections/dolphin.html#sphx-glr-gallery-shapes-and-collections-dolphin-py
 [10]: https://www.kaggle.com/crawford/80-cereals
 [11]: https://github.com/kimfetti/Blog/blob/master/matplotlib_tips.ipynb
 [12]: https://matplotlib.org/


