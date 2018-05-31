$(function () {

    var falgTag = false;
    var lengths = 0;
    var teachers_name = '';
    var number_txt = 0;
    $('.center_box .item').on('click', function () {
        $(this).addClass('selected').siblings('span').removeClass('selected');
    })

    // 总共只能选取8个老师
    $('.tearcher_box .tearcher_item').on('click', function () {
        if (lengths >= 8) {
            $(this).removeClass('selected');
            lengths = $('.tearcher_box').find('.selected').length
            return false;
        }
        falgTag = true
        if (falgTag) {
            $(this).toggleClass('selected');
            lengths = $('.tearcher_box').find('.selected').length
            if ($(this).hasClass('selected') == true) {
                number_txt++;
                teachers_name = $(this).data('name');
                var titles = '<div class="titles_item">1</div>'
                var numbers = '<div class="number_item reds">21</div>'
                var tables =
                    '<tr class="add_tab">' +
                    '<td>1</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '<td>——</td>' +
                    '</tr>'
                $('.add_txt').append(titles);
                $('.titles_item').eq(number_txt - 1).html(`${teachers_name}`);
                $('.add_numbers').append(numbers)
                $('.kaoqin_center').append(tables)
            } else {

            }
        }
    })
    /*获取下拉框的选中的文本值*/
    $('.worker_item').on('change', function () {
        var texts = $(this).children('option:selected').text();
        $('.txt').html(texts)
    })
})