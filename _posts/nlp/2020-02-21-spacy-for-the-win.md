---
layout: page
title: "Level Up: spaCy NLP for the Win"
subheadline: "NLP"
meta_teaser: "spaCy provides an easy-to-use framework for getting started with NLP.  This post covers the basics of spaCy and highlights its functionality on a small corpus of restaurant reviews."
teaser: "<em>spaCy provides an easy-to-use framework for getting started with NLP.  This post covers the basics of spaCy and highlights its functionality on a small corpus of restaurant reviews..</em>"

header:
    background-color: "#999999"
    image: logo.png
image:
    thumb: letters-thumb.png
    homepage: letters-header.jpg
    title: letters-header.jpg
    caption: "Photo by Amador Loureiro on Upsplash."
    caption_url: "https://unsplash.com/photos/BVyNlchWqzs"
categories:
    - nlp
show_meta: true
comments: true
---
<!--more-->


Natural language processing (NLP) is a branch of artificial intelligence in which computers extract information from written or spoken human language.  This field has experienced a massive rise in popularity over the years, not only among academic communities but also in industry settings. Because unstructured text makes up so much of the data we collect today (e.g. emails, text messages, and even this blog post), many practitioners regularly use NLP at the workplace and require straightforward tools to reliably parse through substantial amounts of documents.  The open-source library spaCy meets these exact demands by processing text quickly and accurately, all within a simplified framework.

[Released in 2015][1], spaCy was initially created to help small businesses better leverage NLP.  Its practical design offers users a streamlined approach for accomplishing necessary NLP tasks, and it assumes a more pragmatic stance toward NLP than traditional libraries like NLTK, which were developed with a more research-focused, exploratory intention.  spaCy can be quite flexible, however, as it allows more experienced users the option of customizing just about any of its tools.  spaCy is considered a Python package, but the “Cy” in spaCy indicates that Cython powers many of the underlining computations.  This makes spaCy incredibly fast, even for more complicated processes.  I will illustrate a selection of spaCy’s core functionality in this post and will end by implementing these techniques on sample restaurant reviews.

Please continue to the [ODSC blog][2] to read my full post covering this introduction to spaCy.


[1]: https://explosion.ai/blog/introducing-spacy
[2]: https://opendatascience.com/level-up-spacy-nlp-for-the-win/