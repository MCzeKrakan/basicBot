$(document).ready(function() {
    $('#car').click(function() {
        if ($(this).hasClass("selected") === false) {
            $('.header-panel-button').removeClass("selected");
            $(this).addClass("selected");
            $('#chat, #user-lists, #waitlist, .friends').css('display', 'none');
            $('#bsc-menu').css('display', 'block');
        }
    });
    if ($(this).hasClass("selected") === false) {
        $('#bsc-menu').css('display', 'none');
    }
    //$('#car').draggable();
});
