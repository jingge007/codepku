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
        } else {
            $('.select_students_tbody').css('display', 'none');
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

    /*默认协议与新协议*/
    let agreement_item = null;
    $('.select_box_center').change(function () {
        $('.original_table').show();
        $('.select_box_item_02').show();

        if ($('.protocol_type').html() == '新协议') {
            agreement_item = true;
        } else {
            agreement_item = false;
        }
    })
    $('.doub_img').mouseenter(function () {
        if (agreement_item == true) {
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
            $('.difference_value').html(toDecimal(original_value));
        } else {
            original_value -= parseFloat($('.original_money').html());
            $('.difference_value').html(toDecimal(original_value));
        }
    })
})