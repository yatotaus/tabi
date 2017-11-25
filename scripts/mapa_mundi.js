var sample_data = [
  {"value": 2315987123, "country": "nausa", "name": "United States"},
  {"value": 38157121349, "country": "aschn", "name": "China"},
  {"value": 21891735098, "country": "euesp", "name": "Spain"},
  {"value": 9807134982, "country": "sabra", "name": "Brazil"}
]
// instantiate d3plus
var visualization = d3plus.viz()
  .container("#viz")        
  .data(sample_data)        
  .coords("http://d3plus.org/topojson/countries.json") // pass topojson coordinates
  .type("geo_map")          
  .id("country")            
  .text("name")             
  .color("value")           
  .tooltip("value")         
  .draw()                   