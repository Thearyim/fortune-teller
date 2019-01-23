$(document).ready(function(){

  $("#formOne").submit(function(event) {

    $("#results").show();

    var luckyEvent = 0;
    var unLuckyEvent = 0;

    $("input:checkbox[name=luck]:checked").each(function() {
      var luckValue = $(this).val();
      luckyEvent++;
      $('.goodLuckResults').append(luckValue + "<br>");
    });

    $("input:checkbox[name=unLuck]:checked").each(function() {
      var unLuckValue = $(this).val();
      unLuckyEvent++;
      $('.badLuckResults').append(unLuckValue + "<br>");
    });

    if (luckyEvent > unLuckyEvent) {
      $('.goodLuckResults').show();
      $('.badLuckResults').hide();
    }
    else if (luckyEvent < unLuckyEvent) {
      $('.badLuckResults').show();
      $('.goodLuckResults').hide();
    }
    else if (luckyEvent === unLuckyEvent) {
      $('.nutralResults').show();
      $('.badLuckResults').show();
      $('.goodLuckResults').show();
    }

    event.preventDefault();

  });

  $("#goBack").click(function(){
    location.reload();
  });
});
