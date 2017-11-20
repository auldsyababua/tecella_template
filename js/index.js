$(document).ready(function() {
  $(".dropdown-button").dropdown({hover: true});

  //goes to home page
  $(".logo").click(function() {
    $(".defaultPage").show();
    $(".contact").hide();
    $(".profile").hide();
  });

  //show profile page, hide contact
  $(".item1").click(function() {
    $(".defaultPage").hide();
    $(".contact").hide();
    $(".profile").show();
  });

  //show contact page, hide profile
  $(".item2").click(function() {
    $(".defaultPage").hide();
    $(".contact").show();
    $(".profile").hide();
  });
})
