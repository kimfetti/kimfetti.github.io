---
layout: page-fullwidth
title: "5 Important Object Detection Challenges and their Solutions"
subheadline: "Algorithms"
meta_teaser: "Object detection is super hard, but humans are smart!"
teaser: "<em>Object detection is super hard, but don't worry... humans are smart!</em>"

header:
    image: kim_tree.jpg
    background-color: "#999999"
    caption: "Personal photo.  Author at Haleakalā National Park."
    caption_url: https://www.nasa.gov/index.html
image:
    thumb: kim_tree_thumb.jpg
    homepage: kim_tree.jpg
    caption: "Personal photo"
    caption_url: 
categories:
    - algorithms
    - lit_review
show_meta: true
comments: true
---
<!--more-->


Content for "abstract" including
- Object detection has made a lot of gains
- But it wasn't easy!
- Much harder than object classification in many ways
    - Multiple objects in one image
    - Localization
    - Spatial component should be preserved


## Introduction
- What is object detection?  Leads to video tracking
- Applications
- History
    - Manual feature collection
    - Major gains once CNN applied to problem
    - Image depicting methods on a timeline (+ challenges overcome by each that can be referenced later)

## Challenges

### 1. Dual priorities: Object localization and classification
- Regions of interest (independent of class, pipeline solution)
- Multi-task loss function
- Multiple objects in one image
- New metrics: IOU


### 2. Objects have multiple spatial scales and aspect ratios
- Warping of ROI before being fed into CNN (R-CNN)
- SPP layer
- Anchors


### 3. Spatial position IS relevant 
- Image classification does not do this
- Fully connected layers (slow)
- ?? (I forgot this solution... )


### 4. Speed
- Heading toward RT detection in videos -- need to process images very quickly
- Fast R-CNN (process image through CNN first)
- Faster R-CNN (separate RPN)
- YOLO (multi-task optimization, all in one go, no alternate optimization like Faster R-CNN)
- SSD?
- Truncated SVD
- Trade speed and accuracy

### 5. Pose, lighting, occlusions
- More information needed here.  Include these or not?

## Conclusion
- Much harder than image classification tasks
- Future challenges like adding LSTM, time component to video processing.  Currently one frame at a time
- Marry speed and accuracy
- Check out review's future stuff again


[Check out this code on GitHub!](https://github.com/kimfetti/Blog/blob/master/planetary_birthday_problem.ipynb)  ||  [Check out this viz on Tableau!](https://public.tableau.com/profile/kimberly.fessel#!/vizhome/PlanetaryBirthdayProblem/Planets-50)

 [1]: https://www.amazon.com/Challenging-Problems-Probability-Solutions-Mathematics-ebook/dp/B00A3M0VV8
 [2]: https://www.npr.org/templates/story/story.php?storyId=4542341