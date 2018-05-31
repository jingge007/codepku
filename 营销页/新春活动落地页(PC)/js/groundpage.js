/*------------------------------活动倒计时定义的函数-----------------------*/
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
    $('.introduction_timer_box').html(d + "天" + h + "小时" + m + "分钟" + s + "秒");
    if (lefttime < 0) {
        $('.introduction_timer_box').html('本次活动已经结束!');
    }
}

/*---------------------------------进度条滑动定义的函数-----------------------------*/
var timers = '';

function progressbar() {
    var widths = $('.lineboxs').width();
    var maxwindth = $('.progressbar_box').width();
    var lefts = $('.xiaogou_logo').position().left;
    var money_text = $('.money_boxs').text();
    var money_txt = parseInt(money_text);
    widths += 1;
    lefts += 1;
    money_txt += 10000;
    if (widths >= maxwindth) {
        clearInterval(timers)
    }
    else {
        $('.lineboxs').width(parseInt(widths));
        $('.xiaogou_logo').css('left', lefts);
        $('.money_boxs').html(money_txt);
    }

    /*显示累计金额*/
    if (widths == 121) {
        $('.xiaogou_logo_text').fadeIn();
    }

    /*第二个小圆圈变色*/
    else if (widths == 242) {
        $('.circle_two').addClass('yuanquan_bg');
        $('.activity_two').fadeIn();
        $('.haobao_item_two').fadeOut();
        $('.xiaogou_logo_text').css('left', '-190px');
    }
    /*第三个小圆圈变色*/
    else if (widths == 484) {
        $('.circle_three').addClass('yuanquan_bg');
        $('.activity_three').fadeIn();
        $('.haobao_item_three').fadeOut();
    }
    /*第四个小圆圈变色*/
    else if (widths == 726) {
        $('.circle_four').addClass('yuanquan_bg');
        $('.activity_four').fadeIn();
        $('.haobao_item_four').fadeOut();
    }
    /*第五个小圆圈变色*/
    else if (widths == 968) {
        $('.circle_five').addClass('yuanquan_bg');
        $('.activity_five').fadeIn();
        $('.haobao_item_five').fadeOut();
    }
}


$(function () {

    /*活动倒计时*/
    freshTime();
    setInterval('freshTime()', 1000);

    /*小狗logo滚动定位*/
    var oTop = $(".puppy_logo").offset().top;
    var sTop = 0;
    $(window).scroll(function () {
        sTop = $(this).scrollTop();
        if (sTop >= oTop) {
            $(".puppy_logo").css({"position": "fixed", "top": "0"});
        } else {
            $(".puppy_logo").removeAttr('style');
        }
    });
    progressbar();
    timers = setInterval('progressbar()', 10);


    /* 立即开抢的弹窗*/
    $('.Shoot_button').on('click', function () {
        $('#myModal_boxs').modal('show');
    })

    $('.close_items_button').on('click', function () {
        $('#myModal_boxs').modal('hide');
    })

    /*立即开抢仅剩0份时*/
    var end_txts = $('.Shoot_button_text_end').text();
    if (end_txts <= 0) {
        $('.Shoot_button_text').fadeOut();
        $('.Shoot_button').addClass('Shoot_button_end');
        $('.Shoot_button').html('已抢完');
        $('.Shoot_button').unbind('click');
    }
})