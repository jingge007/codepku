$(function () {
    // 返回顶部
    $('.back_top_item').on('click', function () {
        $("html,body").animate({scrollTop: 0}, 500);
    })

    // 滚动到距离底部还有300像素时，展示返回顶部按钮
    $(window).scroll(function () {
        let window_height = parseFloat($(window).scrollTop());
        if (window_height >= 647) {
            $('.back_top_item').slideDown(200);
        } else {
            $('.back_top_item').slideUp(200);
        }
        console.log($(window).scrollTop());
    })
})