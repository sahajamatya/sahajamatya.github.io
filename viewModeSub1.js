$(document).ready(function () {
    //var view = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => ({ accumulator, [key.trim()]: decodeURIComponent(value) }), {});
    var cookie = document.cookie;
    var i = cookie.indexOf("mode=");
    var mode = cookie.charAt(i+5);
    
    function darkMode(){
        $(".darkModeSelector").prop("checked", true);
        $(".style").attr("href", "../darkMode.css");
        $(".modeIcon").attr("src", "../img/darkmodedark.png");
        $(".scrollup").attr("src", "../img/scrollupdark.png");
        $(".sortImg").attr("src", "../img/sortdark.png");
        $(".crossImg").attr("src", "../img/closedark.png");
        $(".displayImg").attr("src", "../img/20200325log/displayDark.gif");
        $(".scrollDemo").attr("src", "../img/20200325log/scrollDark.gif");
    }
    function lightMode(){
        $(".darkModeSelector").prop("checked", false);
        $(".style").attr("href", "../style.css");
        $(".modeIcon").attr("src", "../img/darkmode.png");
        $(".scrollup").attr("src", "../img/scrollup.png");
        $(".sortImg").attr("src", "../img/sort.png");
        $(".crossImg").attr("src", "../img/close.png");
        $(".displayImg").attr("src", "../img/20200325log/displayLight.gif");
        $(".scrollDemo").attr("src", "../img/20200325log/scrollLight.gif");
    }
    if (mode == 'd') {
        darkMode();
    } else {
        lightMode();
    }
    $(".darkModeSelector").on("change", function () {
        var is_it_checked = $(this).prop("checked");
        if (is_it_checked == true) {
            document.cookie="mode=d;path=/";
            darkMode();
        } else {
            document.cookie="mode=l;path=/";
            lightMode();
        }
        console.log($(".style").attr("href"));
    });
});