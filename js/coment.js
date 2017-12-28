$("#button").click(function(event) {
  var text = $("#input").val();
  var yes = $("#COM").val();
  $("#list").append( '<p>' + '<strong>' + text + ':' + '</strong>' + '<br>' + yes + '</p>');
});
$("#button").click(function(event){
  $("#gracias").append('Gracias!')
});
