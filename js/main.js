(function($){
  $(function(){

    let clickEvent = 'click';

    // PC・スマホ判定
    const ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > -1 || (ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1)) {
      // スマートフォン
      clickEvent = 'touchend';
      removeJsHover();
    } else if (ua.indexOf('iPad') > -1 || ua.indexOf('Android') > -1) {
      // タブレット
      clickEvent = 'touchend';
      removeJsHover();
    } else {
      // PC
      clickEvent = 'click';
    }

    // スムーススクロール
    $('a[href*="#"]').on(clickEvent, function() {
      if(location.pathname.replace(/^\//, '') !== this.pathname.replace(/^\//, '') || location.hostname !== this.hostname) return;
      var href= $(this).attr("href");
      if(href != "#" && href != ""){
        const speed = 400;
        const target = $(this.hash);
        const position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
      }
    });

    // ホバーイベントを消す
    function removeJsHover(){
      $('.js-hover').each(function(){
        $(this).removeClass('js-hover');
      });
    }

  });
})(jQuery);