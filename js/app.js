$(document).ready(function() {

    $(".scrollTo").click(function(){
        $("#pdiv").animate({
            scrollTop: ($( $(this).attr("href") ).offset().top)-60
        }, 500);
    return false;
  });
    
});