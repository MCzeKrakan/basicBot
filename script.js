$(document).ready(function() {
    $('#car').click(function() {
        $(this).hasClass("selected") || $(".header-panel-button").removeClass("selected")
        $(this).addClass("selected");
    });
    //$('#car').draggable();
});
