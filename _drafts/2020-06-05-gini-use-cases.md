---
layout: page-fullwidth
title: "Measuring Statistical Dispersion with the Gini Coefficient"
subheadline: "Math Applications"
meta_teaser: "The Gini coefficient is a good general-purpose measure of statistical dispersion.  Long since popular in the field of economics, it can be leveraged much more broadly to explore data from nearly any discipline. This post includes a thorough mathematical explanation of the Gini coefficient as well as a few non-standard use cases."
teaser: "<em>The Gini coefficient is a good general-purpose measure of statistical dispersion.  Long since popular in the field of economics, it can be leveraged much more broadly to explore data from nearly any discipline. This post includes a thorough mathematical explanation of the Gini coefficient as well as a few non-standard use cases.</em>"

header:
    image: gini_header.png
    background-color: "#999999"
    caption: "Photo by Janko Ferlič on Unsplash.  Cropped and modified by author."
    caption_url: https://unsplash.com/photos/EpbIXGCrtK0
image:
    thumb: gini_thumb.png
    homepage: gini_header.png
    caption: "Photo by Janko Ferlič on Unsplash.  Cropped and modified by author."
    caption_url: https://unsplash.com/photos/EpbIXGCrtK0
categories:
    - mathematics
    - applications
show_meta: true
comments: true
---
<!--more-->

<!--
Content for "abstract" including
- What is statistical dispersion?
- Metric developed by Gini
- UN uses it for ranking countries: wealth vs. income inequality
- I suggest expanding its use to be part of your EDA (measures overall statistical dispersion, yo!)
-->
<hr>

If you work with data long enough, you are bound to discover that a dataset's mean rarely--if ever--tells you the full data story.  As a simple example, each of the following groups of people have the same **average pay** of $100:
- 100 people who make $100 each
- 50 people who make $150 each and 50 people who make $50
- 1 person who makes $10,000 and 99 people who make nothing

The primary difference, of course, is the way that money is distributed among each of the 100 people.  The spread of money in this case represents [statistical dispersion][1].  Perhaps the most popular measurement of statistical dispersion is standard deviation or variance; however, you can leverage other metrics, such as the Gini coefficient, to obtain a new perspective on your data's spread.

<!--  Standard deviation roughly measures the distance between individual dataset values and the overall group mean. Standard deviation retains the same units as the quantity being measured, since we start with dollars in the previous example, standard deviation will also be reported in dollars.  But other unitless metrics can also be used to understand statistical dispersion.  -->

[The Gini coefficient][2], also known as the Gini index or the Gini ratio, was introduced in 1912 by Italian statistician and sociologist Corrado Gini.  Analysts have historically used this value to study income or wealth distributions; in fact, despite being developed over 100 years ago, [the United Nations still uses the Gini coefficient][3] in their annual ranking of nations to understand monetary inequities. But the Gini coefficient may be utilized much more broadly! After a more thorough mathematical explanation, let's apply the Gini coefficient to a few non-standard use cases that do not involving international economies.

<!-- thus demonstrating that the Gini coefficient can be added to your EDA process to strengthen your analyses. -->

<!--
- Typical definition involving Lorenz curve
- Main idea: Area shrinks as curve pulls away from straight line
- Include approximation via Pareto principle?  (Or save for final takeaways?)
-->




## Defining Gini

The first step in understanding the Gini coefficient requires a discussion on the Lorenz curve, a graph developed by Max Lorenz for visualizing income or wealth distribution.  To trace out the Lorenz curve, begin by taking the incomes of a population and sorting them from smallest to largest.  Then build a line plot where the \\(x\\)-values represent the percentage of people seen thus far and the \\(y\\)-values represent the cumulative proportion of wealth attributed to this percentage of people.  For example, if the poorest 30% of the population holds 10% of a population's wealth, the curve should pass through the scaled \\(x,y\\) coordinates (0.3, 0.1).  Note also that if wealth was distributed evenly among all members of a population, the Lorenz curve would follow a straight line, \\(x=y\\).  See the figure below for an illustration of a hypothetical Lorenz curve along with the line of equality.

<div class="row">
  <div class="large-6 columns">
      <img src="{{ site.urlimg }}gini_explanation.png" alt="The areas surrounding the Lorenz curve define the Gini coefficient: A/(A+B)" width = "350">
  </div>
  <div class="large-6 columns">
      <img src="{{ site.urlimg }}gini_animation.gif" alt="The Gini coefficient increases as the inequity gap widens." width = "350">
  </div>
</div>

<br>

The Gini coefficient measures how much a population's Lorenz curve from perfect equality or how much a set of data diverges from an even distribution.  The Gini coefficient typically ranges from zero to one[^1], where

