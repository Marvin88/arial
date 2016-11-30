$(document).ready(function(){
    
    
    if($('body').width()>=768&& $('#nashi-klienti').width()<1200){
        
        console.log($('body').width());
        setTimeout(function(){
            $('.text-block').height($('.my_slider .bx-viewport').height());
            $('.about-inner-text').height('50%');
                                    
        }, 300);
        
    }
    else{
        console.log($('body').width());
    }
    $('.my_bxslider').bxSlider({
         nextSelector: '#slider-next',
      prevSelector: '#slider-prev',
      nextText: '<img src="/images/arrow-right.png">',
      prevText: '',
      mode: 'fade',
      minSlides: 1,
      infiniteLoop: true,
      auto: false,
      pager: true
    });
    if($('#nashi-klienti').width()>1024){
        $('.slider-klienti').bxSlider({
          minSlides: 6,
          maxSlides: 6,
          slideWidth: 200,
          slideMargin: 10,
          infiniteLoop: true,
          auto: true,
          moveSlides: 1,
          pager: false
        });
    }
    else if($('#nashi-klienti').width()>=768&& $('#nashi-klienti').width()<1200){
        $('.slider-klienti').bxSlider({
          minSlides: 4,
          maxSlides: 4,
          slideWidth: 200,
          slideMargin: 0,
          infiniteLoop: true,
          auto: true,
          moveSlides: 1,
          pager: false
        });
        
    }
     else if($('#nashi-klienti').width()<768){
        $('.slider-klienti').bxSlider({
          minSlides: 3,
          maxSlides: 3,
          slideWidth: 200,
          slideMargin: 0,
          infiniteLoop: true,
          auto: true,
          moveSlides: 1,
          pager: false
        });
    }
    $('.preimushestva-items-bx').bxSlider({
          minSlides: 1,
          maxSlides: 1,
          slideWidth: 200,
          slideMargin: 10,
          infiniteLoop: true,
          auto: true,
          moveSlides: 1,
          pager: false
     });
   
    //initialize();
    $('.contacts-left').click(function(event){
        event.preventDefault();
        $('.contacts-right').removeClass('active');
        $(this).addClass('active');
        $('.tipo-map-img').eq(0).css('opacity', '0');
        $('.tipo-map-img').eq(0).css('height', '0');        
        $('.tipo-map-img').eq(0).css('transition', 'all 0.5s');
        $('.tipo-map-img').eq(0).css('z-index', '0');
        $('.tipo-map-img').eq(1).css('opacity', '1');
        $('.tipo-map-img').eq(1).css('z-index', '2');
        $('.tipo-map-img').eq(1).css('transition', 'all 0.5s');
        $('.tipo-map-img').eq(1).css('height', 'auto');        
        
    })
    $('.contacts-right').click(function(event){
        event.preventDefault();
        $('.contacts-left').removeClass('active');
        $(this).addClass('active');
        $('.tipo-map-img').eq(1).css('opacity', '0');
        $('.tipo-map-img').eq(1).css('z-index', '0');
        $('.tipo-map-img').eq(1).css('height', '0');        
        $('.tipo-map-img').eq(1).css('transition', 'all 0.5s');
        $('.tipo-map-img').eq(0).css('opacity', '1');
        $('.tipo-map-img').eq(0).css('z-index', '2');
        $('.tipo-map-img').eq(0).css('transition', 'all 0.5s');
        $('.tipo-map-img').eq(0).css('height', 'auto');        
        
    })
    
    $(window).resize(function() {
        $('.text-block').height($('.my_slider .bx-viewport').height());
        
        if($('#nashi-klienti').width()<1024){
            $('.slider-klienti').bxSlider({
              minSlides: 3,
              maxSlides: 3,
              slideWidth: 200,
              slideMargin: 10,
              infiniteLoop: true,
              auto: true,
              moveSlides: 1,
              pager: false
            });    
        }
        else if($('#nashi-klienti').width()>768<1200){
            $('.slider-klienti').bxSlider({
              minSlides: 4,
              maxSlides: 4,
              slideWidth: 200,
              slideMargin: 10,
              infiniteLoop: true,
              auto: true,
              moveSlides: 1,
              pager: false
            });    
        }
	});
    $('.close-menu').on('click', function(){
        overlayHide();
        menuClose();
        })
    $('.menu-overlay').on('click', function(){
        overlayHide();
        menuClose();
    })
    $('.top-menu-wrapper').on('click', function(){
         overlayShow();
         menuOpen();
    })
    $('.nav-block').on('click', function(){
        console.log($(this));
        porfolioBlockToogle($(this));
    })
});
function porfolioBlockToogle(form){
    console.log(form);
    console.log($(form).find('.portfolio-items'));
    if($(form).find('.portfolio-items').hasClass('active')){
        $(form).find('.portfolio-items').removeClass('active');
        $(form).find('.nav-block-list').removeClass('active');
    }
    else{
         $(form).find('.portfolio-items').addClass('active');
          $(form).find('.nav-block-list').addClass('active');
    }
}
function menuOpen(){
    $('.mobile-dropdown-menu').addClass('active');
}
function menuClose(){
    $('.mobile-dropdown-menu').removeClass('active');
}
function overlayHide(){
    $('.menu-overlay').removeClass('active');
}
function overlayShow(){
    $('.menu-overlay').addClass('active');
}

