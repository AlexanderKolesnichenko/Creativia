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



}, false);