- zero represents perfect equality _(everyone has an equal amount)_ and 
- one represents near perfect inequality _(one person has all the money)_.  

For all situations in between, the Gini coefficient \\(G\\) equals
\\[G = \frac{A}{A + B}\\]
where \\(A\\) signifies the region enclosed between the line of perfect equality and the Lorenz curve, as indicated in the figure above, while \\(A + B\\) represents the total triangular area.

[^1]: The Gini coefficient is strictly non-negative, \\(G \geq 0\\), as long as the mean of the data is assumed positive.  Gini can theoretically be greater than one if some data values are negative, which occurs in the context of wealth if some people contribute to the population's wealth negatively in the form of debts owed.

Each of the three situations discussed in the introduction produce an average of $100 per person, but the Gini coefficient varies greatly for each scenario since Gini measures statistical dispersion.  As seen in the figure below, calculation of the Gini coefficient may prove valuable for any problem or dataset where dispersion plays an important role. 

<img src="{{ site.urlimg }}gini_compare.png" alt="Gini coefficient increases with wealth inequity." width = "1000">




## Gini in Python

To calculate a dataset's Gini coefficient with Python, you have the option of quantifying the shaded area \\(A\\) with something like `scipy`'s [quadrature][4] routine.  If this style of numerical integration proves slow or too complicated for applications at scale, other implementations often begin from an alternative, [equivalent definition of the Gini coefficient][5].
> The Gini coefficient may also be expressed as half of the data's [relative mean absolute difference][6], a normalized form of the average absolute difference among all pairs of observations in the dataset. 
\\[ G = \frac{\sum\limits_i \sum\limits_j |x_i - x_j|}{2\sum\limits_i\sum\limits_j x_j}\\]

The calculation simplifies further if the data consists of only positive values as it becomes [unnecessary to evaluate all possible pairs][7].  Sorting the datapoints in ascending order and assigning a positional index \\(i\\) yields
\\[G = \frac{\sum\limits_i (2i - n - 1)x_i}{n\sum\limits_i x_i}, \\]
which is even speedier to compute. 

The best Python implementation of the Gini coefficient that I've found comes from [Olivia Guest][8]. I will subsequently leverage her vectorized `numpy` function to calculate Gini in the case studies that follow.


## Case \#1: Baby Names

So far we have mostly addressed the Gini coefficient in the context of its original field of economics.  This metric generalizes, however, to provide insight whenever statistical dispersion plays a critical role.  I will now illustrate two atypical applications to demonstrate that use of the Gini coefficient could help improve the workflow of exploratory data analysis procedures.

The Social Security Administration of the United States (SSA) [hosts public records][9] on the names given to US babies for research purposes.  Aggregating these data for children born since 1950, I discovered that 18 out of the top 20 most popular names more commonly associate with male children.  So where are the females?  

<center>
<img src="{{ site.urlimg }}popular_names.png" alt="Most popular names given to US babies since 1950" width = "500">
</center> 

Slighly [more male births are born each year][10] and certainly more male babies have been registered with the SSA (53% male vs 47% female); nonetheless, I was still surprised to see such a large proportion of male names in my quick popularity chart. Digging into the data further, I found that even though fewer females appear in the data, there have been consistently more unique female names each year.  

<center>
<img src="{{ site.urlimg }}unique_names.png" alt="Number of unique names for male and female babies since 1950" width = "700">
</center> 
<br>

Statistical dispersion appears to play a significant role in these data.  To put it back in financial terms, some male names like the ones on my top 20 list are just extremely "wealthy." (The most popular name, Michael, accounts for over 3% of all male children born since 1950.)   These ultra-popular masculine names likely pass down from generation to generation.  Females babies, on the other hand, are distributed more widely across a variety of names, so more names share in the "wealth" of female children.  We can verify this theory by returning to the Gini coefficient.

Consider how female children disperse across each name.  Some names in the dataset account for only 5 babies[^2] since 1950, while "Jennifer" represents nearly 1.5 million individuals.  Tallying up all females born with each name since 1950 and sorting from least to most popular, we find the Gini coefficient to be 0.96 for female names, implying a huge disparity between the most popular and the most unique names.

[^2]: The Social Security Administration does not include names that are given to fewer than 5 babies per gender per state due to privacy reasons; therefore, five children for one given female name since 1950 signifies the absolute minimum allowed.  Male names exhibit a very similar Lorenz curve but with slightly more skew, registering a Gini coefficient of 0.97. 

<!--
<center>
<img src="{{ site.urlimg }}gini_females.png" alt="Gini coefficient for the popularity of female names " width = "700">
</center> 
<br>
-->

