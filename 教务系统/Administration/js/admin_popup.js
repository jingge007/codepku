$(function () {
    var height = 257,
        heights = '',
        shoeFalg = true;

    /*点击关闭按钮关闭弹窗*/
    $('.popup_title .close').on('click', function () {
        $('.admin_popup').hide();
    })

    /*点击加号添加一行*/
    $('.add_box .add').on('click', function () {
        var htm =
            '<div class="input_box">' +
            '<div class="borders">' +
            '<input type="checkbox" name="test" class="border_box"/>' +
            '<input type="text" class="input_text" maxlength="30" placeholder="请输入扣分原因">' +
            '</div>' +
            '<input type="number" class="number_text" min="-5" max="0"/>' +
            '</div>'
        $('.rewrad_content').append(htm)
        heights = $('.admin_popup .rewrad_content').height();
        if (heights >= height) {
            $('.admin_popup .rewrad_content').addClass('scroll');
        }
    })

    /*点击减号号移出一行*/
    $('.add_box .reduce').on('click', function () {
        if (shoeFalg) {
            $('.border_box').show();
            shoeFalg = false
        } else {
            $('.border_box').hide();
            shoeFalg = true
        }
        $('.border_box').each(function () {
            if ($(this).prop("checked") == true) {
                $(this).parents('.input_box').remove();
            }
        })
        var height_box = $('.rewrad_content .input_box').height()
        var Len = $('.rewrad_content').find('.input_box').length;
        if ((height_box * Len) <= height) {
            $('.admin_popup .rewrad_content').removeClass('scroll');
        }
    })
})