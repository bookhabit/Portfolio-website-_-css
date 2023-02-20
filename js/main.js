$(document).ready(function(){

    var mySwiper = new Swiper('.portfolio-slides', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,      
        slidesPerView: 4,
        spaceBetween:30,      
        // Navigation arrows
        navigation: {
          nextEl: '.controls .next',
          prevEl: '.controls .prev',
        },
     
    });

    var menuToggleBtn = $('.menu-toggle-btn'),
        mainMenu = $('.main-menu');
    
    menuToggleBtn.click(function(){
      mainMenu.slideToggle();
    });

});