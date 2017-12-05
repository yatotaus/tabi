  var data = [
    {"año": 1993, "name":"pobreza nacional 1993", "valor": 46},
    {"año": 1993, "name":"villas 1993", "valor": 54},
    {"año": 1993, "name":"alfabetizacion 1993", "valor": 50},
    {"año": 1993, "name":"Esp. de vida 1993", "valor": 59},
    {"año": 1994, "name":"pobreza nacional 2009", "valor": 29},
    {"año": 1994, "name":"villas 2009", "valor": 29},
    {"año": 1994, "name":"alfabetizacion 2009", "valor": 63},
    {"año": 1994, "name":"Esp. de vida 2009", "valor": 66},
    {"año": 1995, "name":"pobreza nacional 2011", "valor": 21},
    {"año": 1995, "name":"villas 2011", "valor": 26},
    {"año": 1995, "name":"alfabetizacion 2011", "valor": 69},
    {"año": 1995, "name":"Esp. de vida 2011", "valor": 67},
    {"año": 1996, "name":"pobreza nacional 2017", "valor": 60},
    {"año": 1996, "name":"villas 2017", "valor": 24},
    {"año": 1996, "name":"alfabetizacion 2017", "valor": 75},
    {"año": 1996, "name":"Esp. de vida 2017", "valor": 70}
  ] //1993 2009  2011 2017
  var visualization = d3plus.viz()
    .container("#whati")
    .data(data)
    .type("bar")
    .id("name")
    .x("año")
    .y("valor")
    .draw()

