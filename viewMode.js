$(document).ready(function () {
    var view = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => ({ accumulator, [key.trim()]: decodeURIComponent(value) }), {});
    
    function adjustIcons() {
        $(".modeIcon").each(function () {
            var $this = $(this);
            var imgPath = $this.attr("src");
            var chunk = imgPath.split(".");
            var extension = chunk[chunk.length - 1];
            var filename = imgPath.replace("." + extension, "");
            var suffix = "dark." + extension;
            if (imgPath.indexOf(suffix) == -1) {
                var imgPathDark = filename + suffix;
                $this.attr("src", imgPathDark);
            } 
        });
    }
    
    function darkMode() {
        $(".darkModeSelector").prop("checked", true);
        $(".style").attr("href", "darkMode.css");
        adjustIcons();
    }
    function lightMode() {
        $(".darkModeSelector").prop("checked", false);
        $(".style").attr("href", "style.css");
        adjustIcons();
    }
    if (view.mode == "dark") {
        darkMode();
    } else {
        lightMode();
    }
    $(".darkModeSelector").on("change", function () {
        var is_it_checked = $(this).prop("checked");
        if (is_it_checked == true) {
            document.cookie = "mode=dark;path=/";
            darkMode();
        } else {
            document.cookie = "mode=light;path=/";
            lightMode();
        }
    });
});