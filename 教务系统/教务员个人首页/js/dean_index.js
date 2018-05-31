$(function () {

    var lens = $('.dean_content_item').length;
    if (lens > 12) {
        $('.page_boxs').fadeIn();
    } else {
        $('.page_boxs').fadeOut();
    }

    /*鼠标滑动变色*/
    $('.tanchuan_box .tables_boxs').mouseenter(function () {
        $(this).css('background', '#F5F5F5');
    }).mouseleave(function () {
        $(this).removeAttr('style');
    })

    /*弹窗*/
    $('.lanse_week').on('click', function () {
        $('#myModal_one').modal('show');
    })

    $('.lines_curriculum').on('click', function () {
        $('#myModal_two').modal('show');
    })

    $('.lines_Send').on('click', function () {
        $('#myModal_three').modal('show');
    })

    $('.lanse_nextweek').on('click', function () {
        $('#myModal_five').modal('show');
    })

    $('.soon_week_class').on('click', function () {
        $('#myModal_end_week').modal('show');
    })

    $('.soon_nextweek_class').on('click', function () {
        $('#myModal_end_nextweek').modal('show');
    })


    /*  时间筛选*/
    $(".one_input").datetimepicker({
        format: 'yyyy-mm-dd',
        minView: 'month',
        language: 'zh-CN',
        autoclose: true,
        startDate: new Date()
    }).on('changeDate', function (ev) {
        var starttime = $(".one_input").val();
        $(".two_input").datetimepicker('setStartDate', starttime);
        $(".one_input").datetimepicker('hide');
    });

    $(".two_input").datetimepicker({
        format: 'yyyy-mm-dd',
        minView: 'month',
        language: 'zh-CN',
        autoclose: true,
        startDate: new Date()
    }).on('changeDate', function (ev) {
        var endtime = $(".two_input").val();
        $(".one_input").datetimepicker('setEndDate', endtime);
        $(".two_input").datetimepicker('hide');
    });

    $('.modal').on('show.bs.modal', function () {
        $('html,body').height($(window).height());
        $('html,body').css('overflow', 'hidden');
    });
    $('.modal').on('hide.bs.modal', function () {
        $('html,body').removeAttr('style');
    })
})