document.addEventListener('DOMContentLoaded', function () { // запуск функции только после полной загрузки контента страницы


    $('.menu__burger').on('click', function () {
        $('.header__menu').toggleClass('active');
    });



}, false);

