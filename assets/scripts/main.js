(function() {
    var  mn = $(".main-header");
    var mns = "main-header-scrolled";
    var hdr = mn.height();

    
    function videoVisible() { 
        if (!Modernizr.touch) {   
            var $elem = $('.jumbotron')
            var $video = $('#bgvid'); 
            var visibleAtTop = $elem.offset().top + $elem.height() >= $(window).scrollTop(); 
            var visibleAtBottom = $elem.offset().top <= $(window).scrollTop() + $(window).height(); 

            if (visibleAtTop && visibleAtBottom) { 
                if(!$video.hasClass('on')) {
                    $video.get(0).play();
                    $video.addClass('on');  
                    $('.careers').addClass('hidden');
                    $('.video__wrapper').addClass('video-visible');
                }

            } else { 
                if($video.hasClass('on')) {
                    $video.get(0).pause();
                    $video.removeClass('on');       

                    $('.careers').removeClass('hidden');
                    $('.video__wrapper').removeClass('video-visible');
                }

            }    
        }  
         
    }
    
    $(window).scroll(function() {
      if( $(this).scrollTop() > hdr ) {
        mn.addClass(mns);
      } else {
        mn.removeClass(mns);
      }
        
        
        videoVisible();    
    });
    
    new WOW().init();
    $(document).ready(function(){
        videoVisible();  
        
        
        
        
    });
     
})();


