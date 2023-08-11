$(document).ready(function(){
    var mySwiper = new Swiper(".portfolio-slides", {
        direction: "horizontal",
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: ".portfolio-slide-wrap .next",
            prevEl: ".portfolio-slide-wrap .prev"
        },
        breakpoints: {
            // 320px 에서는 1개
            320: {slidesPerView: 1},
            // 480px 에서는 2개
            480: {slidesPerView: 2, spaceBetween: 30},
            // 768px 에서는 4개
            768: {slidesPerView: 4, spaceBetween: 30},
        }
    });

    // 메뉴토글버튼
    var menuToggleBtn = $(".menu-toggle-btn");
    mainMenu = $(".main-menu");
    menuToggleBtn.click(function(){
        mainMenu.slideToggle();
    })
})