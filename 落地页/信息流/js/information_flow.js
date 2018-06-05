$(function () {
    // 立即领取
   // let heights = $('.mobile_sign_up_form').offset().top;
    $('.btm_btn').on('click', function () {
        $("html,body").animate({scrollTop: 0}, 500);
    })
})