document.addEventListener('DOMContentLoaded', function () { // запуск функции только после полной загрузки контента страницы

    //=======Меню бургер========
    $(window).resize(function() {
        if ($(window).width() > 768) {
             $('.header__menu').css("display", "flex");
        }
        else{
            $('.header__menu').css("display", "none");

        }
    });

    $('.menu__burger').on('click', function () {
        $('.header__menu').toggle('100');
    });
//=======Меню бургер========



    //слайдер//

    $('.slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: [],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            485: {
                items: 1
            }
        }
    })

//слайдер//



//стрелки слайдера//

    $('.owl-prev').append(' <svg class="slider-arrow">\n' +
        '                    <use xlink:href="img/symbol/sprite.svg#left-arrow"></use>\n' +
        '                </svg>');


    $('.owl-next').append(' <svg class="slider-arrow">\n' +
        '                    <use xlink:href="img/symbol/sprite.svg#right-arrow"></use>\n' +
        '                </svg>');

//стрелки слайдера//


    //toggles//



    $('.toggles__block').find(".toggles__topBlock").on('click', function () {
        if ($(this).closest('.toggles__block').hasClass('active')) {
            $(this).closest('.toggles__block').removeClass('active');
            $(this).closest('.toggles__block').find(".toggles__name").css('color', '#262626');
            $(this).closest('.toggles__block').find(".toggles__textBlock").toggle('100');
            $(this).closest('.toggles__block').find(".toggles__icon_more").css('display', 'block');
            $(this).closest('.toggles__block').find(".toggles__icon_less").css('display', 'none');
        } else {
            $(this).closest('.toggles__block').addClass('active');
            $(this).closest('.toggles__block').find(".toggles__textBlock").toggle('100');
            $(this).closest('.toggles__block').find(".toggles__name").css('color', '#ff0036');
            $(this).closest('.toggles__block').find(".toggles__icon_less").css('display', 'block');
            $(this).closest('.toggles__block').find(".toggles__icon_more").css('display', 'none');

        }
    });



    //toggles//


}, false);

