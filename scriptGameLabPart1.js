// "use strict";
{
let gameStart = prompt('Would you like to play a game? Please enter yes or no:');

    if(gameStart.toLowerCase() === 'yes') {
      let userHlthPts=40;
      let grantHlthPts=10;
      let userName = prompt('Please enter a name:');
      let userWins = 0;
      let grantWins = 0;

    alert(`Let the Game Begin! ${userName}'s Starting Health is ${userHlthPts}, and Grant's Starting Health is ${grantHlthPts}`);

    while (grantWins || userWins < 3) {
      while (userHlthPts > 0) {
  
      alert(`${userName}'s Health: ${userHlthPts -= Math.floor((Math.random()* + 4) + 1)}`);
      alert(`Grant's Health: ${grantHlthPts -= Math.floor((Math.random() * 3) + 1)}`);
          
          if(grantHlthPts <= 0) {
            userWins++;
            alert(`${userName}'s wins: ${userWins}`);
            grantHlthPts = 10;
            break;          
          } else if(userHlthPts < 1) {
            alert('Game Over - Grant won !');
            break;
          } 
          
            
      }
    }

alert(`"Congratulations ${userName}! You've won!"`);


if (gameStart.toLowerCase() === "no") {
    alert("Maybe you can play next time?");
}

}
}