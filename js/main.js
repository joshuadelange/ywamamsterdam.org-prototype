var $ = $ ;

$(document).ready(function(){

  $(window).scroll(function(ev){

    /*
    var headerHeight = 720,
        scrollTop = $(document).scrollTop(),
        opacity = (700 / scrollTop) / 10,
        marginTop = 20 - scrollTop,
        reverseOpacity = 0.95 - opacity ;

    if(reverseOpacity === -Infinity) {
      reverseOpacity = 0;
    }

    if(marginTop > 0){
      $('.top').css('marginTop', 20 - scrollTop + 'px') ;
    }
    else {
      $('.top').css('marginTop', 0 + 'px') ;
    }

    if(opacity > 0) {

      $('.top').css('backgroundColor', 'rgba(247, 247, 247, ' + reverseOpacity + ')') ;
      $('.top').css('borderBottomColor', 'rgba(226, 226, 226, ' + reverseOpacity + ')') ;

      if(opacity > 0.45) {
        $('.top nav ul li a').removeClass('with-white-bg') ;
      }
      else {
        $('.top nav ul li a').addClass('with-white-bg') ;
      }
  
    }
    */

  }) ;

  $('video').bind('playing', function(){
    $(this).show() ;
    $(this).parent().find('img').remove() ;
  }) ;

  $('.slideshow').click(function(ev){

    var $this = $(this),
        center = window.innerWidth / 2,
        imageWidth = $this.find('img').css('width') ;

    if(ev.pageX > center) {
      //go backward
      $this.find('.image-wrapper').animate({marginLeft: '-=' + imageWidth}) ;
    }
    else {
      //go forward
      $this.find('.image-wrapper').animate({marginLeft: '+=' + imageWidth}) ;
    }

  }) ;

  $('.timeline a.marker').click(function(){

    var $this = $(this),
        $timeline = $this.closest('.timeline'),
        id = $this.data('jump-to'),
        slideIndex = $timeline.find('#' + id).index(),
        slideWidth = parseInt($timeline.find('.slide:first-of-type').css('width'), 10),
        cursorLeft = parseInt($this.css('left'), 10),
        nextMargin = (slideIndex * slideWidth) * -1 ;

        $timeline.find('.cursor').animate({left: cursorLeft}) ;
        $timeline.find('.slides').animate({marginLeft: nextMargin}) ;

  }) ;

  $('.timeline .slide').click(function(ev){
    
    var $this = $(this) ;

    if($this.get(0).tagName !== 'A') {

      var center = window.innerWidth / 2,
          $slide = $(this).closest('.slide'),
          slideWidth = parseInt($slide.css('width'), 10),
          $slides = $this.closest('.slides'),
          numOfSlides = $slides.find('.slide').length,
          currentMargin = parseInt($slides.css('marginLeft'), 10),
          nextMargin = currentMargin,
          maxMargin = (numOfSlides * slideWidth) * -1,

          //cursor stuff
          id = $slide.attr('id'),
          $timeline = $(this).closest('.timeline'),
          $marker = $timeline.find('[data-jump-to="' + id + '"]'),
          $nextMarker = $marker ;

      if(ev.pageX > center) {
        //go forward
        $nextMarker = $marker.next() ;
        nextMargin = currentMargin - slideWidth ;
      }
      else {
        //go backward
        $nextMarker = $marker.prev() ;
        nextMargin = currentMargin + slideWidth ;
      }

      var cursorLeft = $nextMarker.css('left') ;

      $timeline.find('.cursor').animate({left: cursorLeft}) ;

      if(nextMargin <= 0 && nextMargin > maxMargin) {
        $this.closest('.slides').animate({marginLeft: nextMargin}) ;
      }

    }

  }) ;

}) ;