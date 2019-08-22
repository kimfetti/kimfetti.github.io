---
layout: page-fullwidth
title: "5 Significant Object Detection Challenges and Solutions"
subheadline: "Reviews"
meta_teaser: "Object detection problems pose several unique obstacles beyond what is required for image classification.  Five such challenges are reviewed in this post along with researchers' efforts to overcome these complications."
teaser: "<em>Object detection problems pose several unique obstacles beyond what is required for image classification.  Five such challenges are reviewed in this post along with researchers' efforts to overcome these complications.</em>"

header:
    image: kim_tree_header.png
    background-color: "#999999"
    caption: "Personal photo processed with YOLOv2.  Author at Haleakalā National Park."
    caption_url:
image:
    thumb: kim_tree_thumb.png
    homepage: kim_tree_header.png
    caption: "Personal photo processed with YOLOv2.  Author at Haleakalā National Park."
    caption_url: 
categories:
    - algorithms
    - literature reviews
header-includes:
   - \usepackage{mathtools}
show_meta: true
comments: true
---
<!--more-->


The field of computer vision has experienced substantial progress recently owing largely to advances in deep learning, specifically convolutional neural nets (CNNs).  Image classification, where a computer classifies or assigns labels to an image based on its content, can often see great results simply by leveraging pre-trained neural nets and fine-tuning the last few throughput layers.  

Classifying _and_ finding an unknown number of individual objects within an image, however, was considered an extremely difficult problem only a few years ago.  This task, called object detection, is now feasible and has even been productized by companies like [Google][1] and [IBM][2]. But all of this progress wasn't easy!  Object detection presents many substantial challenges beyond what is required for image classification.  After further introducing the topic, let's take a deep dive into several of the interesting obstacles object detection problems raise along with several emerging solutions.


## Introduction

### What is object detection?

While image classification has one primary classification objective, the goal of object detection is to draw rectangular bounding boxes around objects of interest as well as identify what object each box contains. A single image can consist of many different objects, so multiple bounding boxes may be drawn for each example.  Object detection [applications are basically limitless][3], but some uses include people or [animal counting][4], face detection, self-driving cars, or even ball tracking in sports.  These applications require many different kinds of objects to be detected, often with a high degree of both accuracy and speed to meet the demands of real-time video tracking.

### History

The first successful object detection frameworks relied on more traditional machine learning techniques.  These methods required extensive feature engineering to learn representative object patterns a priori before passing to a machine learning classifier like a support vector machine.  These approaches, such as the Viola-Jones algorithm, showed impressive test times and detection rates, but they often struggled to generalize to other object types or object poses since the features had to be manual engineered.

The advent of CNNs brought great improvement to the world of object detection because it allows for more robust feature sets to be learned directly from the images and allowed for nonlinear response.  Regional-proposal methods, like R-CNN introduced in 2014 and the subsequent Fast- and Faster R-CNN, depend on convolutional feature maps of select candidate regions to determine objectness (object present or not) as well as object classification.  These approaches follow two stages: 1) generate regions of interest (ROIs) where an object may be present and 2) classify this region and refine the coordinates of the ROIs.  These deep learning approaches have been so successful that the large majority of object detection leverages deep learning for at least some portion of the process, though HOG paired with tree-based methods is still performant for pedestrian detection problems (ref). The remainder of this blog post will focus on deep learning solutions for object detection, though the same challenges listed also apply to other types of approaches. 

The final category of object detection algorithms are another type of deep learning method: the so-called "single-shot detectors" such as YOLO introduced in 2016.  Rather than following the two-stage pipeline approach of regional-based methods, these systems seek to perform object detection in one shot.  This includes determining regions of interest, determining if the region contains an object or not, classifying each object detected, and refining the bounding box coordinates.  These single-shot detectors are typically much faster than the R-CNN methods, however, they often struggle with small objects and may perform worse than, say, Faster R-CNN.



<!--
One of the first successful object detection frameworks was proposed by [Viola and Jones][5] in 2001.  This system, primarily used for face detection, yielded impressive detection rates and even boasted real-time detection at 15 frames per second.  This algorithm takes advantage of the fact that human faces share similar properities.  Viola and Jones constructed a set of specifically designed [Haar Features][6] to capture facial characteristics and then fed these engineered features to a variant of AdaBoost to recognize and localize faces in test images.  While this algorithm showed impressive test times and detection rates, it suffered to generalize to other object types and changes in facial tilt.  The histogram of oriented gradients (HOG) method 
-->

