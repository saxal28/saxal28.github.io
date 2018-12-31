$(document).ready(function() {
    var mySwiper = new Swiper ('.swiper-container', {
        slidesPerView: 2,
        centeredSlides:	true,
        grabCursor: true,
        // loop: true
        // initialSlide: 1
    })

    setTimeout(() => {
        $(".swiper-container").removeClass('hidden')
        $('.page-loader').hide();
    }, 700)
})