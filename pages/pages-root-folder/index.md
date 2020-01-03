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
  title: "5 Significant Object Detection Challenges and Solutions"
  url: 'http://kimberlyfessel.com/algorithms/literature%20reviews/object-detection-challenges/'
  image: kim_tree_thumb.png
  text: "Object detection problems pose several unique obstacles beyond what is required for image classification.  Five such challenges are reviewed in this post along with researchers' efforts to overcome these complications."
widget2:
  title: "Solving the Birthday Problem on Mars"
  url: '/mathematics/visualizations/planetary-birthday-problem/'
  image: birthday_planet_thumb.jpg
  text: "The birthday problem is a classic probability question with a surprising result.  In this post, we will solve this puzzler and extend the result by considering the answer for every planet in our solar system."
widget3:
    title: 'Past and Upcoming Events'
    url: '/events'
    image: calendar-thumb.jpg
    text: "Check out Kimberly's past and upcoming events along with links to conference materials and meeting recaps."

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
