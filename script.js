$(document).ready(function() {
    $('#car').click(function() {
        if ($(this).hasClass("selected") === false) {
            $('.header-panel-button').removeClass("selected");
            $(this).addClass("selected");
            $('.app-right').children.css('display', 'none');
            $('#bsc-menu').css('display', 'block');
        }
    });
    //$('#car').draggable();
});
