$(function () {
    /*老师团队区域的左右切换轮播功能*/
    var mySwiper = new Swiper('.swiper-container', {
        /* slidesPerView: 2,*/
        autoplayDisableOnInteraction: false,
        effect: "slide",
        direction: "horizontal",
        loop: true,
        autoplay: 3000
    })

    var can_view = 0;
    var times = 0;
    var heights = $(window).height();

    function heightShow() {
        $('.marketing_box').height(heights);
        $('.marketing_box').css('overflow', 'hidden');
        $('.video_center').hide();
    }

    function heightHide() {
        $('.marketing_box').removeAttr('style');
        $('.video_center').show();
    }


    /*视频播放功能*/
    var player = videojs('video_item', {}, function () {
        console.log('Good to go!');
    });

    player.on('play', function () {                // 视频播放时
        console.log('开始/恢复播放');
    });
    player.on('pause', function () {             // 视频暂停播放时
        console.log('暂停播放');
        // $('#myModal').modal('show');

    });
    player.on('ended', function () {           // 视频播放结束时
        console.log('结束播放');
        $('#myModal').modal('show');
        $('.modal_one').hide();
        $('.modal_two').show();
    });

    player.on('timeupdate', function () {             // 视频进度的更新事件
        times = parseInt(player.currentTime());
        console.log(times);
        if (times >= 120 && can_view == 0) {       // 视频播放到两分钟时，弹出弹窗
            $('#myModal').modal('show');
            $('.modal_one').show();
            $('.modal_two').hide();
            player.pause();
            player.currentTime(0);// 暂停视频播放
            heightShow();
            console.log('视频已经播放到2分钟了');
        }
    });

    $('.close_item_button').on('click', function () {
        heightHide();
        $('#myModal').modal('hide');
    })

    /*banner区域的弹窗*/
    $('.marketing_banner').on('click', function () {
        $('#myModal_banner').modal('show');
        heightShow();
    })

    $('.delete_boxs').on('click', function () {
        $('#myModal_banner').modal('hide');
        heightHide();
    })
})
















