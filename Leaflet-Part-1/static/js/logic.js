// Create a map object.
let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });
  
// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

//Store URL for weekly earthquake data
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

//Perform a GET request and create markers
d3.json(url).then(function(data) {
    console.log(data.features);
    createFeatures(data.features);
    
});

// Create function that determines the color of the marker based on earthquake depth, deeper = darker
//Thank you to Learning Assistant Liang Yam for helping me troubleshoot and find my error in this section
function getColor(depth) {
    let color = "";
    if (depth < 2) {
        color = "#ffffb2";
    }
    else if (depth < 4) {
        color = "#fed976";
    }
    else if (depth < 6) {
        color = "#feb24c";
    }
    else if (depth < 8) {
        color = "#fd8d3c";
    }
    else if (depth < 10) {
        color = "#f03b20";
    }
    else {
        color = "#bd0026";
    }
    return color
}

// Create function that determines the size of the marker based on the magnitude of the quake
function markerSize(magnitude) {
    return magnitude * 4
}

function createFeatures(earthquakeData) {
//Thank you to Learning Assistant Liang Yam who helped me provide the correct references to 'depth' in the data
    L.geoJSON(earthquakeData, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                                            radius: markerSize(feature.properties.mag),
                                            color: getColor(feature.geometry.coordinates[2]),
                                            fillColor: getColor(feature.geometry.coordinates[2]),
                                            fillOpacity: 0.6
            });
        },
        onEachFeature: function (feature,layer) {
            layer.bindPopup(`<h3>${feature.properties.place}</h3><hr><p>Magnitude: ${feature.properties.mag} Depth: ${feature.geometry.coordinates[2]}</p>`);
        }
    }).addTo(myMap);
}

  // Set up the legend.
  //http://www.java2s.com/example/javascript/leaflet/leaflet-legend-showing.html
let legend = L.control({ position: "bottomright" });
legend.onAdd = function(myMap) {
    let div = L.DomUtil.create("div", "info legend"),
        grades = [0, 2, 4, 6, 8, 10],
        labels = [],
        from, to; 
    for (let i=0; i <grades.length; i++) {
        from = grades[i];
        to = grades [i + 1];
        labels.push(
            '<i style="background:' + getColor(from + 1) + '">"     "</i> ' +
            from + (to ? '&ndash;' + to : '+'));
    }
    div.innerHTML = "<h3>Earthquake Depth</h3>" + labels.join('<br>');
    return div;
  };

  // Adding the legend to the map
  legend.addTo(myMap);

