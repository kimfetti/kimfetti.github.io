---
layout: page-fullwidth
title: "How to Gather Data from YouTube"
subheadline: "Data"
meta_teaser: "teaser"
teaser: "<em>teaser statement</em>"

header:
    background-color: "#999999"
    image: logo.png
image:
    thumb: youtube.png
    homepage: youtube.png
    title: youtube.png
    caption: "Photos by Arnold Chao and Brick 101. Cropped and modified by author"
    caption_url: "https://flickr.com/photos/arnisto/1715332001/in/photolist-3BzwrF-R6inUo-aqc1Ri-8oHoz1-hcQm7X-dWBzVY-29LWgMB-gdTXM-9hhvio-zr4aM-zr357-r8nhEr-4jeF2Y-8gyi5q-zhqjfS-oXuvM-7zWdYW-EntY3-7dV87f-9gcEjm-4waMSd-dPcqJ1-9tWqkt-73mRjD-6vHHN-9ND6qW-4Ls1n-7rVXe8-8cueSK-8HgEn-9bS1Yk-4VdL9E-69GvS-5pP95S-pAMhgX-6Q79yV-6bPYWj-oXuSG-6eYDxe-9g9FGZ-5KgjW1-4cxBq1-7dnJEz-9gcEy1-dYNpgq-5sRBUe-dYwVBt-5cWCxY-c57o9b-o7ha9s"
categories:
    - data
show_meta: true
comments: true
---

- Youtube contains a wealth of data
- stats about the number of searches, videos on youtube (large numbers to visualize?)
- how youtube search compares to google search 
    - querying youtube might help someone determine what kind of information is available on a given topic
- how I have used youtube to gather data in the past
    - videos for object detection
    - lessons on selenium
    - text for NLP projects
    
    
## Videos
- youtube-dl
- simple as youtube-dl url
- live and full videos
- choose your download quality and/or speed
- files are returned as .mp4 
- collect meta data?
- link to docs for full options
    - full playlist, thumbnail images, etc.
    - public files or send authentication credentials via tool
    
    
## Search Results
- Selenium
    -brief intro to Selenium: links to download + driver
- include some code snippets on how to launch selenium to navigate to youtube
- how to scroll with Selenium + YT scroll bug with link
- how to grab video title, authors, links
- mention results may vary depending on browser + version


## Transcripts
- navigate to a link previously found (click or direct Selenium to this url)
- ... how to do this?


## Conclusion
- YT provides wealth of public information in a variety of formats for a variety of potential data science projects
- be sure not to overwhelm the servers and not get blocked (?)
- whether looking for video content for computer vision projects or text data for NLP, ...