<center>
<img src="{{ site.urlimg }}objdet_history.png" alt="History of Object Detection" width = "650">
<p><em> The history of object detection comprises of roughly three eras: machine learning, regional-based CNNs, and single shot detectors.  <br>Note: Many other significant approaches not listed here for brevity only.</em></p>
</center>

<!--
- History
    - Manual feature collection
    - Major gains once CNN applied to problem
    - Image depicting methods on a timeline (+ challenges overcome by each that can be referenced later)
-->

## Challenges

### 1. Dual priorities: object localization and classification

The first major complication of object detection is its added goal: not only do we want to classify image objects but also to determine the objects' positions, generally referred to as the _object localization_ task.  Researchers most often use a multi-task loss function, which penalizes both misclassifications and localization errors, to address this issue.

#### Fast R-CNN

Fast R-CNN saw several improvements over R-CNN.  Along with the dramatic speed-up introduced by passing each image through the CNN base only once, Ross Girshick et al. were also able to improve accuracy by unifying the object detection training into the optimization of one multi-task loss function.  Each candidate ROI is judged against true objects with this loss function, comprising of two types of terms:

\\[\mathcal{L}(p, u, t^u, v) = \overbrace{\mathcal{L}_c(p,u)}^{classification} + \lambda\overbrace{\left[u\geq 1\right] \mathcal{L}_l(t^u, v)}^{localization}, \\]

where the classification term is log loss for the true object class, \\(u\\), and the localization term is a smooth \\(L_1\\) loss for the four positional components, which applies to all classes except the background where \\(u=0\\).  Here \\(\lambda\\) may be adjusted to prioritize either classification or localization more heavily.

#### YOLO

YOLO, a single-shot detector, takes the multi-task loss function even further.  YOLO begins by laying an \\(S \times S\\) grid out on each image and allowing each grid cell \\(B\\) possible bounding boxes of varying sizes.  For each true object present in the image, the grid cell associated with the object's center is responsible for predicting this object.  The loss function thus consists of terms for each of the \\(S^2\\) grid locations, each of the \\(B\\) possible bounding boxes, and each of the \\(C\\) classes in the dataset.  Minimization of the resulting loss function allows this method to not only perform the classification and localization tasks, but also to propose regions of interest by checking if an object is present in a predefined grid cell-bounding box pair. 

The first version of YOLO primarily made localization errors, however, later iterations just penalized localization errors more heavily and saw improvement.  YOLO also  rarely produced false positives, that is, incorrectly labeling the background as an object; Fast R-CNN made many more such background errors.  Using the full image as context to both propose regions and classify them appears to be why YOLO does much better than Fast R-CNN at this since Fast R-CNN has an entirely separate ROI selection routine.

#### Metrics
Another interesting consequence of having multiple objectives is the need for special metrics to evaluate object detection methods.  Two such metrics, IoU and mAP, prevail among the object detection community and are typical when reporting results or analyzing multiple approaches.

##### IoU

IoU stands for intersection over union.  This measurement judges object localization and also informs the main object detection metric, mAP.  IoU compares the actual and predicted bounding boxes by calculating the area of their overlap divided by the total area of these two boxes.  Generally, IoU above 50% is defined as a positive match.  

<center>
<img src="{{ site.urlimg }}iou.png" alt="Intersection over Union" width = "500">
<p><em> The intersection over union metric judges the exactness of the object localization task.</em></p>
</center>

##### mAP

mAP, or mean average precision, on the other hand, assesses the classification task. mAP computes the mean of the average precision (AP) across all object classes in the dataset.  Once a list of bounding box predictions have been constructed, those meeting a prescribed IOU level (often 50%) are deemed positives while others are negatives.  Now beginning with the precision-recall (PR) curve for just one object class, AP approximates the area under the PR curve:

\\[ AP = \int_0^1 p(r) dr,\\]

where \\(p \equiv\\) precision and \\(r \equiv\\) recall.  The exact details of this calculation varies a bit between datasets--COCO uses 101-point interpolation, for example--but overall, AP attempts to aggregate precision over all values of recall, from zero to one.  mAP then is just the numerical mean of each of these AP values for every object class in the dataset.  For more a more robust discussion on how mAP is defined for each  dataset, check out [this blog post][7]. 

<!--
- Regions of interest (independent of class, pipeline solution)
- Multi-task loss function
- Multiple objects in one image
- New metrics: IOU
-->

### 2. Speed

