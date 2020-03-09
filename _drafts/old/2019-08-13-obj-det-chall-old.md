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

Classifying _and_ finding an unknown number of individual objects within an image, however, was considered an extremely difficult problem only a few years ago.  This task, called object detection, is now feasible and has even been productized by companies like [Google][1] and [IBM][2]. But all of this progress wasn't easy!  Object detection presents many substantial challenges beyond what is required for image classification.  After a brief introduction to  the topic, let's take a deep dive into several of the interesting obstacles these problems face along with several emerging solutions.


## Introduction

The ultimate purpose of object detection is to locate important items, draw rectangular bounding boxes around them, and determine the class of each item discovered.  Applications of object detection arise in [many different fields][3] including detecting pedestrians for self-driving cars, monitoring agricultural crops, and even real-time ball tracking for sports.  Researchers have dedicated a substantial amount of work towards this goal over the years: from Viola and Jones's facial detection algorithm published in 2001 to [RetinaNet][15], a fast, highly accurate one-state detection framework released in 2017.  The introduction of CNNs marks a pivotal moment in object detection history, as nearly all modern systems use CNNs in some form.  That said, the remainder of this post will focus on deep learning solutions for object detection, though similar challenges confront other approaches as well.

<!--


### What is object detection?

While image classification has one primary classification objective, the goal of object detection is to draw rectangular bounding boxes around objects of interest as well as identify what object each box contains. A single image can consist of many different objects, so multiple bounding boxes may be drawn for each example.  Object detection [applications are basically limitless][3], but some uses include people or [animal counting][4], face detection, self-driving cars, or even ball tracking in sports.  These applications require many different kinds of objects to be detected, often with a high degree of both accuracy and speed to meet the demands of real-time video tracking.

### History

The first successful object detection frameworks relied on more traditional machine learning techniques.  These methods required extensive feature engineering to learn representative object patterns a priori before passing to a machine learning classifier like a support vector machine.  These approaches, such as the Viola-Jones algorithm, showed impressive test times and detection rates, but they often struggled to generalize to other object types or object poses since the features had to be manual engineered.

The advent of CNNs brought great improvement to the world of object detection because it allows for more robust feature sets to be learned directly from the images and allowed for nonlinear response.  Regional-proposal methods, like R-CNN introduced in 2014 and the subsequent Fast- and Faster R-CNN, depend on convolutional feature maps of select candidate regions to determine objectness (object present or not) as well as object classification.  These approaches follow two stages: 1) generate regions of interest (ROIs) where an object may be present and 2) classify this region and refine the coordinates of the ROIs.  These deep learning approaches have been so successful that the large majority of object detection leverages deep learning for at least some portion of the process, though HOG paired with tree-based methods is still performant for pedestrian detection problems (ref). The remainder of this blog post will focus on deep learning solutions for object detection, though the same challenges listed also apply to other types of approaches. 

The final category of object detection algorithms are another type of deep learning method: the so-called "single-shot detectors" such as YOLO introduced in 2016.  Rather than following the two-stage pipeline approach of regional-based methods, these systems seek to perform object detection in one shot.  This includes determining regions of interest, determining if the region contains an object or not, classifying each object detected, and refining the bounding box coordinates.  These single-shot detectors are typically much faster than the R-CNN methods, however, they often struggle with small objects and may perform worse than, say, Faster R-CNN.



One of the first successful object detection frameworks was proposed by [Viola and Jones][5] in 2001.  This system, primarily used for face detection, yielded impressive detection rates and even boasted real-time detection at 15 frames per second.  This algorithm takes advantage of the fact that human faces share similar properities.  Viola and Jones constructed a set of specifically designed [Haar Features][6] to capture facial characteristics and then fed these engineered features to a variant of AdaBoost to recognize and localize faces in test images.  While this algorithm showed impressive test times and detection rates, it suffered to generalize to other object types and changes in facial tilt.  The histogram of oriented gradients (HOG) method 


