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


Since its 2005 inception, YouTube has entertained, educated, and inspired more than [one billion people](https://biographon.com/youtube-stats/).  Its users now upload 300 hours of video content every minute, and YouTube ranks globally as the [2nd most visited website](https://www.alexa.com/siteinfo/youtube.com).  YouTube clearly dominates as the world's premier source of [cute baby moments](https://www.youtube.com/watch?v=_OBlgSz8sSM), [epic sports fails](https://www.youtube.com/watch?v=vq8G81oOHhY), and [hilarious cat videos](https://www.youtube.com/watch?v=AS7_6Uv_Bn0), but its vast troves of content can also be leverage to strengthen a wide variety of data science projects.  In this post, I share how you can access three types of YouTube data: the videos themselves for use in computer vision tasks, the video transcripts for natural language processing (NLP), and search results for hybrid machine learning approaches.
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

For a recent object detection project, I wanted to test out detection on both still images and short video clips.  So the first data you may want to extract from YouTube are the videos themselves.  You can easily download videos from YouTube using a Python-based tool called `youtube-dl` that runs from your command line. After following the [installation instructions](https://ytdl-org.github.io/youtube-dl/download.html), downloading a single video is as simple as typing
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
    
    
## Transcripts
YouTube also provides another fantastic data source that sometimes goes overlooked.  Many videos come with manual or automated transcriptions, sometimes with multiple languages available, to provide video subtitles.  You can obtain these transcripts quite easily and then use them for many interesting natural language processing projects.

The `youtube-transcipt-api` tool provides an incredibly easy way to obtain YouTube transcripts.  This Python code can either be used through your command line or as a package imported in Python.  After following the [download instructions](https://pypi.org/project/youtube-transcript-api/), you can download video transcripts from your command line by running:
```bash
youtube_transcript_api [first video ID] [second video ID] ...
```
Note that for this tool you should submit the video IDs as opposed to the entire URLs.  (For example, our "Welcome to Metis" video lives at `https://www.youtube.com/watch?v=9UuFTwUxkLw`.  To download the transcript for this video, run `youtube_transcript_api 9UuFTwUxkLw` in your command line.)

The resulting data for this query will be structured like:
```python
{video ID string: [  
                     {
                         'text': 'hi there',
                         'start': 2.32,
                         'duration': 3.11
                     },
                     {
                         'text': 'what is your name',
                         'start': 7.53,
                         'duration': 7.08
                     }, ...
                  ], 
 ...
 }
```
so you will be able to analyze what was said in the video, when it was said, and how long it was said for.  If you prefer to analyze the only the text, you could write a simple Python script [like this one]() to concatenate the full text.

Just like `youtube-dl`, you can pass additional options to this tool to specify things like your download languages and if you'd like your return format to be json.  Check out [the documentation](https://pypi.org/project/youtube-transcript-api/) to explore your options!

As a final note, this tool is built in conjunction with the YouTube API.  Since this API is subject to [daily rate quotas](https://developers.google.com/youtube/v3/getting-started#quota), you will likely be limited to only a certain number of video transcript downloads per day.  <em>(this ensures that no one person overwhelms the system)</em>


<!--
- navigate to a link previously found (click or direct Selenium to this url) -- no selenium!
- ... how to do this?
-schweettt... use youtube_transcript_api tool as CLI or python import library
-need to know more about the YT api (calls per hour limit?)  if this gets turned off, go back to selenium.
-->

## Search Results
Another potential YouTube data source which may be of use to you are the search results for a particular query term.  For example, what videos show up if you ask YouTube for "data science projects" and who produces such videos?  You can use the []YouTube Data API to search](https://developers.google.com/youtube/v3/docs/search) for videos that match your specific query parameters for free.  If you'd prefer not to use the API, however, another option is to use Selenium to scrape `youtube.com` directly.

Selenium is a powerful Python package used to automate your browser.  Originally designed for testing web pages, Selenium is now highly popular among the data science community for scraping dynamically generated web pages.  To operate Selenium, you will need to install both [the Selenium library](https://pypi.org/project/selenium/#installing) as well as a driver for your specific web browser, such as [this one](https://sites.google.com/a/chromium.org/chromedriver/downloads) for Chrome.  After installation you can now launch Selenium ChromeDriver from a Python program or a Jupyter Notebook by running code like:
```python
from selenium import webdriver
driver = webdriver.Chrome([PATH TO YOUR CHROMEDRIVER])
driver.get([URL])
```
Selenium will launch a browser to the URL your have requested and you can access the page's HTMl by simply requesting
```bash
driver.page_source
```
This HTML can then be further processed with BeautifulSoup for faster parsing.  So in the case of YouTube search results, your URL maybe `https://www.youtube.com/results?search_query=data+science+projects` and you should be able to parse through to find the names of the top 20 or so videos along with their links, authors, views, etc. 

Of course there are more than twenty videos on YouTube about data science projects, but because YouTube only loads more videos as you scroll down the page, you will at first see a truncated list.  You can also use Selenium to perform automated actions with your browser.  For example, to scroll down the page on YouTube just run the following code:
```python
driver.execute_script(
        "window.scrollTo(0, document.documentElement.scrollHeight);" 
    )
```
Once you have scrolled down the page, more videos will pop into frame and you will find more titles in the page source.  

Selenium can also be used to click on buttons, type into input boxes, and even drag and drop elements.  For more information, see the helpful documentation [here](https://selenium-python.readthedocs.io/).

<em> Data of this type could be used in a hybrid regression-NLP project: what should you mention in the title to the most likes? or in an EDA problem...</em>

<!--
- Selenium
    -brief intro to Selenium: links to download + driver
- include some code snippets on how to launch selenium to navigate to youtube
- how to scroll with Selenium + YT scroll bug with link
- how to grab video title, authors, links
- mention results may vary depending on browser + version
-->


## Conclusion

YouTube's vast content library provides not only perpetual entertainment for the masses but also copious amounts of data for data scientists. The open-source tools `youtube-dl` and `youtube-transcript-api` greatly simplify the acquision of videos and video transcripts, respectively.  These programs may be run from the command line if you only need a few videos, or they may be imported as libraries into Python scripts for larger scale data automation. You can obtain YouTube search restuls by directly querying the YouTube API, or you can scrape the site via Selenium to achieve enhanced (?) search results.  Whether your project requires object detection, topic modeling, or regression for video popularity, YouTube might provide just the data you need, and hopefully, armed with the tips from this post, your data acquision phase will proceed exceptionally smoothly.

<!--
- YT provides wealth of public information in a variety of formats for a variety of potential data science projects
- be sure not to overwhelm the servers and not get blocked (?) <<<
- whether looking for video content for computer vision projects or text data for NLP, ...
-->
