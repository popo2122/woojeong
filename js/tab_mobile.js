$(function () {
    
    $(window).resize(function(){
        ww = $(window).width();
    });
    
    //mobile menu slide & toggle btn animation
    function menuClose() {
        $(".toggle__line").removeClass("toggle__animate");
        $(".mobile__menu").slideUp(500);
        $(".mobile__menu__contact").fadeOut(500);
    }

    click = 0;
    $(".mobile__menu__toggle").click(function () {
        if (click == 0) {
            $(".toggle__line").addClass("toggle__animate");
            $(".mobile__menu").slideDown(500);
            $(".mobile__menu__contact").fadeIn(500);
            $("#fixed__contact").css({
                display: "none",
            });
            click++;
        } else if (click == 1) {
            menuClose();
            if (ww >= 960) {
                $("#fixed__contact").css({
                    display: "block",
                });
            }

            click = 0;
        }
    });

    // mobile menu link to each section slowly
    $(".mobile__menu>li>a").click(function () {
        $("html,body").animate({
                scrollTop: $(this.hash).offset().top - 30,
            },
            500
        );
        menuClose();
        click = 0;
    });

    // menu contact-me btn link to contact section
    var contactTop = $("#contact").offset().top;
    $(".mobile__menu__contact").click(function () {
        $("html,body").animate({
                scrollTop: contactTop,
            },
            1000
        );
        menuClose();
        click = 0;
    });

    //about mobile svg line 스크롤 다운 시 생겨나고, 스크롤 업 시 사라짐
    var aboutPath = $(".mo_about__path");
    var aboutLength = aboutPath.get(0).getTotalLength();

    aboutPath.css({
        strokeDasharray: aboutLength,
        strokeDashoffset: aboutLength,
    });

    $(window).scroll(function () {
        //scroll percentage
        var scrollPercent =
            $(window).scrollTop() / ($(document).height() - $(window).height());

        //drawing the line when scrolling down
        drawLine = (aboutLength + $(window).height()) * scrollPercent;
        //disappear the line when scrolling up
        aboutPath.css({
            strokeDashoffset: aboutLength - drawLine,
        });
    });

    //work swiper
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 2,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        breakpoints: {
            960: {
                slidesPerView: 2,
            },
            500: {
                slidesPerView: 1,
            },
            0:{
                slidesPerView: 1,
            }
        },
    });

}); //end
