// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//= require turbolinks
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require jquery.js
//= require bootstrap-sprockets
var ready;
ready = function(){
 var mq = window.matchMedia( "(min-width: 768px)" );
//   if (mq.matches)
//   {
//     $(".dropdown").on("click", function() {
//       $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
//       $(this).toggleClass('open');

//     },
//     function(){
//       $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
//       $(this).toggleClass('open');

//     });
//   }
   $("button.navbar-toggle").click(function(){
      $("#overlay").toggle();
     });
    $("#overlay").click(function(){
      $("#overlay").css("display", "none");
      $("#bs-example-navbar-collapse-1").attr("class", "navbar-collapse collapse");
    }); 
 $(".dropdown").hover(function() {
   $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");

   $(this).toggleClass('open');
 }, function(){
   $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");

   $(this).toggleClass('open');
 });

 
  
  $("#eventsnews").click(function(){
    $("#eventsnewspage").css("display", "block");
    $("#eventsnews").addClass("selected");
    $("#eventsgallery").removeClass("selected");
    $("#eventsgallerypage").css("display", "none");    
  });
  $("#eventsgallery").click(function(){
    $("#eventsnewspage").css("display","none");
    $("#eventsgallerypage").css("display", "block");
    $("#eventsgallery").addClass("selected");
    $("#eventsnews").removeClass("selected");

  });
  
};

$(document).ready(ready);
$(document).on('page:load', ready);