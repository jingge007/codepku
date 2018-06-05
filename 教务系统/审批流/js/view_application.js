$(function () {
    /*默认协议与新协议*/
    let agreement_item = null;
    if ($('.protocol_type').html() == '新协议') {
        agreement_item = true;
    } else {
        agreement_item = false;
    }

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
})