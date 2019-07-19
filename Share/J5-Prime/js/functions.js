(function($){

    $(document).ready(function (){

        $(".j7-bnrul-xtl").click(function (){
            $('html, body').animate({ scrollTop: $(".p1-sec4-tl").offset().top - 60 }, 1000);
        });
        $(".p1-s1ddsp").click(function (){
            $('html, body').animate({ scrollTop: $(".j5-s1").offset().top - 60 }, 1000);
        });
        $(".p1-s1ds").click(function (){
            $('html, body').animate({ scrollTop: $(".p1-s4dskh").offset().top - 60 }, 1000);
        });
        $(".p1-s1tt").click(function (){
            $('html, body').animate({ scrollTop: $(".opd-s7").offset().top - 60 }, 1000);
        });
        $(".p1-s1bl").click(function (){
            $('html, body').animate({ scrollTop: $(".ttct-cmt").offset().top - 60 }, 1000);
        });


        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > 500) {
                $('.p1-sec1').addClass('p1-sec1fix');
            } else {
                $('.p1-sec1').removeClass('p1-sec1fix');
            }
        });

        var swiper = new Swiper('.opd-s7-slide .swiper-container', {
            slidesPerView: 4,
            paginationClickable: true,
            spaceBetween: 30,
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

        $('.j7-game-btncn').click(function () {
            $('.j5-gamett').hide();
            $('.j5-game-ques1').show();
        });
        $('.j5-game-cbtn1').click(function () {
            $('.j5-game-ques1').hide();
            $('.j5-game-ques2').show();
        });
        $('.j5-game-cbtn2').click(function () {
            $('.j5-game-ques2').hide();
            $('.j5-game-ques3').show();
        });
    });
})(window.jQuery);