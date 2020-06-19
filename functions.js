$(function () {
  $(".dropIdeaSub").click(function(){
    alert("Backend will be ported for this feature August 2020.");
  });
  $(".commentSub").click(function(){
    alert("Backend will be ported for this feature August 2020.");
  });
  $(".upcomingPosts").hide();
  $(".pubPosts").click(function () {
    $(".upPosts").css("opacity", "0.4");
    $(".pubPosts").css("opacity", "1");
    $(".upcomingPosts").hide();
    $(".publishedPosts").fadeIn(500);
  });
  $(".upPosts").click(function () {
    $(".pubPosts").css("opacity", "0.4");
    $(".upPosts").css("opacity", "1");
    $(".upcomingPosts").fadeIn(500);
    $(".publishedPosts").hide();
  });
  $('.openNew').click(function () {
    window.open($(this)[0].src, '_blank');
  });
});
