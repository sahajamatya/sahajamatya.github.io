$(function() {
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
    $(".slider").click(function () {
      // if ($(".style").attr("href") == "style.css") {
      //   $(".style").attr("href", "darkMode.css");
      // } else {
      //   $(".style").attr("href", "style.css");  
      // }
      $(".darkModeMsg").show(500);
      setTimeout(function () {
        $(".darkModeMsg").hide(500);
      }, 2000);
    });
  });