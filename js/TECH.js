$(function(){
    $(".menu > li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    },function(){
        $(".sub").stop().slideUp();
    }) //hover

    $(window).scroll(function(){
        var scrollHeight = $(window).scrollTop();
        console.log("scrollHeight :" , scrollHeight);

        if(scrollHeight >=50){
            $("#header").removeClass('act');
            $("#header").addClass('act');
        }else{
            $("#header").addClass('act');
            $("#header").removeClass('act');
        }
    })

    $(".ham").click(function(){
        $(this).toggleClass("on");
        $(".m_nav").toggleClass("act");
    })

})