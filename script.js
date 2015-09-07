$(document).ready(function() {
    $('#car').click(function() {
        if ($(this).hasClass("selected") === false) {
            $('.header-panel-button').removeClass("selected");
            $(this).addClass("selected");
            //$('#bsc-menu').style.display= "block";
            $(document).getElementById("bsc-menu").style.display = "none";
        }
    });
    //$('#car').draggable();
});