Object detection algorithms need to not only be accurate when classifying and localizing important objects in images, they also need to be incredibly fast at prediction time in order to extend to the real-time detection required for video processing.  Several key improvements have been offered over the years to boost the speed of these algorithms, reducing test time from 0.02 frames per second (R-CNN) to 155 fps (Fast YOLO).

The first major improvements in speed come from the R-CNN, Fast R-CNN, and Faster R-CNN systems, all developed by Ross Girshick's group.  R-CNN uses selective search to generate 2,000 proposal ROIs.  Each ROI is then processed through CNN layers to then refine the bounding box coordinates and classify each found object.  A huge bottleneck in this approach is that each of the 2000 ROIs must be processed with the CNN base individually.  Fast R-CNN solves this speed issue by first processing the entire image with the CNN base to build a feature map for the entire image.  The ROIs generated by selective search are then paired to the appropriate location on the feature map before processing with the final layers.  This reduction in passes through the CNN base yields a 20-fold reduction in processing time.

While Fast R-CNN is much speedier than R-CNN, yet another bottleneck persists: the initial creation of the region proposals with selective search.  It takes approximately 2.3 seconds for each image to be processed with Fast R-CNN, and selective search accounts for a full 2 seconds of that time!  Faster R-CNN eliminates this process and generates ROIs with a separate sub-neural network.  _Inital guesses for bounding boxes are allowed to be less precise knowing that the downstream regression task will correct these localization errors._ This change creates another 10X speed-up, and this Faster R-CNN method tests at a rate of about 7-18 fps.

While this means we have cut test time from 49 seconds per image to about 0.2 seconds which is quite impressive, videos are typically shot at at least 24 fps, so as it stands, Faster R-CNN will not be able to keep pace.  The final bottleneck to overcome in Faster R-CNN is the separate components of the regional proposal network and the detection network.  Single-shot detectors, on the other hand, create region proposals in the same pass as the classification and localization tasks thus dramatically decreasing test time per image.  Fast YOLO has even been able to achieve rates of 155 fps; however, reaching such speeds certainly comes with a cost as classification and localization accuracy sharply drop off at these speeds.  

Ultimately, today's object detection algorithms attempt to strike a balance between speed and accuracy.  Several design choices beyond just the detection framework can influence these outcomes.  For example, YOLOv3 allows for images of varying resolutions: high res images typically see higher accuracy but slower processing times, and vice versa.  The choice of the CNN base also influences the speed-accuracy tradeoff.  Here, deep networks like the 164-layer Inception-ResNet-V2 yield impressive accuracy in terms of mAP, but pale in comparision to systems construced with VGG-16 in terms of speed.  These design choices, along with the selection of the object detection framework, determine whether speed or accuracy are prioritized more.

_Faster R-CNN still better accuracy than SSDs in general_

<!--
- Heading toward RT detection in videos -- need to process images very quickly
- Fast R-CNN (process image through CNN first)
- Faster R-CNN (separate RPN)
- YOLO (multi-task optimization, all in one go, no alternate optimization like Faster R-CNN)
- SSD?
- Truncated SVD
- Trade speed and accuracy
-->

### 3. Multiple spatial scales and aspect ratios
- Warping of ROI before being fed into CNN (R-CNN)
- SPP layer
- Anchors

Another big challenge in object detection is the fact that objects of interest may come in a wide range of sizes and aspect ratios.  Several techniques have been tried to address these issues.

#### Anchor boxes

With its updated region proposal network, Faster R-CNN employs anchor boxes as initial guesses for its RoIs.  Anchor boxes are distributed throughout the image and _used to initialize the RPN_.  The shape and sizes of these boxes are carefully chosen to span a range of different sizes and aspect ratios with the hopes that all types of objects can be detected and the coordinates need not be updated too much during the optimization.  Other frameworks, including single-shot detectors, have leveraged these anchor boxes as starting points for RoI selection.

<center>
<img src="{{ site.urlimg }}anchors.png" alt="Anchor boxes as initial RoIs" width = "500">
<p><em> Carefully chosen anchor boxes of varying size and aspect ratio can be used to make initial guesses for the regions of interest and help detect objects of different sizes and shapes.</em></p>
</center>

#### Multiple feature maps

