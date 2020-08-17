// console.log("marie and sofia are so smart");

import mapboxgl from "mapbox-gl";
import buildMarker from "./marker.js";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic29mamF2ZWQiLCJhIjoiY2tkeW9kOWNmMWhwZDJxbm9oaXNoeWhueiJ9.E4mNU0Gtu2cYvHz7C1F9vw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10", // mapbox has lots of different map styles available.
});

/* const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); // [-87.641, 41.895] for Chicago
 */
const marker = buildMarker("hotel", [-74.009151, 40.705086]);
marker.addTo(map);
