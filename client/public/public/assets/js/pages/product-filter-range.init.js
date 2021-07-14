// import $ from 'jquery'
/*
Template Name: Minible - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Property list filter init js
*/


const spot = document.getElementById('pricerange');
spot.innerHTML = ionRangeSlider({
    skin: "round",
    type: "double",
    grid: true,
    min: 0,
    max: 1000,
    from: 200,
    to: 800,
    prefix: "$"
});

// spot.innerHTML = "hey"

// $(document).ready(function () {

//     $("#pricerange").ionRangeSlider({
//         skin: "round",
//         type: "double",
//         grid: true,
//         min: 0,
//         max: 1000,
//         from: 200,
//         to: 800,
//         prefix: "$"
//     });

// });