
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
if (sickNum == 1) { return; }
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
}

function sickBlusher() {
{
    if (sickNum == 1) { return; }
    else { delay = 1200; }
}
d3.select("#blushers")
  .selectAll("image")
  .filter( function (d) { return d == sickNum; })
  .transition()
  .delay(delay)
    .style("opacity", 0)
    .attr("xlink:href", sickEmoji)
  .transition()
  .duration(800)
    .ease(d3.easeLinear)
    .style("opacity", 1);
}

function sickGrinner() {
{
    if (sickNum == 1) { delay = 300; }
    else { delay = 3300; }
}
d3.select("#grinners")
  .selectAll("image")
  .filter( function (d) { return d == sickNum; })
  .transition()
  .delay(delay)
    .style("opacity", 0)
    .on("end", function() {
        d3.select(this)
          .transition()
          .duration(800)
            .ease(d3.easeLinear)
            .style("opacity", 1)
            .attr("xlink:href", sickEmoji)
            .attr("width", 75)
            .attr("height", 75)
    })

sickNum++;
}

function makeWell() {

d3.select("#blushers")
  .selectAll("image")
    .attr('xlink:href', function (d, i) {
        if (i == 0) { return sickEmoji; }
        else { return blushEmoji; }
    })
    .attr("width", 75)
    .attr("height", 75)

d3.select("#grinners")
  .selectAll("image")
    .attr("xlink:href", grinEmoji)
    .attr("width", 70)
    .attr("height", 70)

sickNum = 1;
}