"use strict";
{
let userName;
let userHlthPts=40;
let grantHlthPts=10;
let userWins = 0;
let grantWins = 0;
let gameStart;
let userDamageDealt;
let grantDamageDealt;

// JAVASCRIPT GAME LAB PART 2 - FUNCTIONS
// Task: Expand on the game by adding functions that allow the user to start the game and get a number to
// use as damage.


// Functions:
// Rearrange your code to include these functions.
// 1. startGame function. This function will
// a. Prompt the user if they would like to play and if they say yes...
// i. Allow the user to enter the character’s name.
// ii. Call the startCombat function.

function startGame() {  
    gameStart = prompt('Would you like to play a game? Please enter yes or no:');

    if(gameStart.toLowerCase() === 'yes') {
      userName = prompt('Please enter a name:');
    }    
    startCombat(userName);
}  
  
// Additional Changes:
// 1. Each iteration of the loop will include a prompt that will ask the user if they would like to
// “attack” or “quit”.
// 2. If the user decides to attack, adjust the character’s health points and Grant’s health points based
// on the getDamage function.
// 3. If the user decides to quit, figure out a way to exit out of the loop and function.

function startCombat(userName) {
// 2. startCombat function. When executed, this will run the entire loop you created in Part One.

  console.log(`Let the Game Begin! ${userName}'s Starting Health is ${userHlthPts}, and Grant's Starting Health is ${grantHlthPts}`);
      
    while (userWins < 3) { 

      while (grantWins < 1) {
        let attackOrQuit= prompt('Would you like to attack or quit? Enter a for attack or q for quit');

        if (attackOrQuit === 'a') {

        getDamage();

        console.log(`${userName}'s Health is: ${userHlthPts -= grantDamageDealt}`);
        console.log(`Grant's Health is: ${grantHlthPts -= userDamageDealt}`);
        console.log(' ');
          
          if(grantHlthPts <= 0) {
            userWins++;
            console.log(`${userName} has beat grant. You need to win ${3 - userWins} more round(s)`);
            console.log(' ');
            grantHlthPts = 10;
            break;          
          } else if(userHlthPts < 1) {
            grantWins++;
            console.log('GAME OVER - Grant won!');
            break;
          } else if(userWins === 3) {
            break;
          }
        } else if(attackOrQuit === 'q'){
          return;
        }

      }
    }     

  console.log(`Congratulations ${userName}! You've won!`);

}  


function getDamage() {

// 3. getDamage function. This will return a number between one and five that will be used to decide
// how much damage the user and Grant will deal during each round.

    userDamageDealt = Math.floor((Math.random() * 5) + 1);
    grantDamageDealt = Math.floor((Math.random() * 5) + 1);


    console.log(`${userName}'s damage dealt is: ${userDamageDealt}`);
    console.log(`Grant's damage dealt is: ${grantDamageDealt}`);
}


startGame();

}
