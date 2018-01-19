var beepBoop = function(rangeValue) {
  var numbers = [];
  for (var index = 1; index <= rangeValue; index += 1) {
    if (index.toString().includes("1")) {
      numbers.push("Boop!")
    } else if (index % 10 === 0) {
      numbers.push("Beep!");
    } else {
      numbers.push(index);
    }
  }
  return numbers;
}

$(document).ready(function() {
  $("#beepBoopForm").submit(function(event) {
    event.preventDefault();

    var rangeValue = parseInt($("input#rangeValue").val());
    var result = beepBoop(rangeValue);

    $("#result").text(result);
  });
});
