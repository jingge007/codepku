$(function () {
    /*关闭弹窗*/
    $('.close_btn').on('click', function () {
        $('#add_group_Modal').modal('hide');
        $('#edit_group_Modal').modal('hide');
        $('#teacher_group_Modal').modal('hide');
    })

    /*---------------------------新增小组------------------------------*/

    $('.add_group_btn').on('click', function () {
        $('#add_group_Modal').modal('show');
        resetText();
    })

    /*选择课程*/
    var type = "";
    $('.selected_input').change(function () {
        type = $(this).val();
    })

    /*重置信息*/
    function resetText() {
        $('.add_input_item').val('');
        $('.selected_input').val('请选择');
        $('.add_leader_item').val('');
        $('.add_search').val('');
        $('.add_member_number').html('');
        $('.add_member_num').text('');
    }

    let num_items = "";
    /*可选老师人数*/
    let teachers = $('.add_name_item').length;
    $('.add_teachers_num').text(`${teachers}`);

    /*小组成员的人数*/
    let numbers_item = $('.add_icon_item').length;
    let member_num = $('.add_member_num').text(`${numbers_item}`);

    /*选取老师*/
    $(document).on('click', '.add_name_item', function (event) {
        event.stopPropagation();    //  阻止事件冒泡
        let name_txt = $(this).text();
        $(this).remove();
        teachers--;
        numbers_item++;
        let teacher_name =
            '<p class="member_number_item add_icon_item">' +
            '<span>' + name_txt + '</span>' +
            '<i class="close_icon add_btn_items"></i>' +
            '</p>';
        $('.add_member_number').append(teacher_name);
        $('.add_teachers_num').text(`${teachers}`);
        member_num = $('.add_member_num').text(`${numbers_item}`);
        num_items = parseInt(numbers_item);
    })

    /*删除小组成员*/
    $(document).on('click', '.add_btn_items', function (event) {
        event.stopPropagation();    //  阻止事件冒泡
        let member_txt = $(this).parent().text();
        $(this).parent().remove();
        numbers_item--;
        teachers++;
        let member_name =
            '<span class="selected_teachers_item add_name_item">' + `${member_txt}` + '</span>';
        $('.add_selected_teachers').append(member_name);
        $('.add_teachers_num').text(`${teachers}`);
        member_num = $('.add_member_num').text(`${numbers_item}`);
        num_items = parseInt(numbers_item);
    })


    /*保存*/
    $('.add_item_btn').on('click', function () {
        let group_name = $('.add_input_item').val();
        let leader_name = $('.add_leader_item').val();
        let select_txt = $('.selected_input').val();

        if (select_txt == "请选择" && group_name == "") {
            $('.prompt_box').show().fadeOut(3000);
            $('.prompt_box_txt').html('课程名称与小组名称不能为空！')
            return false;
        }

        if (select_txt == "请选择" && group_name !== "") {
            $('.prompt_box').show().fadeOut(3000);
            $('.prompt_box_txt').html('请选择课程！')
            return false;
        }

        if (group_name == "" && select_txt !== "请选择") {
            $('.prompt_box').show().fadeOut(3000);
            $('.prompt_box_txt').html('请输入小组名称！')
            return false;
        }
        let html =
            '<ul class="group_tbody">' +
            '<li class="tbody_item th_curriculum">' +
            '<span>' + type + '</span>' +
            '</li>' +
            '<li class="tbody_item th_groupName">' +
            '<span>' + group_name + '</span>' +
            '</li>' +
            '<li class="tbody_item th_groupLeader">' +
            '<span>' + leader_name + '</span>' +
            '</li>' +
            '<li class="tbody_item th_number">' +
            '<span>' + `${num_items}` + '</span>' +
            '</li>' +
            '<li class="tbody_item th_member">' +
            '<span>亮亮 亮亮 亮亮 亮亮 亮亮 亮亮 亮亮 亮亮 亮亮 亮亮 亮亮 亮亮</span>' +
            '</li>' +
            '<li class="tbody_item th_operation">' +
            '<span class="th_edit_btn">编辑</span>' +
            '</li>' +
            '</ul>';

        if (type == 'Scratch') {
            $('.type_Scratch').append(html);
        } else if (type == 'Python') {
            $('.type_Python').append(html);
        }
        else {
            $('.type_NOIP').append(html);
        }
        $('#add_group_Modal').modal('hide');


        /*---编辑---*/
        $('.th_edit_btn').on('click', function (event) {
            $('#edit_group_Modal').modal('show');
            event.stopPropagation();    //  阻止事件冒泡
        })
    });

    /*编辑小组*/
    let edit_teachers_length = $('.edit_name_item').length;
    $('.edit_teachers_num').text(`${edit_teachers_length}`);

    $(document).on('click', '.edit_name_item', function (event) {
        event.stopPropagation();    //  阻止事件冒泡
        let edit_name_txt = $(this).text();
        $(this).remove();
        edit_teachers_length--;
        let edit_teacher_name =
            '<p class="member_number_item edit_icon_item">' +
            '<span>' + edit_name_txt + '</span>' +
            '<i class="close_icon edit_btn_items"></i>' +
            '</p>';
        $('.edit_member_number').append(edit_teacher_name);
        $('.edit_teachers_num').text(`${edit_teachers_length}`);
    });

    /*删除小组成员*/
    $(document).on('click', '.edit_btn_items', function (event) {
        event.stopPropagation();    //  阻止事件冒泡
        $(this).parent().remove();
        let edit_member_txt = $(this).parent().text();
        edit_teachers_length++;
        let edit_member_name =
            '<span class="selected_teachers_item edit_name_item">' + `${edit_member_txt}` + '</span>';
        $('.edit_name_item_box').append(edit_member_name);
        $('.edit_teachers_num').text(`${edit_teachers_length}`);
    });


    $('.edit_item_btn').on('click', function () {
        $('#edit_group_Modal').modal('hide');
    })

    /*-------------------------------可选老师---------------------------------------------*/
    $('.group_nav_select_text').on('click', function () {
        $('#teacher_group_Modal').modal('show');
    })
})