jQuery(function($) {
  
    var page1 = $('.page-1');
    var page2 = $('.page-2');
    var page3 = $('.page-3');
    var tl = new TimelineLite();
    var button = $('.button');
    
    var animationArray = [];
    
    TweenLite.defaultEase = Linear.easeNone;
  
    $('.splashpage').each(function() {
      
      var tl2 = new TimelineLite();
      tl2.pause();
      tl2.to($(this).find(".l1"), 0.2, {scale:1})
          // animate border top left
          .to($(this).find(".corner-top-bottom"), 0.1, {scale: 1})
          .to($(this).find(".corner-top-right"), 0.1, {scale: 1})
          .to($(this).find(".l2"), 0.2, {scale: 1})
          // animate border top left
          .to($(this).find(".corner-top-right-left"), 0.1, {scale: 1})
          .to($(this).find(".corner-top-right-bottom"), 0.1, {scale: 1})
          .to($(this).find(".l3"), 0.2, {scale: 1})
           // animate border bottom right
          .to($(this).find(".corner-bottom-right-top"), 0.1, {scale: 1})
          .to($(this).find(".corner-bottom-right-left"), 0.1, {scale: 1})
          .to($(this).find(".l4"), 0.2, {scale: 1})
          // animate border bottom left
          .to($(this).find(".corner-bottom-left-right"), 0.1, {scale: 1})
          .to($(this).find(".corner-bottom-left-top"), 0.1, {scale: 1})
          
          // animate image
          .to($(this), 0.5, { right:0,  left: 0,  ease: Power2.easeOut  })
          .to($(this).find('img'), 0.8, {width: '110vw', ease: Power0.easeInOut}, '-=0.3')
      
          .to($(this).find('.button-outer'),.3,{visibility: 'hidden', height: 0 }, '-=0.55')
          .to($(this).find('.splashpage__header'),.5,{top: '1.5em', y:0, force3D:true}, '-=0.5')
                 
      
          .set($(this).find('.splashpage__content-text'),{height: 'auto'})
          .from($(this).find('.splashpage__content-text'),0.5,{height: 0,immediateRender:false});
    
                        
      $(this).data('timeline', tl2);
      animationArray.push(tl2);
    });
  
    $('.splashpage').on('click', function(e) {
      
      if(checkIsAnimating()) {
        e.preventDefault();
        return;      
      }
     
      
      TweenLite.set($(this).find(".square"), {visibility:"visible"});
  
      
      var tl2 = $(this).data('timeline');
      if($(this).hasClass('active')) {
        tl2.progress(1);
        tl2.reverse();
        
      }  else {
        // set lower zIndex to inactive Pages
        $('.splashpage').css('z-index','0');
        $(this).css('z-index','13');
        tl2.play();
      }
      
      
      tl2.timeScale(1) ;
      
      
      $(this).toggleClass('active');
      
     
    });
    
    /**
      * check if animation is running
      */
    function checkIsAnimating() {
      var isAnimating = false;
      
      animationArray.forEach(function(timeline) {
        if(timeline.isActive()) {
          isAnimating = true;
        } 
      });
      
      return isAnimating;
    }
      
  });
  