

var blushEmoji = "img/emoji_blush.png";
var grinEmoji = "img/emoji_grin.png";
var sickEmoji = "img/emoji_sick.png";

// Dummy data for contra dancers
var contraData = [1, 2, 3, 4, 5];

// Make D3 canvas
var canvas = d3.select("div#contraContainer").append("svg")
    .attr("width",700)
    .attr("height", 200)
    .style('transform', 'translate(25%, 0%)');

// Build top row of dancers
var blushGroup = canvas.append("g")
    .attr("id", "blushers");

var blushers = blushGroup.selectAll("image")
  .data(contraData)
  .enter()
  .append("image")
    // Fill row with blush emoji except first sick dancer
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

// Build bottom row of dancers
var grinGroup = canvas.append("g")
    .attr("id", "grinners");

var grinners = grinGroup.selectAll("image")
  .data(contraData)
  .enter()
  .append("image")
    // Fill row with grin emoji
    .attr('xlink:href', grinEmoji)
    .attr("x", function (d, i) { return d*100; })
    .attr("y", 100)
    .attr('width', 70)
    .attr('height', 70);

// Initialize position of illness spread
var sickNum = 1;

// Functions called when danceButton clicked
function moveBlushers(pos, delay) {
    // Inputs control direction of movement and transition delay
    // Do not move dancers if illness has not spread
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
    // Convert top row to sick emoji
    // Do not convert if illness has not spread
    {
        if (sickNum == 1) { return; }
        else { delay = 1200; }
    }
    d3.select("#blushers")
      .selectAll("image")
      .filter( function (d) { return d == sickNum; })

      // Switch image to sick emoji
      .transition()
      .delay(delay)
        .style("opacity", 0)
        .attr("xlink:href", sickEmoji)

      // Blink new image to draw attention
      .transition()
      .duration(800)
        .ease(d3.easeLinear)
        .style("opacity", 1);
}

function sickGrinner() {
    // Convert bottom row to sick emoji
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
        .on("end", function() {  // After clearing out current image
            d3.select(this)
              .transition()      // Fade sick emoji in
              .duration(800)
                .ease(d3.easeLinear)
                .style("opacity", 1)
                .attr("xlink:href", sickEmoji)
                .attr("width", 75)
                .attr("height", 75)
        })

    // Spread illness to next position
    sickNum++;
}

// Function called when resetButton clicked
function makeWell() {

    // Reset top row to blush emoji except first sick emoji
    d3.select("#blushers")
      .selectAll("image")
        .attr('xlink:href', function (d, i) {
            if (i == 0) { return sickEmoji; }
            else { return blushEmoji; }
        })
        .attr("width", 75)
        .attr("height", 75)

    // Reset bottom row to grin emoji
    d3.select("#grinners")
      .selectAll("image")
        .attr("xlink:href", grinEmoji)
        .attr("width", 70)
        .attr("height", 70)

    // Reset illness spread
    sickNum = 1;
}
