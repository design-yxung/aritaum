jQuery(document).ready(()=>{
    /* ready 시 기본 환경 */
    $('.popupBack').hide();
    $('#goTop').hide();
    $('.depth').hide();

    /* 스크롤 시 이벤트 */
    $(window).scroll(function(){
        let roll=$(window).scrollTop();
        if(roll>150){
            // 카테고리 관련
            $('header').css({
                backgroundColor:'#ffffff80',
                'backdrop-filter':'blur(5px)',
                height: '130px'
            });
            $('header #mainMenu>li:first-child').mouseout(function(){
                $('header').css({
                    backgroundColor:'ffffff80',
                    'backdrop-filter':'blur(5px)',
                    height: '130px'
                })
                $('.subMenu').stop().hide();
            });
        }else{
            $('header').css({
                backgroundColor:'transparent',
                'backdrop-filter':'none',
                height: '130px'
        })};
        // 위로가기 관련
        let top=$('#goTop')
        if(roll>800){
            top.stop().fadeIn(100);
        }else{
            top.stop().fadeOut(100);
        }
        top.click(function(e){
            e.preventDefault();
            $('html,body').stop().animate({scrollTop: '0'},400);
            return false;
        });
    });
    
    /* 유저 동작 이벤트 (서치) */
    $('#active>.search').mouseover(function(){
        $(this).find('.activeCon').show();
    }).mouseout(function(){
        $(this).find('.activeCon').hide();
    });

    /* 카테고리 호버 이벤트 */
    $('header #mainMenu>li:first-child').mouseover(function(){
        $('header').css({
            backgroundColor:'#ffffff80',
            'backdrop-filter':'blur(5px)',
            height: '500px'
        });
        $('.subMenu').show();
    }).mouseout(()=>{
        $('header').css({
            backgroundColor:'transparent',
            'backdrop-filter':'none',
            height: '130px'
        })
        $('.subMenu').stop().hide();
    })

    /* 상품 세부메뉴 이벤트 */
    $('#mainMenu .subMenu>li').mouseover(function(){
        $(this).find('a').addClass('on');
        $(this).siblings().find('.list').hide();
        $(this).find('.list').show();
    }).mouseout(function(){
        $(this).find('a').removeClass('on');
        $('.list').hide();
    });

    /* 서브 페이지 카테고리 이벤트 */
    $('.depth').hide();
    $('.subCategory').find('button').click(function(){
    $(this).toggleClass('on');
    if($('.subCategory button').hasClass('on')){
        $(this).parent().siblings().find('button').removeClass('on');
        $('.depth').hide();
        $(this).next().show();
    }else{
        $('.depth').hide();
        $(this).next().hide();
    }});
})


/* 스크롤롤링 제어 */
function scrollDisable(){$('html, body').addClass('hidden');}
function scrollAble(){$('html, body').removeClass('hidden');}

/* 로그인창 팝업 */
function loginOpen(){$('.popupBack').fadeIn();}
function loginClose(){$('.popupBack').fadeOut();}

/* 장바구니 어사이드 */
function cartOpen(){$('.cartList').css('width','400px')}
function cartClose(){$('.cartList').css('width','0')}