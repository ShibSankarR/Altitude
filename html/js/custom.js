
jQuery(document).ready(function () {

// Menu
jQuery('.stellarnav').stellarNav({
  theme: 'light',
  breakpoint: 960,
  position: 'right',
  //phoneBtn: '18009997788',
  //locationBtn: 'https://www.google.com/maps'
});




$(".search-btn").click(function(){
  $(".search-area").fadeIn();
});
$(".dismiss").click(function(){
  $(".search-area").fadeOut();
});






});