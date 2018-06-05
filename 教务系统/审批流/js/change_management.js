$(function () {
    /*操作栏的文字变色*/
    let dataIndex = null;
    $('.operation_item_txt').on('click', function () {
        $(this).addClass('operation_color').siblings('.operation_item_txt').removeClass('operation_color');

        dataIndex = $(this).data('index');
        //催办的弹窗
        if (dataIndex == 2) {
            $('#process_modal').modal('show');
            $('.operation_item_box').hide();
        }
        //催办的弹窗
        else if (dataIndex == 3) {
            $('#urge_modal').modal('show');
            $('.operation_item_box').hide();
        }
        //撤回的弹窗
        else if (dataIndex == 4) {
            $('#withdraw_modal').modal('show');
            $('.operation_item_box').hide();
        }
    })

    /*关闭模态框清空数据*/
    $('#withdraw_modal,#again_modal').on('hidden.bs.modal', function (e) {
        $('.withdraw_box').val('');
    })

    // 进程tab栏的切换
    let tabIndex = null;
    $('.modal_nav_item').on('click', function () {
        $(this).addClass('modal_bottom_color').siblings('.modal_nav_item').removeClass('modal_bottom_color');
        tabIndex = $(this).index();
        $('.modal_center_item').eq(tabIndex).show().siblings('.modal_center_item').hide();
    })

    // 头部选项卡的展开与收起
    let tab_talg = false;
    $('.expand_btn').on('click', function () {
        if (!tab_talg) {
            $(this).addClass('expand_down');
            $('.expand_btn').html('收起选项');
            tab_talg = true;
        } else {
            $(this).removeClass('expand_down');
            $('.expand_btn').html('展开选项');
            tab_talg = false;
        }
    });
    // 进程条的切换
    $('.icon_item_right').on('click', function () {
        $(this).hide();
        $('.icon_item_left').show();
        $('.process_bar_line').css('left', '-260px');
    })

    $('.icon_item_left').on('click', function () {
        $(this).hide();
        $('.icon_item_right').show();
        $('.process_bar_line').css('left', '0px');
    })
})