---
layout: page-fullwidth
title: "How to Gather Data from YouTube"
subheadline: "Data"
meta_teaser: "You can mine YouTube's massive content library for many different types of data.  This post provides instructions for obtaining the videos themselves, the video transcripts, as well as YouTube search results."
teaser: "<em>You can mine YouTube's massive content library for many different types of data.  This post provides instructions for obtaining the videos themselves, the video transcripts, as well as YouTube search results.</em>"

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


Since its 2005 inception, YouTube has entertained, educated, and inspired more than [one billion people](https://biographon.com/youtube-stats/).  It now ranks as the [2nd most visited website](https://www.alexa.com/siteinfo/youtube.com) on the planet, and its users currently upload 300 hours of video content every minute.  YouTube clearly dominates as the world's premier source of [cute baby moments](https://www.youtube.com/watch?v=_OBlgSz8sSM), [epic sports fails](https://www.youtube.com/watch?v=vq8G81oOHhY), and [hilarious cat videos](https://www.youtube.com/watch?v=AS7_6Uv_Bn0), but its vast troves of content can also be leverage to strengthen a wide variety of data science projects.  In this post, I share how you can gain access to three types of YouTube data: the videos themselves for use in computer vision tasks, the video transcripts for natural language processing (NLP), and video search results for hybrid machine learning approaches.
<center>
<img src="{{ site.urlimg }}youtube_figures.png" alt="YouTube sees over 30 million users each day" width = "600">
</center>


<!--
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
-->    
    
## Videos

For a recent [object detection](https://www.thisismetis.com/blog/a-beginners-guide-to-object-detection) project, I wanted to test out detection on still images as well as short videos.  I processed a few of my own clips, but I also turned to YouTube for additional test videos.  So the first data you may want to extract from YouTube are the videos themselves.  

I found an easy-to-use, Python-based tool for retrieving YouTube videos called `youtube-dl`.  After following these [quick installation instructions](https://ytdl-org.github.io/youtube-dl/download.html), downloading a single video is as simple as typing:
```bash
youtube-dl [video URL]
```
into your command line and pressing enter.  Here, `[video URL]` should be filled in with the link of your desired video.  This movie will then be transferred from YouTube to your computer and saved in your current working directory.

YouTube typically offers its videos in a few different formats and at various levels of quality.  You can check all possible formats by running:
```bash
youtube-dl -F [video URL]
``` 
A list of all available video formats will appear, each labeled with a format code.  If you'd like to specify a particular download format, just include this format code with your query:
```bash
youtube-dl -f [format code] [video URL]
```

Besides single videos, `youtube-dl` also allows you to download multiple videos at a time, entire playlists, or clips from live streams.  You can also collect metadata about your videos by including the `--write-info-json` flag.  `youtube-dl`'s functionality even extends to capture video content from [several other platforms](https://ytdl-org.github.io/youtube-dl/supportedsites.html), and if needed, you can pass account credentials along with your requests. For projects requiring larger scale data collection, you may bypass the command-line interface (CLI) and build calls to `youtube-dl` directly into your [Python pipeline](https://github.com/ytdl-org/youtube-dl#embedding-youtube-dl).  Check out [the documentation](https://github.com/ytdl-org/youtube-dl/blob/master/README.md#readme) for a full list of additional options for even more flexibility.



<!--
- also mention this tool is avaiable for Unix, Windows, or Mac. 
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
    
    
## Transcripts
YouTube provides another fantastic data stream that often gets overlooked.  Many YouTube videos may be viewed with either manually or automatically generated subtitles, at times with multiple language options.  You can retrieve these subtitles as full transcripts and then analyze them with natural language processing techniques.

The `youtube-transcript-api` tool provides an incredibly easy way to obtain YouTube transcripts.  This Python API can either be used through your command line or imported as a module into Python scripts.  After following the [download instructions](https://pypi.org/project/youtube-transcript-api/), download video transcripts from your command line by running:
```bash
youtube_transcript_api [first video ID] [second video ID] ...
```
where underscores separate each word in the tool's name.  

Notice that instead of passing the full video URL, only the ID is provided.  For example, the informational video for Metis's Beginner Python and Math for Data Science course lives at `https://www.youtube.com/watch?v=5-yxXzLX2QY`.  To download the transcript for this clip, submit `youtube_transcript_api 5-yxXzLX2QY` through your command line.  Data from this query returns with the following structure:
```python
{'5-yxXzLX2QY': [
                    {'duration': 4.06,
                     'start': 1.25,
                     'text': "I'm excited to talk to you about the"},
                    {'duration': 3.99,
                     'start': 3.72,
                     'text': 'beginner Python and math for data'},
                    ...
                ],
 ...
 }
```
These details allow for analysis of __what__ was said in the video, __when__ it was said, and __how long__ it was said.  If you'd prefer to only examine the text, process the result through a simple Python script [like this one](https://github.com/kimfetti/Blog/blob/master/get_text_transcripts.py) for concatenation.

This tool also accepts additional options to specify desired languages and data formats.  Check [the documentation](https://pypi.org/project/youtube-transcript-api/) to explore further.  As a final note, `youtube-transcript-api` operates by making requests to the YouTube API, which limits each user with [daily rate quotas](https://developers.google.com/youtube/v3/getting-started#quota) so that users cannot overwhelm the system.  This means that when using this tool you will likely be capped at only a certain number of transcript downloads per day.


<!--
- navigate to a link previously found (click or direct Selenium to this url) -- no selenium!
- ... how to do this?
-schweettt... use youtube_transcript_api tool as CLI or python import library
-need to know more about the YT api (calls per hour limit?)  if this gets turned off, go back to selenium.
-->

## Search Results
Besides videos and transcripts, the search results for relevant YouTube queries may provide useful information for some projects.  You might wish to analyze a mixture of data like the titles, authors, and views for videos pertaining to a specific topic, for example.  To gather this type of data, you can directly query the [YouTube Data API](https://developers.google.com/youtube/v3/docs/search) to look for videos matching your specific query parameters for free.  If for some reason you'd prefer not to use the API, however, you may alternatively use Selenium to scrape `youtube.com`.

Selenium is a powerful framework used to automate your browser.  Originally designed for testing web applications, Selenium now boasts high popularity in the data science community because it can be leveraged to scrape dynamically generated web content.  Selenium offers cross-platform functionality, but to operate Selenium within Python, you will need to install both [the Selenium library](https://pypi.org/project/selenium/#installing) and a webdriver for your specific browser, such as [this one](https://sites.google.com/a/chromium.org/chromedriver/downloads) for Chrome.  Now launching Selenium ChromeDriver via Python or Jupyter Notebook, for example, boils down to executing code like:
```python
from selenium import webdriver
driver = webdriver.Chrome([PATH TO YOUR CHROMEDRIVER])
driver.get([URL])
```
Selenium will then automatically open a browser window pointed toward your specified URL.  Any dynamic content will populate, and you can access the page's filled-in HTMl by simply examining:
```bash
driver.page_source
```
The returned HTML may then be parsed with a library such as [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) to retrieve information of interest.  

Programs using Selenium are also capable of interacting with your browser.  You can thus write code instructing Selenium to automatically click, type, take screenshots, etc. For more information, see this [helpful documentation](https://selenium-python.readthedocs.io/).

YouTube, along with many other sites, returns video search results in an infinite scroll, a form of lazy loading.  This means only approximately 20 videos will be loaded into your browser when you perform a search query, and resultantly, the initial page source you retrieve from YouTube will only contain about 20 videos.  You must scroll down further on the page to populate additional results.  Fortunately, the Selenium Webdriver can be programmed to scroll down the page for you by executing code like:
```python
driver.execute_script(
        "window.scrollTo(0, document.documentElement.scrollHeight);" 
    )
```
Once Selenium scrolls further down the page, additional videos will come into view, and you will find more titles in the page source by once again running `driver.page_source`.


<!--
- Selenium
    -brief intro to Selenium: links to download + driver
- include some code snippets on how to launch selenium to navigate to youtube
- how to scroll with Selenium + YT scroll bug with link
- how to grab video title, authors, links
- mention results may vary depending on browser + version
-->


## Conclusion

YouTube's vast content library provides not only perpetual entertainment for the masses but also copious amounts of data for data scientists. The open-source tools `youtube-dl` and `youtube-transcript-api` greatly simplify the retrieval of YouTube videos and transcripts.  These programs may be run from the command line if you only need a few videos, or you can import them as libraries in Python for large-scale tasks. You can obtain YouTube search results by directly querying the YouTube API, or you can scrape the site via Selenium for similar information.  

Whether your project requires object detection, topic modeling, or regression to predict video popularity, YouTube might provide just the data you need.  Hopefully, armed with the tips from this post, your data acquisition phase will proceed swiftly and smoothly.

<!--
- YT provides wealth of public information in a variety of formats for a variety of potential data science projects
- be sure not to overwhelm the servers and not get blocked (?) <<<
- whether looking for video content for computer vision projects or text data for NLP, ...
-->
