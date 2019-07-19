
(function($){

    $(document).ready(function (){

        $(".p1-s1ddns").click(function (){
            $('html, body').animate({ scrollTop: $(".opd-s31").offset().top - 60 }, 1000);
        });
        $(".p1-s1ts").click(function (){
            $('html, body').animate({ scrollTop: $(".opd-s6").offset().top - 60 }, 1000);
        });
        $(".p1-s1qt").click(function (){
            $('html, body').animate({ scrollTop: $(".opd-s2").offset().top - 60 }, 1000);
        });
        $(".p1-s1ha").click(function (){
            $('html, body').animate({ scrollTop: $(".opd-s5").offset().top - 60 }, 1000);
        });
        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > 900) {
                $('.p1-sec1').addClass('p1-sec1fix');
            } else {
                $('.p1-sec1').removeClass('p1-sec1fix');
            }
        });

        var swiper = new Swiper('.opd-s7-slide .swiper-container', {
            pagination: '.opd-s7-slide .swiper-pagination',
            slidesPerView: 4,
            paginationClickable: true,
            spaceBetween: 50,
            breakpoints: {
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                480: {
                    slidesPerView: 1
                }
            }
        });

        $(".fancybox").fancybox({
            openEffect	: 'none',
            closeEffect	: 'none'
        });

    });
})(window.jQuery);