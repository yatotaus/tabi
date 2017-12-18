var sample_data = [
  {"Cantidad de pobres a nivel nacional %": 42157121349, "country": "asafg", "name": "Afganistan"},
  {"Cantidad de pobres a nivel nacional %": 22157121349, "country": "asind", "name": "India"},
  {"Cantidad de pobres a nivel nacional %": 22157121349, "country": "askhm", "name": "Camboya"},

  {"Cantidad de pobres a nivel nacional %": 58807134982, "country": "cahti", "name": "Haití"},
  {"Cantidad de pobres a nivel nacional %": 28807134982, "country": "sacol", "name": "Colombia"},
  {"Cantidad de pobres a nivel nacional %": 33307134982, "country": "saven", "name": "Venezuela"},
    
  {"Cantidad de pobres a nivel nacional %": 76157121349, "country": "afner", "name": "Niger"},
  {"Cantidad de pobres a nivel nacional %": 66157121349, "country": "afcod", "name": "Rep. Democrática del Congo"},
  {"Cantidad de pobres a nivel nacional %": 50157121349, "country": "afmli", "name": "Mali"},

  {"Cantidad de pobres a nivel nacional %": 34157121349, "country": "ocfji", "name": "Fiyi"},
  {"Cantidad de pobres a nivel nacional %": 12157121349, "country": "ocslb", "name": "Islas Salomon"},
  {"Cantidad de pobres a nivel nacional %": 39157121349, "country": "ocpng", "name": "Papúa Nueva Guinea"}
]

  // instantiate d3plus
var visualization = d3plus.viz()
  .container("#viz")        // container DIV to hold the visualization
  .data(sample_data)        
  .coords("http://d3plus.org/topojson/countries.json") // pass topojson coordinates
  .type("geo_map")          // visualization type
  .id("country")            // key for which our data is unique on
  .text("name")             
  .color("Cantidad de pobres a nivel nacional %")           
  .tooltip("value")         
  .draw()                   
