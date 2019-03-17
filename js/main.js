(function($){
    $(function(){

        $('a[href^="#"]').click(function() {
            var href= $(this).attr("href");
            if(href != "#" && href != ""){
                var speed = 400;
                var target = $(href);
                var position = target.offset().top;
                $('body,html').animate({scrollTop:position}, speed, 'swing');
                return false;
            }
        });

    });
})(jQuery);