The difference between male and female Gini coefficients may appear insignificant, but consider an alternative viewpoint.  Instead of aggregating across time, calculate a yearly Gini coefficient for each gender.  Plotting both the female and male Gini coefficients for each year since 1950 demonstrates a clear and persistent pattern where the male coefficient presents consistently higher.[^3]  Thus male names experience more statistical dispersion than female monikers.   Also of note, the Gini values for both genders have ticked downward since the 1990s indicating a trending preference toward more diverse naming conventions. 

[^3]: The Gini values displayed in the yearly figure are less than the aggregate because popular name tend to stay popular year after year thus bolstering naming inequity and increasing the Gini coefficient.

<center>
<img src="{{ site.urlimg }}gini_names.png" alt="The male Gini coefficient tracks consistently higher throughout time" width = "700">
</center> 
<br>

In a final look at this dataset, let's examine popularity trends for individual names over time.  We can utilize Gini to study this topic by grouping the female data by name and calculating the Gini coefficient as it pertains to yearly frequencies; that is, for any given name, sort each year of the dataset by that name's least to most popular year in order to compute Gini.  Names with lower Gini coefficients demonstrate similar levels of popularity throughout the entire time span, while higher coefficients imply uneven popularity levels.  The figure below compares popularity trends for the names "Scarlett" and "Miriam."  Both names represent about 60,000 female babies in the dataset; however, the sharp increase in babies named "Scarlett" since the turn of the millennium generates a large Gini coefficient while "Miriam" sees a low Gini value since the name has consistently been given to approximately 1,000 babies each year since 1950. 

<center>
<img src="{{ site.urlimg }}scarlett_vs_miriam.png" alt="The popularity of female names Miriam and Scarlett over time with Gini coeffients" width = "900">
</center> 
<br>


## Case \#2: Healthcare Prices


Now consider [this 2017 healthcare pricing dataset][11] hosted by the Centers for Medicare and Medicaid Services, a federal agency of the United States.  These data, aggregated as procedural averages for individual hospitals, include the charges and eventual payments for over 500 separate inpatient procedures/diagnostic groups for Medicare patients.  To determine which, if any, procedures require better billing standardization, I applied Gini coefficient calculations.  The underlying basis for my analysis boils down to this: the higher the Gini coefficient, the greater the disparity in what different hospitals charge for a given procedure.  Procedures with large Gini values could necessitate regulation or transparent cost details.

The diagnosis related group (DRG) with the highest Gini coefficient in this dataset[^4] is labeled as, "Alcohol/Drug Abuse or Dependency w Rehabilitation Therapy."  This finding perhaps elicits little surprise given that rehabilitation therapies vary widely both in terms of treatment length and illness severity.  In fact, all diagnoses with the top Gini coefficients may vary in severity, such as coagulation disorders and psychoses.  Procedural charges that show the most uniformity among hospital charges, on the other hand, mostly describe one-time cardiac events such as value replacement, percutaneous surgeries, or observation for chest pain.

[^4]: Some diagnosis related groups (DRGs) in this dataset occur at as few as one hospital for the entire year.  I have filtered the dataset down to procedures that are documented by at least 50 hospitals to avoid high variance issues.

<center>
<table width="800">
  <caption>Gini coefficients among average hospital charges per diagnosis related group (DRG)</caption>
  <colgroup>
    <col span="1" style="width: 50%;">
    <col span="1" style="width: 50%;">
  </colgroup>
  <thead>
    <tr>
      <th><center>Highest Gini</center></th>
      <th><center>Lowest Gini</center></th>
    </tr>
  </thead>
  <tbody >
    <tr>
      <td>Alcohol/Drug Abuse or Dependence w Rehabilitation Therapy</td>
      <td>Aortic and Heart Assist Procedures except Pulsation Balloon w MCC</td>
    </tr>
    <tr>
      <td>Coagulation Disorders</td>
      <td>Angina Pectoris</td>
    </tr>
    <tr>
      <td>Alcohol/Drug Abuse or Dependence, Left AMA</td>
      <td>Cardiac Valve & Oth Maj Cardiothoracic Proc w/o Card Cath w/o CC/MCC</td>
    </tr>
    <tr>
      <td>Psychoses</td>
      <td>Heart Transplant or Implant of Heart Assist System w MCC</td>
    </tr>
    <tr>
      <td>Other Respiratory System Diagnoses w MCC</td>
      <td>Perc Cardiovasc Proc w/o Coronary Artery Stent w/o MCC</td>
    </tr>
   </tbody>
</table>
</center>

