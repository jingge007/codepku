$(function () {
    // 营期设置的轮播图
    let seting_01 = new Swiper('.seting_01', {
        observer: true,
        observeParents: true,
        autoplay: 2500,
        slidesPerView: 4,
        direction: "horizontal",
        loop: true,
        grabCursor: true,
        autoplayDisableOnInteraction: false
    });

    let seting_02 = new Swiper('.seting_02', {
        observer: true,
        observeParents: true,
        autoplay: 3000,
        slidesPerView: 4,
        direction: "horizontal",
        loop: true,
        grabCursor: true,
        autoplayDisableOnInteraction: false
    })

    let seting_03 = new Swiper('.seting_03', {
        observer: true,
        observeParents: true,
        autoplay: 3500,
        slidesPerView: 4,
        direction: "horizontal",
        loop: true,
        grabCursor: true,
        autoplayDisableOnInteraction: false
    })

    /*tab栏切换*/
    $('.camp_details_tab> span').each(function (index) {
        $(this).on('click', function () {
            $(this).addClass('camp_tab_select').siblings(".camp_tab_item").removeClass('camp_tab_select');
            $('.camp_box').eq(index).show().siblings(".camp_box").hide();
        })
    })
})