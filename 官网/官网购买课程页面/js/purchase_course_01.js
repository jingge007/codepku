$(function () {
    var selectNum = 0,
        selectMoney = 0,
        select_courses = [];


    //保留两位小数
    //功能：将浮点数四舍五入，取小数点后2位
    function toDecimal(value) {
        var value = Math.round(parseFloat(value) * 100) / 100;
        var xsd = value.toString().split(".");
        if (xsd.length == 1) {
            value = value.toString() + ".00";
            return value;
        }
        if (xsd.length > 1) {
            if (xsd[1].length < 2) {
                value = value.toString() + "0";
            }
            return value;
        }
    }

    $('.img_icons').each(function (index, el) {
        $(this).click(function (event) {
            if ($('.tick_icon').eq(index).css('display') === "none") {
                select_courses.push($('.series_money').eq(index).data('courseid'));
                $('.tick_icon').eq(index).show();
                $('.purchase_box_center').css('visibility', 'visible');
                selectNum++;

                // 选择课程节数
                $('.private_class').html(48 * selectNum);
                $('.video_class').html(48 * selectNum);
                $('.question_item').html(12 * selectNum);

                // 已选课程的总金额
                selectMoney += parseFloat($('.series_money').eq(index).html());
                $('.footer_money_item').html(toDecimal(selectMoney));
            } else {
                var courseid = $('.series_money').eq(index).data('courseid');
                select_courses.splice(select_courses.indexOf(courseid), 1);
                $('.tick_icon').eq(index).hide();
                selectNum--;
                $('.private_class').html(48 * selectNum);
                $('.video_class').html(48 * selectNum);
                $('.question_item').html(12 * selectNum);
                selectMoney -= parseFloat($('.series_money').eq(index).html());
                $('.footer_money_item').html(toDecimal(selectMoney));
                if (selectMoney == 0) {
                    $('.purchase_box_center').css('visibility', 'hidden');
                }
            }
        });
    });
})