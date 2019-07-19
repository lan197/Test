(function($){
	$(document).ready(function (){

        //------------------------ MENU

        $(".ip-mn-tt").click(function (){
            $('html, body').animate({ scrollTop: $(".ip-info").offset().top - 50 }, 1000);
        });
        $(".ip-mn-dn,.ip-mn-ds").click(function (){
            $('html, body').animate({ scrollTop: $(".ip-lprod").offset().top }, 1000);
        });
        $(".ip-mn-bl").click(function (){
            $('html, body').animate({ scrollTop: $(".ttct-cmt").offset().top}, 1000);
        });

        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > 500) {
                $('.p1-sec1').addClass('p1-sec1fix');
            } else {
                $('.p1-sec1').removeClass('p1-sec1fix');
            }
        });
        // ----------- BANNER

        $("input[name='ip6sCl']").change(function(){
            if ($("input[name='ip6sCl']:checked").val() == 1) {
                $('.ip-tab-imgip6s img').attr('src', 'images/img-10/ip6s/i1.jpg');
            }
            else if ($("input[name='ip6sCl']:checked").val() == 2){
                $('.ip-tab-imgip6s img').attr('src', 'images/img-10/ip6s/i2.jpg');
            }
            else if ($("input[name='ip6sCl']:checked").val() == 3){
                $('.ip-tab-imgip6s img').attr('src', 'images/img-10/ip6s/i3.jpg');
            }
            else if ($("input[name='ip6sCl']:checked").val() == 4){
                $('.ip-tab-imgip6s img').attr('src', 'images/img-10/ip6s/i4.jpg');
            }
        });
	});
})(window.jQuery);