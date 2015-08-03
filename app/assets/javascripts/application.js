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
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require jquery
//= require bootstrap-sprockets
//= require jquery.turbolinks

$(document).on('page:load',function(){
 var mq = window.matchMedia( "(min-width: 320, max-width: 568)" );
  if (mq.matches){
    $(".dropdown").on("click", function() {
      $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
      $(this).toggleClass('open');

    },
    function(){
      $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
      $(this).toggleClass('open');

    });
     
  }
   $("button.navbar-toggle").click(function(){
      $("#overlay").toggle();
     });
    $("#overlay").click(function(){
      $("#overlay").css("display", "none");
      $("#bs-example-navbar-collapse-1").attr("class", "navbar-collapse collapse");
    }); 
 $(".dropdown").on("hover",           
  function() {
      $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
      $(this).toggleClass('open');
//       $('b', this).toggleClass("caret caret-up");                
  },
  function() {
      $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
      $(this).toggleClass('open');
//       $('b', this).toggleClass("caret caret-up");                
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
  
  $(".right carousel-control").on("click",function(){
    $("#myCarousel").carousel('next');
  });
  $(".left carousel-control").on("click",function(){
    $("#myCarousel").carousel('prev');
  });
  
});
