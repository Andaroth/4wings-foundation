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
        }, 500);
    return false;
    });
    
});