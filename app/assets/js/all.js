$(document).ready(function () {

    $('.showmenu').click(function (event) {
        /*取消預設行為，也就是取消點擊連結後連去該網頁的行為*/
        event.preventDefault();
        $('body').toggleClass('menu-show');
    });
})

//AOS
AOS.init();

//點選scrollTopBt後，滑動回最上層
$('.scrollTopBtn').click(function (event) {
    event.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 1000);
});