<center>
<img src="{{ site.urlimg }}objdet_history.png" alt="History of Object Detection" width = "650">
<p><em> The history of object detection comprises of roughly three eras: machine learning, regional-based CNNs, and single shot detectors.  <br>Note: Many other significant approaches not listed here for brevity only.</em></p>
</center>


- History
    - Manual feature collection
    - Major gains once CNN applied to problem
    - Image depicting methods on a timeline (+ challenges overcome by each that can be referenced later)
-->

## Challenges

### 1. Dual priorities: object classification and localization

The first major complication of object detection is its added goal: not only do we want to classify image objects but also to determine the objects' positions, generally referred to as the _object localization_ task.  To address this issue, researchers most often use a multi-task loss function to penalize both misclassifications and localization errors.


Regional-based CNNs represent one popular class of object detection frameworks.  These methods consist of the generation of region proposals where objects are likely to be located followed by CNN processing to classify and further refine object localization.  Ross Girshick et al. developed [Fast R-CNN][17] to improve upon their initial results with [R-CNN][18]. As its name implies, Fast R-CNN saw a dramatic speed-up, but accuracy also improved because the classification and localization tasks were unified into the optimization of one multi-task loss function.  Each proposed region that may contain an object is judged against the image's true labeled objects.  Each predicted region incurs penalties for both false classification and misalignment of the bounding box.  Thus the loss function consists of two kinds of terms:

\\[\mathcal{L}(p, u, t^u, v) = \overbrace{\mathcal{L}_c(p,u)}^{classification} + \lambda\overbrace{\left[u\geq 1\right] \mathcal{L}_l(t^u, v)}^{localization}, \\]

where the classification term imposes log loss to the probability of the true object class \\(u\\) and the localization term is a smooth \\(L_1\\) loss for the four positional components that define the rectangle.  Note that the localization penalty does not apply when no object is present (the background class).  Also the parameter \\(\lambda\\) may be adjusted to prioritize either classification or localization more strongly.

<!--
#### YOLO

YOLO, a single-shot detector, takes the multi-task loss function even further.  YOLO begins by laying an \\(S \times S\\) grid out on each image and allowing each grid cell \\(B\\) possible bounding boxes of varying sizes.  For each true object present in the image, the grid cell associated with the object's center is responsible for predicting this object.  The loss function thus consists of terms for each of the \\(S^2\\) grid locations, each of the \\(B\\) possible bounding boxes, and each of the \\(C\\) classes in the dataset.  Minimization of the resulting loss function allows this method to not only perform the classification and localization tasks, but also to propose regions of interest by checking if an object is present in a predefined grid cell-bounding box pair. 

The first version of YOLO primarily made localization errors, however, later iterations just penalized localization errors more heavily and saw improvement.  YOLO also  rarely produced false positives, that is, incorrectly labeling the background as an object; Fast R-CNN made many more such background errors.  Using the full image as context to both propose regions and classify them appears to be why YOLO does much better than Fast R-CNN at this since Fast R-CNN has an entirely separate ROI selection routine.
-->

<!--
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

-->

<!--
- Regions of interest (independent of class, pipeline solution)
- Multi-task loss function
- Multiple objects in one image
- New metrics: IOU
-->

### 2. Speed for real-time detection

Object detection algorithms need to not only be accurate when classifying and localizing important objects, they also need to be incredibly fast at prediction time to meet the real-time demands of video processing.  Several key enhancements over the years have boosted the speed of these algorithms, improving test time from the 0.02 frames per second (fps) of R-CNN to the impressive 155 fps of Fast YOLO.

As the names imply, Fast R-CNN and Faster R-CNN were built to speed up the original R-CNN method.  R-CNN uses [selective search][16] to generate 2,000 candidate regions of interest (ROIs) and passes each ROI through a CNN base individually causing a massive bottleneck since this CNN processing is quite slow. Fast R-CNN instead sends the entire image through the CNN base just once and then matches the ROIs created with selective search to the CNN feature map, yielding a 20-fold reduction in processing time.  While Fast R-CNN is much speedier than R-CNN, yet another bottleneck persists.  It takes approxiamtely 2.3 seconds for Fast R-CNN to perform object detection on a single image, and selective search accounts for a full 2 seconds of that time!  Faster R-CNN replaces selective search with a separate sub-neural network to generate ROIs, creating another 10x speed up and thus testing at a rate of about 7-18 fps.

