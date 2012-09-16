$(document).ready(function() {
     
function disableLink(e) {
 // cancels the event
    e.preventDefault();

    return false;
}
 
////////// Write first link on mobile to the page , turn off on desktop and tablet

$(window).bind('load resize orientationchange', function(){   
      
var windowWidth = $(window).width();

        if (windowWidth < 700) {
                //$("#navlist li .first").click(function(event) { return true; });
                //$('#navlist li .first').unbind('click', disableLink);
                $("#navlist li .first").attr('href', 'http://www.google.com/')
                //need to set up for other links

                
        }
        else if(windowWidth > 700 && windowWidth < 1000){

                $("#navlist li .first").attr('href', '#')
                // need to set for other link
        } 
   });


////////// Load facebook facebook status updates
////////// For loading of the Facebook feed, using Yahoo! Pipes for cross-domain functionality.

    $.ajax({
        type: "GET",
        url: "http://pipes.yahoo.com/pipes/pipe.run?_id=5c29f5837f7962720b67f40cea28b3ac&_render=rss",
        dataType: "xml",
        success: function(xml) {
            $('#feed-holder').html('<ul></ul>');
            for(i = 0;i<3;i++){
                var $rssItem = $(xml).find('item:eq('+i+')');
                var title = $rssItem.find('title').text();
                var link = $rssItem.find('link').text();
                var date = $rssItem.find('pubDate').text();
                //date = date.replace(/\,/g,''); 
                var date_array = date.split(" ");
                var date_string = date_array.remove(-2,-1);
                
                
                $('#feed-holder ul').append('<li> <a href="' + link + '" target="_blank"><div class="linkbox"><div class="fb-date">'+ date_array.join(' ') +'</div><div class="fb-title">' + title + '</div></a></li><div class="clearfix"></div>');        
            } 
        }
    });
//end of facebook
         
/* toggle nav for mobile */
        $("#mblnav").on("click", function(){
        $("#navlist").slideToggle();
        $(this).toggleClass("active");
    });
    
$('#navlist > li').make_dropdown();

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

//////////Make the whole footernav navtabs clickable/////////
 $(".navtab").click(function(){
     window.location=$(this).find("a").attr("href"); 
     return false;
});

//////////Code for the top header up and down//////////

   $('.triggerdown').click(function(){
        $('#drawerwrap').animate({height:'10.5em'}, 500);
        //$('#fblink').removeClass('triggerdown');
        //$('#twitlink').removeClass('triggerdown');
        $('#loginlink').removeClass('triggerdown');
    })


    $('.triggerup').live('click', function() {
        $('#drawerwrap').animate({height:'0em'}, 500);
        //$('#fb').addClass('trigger');
        //$('#twit').addClass('trigger');
        $('#loginlink').addClass('trigger');
    });

     $('#drawerclose').live('click', function() {
        $('#drawerwrap').animate({height:'0em'}, 500);
        //$('#fb').addClass('trigger');
        //$('#twit').addClass('trigger');
        $('#loginlink').addClass('trigger');
    });

    /*$('#fblink').click(function(){
        $('.fb').css("display","list-item");
        $('.twit').css("display","none");
        $('.login').css("display","none");
        return false;
    })

    $('#twitlink').click(function(){
        $('.fb').css("display","none");
        $('.twit').css("display","list-item");
        $('.login').css("display","none");
        return false;
    })
    */

    $('#login').click(function(){
        $('.fb').css("display","none");
        $('.twit').css("display","none");
        $('.login').css("display","list-item");
        return false;
    })


/////////   

});/*end document ready function*/
        
        // Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};
