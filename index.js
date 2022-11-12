$(document).ready(function() {

    const url = window.location.href.split('?')[0];
    const queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    const urlPageNum = urlParams.get('page')
    let addParam = ""
    const presenter = urlParams.get('link')



    let totalPageNum = $(".page-wrapper").length
    let currentPage = 0


    if (urlPageNum) {
        if (urlPageNum >= 0 && urlPageNum < totalPageNum) {
            currentPage = parseInt(urlPageNum);
        }
    }

    console.log(presenter)
    if (presenter == "1") {
        addParam = "&link=1";
        if (currentPage == 0) {
            $(".class-link").removeClass("hidden-item");
            $('.intro-items').addClass("not-visible-item");
            let presenterCnt = 1;
            let firstNext = false;
            $("#main-body").on("click", function() {
                $(".intro-" + presenterCnt).removeClass("not-visible-item");

                switch (presenterCnt) {
                    case 1:
                        $(".intro-" + presenterCnt).addClass("animate__animated animate__bounceInLeft");
                        break;
                    case 2:
                        $(".intro-" + presenterCnt).addClass("animate__animated animate__bounceInRight");
                        break;
                    case 3:
                        $(".intro-" + presenterCnt).addClass("animate__animated animate__fadeInUp");
                        break;
                    default:
                        $(".intro-" + presenterCnt).addClass("animate__animated animate__fadeInDown");
                        break;
                }
                presenterCnt += 1
                if (!firstNext && presenterCnt > 3) {
                    presenterCnt = 3
                }
            })
            $('.intro-3').on("click", function() {
                firstNext = true;
                $(".class-link-3").removeClass("hidden-item");
                $(".class-link-3").addClass("animate__animated animate__fadeInUp");
            })

        } else {
            $(".class-link-3").removeClass("hidden-item");
            $(".class-link-3").addClass("not-visible-item");
        }

        $(".class-link-3").on("click", function() {
            $(".class-link-3").toggleClass("not-visible-item");
        })
    }

    let pageCnt = 1
    $(".page-wrapper").each(function() {
        $(this).attr("id", "page-" + pageCnt);
        pageCnt += 1;
    })


    initPages()
    movePage(currentPage);

    // nav cl;ick functions
    $("#nav-1").on("click", function() {
        if (currentPage > 2) {
            currentPage = 0;
            movePage(currentPage);
        }
    })

    $("#nav-2").on("click", function() {
        if (currentPage > 5 || currentPage < 3) {
            currentPage = 3;
            movePage(currentPage);
        }
    })
    $("#nav-3").on("click", function() {
        if (currentPage > 8 || currentPage < 6) {
            currentPage = 6;
            movePage(currentPage);
        }
    })
    $("#nav-4").on("click", function() {
        if (currentPage < 9) {
            currentPage = 9;
            movePage(currentPage);
        }
    })


    // display css importance
    $('#css-importance').on("click", function() {
        $('link[rel="stylesheet"], style').remove();
        $('*').removeAttr('style');
    })
    $("#hidden-go-back").on("click", function() {
        window.location.href = url + "?page=2" + addParam;
    })


    function initPages() {
        for (i = 0; i < totalPageNum; i++) {
            let pageId = "page-" + (i + 1);
            $("#" + pageId).css("left", i * 100 + "%");
        }
        colorNav()
    }

    function movePage(index) {
        for (i = 0; i < totalPageNum; i++) {
            let pageId = "page-" + (i + 1);
            $("#" + pageId).css("left", (i - index) * 100 + "%");
        }
        colorNav()
    }

    function colorNav() {
        $(".nav-button").removeClass("active");
        if (currentPage < 3) {
            $("#nav-1").addClass("active");
        } else if (currentPage < 6) {
            $("#nav-2").addClass("active");
        } else if (currentPage < 9) {
            $("#nav-3").addClass("active");
        } else {
            $("#nav-4").addClass("active");
        }
    }

    $('.next-button').on("click", function() {
        // console.log(currentPage)
        currentPage += 1;
        // console.log(currentPage)
        if (currentPage < totalPageNum) {
            movePage(currentPage)
        }
    })
    $('.back-button').on("click", function() {
        // console.log(currentPage)
        currentPage -= 1;
        // console.log(currentPage)
        if (currentPage >= 0) {
            movePage(currentPage)
        }
    })

});