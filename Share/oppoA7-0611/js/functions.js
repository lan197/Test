(function($){
	$(document).ready(function (){

		$('.of-iconmntop').click(function(){
			$('.of-menutop').toggleClass('of-mnshow');
		});

		$('.of-search').click(function(){
			$('.of-searchbox').show(200);
		});

		$('.of-closesearch').click(function(){
			$('.of-searchbox').hide(200);
		});

        $('.opp-s11ul').countdown('2020/10/10', function(event) {
            $(this).html(event.strftime('<li><span>%D</span> <span>ngày</span></li> <li><span>%H</span> <span>giờ</span></li> <li><span>%M</span> <span>phút</span></li> <li><span>%S</span> <span>giây</span></li>'));
        });

        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > 70) {
                $('.of9-menu').addClass('of9-mnfix');
            } else {
                $('.of9-menu').removeClass('of9-mnfix');
            }
        });
        $(document).on('click','[toscroll]',function(e){
            e.preventDefault();
            var link = $(this).attr('toscroll');
            if($(link).length > 0){
                var posi = $(link).offset().top - 50;
                $('body,html').animate({scrollTop:posi},1000);
            }
        });

        var swiper12 = new Swiper('.swiper-s91', {
            effect: 'coverflow',
            grabCursor: true,
            loop: true,
            loopFillGroupWithBlank: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true
            },
            navigation: {
                nextEl: '.swiper-s91 .of-slnext',
                prevEl: '.swiper-s91 .of-slprev'
            }
        });
        var swiper13 = new Swiper('.swiper-s92', {
            effect: 'coverflow',
            grabCursor: true,
            loop: true,
            loopFillGroupWithBlank: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 0,
                stretch: 20,
                depth: 100,
                modifier: 1,
                slideShadows : true,
            },
            navigation: {
                nextEl: '.swiper-s92 .of-slnext',
                prevEl: '.swiper-s92 .of-slprev'
            }
        });

        var swiper = new Swiper('.swiper-s7', {
            slidesPerView: 4,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-s7 .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                374: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                }
            }
        });

        $(document).on('click','#of9-s9btnx',function () {
            $('.of9-s9ul li').removeClass("active");
            $(this).parent().addClass('active');
            $('.of9-s9slide').hide();
            $('.of9-s9xanh').show();
            swiper12.update();
        });
        $(document).on('click','#of9-s9btnv',function () {
            $('.of9-s9ul li').removeClass("active");
            $(this).parent().addClass('active');
            $('.of9-s9slide').hide();
            $('.of9-s9vang').show();
            swiper13.update();
        });

	});
})(window.jQuery);