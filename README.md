# leaflet-challenge
Module 15 Challenge: Mapping <br>
Contributor: Katy Yelle

### Challenge Context
The United States Geological Survey (USGS) is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change.   Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data.  They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it.  In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet. 

### Repository Structure
    -Main Folder
        -.gitignore
        -README.md
    
    -Sub Folders
        -images
            -Map1.png
            -MapPopUp.png
        -Leaflet-Part-1
            -static
                -js
                    -logic.js
                -css
                    -style.css
            -index.html
        -Leaflet-Part-2

### Overview
Leaflet Part 1
The JavaScript file plots all earthquakes from the USGS 'Past 7 Days' dataset. Earthquakes with higher magnitudes are represented with a larger radius and earthquakes with greater depths appear darker in color. Thank you to Learning Assistant Liang Yam for helping me troubleshoot my getColor function and ensuring I had to the correct calls in the geoJSON file. On top of the Leaflet documentation, I found http://www.java2s.com/example/javascript/leaflet/leaflet-legend-showing.html to be very helpful with creating the legend for my map.

![Map Display](/images/Map1.png "Map Display") 

Each earthquake marker has a popup that displays the location name of the earthquake, magnitude and depth. 

![Map Popup](/images/MapPopUp.png "Map Popup") 

Leaflet Part 2
This is a holding folder to eventually plot a second dataset on the map to illstruate the relationship between tectonic plates and seismic activity. 