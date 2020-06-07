$(function () {


    // 导航栏搜索图标点击事件
    $('.golbal-header-nav-item-search').on('click', function () {

        $('.search-popover').css({
            display: 'block'
        })

        $('#golbal-mask').addClass('golbal-mask-open');
    })
    // 弹出框的关闭按钮
    $('.close').on('click', function () {

        $('.search-popover').css({
            display: 'none'
        })
        $('#golbal-mask').removeClass('golbal-mask-open');
    })

    $('.sm-global-contant .menu').on('click', function () {
        
        console.log(111);
        var $show = $('.sm-contant').data('show');

        if ($show == 0) {

            $('.sm-contant').css({
                display: 'block'
            })
            $('.sm-contant').data('show', 1)

        } else {

            $('.sm-contant').css({
                display: 'none'
            })
            $('.sm-contant').data('show', 0)

        }
        
    })
})