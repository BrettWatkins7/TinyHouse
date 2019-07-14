var animateArrow = function(){
  $( "#arrow" ).effect( "bounce", { times: 500 }, "slow" );
}


$(document).ready(function(){
  setInterval(animateArrow, 1000);
});


console.log("WTF");
