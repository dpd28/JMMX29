// select an element in the DOM. Select is for a single element. selectall is for more than one.

const dataset = [5, 10, 15, 20, 25];

// d3.select('body');

const body = d3.select('body');

body.selectAll('p')
        .data(dataset)
        .enter()
        .append('p')
        // after this comes the forumla to attach the data
        // customize the instancee depending on data
        .text(function(d) {
                return `I can count up to ${d}`;
        });
