$(function () {
    var teachers_name = '';
    var indexdatas = 0;
    $('.center_box .item').on('click', function () {
        $(this).addClass('selected').siblings('span').removeClass('selected');
    })

    // 选取老师
    $('.tearcher_box .tearcher_item').on('click', function () {
        $(this).toggleClass('selected');
        indexdatas = $(this).index();
        $(this).attr('id', 'idIndex_' + indexdatas);
        teachers_name = $(this).text();
        if ($(this).hasClass('selected') == true) {
            var titles = '<div class="titles_item ' + 'idIndex_' + indexdatas + '">1</div>'
            var number_text = '<div class="number_item reds ' + 'idIndex_' + indexdatas + '">21</div>'
            var tables =
                '<li class="add_tab clearfix ' + 'idIndex_' + indexdatas + '">' +
                '<span>——</span>' +
                '<span>——</span>' +
                '<span>——</span>' +
                '<span>——</span>' +
                '<span>——</span>' +
                '<span>——</span>' +
                '<span>——</span>' +
                '<span>——</span>' +
                '<span>——</span>' +
                '<span>——</span>' +
                '<span>——</span>' +
                '<span>——</span>' +
                '<span>——</span>' +
                '<span>——</span>' +
                '<span>——</span>' +
                '<span>——</span>' +
                '<span>——</span>' +
                '</li>'
            $('.add_txt').append(titles);
            $('.add_txt').find('.idIndex_' + indexdatas).html(`${teachers_name}`);
            $('.numbers').append(number_text);
            $('.kaoqin_center').append(tables);
        } else {
            $('.titles_item').remove('.idIndex_' + indexdatas);
            $('.number_item').remove('.idIndex_' + indexdatas);
            $('.add_tab').remove('.idIndex_' + indexdatas);
            $(this).attr('id', '');
        }
    })
    /*获取下拉框的选中的文本值*/
    $('.select_item_boxs').on('change', function () {
        var texts = $(this).children('option:selected').text();
        $('.border_tiem').html(texts);
        $('.passengers_txt_01').html(texts);
        if (texts == '考勤') {
            $('.passengers_txt_02').html('缺勤');
        } else if (texts == '作业提交') {
            $('.passengers_txt_02').html('未提交');
        } else if (texts == '评价进度') {
            $('.passengers_txt_02').html('未评价');
        }
    })


    /*上一页*/
    $('.item_next').on('click', function () {

    })

    /*下一页*/
    $('.item_paty').on('click', function () {

    })

   /* var lensItem = $('.center_box .item').length;
    if (lensItem > 9) {
        $('.statistics_box .center_box').css('justify-content', 'start');
    } else {
        $('.statistics_box .center_box').css('justify-content', 'center');
    }*/

})