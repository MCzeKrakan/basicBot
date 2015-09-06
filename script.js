$(document).ready(function() {
    $('#car').click(function() {
        if ($(this).hasClass("selected") === false) {
            $('.header-panel-button').removeClass("selected");
            $(this).addClass("selected");
            $('.bsc-menu').show;
        }
    });
    //$('#car').draggable();
});
