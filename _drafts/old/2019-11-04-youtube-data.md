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


Since its 2005 inception, YouTube has entertained, educated, and inspired more than [one billion people](https://biographon.com/youtube-stats/).  It now ranks as the [2nd most visited website](https://www.alexa.com/siteinfo/youtube.com) on the planet, and its users upload 300 hours of video content every minute.  YouTube clearly dominates as the world's premier source of [cute baby moments](https://www.youtube.com/watch?v=_OBlgSz8sSM), [epic sports fails](https://www.youtube.com/watch?v=vq8G81oOHhY), and [hilarious cat videos](https://www.youtube.com/watch?v=AS7_6Uv_Bn0), but its vast troves of content can also be leverage to strengthen a wide variety of data science projects.  In this post, I share how you can gain access to three types of YouTube data: the videos themselves for use in computer vision tasks, the video transcripts for natural language processing (NLP), and video search results for hybrid machine learning efforts.
<center>
<img src="{{ site.urlimg }}youtube_figures.png" alt="YouTube sees over 30 million users each day" width = "600">
</center>

    
## Videos

For a recent [object detection](https://www.thisismetis.com/blog/a-beginners-guide-to-object-detection) project, I wanted to test out detection on still images as well as short videos.  I processed a few of my own clips, but I also turned to YouTube for additional test videos.  That said, the first data you may want to extract from YouTube are the videos themselves.  

I discovered an easy-to-use, Python-based tool for retrieving YouTube videos called `youtube-dl`.  After following these [quick installation instructions](https://ytdl-org.github.io/youtube-dl/download.html), downloading a single video is as simple as typing:
```bash
youtube-dl [video URL]
```
into your command line and pressing enter.  Here, `[video URL]` should be filled in with the link of your desired video.  This movie will then be transferred from YouTube to your computer and saved in your current working directory.

YouTube typically offers its videos in a few different formats and at various levels of quality.  You can check all possible formats by running:
```bash
youtube-dl -F [video URL]
``` 
A list of all available video formats will appear, each labeled with a numerical format code.  If you'd like to specify a particular download format, just include this code with your query:
```bash
youtube-dl -f [format code] [video URL]
```

Besides single videos, `youtube-dl` also allows you to download multiple videos at a time, entire playlists, or clips from live streams.  You can also collect metadata about your videos by including the `--write-info-json` flag.  `youtube-dl`'s functionality now extends beyond YouTube to capture video content from [several other platforms](https://ytdl-org.github.io/youtube-dl/supportedsites.html), and you can directly pass account credentials along with your requests if needed. For projects requiring larger-scale data collection, you may bypass the command-line interface (CLI) and build calls to `youtube-dl` directly into your [Python pipeline](https://github.com/ytdl-org/youtube-dl#embedding-youtube-dl).  Check out [the documentation](https://github.com/ytdl-org/youtube-dl/blob/master/README.md#readme) for a full list of additional options for more flexibility.
    
    
## Transcripts
YouTube provides another fantastic data stream that often gets overlooked.  Many YouTube videos may be viewed with either manually or automatically generated subtitles, at times with multiple language options.  You can retrieve these subtitles as full transcripts and then analyze them with natural language processing techniques.

The `youtube-transcript-api` tool provides an incredibly straightforward way to obtain YouTube transcripts.  This Python API can either be used through your command line or imported as a module into scripts.  After following the [download instructions](https://pypi.org/project/youtube-transcript-api/), retrieve video transcripts from your command line by running:
```bash
youtube_transcript_api [first video ID] [second video ID] ...
```
where underscores now separate each word in the tool's name.  

Notice that instead of passing the full video URL, only the ID is provided.  For example, the informational video for Metis's Beginner Python and Math for Data Science course lives at `https://www.youtube.com/watch?v=5-yxXzLX2QY`.  To download a transcript for this clip, submit `youtube_transcript_api 5-yxXzLX2QY` through your command line.  Data from this query appears with the following structure:
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
The returned details allow for analysis of _what_ was said in the video, _when_ it was said, and _how long_ it was said.  If you'd prefer to only examine the text, you can process the result through a simple Python script [like this one](https://github.com/kimfetti/Blog/blob/master/get_text_transcripts.py) for concatenation.

`youtube-transcript-api` also accepts additional options to specify desired languages and data formats.  Check [the documentation](https://pypi.org/project/youtube-transcript-api/) to explore further.  As a final note, this tool operates by making requests to the YouTube API, which limits consumption with a [daily rate quota](https://developers.google.com/youtube/v3/getting-started#quota) to prevent users from overwhelming the system.  This means that you will likely be capped at only a certain number of transcript downloads per day when using this tool.


## Search Results
Besides videos and transcripts, the search results for relevant YouTube queries may provide useful information for some projects.  You might wish to analyze a mixture of data like the titles, authors, and views for videos pertaining to a specific topic.  You can directly query the [YouTube Data API](https://developers.google.com/youtube/v3/docs/search) to look for data matching your specific query parameters for free.  If for some reason you'd prefer not to use the API, however, you may alternatively scrape `youtube.com` with Selenium.

Selenium is a powerful framework used to automate browsers.  Originally designed for testing web applications, Selenium now boasts high popularity in the data science community because it can be leveraged to scrape dynamically generated web content.  Selenium offers cross-platform functionality, including support for Python.  You will need to install [the Selenium Python library](https://pypi.org/project/selenium/#installing) as well as a webdriver for your specific browser, such as [this one](https://sites.google.com/a/chromium.org/chromedriver/downloads) for Chrome.  Then, launching Selenium ChromeDriver in Python, for example, boils down to executing code like:
```python
from selenium import webdriver
driver = webdriver.Chrome([PATH TO YOUR CHROMEDRIVER])
driver.get([URL])
```
Selenium will respond by automatically opening a browser window pointed toward your specified URL.  Any dynamic content will populate, and you can access the page's filled-in HTML by simply examining:
```bash
driver.page_source
```
This HTML may then be parsed with a standard library such as [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) to retrieve information of interest.  

Selenium is also capable of automatically interacting with your browser.  You can write code to click, type, take screenshots, drag and drop, etc. Check out this [helpful documentation](https://selenium-python.readthedocs.io/) to learn more about Selenium's performance options.

YouTube, along with many other sites, returns video search results in an infinite scroll, a form of lazy loading.  This means only about 20 videos will be loaded into your browser when you perform a search query, and consequently, the initial page source you retrieve from YouTube will only contain information on 20 videos.  To populate additional results, you must scroll below your current window.  Fortunately, Selenium webdriver can be programmed to do this for you:
```python
driver.execute_script(
        "window.scrollTo(0, document.documentElement.scrollHeight);" 
    )
```
Once Selenium moves further down the page, additional videos will come into view, and you will find more titles by once again checking `driver.page_source`.



## Conclusion

YouTube's enormous content library provides not only perpetual entertainment for the masses but also copious amounts of data for data scientists. The open-source tools `youtube-dl` and `youtube-transcript-api` greatly simplify the retrieval of YouTube videos and transcripts.  These programs may be run from the command line if you only need a few videos, or you can import them as libraries in Python for large-scale tasks. You can also obtain YouTube search results by directly querying the YouTube Data API or by scraping the site via Selenium for similar information.  

Whether your project requires object detection, topic modeling, or regression to predict video popularity, YouTube might provide just the data you need.  Hopefully, following the tips in this post will help your data acquisition phase proceed swiftly and smoothly.

