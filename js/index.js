$(function () {
    'use strict';
   var winh   = $(window).outerHeight(),
       upperh = $(".upper-bar").innerHeight(),
       navh   = $(".navbar").innerHeight();
   $(".testimonials .slider , .testimonials .carousel-item").height(winh - (upperh + navh));

   $(".featured-work .row .col-md").on("click" , function(){

    $(this).addClass("active").siblings().removeClass("active");
    if($(this).data("class") === "all"){
        $(".shuffle-imgs").children().css("display","block");
    }else{
        let imgs = $(".shuffle-imgs").children();
        for(let i=0;i<imgs.length ; i++){
            if(imgs[i].id == $(this).attr("data-class")){
                $(imgs[i]).css("display","none");
            }
            else{
                $(imgs[i]).css("display","block");
            }
        }
        $($(this).data("class")).parent().css("opacity",1);
    }
   });
});