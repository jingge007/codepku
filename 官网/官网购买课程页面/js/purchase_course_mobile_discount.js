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

    $('.mobile_type_icon').each(function (index, el) {
        $(this).click(function (event) {
            if ($('.mobile_select').eq(index).css('display') === "none") {
                select_courses.push($('.mobile_type_money').eq(index).data('courseid'));
                $('.mobile_select').eq(index).show();
                $('.discount_mobile_txt').hide();
                $('.discount_box_mobile').show();
                selectNum++;
                // 已选课程的总金额
                selectMoney += parseFloat($('.mobile_type_money').eq(index).html());

                // 选择一个Level打9.5折
                if (selectNum == 1) {
                    discount_price = selectMoney * 0.95;
                    $('.mobile_discount').html('9.5');
                }
                //选择两个或者两个以上的Level打9折
                else if (selectNum >= 2) {
                    discount_price = selectMoney * 0.90;
                    $('.mobile_discount').html('9');
                }
                // 原价
                $('.payment_money').html(toDecimal(selectMoney));
                // 折扣价
                $('.mobile_present').html(toDecimal(discount_price));

            } else {
                var courseid = $('.mobile_type_money').eq(index).data('courseid');
                select_courses.splice(select_courses.indexOf(courseid), 1);
                $('.mobile_select').eq(index).hide();
                selectNum--;
                selectMoney -= parseFloat($('.mobile_type_money').eq(index).html());
                if (selectNum <= 1) {
                    discount_price = selectMoney * 0.95;
                    $('.mobile_discount').html('9.5');
                }
                else if (selectNum >= 2) {
                    discount_price = selectMoney * 0.90;
                    $('.mobile_discount').html('9');
                }
                $('.payment_money').html(toDecimal(selectMoney));
                $('.mobile_present').html(toDecimal(discount_price));

                if (discount_price == 0) {
                    $('.discount_box_mobile').hide();
                    $('.discount_mobile_txt').show();
                }
            }
        });
    });
})