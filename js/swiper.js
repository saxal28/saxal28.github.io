function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

$(document).ready(function() {
    var mySwiper = new Swiper ('.swiper-container', {
        slidesPerView:  isMobileDevice() ? 1.2 : 2,
        centeredSlides:	true,
        grabCursor: true,
        // loop: true
        initialSlide: isMobileDevice() ? 1 : 1
    })

    setTimeout(() => {
        $(".swiper-container").removeClass('hidden')
        $('.page-loader').hide();
    }, 700)
})