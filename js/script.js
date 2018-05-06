/**
 * Created by Jigalag on 04.05.2018.
 */

$(document).ready(function() {

    if ($('.headerSlider').length > 0) {
        $('.headerSlider').slick({
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            autoplay: false
        });
    }

    if ($('.complexItem').length > 0) {
        var ps1 = new PerfectScrollbar('#firstStore');
        var ps2 = new PerfectScrollbar('#secondStore');
        setTimeout(function () {
            ps1.update();
            ps2.update();
        }, 100);
    }

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    if ($('.promoSlider').length > 0) {
        $('.promoSlider').slick({
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '480px',
            infinite: true,
            prevArrow: '<div class="slick-prev"><button type="button">Назад</button></div>',
            nextArrow: '<div class="slick-next"><button type="button">Вперед</button></div>',
            dots: false,
            autoplay: false,
            responsive: [
                {
                    breakpoint: 1700,
                    settings: {
                        centerPadding: '350px',
                    }
                },
                {
                    breakpoint: 1550,
                    settings: {
                        centerPadding: '300px',
                    }
                },
                {
                    breakpoint: 1420,
                    settings: {
                        centerPadding: '250px',
                    }
                },
                {
                    breakpoint: 1320,
                    settings: {
                        centerPadding: '200px',
                    }
                },
                {
                    breakpoint: 1220,
                    settings: {
                        centerPadding: '150px',
                    }
                },
                {
                    breakpoint: 1120,
                    settings: {
                        centerPadding: '100px',
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        centerPadding: '100px',
                    }
                }
            ]
        });
    }
    if ($('.header-menu__burger').length > 0) {
        $('.header-menu__burger').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $('.header-menu__login').removeClass('active');
            $('.header-menu__login-form').removeClass('open-login');
            $('.header-menu__list').toggleClass('open-nav');
        });
    }
});
