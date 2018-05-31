$(function () {
    var currenIndex = '';
    var indexLength = $('.teacher_box').find('.subject_teachers');

    $('.subject span').on('click', function () {
        $(this).addClass('selected').siblings('span').removeClass('selected');
        $('.hides_teacher').show()
        $('.teacher_box').show()
        currenIndex = $(this).index()
        indexLength.hide()
        indexLength.eq(currenIndex).show()
    });

    $('.subject_teachers span').on('click', function () {
        $(this).toggleClass('selected');
        $('.hides_addInfo').show()

        if ($('.subject_teachers span').hasClass('selected')) {
            //  console.log('true')
        } else {
            $('.teacher_box').hide()
            $('.hides_addInfo').hide()
            $('.subject span').removeClass('selected')
        }
    })

    /*点击清空按钮时*/
    $('.empty').on('click', function () {
        $('.info_box').find('.selected').removeClass('selected');
        $('.teacher_box').hide()
        $('.addInfo').hide()
    })
})