$(function () {
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
    });
})