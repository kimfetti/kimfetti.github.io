---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
header:
  image_fullwidth: header5.png
widget1:
  title: "Simple Ways to Improve Your Matplotlib"
  url: '/visualizations/matplotlib-improvements/'
  image: lego_thumb.jpg
  text: "This post offers several simple ways to improve upon these defaults and help spruce up basic Matplotlib visualizations."
widget2:
  title: "5 Significant Object Detection Challenges and Solutions"
  url: '/algorithms/literature%20reviews/object-detection-challenges/'
  image: kim_tree_thumb.png
  text: 'Object detection problems pose several unique obstacles beyond what is required for image classification.  Five such challenges are reviewed in this post along with researchers' efforts to overcome these complications.'
widget3:
    title: 'Past and Upcoming Events'
    url: '/events'
    image: calendar-thumb.jpg
    text: "Check out Kimberly's past and upcoming events along with links to conference materials and meeting recaps."

# widget2:
#  title: 'One Day at Bootcamp'
#  url: 'https://www.meetup.com/Metis-New-York-Data-Science/events/257900190/'
#  image: birthday_planet_thumb.jpg
#  text: 'Kimberly will be instructing Metis NYC's “One Day at Bootcamp” on January 26th to give participants a chance to see what the experience is really like!  Attendees will receive free, interactive training in Python, focusing on Pandas and SciKit Learn.'
# widget3:
#  title: "Download Theme"
#  url: 'https://github.com/Phlow/feeling-responsive'
#  image: widget-github-303x182.jpg
#  text: '<em>Feeling Responsive</em> is free and licensed under a MIT License. Make it your own and start building. Grab the <a href="https://github.com/Phlow/feeling-responsive/tree/bare-bones-version">Bare-Bones-Version</a> for a fresh start or learn how to use it with the <a href="https://github.com/Phlow/feeling-responsive/tree/gh-pages">education-version</a> with sample posts and images. Then tell me via Twitter <a href="http://twitter.com/phlow">@phlow</a>.'

# Use the call for action to show a button on the frontpage
#
# To make internal links, just use a permalink like this
# url: /getting-started/
#
# To style the button in different colors, use no value
# to use the main color or success, alert or secondary.
# To change colors see sass/_01_settings_colors.scss
#
#
# callforaction:
#  url: https://tinyletter.com/feeling-responsive
#  text: Inform me about new updates and features ›
#  style: alert
permalink: /index.html
#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: true
---


<div id="videoModal" class="reveal-modal large" data-reveal="">
   <div class="flex-video widescreen vimeo" style="display: block;">
     <iframe width="1280" height="720" src="https://www.youtube.com/embed/3b5zCFSmVvU" frameborder="0" allowfullscreen></iframe>
   </div>
  <a class="close-reveal-modal">&#215;</a>
</div>