<!--
The first major improvements in speed come from the R-CNN, Fast R-CNN, and Faster R-CNN systems, all developed by Ross Girshick's group.  R-CNN uses selective search to generate 2,000 proposal ROIs.  Each ROI is then processed through CNN layers to then refine the bounding box coordinates and classify each found object.  A huge bottleneck in this approach is that each of the 2000 ROIs must be processed with the CNN base individually.  Fast R-CNN solves this speed issue by first processing the entire image with the CNN base to build a feature map for the entire image.  The ROIs generated by selective search are then paired to the appropriate location on the feature map before processing with the final layers.  This reduction in passes through the CNN base yields a 20-fold reduction in processing time.

While Fast R-CNN is much speedier than R-CNN, yet another bottleneck persists: the initial creation of the region proposals with selective search.  It takes approximately 2.3 seconds for each image to be processed with Fast R-CNN, and selective search accounts for a full 2 seconds of that time!  Faster R-CNN eliminates this process and generates ROIs with a separate sub-neural network.  _Inital guesses for bounding boxes are allowed to be less precise knowing that the downstream regression task will correct these localization errors._ This change creates another 10X speed-up, and this Faster R-CNN method tests at a rate of about 7-18 fps.
-->

Despite these impressive improvements to R-CNN, videos are typically shot at at least 24 fps, meaning Faster R-CNN will likely not keep pace.  Regional-based methods consist of two separate phases: proposing regions and processing them. This task separation proves to be somewhat inefficient.  Another major type of object detection systems relies on a unified one-state approach instead.  These so-called single-shot detectors aim to fully locate and classify objects during a single pass ove the image, thus substantially decreasing test time.  One such single-shot detector YOLO begins by laying out a grid over the image and allows each grid cell to detect a fixed number of objects of varying sizes.  For each true object present in the image, the grid cell associated with the object's center is responsible for predicting this object.  A complex, multi-term loss function then ensures that all localization and classification occurs within one process.  One version of this method, Fast YOLO, has even achieved rates of 155 fps; however, classification and localization accuracy drops off sharply at this elevated speed.

<!--
While this means we have cut test time from 49 seconds per image to about 0.2 seconds which is quite impressive, videos are typically shot at at least 24 fps, so as it stands, Faster R-CNN will not be able to keep pace.  The final bottleneck to overcome in Faster R-CNN is the separate components of the regional proposal network and the detection network.  Single-shot detectors, on the other hand, create region proposals in the same pass as the classification and localization tasks thus dramatically decreasing test time per image.  Fast YOLO has even been able to achieve rates of 155 fps; however, reaching such speeds certainly comes with a cost as classification and localization accuracy sharply drop off at these speeds.  
-->

Ultimately, today's object detection algorithms attempt to strike a balance between speed and accuracy.  Several design choices beyond the detection framework influence these outcomes.  For example, YOLOv3 allows images of varying resolutions--high-res images typically see better accuracy but slower processing times.  The choice of the CNN base also affects the speed-accuracy tradeoff.  Very deep networks like the 164 layers used in Inception-ResNet-V2 yield impressive accuracy, but pale in comparision to frameworks with VGG-16 in terms of speed.  Object detection design choices are made in context depending on whether speed or accuracy takes priority. 



<!--
_Faster R-CNN still better accuracy than SSDs in general_
- Heading toward RT detection in videos -- need to process images very quickly
- Fast R-CNN (process image through CNN first)
- Faster R-CNN (separate RPN)
- YOLO (multi-task optimization, all in one go, no alternate optimization like Faster R-CNN)
- SSD?
- Truncated SVD
- Trade speed and accuracy
-->

