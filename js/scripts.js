var beepBoop = function(rangeValue) {
  var resultsArray = [];
  for (var index = 1; index <= rangeValue; index += 1) {
    if (index.toString().includes("3")) {
      resultsArray.push("sorry")
    } else if (index.toString().includes("1")) {
      resultsArray.push("Boop!")
    } else if (index % 10 === 0) {
      resultsArray.push("Beep!");
    } else {
      resultsArray.push(index);
    }
  };
  return resultsArray;
}

$(document).ready(function() {
  $(":reset");

  $("#beepBoopForm").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();
    var rangeValue = parseInt($("input#rangeValue").val());
    var results = beepBoop(rangeValue);
    var resultIndex = 0;

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
      if (result === ("sorry")) {
        results.splice(resultIndex, 1, "I'm sorry, " + name + ". I'm afraid I can't do that.");
      }
      resultIndex += 1;
    });

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

  $("#reset").click(function(result){
    $("#result ul").empty();
    $("#reverse").hide();
    $("#reset").hide();
    $(".result-img").hide();
    $(".intro-img").show();
  });

  });
});
