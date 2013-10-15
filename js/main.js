$(document).ready(function(){

  $('[data-filter]').click(function(){
    var $this = $(this),
        filter = $this.data('filter'),
        filterClass = '.category-' + filter ;

    console.log(filter) ;

    if(filter !== 'all') {
      console.log('filtering on', filterClass) ;
      $('.tile:not(' + filterClass + ')').fadeOut() ;
      $(filterClass).fadeIn() ;
    }
    else{
      console.log('showing all') ;
      $('.tile').fadeIn() ;
    }
  

  }) ;

  $(window).scroll(function(ev){

    var headerHeight = 720,
        scrollTop = $(document).scrollTop(),
        opacity = (700 / scrollTop) / 10,
        marginTop = 20 - scrollTop,
        reverseOpacity = 0.95 - opacity ;

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