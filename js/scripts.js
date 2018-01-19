var beepBoop = function(rangeValue) {
  var numbers = [];
  for (var index = 1; index <= rangeValue; index += 1) {
    if (index.toString().includes("3")) {
      numbers.push("sorry")
    } else if (index.toString().includes("1")) {
      numbers.push("Boop!")
    } else if (index % 10 === 0) {
      numbers.push("Beep!");
    } else {
      numbers.push(index);
    }
  }
  console.log("name = " + name);
  return numbers;
}

$(document).ready(function() {
  $("#beepBoopForm").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();
    var rangeValue = parseInt($("input#rangeValue").val());
    var results = beepBoop(rangeValue);

    if (!name) {
      name = prompt("Please enter a name.");
    } else if (!rangeValue) {
      rangeValue = prompt("Please enter a number.");
    }

    results.forEach(function(result) {
      console.log(result);
      if (result === ("sorry")) {
        result = ("I'm sorry, " + name + ". I'm afraid I can't do that.")
      } else {
        result = result;
      }
      $("#result ul").append("<li>" + result + "</li>");
    });
  });
});
