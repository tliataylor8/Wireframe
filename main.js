
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