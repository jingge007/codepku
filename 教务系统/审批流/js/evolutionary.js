$(function () {
    var urlStr = window.location.href;
    var initUrl = urlStr;
    var rdrow, rowtext, htmlStr;
    var dataObj = {};

    if (urlStr.indexOf("?") != -1) {
        initUrl = urlStr.split("?")[0];
        var strArr = urlStr.split("?")[1].split("&");
        show_empty(strArr);
        //url的参数传值
        for (var i in strArr) {
            if (strArr[i].split("=")[0] == "rolerow") {
                $(".rolerow").hide();
                rdrow = $(".rolerow").find(".category_name").text().trim().replace(/\s/g, "") + "&nbsp;";
                rowtext = $($(".rolerow .category_cont").children(".select_type").get(strArr[i].split("=")[1] - 1)).text();
                htmlStr = '<span class="tag label label-info">' + rdrow + rowtext + '<span class="remove_item ' + strArr[i].split("=")[0] + '"></span></span>';
                $(".tagsrow").prepend(htmlStr);
                dataObj.rolerow = strArr[i].split("=")[1];

            } else if (strArr[i].split("=")[0] == "category") {
                $(".category").hide();
                rdrow = $(".category").find(".category_name").text().trim().replace(/\s/g, "") + "&nbsp;";
                rowtext = $($(".category .category_cont").children("span").get(strArr[i].split("=")[1] - 1)).text();
                htmlStr = '<span class="tag label label-info">' + rdrow + rowtext + '<span class="remove_item ' + strArr[i].split("=")[0] + '"></span></span>';
                $(".tagsrow").prepend(htmlStr);
                dataObj.category = strArr[i].split("=")[1];

            } else if (strArr[i].split("=")[0] == "classtime") {
                $(".classtime").hide();
                rdrow = $(".classtime").find(".category_name").text().trim().replace(/\s/g, "") + "&nbsp;";
                rowtext = $($(".classtime .category_cont").children(".select_type").get(strArr[i].split("=")[1] - 1)).text();


                if (strArr[i].split("=")[1].indexOf(",") != -1) {
                    var manySelect = strArr[i].split("=")[1].split(",");
                    if (manySelect.length <= 2) {
                        for (var n in manySelect) {
                            rowtext += $($(".classtime .category_cont").children(".select_type").get(manySelect[n] - 1)).text();
                        }

                    } else {
                        rowtext = "已选择" + manySelect.length + "个";
                    }

                }
                htmlStr = '<span class="tag label label-info">' + rdrow + rowtext + '<span class="remove_item ' + strArr[i].split("=")[0] + '"></span></span>';
                $(".tagsrow").prepend(htmlStr);
                dataObj.classtime = strArr[i].split("=")[1];


            } else if (strArr[i].split("=")[0] == "classstate") {
                $(".classstate").hide();
                rdrow = $(".classstate").find(".category_name").text().trim().replace(/\s/g, "") + "&nbsp;";
                rowtext = $($(".classstate .category_cont").children(".select_type").get(strArr[i].split("=")[1] - 1)).text();

                if (strArr[i].split("=")[1].indexOf(",") != -1) {
                    var manySelect = strArr[i].split("=")[1].split(",");
                    if (manySelect.length <= 2) {
                        for (var n in manySelect) {
                            rowtext += $($(".classstate .category_cont").children(".select_type").get(manySelect[n] - 1)).text();
                        }

                    } else {
                        rowtext = "已选择" + manySelect.length + "个";
                    }
                }

                htmlStr = '<span class="tag label label-info">' + rdrow + rowtext + '<span class="remove_item ' + strArr[i].split("=")[0] + '"></span></span>';
                $(".tagsrow").prepend(htmlStr);
                dataObj.classstate = strArr[i].split("=")[1];

            } else if (strArr[i].split("=")[0] == "seniority") {//这一行还有多选的情况
                $(".seniority").hide();
                rdrow = $(".seniority").find(".category_name").text().trim().replace(/\s/g, "") + "&nbsp;";
                rowtext = $($(".seniority .category_cont").children("span").get(strArr[i].split("=")[1] - 1)).text();
                htmlStr = '<span class="tag label label-info">' + rdrow + rowtext + '<span class="remove_item ' + strArr[i].split("=")[0] + '"></span></span>';
                $(".tagsrow").prepend(htmlStr);
                dataObj.seniority = strArr[i].split("=")[1];

            } else if (strArr[i].split("=")[0] == "classnumb") {
                $(".classnumb").hide();
                rdrow = $(".classnumb").find(".category_name").text().trim().replace(/\s/g, "") + "&nbsp;";
                rowtext = $($(".classnumb .category_cont").children("span").get(strArr[i].split("=")[1] - 1)).text();
                htmlStr = '<span class="tag label label-info">' + rdrow + rowtext + '<span class="remove_item ' + strArr[i].split("=")[0] + '"></span></span>';
                $(".tagsrow").prepend(htmlStr);
                dataObj.classnumb = strArr[i].split("=")[1];

            } else if (strArr[i].split("=")[0] == "bgcourestime") {
                $(".bgcourestime").hide();
                rdrow = $(".bgcourestime").find(".category_name").text().trim().replace(/\s/g, "") + "&nbsp;";
                rowtext = $($(".bgcourestime .category_cont").children("span").get(strArr[i].split("=")[1] - 1)).text();
                htmlStr = '<span class="tag label label-info">' + rdrow + rowtext + '<span class="remove_item ' + strArr[i].split("=")[0] + '"></span></span>';
                $(".tagsrow").prepend(htmlStr);
                dataObj.bgcourestime = strArr[i].split("=")[1];

            } else if (strArr[i].split("=")[0] == "endclass") {
                $(".endclass").hide();
                rdrow = $(".endclass").find(".category_name").text().trim().replace(/\s/g, "") + "&nbsp;";
                rowtext = $($(".endclass .category_cont").children("span").get(strArr[i].split("=")[1] - 1)).text();
                htmlStr = '<span class="tag label label-info">' + rdrow + rowtext + '<span class="remove_item ' + strArr[i].split("=")[0] + '"></span></span>';
                $(".tagsrow").prepend(htmlStr);
                dataObj.endclass = strArr[i].split("=")[1];

            } else if (strArr[i].split("=")[0] == "sectionStartNumb") {//如果存在第一个定义的时间段则
                $(".seniority").hide();
                rdrow = $(".seniority").find(".category_name").text().trim().replace(/\s/g, "") + "&nbsp;";

                var text1 = strArr[i].split("=")[1];
                var text2 = strArr[parseInt(i) + 1].split("=")[1];

                rowtext = text1 + '到' + text2 + '节';
                htmlStr = '<span class="tag label label-info">' + rdrow + rowtext + '<span class="remove_item ' + strArr[i].split("=")[0] + '"></span></span>';
                $(".tagsrow").prepend(htmlStr);
                dataObj.sectionStartNumb = strArr[i].split("=")[1];
                dataObj.sectionEndNumb = strArr[parseInt(i) + 1].split("=")[1];

            } else if (strArr[i].split("=")[0] == "peopleStartNumb") {//第二个筛选（班级人数）
                $(".classnumb").hide();
                rdrow = $(".classnumb").find(".category_name").text().trim().replace(/\s/g, "") + "&nbsp;";

                var text1 = strArr[i].split("=")[1];
                var text2 = strArr[parseInt(i) + 1].split("=")[1];

                rowtext = text1 + '到' + text2 + '元';
                htmlStr = '<span class="tag label label-info">' + rdrow + rowtext + '<span class="remove_item ' + strArr[i].split("=")[0] + '"></span></span>';
                $(".tagsrow").prepend(htmlStr);
                dataObj.peopleStartNumb = strArr[i].split("=")[1];
                dataObj.peopleEndNumb = strArr[parseInt(i) + 1].split("=")[1];
            } else if (strArr[i].split("=")[0] == "beginLessonTime") {//自定义开课时间
                $(".bgcourestime").hide();
                rdrow = $(".bgcourestime").find(".category_name").text().trim().replace(/\s/g, "") + "&nbsp;";

                var text1 = strArr[i].split("=")[1];
                var text2 = strArr[parseInt(i) + 1].split("=")[1];

                rowtext = text1 + '&nbsp;到&nbsp;' + text2;
                htmlStr = '<span class="tag label label-info">' + rdrow + rowtext + '<span class="remove_item ' + strArr[i].split("=")[0] + '"></span></span>';
                $(".tagsrow").prepend(htmlStr);
                dataObj.beginLessonTime = strArr[i].split("=")[1];
                dataObj.stopLessonTime = strArr[parseInt(i) + 1].split("=")[1];
            } else if (strArr[i].split("=")[0] == "beginClassTime") {//自定义开课时间
                $(".endclass").hide();
                rdrow = $(".endclass").find(".category_name").text().trim().replace(/\s/g, "") + "&nbsp;";

                var text1 = strArr[i].split("=")[1];
                var text2 = strArr[parseInt(i) + 1].split("=")[1];

                rowtext = text1 + '&nbsp;到&nbsp;' + text2;
                htmlStr = '<span class="tag label label-info">' + rdrow + rowtext + '<span class="remove_item ' + strArr[i].split("=")[0] + '"></span></span>';
                $(".tagsrow").prepend(htmlStr);
                dataObj.beginClassTime = strArr[i].split("=")[1];
                dataObj.stopClassTime = strArr[parseInt(i) + 1].split("=")[1];
            }

        }

    }
    //点击《多选》或者《自定义范围》
    $(".choose_btn").on("click", function () {
        $(this).hide();
        $(this).siblings("div").show();
        $(this).siblings(".select_time").css({
            "display": "flex"
        });

        //点击多选改变状态
        $(this).parent(".expand_right").prev(".category_cont").find(".select_type").find(".mdui_checkout_icon").css({
            "display": "inline-block"
        });

        $(this).parent(".expand_right").parent(".row_form").parent('.classnumb').siblings('#morecont').find('.course_class').find('.course_form').find('.course_item').find(".select_type").find(".mdui_checkout_icon").css({
            "display": "inline-block"
        });


        $(this).parent(".expand_right").prev(".category_cont").find(".select_type").find("input").removeAttr("disabled");

        //不能触发单选时的点击事件
        $(this).parent(".expand_right").prev(".category_cont").find(".select_type").unbind("click");
        $(this).parent(".expand_right").prev(".category_cont").find("span").unbind("click");

    });
    //取消按钮
    $(".cancel_btn").on("click", function () {
        $(this).parent(".operation").hide();
        $(this).parent(".operation").siblings(".choose_btn").show();
        $(this).parent(".operation").siblings(".select_time").css({
            "display": "none"
        });

        $(this).parent(".operation").parent(".expand_right").parent(".row_form").parent('.classnumb').siblings('#morecont').find('.course_class').find('.course_form').find('.course_item').find(".select_type").find(".mdui_checkout_icon").css({
            "display": "none"
        });

        $(this).parent(".operation").parent(".expand_right").prev(".category_cont").find(".select_type").find(".mdui_checkout_icon").hide();
        $(this).parent(".operation").parent(".expand_right").prev(".category_cont").find(".select_type").find("input").attr("disabled", "disabled");

        //点击取消按钮后要重新绑定点击事件。仅针对多选
        $(this).parent(".operation").parent(".expand_right").prev(".category_cont").find(".select_type").on("click", choose);
        $(this).parent(".operation").parent(".expand_right").prev(".category_cont").find("span").on("click", choose);

    });
    //点击确定
    $(".sure_btn").on("click", function () {

        $(this).parent(".operation").show();
        $(this).parent(".operation").prev(".choose_btn").hide();
        $(this).parent(".operation").parent(".expand_right").parent(".row_form").parent(".category_row").show();

        var nud = "";

        $(this).parent(".operation").parent(".expand_right").prev(".category_cont").find(".select_type").find("input").each(function () {
            if (this.checked) {
                nud += $(this).val() + ",";

                $(this).parent(".select_type").text().trim().replace(/\s/g, "");
            }

        });
        var rowAttr = $(this).parent(".operation").parent(".expand_right").parent(".row_form").parent(".category_row").attr("class");
        //两种情况多选的时候
        if (rowAttr.split(" ")[1] == "classtime") {
            dataObj.classtime = nud.substring(0, nud.length - 1);
        }
        if (rowAttr.split(" ")[1] == "classstate") {
            dataObj.classstate = nud.substring(0, nud.length - 1);
        }
        //自定义的时候(范围)
        if (rowAttr.split(" ")[1] == "seniority") {
            var startNumb = $(this).parent(".operation").prev(".select_time").find(".start_numb").val();
            var endNumb = $(this).parent(".operation").prev(".select_time").find(".end_numb").val();

            if (startNumb < endNumb) {
                //添加自定义新字段。
                dataObj.sectionStartNumb = parseInt(startNumb);
                dataObj.sectionEndNumb = parseInt(endNumb);

            } else {
                return false;
            }

        }
        if (rowAttr.split(" ")[1] == "classnumb") {
            var startNumb = $(this).parent(".operation").prev(".select_time").find(".start_numb").val();
            var endNumb = $(this).parent(".operation").prev(".select_time").find(".end_numb").val();

            if (startNumb < endNumb) {
                //添加自定义新字段。
                dataObj.peopleStartNumb = parseInt(startNumb);
                dataObj.peopleEndNumb = parseInt(endNumb);

            } else {
                return false;
            }

        }
        //自定义（时间段）
        if (rowAttr.split(" ")[1] == "bgcourestime") {
            var startNumb = $(this).parent(".operation").prev(".select_time").find(".input_one").val();
            var endNumb = $(this).parent(".operation").prev(".select_time").find(".input_two").val();

            if (startNumb < endNumb) {
                //添加自定义新字段。
                dataObj.beginLessonTime = startNumb;
                dataObj.stopLessonTime = endNumb;

            } else {
                return false;
            }

        }
        if (rowAttr.split(" ")[1] == "endclass") {
            var startNumb = $(this).parent(".operation").prev(".select_time").find(".input_one").val();
            var endNumb = $(this).parent(".operation").prev(".select_time").find(".input_two").val();

            if (startNumb < endNumb) {
                //添加自定义新字段。
                dataObj.beginClassTime = startNumb;
                dataObj.stopClassTime = endNumb;

            } else {
                return false;
            }

        }

        urlload = piecingData(dataObj);
        if (urlStr.indexOf("?") != -1) {
            window.location.href = initUrl + urlload;
        } else {
            window.location.href = initUrl + urlload;
        }

    });
    //点击选择中的关闭图标
    $(".remove_item").click(function () {
        var removeStr = $(this).attr("class");
        //发现新大陆！！！！！好激动
        dataObj[removeStr.split(" ")[1]] = "";
        //对于关闭特殊的某段筛选做特殊判断
        if (removeStr.split(" ")[1] == "sectionStartNumb") {
            dataObj.sectionStartNumb = "";
            dataObj.sectionEndNumb = "";
        }

        if (removeStr.split(" ")[1] == "peopleStartNumb") {
            dataObj.peopleStartNumb = "";
            dataObj.peopleEndNumb = "";
        }

        if (removeStr.split(" ")[1] == "beginLessonTime") {
            dataObj.beginLessonTime = "";
            dataObj.stopLessonTime = "";
        }

        if (removeStr.split(" ")[1] == "beginClassTime") {
            dataObj.beginClassTime = "";
            dataObj.stopClassTime = "";
        }

        urlload = piecingData(dataObj);
        if (urlStr.indexOf("?") != -1) {
            window.location.href = initUrl + urlload;
        } else {
            window.location.href = initUrl + urlload;
        }

    });
    //单选，点击span
    $(".category_cont").find("span").on("click", choose);

    //单选的select_type;
    $(".category_cont").find(".select_type").on("click", choose);

    /*点击清空*/
    $(".empty_btn").on("click", function () {
        for (let key in dataObj) {
            delete dataObj[key];
        }
        urlload = piecingData(dataObj);

        if (urlStr.indexOf("?") != -1) {
            window.location.href = initUrl + urlload;
        } else {
            window.location.href = initUrl + urlload;
        }
    });

    /*时间筛选*/
    $("#start_time .input_one").datetimepicker({
        format: 'yyyy-mm-dd',
        minView: 'month',
        language: 'zh-CN',
        autoclose: true
    }).on('changeDate', function (ev) {

    });

    $("#end_time .input_two").datetimepicker({
        format: 'yyyy-mm-dd',
        minView: 'month',
        language: 'zh-CN',
        autoclose: true
    }).on('changeDate', function (ev) {

    });

    $("#classstart .input_one").datetimepicker({
        format: 'yyyy-mm-dd',
        minView: 'month',
        language: 'zh-CN',
        autoclose: true
    }).on('changeDate', function (ev) {

    });

    $("#classend .input_two").datetimepicker({
        format: 'yyyy-mm-dd',
        minView: 'month',
        language: 'zh-CN',
        autoclose: true
    }).on('changeDate', function (ev) {

    });


    function choose() {
        var dataNumb = $(this).index() + 1;
        var rowArr = $(this).parent(".category_cont").parent(".row_form").parent(".category_row").attr("class");
        //下面的赋值代替了判断赋值，这就是精简的开始，怎么发现的？观察并思考。
        dataObj[rowArr.split(" ")[1]] = dataNumb;

        urlload = piecingData(dataObj);

        if (urlStr.indexOf("?") != -1) {
            window.location.href = initUrl + urlload;
        } else {
            window.location.href = initUrl + urlload;
        }

    }

    function show_empty(thisArr) {
        if (thisArr.length < 2) {
            $(".empty_btn").hide();
            $("#collapseExample").addClass("in");
        } else if (thisArr.length > 1) {
            $(".empty_btn").css({"display": "inline-block"});
            $("#collapseExample").addClass("in");
        }
    }

    //拼接对象
    function piecingData(obj) {
        var textData = "?";
        for (var k in obj) {
            if (obj[k] != "") {
                textData += k + "=" + obj[k] + "&";
            }
        }
        textData = textData.substring(0, textData.length - 1);
        return textData;
    }

});
