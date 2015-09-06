$(document).ready(function() {
    $('car').click(function() {
        if ($(this).hasClass("selected")) {
            $(this).removeClass("selected");
        }
        else {
            $(this).addClass("selected");
        }
    });
    //$('#car').draggable();
});
