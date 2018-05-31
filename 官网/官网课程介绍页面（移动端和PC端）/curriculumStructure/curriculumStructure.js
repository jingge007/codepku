$(function () {
    /*课程内容的左右轮播*/
    var mySwiper = new Swiper('.list_boxs', {
        slidesPerView: 'auto',
        spaceBetween: 20            //slide间隙
    });

    /*课程体系的tab栏切换内容*/
    $('.system_list_item').on('click', function () {
        $(this).addClass('system_list_itembox').siblings().removeClass('system_list_itembox');
        $(this).find('h2').addClass('system_list_itembox_title').parents().siblings().find('h2').removeClass('system_list_itembox_title');
        $(this).find('p').addClass('system_list_itembox_conters').parents().siblings().find('p').removeClass('system_list_itembox_conters');
        $(this).find('.system_list_item_contents').show().parents().siblings().find('.system_list_item_contents').hide();
    })
})