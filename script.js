var animateArrow = function(){
  $( "#arrow" ).effect( "bounce", { times: 3 }, "slow" );
}


$(document).ready(function(){
  setInterval(animateArrow, 2000);
});


console.log("WTF");
