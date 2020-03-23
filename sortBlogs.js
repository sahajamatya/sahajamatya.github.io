$(document).ready(function () {
  $(".dropdown").hover(function () {
    $(".dropdown-content").show();
    $(".dropdown-content a").click(function () {
      $(".dropdown").css("width", "210px");
      $(".dropdown-content").hide();
    });
  }, function () {
    $(".dropdown-content").hide();
  });

  function sortBlogs(sortType) {
    var listOfTitles = "";
    $(".innerContainer").each(function () {
      listOfTitles += $(this).attr("id") + ".";
    });
    listOfTitles = listOfTitles.split(".");
    listOfTitles.splice(-1, 1);
    if (sortType === "oldSort") {
      listOfTitles.sort();
      $(".currentOrder").html(": Oldest to Newest");
    } else {
      listOfTitles.sort().reverse();
      $(".currentOrder").html(": Newest to Oldest");
    }
    var i = 0;
    var sortedContent = "";
    for (i = 0; i < listOfTitles.length; i++) {
      sortedContent += $("#" + listOfTitles[i]).html() + "#$^@!";
    }
    sortedContent = sortedContent.split("#$^@!");
    sortedContent.splice(-1, 1);
    for (i = 0; i < sortedContent.length; i++) {
      var num = i + 1;
      var containerClass = ".container" + num;
      $(containerClass).html(sortedContent[i]);
      $(containerClass).attr("id", listOfTitles[i]);
    }
  }

  $(".popSort").click(function () {
    alert("Data collection in progress, will be pushed May 2020.");
  });
  $(".oldSort").click(function () {
    sortBlogs("oldSort");
  });

  $(".newSort").click(function () {
    sortBlogs("newSort");
  });
});