### 3. Multiple spatial scales and aspect ratios
<!--
- Warping of ROI before being fed into CNN (R-CNN)
- SPP layer
- Anchors
-->

For many applications of object detection, items of interest may appear in a wide range of sizes and aspect ratios.  Practitioners leverage several techniques to ensure detection algorithms are able to capture objects at multiple scales and views.

#### Anchor boxes

Instead of selective search, Faster R-CNN's updated region proposal network uses a small sliding window across the image's convolutional feature map to generate candidate RoIs.  Multiple RoIs are predicted at each position and are described relative to the so-called anchor boxes.  The shape and sizes of these anchor boxes are carefully chosen to span a range of different sizes and aspect ratios.  This allows various types of objects to be detected with the hopes that the bounding box coordinates need not be updated much during the localization task.  Other frameworks, including single-shot detectors, also adopt anchor boxes to initialize regions of interest.

<center>
<img src="{{ site.urlimg }}anchors.png" alt="Anchor boxes" width = "500">
<p><em> Carefully chosen anchor boxes of varying sizes and aspect ratios help create diverse regions of interest.</em></p>
</center>

#### Multiple feature maps

Single-shot detectors must place special emphasis on the issue of multiple scales because they detect objects with a single pass through the CNN framework.  If objects are detected from the final CNN layers alone, only the largest objects will be found as smaller objects may lose signal during downsampling in the pooling layers.  To address this problem, single-shot detectors typically look for objects with multiple CNN layers including earlier layers where higher resolution remains.  Despite the precaution of using multiple feature maps, single-shot detectors are notoriously bad at detecting small objects, especially those in tight groupings like a flock of birds, though [recent YOLO developments][19] appear promising.  

<center>
<img src="{{ site.urlimg }}ssd.png" alt="SSD with multiple feature maps" width = "800">
<p><em> Feature maps from multiple CNN layers help predict objects at multiple scales.</em></p>
</center>

#### Feature pyramid network

The [feature pyramid network (FPN)][12] takes the concept of multiple feature maps one step further.  Images first pass through the typical CNN pathway, yielding semantically rich final layers.  Then to regain better resolution, FPN creates a top-down pathway by upsampling the feature map.  While the top-down pathway helps detect objects of varying sizes, spatial positions may be skewed.  Lateral connections are added between the original feature maps and the corresponding reconstructed layers to improve object localization.  FPN currently provides one of the leading ways to detect objects at multiple scales, and YOLO was augmented with this technique in [version 3][19].


<center>
<img src="{{ site.urlimg }}fpn.png" alt="Feature pyramid network" width = "450">
<p><em> The feature pyramid network detects objects of varying sizes by reconstructing high resolution layers from layers with greater semantic strength.</em></p>
</center>




<!--
### 3. Spatial position IS relevant 
- Image classification does not do this
- Fully connected layers (slow)
- ?? (I forgot this solution... )
-->



### 4. Limited data

Another substantial hurdle for object detection is the limited amount of annotated data currently available.  Object detection datasets typically contain ground truth examples for about a dozen to a hundred types of objects, while image classification datasets can include upwards of 100,000 different classes.  Furthermore, crowd sourcing often produces image classification tags for free (for example, by parsing the text of user-provided photo captions).  Gathering ground truth labels along with accurate bounding boxes for object detection, however, remains incredibly tedious work.

The COCO dataset, provided by Microsoft, currently leads as one of the best object detection datasets.  COCO contains 300,000 segmented images with [80 different categories][13] of objects with very precise location labels.  Each image contains about 7 objects on average, and objects appear at very broad scales.  As helpful as this dataset is, object types outside of these 80 select items will not be recognized if training solely on COCO.

