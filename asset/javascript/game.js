$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)
  
  $('#computerScore').text(Random);
 
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)
  
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
  

 
$("#wins").text("wins: " + wins)
$("#losses").text("losses: " + losses)

 

function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#computerScore').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#score').text(userTotal);
      

         
      } 

function yay(){
alert("You won!");
  wins++; 
  reset();
}

function loser(){
alert ("You lose!");
  losses++;
  reset()
}

  $('.red').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#score').text(userTotal); 
        
        if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        }   
  })  
  $('.blue').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#score').text(userTotal); 
        if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('.green').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#score').text(userTotal);

          if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('.yellow').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#score').text(userTotal); 
      
          if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        }
  }); 

}); 