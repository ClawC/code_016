$(document).ready(function () {
    $(".buttonToHide").click(function () {
        $("p").hide();
    });
    $(".buttonToUnhide").click(function () {
        $("p").show();
    });
});