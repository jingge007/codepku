$(function () {
    /*领取福利*/
    let talg = true;
    $('.receive_btn').on('click', function () {
        if (talg) {
            $('.unreceive_icon').show();
            $('.receive_icon').hide();
            talg = false;
        } else {
            $('.receive_icon').show();
            $('.unreceive_icon').hide();
            talg = true;
        }
    })

    let window_hieght = $(window).height();
    if (window_hieght < 667) {
        $('.mobile_sign_up_form').css('margin-top', '-120px')
    } else {
        $('.mobile_sign_up_form').attr('style', '');
    }
    $('.mobile_sign_up').height($("body").height());
    $('.mobile_sign_up').css('overflow', 'hidden');

    /*额外福利详情*/
    $('.welfare_box_txt').on('click', function () {
        $('.mobile_sign_up').attr('style', '');
        $('.mobile_sign_up').attr('overflow', 'auto');
        $('.mobile_details_box').show();
        let hens = $(this).height();
        let heights = $('.extra_benefits_box_banner').offset().top;
        $("html,body").animate({scrollTop: heights - hens}, 500);
        $(this).hide();
    })

    /*报名成功*/
    $('.verification_code_btn').on('click', function () {
        $('#myModal').modal('show');
    })
})