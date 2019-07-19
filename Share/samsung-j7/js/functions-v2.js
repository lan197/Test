(function($){
    var dicShop = {}, shopData = [
        {"Name": "VLG 14A Đinh Tiên Hoàng","Address": "Số 14A - 14B - 14C Đường Đinh Tiên Hoàng, P.8, TP. Vĩnh Long, Tỉnh Vĩnh Long, Việt Nam","lat": "10.232181","lng": "105.95567","city": "Vĩnh Long"},
        {"Name": "THA 175 Trần Phú","Address": "Số 175 Trần Phú - Phường Ba Đình - TP Thanh Hóa - Tỉnh Thanh Hóa","lat": "19.803613","lng": "105.776385","city": "Thanh Hóa"},
        {"Name": "TTH 105 Hùng Vương","Address": "105-107-109 Hùng Vương, Phường Phú Hội, Thành phố Huế, Việt Nam","lat": "16.459865","lng": "107.598886","city": "Thừa Thiên Huế"},
        {"Name": "TTH 10 Hùng Vương","Address": "10 Hùng Vương, Phường Phú Thuận,TP Huế, Huế","lat": "16.465887","lng": "107.592114","city": "Thừa Thiên Huế"},
        {"Name": "TNH 867 Cách Mạng Tháng 8","Address": "867 CMT8, Phường Hiệp Ninh, Thị xã Tây Ninh, Tỉnh Tây Ninh","lat": "11.307571","lng": "106.121095","city": "Tây Ninh"},
        {"Name": "TNH 456 Quốc lộ 22","Address": "456 Quốc Lộ 22, Thị trấn Gò Dầu, huyện Gò Dầu, Tỉnh Tây Ninh","lat": "11.082866","lng": "106.265525","city": "Tây Ninh"},
        {"Name": "TGG 365 Quốc Lộ 1A","Address": "Số 365-366 Quốc Lộ 1A, Khu phố 1, Phường 5, Thị Xã Lai Cậy, Tỉnh Tiền Giang, Việt Nam","lat": "10.404894","lng": "106.118792","city": "Tiền Giang"},
        {"Name": "QNM Tổ 6 Hà Lam","Address": "Tổ 6, Thị trấn Hà Lam, Huyện Thăng Bình, Tỉnh Quảng Nam, Việt Nam","lat": "15.742186","lng": "108.359222","city": "Quảng Nam"},
        {"Name": "QNI 725 Quang Trung","Address": "Số 725 Quang Trung, Phường Nguyễn Nghiêm, Thành Phố Quảng Ngãi, Tỉnh Quảng Ngãi, Việt Nam","lat": "15.113184","lng": "108.808709","city": "Quảng Ngãi"},
        {"Name": "QNI 411 Quang Trung","Address": "Số 411 Quang Trung, Phường Nguyễn Nghiêm, TP Quảng Ngãi, Tỉnh Quãng Ngãi, Việt Nam","lat": "15.12322","lng": "108.803908","city": "Quảng Ngãi"},
        {"Name": "PYN 363 Trần Hưng Đạo","Address": "363 Trần Hưng Đạo, Phường 6, TP Tuy Hòa, Tỉnh Phú Yên","lat": "13.088502","lng": "109.314509","city": "Phú Yên"},
        {"Name": "NTN 697 Đường 21/8","Address": "Số 697 đường 21/8, P. Bảo An, TP. Phan Rang - Tháp Chàm, Tỉnh Ninh Thuận, Việt Nam","lat": "11.592826","lng": "108.953328","city": "Ninh Thuận"},
        {"Name": "NTN 412 Ngô Gia Tự","Address": "Số 412 Ngô Gia Tự, P. Tấn Tài, TP. Phan Rang - Tháp Chàm, Tỉnh Ninh Thuận, Việt Nam","lat": "11.558554","lng": "108.993488","city": "Ninh Thuận"},
        {"Name": "NTN 362 Thống Nhất","Address": "Số 362-364 Thống nhất, Phường Phủ Hà, TP Phan Rang-Tháp chàm, Tỉnh Ninh Thuận, Việt Nam","lat": "11.569413","lng": "108.991139","city": "Ninh Thuận"},
        {"Name": "NBH 237 Trần Hưng Đạo","Address": "Số nhà 237 đường Trần Hưng Đạo, P Vân Giang, Tp Ninh Bình, Tỉnh Ninh Bình","lat": "20.255152","lng": "105.972752","city": "Ninh Bình"},
        {"Name": "NAN Khối Bắc Hồ K17","Address": "Khối Bắc Hồ (K17), Thị trấn Quỳ Hợp, Huyện Quỳ Hợp, Tỉnh Nghệ An, Việt Nam","lat": "19.325379","lng": "105.186779","city": "Nghệ An"},
        {"Name": "NAN 180 Trần Hưng Đạo","Address": "Số 180 Trần Hưng Đạo, Khối Tân Thành, Phường Hòa Hiếu, Thị Xã Thái Hòa, Tỉnh Nghệ An","lat": "19.32229","lng": "105.434702","city": "Nghệ An"},
        {"Name": "LDG 39 Thống Nhất","Address": "Số 39 - 41 Thống Nhất, Thị trấn Liên Nghĩa, Huyền Đức Trọng, Tỉnh Lâm Đồng, Việt Nam","lat": "11.735285","lng": "108.37434","city": "Lâm Đồng"},
        {"Name": "LAN 21 Nguyễn Hữu Thọ","Address": "Nhà số 21 Đường Nguyễn Hữu Thọ, Thị trấn Bến Lức, Huyện Bến Lức, Tỉnh Long An, Việt Nam","lat": "10.636365","lng": "106.489261","city": "Long An"},
        {"Name": "KHA 69 Quang Trung","Address": "Số 69 Quang Trung, P. Lộc Thọ, TP. Nha Trang, Tỉnh Khánh Hòa, Việt Nam","lat": "12.249866","lng": "109.19069","city": "Khánh Hòa"},
        {"Name": "KHA 630 Đường 2 Tháng 4","Address": "Số 630-632 Đường 2 tháng 4, P. Vĩnh Phước, TP. Nha Trang, Tỉnh Khánh Hòa Việt Nam","lat": "12.274405","lng": "109.197939","city": "Khánh Hòa"},
        {"Name": "KGG 331 Nguyễn Trung Trực","Address": "Số 331 Nguyễn Trung Trực, Khu phố 5, Thị trấn Dương Đông, Huyện Phú Quốc, Tỉnh Kiên Giang","lat": "10.223441","lng": "103.972427","city": "Kiên Giang"},
        {"Name": "KGG 159 Trần Phú","Address": "Số 159 đường Trần Phú, Phường Vĩnh Thanh, Thành phố Rạch Giá, Tỉnh Kiên Giang","lat": "10.012717","lng": "105.083875","city": "Kiên Giang"},
        {"Name": "HYN 28A Bần Yên Nhân","Address": "Số 28A, Thị trấn Bần Yên Nhân, Huyện Mỹ Hào, Tỉnh Hưng Yên, Việt Nam.","lat": "20.93324","lng": "106.057838","city": "Hưng Yên"},
        {"Name": "HPG 42 Minh Đức","Address": "Khu đất số 42 phố Minh Đức, đường 354, khu 2, Thị trấn Tiên Lãng, H. Tiên Lãng, TP. Hải Phòng, Việt Nam","lat": "20.726278","lng": "106.555055","city": "Hải Phòng"},
        {"Name": "HPG 238 Đông Thái - Vĩnh Bảo","Address": "Số 238 - 240 Phố Đông Thái, Thị trấn Vĩnh Bảo, Huyện Vĩnh Bảo, TP Hải Phòng, Việt Nam","lat": "20.68652","lng": "106.480331","city": "Hải Phòng"},
        {"Name": "HNI Xóm Nội - Chúc Sơn","Address": "Xóm Nội, Thị trấn Chúc Sơn, Huyện Chương Mỹ, Thành phố Hà Nội, Việt Nam","lat": "20.924267","lng": "105.705608","city": "Hà Nội"},
        {"Name": "HNI 495 Trương Định","Address": "Số 495A đường Trương Định, tổ 6, Phường Tân Mai, Quận Hoàng Mai, Hà Nội","lat": "20.98401","lng": "105.846282","city": "Hà Nội"},
        {"Name": "HNI 422 Cầu Giấy","Address": "Số 422, 424, 426 Cầu Giấy, phường Dịch Vọng, quận Cầu Giấy, Hà Nội","lat": "21.036404","lng": "105.790174","city": "Hà Nội"},
        {"Name": "HNI 203 Nguyễn Đức Thuận","Address": "Số 203-205, đường Nguyễn Đức Thuận, Thị trấn Trâu Quỳ, Huyện Gia Lâm, Thành phố Hà Nội, Việt Nam","lat": "21.021171","lng": "105.938202","city": "Hà Nội"},
        {"Name": "HNI 2 Núi Đôi","Address": "Số 2, đường Núi Đôi, Thị Trấn Sóc Sơn, Huyện Sóc Sơn, Thành phố Hà Nội, Việt Nam","lat": "21.257308","lng": "105.848139","city": "Hà Nội"},
        {"Name": "HDG 95 Nguyễn Lương Bằng","Address": "95 Nguyễn Lương Bằng,  Phường Phạm Ngũ Lão, Thành Phố Hải Dương, Tỉnh Hải Dương","lat": "20.937561","lng": "106.316166","city": "Hải Dương"},
        {"Name": "HCM 94A Trường Chinh","Address": "Số 94A đường Trường Chinh, Khu phố 6, Phường Tân Hưng Thuận, Quận 12, TP HCM, Việt Nam","lat": "10.827647","lng": "106.625266","city": "Hồ Chí Minh"},
        {"Name": "HCM 739 Kinh Dương Vương","Address": "739 Kinh Dương Vương, P.An Lạc, Q.Bình Tân, HCM","lat": "10.728333","lng": "106.607569","city": "Hồ Chí Minh"},
        {"Name": "HCM 705QL22 TT Củ Chi","Address": "705 Quốc lộ 22, Khu phố 5, Thị trấn Củ Chi, Huyện Củ Chi, TP.HCM","lat": "10.968269","lng": "106.485693","city": "Hồ Chí Minh"},
        {"Name": "HCM 56/6C Phan Văn Hớn","Address": "56/6C Phan Văn Hớn- P.Tân Thới Nhất- Quận 12 - TP. HCM","lat": "10.834339","lng": "106.607292","city": "Hồ Chí Minh"},
        {"Name": "HCM 538Bis Xô Viết Nghệ Tĩnh","Address": "538Bis Xô Viết Nghệ Tĩnh, phường 25, quận Bình Thạnh, TP Hồ Chí Minh, Việt Nam","lat": "10.809943","lng": "106.712686","city": "Hồ Chí Minh"},
        {"Name": "HCM 489 Huỳnh Tấn Phát","Address": "489-491 Huỳnh Tấn Phát- P.Tân Thuận Đông- Quận 7 - TP. HCM","lat": "10.745371","lng": "106.729348","city": "Hồ Chí Minh"},
        {"Name": "HCM 421 Quốc Lộ 22","Address": "421 Quốc Lộ 22, Ấp Thượng, Xã Tân Thông Hội, H. Củ Chi, TP. Hồ Chí Minh, Việt Nam","lat": "10.960547","lng": "106.50244","city": "Hồ Chí Minh"},
        {"Name": "HCM 418 Nguyễn Văn Nghi","Address": "418 Nguyễn Văn Nghi, phường 7, Quận Gò Vấp, Thành Phố Hồ Chí Minh","lat": "10.826414","lng": "106.68012","city": "Hồ Chí Minh"},
        {"Name": "HCM 386 Hương Lộ 2","Address": "386 Đường Hương lộ 2, Khu phố 3, Phường Bình Trị Đông, Quận Bình Tân, TP.Hồ Chí Minh, Việt Nam","lat": "10.77368","lng": "106.621154","city": "Hồ Chí Minh"},
        {"Name": "HCM 344 Lê Văn Khương","Address": "Số 344 Lê Văn Khương, Phường Thới An, Quận 12, TP Hồ Chí Minh","lat": "10.876381","lng": "106.649092","city": "Hồ Chí Minh"},
        {"Name": "HCM 261 Khánh Hội","Address": "261 - 263 Khánh Hội, Phường 5, Quận 4, Thành Phố Hồ Chí Minh","lat": "10.759698","lng": "106.698356","city": "Hồ Chí Minh"},
        {"Name": "HCM 192A Nguyễn Thị Định","Address": "Số 192A Nguyễn Thị Định, P. An Phú, Quận 2, Thành phố Hồ Chí Minh, Việt Nam","lat": "10.790669","lng": "106.753976","city": "Hồ Chí Minh"},
        {"Name": "HCM 189 Nguyễn Sơn","Address": "189-191 Nguyễn Sơn, Phường Phú Thạnh, Quận Tân Phú, Thành phố Hồ Chí Minh, Việt nam","lat": "10.782771","lng": "106.626612","city": "Hồ Chí Minh"},
        {"Name": "HCM 155 Liên Tỉnh 5","Address": "155-157 Liên Tỉnh 5, Phường 5, Quận 8, TP. Hồ Chí Minh, Việt Nam","lat": "10.737465","lng": "106.65635","city": "Hồ Chí Minh"},
        {"Name": "HCM 137 Tô Ngọc Vân","Address": "Số 137 Tô Ngọc Vân, khu phố 4, Phường Linh Tây, Quận Thủ Đức, Thành Phố Hồ Chí Minh, Việt Nam","lat": "10.853295","lng": "106.751431","city": "Hồ Chí Minh"},
        {"Name": "DTP 72 Hùng Vương","Address": "Số 72-74, Hùng Vương, Phường An Thạnh, Thị Xã Hồng Ngự, Tỉnh Đồng Tháp, Việt Nam","lat": "10.809613","lng": "105.341565","city": "Đồng Tháp"},
        {"Name": "DNI Số 6/1A Tam Hòa","Address": "Số 6/1A, KP 1, Phường Tam Hòa, Thành Phố Biên Hòa, Tỉnh Đồng Nai, Việt Nam","lat": "10.940229","lng": "106.867411","city": "Đồng Nai"},
        {"Name": "DNI số 1-2A Đồng Khởi","Address": "Số 1-2A, Đường Đồng Khởi, KP 8, P. Tân Phong, TP. Biên Hoà, Tỉnh Đồng Nai, Việt Nam","lat": "10.966934","lng": "106.85381","city": "Đồng Nai"},
        {"Name": "DNI Quốc lộ 1 Trảng Bom","Address": "Khu hành chính quốc lộ 1, Thị Trấn Trảng Bom, Huyện Trảng Bom, Tỉnh Đồng Nai","lat": "10.952273","lng": "107.000749","city": "Đồng Nai"},
        {"Name": "DNI A1-3 Khu phố chợ mới Long Thành","Address": "A1-3 Khu phố Chợ Mới Quản Thủ, Thị trấn Long Thành, Huyện Long Thành, Tỉnh Đồng Nai","lat": "10.777289","lng": "106.955072","city": "Đồng Nai"},
        {"Name": "DNI 282 Phạm Văn Thuận","Address": "282 Phạm Văn Thuận, Thành phố Biên Hoà, Đồng Nai","lat": "10.957282","lng": "106.842726","city": "Đồng Nai"},
        {"Name": "DNI 24/11 KP Long Điềm","Address": "Số 24/11 KP Long Điềm, phường Long Bình Tân, TP Biên Hòa, tỉnh Đồng Nai","lat": "10.900357","lng": "106.853848","city": "Đồng Nai"},
        {"Name": "DNI 07 Tây Lạc","Address": "Số 07 Tây Lạc, Ấp Bùi Chu, Xã Bắc Sơn, Huyện Trảng Bom, Tỉnh Đồng Nai, Việt Nam","lat": "10.960864","lng": "106.947678","city": "Đồng Nai"},
        {"Name": "DAG Lô A1 Nguyễn Văn Linh nối dài","Address": "Lô A1 Nguyễn Văn Linh nối dài, Phường Nam Dương, Quận Hải Châu, TP Đà Nẵng","lat": "16.060966","lng": "108.217383","city": "Đà Nẵng"},
        {"Name": "DAG 671 Tôn Đức Thắng - Hòa Khánh","Address": "Số 671-673 Tôn Đức Thắng - Phường Hòa Khánh Bắc - Quận Liên Chiểu - TP Đà nẵng","lat": "16.069398","lng": "108.151441","city": "Đà Nẵng"},
        {"Name": "DAG 07 Nguyễn Văn Thoại","Address": "07-09 Nguyễn Văn Thoại, Phường An Hải Đông, Quận Sơn Trà, Thành Phố Đà Nẵng, Việt Nam","lat": "16.053593","lng": "108.23702","city": "Đà Nẵng"},
        {"Name": "CMU 126A Nguyễn Tất Thành","Address": "Số 126A đường Nguyễn Tất Thành, khóm 1, Phường 8, TP Cà Mau, Tỉnh Cà Mau, Việt Nam","lat": "9.170377","lng": "105.146896","city": "Cà Mau"},
        {"Name": "BTN 245 Thủ Khoa Huân","Address": "245 Thủ Khoa Huân, Khu phố 7, Phường Phú Thủy, Thành Phố Phan Thiết, Tỉnh Bình Thuận, Việt Nam","lat": "10.932566","lng": "108.111035","city": "Bình Thuận"},
        {"Name": "BTE 77C Đồng Khởi","Address": "Số 77C, Đại lộ Đồng Khởi, khu phố 6, phường Phú Khương, Tp. Bến Tre, Tỉnh Bến Tre","lat": "10.24373","lng": "106.375549","city": "Bến Tre"},
        {"Name": "BLU66 Hòa Bình-TP Bạc Liêu","Address": "66 Đường Hòa Bình, Phường 3, TP Bạc Liêu, Tỉnh Bạc Liêu","lat": "9.287819","lng": "105.721828","city": "Bạc Liêu"},
        {"Name": "BDH Tổ 35 Khu Vực 7","Address": "Tổ 35, Khu vực 7, P. Đống Đa, TP. Quy Nhơn, Tỉnh Bình Định, Việt Nam","lat": "13.783206","lng": "109.219575","city": "Bình Định"},
        {"Name": "BDG Lô 31M Uyên Hưng","Address": "Lô 31M, 32M, 33M Khu dân cư - Thương mại Uyên Hưng,  P. Uyên Hưng, Thị xã Uyên Hưng, Tỉnh Bình Dương","lat": "11.061579","lng": "106.797107","city": "Bình Dương"},
        {"Name": "BDG 439A Phú Lợi","Address": "439A Phú Lợi, Phường Phú Lợi, Thành phố Thủ Dầu Một, Bình Dương","lat": "10.985823","lng": "106.684743","city": "Bình Dương"},
        {"Name": "BDG 39 Tổ 3 Phước Thạnh","Address": "Số 39, Tổ 3, Khu phố Phước Thạnh, P. Tân Phước Khánh, Thị xã Tân Uyên, Bình Dương, Việt Nam","lat": "11.00491","lng": "106.719037","city": "Bình Dương"},
        {"Name": "BDG 2/36 Nguyễn An Ninh","Address": "Số 2/36, Nguyễn An Ninh, Khu phố Bình Minh 2, Phường Dĩ An, Thị xã Dĩ An, Tỉnh Bình Dương, Việt Nam","lat": "10.90342509","lng": "106.7676763","city": "Bình Dương"},
        {"Name": "AGG 311 Trần Hưng Đạo - Long Xuyên","Address": "Số 311/2B Trần Hưng Đạo, Khóm 7, Phường Mỹ Long, TP Long Xuyên, Tỉnh An Giang","lat": "10.376346","lng": "105.441367","city": "An Giang"},
        {"Name": "AGG 30 Nguyễn Văn Thoại","Address": "Số 30-32 Nguyễn Văn Thoại, Phường Châu Phú A, Thành Phố Châu Đốc, Tỉnh An Giang, Việt Nam","lat": "10.709018","lng": "105.117746","city": "An Giang"},
        {"Name": "AGG 188 Tôn Đức Thắng - Tân Châu","Address": "188 Tôn Đức Thắng, phường Long Thạnh, Thị Xã Tân Châu, Tỉnh An Giang, Việt Nam","lat": "10.795883","lng": "105.239959","city": "An Giang"},
    ]

	$(document).ready(function (){

        var swiper = new Swiper('.sn7-tn-swip .swiper-container', {
            paginationClickable: true,
            nextButton: '.sn7-tn-swip .swiper-button-next',
            prevButton: '.sn7-tn-swip .swiper-button-prev'
        });

        $('#CuaHang').on('shown.bs.modal', function () {
            initMap();
        });

        $(".n7-s1-link").click(function (){
            $('html, body').animate({ scrollTop: $(".sn7-tnghiem").offset().top - 70 }, 1000);
        });
	});

    function buildShop(data) {
        $('.shopv2-list-shop>ul').empty();
        $.each(data, function (index, value) {
            var html = '<li><span><a data-long="' + $.trim(value.lng) + '" data-lat="' + $.trim(value.lat) + '" data-address="' + $.trim(value.Address) + '" data-phone="1800 6601"data-time="8:00 - 22:00 cả thứ 7 và CN, ngày lễ" href="javascript:;">' + $.trim(value.Name) + '</a></span></li>';
            $('.shopv2-list-shop>ul').append(html);
        });
        $('.shopv2-list-shop>ul>li>span>a').click(function (e) {
            e.preventDefault();
            map.setZoom(16);
            map.setCenter(new google.maps.LatLng(parseFloat($(this).attr('data-lat')), parseFloat($(this).attr('data-long'))));
        });
    }
    var map, bounds, coordinateArray, infoWindow, allData = [], markers;
    function initMap() {
        dicShop = {};
        allData = [];
        $('.shopv2-autocomplete>ul').empty();
        $('.shopv2-autocomplete>ul').append('<li><a href="javascript:;" class="all">Toàn quốc</a></li>');
        $.each(shopData, function (index, value) {
            if ($.trim(value.city).length > 0) {
                if (typeof dicShop[$.trim(value.city)] == "undefined") {
                    var arr = [];
                    arr.push(value);
                    dicShop[$.trim(value.city)] = arr;
                    $('.shopv2-autocomplete>ul').append('<li><a href="javascript:;">' + $.trim(value.city) + '</a></li>');
                } else {
                    dicShop[$.trim(value.city)].push(value);
                }
                allData.push(value);
            }
        });
        $('.shopv2-autocomplete>ul').append('<li class="shopv2-no-match">Không tìm thấy kết quả</li>');
        $('.shopv2-autocomplete>ul>li>a').click(function (e) {
            e.preventDefault();
            hideMarkers(markers);
            $('.shopv2-filter-title').text($.trim($(this).text()))
            if ($(this).hasClass('all')) {
                buildShop(allData);
            } else {
                buildShop(dicShop[$.trim($(this).text())]);
            }
            $('.shopv2-filter-input').removeClass('active');
            buildMarker();
        });
        buildShop(allData);

        coordinateArray = [];
        var first = true;

        var mapCanvas = document.getElementById('googleMap');
        var mapOptions = {
            center: new google.maps.LatLng(12.248865, 109.185022),
            zoom: 6,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        map = new google.maps.Map(mapCanvas, mapOptions);
        //infowindow
        infoWindow = new google.maps.InfoWindow;
        /* Map Bound */
        bounds = new google.maps.LatLngBounds();
        if ($('.shopv2-list-shop') && $('.shopv2-list-shop').length > 0) {
            if ($('.shopv2-list-shop li a.active') && $('.shopv2-list-shop li a.active').length > 0) {
                var item = $('.shopv2-list-shop li a.active');
                var name = $.trim($(item).text());
                var address = $(item).attr('data-address');
                var timeWork = $(item).attr('data-time');
                var long = $(item).attr('data-long');
                var lat = $(item).attr('data-lat');
                var latlng = new google.maps.LatLng(lat, long);
                bounds.extend(latlng);
                var marker = new google.maps.Marker({
                    position: latlng,
                    map: map,
                    title: name,
                    icon: 'http://fptshop.com.vn/Content/v3/images/icons/pin-maps_03.png'
                });
                var contentString = createInfoWindow(name, address, timeWork);
                //set infowindow content
                infoWindow.setContent(contentString);
                //Marker Animations
                marker.addListener('click', function () {
                    infoWindow.open(map, marker);
                });
                google.maps.event.addListener(map, "idle", function () {
                    if (first) {
                        if (map.getZoom() > 16) map.setZoom(16);
                        first = false;
                    }
                });
                map.setZoom(16);
                map.setCenter(marker.getPosition());
            } else {
                buildMarker();
            }
        }
        //close infoWindow
        google.maps.event.addListener(map, 'click', function () {
            infoWindow.close();
        });
    }
    function buildMarker() {
        markers = [];
        coordinateArray = [];
        bounds = new google.maps.LatLngBounds();
        $.each($('.shopv2-list-shop li a'), function (index, value) {
            var name = $.trim($(value).text());
            var address = $(value).attr('data-address');
            var timeWork = $(value).attr('data-time');
            var long = $(value).attr('data-long');
            var lat = $(value).attr('data-lat');

            /* Set Bound Marker */
            var latlng = new google.maps.LatLng(lat, long);
            bounds.extend(latlng);
            ///* Add Marker */
            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
                title: name,
                icon: 'http://fptshop.com.vn/Content/v3/images/icons/pin-maps_03.png'
            });
            markers.push(marker);
            //shop info
            var contentString = createInfoWindow(name, address, timeWork);
            var shopCoordinae = { "name": name, "address": address, "long": long, "lat": lat, "content": contentString }
            coordinateArray.push(shopCoordinae);
            //set infowindow content
            google.maps.event.addListener(marker, 'click', (function (marker, index) {
                return function () {
                    infoWindow.setContent(coordinateArray[index]["content"]);
                    infoWindow.open(map, marker);
                }
            })(marker, index));
        });
        coordinateArray.length > 1 ? (map.fitBounds(bounds)) : (map.setZoom(16), map.setCenter(new google.maps.LatLng(coordinateArray[0]["lat"], coordinateArray[0]["long"])));
    }
    function hideMarkers(markers) {
        while (markers.length) {
            markers.pop().setMap(null);
        }
    }
    function createInfoWindow(name, address, timeWork) {
        return '<div class="shopv2-marker-content">' +
            '<div class="shopv2-marker-notice"></div>' +
            '<h1 class="shopv2-marker-firstHeading"><span class="shopv2-marker-logo"><img src="http://fptshop.com.vn/Content/v3/images/logo-black.png"/></span>' + name + '</h1>' +
            '<div class="shopv2-marker-bodyContent">' +
            '<p><strong>Địa chỉ: </strong>' + address + '</p>' +
            '<p><strong>Thời gian làm việc: </strong>' + timeWork + '</p>' +
            '<p><strong>Website: <a href="http://fptshop.com.vn/">www.fptshop.com.vn</a></p>' +
            '</div>' +
            '</div>';
    }
    function removeVietnamese(str) {
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a").replace(/a+/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e").replace(/e+/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i").replace(/i+/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o").replace(/o+/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u").replace(/u+/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y").replace(/y+/g, "y");
        str = str.replace(/đ/g, "d").replace(/d+/g, "d");
        return str;
    }
    
})(window.jQuery);