document.addEventListener('DOMContentLoaded', function () { // запуск функции только после полной загрузки контента страницы

    //=======Меню бургер========
    $(window).resize(function () {
        if ($(window).width() > 768) {
            $('.header__menu').css("display", "flex");
        } else {
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
            $(this).closest('.toggles__block').find(".toggles__textBlock").toggle('100');

        } else {
            $(this).closest('.toggles__block').addClass('active');
            $(this).closest('.toggles__block').find(".toggles__textBlock").toggle('100');
        }
    });


    //toggles//

    //слайдер клиенты//

    $('.carousel ').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        nav: false,
        dots: true,
        navText: [],
        responsive: {
            0: {
                items: 1,
            }
        }
    })

//слайдер клиенты//


//обрезка тайтла //

    var str1 = $('.post__title');

    function postTitle() {
        str1.each((index, elem) => {
            if ($(elem).text().length > 30)
                $(elem).text(function (i, text) {
                        text = text.substring(0, 30);
                    var lastIndex = text.lastIndexOf(" ");
                    text = text.substring(0, lastIndex) + '...';
                    $(this).text(text);
                });
        });
    }
    if ($(window).width() > 768) {
        postTitle();
    }
    //обрезка тайтла//


//обрезка тайтла //

    var str2 = $('.post__text');

    function postText() {
        str2.each((index, elem) => {
            if ($(elem).text().length > 210)
                $(elem).text(function (i, text) {
                    if ($(window).width() > 992) {
                        text = text.substring(0, 260);
                    }
                    else{
                        text = text.substring(0, 190);
                    }
                    var lastIndex = text.lastIndexOf(" ");
                    text = text.substring(0, lastIndex) + '...';
                    $(this).text(text);
                });
        });
    }
    if ($(window).width() > 768) {
        postText();
    }
    //обрезка тайтла//


}, false);

