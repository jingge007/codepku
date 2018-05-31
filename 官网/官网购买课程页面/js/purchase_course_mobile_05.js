$(function () {
    var selectMoney = 0,
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

                // 已选课程的总金额
                selectMoney += parseFloat($('.mobile_type_money').eq(index).html());
                $('.payment_money').html(toDecimal(selectMoney));
            } else {
                var courseid = $('.mobile_type_money').eq(index).data('courseid');
                select_courses.splice(select_courses.indexOf(courseid), 1);
                $('.mobile_select').eq(index).hide();

                selectMoney -= parseFloat($('.mobile_type_money').eq(index).html());
                $('.payment_money').html(toDecimal(selectMoney));
            }
        });
    });
})