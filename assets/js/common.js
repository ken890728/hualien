$(function() {
    $("#header").load("./header.html");
    $("#footer").load("./footer.html");
});

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