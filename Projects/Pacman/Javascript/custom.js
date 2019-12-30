// Draw a blank maze so the user can make their own maze

function drawCustom()
{
  push();
  strokeWeight(5);

  for (let i = 0; i < maze.rows; i++)
  {
    for (let j = 0; j < maze.cols; j++)
    {
      if (i < 3 || i === 24)
      {
        stroke(0);
      }
      else
      {
        stroke(45, 45, 230);
      }

      if (maze.customGrid[i][j])
      {
        fill(60, 60, 255)
      }
      else
      {
        fill(0)
      }

      square((j * scalar) + rectXOffset, (i * scalar) + rectYOffset, scalar + 1, 5);

    }
  }
  pop();

  push();
  strokeWeight(5);
  stroke(45, 45, 230);
  line(scalar * 11.9, windowHeight - (rectYOffset * 2.1), 26.8 * scalar, windowHeight - (rectYOffset * 2.1))
  pop();

  push();
  fill(255);
  rect(windowWidth - scalar * 5, windowHeight/2, scalar*3, scalar*3);
  pop();

  push();
  fill(0);
  textAlign(CENTER);
  textSize(scalar/2)
  text("DONE!", windowWidth - scalar * 5, windowHeight/2)
  pop();
}



// Change the status of a box from empty to full

function changeMaze()
{
  xToChange = (round(floor(mouseX - rectXOffset)/scalar));
  yToChange = (round(floor(mouseY - rectYOffset)/scalar));

  console.log(xToChange, yToChange);

  if (xToChange >= 21 && xToChange <= 24 && yToChange >=10 && yToChange <= 13)
  {
    gameMode = "PACMAN";
  }

  else if (yToChange > 2 && yToChange < 24)
  {
    maze.customGrid[yToChange][xToChange] = !maze.customGrid[yToChange][xToChange]
  }

}



// Draw the custom maze every time this is called

function customUpdate()
{
  drawCustom();
}
