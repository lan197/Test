(function($){

    $(document).ready(function (){

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


    });

})(window.jQuery);