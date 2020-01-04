

var pencilColor = "#F0C446";
var paintColor = "#271B77";

// Dummy data for pencils
var pencilData = [1, 2];

// Create D3 canvas
var svg = d3.select("div#pencilContainer").append("svg")
    .attr("width",600)
    .attr("height", 400)
    .style('transform', 'translate(40%, 0%)');

var objects = svg.append("g");

// Build pencils with initial inch of paint
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


// Monitor paint level and display with text
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


// Functions called when paintButton clicked
function movePencil() {
    d3.select("g").selectAll("*")
      .filter(function (d) { return d == 1; })
      .transition()
        .duration(750)
        .attr("transform", "translate(0,25)")
      .on("end",function() {  // after moving pencil down
          d3.select(this)
            .transition()     // move pencil back up
              .delay(750)
              .attr("transform", "translate(0,0)")
      });
}

function addPaint(pencilNumber, delay) {
    // Inputs control which pencil is painted and
    // the delay before event occurs
    d3.select("g").selectAll("*")
      .filter(function(d) { return d == pencilNumber; })
      .filter(function(d,i) { return i == 4; })
      .transition()
        .delay(delay)
        .attr("height", function(d) {
            var height = d3.select(this)
                .style('height')
                .slice(0, -2)
                return Math.min( Math.round(Number(height))+50, 300); // Max paint is 300
        })
        .attr("y", function(d) {
            var y = d3.select(this)
                .style('y')
                .slice(0, -2)
                return Math.max( Math.round(Number(y))-50, 50);  // Minimum y position is 50
        });
}

function incrUnits() {
    paintUnits++
    paintText.transition()
      .delay(2400)
      .text( Math.min(paintUnits, 6) + " Inches");
}


// Function called when resetButton clicked
function removePaint() {
    // Reset paint
    paint
      .transition()
      .duration(500)
        .attr("y", 300)
        .attr("height", 50);

    // Reset text
    paintUnits = 1
    paintText.transition()
      .delay(250)
      .text( paintUnits + " Inch");
}
