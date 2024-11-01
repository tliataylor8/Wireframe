
// These 3 versiond for NAVBAR didn;t work
// V1
// function dropdownMenu() {
//     const dropdown = document.getElementsByClassName("dropdown-menu");
//     dropdown.classList.toggle("show");
// }
// console.log(dropdownMenu);
// V2
// const dropdownToggle = document.getElementById('navbarDropdown');
// const dropdownMenu = new bootstrap.Dropdown(dropdownToggle);
// dropdownToggle.addEventListener('click', function() {
//     dropdownMenu.toggle();
// });
// V3
// document.addEventListener('DOMContentLoaded', function() {
//     const dropdownToggle = document.getElementById('navbarDropdown');
//     const dropdownMenu = new bootstrap.Dropdown(dropdownToggle);
//     dropdownToggle.addEventListener('click', function() {
//         dropdownMenu.toggle();
//     });
// });

const dropdownToggle = document.getElementById('navbarDropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownToggle.addEventListener('click', function(){
    // alert('Greg is the best!');

    if (dropdownMenu.style.display === "none"){
        dropdownMenu.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
    }
});

// I was trying to display:block for the hidden navigation items when screen gets smaller
// const navbarToggler = document.querySelector('navbar-toggler');
// const navbarTogglerIcon = document.querySelector('navbar-toggler-icon');

// navbarToggler.addEventListener('click', function(){
//     alert('Lia is awesome');

//     if (navbarToggler.style.display === "none"){
//         navbarToggler.style.display = "block";
//     } else {
//         navbarToggler.style.display = "none";
//     }
// });

// Initialize the map and geocoder
let map;
let geocoder;

function initMap() {
    geocoder = new google.maps.Geocoder();
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: { lat: 40.7128, lng: -74.0060 }, // Default is NYC
    });
}

// Display the map based on location input
function displayMap(event) {
    event.preventDefault(); // Prevent form from reloading the page
    const location = document.getElementById("location").value;
    
    if (location) {
        geocoder.geocode({ address: location }, (results, status) => {
            if (status === "OK") {
                map.setCenter(results[0].geometry.location);
                new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                });
            } else {
                alert("Location not found: " + status);
            }
        });
    }
}
