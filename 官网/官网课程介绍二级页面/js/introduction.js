$(function () {
    let title_text = [
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

    let level_num = 0;
    $('.purchase_boxs_text').on('click', function () {
        $("html,body").animate({scrollTop: 0}, 500);
        level_num++;
        $.each(title_text, function () {
            if (level_num !== 0) {
                //Scratch课程系列
                if (level_num > 0 && level_num <= 3) {
                    $('.introduction_banner').removeClass('Python_banner NOIP_banner').addClass('Scratch_banner');
                    $('.item_title_05').css('display', 'block');
                }
                // Python课程系列
                else if (level_num > 3 && level_num <= 7) {
                    $('.introduction_banner').removeClass('Scratch_banner NOIP_banner').addClass('Python_banner');
                    $('.item_title_05').css('display', 'none');
                }
                // NOIP课程系列
                else if (level_num > 7 && level_num <= 11) {
                    $('.introduction_banner').removeClass('Scratch_banner Python_banner').addClass('NOIP_banner');
                    $('.item_title_05').css('display', 'block');
                }
                // 重置课程系列
                if (level_num == 11) {
                    $('.banner_text_title').text(title_text[level_num].txt);
                    $('.purchase_boxs_item_text').text(title_text[0].txt);
                    level_num = -1;
                } else if (level_num > 0 && level_num <= 10) {
                    $('.banner_text_title').text(title_text[level_num].txt);
                    $('.purchase_boxs_item_text').text(title_text[level_num + 1].txt);
                    // 查看学习包
                    if (level_num == 1 || level_num == 2 || level_num == 3) {
                        $('.purchase_money').css('display', 'inline-block');
                    } else {
                        $('.purchase_money').css('display', 'none');
                    }
                }
            } else if (level_num == 0) {
                $('.banner_text_title').text(title_text[level_num].txt);
                $('.purchase_boxs_item_text').text(title_text[level_num + 1].txt);
                $('.introduction_banner').removeClass('Python_banner NOIP_banner').addClass('Scratch_banner');
            }
        })
    });
})