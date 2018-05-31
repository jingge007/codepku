$(function () {
    var selectNum = 0,
        selectMoney = 0,
        discount_price = 0,
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
                $('.discount_item').show();
                $('.original_price_box').show();
                selectNum++;

                // 选择课程节数
                $('.private_class').html(12 * selectNum);
                $('.video_class').html(12 * selectNum);
                $('.question_item').html(3 * selectNum);

                // 已选课程的总金额
                selectMoney += parseFloat($('.series_money_level').eq(index).html());

                // 选择一个Level打9.5折
                if (selectNum == 1) {
                    discount_price = selectMoney * 0.95;
                    $('.discount_text').html('9.5');
                }

                //选择两个或者两个以上的Level打9折
                else if (selectNum >= 2) {
                    discount_price = selectMoney * 0.90;
                    $('.discount_text').html('9');
                }
                // 原价
                $('.original_price').html(toDecimal(selectMoney));

                // 折扣价
                $('.footer_money_item').html(toDecimal(discount_price));

            } else {
                var courseid = $('.series_money_level').eq(index).data('courseid');
                select_courses.splice(select_courses.indexOf(courseid), 1);
                $('.tick_icon_level').eq(index).hide();
                selectNum--;

                $('.private_class').html(12 * selectNum);
                $('.video_class').html(12 * selectNum);
                $('.question_item').html(3 * selectNum);

                selectMoney -= parseFloat($('.series_money_level').eq(index).html());
                if (selectNum <= 1) {
                    discount_price = selectMoney * 0.95;
                    $('.discount_text').html('9.5');
                }
                else if (selectNum >= 2) {
                    discount_price = selectMoney * 0.90;
                    $('.discount_text').html('9');
                }

                // 原价
                $('.original_price').html(toDecimal(selectMoney));

                // 折扣价
                $('.footer_money_item').html(toDecimal(discount_price));

                if (discount_price == 0) {
                    $('.purchase_box_center').css('visibility', 'hidden');
                    $('.discount_item').hide();
                    $('.original_price_box').hide();
                }
            }
        });
    });
})