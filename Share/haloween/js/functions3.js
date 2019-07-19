(function($){
    var slickProd = {
        init: function () {
            slickProd.events();
        },
        events: function () {
            $('.p2-sphotswiper').swiper({
                slidesPerView: 'auto',
                preventClicks: false,
                spaceBetween: 0
            });
        }
    };

    $(document).ready(function (){

        if ($(".p2-sphotswiper").length > 0) {
            slickProd.init();
        }

        $('.p2-fil-likmtit').click(function(){
            $('.p2-fil-likm').toggleClass('active');
        });

        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > 500) {
                $('body').addClass('mnfix');
            } else {
                $('body').removeClass('mnfix');
            }
        });

//--------------------------------- JS LIST-PROD

        var $container = $('.p2-lprod-row');
        $container.packery({
            itemSelector: '.p2item'
        });

        $(document).on('click','.p2-btnqview',function (e) {
            e.preventDefault();
            var self = this;
            $('.p2-lprod-fbox').removeClass('p2-lfshow');
            $('.p2-lprod-ibox').removeClass('p2-lfarow');
            var root = $(this).closest('.p2item');
            /*$.get(fpts_landing_js.ajaxLink.GetAttrSpec, { productId: parseInt(root.attr('data-pro')) }, function (data) {
                $($('.p2-lprod-fbox[data-id="' + root.attr('data-id') + '"] .p2-lp-fbtsbox')).html(data.view);
                $($('.p2-lprod-fbox[data-id="' + root.attr('data-id') + '"] .p2-sp-kmbh')).text(data.bh);
            });*/
            if (root.length > 0) {
                var moreBox = $('.p2-lprod-fbox[data-id="' + root.attr('data-id') + '"]');
                if (moreBox.length > 0) {
                    moreBox.addClass('p2-lfshow');
                    $container.packery();
                    setTimeout(function () {
                        $(self).closest('.p2item').toggleClass('p2-lfarow');
                        $('html, body').animate({
                            scrollTop: moreBox.offset().top
                        }, 1000);
                    }, 200);
                }
            }
        });

        $(document).on('click','.p2-lfboxclose',function (e) {
            e.preventDefault();
            var root = $(this).closest('.p2-lprod-fbox');
            var moreBox = $('.p2item[data-id="' + root.attr('data-id') + '"]');
            if (root.length > 0) {
                root.removeClass('p2-lfshow');
                $('.p2item').removeClass('p2-lfarow');
                $container.packery();
            }
        });

	});
})(window.jQuery);