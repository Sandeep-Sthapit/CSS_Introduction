$(document).ready(function() {
    let currentPage = 0;
    let totalPageNum = $(".page-wrapper").length

    initPages()

    let labels = ["Introduction", "HTML", "HTML TAGS", "MORE TAGS", "ATTRIBUTES", "CSS", "Selectors", "Advanced CSS", "PRACTICE", "END"]
    for (i = 1; i < 11; i++) {
        let navElement = `<div class="nav-button-container" id="nav-page-` + i + `" >
                            <div class="nav-button">
                                <p>` + i + `</p>
                            </div>
                            <p class="nav-label">` + labels[i - 1] + `</p>
                        </div>`
        $("#nav-bar").append(navElement);
    }
    $(".nav-button-container").on("click", function(e) {
            let pageIdx = parseInt(e.target.innerText)
            currentPage = pageIdx
            movePage(currentPage)
        })
        // movePage(currentPage);

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
        currentPage += 1;
        if (currentPage < totalPageNum) {
            movePage(currentPage)
        }
    })

});