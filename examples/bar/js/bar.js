// object has curly braces, brackets are arrays

let dimensions = {
    width: window.innerWidth * 0.9, // grab the innerwidth and use 90%
    height: 600,
    margin: {
        top:20,
        right: 20,
        bottom: 30,
        left: 80,
    }
};

// create two new parameters
// you are choosing from above. chaining from above. descendent selectors, down the tree.

dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right
dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom

// move into the scaffolding of the chart. 

var svg = d3.select("figure#chart") // do something to the html area specified
    .append("svg")
    // .attr("width", dimensions.width) // we defined this earlier on the page
    // .attr("height", dimensions.height);

    .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`) 
    // viewbox retains proportions
    // group the svg
    .append("g")
    .attr("transform", `translate(${dimensions.margin.left},${dimensions.margin.right})`);

    // think of this scale as a function: F(x) = something
    var xScale = d3.scaleLinear() // don't use scale.linear
    // domain refers to the spread of you dataset
    // range is the spread of pixels 0 to boundedWidth
    .range([0, dimensions.boundedWidth]);

    var yScale = d3.scaleBand()
    .range([0, dimensions.boundedHeight])
    .padding(0.3);

    // check the data format
    var rowConvertor = function(d) {
        // look for every line and return an object
        return {
            genre: d.genre, // look for the column variables
            votes: +d.count // plus ensures everything in the count column is an integer. If a date, need another function before the parse
        }
    };
// a new way to write a function (the arrow function)
    var rowConvertor2 = (d) => {
        return {
            genre: d.genre,
            count: +d.count
        }
    };
// Loading data in d3v4
// d3.csv("data/musicdata.csv", rowConvertor, function(data {
// do stuff with data
// })

// Loading data in d3v5
d3.csv("data/musicdata.csv", rowConvertor)
// this is a promise load the data first aka await
.then(
    // our chart goes here
    function(data) {
        // console.log(data);
        // domain refers to the data itself
        // xScale.domain(d3.extent(data, d => d.votes)) 
        // we can update the domain of the xScale with d3.extent
        //xScale.domain(d3.extent(data, function(d) {return d.votes}));
// method is the same as function but used for back to back
        xScale.domain([0, d3.max(data, d => d.votes)]); // accessor which column of data you want to use

        yScale.domain(data.map(d => d.genre)); // map method

        var bars = svg.selectAll("rect")
        // join the selection of rectangles with data and then modify
        .data(data)
        .enter() // adds the rectangles
        .append("rect")
        .attr("y", d => yScale(d.genre)) // set the position of the rectangle and match category names
        .attr("width", d => xScale(d.votes))
        .attr("height", yScale.bandwidth())
        .attr("fill", "blue");

        var xAxis = svg.append("g")
            .attr("class", "x axis")
            .call(d3.axisBottom(xScale))
            .attr("transform", `translate(0, ${dimensions.boundedHeight})`);
        
        var xAxisText = xAxis.selectAll("text")
            .attr("class", "axis_text")
        
        var yAxis = svg.append("g")
            .attr("class", "y axis")
            .call(d3.axisLeft(yScale))
        
        var yAxisText = yAxis.selectAll("text")
            .attr("class", "axis_text");
    }
);



