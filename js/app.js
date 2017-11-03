$(document).ready(function() {
    $(".scrollTo,.homescroll").click(function(){
        $("body,html").animate({
            scrollTop: ($( $(this).attr("href") ).offset().top)-65
        }, 500);
    return false;
    });
    $(".scrollFoot").click(function(){
        $("body,html").animate({
            scrollTop: $( $(this).attr("href") ).offset().top
        }, 750);
    return false;
    });
});
/* Handmade by Axel Fiolle - ax.fiolle@gmail.com */