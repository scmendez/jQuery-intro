// var allParagraphs = $("p");
// var middleParagraph = $("p")[1];

$(document).ready(() => {
    $("a").click((event) => {
        alert("jQuery says hello!")
    });

    $("p").hover(
        () => { $("p").append( $( "<span> ! </span>" )); },
        () => { $("p").find("span").remove(); }
    );
    
});


//$("a") is a jQuery function invoked with a CSS selector, this will select all elements that match this selector (in this case there's only one)
//and returns a jQuery object that has a collection of DOM elements that have been created from an HTML string or selected from a document
//in this case, the HTML <a> elements has been selected from the document
//an event listener then gets added to the jQuery object now comprised of the selected DOM elements
//when it receives an event, the function will be invoked

// $(window).on("load", () => {
//     alert("DOM & Images are loaded");
// });