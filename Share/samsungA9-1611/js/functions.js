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
	});
})(window.jQuery);