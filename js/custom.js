// map.js

let map;
let center;

// Initialize map
// function initialize() {
//   const mapOptions = {
//     zoom: 16,
//     center: { lat: 38.6385149, lng: -121.5323429 }, // Replace with your care home's coordinates
//     scrollwheel: false
//   };

//   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

//   // Add a marker at the care home location
//   new google.maps.Marker({
//     position: mapOptions.center,
//     map: map,
//     title: "Care Connect Home"
//   });

//   google.maps.event.addDomListener(map, 'idle', calculateCenter);
//   google.maps.event.addDomListener(window, 'resize', () => map.setCenter(center));
// }

// Capture center for resizing
function calculateCenter() {
  center = map.getCenter();
}

// function loadGoogleMap(){
//   var script = document.createElement('script');
//   script.type = 'text/javascript';

//   // IMPORTANT: replace with your real key
//   script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4PLhXLpAp_9StsG5j5tPwpjw3qjhu4QM&callback=initialize';

//   script.async = true;
//   script.defer = true;

//   document.body.appendChild(script);
// }

// Load map when DOM is ready
document.addEventListener('DOMContentLoaded', loadGoogleMap);
