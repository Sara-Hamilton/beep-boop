var beepBoop = function(rangeValue) {
  return false;
}

$(document).ready(function() {
  $("#beepBoopForm").submit(function(event) {
    event.preventDefault();

    var rangeValue = parseInt($("input#rangeValue").val());
    var result = beepBoop(rangeValue);

    $("#result").text(result);
  });
});
