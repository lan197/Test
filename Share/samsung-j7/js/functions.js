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
			if ($(window).scrollTop() > 700) {
				$('.sj7-menu').addClass('sj7-tab-atfix');
			} else {
				$('.sj7-menu').removeClass('sj7-tab-atfix');
			}
		});

		$(".sj7-btndn, .sj7-mnbtn").click(function () {
			$('html, body').animate({scrollTop: $(".sj7-dathang").offset().top}, 1000);
		});

		$(".sj7-btnxtl").click(function () {
			$('html, body').animate({scrollTop: $(".op-tleds").offset().top}, 1000);
		});
		$(".sj7-mntlct").click(function () {
			$('html, body').animate({scrollTop: $(".sj7-tskt").offset().top - 50}, 1000);
		});
		$(".sj7-mntscb").click(function () {
			$('html, body').animate({scrollTop: $(".sj7-s1").offset().top - 50}, 1000);
		});
		$(".sj7-mnddsp, .sj7-bikm").click(function () {
			$('html, body').animate({scrollTop: $(".j77-sbox").offset().top - 50}, 1000);
		});


		var swiper = new Swiper('.o7-s5slide', {
			pagination: '.o7-s5slide .swiper-pagination',
			slidesPerView: 4,
			spaceBetween: 30,
			breakpoints: {
				992: {
					slidesPerView: 3
				},
				670: {
					slidesPerView: 2
				},
				480: {
					slidesPerView: 1
				}
			}
		});

		$("input.mz-ipc1").change(function () {
			if ($("input.mz-ipc1:checked").val() == "mz31") {
				$('.sj7-dh-img img').attr('src', 'images/298/gold.png');
			}
			else if ($("input.mz-ipc1:checked").val() == "mz32") {
				$('.sj7-dh-img img').attr('src', 'images/298/bac.png');
			}
			else if ($("input.mz-ipc1:checked").val() == "mz33") {
				$('.sj7-dh-img img').attr('src', 'images/298/black.png');
			}
		});


		$(".sj7-btn-tt").click(function () {
			$(".sj7-dh-btn").hide();
			$(".sj7-ttonline").show();
		});
		$(".sj7-btn-dc").click(function () {
			$(".sj7-dh-btn").show();
			$(".sj7-ttonline").hide();
		});

		$('.f1-li1').click(function () {
			$('.f1-tmlul li').removeClass('active');
			$(this).addClass('active');
		});
		$('.f1-li2').click(function () {
			$('.f1-li2').removeClass('active');
			$('.f1-li3').removeClass('active');
			$('.f1-li1').addClass('active');
			$(this).addClass('active');
		});
		$('.f1-li3').click(function () {
			$('.f1-li1').addClass('active');
			$('.f1-li2').addClass('active');
			$(this).addClass('active');
		});
		// EDIT SLIDE KMA
		var sync3 = $("#sync3");
		var sync4 = $("#sync4");

		sync3.owlCarousel({
			singleItem : true,
			slideSpeed : 1000,
			navigation: false,
			pagination:false,
			responsive: true,
			autoPlay: 2000,
			afterAction : syncPosition1,
			responsiveRefreshRate : 200,
		});

		sync4.owlCarousel({
			items : 4,
			itemsDesktop      : [1199,4],
			itemsDesktopSmall     : [979,4],
			itemsTablet       : [768,4],
			itemsMobile       : [479,4],
			pagination:false,
			responsive: true,
			responsiveRefreshRate : 500,
			afterInit : function(el){
				el.find(".owl-item").eq(0).addClass("synced");
			}
		});

		function syncPosition1(el){
			var current = this.currentItem;
			$("#sync4")
				.find(".owl-item")
				.removeClass("synced")
				.eq(current)
				.addClass("synced")
			if($("#sync4").data("owlCarousel") !== undefined){
				center(current)
			}
		}

		$("#sync4").on("click", ".owl-item", function(e){
			e.preventDefault();
			var number = $(this).data("owlItem");
			sync3.trigger("owl.goTo",number);
		});

		function center(number){
			var sync4visible = sync4.data("owlCarousel").owl.visibleItems;
			var num = number;
			var found = false;
			for(var i in sync4visible){
				if(num === sync4visible[i]){
					var found = true;
				}
			}

			if(found===false){
				if(num>sync4visible[sync4visible.length-1]){
					sync4.trigger("owl.goTo", num - sync4visible.length+2)
				}else{
					if(num - 1 === -1){
						num = 0;
					}
					sync4.trigger("owl.goTo", num);
				}
			} else if(num === sync4visible[sync4visible.length-1]){
				sync4.trigger("owl.goTo", sync4visible[1])
			} else if(num === sync4visible[0]){
				sync4.trigger("owl.goTo", num-1)
			}

		}

		/*SLIDE*/
        var sync1 = $("#sync1");
        var sync2 = $("#sync2");
        sync1.owlCarousel({
            singleItem : true,
            slideSpeed : 1000,
            navigation: false,
            pagination:false,
            afterAction : syncPosition,
            responsiveRefreshRate : 200
        });
        sync2.owlCarousel({
            items : 2,
            itemsDesktop      : [1199,2],
            itemsDesktopSmall     : [979,2],
            itemsTablet       : [768,2],
            itemsMobile       : [479,2],
            pagination:false,
            responsiveRefreshRate : 100,
            afterInit : function(el){
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });
        function syncPosition(el){
            var current = this.currentItem;
            $("#sync2")
                .find(".owl-item")
                .removeClass("synced")
                .eq(current)
                .addClass("synced")
            if($("#sync2").data("owlCarousel") !== undefined){
                center(current)
            }
        }
        $("#sync2").on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = $(this).data("owlItem");
            sync1.trigger("owl.goTo",number);
        });
        function center(number){
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for(var i in sync2visible){
                if(num === sync2visible[i]){
                    var found = true;
                }
            }
            if(found===false){
                if(num>sync2visible[sync2visible.length-1]){
                    sync2.trigger("owl.goTo", num - sync2visible.length+2)
                }else{
                    if(num - 1 === -1){
                        num = 0;
                    }
                    sync2.trigger("owl.goTo", num);
                }
            } else if(num === sync2visible[sync2visible.length-1]){
                sync2.trigger("owl.goTo", sync2visible[1])
            } else if(num === sync2visible[0]){
                sync2.trigger("owl.goTo", num-1)
            }
        }
	});
})(window.jQuery);