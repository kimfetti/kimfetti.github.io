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
  title: "Measuring Statistical Dispersion with the Gini Coefficient"
  url: '/mathematics/applications/gini-use-cases/'
  image: gini_thumb.png
  text: "The Gini coefficient is a good general-purpose measure of statistical dispersion.  This post includes a thorough mathematical explanation of the Gini coefficient as well as a few non-standard use cases."
widget2:
  title: "How to Gather Data from YouTube"
  url: '/data/web%20scraping/gather-youtube-data/'
  image: youtube-thumb.png
  text: "You can mine YouTube's massive content library for many different types of data.  This post provides instructions for obtaining the videos themselves, the video transcripts, as well as YouTube search results." 
widget3:
    title: 'Past and Upcoming Events'
    url: '/events'
    image: calendar-thumb.jpg
    text: "Check out Kimberly's past and upcoming events along with links to conference materials and meeting recaps."


# widget2:
#   title: "How to Gather Data from YouTube"
#   url: 'http://kimberlyfessel.com/data/web%20scraping/gather-youtube-data/'
#   image: youtube-thumb.png
#   text: "You can mine YouTube's massive content library for many different types of data.  This post provides instructions for obtaining the videos themselves, the video transcripts, as well as YouTube search results."

## A simple visual--like the ones illustrated in this post--could be all you need to find a solution to your next interview math puzzle."


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
