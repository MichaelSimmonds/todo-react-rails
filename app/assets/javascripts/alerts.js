$(document).ready(function(){

  var alerts = $('.notice')
  console.log(alerts)
  if (alerts.html()  == "") {
    console.log("AARRSSEE");
  }
  else {
    alerts.css("right", "8em")
    console.log("BBAALLSS")
    setTimeout(function(){
      alerts.css("right", "-25em")
    },3000);
  }

})
