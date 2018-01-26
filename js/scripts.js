beepBoop = function(rangeValue, name) {
var results = [];
  for (var index = 1; index <= rangeValue; index += 1) {
    if (index % 3 === 0) {
      results.push("I'm sorry, " + name + ". I'm afraid I can't do that.")
    } else if (index.toString().includes("1")) {
      results.push("Boop!")
    } else if (index.toString().includes("0")) {
      results.push("Beep!");
    } else {
      results.push(index);
    }
  }
  return results;
}

verifyInput = function(name, rangeValue) {
  if (!name) {
    alert("Please enter a name.");
    return false
  } else if (!rangeValue) {
    alert("Please enter a number.");
    return false
  } else {
    return true;
  }
}

displayImages = function(name, rangeValue) {
  if (rangeValue >= 20) {
    $(".intro-img").hide();
    $("#submitData").hide();
    $(".hidden-btn").show();
    $(".result-img").show();
  } else if (rangeValue >= 3) {
    $(".intro-img").hide();
    $("#submitData").hide();
    $(".hidden-btn").show();
    $("#boop-img").show();
    $("#sorry-img").show();
  } else if (verifyInput(name, rangeValue) === true) {
    $("#submitData").hide();
    $(".hidden-btn").show();
    $("#boop-img").show();
  }
}

populateList = function(results) {
  results.forEach(function(result) {
    $("#result ul").append("<li>" + result + "</li>");
  });
}

reverseList = function(results) {
  $("#result ul").empty();
  results.reverse();
  results.forEach(function(result) {
    $("#result ul").append("<li>" + result + "</li>");
  });
}

resetForm = function() {
  results = [];
  $("#result ul").empty();
  $("#reverse").hide();
  $("#reset").hide();
  $(".result-img").hide();
  $(".intro-img").show();
  $("#submitData").show();
}

$(document).ready(function() {
  $("#beepBoopForm").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();
    var rangeValue = parseInt($("input#rangeValue").val());
    var results = beepBoop(rangeValue, name);

    if (verifyInput(name, rangeValue) === true) {
      displayImages(name, rangeValue);
    }

    populateList(results);

  $("#reverse").unbind("click").click(function(event) {
    reverseList(results);
  });

  $("#reset").click(function(){
    resetForm();
  });

  });
});