So what about billing regulation?  Do we need more safeguards in place to be sure hospitals are charging similar amounts for similar procedures?  Well, more cost transparency certainly doesn't hurt, especially for treatments that range in duration or intensity, but let's go back to the dataset.  In addition to the information about the amounts hospitals charge, the dataset also lists [the total payments that the hospitals actually received][12].  Applying the same type of Gini analysis to the payments received yields much lower Gini values.  In fact, the Gini coefficient is lower for the average payments received than the hospital charges, for *every single procedure*.  This curious insight signals that the contracts in for Medicare payments already do quite a lot to moderate and regularize procedural costs.[^5]

[^5]: The payments hospitals receive are strictly less than the amounts they charge, but decreasing a dataset's mean while holding its standard deviation fixed [actually _increases_ the Gini coefficient][15].  Here we observe just the opposite effect so statistical dispersion must be lessened for the payments received.

<center>
<img src="{{ site.urlimg }}gini_health.png" alt="Comparison of Gini coeffients for total payments vs hospital charges" width = "600">
</center> 


## Conclusion

The Gini coefficient continues to provide insight over 100 years after its inception.  As a good general-purpose measure of statistical dispersion, Gini can be used broadly to explore and understand data from nearly any discipline.  Currently, the most popular metric for understanding data spread is likely standard deviation; however, there are [several key differences][13] between standard deviation and the Gini coefficient.  Firstly, standard deviation retains the scale of your data -- you report the standard deviation of US incomes in dollars while you might give the standard deviation of temperatures in degrees Celcius. The Gini coefficient, however, has no measurement unit, so-called scale invariance. Secondly, standard deviation is unbounded in that it can may be any non-negative value, while Gini typically ranges between zero and one.  Gini's scale invariance and strict bounds makes comparing statistical dispersion between two dissimilar data sources much easier.  Finally, standard deviation and the Gini coefficient judge statistical dispersion through different lenses.  Gini reaches its maximum value for a nonnegative dataset if if contains one positive and zeros for all remaining values.  Standard deviation reaches its maximum if half the data live at the extreme maximum and the other half register at the extreme minimum.

[Certain limitations][14] apply to the Gini coefficient despite its many benefits.  Like other summary statistics, Gini condense information thereby losing granularity from the original dataset.  Various different distributions map to the same Gini coefficient, which makes it many-to-one.  The Gini coefficient is also be quite sensitive to outliers in that a singular extreme datapoint (large or small) can increase Gini dramatically.  On the other hand, economists have also criticized the Gini coefficient for being [undersensitive to wealth changes in upper and lower echelons][3].  Researchers have go on to introduce several additional metrics to study different aspects of income inequality, such as the [Palma ratio][16], which explicitly captures financial fluctuations in the richest 10% and the poorest 40% of a population.

No matter which metric you choose to understand statistical dispersion, building data intuition certainly goes beyond simple estimates of the mean or median.  The Gini coefficient, long since popular in the field of economics, provides excellent insight about the spread of data regardless of your chosen subject area. As demonstrated in this post, Gini could be tracked over time, calculated for specific segments of your data, or used to detect processes requiring better price standardization.  Its applications are limitless, and it might just be the missing piece of your EDA toolkit.


[Check out this code on GitHub!](https://github.com/kimfetti/Blog/blob/master/gini_coefficient.ipynb) 

 [1]: https://en.wikipedia.org/wiki/Statistical_dispersion
 [2]: https://en.wikipedia.org/wiki/Gini_coefficient
 [3]: https://www.bbc.com/news/blogs-magazine-monitor-31847943
 [4]: https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.quad.html
 [5]: https://en.wikipedia.org/wiki/Gini_coefficient#Definition
 [6]: https://en.wikipedia.org/wiki/Mean_absolute_difference#Relative_mean_absolute_difference
 [7]: https://www.statsdirect.com/help/default.htm#nonparametric_methods/gini.htm
 [8]: https://github.com/oliviaguest/gini/blob/master/gini.py
 [9]: https://www.ssa.gov/oact/babynames/limits.html
 [10]: https://www.npr.org/sections/health-shots/2015/03/30/396384911/why-are-more-baby-boys-born-than-girls
 [11]: https://www.cms.gov/Research-Statistics-Data-and-Systems/Statistics-Trends-and-Reports/Medicare-Provider-Charge-Data/Inpatient2017
 [12]: https://www.cms.gov/Research-Statistics-Data-and-Systems/Statistics-Trends-and-Reports/Medicare-Provider-Charge-Data/Downloads/Inpatient_Outpatient_FAQ.pdf
 [13]: https://stats.stackexchange.com/questions/210829/difference-is-summary-statistics-gini-coefficient-and-standard-deviation/211595
 [14]: https://www.scientificamerican.com/article/ask-gini/
 [15]: https://repository.upenn.edu/gse_grad_pubs/6/
 [16]: https://en.wikipedia.org/wiki/Income_inequality_metrics#Palma_ratio
 
 
