$(function () {
    //window width(resize)
    ww = $(window).width();
    $(window).resize(function () {
        ww = $(this).width();
    });

    function mouseFollowText(e) {
        var imgHeight = $(".main__img").height();
        var imgWidth = $(".main__img").width();
        var mousePosX = e.clientX;
        var mousePosY = e.clientY;

        var posY = (imgHeight / 2 - mousePosX) * 0.04;
        var posX = (imgWidth / 2 - mousePosY) * 0.04;

        $(".main__title").css({
            transform: "rotateY(" + posY + "deg) rotateX(" + posX + "deg)",
        });
    }

    //main text 커서 방향 따라서 따라옴
    $(".main__img").mousemove(function (e) {
        if (ww > 960) {
            mouseFollowText(e);
        } else {
            //moible ver 적용x
            $(".main__img-wrap, #main").css({
                perspective: 0,
            });
            $(".main__title").css({
                transform: "rotate(0,0)",
            });
            return;
        }
    });

    //main 비행기 아이콘 스크롤에 따라 나타났다, 사라졌다
    var mainPath = $(".main__path");
    var mainPlane = $(".main__plane");
    var mainHeight = $("#main").height();

    function mainPlaneMove() {
        mainPath.addClass("main__path--animate");
        mainPlane.addClass("main__plane--animate");
    }
    mainPlaneMove();

    $(window).scroll(function () {
        sct = $(this).scrollTop();

        if (sct == 0) {
            mainPath.addClass("main__path--animate");
            mainPlane.addClass("main__plane--animate");
        } else if (sct > mainHeight) {
            mainPath.removeClass("main__path--animate");
            mainPlane.removeClass("main__plane--animate");
        }
    });

    //main menu link
    $(".main__menu>li>a").click(function () {
        $("html,body").animate({
                scrollTop: $(this.hash).offset().top - 30,
            },
            500
        );
    });

    //about 비행기 라인 스크롤 다운 시 생겨나고, 스크롤 업 시 같이 사라짐
    var aboutPath = $(".about__path");
    var aboutLength = aboutPath.get(0).getTotalLength();

    aboutPath.css({
        strokeDasharray: aboutLength,
        strokeDashoffset: aboutLength,
    });

    $(window).resize(function () {
        ww = $(window).width();
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

    //work 비행기 라인 스크롤 다운시 라인& 비행기 아이콘 나타남
    var workTop = $("#work").offset().top;

    $(window).scroll(function () {
        sct = $(this).scrollTop();
        if (sct > workTop - 300) {
            $(".work__path").addClass("work__path--visible");
            $(".work__plane").addClass("work__plane--visible");

            //work list 차례대로 생겨남
            $(".work__list").each(function (index) {
                $(this)
                    .delay(index * 1200)
                    .animate({
                            opacity: 1,
                        },
                        1000
                    );
            });
        } else if (sct < workTop - $(window).height()) {
            $(".work__path").removeClass("work__path--visible");
            $(".work__plane").removeClass("work__plane--visible");
        }
    });

    //skills value 스크롤 시 채워짐
    var skillsTop = $("#skills").offset().top;
    var percent = ["55%", "55%", "45%", "35%", "40%"];
    scroll = true;

    $(window).scroll(function () {

        if (sct > skillsTop - 300 && scroll == true) {
            $(".skill__value").each(function (index) {
                $(this)
                    .delay(index * 400)
                    .animate({
                            width: percent[index],
                        },
                        1200
                    );
            });

            $(".skill__name").each(function (index) {
                $(this)
                    .delay(index * 600)
                    .animate({
                            opacity: 1,
                        },
                        1200
                    );
            });
            scroll = false;
        }

    });

    //footer icon클릭시 색깔 변경(kakao & git)
    $(".contact__kakao").hover(
        function () {
            $(".kakao").attr({
                src: "img/kakao_icon_orange.png",
            });
            $(".kakao__id").css({
                opacity: 1,
            });
        },
        function () {
            $(".kakao").attr({
                src: "img/kakap_icon.png",
            });
            $(".kakao__id").css({
                opacity: 0,
            });
        }
    );

    $(".contact__git").hover(
        function () {
            $(".git").attr({
                src: "img/git_icon_orange.png",
            });
        },
        function () {
            $(".git").attr({
                src: "img/git_icon.png",
            });
        }
    );

    //top btn클릭 시 위로 올라감
    $(".contact__top-btn").click(function () {
        $("html,body").animate({
                scrollTop: 0,
            },
            1000
        );
    });

    //contact me 버튼 클릭시, contact으로 이동
    var contactTop = $("#contact").offset().top;
    $("#fixed__contact").click(function () {
        $("html,body").animate({
                scrollTop: contactTop,
            },
            1000
        );
    });

    $(window).resize(function () {
        ww = $(window).width();
        if (ww < 960) {
            $("#fixed__contact").css({
                display: "none",
            });
        } else {
            $("#fixed__contact").css({
                display: "block",
            });
        }
    });
}); //end
