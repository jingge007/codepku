$(function () {
    var mySwipers = new Swiper('#container_box1', {
        /* slidesPerView: 0,*/
        effect: "slide",
        direction: "horizontal",
        loop: true,
        autoplayDisableOnInteraction: false,
        autoplay: 3000,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 0,
            stretch: -25,
            depth: 100,
            modifier: 3,
            slidesPerView: false
        }
    })

    var mySwiper = new Swiper('#container_box2', {
        /*slidesPerView: 2,*/
        effect: "slide",
        direction: "horizontal",
        loop: true,
        autoplayDisableOnInteraction: false,
        autoplay: 3000,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 0,
            stretch: -25,
            depth: 100,
            modifier: 3,
            slidesPerView: false
        }
    })

    $('.audition_box').on('click', function () {
        $("html,body").animate({scrollTop: 180}, 500);
    })

    var player = videojs('video_item', {}, function () {
        console.log('Good to go!');
    });

    player.on('play', function () {                // 视频播放时
        console.log('开始/恢复播放');
    });
    player.on('pause', function () {             // 视频暂停播放时
        console.log('暂停播放');
        $('#myModal').modal('show');

    });
    player.on('ended', function () {           // 视频播放结束时
        console.log('结束播放');
    });

    $('.curriculum_item_button').on('click', function () {
        $('#myModal').modal('show');
        player.ready(function () {
            var myPlayer = this;
            myPlayer.play();
        });
    });

    if ($('#myModal').modal('hide')) {
        player.pause();
    }
})