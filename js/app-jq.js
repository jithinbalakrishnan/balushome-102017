
//To fix the navbar

$("document").ready(function($){
    var nav = $('#main-menu-container');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 125) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
});

