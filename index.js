$(document).ready(function() {

    const url = window.location.href.split('?')[0];
    const queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    const urlPageNum = urlParams.get('page')
    let totalPageNum = $(".page-wrapper").length
    let currentPage = 0

    if (urlPageNum) {
        if (urlPageNum >= 0 && urlPageNum < totalPageNum) {
            currentPage = parseInt(urlPageNum);
        }
    }

    let pageCnt = 1
    $(".page-wrapper").each(function() {
        $(this).attr("id", "page-" + pageCnt);
        pageCnt += 1;
    })


    initPages()

    // let labels = ["Introduction", "HTML STRUCTURE", "MORE TAGS", "ATTRIBUTES", "CSS", "Selectors", "Advanced CSS", "PRACTICE", "END"]
    // for (i = 1; i < 10; i++) {
    //     let navElement = `<div class="nav-button-container" id="nav-page-` + i + `" >
    //                         <div class="nav-button">
    //                             <p>` + i + `</p>
    //                         </div>
    //                         <p class="nav-label">` + labels[i - 1] + `</p>
    //                     </div>`
    //     $("#nav-bar").append(navElement);
    // }

    $(".nav-button-container").on("click", function(e) {
        let pageIdx = parseInt(e.target.innerText)
        currentPage = pageIdx
        movePage(currentPage)
    })

    $('#css-importance').on("click", function() {
        $('link[rel="stylesheet"], style').remove();
        $('*').removeAttr('style');
    })
    $("#hidden-go-back").on("click", function() {
        window.location.href = url + "?page=1";
    })

    movePage(currentPage);

    function initPages() {
        for (i = 0; i < totalPageNum; i++) {
            let pageId = "page-" + (i + 1);
            $("#" + pageId).css("left", i * 100 + "%");
        }
    }

    function movePage(index) {
        for (i = 0; i < totalPageNum; i++) {
            let pageId = "page-" + (i + 1);
            $("#" + pageId).css("left", (i - index) * 100 + "%");
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