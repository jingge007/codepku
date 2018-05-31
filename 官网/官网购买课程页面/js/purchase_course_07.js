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

    $('.img_icons').each(function (index, el) {
        $(this).click(function (event) {
            if ($('.tick_icon').eq(index).css('display') === "none") {
                select_courses.push($('.series_money').eq(index).data('courseid'));
                $('.tick_icon').eq(index).show();
                $('.purchase_box_center').css('visibility', 'visible');
                selectNum++;

                $('.private_class').html(12 * selectNum);
                $('.video_class').html(12 * selectNum);
                $('.question_item').html(3 * selectNum);

                selectMoney += parseFloat($('.series_money').eq(index).html());
                $('.footer_money_item').html(toDecimal(selectMoney));
            } else {
                var courseid = $('.series_money').eq(index).data('courseid');
                select_courses.splice(select_courses.indexOf(courseid), 1);
                $('.tick_icon').eq(index).hide();
                selectNum--;

                $('.private_class').html(12 * selectNum);
                $('.video_class').html(12 * selectNum);
                $('.question_item').html(3 * selectNum);

                selectMoney -= parseFloat($('.series_money').eq(index).html());
                $('.footer_money_item').html(toDecimal(selectMoney));
                if (selectMoney == 0) {
                    $('.purchase_box_center').css('visibility', 'hidden');
                }
            }
        });
    });
})