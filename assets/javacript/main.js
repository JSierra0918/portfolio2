$(document).ready(() => {

    // var numberOfItems = $(".component-area .component").length;
    // var limitPerPage = 5;
    // var totalPages = Math.round(numberOfItems / limitPerPage);
    // var currentPage =1;

    // //Limit the number of components that will be displayed per page
    // $(".component-area .component").slice(Math.ceil(limitPerPage)).hide();

    // console.log(totalPages);
    // //add the # of Pages
    // for (var i = 1; i <= totalPages; i++) {
    //     //Append a componnet area for each page that exists.
    //     $("#compContainer").append(` <div class="component-area"></div>`);
    //     page++;
    // }

    // //When you click on an arrow, go to the next page
    // $(".right-arrow").on("click", () => {
    //    alert("arrow go to right");

    //     var grandTotal = limitPerPage * currentPage;

    //     for (let i = 0; i < grandTotal; i++) {
    //         $(".component-area .component").eq(i).show();
    //     }

    // });


    // --------------------Smooth Scroll

    var scrollLink = $(".scroll");

    $(document).on("click", ".scroll", (params) => {

        event.preventDefault();

        console.log( $(this.hash));

        console.log($(this).attr("href"));
        $("body, html").animate({
            scrollTop: $(this.hash).offset().top
        });


        // var linkHref = $(this).attr('href');

        // $('html, body').animate({
        //     scrollTop: $(linkHref).offset().top
        // }, 850);
    });
});