Single-shot detectors need to pay special consideration to this issue of multiple scales because they need to not only classify objects and adjust bounding boxes but also come up with the regions of interest all in one shot from the CNN.  If only the final CNN layers are used to look for objects, only the largest objects will be found because smaller objects can be lost during the downsampling of the pooling layers.  To solve this problem and be able to detect smaller objects, single-shot detectors typically detect objects using multiple different CNN layers including earlier layers that have not yet lost as much resolution.  Predictions can either be made independently and fused together (SSD) or multiple layers can be concatenated before predictions are made (YOLO).  Even with these precautions, single-shot detectors are notoriously bad at detecting small objects, especially those tight groupings like a flock of birds.  The third and most recent version of YOLO appears to have corrected this shortcoming a bit, but all detection methods tend to perform better for larger objects in general.  Increasing input image resolution may also help with small object accuracy.

<center>
<img src="{{ site.urlimg }}ssd.png" alt="SSD with multiple feature maps" width = "500">
<p><em> Feature maps from multiple layers of the SSD CNN are used to make object detections at multiple scales.</em></p>
</center>

#### Feature Pyramid Network

The feature pyramid network (FPN) concept takes this idea of multiple feature layers one step further.  Images first pass through the typical CNN pathway so that the final layers are more semantically rich.  Then to obtain better resolution and localization of objects learned, a top down pathway is also implemented thus upsampling the feature map and regaining higher resolution.  While this top down pathway is good for learning objects of varying sizes, spatial positions can get skewed.  To improve the localization of objects detected, lateral connections are added between the original feature maps and the corresponding reconstructed layers.  FPN provides one of the strongest ways to detect objects of varying sizes and this technique was added to YOLO in version 3.


<center>
<img src="{{ site.urlimg }}fpn.png" alt="Feature pyramid network" width = "500">
<p><em> The feature pyramid network is able to detect objects of varying sizes by reconstructing higher resolution layers from those with semantic strength.</em></p>
</center>




<!--
### 3. Spatial position IS relevant 
- Image classification does not do this
- Fully connected layers (slow)
- ?? (I forgot this solution... )
-->



### 4. Limited data
- Lots of data for image classification (ImageNet), not so much for image detection (COCO)
- YOLO9000 attempt to leverage both for training

### 5. Class imbalance

Class imbalance is an issue for most classification problems, and object detection also feels this pain.  Consider a typical photograph.  More likely than not, this typical photograph will contain a few main objects and the remainder of the image will be part of the background.  R-CNN begins with 2000 candidate ROIs per image--just imagine how many of these regions don't contain an object and are considered negatives!

Rather than continuing to learn more about the background regions, hard example mining filters the negative examples done to those that the model performs worst one.  Some approaches also cap the ratio of picked negatives (background) to positives (objects), say, no greater than 3:1.

Non-maximal suppression (NMS) is also used by many object detection algorithms to correct for the fact that one object may be detected multiple times by the proposed RoIs.  With NMS the ....

More recently focal loss has been used to reduce the effects of class imbalance.  Focal loss replaces the traditional classification log loss as
\\[ FL(p_u) = -(1-p_u)^\gamma \log(p_u)\\]
where \\(p_u \equiv \\) predicted class probability for the actual true class and \\(\gamma > 0\\).  The effect of this additional factor reduces the loss for well-classified examples, thus deemphasizing observations with high class confidence, such as regions that clearly contain background.  This helps deemphasize classes with many examples that the model knows well, such as the background.



## Conclusion
- Much harder than image classification tasks
- Future challenges like adding LSTM, time component to video processing.  Currently one frame at a time
- Marry speed and accuracy AND extend object class space
- Also: pose, occlusions, lighting (same issues that image classification has but maybe even more so since also trying to localize object)
- Check out review's future stuff again


 [1]: https://cloud.google.com/vision/docs/drag-and-drop
 [2]: https://www.ibm.com/watson/services/visual-recognition/
 [3]: https://www.quora.com/What-are-some-interesting-applications-of-object-detection
 [4]: https://lev.cs.rpi.edu/public/papers/parham_wacv_2016.pdf
 [5]: https://en.wikipedia.org/wiki/Viola%E2%80%93Jones_object_detection_framework
 [7]: https://medium.com/@jonathan_hui/map-mean-average-precision-for-object-detection-45c121a31173
 [8]: https://en.wikipedia.org/wiki/Viola%E2%80%93Jones_object_detection_framework
 [9]: https://commons.wikimedia.org/wiki/File:Dlib_Learned-HOG-Detector.jpg
 [10]: https://arxiv.org/abs/1311.2524
 [11]: https://arxiv.org/abs/1506.02640
