$(function () {
    /*可编辑状态*/
    function edit_input() {
        $('.edit_items').removeAttr('readonly');
        $('.edit_items').removeClass('teacher_name').addClass('edit_input');
        $('.determine_btn').show();
        $('.cancel_btn').show();
    }

    /*不可编辑状态*/
    function unedit_input() {
        $('.edit_items').attr('readonly', 'readonly');
        $('.edit_items').removeClass('edit_input').addClass('teacher_name');
        $('.determine_btn').hide();
        $('.cancel_btn').hide();
    }

    /*判断姓名是否为空---判断电话号码是否为空*/
    function whether_name_phone() {
        let phones = $('.telephone_item').val();
        let name_txts = $('.edit_items').val();
        if (!(/^1[34578]\d{9}$/.test(phones)) && name_txts == '') {
            $('.Prompt_items').show();
            $('.Prompt_name_items').show();
        }
        else if (!(/^1[34578]\d{9}$/.test(phones)) && name_txts !== '') {
            $('.Prompt_items').show();
            $('.Prompt_name_items').hide();
        }
        else if (name_txts == '' && (/^1[34578]\d{9}$/.test(phones))) {
            $('.Prompt_name_items').show();
            $('.Prompt_items').hide();
        }
        else {
            $('.Prompt_name_items').hide();
            $('.Prompt_items').hide();
            $('.edit_icon').show();
            unedit_input();
        }
    }

    /*编辑*/
    $('.edit_icon').on('click', function () {
        $(this).hide();
        edit_input();
    })

    // 编辑--确定按钮
    $('.determine_btn').on('click', function () {
        whether_name_phone();
    })

    // 编辑--取消按钮
    $('.cancel_btn').on('click', function () {
        $('.Prompt_name_items').hide();
        $('.Prompt_items').hide();
        $('.edit_icon').show();
        unedit_input();
    })

    //星星评分
    scoreFun($("#startone_01"));
    scoreFun($("#startone_02"));
    scoreFun($("#startone_03"));

    /*tab栏切换*/
    $('.nav_tab_title').on('click', function () {
        $(this).parent().siblings('.nav_tab').find('.nav_tab_border').hide();
        $(this).siblings('.nav_tab_border').show();
        $(this).addClass('nav_tab_selcted').parent().siblings('.nav_tab').find('.nav_tab_title').removeClass('nav_tab_selcted');

        let currentIndex = $(this).attr("data-currentIndex");
        let content_item_01 = $('.content_item_01').attr('data-content');
        let content_item_02 = $('.content_item_02').attr('data-content');
        let content_item_03 = $('.content_item_03').attr('data-content');
        let content_item_04 = $('.content_item_04').attr('data-content');
        if (currentIndex == content_item_01) {
            $('.content_item_01').show();
        } else {
            $('.content_item_01').hide();
        }
        if (currentIndex == content_item_02) {
            $('.content_item_02').show();
        } else {
            $('.content_item_02').hide();
        }
        if (currentIndex == content_item_03) {
            $('.content_item_03').show();
        } else {
            $('.content_item_03').hide();
        }
        if (currentIndex == content_item_04) {
            $('.content_item_04').show();
        } else {
            $('.content_item_04').hide();
        }
    })

    /*Scratch开通按钮*/
    let Scratch_talg = true;
    $('.jurisdiction_item_01').on('click', function () {
        let Scratch_switch_talg_01 = true;
        let Scratch_switch_talg_02 = true;
        if (Scratch_talg) {
            $(this).text('关闭');
            $('.mask_box_01').hide();
            $('.curriculum_img_01').addClass('Scratch_img');
            $('.jurisdiction_item_01').addClass('Scratch_close');
            $('.Scratch_txt').addClass('Scratch_titles');
            $('.Scratch_text').addClass('class_item_bs');

            /*小班课开关*/
            $('.Scratch_switch_box_01').on('click', function () {
                if (Scratch_switch_talg_01) {
                    $('.switch_scratch_01').addClass('switch_move');
                    $(this).addClass('switch_bs');
                    Scratch_switch_talg_01 = false;
                } else {
                    $('.switch_scratch_01').removeClass('switch_move');
                    $(this).removeClass('switch_bs');
                    Scratch_switch_talg_01 = true;
                }
            })
            /*试听课开关*/
            $('.Scratch_switch_box_02').on('click', function () {
                if (Scratch_switch_talg_02) {
                    $('.switch_scratch_02').addClass('switch_move');
                    $(this).addClass('switch_bs');
                    Scratch_switch_talg_02 = false;
                } else {
                    $('.switch_scratch_02').removeClass('switch_move');
                    $(this).removeClass('switch_bs');
                    Scratch_switch_talg_02 = true;
                }
            })
            Scratch_talg = false;
        } else {
            $(this).text('开通');
            $('.mask_box_01').show();
            $('.curriculum_img_01').removeClass('Scratch_img');
            $('.jurisdiction_item_01').removeClass('Scratch_close');
            $('.Scratch_txt').removeClass('Scratch_titles');
            $('.Scratch_text').removeClass('class_item_bs');
            $(this).removeClass('switch_move');
            $('.switch_scratch_01').removeClass('switch_move');
            $('.Scratch_switch_box_01').removeClass('switch_bs');
            Scratch_switch_talg_01 = true;
            $('.switch_scratch_02').removeClass('switch_move');
            $('.Scratch_switch_box_02').removeClass('switch_bs');
            Scratch_switch_talg_02 = true;
            Scratch_talg = true;
            /*清空星星评分*/
            $('.scratch_star a.clibg').removeClass("clibg");
        }
    })

    /*Python开通按钮*/
    let Python_talg = true;
    $('.jurisdiction_item_02').on('click', function () {
        let Python_switch_talg_01 = true;
        let Python_switch_talg_02 = true;
        if (Python_talg) {
            $(this).text('关闭');
            $('.mask_box_02').hide();
            $('.curriculum_img_02').addClass('Python_img');
            $('.jurisdiction_item_02').addClass('Python_close');
            $('.Python_txt').addClass('Python_titles');
            $('.Python_text').addClass('class_item_bs');

            /*小班课开关*/
            $('.Python_switch_box_01').on('click', function () {
                if (Python_switch_talg_01) {
                    $('.switch_python_01').addClass('switch_move');
                    $(this).addClass('switch_bs');
                    Python_switch_talg_01 = false;
                } else {
                    $('.switch_python_01').removeClass('switch_move');
                    $(this).removeClass('switch_bs');
                    Python_switch_talg_01 = true;
                }
            })
            /*试听课开关*/
            $('.Python_switch_box_02').on('click', function () {
                if (Python_switch_talg_02) {
                    $('.switch_python_02').addClass('switch_move');
                    $(this).addClass('switch_bs');
                    Python_switch_talg_02 = false;
                } else {
                    $('.switch_python_02').removeClass('switch_move');
                    $(this).removeClass('switch_bs');
                    Python_switch_talg_02 = true;
                }
            })
            Python_talg = false;
        } else {
            $(this).text('开通');
            $('.mask_box_02').show();
            $('.curriculum_img_02').removeClass('Python_img');
            $('.jurisdiction_item_02').removeClass('Python_close');
            $('.Python_txt').removeClass('Python_titles');
            $('.Python_text').removeClass('class_item_bs');
            $(this).removeClass('switch_move');
            $('.switch_python_01').removeClass('switch_move');
            $('.Python_switch_box_01').removeClass('switch_bs');
            Python_switch_talg_01 = true;
            $('.switch_python_02').removeClass('switch_move');
            $('.Python_switch_box_02').removeClass('switch_bs');
            Python_switch_talg_02 = true;
            Python_talg = true;
            /*清空星星评分*/
            $('.python_star a.clibg').removeClass("clibg");
        }
    })

    /*NOIP开通按钮*/
    let NOIP_talg = true;
    $('.jurisdiction_item_03').on('click', function () {
        let NOIP_switch_talg_01 = true;
        let NOIP_switch_talg_02 = true;
        if (NOIP_talg) {
            $(this).text('关闭');
            $('.mask_box_03').hide();
            $('.curriculum_img_03').addClass('NOIP_img');
            $('.jurisdiction_item_03').addClass('NOIP_close');
            $('.NOIP_txt').addClass('NOIP_titles');
            $('.NOIP_text').addClass('class_item_bs');

            /*小班课开关*/
            $('.NOIP_switch_box_01').on('click', function () {
                if (NOIP_switch_talg_01) {
                    $('.switch_noip_01').addClass('switch_move');
                    $(this).addClass('switch_bs');
                    NOIP_switch_talg_01 = false;
                } else {
                    $('.switch_noip_01').removeClass('switch_move');
                    $(this).removeClass('switch_bs');
                    NOIP_switch_talg_01 = true;
                }
            })
            /*试听课开关*/
            $('.NOIP_switch_box_02').on('click', function () {
                if (NOIP_switch_talg_02) {
                    $('.switch_noip_02').addClass('switch_move');
                    $(this).addClass('switch_bs');
                    NOIP_switch_talg_02 = false;
                } else {
                    $('.switch_noip_02').removeClass('switch_move');
                    $(this).removeClass('switch_bs');
                    NOIP_switch_talg_02 = true;
                }
            })
            NOIP_talg = false;
        } else {
            $(this).text('开通');
            $('.mask_box_03').show();
            $('.curriculum_img_03').removeClass('NOIP_img');
            $('.jurisdiction_item_03').removeClass('NOIP_close');
            $('.NOIP_txt').removeClass('NOIP_titles');
            $('.NOIP_text').removeClass('class_item_bs');
            $(this).removeClass('switch_move');
            $('.switch_noip_01').removeClass('switch_move');
            $('.NOIP_switch_box_01').removeClass('switch_bs');
            NOIP_switch_talg_01 = true;
            $('.switch_noip_02').removeClass('switch_move');
            $('.NOIP_switch_box_02').removeClass('switch_bs');
            NOIP_switch_talg_02 = true;
            NOIP_talg = true;
            /*清空星星评分*/
            $('.noip_star a.clibg').removeClass("clibg");
        }
    })

    /*专题课开通按钮*/
    let zhuangye_talg = true;
    $('.jurisdiction_item_04').on('click', function () {
        let zhuangye_switch_talg_01 = true;
        if (zhuangye_talg) {
            $(this).text('关闭');
            $('.mask_box_04').hide();
            $('.curriculum_img_04').addClass('Zhuangye');
            $('.jurisdiction_item_04').addClass('zhuangye_close');
            $('.zhuangye_txt').addClass('zhuangye_titles');
            $('.zhuangye_text').addClass('class_item_bs');

            /*小班课开关*/
            $('.zhuangye_switch_box_01').on('click', function () {
                if (zhuangye_switch_talg_01) {
                    $('.switch_zhuangye_01').addClass('switch_move');
                    $(this).addClass('switch_bs');
                    zhuangye_switch_talg_01 = false;
                } else {
                    $('.switch_zhuangye_01').removeClass('switch_move');
                    $(this).removeClass('switch_bs');
                    zhuangye_switch_talg_01 = true;
                }
            })
            zhuangye_talg = false;
        } else {
            $(this).text('开通');
            $('.mask_box_04').show();
            $('.curriculum_img_04').removeClass('Zhuangye');
            $('.jurisdiction_item_04').removeClass('zhuangye_close');
            $('.zhuangye_txt').removeClass('zhuangye_titles');
            $('.zhuangye_text').removeClass('class_item_bs');
            $(this).removeClass('switch_move');
            $('.switch_zhuangye_01').removeClass('switch_move');
            $('.zhuangye_switch_box_01').removeClass('switch_bs');
            zhuangye_switch_talg_01 = true;
            zhuangye_talg = true;
        }
    })

    /*自定义时间*/
    $(".starTime").datetimepicker({
        language: 'zh-CN',
        weekStart: 0,
        todayBtn: true,
        autoclose: true,
        todayHighlight: true,
        startView: 1,
        minView: 0,
        forceParse: 0,
        minuteStep: 30,
        //初始化时设置时间格式即可
        format: 'hh:ii',
    }).on('changeDate', function (ev) {
        var startTime = $(this).datetimepicker('startDate');
        $(".stopTime").datetimepicker('setStartDate', '16:30');
    });
    $(".stopTime").datetimepicker({
        language: 'zh-CN',
        weekStart: 0,
        todayBtn: true,
        autoclose: true,
        todayHighlight: true,
        startView: 1,
        minView: 0,
        forceParse: 0,
        minuteStep: 30,//设置30分钟为一个间隔
        //初始化时设置时间格式即可
        format: 'hh:ii',
    });
    var tabDate = document.getElementById("work_time_tab");
    var workTimeArr = {};
    $(".add_new_time").on("click", function () {
        var vtc = $(".week_axis").val();
        var hzt = $(".time_axis").val();
        workTimeArr[vtc] = hzt;
        for (var k in workTimeArr) {
            console.log(workTimeArr[k].split(" ")[1]);
            console.log(tabDate.rows[k].cells[1].innerHTML);
            var time_cont = workTimeArr[k].split(" ")[1] + "-" + workTimeArr[k].split(" ")[3];
            if (workTimeArr[k].indexOf("am") != -1) {
                tabDate.rows[k].cells[1].innerHTML = '<div class="time_period">' + time_cont + '<span class="card_close">×</span></div>';
                workTimeArr[k] = "";
            }
            if (workTimeArr[k].indexOf("pm") != -1) {
                tabDate.rows[k].cells[2].innerHTML = '<div class="time_period">' + time_cont + '<span class="card_close">×</span></div>';
                workTimeArr[k] = "";
            }
            if (workTimeArr[k].indexOf("night") != -1) {
                tabDate.rows[k].cells[3].innerHTML = '<div class="time_period">' + time_cont + '<span class="card_close">×</span></div>';
                workTimeArr[k] = "";
            }
        }
        $(".card_close").unbind("click").on("click", function () {
            $(this).parent(".time_period").parent("td").html("");
        });
    });
    $(".card_close").unbind("click").on("click", function () {
        $(this).parent(".time_period").parent("td").html("");
    });
})