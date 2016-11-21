$(document).ready(function(){
    
    
    
    
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
    //initialize();
    $('.contacts-left').click(function(event){
        event.preventDefault();
        $('.contacts-right').removeClass('active');
        $(this).addClass('active');
        $('.tipo-map-img').eq(0).css('opacity', '0');
        $('.tipo-map-img').eq(0).css('transition', 'all 0.5s');
        $('.tipo-map-img').eq(0).css('z-index', '0');
        $('.tipo-map-img').eq(1).css('opacity', '1');
        $('.tipo-map-img').eq(1).css('z-index', '2');
        $('.tipo-map-img').eq(1).css('transition', 'all 0.5s');
        
    })
    $('.contacts-right').click(function(event){
        event.preventDefault();
        $('.contacts-left').removeClass('active');
        $(this).addClass('active');
        $('.tipo-map-img').eq(1).css('opacity', '0');
        $('.tipo-map-img').eq(1).css('z-index', '0');
        $('.tipo-map-img').eq(1).css('transition', 'all 0.5s');
        $('.tipo-map-img').eq(0).css('opacity', '1');
        $('.tipo-map-img').eq(0).css('z-index', '2');
        $('.tipo-map-img').eq(0).css('transition', 'all 0.5s');
        
    })
});
