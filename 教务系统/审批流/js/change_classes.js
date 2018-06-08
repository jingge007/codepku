$(function () {
    /*重置信息*/
    function resetFun() {
        $('.select_students_tbody').css('display', 'none');
        $('.modal-footer').hide();
        $('.select_elect_students').val('');
    }

    /*关闭选择学员模态框*/
    $('#select_students_modal').on('hidden.bs.modal', function (e) {
        resetFun();
    })

    //保留两位小数
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

    /*------------------------------选择学员---------------------------*/
    $('.change_classes_btn').on('click', function () {
        $('#select_students_modal').modal('show');
    })

    // 搜索按钮
    $('.search_students').on('click', function () {
        let select_input = $('.select_elect_students').val();
        if (select_input !== '') {
            $('.select_students_tbody').css('display', 'block');
            $('.select_students_text_tiem').hide();
        } else {
            $('.select_students_tbody').css('display', 'none');
            $('.select_students_text_tiem').show();
        }
    })

    /*选择学员的信息*/
    let students_talg = false;
    $('.select_students_text').on('click', function () {
        $(this).addClass('select_students_bs').siblings('.select_students_text').removeClass('select_students_bs');
        $('.modal-footer').show();
        students_talg = true;
    })

    /*弹窗的确定按钮*/
    $('.students_determine').on('click', function () {
        if (students_talg) {
            $('.change_classes_btn').hide();
            $('.change_information').show();
            students_talg = false;
        }
    })


    /*------------------------原课程--------------------------------*/

    /*默认协议与新协议*/
    let agreement_item = null;

    $('.select_box_center').change(function () {
        $('.original_table_item').show();
        $('.select_box_item_02').css('display', 'flex');

        if ($('.protocol_type').html() == '新协议') {
            agreement_item = true;
        } else {
            agreement_item = false;
        }
    })
    $('.doub_img').mouseenter(function () {
        if (agreement_item) {
            $('.doub_item_01').show();
            $('.doub_item_02').hide();
        } else {
            $('.doub_item_01').hide();
            $('.doub_item_02').show();
        }
    })

    $('.doub_img').mouseleave(function () {
        $('.doub_item_01').hide();
        $('.doub_item_02').hide();
    })

    // 可退金额的总计
    let original_value = 0;
    $('.checkbox_item').on('click', function () {
        if ($(this).is(':checked')) {
            original_value += parseFloat($('.original_money').html());
            /*可退总额*/
            $('.original_money_total').html(toDecimal(original_value));
        } else {
            original_value -= parseFloat($('.original_money').html());
            $('.original_money_total').html(toDecimal(original_value));
        }
        difference();
    })


    /*----------------------------------预换课程-----------------------------*/
    // 选择课程大类
    let pre_course_01 = false;
    let pre_course_02 = false;
    $('.pre_course_item_01').change(function () {
        pre_course_01 = true;
    })

    // 选择具体课程
    $('.pre_course_item_02').change(function () {
        pre_course_02 = true;
    })

    /*添加按钮*/
    let payable_value = 0;
    $('.pre_course_btn').on('click', function () {
        if (pre_course_01 && pre_course_02) {
            $('.select_pre_box').show();
            let pre_course_html =
                '<div class="pre_course_content">' +
                '<span class="pre_course_content_txt">Scratch Level1</span>' +
                '<select class="select_pre_course_content">' +
                '<option value="">选择班级</option>' +
                '<option value="111111111111">111111111111</option>' +
                '</select>' +
                '<div class="pre_course_content_item">' +
                '<span>应缴金额：</span>' +
                '<span class="payable_money">2399.00</span>' +
                '<span>元</span>' +
                '</div>' +
                '<div class="subtraction_btn">ㅡ</div>' +
                '</div>'

            $('.select_pre_box').append(pre_course_html);
            payable_value += parseFloat($('.payable_money').html());
            /*应缴总额*/
            $('.payable_money_total').html(toDecimal(payable_value));
            difference();
        }
    })

    /*移除按钮*/
    $(document).on('click', '.subtraction_btn', function () {
        $(this).parents('.pre_course_content').remove();
        payable_value -= parseFloat($('.payable_money').html());
        let pre_length = $('.pre_course_content').length;
        if (pre_length == 0) {
            payable_value = 0;
            $('.payable_money_total').html(toDecimal(0.00));
        } else {
            $('.payable_money_total').html(toDecimal(payable_value));
        }
        difference();
    })

    //应付差价
    function difference() {
        let price_difference = 0;
        price_difference = (parseFloat(payable_value) - parseFloat(original_value));
        if (price_difference == 0) {
            $('.difference_add').hide();
        }
        else if (price_difference > 0) {
            $('.difference_add').show();
        }
        else {
            $('.difference_add').hide();
        }
        $('.difference_value').html(toDecimal(price_difference));
    }

    //重新申请的弹窗
    $('.remarks_box_determine').on('click', function () {
        $('#again_modal').modal('show');
    })
})