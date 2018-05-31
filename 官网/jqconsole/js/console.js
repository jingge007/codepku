/*左右分屏的功能*/
function bindResize(el) {
    var els = document.getElementById('menu').style;                  //初始化参数
    x = 0;                                                           //鼠标的 X 和 Y 轴坐标
    $(el).mousedown(function (e) {                                  //按下元素后，计算当前鼠标与对象计算后的坐标
        x = e.clientX - el.offsetWidth - $("#menu").width();
        el.setCapture ? (el.setCapture(), el.onmousemove = function (ev) {
            mouseMove(ev || event);
        },
            el.onmouseup = mouseUp) : ($(document).bind("mousemove", mouseMove).bind("mouseup", mouseUp));
        e.preventDefault();                                        //防止默认事件发生
    });

    function mouseMove(e) {                         //移动事件
        els.width = e.clientX - x + 'px';
    }

    function mouseUp() {                          //停止事件
        el.releaseCapture ? (el.releaseCapture(), el.onmousemove = el.onmouseup = null)
            : ($(document).unbind("mousemove", mouseMove).unbind("mouseup", mouseUp));
    }
}

var divResize = function () {
    var totalHeight = $(window).height();
    var topHeight = $('.top_submit_plate').height() + 101;        // 101指的是.console_edit_box的padding-top的值
    $("#menu").height(totalHeight - topHeight);
    $("#rightbar").height(totalHeight - topHeight);
    $('.content_right').height(totalHeight - topHeight);
}


$(function () {
    divResize();
    $(window).resize(divResize);
    bindResize(document.getElementById('rightbar'));
    /*-----------------------------------------------左边编辑器----------------------------------------------*/
    editor = ace.edit("code_editor");
    //字体大小
    editor.setFontSize(18);
    //设置只读（true时只读，用于展示代码）
    editor.setReadOnly(false);
    //自动换行,设置为off关闭
    editor.setOption("wrap", "free")
    //启用提示菜单
    ace.require("ace/ext/language_tools");
    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
    });
    editor.setAutoScrollEditorIntoView(true);


    /*------------------------------右边python在线编写代码---------------------------------------*/

    /*var header = 'Welcome to JQConsole!\n' +
        'Use jqconsole.Write() to write and ' +
        'jqconsole.Input() to read.\n';
    var jqconsole = $('#console').jqconsole(header, 'Python> ');
    var mypre = document.getElementById("output");
    var startPrompt = function () {
        jqconsole.Prompt(true, function (input) {
            runit(input);
            jqconsole.Write('\n' + '=> ' + '\n' + mypre.innerHTML + '\n', 'jqconsole-output');
            startPrompt();
        });
    };

    function outf(text) {
        var mypre = document.getElementById("output");
        mypre.innerHTML = mypre.innerHTML + text;
    }

    function builtinRead(x) {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
        return Sk.builtinFiles["files"][x];
    }

    function runit(input) {
        mypre.innerHTML = '';
        Sk.pre = "output";
        Sk.configure({output: outf, read: builtinRead});
        (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'output';
        var myPromise = Sk.misceval.asyncToPromise(function () {
            return Sk.importMainWithBody("<stdin>", false, input, true);
        });
        myPromise.then(function (mod) {
                console.log('success');
            },
            function (err) {
                console.log(err.toString());
            });
    }

    startPrompt();

    /!*点击清屏按钮*!/
    function clears() {
        $('.jqconsole #runResult').remove();
        $('.jqconsole-old-prompt').detach();
        $('.jqconsole-output').detach();
        $('#runResult').detach();
    }

    $('.clearboxs').on('click', function () {
        clears();
    })

    /!*点击运行按钮*!/
    $("#runCode").on('click', function () {
        clears();
        var language = "{{ $lang }}";
        var code = $.trim(editor.getValue());
        if (!code) {
            toastr.warning('please input you code');
            return;
        }
        //更改 btn
        $(this).html('正在执行<i class="fa fa-refresh fa-spin fa-fw"></i> <span class="sr-only"></span>');

        $.ajax({
            method: "POST",
            url: "http://127.0.0.1:26337/run",
            data: {language: language, code: code},
            success: function (res) {
                console.log(res);
                $('#runCode').html('Run');
                if (res.status == 0) {
                    toastr.warning(res.msg);
                } else {
                    var dataHtml = '<div id="runResult"><div class="colors_box">Python></div><span class="result_box"></span></div>';
                    $('.jqconsole-prompt').before(dataHtml);
                    $(".result_box").text("执行结果：\n" + res.data.output + "\n" + res.data.error);
                }
            },
            error: function (err) {
                $('#runCode').html('Run');
                toastr.warning('执行失败,请确认已打开编玩边学Python助手');
            },
            dataType: 'json',
        })
    });*/

    var header = 'Welcome to JQConsole!\n' +
        'Use jqconsole.Write() to write and ' +
        'jqconsole.Input() to read.\n';
    var jqconsole = $('#console').jqconsole(header, 'Python> ');
    var mypre = document.getElementById("output");

    var startPrompt = function () {
        jqconsole.Prompt(true, function (input) {
            runit(input);
            jqconsole.Write('\n' + '=> ' + '\n' + mypre.innerHTML + '\n', 'jqconsole-output');
            startPrompt();
        });
    };

    function outf(text) {
        var mypre = document.getElementById("output");
        mypre.innerHTML = mypre.innerHTML + text;
    }

    function builtinRead(x) {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
        return Sk.builtinFiles["files"][x];
    }

    function runit(input) {
        mypre.innerHTML = '';
        Sk.pre = "output";
        Sk.configure({output: outf, read: builtinRead});
        (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'output';
        var myPromise = Sk.misceval.asyncToPromise(function () {
            return Sk.importMainWithBody("<stdin>", false, input, true);
        });
        myPromise.then(function (mod) {
                console.log('success');
            },
            function (err) {
                console.log(err.toString());
            });
    }

    startPrompt();

    /*点击清屏按钮*/
    function clears() {
        $('.jqconsole #runResult').remove();
        $('.jqconsole-old-prompt').detach();
        $('.jqconsole-output').detach();
        $('#runResult').detach();
    }

    $('.clearboxs').on('click', function () {
        clears();
    })

    /*点击运行按钮*/
    $("#runCode").on('click', function () {
        clears();
        var language = "{{ $lang }}";
        var code = $.trim(editor.getValue());
        if (!code) {
            toastr.warning('please input you code');
            return;
        }
        //更改 btn
        $(this).html('正在执行<i class="fa fa-refresh fa-spin fa-fw"></i> <span class="sr-only"></span>');

        $.ajax({
            method: "POST",
            url: "http://127.0.0.1:26337/run",
            data: {language: language, code: code},
            success: function (res) {
                console.log(res);
                $('#runCode').html('Run');
                if (res.status == 0) {
                    toastr.warning(res.msg);
                } else {
                    var dataHtml = '<div id="runResult"><div class="colors_box">Python></div><span class="result_box"></span></div>';
                    $('.jqconsole-prompt').before(dataHtml);
                    $(".result_box").text("执行结果：\n" + res.data.output + "\n" + res.data.error);
                }
            },
            error: function (err) {
                $('#runCode').html('Run');
                toastr.warning('执行失败,请确认已打开编玩边学Python助手');
            },
            dataType: 'json',
        })
    });

});