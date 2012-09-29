$(document).ready(function() {

/* Load facebook feed from the feed.html doc */
$('#feedwrap').load('fb_feed/feed.html #feedcontent');

/* Using Fancybox 2 it's now responsive */
$('.fancybox').fancybox({
    helpers : {
        overlay : {
            css : {
                'background' : 'rgba(255, 255, 255, 0.90)'
            }
        }
    }
});
/* end Fancybox 2 */

/* Using Fancybox 2 it's now responsive */
$('.gallerybox').fancybox({
    helpers : {
        overlay : {
            css : {
                'background' : 'rgba(255, 255, 255, 0.90)'
            }
        }
    }
});
/* end Fancybox 2 */

/* forget why this is here...may be able to take out */
function disableLink(e) {
 // cancels the event
    e.preventDefault();
    return false;
}

/* Write first link on mobile to the page , turn off on desktop and tablet */
$(window).bind('load resize orientationchange', function(){   
      
var windowWidth = $(window).width();

        if (windowWidth < 700) {
                $("#navlist li .first").attr('href', 'http://www.google.com/')
                //need to set up for other links

                
        }
        else if(windowWidth > 700 && windowWidth < 1000){

                $("#navlist li .first").attr('href', '#')
                // need to set for other link
        } 
   });
         
/* Toggle nav for mobile */ 

        $("#mblnav").on("click", function(){
        $("#navlist").slideToggle();
        $(this).toggleClass("active");
    });

/* This is the bit for the touch-screen dropdown plug-in */    
// $('#navlist > li').make_dropdown();

/* Flexslider Setup */

 $('.flexslider').flexslider({
        animation: "slide",
        controlNav: true,
        slideshowSpeed: 4500,
        animationDuration: 80,
        pauseOnAction: false, 
        touch: true, 
        slideshow:true,
        pauseOnAction: false,
        start: function(slider){
          $('body').removeClass('loading');
        }
      });

/* Make the whole footernav navtabs clickable */
 $(".navtab").click(function(){
     window.location=$(this).find("a").attr("href"); 
     return false;
});

//////////Code for the top header up and down//////////

   $('.triggerdown').click(function(){
        $('#drawerwrap').animate({height:'10.5em'}, 500);
        $('#loginlink').removeClass('triggerdown');
    })


    $('.triggerup').live('click', function() {
        $('#drawerwrap').animate({height:'0em'}, 500);
        $('#loginlink').addClass('trigger');
    });

     $('#drawerclose').live('click', function() {
        $('#drawerwrap').animate({height:'0em'}, 500);
        $('#loginlink').addClass('trigger');
    });

    $('#login').click(function(){
        $('.login').css("display","list-item");
        return false;
    })  

});
////////// end document ready function //////////
        
////////// Something for the facebook feed /////////   
////////// Array Remove - By John Resig (MIT Licensed) /////////   
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};
