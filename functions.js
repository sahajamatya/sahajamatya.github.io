$(function () {
  $(".upcomingPosts").hide();
  $(".darkModeMsg").hide();
  $(".pubPosts").click(function () {
    $(".upPosts").css("opacity", "0.5");
    $(".pubPosts").css("opacity", "1");
    $(".upcomingPosts").hide();
    $(".publishedPosts").fadeIn(500);
  });
  $(".upPosts").click(function () {
    $(".pubPosts").css("opacity", "0.5");
    $(".upPosts").css("opacity", "1");
    $(".upcomingPosts").fadeIn(500);
    $(".publishedPosts").hide();
  });
  var mode = "light";
  $(".slider").click(function () {
    // if ($(".style").attr("href") == "style.css" || mode == "dark") {
    //   mode = "dark";
    //   $(".style").attr("href", "darkMode.css");
    //   $("a").each(function () {
    //     var $this = $(this);
    //     var _href = $this.attr("href");
    //     $this.attr("href", _href + '?mode=' + mode);
    //   });
    // } else {
    //   mode = "light";
    //   $(".style").attr("href", "style.css");
    //   $("a").each(function () {
    //     var $this = $(this);
    //     var _href = $this.attr("href");
    //     $this.attr("href", _href + '?mode=' + mode);
    //   });
    // }

    $(".darkModeMsg").show(500);
    setTimeout(function () {
      $(".darkModeMsg").hide(500);
    }, 2000);
  });


});