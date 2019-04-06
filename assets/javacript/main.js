$(document).ready(() => {

    var numberOfItems = $(".component-area .component").length;
    var limitPerPage = 1;
    var totalPages = Math.round(numberOfItems / limitPerPage);
    // var currentPage =1;
    //Limit the number of components that will be displayed per page
    $(".component-area .component").slice(Math.ceil(limitPerPage)).hide();

    console.log(totalPages);
    //add the # of Pages
    for (var i = 1; i <= totalPages; i++) {
        //Append a componnet area for each page that exists.
        $("#compContainer").append(` <div class="component-area"></div>`);
    }

    //When you click on an arrow, go to the next page
    $(".right-arrow").on("click", () => {
       alert("arrow go to right");

        var grandTotal = limitPerPage * currentPage;

        for (let i = 0; i < grandTotal; i++) {
            $(".component-area .component").eq(i).show();
        }
       
    });

//     var component =`<div class="component">
//     <div class="comp-title">Title of Project</div>
//     <div class="comp-links">
//         <a href="#" class="comp-link"target="_blank">Github Project</a>
//         <a href="#" class="comp-link"target="_blank">.io</a>
//     </div>
// </div>`
// //create the component
// $(".component-area").append(component);
});