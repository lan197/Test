(function($){

	// swipper news product slide contructor
	var slickNews = {
		init: function () {
			slickNews.events();
		},
		events: function () {
			$('.o7-s5slide').swiper({
				slidesPerView: 4,
				spaceBetween: 30,
				preventClicks: false,
				nextButton: '.o7-s5slide .swiper-button-next',
				prevButton: '.o7-s5slide .swiper-button-prev',
				paginationClickable: true,
				autoplay: 2500,
				autoplayDisableOnInteraction: false,
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
		}
	};

	$(document).ready(function (){

		addOrder();
		//Tim kiem trang chu
		$('.of-iconmntop').click(function () {
			$('.of-menutop').toggleClass('of-mnshow');
		});

		$('.of-search').click(function () {
			$('.of-searchbox').show(200);
		});

		$('.of-closesearch').click(function () {
			$('.of-searchbox').hide(200);
		});

		$('#frmSearch').submit(function (e) {
			e.preventDefault();
			var keyword = $('.keyword').val();
			if (keyword == '') {
				alert('Bạn chưa nhập từ khóa tìm kiếm');
			} else if (keyword.toLowerCase() === 'bảo hành vàng' || keyword.toLowerCase() === 'bao hanh vang') {
				window.location.href = "http://fptshop.com.vn/ho-tro/bao-hanh-vang";
				return false;
			}
			else {
				$.cookie("KeywordSearch", decodeURI(keyword), { expires: 1, path: '/tim-kiem' });
				keyword = "/tim-kiem/" + convertToAscii(keyword);
				if (typeof $('.keyword').attr('data-href') != 'undefined') {
					keyword = $('.keyword').attr('data-href');
				}
				window.location.href = keyword;
			}
		});

		$('.keyword').keyup(function (e) {
			e.preventDefault();
			var $keyword = $(this).val();

			var formresult = $('.resultAutoComplete-home');
			var brand = $('.fshop-search-cate');
			var prod = $('.fshop-search-prod');

			if ($.trim($keyword).length > 0) {
				var result = "<li></li>";
				var resultbrand = "";
				$.get("http://fptshop.com.vn/Ajax/SearchLucene/AutoComplete", { searchTerm: decodeURI($keyword), searchField: 'NameProduct', searchDefault: '' }, function (data) {
					if (data._searchBrandResults == '' || data._searchBrandResults == null) {
						brand.html('');
						resultbrand = '';
					} else if (data._searchBrandResults != '') {
						$.each(data._searchBrandResults, function (i, v) {
							var t = ' ' + v.Name.toLowerCase();
							var url = "http://fptshop.com.vn" + '/' + v.TypeNameAscii + '/' + v.NameAscii + "";
							resultbrand += "<li><a href='" + url + "'>" + t + "</a></li>";
						});
					}
					if (data._searchResults == '' && (data._searchSkuResults == null || data._searchSkuResults == '')) {
						result = "";
					} else {
						if (data._searchSkuResults == '' || data._searchSkuResults == null) {
							$.each(data._searchResults, function (i, v) {
								var t = '<p class="fshop-search-prodname">' + v.NameProduct.toLowerCase().replace($keyword.toLowerCase(), "<strong>" + $keyword.toLowerCase() + "</strong>") + '</p>';
								var urlpic = '<img src="' + 'http://cdn.fptshop.com.vn/Uploads/Thumbs/' + v.UrlPicture + '" alt = "' + v.NameProduct + '" >';
								var url = "http://fptshop.com.vn" + '/' + v.TypeNameAscii + '/' + v.NameAscii + "";
								var price = '';
								if (parseInt(v.Price) > 0) {
									price = '<p class="fshop-search-prodprice">' + ConvertCurrency(parseInt(v.Price).toString()) + '₫</p>';
								} else {
									price = '<p class="fshop-search-prodprice"></p>';
								}
								result += "<li><a href='" + url + "'><div class='fshop-search-prodimg'>" + urlpic + "</div><div class='fshop-search-prodinfo'>" + t + price + "</div></a>" + "</li>";
							});
						} else if (data._searchSkuResults != '') {
							$.each(data._searchSkuResults, function (i, v) {
								var t = '<p class="fshop-search-prodname">' + v.NameProduct.toLowerCase() + ' ' + v.ColorName + '</p>';
								var urlpic = '<img src="' + 'http://fptshop.com.vn/Uploads/Thumbs/' + v.UrlPicture + '" alt = "' + v.NameProduct + ' ' + v.ColorName + '" >';
								var url = "http://fptshop.com.vn" + '/' + v.TypeNameAscii + '/' + v.NameAscii + "";
								var price = '';
								if (parseInt(v.Price) > 0) {
									price = '<p class="fshop-search-prodprice">' + ConvertCurrency(parseInt(v.Price).toString()) + '₫</p>';
								} else {
									price = '<p class="fshop-search-prodprice"></p>';
								}
								result += "<li><a href='" + url + "'><div class='fshop-search-prodimg'>" + urlpic + "</div><div class='fshop-search-prodinfo'>" + t + price + "</div></a>" + "</li>";
							});
						}

					}

				}).complete(function () {
					brand.html("");
					brand.html(resultbrand);
					prod.html("");
					prod.html(result);
				});
			} else {
				prod.html('');
				brand.html('');
			}


		});

		jQuery.validator.addMethod("rgphone", function (value, element) {
			return this.optional(element) || /^(098|095|097|096|0169|0168|0167|0166|0165|0164|0163|0162|090|093|0122|0126|0128|0121|0120|091|094|0123|0124|0125|0127|0129|092|0188|0186|099|0199|086|088|089|087)[0-9]{7}$/.test(value);
		}, "Số điện thoại không đúng định dạng");

		function ConvertCurrency(str) {
			return str.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
		}

	});

	$(window).load(function () {

		// if ($(".newsPro").length > 0) {
		// 	$.get("/online-friday/Ajax/Home/GetArticleByProductId", { productIdReffer: 13302 }, function (data) {
		// 		$('.no7-s5 .swiper-wrapper').html(data);
		// 		slickNews.init();
		// 	});
		// }
		//
		// $.get("/online-friday/Ajax/Order/GetListOrdered", { listSku: '00264468,00264466', campaignId: 227, page: 1, recordPerpage: 20 }, function (data) {
		// 	$("tbody.tblOrder").html(data.view);
		// });
		//
		//
		//
		//
		// $.get("/online-friday/Ajax/Order/GetListCustomerDeposit", { campaignId: 227, page: 1, recordPerpage: 20 }, function(data) {
		// 	$("tbody.tblDesposite").html(data.view);
		//
		// });


	});


	function addOrder(name, phone, email, campaignId, variantId, sourceName, price) {
		$("#frmOrder").validate({
			rules: {
				FullName: {
					required: true,
					minlength: 2,
					maxlength: 30,
				},
				Phone: {
					required: true,
					minlength: 10,
					maxlength: 11,
					number: true,
					rgphone: true
				},
				Email: {
					email: true
				}
			},
			messages: {
				FullName: {
					required: "Bạn cần nhập đầy đủ họ tên",
					minlength: "Tên của bạn quá ngắn",
					maxlength: "Tên của bạn quá dài"
				},
				Phone: {
					rgphone: "Vui lòng nhập đúng định dạng"
				},
				Email: {
					email: "Vui lòng nhập đúng định dạng email"
				}
			},
			submitHandler: function () {
				$.post('/Ajax/Order/AddOrderAPI',
					{
						sourceName: sourceName,
						CampaignID: campaignId,
						TotalPriceCampaignOrder: price,
						productVariantId: variantId,
						gender: 'true',
						name: name,
						email: email,
						phone: phone,
						address: '',
						city: 0,
						district: 0,
						couponCode: '',
						accessories: '',
						talesSales: null,
						ArrPromotioID: null,
						typePayment: 'boxselectShop',
						refered: '',
						clientid: $('#clientid').val()
					}, function (data) {

						$("#SuccessPopup").modal("show");

					}).complete(function () {
					// code
				});
			}
		});
	}

	function scrollTo(elementfrom, elementto) {
		$(elementfrom).click(function () {
			$('html, body').animate({scrollTop: $(elementto).offset().top}, 1000);
		});
	}

})(window.jQuery);