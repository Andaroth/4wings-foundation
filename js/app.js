$(document).ready(function() {

    $(".scrollTo").click(function(){
        $("body,html").animate({
            scrollTop: ($( $(this).attr("href") ).offset().top)-65
        }, 500);
    return false;
  });
    
});