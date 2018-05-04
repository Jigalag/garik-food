/**
 * Created by Jigalag on 04.05.2018.
 */

$(document).ready(function() {

    if ($('.slick-carousel').length > 0) {
        $('.slick-carousel').slick({
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            autoplay: false,
            centerMode: true,
            centerPadding: '30px',
            responsive: [
                {
                    breakpoint: 740,
                    settings: {
                        slidesToShow: 1
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
