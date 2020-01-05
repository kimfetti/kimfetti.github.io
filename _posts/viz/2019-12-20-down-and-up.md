---
layout: page-fullwidth
title: "Down and Up: A Puzzle Illustrated with D3.js"
subheadline: "Math Puzzles"
meta_teaser: "Math puzzles provide great amusement for some people, but many others approach them with dread--especially during interviews.  Such trepidation may be unwarranted, however, because a simple visual--like the ones illustrated in this post--could be all you need to find a solution."
teaser: "<em>Math puzzles provide great amusement for some people, but many others approach them with dread--especially during interviews.  Such trepidation may be unwarranted, however, because a simple visual--like the ones illustrated in this post--could be all you need to find a solution.</em>"


header:
    image: pencil-header.png
    background-color: "#999999"
    caption: "Photo by Walimai.photo. Cropped and resized by author."
    caption_url: https://flickr.com/photos/walimai/25229699484/in/photolist-ErsNEG-2gWfWJp-2h2dTYD-21e7kYh-2hMuoCA-7Jhrwt-2hJD2CU-2evZDJr-2g8Rf7k-2hatveD-2hD18ss-2hdjvm1-22h15Xm-2eXYJLx-28tkg66-C89Nd-2fc34SK-2hTcErb-PFZPhK-6Y9nMP-8M2wEz-2eFmLoj-8FH3DA-yPZMyU-2hx2fnv-ZbcBFY-2hDgx14-28RNTi6-2d3nad7-acNrjv-66MwUt-8MffnB-8ADcj3-QVTA6Z-8L4iJJ-2gfnsnF-8WH13a-8N95S2-26ow8US-TATXBW-8JHvtW-2hvZXQe-8xKHNy-8YQE61-2ezu7Yc-9NmEw7-2gb7m62-8Li514-2htc6uz-2bAKBtq
image:
    thumb: pencil-thumb.jpg
    homepage: pencil-header.png
    caption: "Photo by Walimai.photo. Cropped by author."
    caption_url: https://flickr.com/photos/walimai/25229699484/in/photolist-ErsNEG-2gWfWJp-2h2dTYD-21e7kYh-2hMuoCA-7Jhrwt-2hJD2CU-2evZDJr-2g8Rf7k-2hatveD-2hD18ss-2hdjvm1-22h15Xm-2eXYJLx-28tkg66-C89Nd-2fc34SK-2hTcErb-PFZPhK-6Y9nMP-8M2wEz-2eFmLoj-8FH3DA-yPZMyU-2hx2fnv-ZbcBFY-2hDgx14-28RNTi6-2d3nad7-acNrjv-66MwUt-8MffnB-8ADcj3-QVTA6Z-8L4iJJ-2gfnsnF-8WH13a-8N95S2-26ow8US-TATXBW-8JHvtW-2hvZXQe-8xKHNy-8YQE61-2ezu7Yc-9NmEw7-2gb7m62-8Li514-2htc6uz-2bAKBtq
categories:
    - visualizations
    - puzzles
show_meta: true
comments: true

---

<head>

    <script type="text/javascript" src="http://mbostock.github.com/d3/d3.js"></script>
    <script src="https://d3js.org/d3.v4.min.js"></script>

    <!--Multiple button functions-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.3.0/d3.js"></script>  


    <style> 

        input {
          border: none;
          color: white;
          padding: 16px 32px;
          margin: 4px 2px;
          cursor: pointer;
        }
        
        input[name=paintButton] {
          background-color: #271B77;
          font-weight: bold;
        }

        input[name=danceButton] {
          background-color: #6BA450;
          font-weight: bold;
        }
        
        input[name=resetButton] {
          background-color: #ADADB0;
          margin-top: 15px;
        }
        
    </style>
    
    
</head>


<!-- Begin Post -->

