    console.log("Estoy en education");
    let svg2 = d3.select("#education"),
        margin = {top: 50, right: 50, bottom: 40, left: 80},
        width = svg2.attr("width") - margin.left - margin.right,
        height = svg2.attr("height") - margin.top - margin.bottom,
        g = svg2.append("g").attr("transform", "translate(" + margin.left + "," +margin.top + ")");


    //define scales
    let x = d3.scaleLinear().rangeRound([0, width]),
        y = d3.scaleBand().rangeRound([height, 0]).padding(0.2);

    //load data
    d3.csv("data.csv", function(d){
        d.percentExpenditure = +d.percentExpenditure;
        return d;
    }, function (error, data) {
        if(error) throw error;

    //sort data
    data.sort(function(a,b) { return a.percentExpenditure - b.percentExpenditure; });

    //define domains based on data
    x.domain([0, d3.max(data, function(d) { return d.percentExpenditure; })]);
    y.domain(data.map(function(d) { return d.country; }));

    //append x axis to svg
    g.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .append("text")
        .attr("y", 30)
        .attr("x", 650)
        .attr("dy", "0.5em")
        .style("fill", "black")
        .text("% of GDP");

    //append y axis to svg
    g.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(y));

    //append rects to svg based on data
    g.selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", 0)
        .attr("y", function(d) { return y(d.country); })
        .attr("height", y.bandwidth())
        .attr("width", function(d) { return x(d.percentExpenditure); })
        .style("fill", "#2ca25f");
    });

    //define chart title to svg
    let title = svg2.append("g")
        .attr("class", "title");
    title.append("text")
        .attr("x", (width/1.5))
            .attr("y", 40)
            .attr("text-anchor", "middle")
            .style("font", "20px sans-serif")
            .text("Porcentaje de GDP en Educacion, 2014");

    //append source data to svg
    let source = svg2.append("g")
        .attr("class", "source");
    source.append("text")
        .attr("x", 10)
        .attr("y", 500)
        .attr("text-anchor", "left")
        .style("font", "12px monospace")
        .text("Fuente: Banco Mundial");
console.log("Salgo de education");