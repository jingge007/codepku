$(function () {
    /*编玩边学明星学员轮播图*/
    var mySwipers = new Swiper('#container_box1', {
        effect: 'coverflow',
        loop: true,
        autoplayDisableOnInteraction: false,
        autoplay: 3000,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        slideToClickedSlide: true,   //点击的slide会居中
        coverflow: {
            rotate: 0,
            stretch: -80,
            depth: 100,
            modifier: 3,
            slidesPerView: true,
            slideShadows: false        // slideShadows：开启slide阴影。默认 true
        }
    });

    /*师资团队轮播图*/
    var mySwiper = new Swiper('#container_box2', {
        effect: 'coverflow',
        loop: true,
        autoplayDisableOnInteraction: false,
        autoplay: 3000,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        slideToClickedSlide: true,   //点击的slide会居中
        coverflow: {
            rotate: 0,
            stretch: -80,
            depth: 100,
            modifier: 3,
            slidesPerView: true,
            slideShadows: false        // slideShadows：开启slide阴影。默认 true
        }
    });

    /*点击立即免费领取*/
    $('.erweima_item_button').on('click', function () {
        $("html,body").animate({scrollTop: 0}, 800);
    })


    /*视频播放*/
    var player = videojs('video_item', {}, function () {
        console.log('Good to go!');
    });

    player.on('play', function () {                // 视频播放时
        console.log('开始/恢复播放');
    });
    player.on('pause', function () {             // 视频暂停播放时
        console.log('暂停播放');

    });
    player.on('ended', function () {           // 视频播放结束时
        console.log('结束播放');
    });


    /*点击视频介绍*/
    $('.curriculum_button').on('click', function () {
        $('#myModal').modal('show');
        var videoUrl = $(this).data('video-link');
        videojs("video_item", {}, function () {
            window.myPlayer = this;
            $("#video_item").attr("src", videoUrl);
            myPlayer.src(videoUrl);
            myPlayer.load(videoUrl);
            myPlayer.play();
        });

    })

    //  停止播放
    $("#myModal").on("hidden.bs.modal", function () {
        player.pause();
    });

    /*点击关闭按钮关闭弹窗*/
    $('.closeItem_button').on('click', function () {
        $('#myModal').modal('hide');
    })

    /*电话咨询*/
    $('.logo_boxs_six').mouseenter(function () {
        $('.dianhua_img').fadeIn();
    });

    $('.logo_boxs_six').mouseleave(function () {
        $('.dianhua_img').fadeOut();
    });

    /*固定新年特惠表单*/
    var oTop = $(".logo_boxs").offset().top - 100;
    var sTop = 0;
    $(window).scroll(function () {
        sTop = $(this).scrollTop();
        if (sTop >= oTop) {
            $(".logo_boxs").css({"position": "fixed", "top": "105px"});
        } else {
            $(".logo_boxs").removeAttr('style');
        }
    });
})