jQuery(document).ready(()=>{
    // 제품 이미지 호버
    $('.proList>article').mouseover(function(){
        $(this).siblings().find('.hoverImg').hide();
        $(this).find('.hoverImg').stop().fadeIn(300);
        $(this).find('.hoverImg').css({
            'animation-name':'scaleUp',
            'animation-delay':'0.2s',
            'animation-fill-mode':'forwards',
            'animation-duration':'4s',
            'animation-timeline':'view'
            });
    }).mouseleave(function(){
        $(this).find('.hoverImg').stop().fadeOut(1500);
    });

    // 위시 버튼
    $('.proCon>button.wishBtn').click(function(){
        $(this).toggleClass('on')
    });

    // 페이지 슬라이드
    $(".scrollMove").each(function () {
        //개별적으로 wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 100;
                if (window.opera) delta = -delta;
            } else if (event.detail) delta = -event.detail / 3;
            
            var moveTop = null;
            //마우스휠을 위에서 아래로
            
            if (delta < 0) {
                moveTop = $(this).next().offset().top;
                //마우스휠을 아래에서 위로
            } else {
                if ($(this).prev().length != 0) {
                    moveTop = $(this).prev().offset().top;
                } else {
                    moveTop = $(this).parent().prev().offset().top;
                }
            }
            //화면이동 0.8초(800)
            $("html, body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 1000,
                complete: function () {}
            });
        });
    });
})