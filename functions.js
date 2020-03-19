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
  // var urlMode = new URLSearchParams(window.location.search);
  // var mode = urlMode.toString();
  // Cookies.set('dark','');
  // var darkMode = Cookies.get('dark');
  // var is_it_checked = $(".darkModeSelector").prop("checked");
  //   if (is_it_checked==true) {
  //     mode = "ciHvhtdD";
  //     $(".style").attr("href", "darkMode.css");
  //     $(".modeIcon").attr("src", "img/lightmode.png");
  //     $(".scrollup").attr("src", "img/scrollupLight.png");
  //     $("a").each(function () {
  //       var $this = $(this);
  //       var _href = $this.attr("href");
  //       $this.attr("href", _href + '?' + mode);
  //     });
  //   } else {
  //     mode = "yFpKKwpf";
  //     $(".style").attr("href", "style.css");
  //     $(".modeIcon").attr("src", "img/darkmode.png");
  //     $(".scrollup").attr("src", "img/scrollup.png");
  //     $("a").each(function () {
  //       var $this = $(this);
  //       var _href = $this.attr("href");
  //       $this.attr("href", _href + '?' + mode);
  //     });
  //   }
  $(".darkModeSelector").on("change",function () {
  //   var is_it_checked = $(this).prop("checked");
  //   if (is_it_checked==true) {
  //     mode = "ciHvhtdD";
  //     $(".style").attr("href", "darkMode.css");
  //     $(".modeIcon").attr("src", "img/lightmode.png");
  //     $(".scrollup").attr("src", "img/scrollupLight.png");
  //     $("a").each(function () {
  //       var $this = $(this);
  //       var _href = $this.attr("href");
  //       var indexOfQ = _href.indexOf("?");
  //       _href=_href.substr(0,indexOfQ);
  //       $this.attr("href", _href + '?' + mode);
  //     });
  //   } else {
  //     mode = "yFpKKwpf";
  //     $(".style").attr("href", "style.css");
  //     $(".modeIcon").attr("src", "img/darkmode.png");
  //     $(".scrollup").attr("src", "img/scrollup.png");
  //     $("a").each(function () {
  //       var $this = $(this);
  //       var _href = $this.attr("href");
  //       var indexOfQ = _href.indexOf("?");
  //       _href=_href.substr(0,indexOfQ);
  //       $this.attr("href", _href + '?' + mode);
  //     });
  //   }

    $(".darkModeMsg").show(500);
    setTimeout(function () {
      $(".darkModeMsg").hide(500);
    }, 2000);
  });


});