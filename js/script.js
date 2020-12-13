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


}, false);

