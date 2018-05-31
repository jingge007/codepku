$(function () {
    var selectNum = 0,
        selectMoney = 0,
        select_courses = [];

    //保留两位小数
    //功能：将浮点数四舍五入，取小数点后2位
    function toDecimal(x) {
        var f = parseFloat(x);
        if (isNaN(f)) {
            return;
        }
        f = Math.round(x * 100) / 100;
        return f;
    }

    $('.img_icons_level').each(function (index, el) {
        $(this).click(function (event) {
            if ($('.tick_icon_level').eq(index).css('display') === "none") {
                select_courses.push($('.series_money_level').eq(index).data('courseid'));
                $('.tick_icon_level').eq(index).show();
                $('.purchase_box_center').css('visibility', 'visible');
                selectNum++;

                // 选择课程节数
                $('.private_class').html(24 * selectNum);
                $('.video_class').html(24 * selectNum);
                $('.question_item').html(6 * selectNum);

                // 已选课程的总金额
                selectMoney += parseFloat($('.series_money_level').eq(index).html());
                $('.footer_money_item').html(toDecimal(selectMoney));
            } else {
                var courseid = $('.series_money_level').eq(index).data('courseid');
                select_courses.splice(select_courses.indexOf(courseid), 1);
                $('.tick_icon_level').eq(index).hide();
                selectNum--;

                $('.private_class').html(24 * selectNum);
                $('.video_class').html(24 * selectNum);
                $('.question_item').html(6 * selectNum);

                selectMoney -= parseFloat($('.series_money_level').eq(index).html());
                $('.footer_money_item').html(toDecimal(selectMoney));
                if (selectMoney == 0) {
                    $('.purchase_box_center').css('visibility', 'hidden');
                }
            }
        });
    });
})