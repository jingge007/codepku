$(function () {
    $('.nav_box .item').on('click', function () {
        $(this).addClass('selected').siblings('span').removeClass('selected');
    })

    $('.tearcher_item').on('click', function () {
        $(this).addClass('selected').siblings('span').removeClass('selected');
    })


    /*var lensItem = $('.nav_box .item').length;
    if (lensItem > 9) {
        $('.nav_box').css('justify-content', 'start');
    } else {
        $('.nav_box').css('justify-content', 'center');
    }


    var lensItems = $('.tearcher_box_center .tearcher_item').length;
    if (lensItems > 9) {
        $('.tearcher_box_center').css('justify-content', 'start');
    } else {
        $('.tearcher_box_center').css('justify-content', 'center');
    }*/
})