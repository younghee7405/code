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

        if(scrollHeight >=200){
            $(".right span").removeClass('active');
            $(".right span").addClass('active');
        }else{
            $(".right span").addClass('active');
            $(".right span").removeClass('active');
        }

        if(scrollHeight >=1088){
            $(".text span").removeClass('slide');
            $(".text span").addClass('slide');
        }else{
            $(".text span").addClass('slide');
            $(".text span").removeClass('slide');
        }
    })

    $(".art_wrap ul").slick({
        slidesToShow:3,
        responsive: [
            {
                breakpoint: 600,  // 화면 너비가 600px 이하일 때 설정
                settings: {
                    slidesToShow: 1,  // 화면이 600px 이하일 때 1개 슬라이드 표시
                    slidesToScroll: 1
                }
            }
        ]
    })

    $(".ham").click(function(){
        $(this).toggleClass("on");
        $(".m_nav").toggleClass("act");
    })


    resize();
    $(window).resize(function(){
        resize()
    })

    function resize(){
        var w = $(window).innerWidth();
        console.log(w)
    }


})

// window.addEventListener('DOMContentLoaded', function(){

//     let roller = document.querySelector('.part_up');
//     roller.id = 'roller1';

//     let clone = roller.cloneNode(true);
//     clone.id = 'roller2';
//     document.querySelector('.banner_svg').appendChild(clone);

//     document.querySelector('#roller1').style.left = '0px';
//     document.querySelector('#roller2').style.left = document.querySelector('.part_up ul').offsetWidth+'px';

//     roller.classList.add('original');
//     clone.classList.add('clone');
// });

// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scrollHeight = $(window).scrollTop();
//         console.log("scrollHeight :" , scrollHeight);

//         if(scrollHeight >=100){
//             $("header nav.fixed").addClass('act');
//             $("header nav.default").removeClass('act');
//         }else{
//             $("header nav.fixed").removeClass('act');
//             $("header nav.default").addClass('act');
//         }

//     })
// })








// $(".main>li").hover(function(){
//     $(this).find(".sub").stop().slideDown();
// },function(){
//     $(".sub").stop().slideUp();
// }) //hover