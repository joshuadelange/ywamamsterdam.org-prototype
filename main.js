$(document).ready(function(){

  $(window).scroll(function(ev){
    var headerHeight = 720,
        scrollTop = $(document).scrollTop(),
        opacity = (700 / scrollTop) / 10,
        reverseOpacity = 0.95 - opacity ;

    console.log('opacity', opacity) ;
    console.log('reverseOpacity', reverseOpacity) ;

    if(opacity > 0) {

      // $('video, header h1').css('opacity', opacity) ;
      $('.top').css('backgroundColor', 'rgba(247, 247, 247, ' + reverseOpacity + ')') ;
      $('.top').css('borderBottomColor', 'rgba(226, 226, 226, ' + reverseOpacity + ')') ;

      if(opacity > 0.45) {
        $('nav ul li').css({'font-family': 'Novecentowide-Light'}) ;
        $('.top nav ul li a').css({'color': 'white', 'font-size': '17px'}) ;
        $('.top nav ul li a:hover').css({'color': 'white', 'border-bottom-color': 'white'}) ;
      }
      else {
        $('nav ul li').css({'font-family': 'Novecentowide-Normal'}) ;
        $('.top nav ul li a').css({'color': '#474747', 'font-size': '15px'}) ;
        $('.top nav ul li a:hover').css({'color': '#474747', 'border-bottom-color': '#474747'}) ;
      }
  
    }

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

}) ;