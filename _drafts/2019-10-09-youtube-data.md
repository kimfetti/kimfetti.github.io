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
    thumb: youtube-thumb.png
    homepage: youtube.png
    title: youtube.png
    caption: "Photos by Arnold Chao and Brick 101. Cropped and modified by author."
    caption_url: "https://flickr.com/photos/arnisto/1715332001/in/photolist-3BzwrF-R6inUo-aqc1Ri-8oHoz1-hcQm7X-dWBzVY-29LWgMB-gdTXM-9hhvio-zr4aM-zr357-r8nhEr-4jeF2Y-8gyi5q-zhqjfS-oXuvM-7zWdYW-EntY3-7dV87f-9gcEjm-4waMSd-dPcqJ1-9tWqkt-73mRjD-6vHHN-9ND6qW-4Ls1n-7rVXe8-8cueSK-8HgEn-9bS1Yk-4VdL9E-69GvS-5pP95S-pAMhgX-6Q79yV-6bPYWj-oXuSG-6eYDxe-9g9FGZ-5KgjW1-4cxBq1-7dnJEz-9gcEy1-dYNpgq-5sRBUe-dYwVBt-5cWCxY-c57o9b-o7ha9s"
categories:
    - data
show_meta: true
comments: true
---

- Youtube contains a wealth of data
- stats about the number of searches, videos on youtube (large numbers to visualize?)
<center>
<img src="{{ site.urlimg }}youtube_figures.png" alt="YouTube sees over 30 million users each" width = "600">
</center>

- how youtube search compares to google search 
    - querying youtube might help someone determine what kind of information is available on a given topic

- how I have used youtube to gather data in the past
    - videos for object detection
    - lessons on selenium
    - text for NLP projects
    
    
## Videos

For a recent object detection, I wanted to test out detection on both still images as well as processed videos.  So the first data you may want to extract from YouTube are the videos themselves.  You can easily download videos from YouTube using a Python-based tool called `youtube-dl` that runs from your command line. After following the [installation instructions](https://ytdl-org.github.io/youtube-dl/download.html), downloading a single video is as simple as typing
```bash
youtube-dl [video URL]
```
into your command line and pressing enter, where `[video URL]` should be filled in with the link of your desired video.  This video will then be downloaded from YouTube and saved in your current working directory.

Videos on YouTube are typically available in a few different formats and at various quality levels.  You can check all possible formats for a video by including the -F flag:
```bash
youtube-dl -F [video URL]
``` 
This will return a list of possible video formats that are available labeled with a format code.  Then to specify a particular download format, just include the format code in your command:
```bash
youtube-dl -f [format code] [video URL]
```

Besides single videos, `youtube-dl` can be used to download multiple videos at a time, entire playlists, or clips from live streams.  You can also collect metadata about your video by including the `--write-info-json` flag.  `youtube-dl` can even be use to download video content from [several other platforms](https://ytdl-org.github.io/youtube-dl/supportedsites.html) like twitch, NPR, or vimeo.  Account credentials can also be passed in with the tool for sites that require passwords. Check out [the documentation](https://github.com/ytdl-org/youtube-dl/blob/master/README.md#readme) for a full list of additional options for added flexibility.

<em> also mention this tool is avaiable for Unix, Windows, or Mac. And you can use it [built in to your Python code too](https://github.com/ytdl-org/youtube-dl#embedding-youtube-dl)! </em>

<!--
- youtube-dl
- simple as youtube-dl url
- live and full videos
- choose your download quality and/or speed
- files are returned as .mp4 
- collect meta data?
- link to docs for full options
    - full playlist, thumbnail images, etc.
    - public files or send authentication credentials via tool
-->
    
    
## Search Results
- Selenium
    -brief intro to Selenium: links to download + driver
- include some code snippets on how to launch selenium to navigate to youtube
- how to scroll with Selenium + YT scroll bug with link
- how to grab video title, authors, links
- mention results may vary depending on browser + version


## Transcripts
- navigate to a link previously found (click or direct Selenium to this url) -- no selenium!
- ... how to do this?
-schweettt... use youtube_transcript_api tool as CLI or python import library
-need to know more about the YT api (calls per hour limit?)  if this gets turned off, go back to selenium.


## Conclusion
- YT provides wealth of public information in a variety of formats for a variety of potential data science projects
- be sure not to overwhelm the servers and not get blocked (?)
- whether looking for video content for computer vision projects or text data for NLP, ...

