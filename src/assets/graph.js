const m0 = {
  id: "ee91e4c1347f8afb@127",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
        md``
      )})
    },
    {
      name: "chart",
      inputs: ["data","forceSimulation","d3","DOM","width","height","color","drag"],
      value: (function(data,forceSimulation,d3,DOM,width,height,color,drag)
        {
          const links = data.links.map(d => Object.create(d));
          const nodes = data.nodes.map(d => Object.create(d));
          const simulation = forceSimulation(nodes, links).on("tick", ticked);

          const svg = d3.select(DOM.svg(600, 500))
            .attr("viewBox", [-width / 2, -height / 2, width, height]);

          const link = svg.append("g")
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0.6)
            .selectAll("line")
            .data(links)
            .enter().append("line")
            .attr("stroke-width", d => Math.sqrt(d.value));

          const node = svg.append("g")
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
            .selectAll("circle")
            .data(nodes)
            .enter().append("circle")
            .attr("r", 5)
            .attr("fill", color)
            .call(drag(simulation))
            .on('click', function() {console.log('clicked: ', this)});

          node.append("title")
            .text(d => d.id);

          function ticked() {
            link
              .attr("x1", d => d.source.x)
              .attr("y1", d => d.source.y)
              .attr("x2", d => d.target.x)
              .attr("y2", d => d.target.y);

            node
              .attr("cx", d => d.x)
              .attr("cy", d => d.y);
          }

          return svg.node();
        }
      )
    },
    {
      name: "forceSimulation",
      inputs: ["d3"],
      value: (function(d3){return(
        function forceSimulation(nodes, links) {
          return d3.forceSimulation(nodes)
            .force("link", d3.forceLink(links).id(d => d.id))
            .force("charge", d3.forceManyBody())
            .force("x", d3.forceX())
            .force("y", d3.forceY());
        }
      )})
    },
    {
      name: "data",
      value: (async function(){return(
        (await fetch("https://gist.githubusercontent.com"
          + "/mbostock/74cb803c013404ac30e63f020a52a2fd"
          + "/raw/c7c74c939b602c56c80848963f9ad24802baaead"
          + "/graph.json")).json()
      )})
    },
    {
      name: "height",
      value: (function(){return(
       600
      )})
    },
    {
      name: "color",
      inputs: ["d3"],
      value: (function(d3)
        {
          const scale = d3.scaleOrdinal(d3.schemeCategory10);
          return d => scale(d.group);
        }
      )
    },
    {
      name: "drag",
      inputs: ["d3"],
      value: (function(d3){return(
        simulation => {

          function dragstarted(d) {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          }

          function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
          }

          function dragended(d) {
            if (!d3.event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          }

          return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
        }
      )})
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
        require("d3@5")
      )})
    }
  ]
};

const notebook = {
  id: "ee91e4c1347f8afb@127",
  modules: [m0]
};

export default notebook;
