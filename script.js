/*window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
} else {
    header.classList.remove("sticky");
}
}

$("#sec-1").click(function() {
    $('html, body').animate({
        scrollTop:        $("#one").offset().top-66
    }, 1000);
 return false;
});

$("#sec-2").click(function() {
    $('html, body') .animate({
        scrollTop:        $("#two").offset().top-112
    }, 1000);
 return false;
});

$("#sec-3").click(function() {
    $(' html,body') .animate({
        scrollTop:        $("#three").offset().top-112
    }, 1000);
 return false;
});

$("#sec-4").click(function() {
 $(this).addClass("active");
    $('html,body ') .animate({
        scrollTop:        $("#four").offset().top-112
    }, 1000);
 return false;
});

*/


$(document).ready(function(){
    var docEl = $(document),
        headerEl = $('header'),
        headerWrapEl = $('.nav'),
        navEl = $('nav'),
        linkScroll = $('.scroll');
    
    docEl.on('scroll', function(){
      if ( docEl.scrollTop() > 70 ){
        headerEl.addClass('fixed-to-top');
        headerWrapEl.addClass('fixed-to-top');
        navEl.addClass('fixed-to-top');
      }
      else {
        headerEl.removeClass('fixed-to-top');
        headerWrapEl.removeClass('fixed-to-top');
        navEl.removeClass('fixed-to-top');
      }
    });
    
    linkScroll.click(function(e){
        e.preventDefault();
        $('body, html').animate({
           scrollTop: $(this.hash).offset().top
        }, 500);
     });
  });




  function openNav() {
    document.getElementById("myNav").style.width = "100%";


  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

