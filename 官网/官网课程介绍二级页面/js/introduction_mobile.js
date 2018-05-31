$(function () {
    var mySwiper = new Swiper('#mobile_swiper', {
        effect: 'slide',
        loop: true,
        slidesPerView: 'auto',              // 会根据容器container的宽度调整slides数目。‘auto’不兼容loop模式
        spaceBetween: -30                  //swiper-slide之间的间隙
    });

    let mobile_title_text = [
        {txt: 'Scratch Level 1'},
        {txt: 'Scratch Level 2'},
        {txt: 'Scratch Level 3'},
        {txt: 'Scratch Level 4'},
        {txt: 'Python Level 1'},
        {txt: 'Python Level 2'},
        {txt: 'Python Level 3'},
        {txt: 'Python Level 4'},
        {txt: 'NOIP Level 1'},
        {txt: 'NOIP Level 2'},
        {txt: 'NOIP Level 3'},
        {txt: 'NOIP Level 4'}
    ];

    let mobile_level_num = 0;
    $('.mobile_continue').on('click', function () {
        $("html,body").animate({scrollTop: 0}, 500);
        mobile_level_num++;
        $.each(mobile_title_text, function () {
            if (mobile_level_num !== 0) {
                //Scratch课程系列
                if (mobile_level_num > 0 && mobile_level_num <= 3) {
                    $('.mobile_banner_box').removeClass('mobile_banner_Python mobile_banner_NOIP').addClass('mobile_banner_Scratch');
                    $('.mobile_instructions').css('display', 'block');
                }
                // Python课程系列
                else if (mobile_level_num > 3 && mobile_level_num <= 7) {
                    $('.mobile_banner_box').removeClass('mobile_banner_Scratch mobile_banner_NOIP').addClass('mobile_banner_Python');
                    $('.mobile_instructions').css('display', 'none');
                }
                // NOIP课程系列
                else if (mobile_level_num > 7 && mobile_level_num <= 11) {
                    $('.mobile_banner_box').removeClass('mobile_banner_Scratch mobile_banner_Python').addClass('mobile_banner_NOIP');
                    $('.mobile_instructions').css('display', 'block');
                }
                // 重置课程系列
                if (mobile_level_num == 11) {
                    $('.mobile_banner_title').text(mobile_title_text[mobile_level_num].txt);
                    $('.mobile_continue_txt').text(mobile_title_text[0].txt);
                    mobile_level_num = -1;
                } else if (mobile_level_num > 0 && mobile_level_num <= 10) {
                    $('.mobile_banner_title').text(mobile_title_text[mobile_level_num].txt);
                    $('.mobile_continue_txt').text(mobile_title_text[mobile_level_num + 1].txt);
                    // 查看学习包
                    if (mobile_level_num == 1 || mobile_level_num == 2 || mobile_level_num == 3) {
                        $('.mobile_learning_package').css('display', 'block');
                    } else {
                        $('.mobile_learning_package').css('display', 'none');
                    }
                }
            } else if (mobile_level_num == 0) {
                $('.mobile_banner_title').text(mobile_title_text[mobile_level_num].txt);
                $('.mobile_continue_txt').text(mobile_title_text[mobile_level_num + 1].txt);
                $('.mobile_banner_box').removeClass('mobile_banner_Python mobile_banner_NOIP').addClass('mobile_banner_Scratch');
            }
        })
    });

})