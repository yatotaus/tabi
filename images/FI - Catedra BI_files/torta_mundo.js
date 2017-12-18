 var data = [
    {"valor": 100, "name": "POBLACION TOTAL"},
    {"valor": 9.6, "name": "POBREZA EXTREMA"}
  ]
  d3plus.viz()
    .container("#mundo")
    .data(data)
    .type("pie")
    .id("name")
    .size("valor")
    .draw()