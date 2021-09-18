$(function() {
    $("#header").load("./header.html");
    $("#footer").load("./footer.html");
});

window.onload = function() {
    var content_height = $(document.body).height() - $("header").height() - $("footer").height();
    $("article").css("min-height", content_height + "px");
}

var hide = true;

function open_phone_list() {
    if (hide) {
        $(".phone-list").show(300);
        hide = false;
    } else {
        $(".phone-list").hide(300);
        hide = true;
    }
}