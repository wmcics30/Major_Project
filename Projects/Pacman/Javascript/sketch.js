// Pacman in Javascript
// Anurag Sakharkar
// Computer Science 30 (4)
// 12 November 2019



// Extras for experts/Wow me factor:
//       - I completed the entire project using Object-Oriented Programming in p5.js, which allows for efficiency and scalability on an entirely new
//         level when compared to function-oriented programming.
//       - I managed to learn and effectively implement OOP in my code completely independently (learned from Daniel Shiffman - https://shiffman.net/
//         and other sources on the internet).
//       - A significant amount of the actual game mechanics is complete, all that is left to implement is pathfinding for the Ghosts, the points
//         mechanics and maybe a start screen.
//       - I collaborated with people both online and physically to try to complete aspects of this project in the most elegant way possible.
//       - I did some extensive research on stuff like the extends method and the original game mechanics and am working to implement those in the
//         most elegant and efficient way possible.
//       - I plan on expanding this project significantly (see notes at the end of the code) and will ensure that I continue to work on it alongside
//         other CS30 projects.



// Initialize variables and variable names

let gameMode = "MENU";




// Mouse clicked because Chrome bad

function mouseClicked()
{
  gameMode = "PACMAN";
}




// Main setup and draw loops

// Setup loop - initializes the canvas, universally converts angles to degrees, and creates objects from the classes defined above.

function setup()
{
  totalFrames = 0;
  highScore = 100;

  frameRate(60);
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  textFont(emulogic);
  noStroke();

  maze = new Grid();
  foods = new Dots();

  playerPac = new Pacman();

  oppBlinky = new Blinky();
  oppPinky = new Pinky();
  oppInky = new Inky();
  oppClyde = new Clyde();

  windowResized();
}



// Draw Loop - this is the main loop and will be iterated 60 times per second. Update functions for all the classes are called here.

function draw()
{
  background(0);

  if (gameMode === "MENU")
  {

  }


  else if (gameMode === "PACMAN")
  {

    runGame();
  }
}



// Possible future improvements/stuff I will probably add for fun:
// - Modes for the ghosts (chase, rest, scared) just like is present in the real game.
// - Get the points rendered and working properly
// - Further optimizations to allow for future porting to other platforms
// - Collision and death mechanisms against the ghosts
// - Death/score counter
// - Levels where the speed and timing of the Ghosts are changed
// - Start/end screen
// - Menu to choose custom colours for Pacman


// :)
