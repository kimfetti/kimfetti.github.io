---
layout: page-fullwidth
title: "Down and Up: A Puzzle Illustrated with D3.js"
subheadline: "Math Puzzles"
meta_teaser: "Math puzzles elicit amusement for some people, but many others approach with trepidation and dread.  Such worry may be unnecessary, however, because a simple visual--like the ones illustrated in this post--could be all you need to find a solution!"
teaser: "<em>Math puzzles elicit amusement for some people, but many others approach with trepidation and dread.  Such worry may be unnecessary, however, because a simple visual--like the ones illustrated in this post--could be all you need to find a solution!</em>"


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
        
        input[name=updateButton] {
          background-color: #271B77;
          font-weight: bold;
        }
        
        input[name=resetButton] {
          background-color: #ADADB0;
        }
        
        #sections {
        position: relative;
        display: inline-block;
        width: 250px;
        top: 0px;
        z-index: 90;
        }
        
        .step {
        margin-bottom: 50px;
        }
        
        .title {
        font-weight: bold;
        }
        
        #initialPencil {
        display: inline-block;
        position: relative;
        top: 60px;
        z-index: 1;
        margin-left: 0;
        
        height: 300px;
        width: 600px;
        }

    </style>
</head>

<!-- Begin Post -->


On a recent vacation my husband and I happened upon an entertainment shop that was well stocked with board games, dice, playing cards, etc.  We quickly found an item that both of us, absolute nerds that we are, deemed an essential purchase: a book by Boris A. Kordemsky called [The Moscow Puzzles: 359 Mathematical Recreations](https://www.amazon.com/Moscow-Puzzles-Mathematical-Recreations-Recreational/dp/0486270785/).  No, we didn't spend our entire vacation solving all 359, but we did bring the book home with us and have continued working through them--often over a glass of wine in the evenings.  

One puzzle in particular recently caught my attention for several reasons.  I'll come back to those reasons in a bit, but for now, the problem goes like this:

> Suppose you have two pencils pressed together and held vertically.  One inch of the pencil on the left, measuring from its lower end, is smeared with paint.  The right pencil is held steady while you slide the left pencil down 1 inch, continuing to press the two pencils together.  You then move the left pencil back up and return it to its former position, all while keeping the two pencils touching.  You continue these actions until you have moved the left pencil down and up 5 times each.  Assume the paint does not dry or run out during this process.  <b>How many inches of each pencil are smeared with paint after your tenth and final movement?</b>

Take a minute to solve this problem if you'd like before proceeding--spoilers ahead!


## First Thoughts

When I first heard this problem, my initial reaction is that perhaps the paint is not smeared to the right pencil at all and only one inch of paint appears on the left pencil throughout the process.  Maybe you had this thought as well.  But the second time I read through the problem, I started to visualize what might actually be happening.  As soon as I tried to make a mental picture of this process, the solution became much more clear.  Since my husband was solving this problem with me, I made him this sketch to show him what I was thinking:

<img style="float: right; padding: 30px;"  src="{{ site.urlimg }}pencil_sketch.pdf" alt="Paint is spread to both pencils immediately" width = "450">


## Problem Setup

<img style="float: right; padding: 30px;"  src="{{ site.urlimg }}pencil_initial.gif" alt="Paint is spread to both pencils immediately" width = "450">

To begin only the pencil on the left is smeared with one inch of paint; however, the pencil on the right immediately becomes smeared with paint when the two pencils are pressed together.


I'm not done talking yet!!!  Slow your roll...


llll



kkk

## Illustrating the Problem


waaaiiittttt...

<div id="paintContainer">
    <div id="option">
        <input name="updateButton" 
               type="button" 
               value="Move Pencil" 
               onclick="movePencil(); addPaint(1,800); addPaint(2,2000); incrUnits();"/>
        <input name="resetButton" 
               type="button" 
               value="Reset" 
               onclick="removePaint()"/>
    </div>
</div>



## Backstory and Problem Extensions

There is more to say

<div id="contraContainer">
    <div id="option">
        <input name="updateButton" 
               type="button" 
               value="Advance" 
               onclick="moveBlushers('left', 0); sickBlusher(); moveBlushers('center', 2500); sickGrinner();"/>
        <input name="resetButton" 
               type="button" 
               value="Reset"
               onclick="makeWell()"/>
</div>




<!-- Paint and Pencils Example -->
<script>
var dataset = [1, 2];
var pencilColor = "#F0C446";
var paintColor = "#271B77";

var svg = d3.select("div#paintContainer").append("svg")
  .attr("width",700)
  .attr("height", 400)
  .attr("align","center")
  .style('transform', 'translate(50%, 0%)');

var objects = svg.append("g");

var pencils = objects.selectAll("g").data(dataset)
                .enter()
                .append("g")
                .attr("id", function(d, i) { return i; })
                .attr("transform",function(d, i) {return "translate(" + i*50 + ",0)";});

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
                       .attr('d', function(d,i) { 
                                var x = 0, y = 50;
                                return 'M ' + (50+x) +' '+ y + ' l 25 -50 l 25 50 z';
                             })
                       .attr("fill", pencilColor)
                       .style("fill-opacity", .4)
                       .style("stroke-width",".2em")
                       .style("stroke", pencilColor);

var tips = pencils.append("path")
                  .attr('d', function(d, i) {
                            var x = 12.5, y = 25;
                            return 'M ' + (50+x) + ' ' + y + ' l ' + x + ' ' + -y + ' l ' + x + ' ' + y + ' z';
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


var text = svg.append("text");

text.attr("x", 225).attr("y", 50).attr("font-size",22);

var paintUnits = 1;

text.append("tspan").text("Paint:");
var paintText = text.append("tspan")
                    .attr("dx", 10)
                    .style("fill", paintColor)
                    .attr("font-weight", "bold")
                    .text(paintUnits + " Inch");
                  

// Functions called on button click
function movePencil() {
    d3.select("g").selectAll("*")
      .filter(function (d) { return d == 1; })
      .transition()
        .duration(750)
        .attr("transform", "translate(0,25)")
      .on("end",function() { // on end of transition...
		    d3.select(this)
		    	.transition() // second transition
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
                            var height = d3.select(this)
                               .style('height')
                               .slice(0, -2)
                            return Math.min( Math.round(Number(height))+50, 300); } )
         .attr("y", function(d) {
                            var y = d3.select(this)
                               .style('y')
                               .slice(0, -2)
                            return Math.max( Math.round(Number(y))-50, 50); });
}


function incrUnits() {
    paintUnits++
    paintText.transition()
        .delay(2400)
        .text( Math.min(paintUnits, 6) + " Inches");
}


// Function called on reset button click
function removePaint() {
    paint
      .transition()
      .duration(500)
        .attr("y", 300)
        .attr("height", 50);
    paintUnits = 1
    paintText.transition()
        .delay(250)
        .text( paintUnits + " Inch");
}


</script>



<!-- Contra Example -->
<script>
var data = [1, 2, 3, 4, 5];

var s = d3.select("div#contraContainer").append("svg")
  .attr("width",700)
  .attr("height", 400)
  .style('transform', 'translate(40%, 5%)');
  
var blushGroup = s.append("g").attr("id", "blushers");
  
var blushers = blushGroup.selectAll("image").data(data)
    .enter()
    .append("image")
    .attr('xlink:href', function (d, i) {
                            if (i == 0) { return "{{ site.urlimg }}emoji_sick.png"; }
                            else { return "{{ site.urlimg }}emoji_blush.png"; }
    })
    .attr('width', 75)
    .attr('height', 75)
    .attr("x", function (d, i) { return d*100; })
    .attr("y", 0);

    
var grinGroup = s.append("g").attr("id", "grinners");

var grinners = grinGroup.selectAll("image").data(data)
    .enter()
    .append("image")
    .attr('xlink:href', "{{ site.urlimg }}emoji_grin.png")
    .attr('width', 70)
    .attr('height', 70)
    .attr("x", function (d, i) { return d*100; })
    .attr("y", 100);

var sickNum = 1;

function moveBlushers(pos, delay) {
    if (sickNum == 1) { return; }
    else {
    d3.select("#blushers")
      .selectAll("image")
      .transition()
      .delay(delay)
      .duration(1000)
      .attr("transform", function(d) { if (pos=="left") {return "translate(-100,0)";}
                                      else if (pos=="center") {return "translate(0, 0)";}
                                     });
    };                                   
}

function sickBlusher() {
    if (sickNum == 1) { return; }
    else { delay = 1200; }
    d3.select("#blushers")
      .selectAll("image")
      .filter( function (d) { return d == sickNum; } )
      .transition()
      .delay(delay)
      .style("opacity", 0)
      .attr("xlink:href", "{{ site.urlimg }}emoji_sick.png")
      .transition()
      .duration(800)
      .ease(d3.easeLinear)
      .style("opacity", 1);
}

function sickGrinner() {
    if (sickNum == 1) { delay = 300; }
    else { delay = 3300; }
    d3.select("#grinners")
      .selectAll("image")
      .filter( function (d) { return d == sickNum; } )
      .transition()
        .delay(delay)
        .style("opacity", 0)
      .on("end", function() {
                    d3.select(this)
                      .transition()
                        .duration(800)
                        .ease(d3.easeLinear)
                        .style("opacity", 1)
                        .attr("xlink:href", "{{ site.urlimg }}emoji_sick.png")
                        .attr("width", 75)
                        .attr("height", 75)
                })
    sickNum++;
}


function makeWell() {
    d3.select("#blushers")
      .selectAll("image")
      .attr('xlink:href', function (d, i) {
                              if (i == 0) { return "{{ site.urlimg }}emoji_sick.png"; }
                              else { return "{{ site.urlimg }}emoji_blush.png"; }
      })
      .attr("width", 75)
      .attr("height", 75)
    d3.select("#grinners")
      .selectAll("image")
      .attr("xlink:href", "{{ site.urlimg }}emoji_grin.png")
      .attr("width", 70)
      .attr("height", 70)
    sickNum = 1;
}

</script>