On a recent vacation my husband and I happened upon an entertainment shop that was well stocked with board games, dice, playing cards, etc.  We quickly found an item that both of us, absolute nerds that we are, deemed an essential purchase: a book by Boris A. Kordemsky called [The Moscow Puzzles: 359 Mathematical Recreations](https://www.amazon.com/Moscow-Puzzles-Mathematical-Recreations-Recreational/dp/0486270785/).  No, we didn't spend our entire vacation solving all 359, but we did bring the book home with us and have continued working through them--often over a glass of wine in the evenings.  

One particular puzzle recently caught my attention for several reasons.  I'll come back to those reasons in a bit, but for now, the problem is called "Down and Up" and it goes like this:

> Suppose you have two pencils pressed together and held vertically.  One inch of the pencil on the left, measuring from its lower end, is smeared with paint.  The right pencil is held steady while you slide the left pencil down 1 inch, continuing to press the two pencils together.  You then move the left pencil back up and return it to its former position, all while keeping the two pencils touching.  You continue these actions until you have moved the left pencil down and up 5 times each.  Assume the paint does not dry or run out during this process.  <b>How many inches of each pencil are smeared with paint after your final movement?</b>

Take a minute to solve this problem before proceeding if you'd like--spoilers ahead!


## First Thoughts

When I first heard this problem, I initially thought that perhaps the paint is not smeared to the right pencil at all and perhaps only one inch of paint appears on the left pencil throughout the entire process.  (Did you also expect this?)  But the <em>second</em> time I read through the problem I started to visualize what might actually be happening.  The solution became much more clear as soon as I tried to make a mental picture of the process.  Since my husband was solving the problem with me, I made him this sketch to share what I was thinking:

<center>
    <img src="{{ site.urlimg }}pencil_sketch.png" alt="Initial ideas as a sketch" width = "550">
</center>

<br>

I managed to distinctly envision the situation, arrive at a solution, and communicate my thought process just with this simple sketch.  For many math puzzles a rough picture provides all you need find the answer, but if my crude drawing hasn't fully conveyed the solution to you, no worries.  Let's dive in a bit more methodically with a much nicer illustration.


<img style="float: right; padding: 30px;"  src="{{ site.urlimg }}pencil_initial.gif" alt="Paint is spread to both pencils immediately" width = "500">

## Problem Setup

From the problem directions, we know that initially only the left pencil is smeared with paint.  Recall though that the left pencil presses directly against the right.  This means paint immediately transfers to the right pencil as they are squeezed together.  So both pencils are smeared with one inch of paint even before any of the five down-up movements occur.  

<br>
<br>
<br>


## Solving and Illustrating the Full Problem

The problem gets a little more complicated as the left pencil moves down and up, but returning to a visual interpretation once again helps immensely.  Also feel free to reread the problem statement at any point to regain your bearings.  

Both pencils are currently smeared with one inch of paint.  Then the left pencil moves down one inch while both pencils continue pressing together.  Can you envision what happens when the left pencil moves down?  Yes!  A clean portion of the left pencil makes contact with the bottom of the right pencil; therefore, another inch of paint transfers over to the left.

The left pencil now lingers one inch lower than the right.  One inch of the right pencil is smeared with paint, but paint covers <em>two inches</em> of the left pencil.  The left pencil moves up in the next step of the problem, coming back to its original position.  So the two pencils realign, but what happens to the paint?  Since the left pencil continually makes contact with the right, paint smears over to the right pencil and coats two inches of both pencils at the end of the first down-and-up cycle. 

The four remaining cycles proceed similarly, with paint transferring first to the left pencil and then to the right.  <b>Finally after five rounds of movements, both pencils are smeared with a total of six inches of paint: an initial inch plus five more inches, one for each of the down-up cycles.</b>

This problem ultimately hinges on the ability to translate the problem statement into an explanatory visual.  To further contextualize this solution, I created an interactive figure with D3.js.  Below both pencils start with one inch of paint as described in the problem setup. Use the "Move Pencil" button to convince yourself of the answer I provided.  

<em>Note: these pencils are six fictitious inches long.  After the fifth movement, the pencils reach equilibrium in that paint completely covers them. Hit the "Reset" button at any time to start over.</em>

<br>


<div style="width: 100%; padding-bottom: 15px" id="pencilContainer">
    <div style="float: left; width: 10%; height: 400; padding-left: 15%;">
        <input name="paintButton" 
               type="button" 
               value="Move Pencil" 
               onclick="movePencil(); addPaint(1,800); addPaint(2,2000); incrUnits();"/>
        <br>
        <input name="resetButton" 
               type="button" 
               value="Reset" 
               onclick="removePaint()"/>
    </div>
</div>

<script>
var pencilColor = "#F0C446";
var paintColor = "#271B77";

var pencilData = [1, 2];

var svg = d3.select("div#pencilContainer").append("svg")
    .attr("width",600)
    .attr("height", 400)
    .style('transform', 'translate(40%, 0%)');

var objects = svg.append("g");

var pencils = objects.selectAll("g")
  .data(pencilData)
  .enter()
  .append("g")
    .attr("id", function(d, i) { return i; })
    .attr("transform", function(d, i) {return "translate(" + i*50 + ",0)"; });

var rects = pencils.append("rect")
    .attr("x", 50)
    .attr("y", 50)
    .attr("width", 50)
    .attr("height", 300)
    .attr("fill", pencilColor)
    .style("fill-opacity", .7)
    .style("stroke-width",".2em")
    .style("stroke", pencilColor);

var triangles = pencils.append("path")
    .attr('d', function(d, i) {
        var x = 0, y = 50;
        return 'M ' + (50+x) + ' ' + y + ' l ' + y/2 + ' ' + -y + ' l ' + y/2 + ' ' + y + ' z';
     })
    .attr("fill", pencilColor)
    .style("fill-opacity", .4)
    .style("stroke-width",".2em")
    .style("stroke", pencilColor);

var tips = pencils.append("path")
    .attr('d', function(d, i) {
        var x = 12.5, y = 25;
        return 'M ' + (50+x) + ' ' + y + ' l ' + y/2 + ' ' + -y + ' l ' + y/2 + ' ' + y + ' z';
    })
    .style("fill-opacity", .7)
    .style("stroke-width",".2em")
    .style("stroke", "#393731");

var paint = pencils.append("rect")
    .attr("x", 50)
    .attr("y", 300)
    .attr("width", 50)
    .attr("height", 50)
    .attr("fill", paintColor)
    .style("fill-opacity", 0.9)
    .style("stroke-width",".2em")
    .style("stroke", paintColor);

var paintUnits = 1;

var text = svg.append("text");

text
  .attr("x", 225)
  .attr("y", 50)
  .attr("font-size",22);

text.append("tspan")
  .text("Paint:");

var paintText = text.append("tspan")
    .attr("dx", 10)
    .style("fill", paintColor)
    .attr("font-weight", "bold")
    .text(paintUnits + " Inch");

function movePencil() {
    d3.select("g").selectAll("*")
      .filter(function (d) { return d == 1; })
      .transition()
        .duration(750)
        .attr("transform", "translate(0,25)")
      .on("end",function() {  
          d3.select(this)
            .transition()     
              .delay(750)
              .attr("transform", "translate(0,0)")
      });
}

function addPaint(pencilNumber, delay) {
    d3.select("g").selectAll("*")
      .filter(function(d) { return d == pencilNumber; })
      .filter(function(d,i) { return i == 4; })
      .transition()
        .delay(delay)
        .attr("height", function(d) {
            return Math.min(paintUnits*50 + 50, 300); 
        })
        .attr("y", function(d) {
            return Math.max(300 - 50*paintUnits, 50);
        });
}

function incrUnits() {
    paintUnits++;
    paintText.transition()
      .delay(2400)
      .text( Math.min(paintUnits, 6) + " Inches");
}

function removePaint() {
    paint
      .transition()
      .duration(500)
        .attr("y", 300)
        .attr("height", 50);

    paintUnits = 1;
    paintText.transition()
      .delay(250)
      .text( paintUnits + " Inch");
}

</script>

## Backstory and Problem Extensions

Earlier I mentioned this problem caught my eye for several reasons.  The first reason is exactly what we have been discussing.  I marveled at how tricky the problem sounds initially as opposed to how simple it becomes as soon as you construct an appropriate mental image of the situation.

The second reason this puzzle piqued my interest is its history.  As explained in Kordemsky's book, Leonid Mikhailovich Rybakov, a Soviet mathematician who lived in the early 20th Century, created this "Down and Up" problem.  I deeply appreciate math problems that pervade through many time periods and geographies.  Solving such puzzles allows me to feel more connected to the past and to other mathematicians around the globe. 

Finally, this problem sparked my curiousity because Rybakov first thought it up when returning home from a successful duck hunt.  Kordemsky encourages readers to contemplate why this could be the case but goes on to explain in his "Answers" section.  From <em>The Moscow Puzzles</em> book:

> Looking at his boots, Leonid Mikhailovich noticed that their entire lengths were muddied where they usually rub each other while he walks.  
"How puzzling," he thought, "I didn't walk in any deep mud, yet my boots are muddied up to the knees." <br>
Now you understand the origin of the puzzle.

Just as the paint smeared the entire length of both pencils, Rybakov's boots were covered from tip to top because mud had transferred from one boot to the other as he walked.  

I continued to think about how this concept might apply to other situations, and I came up with one amusing but slightly unpleasant example.  Consider two lines of contra dancers in which the first dancer in the first line unfortunately feels unwell.  If this dancer's sickness is highly communicable, she will, of course, pass along her malady to her dance partner who is positioned across from her.  Sometimes in contra dancing participants exchange dance partners by shifting the two lines laterally.  Regrettably, when this happens the newly infected dancer will pass the disease back across the line, and eventually the entire group of dancers become ill.  Try out my widget below to see this application in action.

<br>

<div style="width: 100%; padding-bottom: 15px" id="contraContainer">
    <div style="float: left; width: 10%; height: 400; padding-left: 10%;">
        <input name="danceButton" 
               type="button" 
               value="Dance!" 
               onclick="moveBlushers('left', 0); sickBlusher(); moveBlushers('center', 2500); sickGrinner();"/>
        <br>
        <input name="resetButton" 
               type="button" 
               value="Reset"
               onclick="makeWell()"/>
    </div>
</div>


<script>

var blushEmoji = "{{ site.urlimg }}emoji_blush.png";
var grinEmoji = "{{ site.urlimg }}emoji_grin.png";
var sickEmoji = "{{ site.urlimg }}emoji_sick.png";

var contraData = [1, 2, 3, 4, 5];

var canvas = d3.select("div#contraContainer").append("svg")
    .attr("width",700)
    .attr("height", 200)
    .style('transform', 'translate(25%, 0%)');

var blushGroup = canvas.append("g")
    .attr("id", "blushers");

var blushers = blushGroup.selectAll("image")
  .data(contraData)
  .enter()
  .append("image")
    .attr('xlink:href', function (d, i) {
        if (i == 0) {
          return sickEmoji;
        }
        else {
          return blushEmoji;
        }
    })
    .attr("x", function (d, i) { return d*100; })
    .attr("y", 0)
    .attr('width', 75)
    .attr('height', 75);
    
var grinGroup = canvas.append("g")
    .attr("id", "grinners");

var grinners = grinGroup.selectAll("image")
  .data(contraData)
  .enter()
  .append("image")
    .attr('xlink:href', grinEmoji)
    .attr("x", function (d, i) { return d*100; })
    .attr("y", 100)
    .attr('width', 70)
    .attr('height', 70);

var sickNum = 1;

function moveBlushers(pos, delay) {
    if (sickNum == 1) { sickNum++; return; }
    else {
      d3.select("#blushers")
        .selectAll("image")
        .transition()
        .delay(delay)
        .duration(1000)
          .attr("transform", function(d) {
              if (pos=="left") { return "translate(-100, 0)"; }
              else if (pos=="center") { return "translate(0, 0)"; }
          });
    };
    sickNum++;
}

</script>

## Conclusion

I hope you have enjoyed this discussion on one of my new favorite math puzzles along with these illustrative D3 visuals.  Making a mental image of a math puzzle is not always easy, but it can be invaluable when solving problems like these--especially if you are a visual learner like myself.  The next time you feel stuck on an interview question, check to see if sketching or imagining the physical setup of the problem helps.  For me it often does.

I also hope you have enjoyed learning a little about the backstory behind this puzzle.  Some of the world's best math puzzles were created long ago, so I believe looking to the past when attempting to sharpen our minds benefits us greatly.  Furthermore, expanding this kind of problem to new applications, like I did with the contra dancers, helps solidify core concepts and builds intuition for future brainteasers.  It also makes math problems more enjoyable because you relate them to your own life.  So now it's your turn -- can you think of any other "Down and Up" scenarios?

Check out my D3 code on GitHub! || [Pencils and Paint](https://github.com/kimfetti/Blog/blob/master/pencil_paint.html) || [Contra Dancers](https://github.com/kimfetti/Blog/blob/master/contra.html)
