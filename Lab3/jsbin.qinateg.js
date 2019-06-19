d3.csv("https://raw.githubusercontent.com/hvo/datasets/master/nyc_grads.csv").then(function (grads){
    var data = grads
    .filter(function(row){
      return (row.Type=='Borough Total')&&
        (row.Cohort%2===0);
    })
    .map(function (row){
         return [row.Advanced/row.Total*100,
                row.DroppedOut/row.Total*100,
                row.Cohort,
                row.Borough
                ];
         });
      createPlot(data);
});

function createPlot(data){
  var svg = d3.select("#chart")
      .append("svg")
      .attr("width", 400)
      .attr("height", 400);
  
  svg.append('text')
    .attr('x',20)
    .attr('y',25)
    .text('NYC High School Graduation Rate');
  
   var pArea = [50,50,300,300];
   
   var x = d3.scaleLinear()
        .domain([0,30])
        .range([pArea[0],pArea[2]]);
   var y = d3.scaleLinear()
        .domain([0,30])
        .range([pArea[1],pArea[3]]);
  
    var g = svg.append("g");
    g.append("g")
      .attr("class", "axis axis--y")
      .attr("transform", `translate(${pArea[0]},0)`)
      .call(d3.axisLeft(y).ticks(5, "I"))
      

    g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", `translate(0,${pArea[3]})`)
      .call(d3.axisBottom(x).ticks(5, "I"))
      .append('text')
        .attr('class', 'label')
        .attr('x', (x.range()[0]+x.range()[1])*0.5)
        .attr('y', 35)
        .text('Advanced Regents (%)');
}

// function createPlot(data) {
//   var svg = d3.select("#chart")
//     .append('svg')
//     .attr('width', 300)
//     .attr('height', 1000);

//   svg.append('text')
//     .attr('x', 20)
//     .attr('y', 25)
//     .text('NYC High School Graduation Rate');
  
//   var pArea = [50, 50, 390, 360];
  
//   var x = d3.scaleLinear()
//     .domain([0,30])
//     .range([pArea[0], pArea[2]]);
  
//   var y = d3.scaleLinear()
//     .domain([0,30])
//     .range([pArea[3], pArea[1]]);
  
//   var g = svg.append("g");

//   g.append("g")
//     .attr("class", "axis axis--y")
//     .attr("transform", `translate(${pArea[0]}, 0)`)
//     .call(d3.axisLeft(y).ticks(5, "I"))；
    
//   g.append("g")
//     .attr("class", "axis axis--x")
//     .attr("transform", `translate(0, ${pArea[3]})`)
//     .call(d3.axisBottom(x).ticks(5, "I"))
//     .append('text')
//       .attr('class', 'label')
//       .attr('x', (x.range()[0]+x.range()[1])*0.5)
//       .attr('y', 35)
//       .text('Advanced Regents (%)');
 
// }