A very interesting approach to ameliorate this issue comes from YOLO9000, the [second version of YOLO][20].  YOLO9000 incorporates many important updates into YOLO, but it also aims to narrow the dataset gap between object detection and image classification.  YOLO9000 trains simultaneously on both COCO and [ImageNet][14], an image classification dataset with tens of thousands of object classes.  COCO information helps precisely locate objects, while ImageNet increases YOLO's classification "vocabulary."  A hierarchical WordTree allows YOLO9000 to first detect an object's concept (such as "animal/dog") and to then drill down into specifics (such as "Siberian husky").  This approach appears to work well for concepts known to COCO like animals but performs more poorly on concepts less prevalent in COCO like equipment or clothing.

<center>
<img src="{{ site.urlimg }}yolo9000.png" alt="YOLO9000 WordTree and examples" width = "700">
<p><em> YOLO9000 trains on both COCO and ImageNet to increase classification "vocabulary."</em></p>
</center>


<!--
- Lots of data for image classification (ImageNet), not so much for image detection (COCO)
- YOLO9000 attempt to leverage both for training
-->

### 5. Class imbalance

Class imbalance proves to be an issue for most classification problems, and object detection is no exception.  Consider a typical photograph.  More likely than not, the photograph contains a few main objects while the remainder of the image is filled with background.  Recall that selective search in R-CNN produces 2,000 candidate ROIs per image--a very large majority of these regions do not contain objects and are considered negatives.

<!--
Rather than continuing to learn more about the background regions, hard example mining filters the negative examples done to those that the model performs worst one.  Some approaches also cap the ratio of picked negatives (background) to positives (objects), say, no greater than 3:1.

Non-maximal suppression (NMS) is also used by many object detection algorithms to correct for the fact that one object may be detected multiple times by the proposed RoIs.  With NMS the ....
-->

A recent approach called focal loss is implemented in [RetinaNet][15] and helps reduce the effects of class imbalance.  In the optimization loss function, focal loss replaces the traditional log loss used to penalize misclassifications:
\\[ FL(p_u) = -\overbrace{(1-p_u)^\gamma\;}^{*} \log(p_u)\\]
where \\(p_u \\) is the predicted class probability for the true class and \\(\gamma > 0\\).  The additional factor (\*) reduces loss for well-classified examples with high probabilities. The overall effect thus deemphasizes classes with many examples that the model knows well, such as the background.  Though they occupy the minority classes, objects of interest receive more significance and see improved accuracy.



## Conclusion
Object detection is customarily considered to be much harder than image classification, particularly because of these five challenges: dual priorities, speed, multiple scales, limited data, and class imbalance.  Researchers have dedicated much effort to face these challenges, yielding oftentimes amazing results.  Substantial challenges still persist, however.

Basically all object detection frameworks continue to struggle with small objects, especially those bunched together with partial occlusions.  Real-time detection with top-level classification and localization accuracy remains challenging and practioners must often prioritize one or the other when making design decisions.  An interesting enhancement that may see more research in the future would extend the current two-dimensional bounding boxes into three-dimensional bounding cubes.  Furthermore, video tracking could see improvements if some continuity between frames were assumed rather than processing each frame individually.  Even though many object detection obstacles have seen creative solutions, these additional challenges--and plenty more--mean object detection research is certainly not done!


<!--
- Much harder than image classification tasks
- Future challenges like adding LSTM, time component to video processing.  Currently one frame at a time
- Marry speed and accuracy AND extend object class space
- Also: pose, occlusions, lighting (same issues that image classification has but maybe even more so since also trying to localize object)
- Check out review's future stuff again
-->


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
 [12]: https://arxiv.org/pdf/1612.03144.pdf
 [13]: https://github.com/pjreddie/darknet/blob/master/data/coco.names
 [14]: http://www.image-net.org/
 [15]: https://arxiv.org/abs/1708.02002
 [16]: https://koen.me/research/pub/uijlings-ijcv2013-draft.pdf
 [17]: https://arxiv.org/pdf/1504.08083.pdf
 [18]: https://arxiv.org/pdf/1311.2524.pdf
 [19]: https://arxiv.org/pdf/1804.02767.pdf
 [20]: https://arxiv.org/pdf/1612.08242.pdf