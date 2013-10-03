$(document).ready(function(){

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