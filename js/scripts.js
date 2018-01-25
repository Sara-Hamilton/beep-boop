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
};

verifyInput = function(name, rangeValue) {
  if (!name) {
    alert("Please enter a name.");
    console.log(verifyInput === true)
    return false
  } else if (!rangeValue) {
    alert("Please enter a number.");
    return false
  } else {
    return true;
  }
}

displayImages = function(name, rangeValue) {
  // if (!name) {
  //   alert("Please enter a name.");
  // } else if (!rangeValue) {
  //   alert("Please enter a number.");
  if (rangeValue >= 20) {
    $(".intro-img").hide();
    $(".hidden-btn").show();
    $(".result-img").show();
  } else if (rangeValue >= 3) {
    $(".intro-img").hide();
    $(".hidden-btn").show();
    $("#boop-img").show();
    $("#sorry-img").show();
  } else if (verifyInput === true) {
    $(".hidden-btn").show();
    $("#boop-img").show();
  }
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
    $("#submitData").hide();

    var name = $("input#name").val();
    var rangeValue = parseInt($("input#rangeValue").val());
    var results = beepBoop(rangeValue, name);

    verifyInput(name, rangeValue);
    if (verifyInput === true) {
      displayImages(name, rangeValue);
    }
    // displayImages(name, rangeValue);

    results.forEach(function(result) {
      $("#result ul").append("<li>" + result + "</li>");
    });

  $("#reverse").unbind("click").click(function(event) {
    $("#result ul").empty();
    results.reverse();
    results.forEach(function(result) {
      $("#result ul").append("<li>" + result + "</li>");
    });
  });

  $("#reset").click(function(){
    resetForm();
  });

  });
});
