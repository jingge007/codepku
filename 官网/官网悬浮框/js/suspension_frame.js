$(function () {
    // 返回顶部
    $('.back_top_item').on('click', function () {
        $("html,body").animate({scrollTop: 0}, 500);
    })
})