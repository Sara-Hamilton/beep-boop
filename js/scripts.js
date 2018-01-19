$(document).ready(function(){
  $("#beepBoopForm").submit(function(event){
    event.preventDefault();

    var rangeValue = parseInt("input#rangeValue").val());

    $("#result").text(result);
  })
});
