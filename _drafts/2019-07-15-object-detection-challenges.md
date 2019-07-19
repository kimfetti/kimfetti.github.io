---
layout: page-fullwidth
title: "5 Important Object Detection Challenges and Solutions"
subheadline: "Reviews"
meta_teaser: "Object detection is super hard, but don't worry... humans are smart!"
teaser: "<em>Object detection problems provide several unique challenges beyond image classification.  Five such challenges are reviewed in this post along with researchers' efforts to overcome these complications.</em>"

header:
    image: kim_tree_header.png
    background-color: "#999999"
    caption: "Personal photo.  Author at Haleakalā National Park."
    caption_url: https://www.nasa.gov/index.html
image:
    thumb: kim_tree_thumb.png
    homepage: kim_tree_header.png
    caption: "Personal photo"
    caption_url: 
categories:
    - algorithms
    - literature reviews
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

### 1. Dual priorities: object localization and classification

The first major complication of object detection is its added goal: not only do we want to classify an image's objects but also to determine the objects' positions, generally referred to as the _object localization_ task in literature.  Researchers often take one of two approaches to address this issue: 1) pipelines with region proposals or 2) one-shot regression methods with a multi-task loss function.

a. Pipeline methods with region proposals

b. One-shot regression with multi-task loss function

#### Metrics
Another interesting consequence of having multiple objectives is the need for special metrics to score object detection methods.  Two such metrics, IOU and mAP, are common among the object detection community and are typically reported when comparing techniques.

a. IOU 

IOU stands for intersection over union and is used to judge appropriate object localization.

b. mAP 

mAP, or mean average precision, on the other hand, assesses the classification task.

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

### 5. Data
- Lots of data for image classification (ImageNet), not so much for image detection (COCO)
- YOLO9000 attempt to leverage both for training

## Conclusion
- Much harder than image classification tasks
- Future challenges like adding LSTM, time component to video processing.  Currently one frame at a time
- Marry speed and accuracy AND extend object class space
- Also: pose, occlusions, lighting (same issues that image classification has but maybe even more so since also trying to localize object)
- Check out review's future stuff again


[Check out this code on GitHub!](https://github.com/kimfetti/Blog/blob/master/planetary_birthday_problem.ipynb)  ||  [Check out this viz on Tableau!](https://public.tableau.com/profile/kimberly.fessel#!/vizhome/PlanetaryBirthdayProblem/Planets-50)

 [1]: https://www.amazon.com/Challenging-Problems-Probability-Solutions-Mathematics-ebook/dp/B00A3M0VV8
 [2]: https://www.npr.org/templates/story/story.php?storyId=4542341