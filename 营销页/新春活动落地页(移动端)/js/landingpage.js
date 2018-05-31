/*------------------------------活动倒计时定义的函数-----------------------*/
var timers = '';

function checktime(i) {
    if (i < 10) {
        i = "0" + i;

    }
    else {
        i = i;
    }
    return i;
}

function freshTime() {
    var endtime = new Date('2018/02/23 23:59:59');
    var nowtime = new Date();
    var lefttime = parseInt(endtime.getTime() - nowtime.getTime());//这是毫秒，如果再/1000就是秒
    // 获取剩下的日、小时、分钟、秒钟
    // 一天有多少毫秒，一小时有多少毫秒，一分钟有多少毫秒，一秒钟有多少毫秒
    var dm = 24 * 60 * 60 * 1000;
    var d = parseInt(lefttime / dm);
    var hm = 60 * 60 * 1000;
    var h = parseInt((lefttime / hm) % 24);
    var mm = 60 * 1000;
    var m = parseInt((lefttime / mm) % 60);
    var s = parseInt((lefttime / 1000) % 60);
    m = checktime(m);
    s = checktime(s);
    $('.timer_txts').html(d + "天" + h + "小时" + m + "分钟" + s + "秒");
    if (lefttime < 0) {
        $('.timer_txts').html('本次活动已经结束!');
        clearInterval(timers);
    }
}

/*------------------------------------------红包的动画效果--------------------------------*/
var timers_item = '';

function hongbao() {
    /*进度条的总长度*/
    var heights = parseInt($('.line_boxs').height());
    /*每个小球的到起点的距离*/
    var line_boxs_two = parseInt($('.line_boxs_two').position().top);
    var line_boxs_three = parseInt($('.line_boxs_three').position().top);
    var line_boxs_four = parseInt($('.line_boxs_four').position().top);
    var line_boxs_five = parseInt($('.line_boxs_five').position().top);
    /*累计送出的金额*/
    var mony_txts = parseInt($('.mony_txts').text());
    mony_txts += 10000;
    /*变色的进度条长度*/
    var heights_item = parseInt($('.line_boxs_xiantiao').height());
    heights_item += 2;


    if (heights_item >= heights) {
        clearInterval(timers_item)
    } else {
        /*变色的进度条长度的进度*/
        $('.line_boxs_xiantiao').height(parseInt(heights_item));
        /*显示累计送出的金额*/
        $('.mony_texts').fadeIn();
        $('.mony_txts').html(mony_txts);
        /*第二个小球变色*/
        if (heights_item >= line_boxs_two) {
            $('.line_boxs_two').addClass('xiaoyuanquan');
            $('.red_boxs_four').fadeOut();
            $('.envelopes_four').fadeIn();
        }
        /*第三个小球变色*/
        if (heights_item >= line_boxs_three) {
            $('.line_boxs_three').addClass('xiaoyuanquan');
            $('.red_boxs_one').fadeOut();
            $('.envelopes_two').fadeIn();
        }
        /*第四个小球变色*/
        if (heights_item >= line_boxs_four) {
            $('.line_boxs_four').addClass('xiaoyuanquan');
            $('.red_boxs_five').fadeOut();
            $('.envelopes_five').fadeIn();
        }
        /*第四个小球变色*/
        if (heights_item >= line_boxs_five) {
            $('.line_boxs_five').addClass('xiaoyuanquan');
            $('.red_boxs_two').fadeOut();
            $('.envelopes_three').fadeIn();
        }
    }
}


$(function () {
    /*活动倒计时*/
    freshTime();
    timers = setInterval('freshTime()', 1000);

    /*立即开抢的弹窗*/
    $('.programming_buttons').on('click', function () {
        $('#myModa_box').modal('show');
    })

    $('.delete_img').on('click', function () {
        $('#myModa_box').modal('hide');
    })

    /*二重豪礼轮播图*/
    var mySwiper = new Swiper('#container_box1', {
        effect: 'coverflow',
        loop: true,
        autoplayDisableOnInteraction: false,
        autoplay: 3000,
        grabCursor: true,
        centeredSlides: true,               // 默认第一块居左，设置为true后则是居中显示
        slidesPerView: 'auto',
        slideToClickedSlide: true,         //点击的slide会居中
        coverflow: {
            rotate: 0,                    // 旋转的角度
            stretch: 8,                 // 拉伸  图片左右的间距和密度集
            depth: 80,                  // 深度  切换图片上下的间距和密度集
            modifier: 6,               // 修正值越大前面的图片效果越明显
            slidesPerView: true,
            slideShadows: false       // slideShadows：开启slide阴影。默认 true
        }
    });

    /*红包的动画效果*/
    hongbao();
    timers_item = setInterval('hongbao()', 30);

    /*立即开抢仅剩0份时*/
    var end_txts = $('.programming_buttons_text_end').text();
    if (end_txts <= 0) {
        $('.programming_buttons_text').fadeOut();
        $('.programming_buttons').css('background', '#888888');
        $('.programming_buttons').html('已抢完');
        $('.programming_buttons').unbind("click");
    }
})