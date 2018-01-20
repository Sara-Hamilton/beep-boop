var name = "";
var rangeValue = 0;
var results = [];

beepBoop = function(rangeValue, name) {
  for (var index = 1; index <= rangeValue; index += 1) {
    if (index.toString().includes("3")) {
      results.push("I'm sorry, " + name + ". I'm afraid I can't do that.")
    } else if (index.toString().includes("1")) {
      results.push("Boop!")
    } else if (index.toString().includes("0")) {
      results.push("Beep!");
    } else {
      results.push(index);
    }
  };
  return results;
}

$(document).ready(function() {
  $("#beepBoopForm").submit(function(event) {
    event.preventDefault();

    name = $("input#name").val();
    rangeValue = parseInt($("input#rangeValue").val());
    results = beepBoop(rangeValue, name);

    if (!name) {
      alert("Please enter a name.");
    } else if (!rangeValue) {
      alert("Please enter a number.");
    } else if (rangeValue >= 20){
      $(".intro-img").hide();
      $(".hidden-btn").show();
      $(".result-img").show();
    } else if (rangeValue >= 3) {
      $(".intro-img").hide();
      $(".hidden-btn").show();
      $("#boop-img").show();
      $("#sorry-img").show();
    } else {
      $(".hidden-btn").show();
      $("#boop-img").show();
    }

    results.forEach(function(result) {
      $("#result ul").append("<li>" + result + "</li>");
    });

  $("#reverse").click(function(event) {
    $("#result ul").empty();
    results.reverse();
    results.forEach(function(result) {
      $("#result ul").append("<li>" + result + "</li>");
    });
  });

  $("#reset").click(function(){
    results = [];
    $("#result ul").empty();
    $("#reverse").hide();
    $("#reset").hide();
    $(".result-img").hide();
    $(".intro-img").show();
  });

  });
});
