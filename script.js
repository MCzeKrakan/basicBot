$(document).ready(function() {
    $('#car').click(function() {
        if ($(this).hasClass("selected") === false) {
            $(".header-panel-button").removeClass("selected");
            $(this).addClass("selected");
            $("#app-right").style.display= none;
            $(".bsc-menu").style.display= block;
        }
    });
    //$('#car').draggable();
});
