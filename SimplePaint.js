//Simple Paint

let currentBrush = "";
let bgColor = "white";

function setup() {
  createCanvas(400, 400);
  background(bgColor);
  noStroke();
}

function draw() {
  switch (key) {
    case "f":
      currentBrush = "fire";
      break;
    case "i":
      currentBrush = "ice";
      break;
    default:
      currentBrush = "";
  }

  if (mouseIsPressed) {
    if (currentBrush === "fire") {
      fireBrush(mouseX, mouseY);
    } else if (currentBrush === "ice") {
      iceBrush(mouseX, mouseY);
    } else {
      eraserBrush(mouseX, mouseY);
    }
  }
}

function fireBrush(x, y) {
  // Randomize x and y
  x = x + random(-20, 20);
  y = y + random(-20, 20);

  let diameter = random(10, 30);
  let green = 0;
  let opacity = 100;

  // Change green and opacity
  // based on random diameter
  if (diameter < 20) {
    opacity = random(10, 40);
  } else {
    green = random(100, 200);
    opacity = random(40, 70);
  }

  // Define fill color
  fill(random(200, 255), green, 0, opacity);

  // Draw circle
  circle(x, y, diameter);
}

function iceBrush(x, y) {
  let opacity = random(0, 100);
  let blue = random(200, 255);
  fill(0, 0, blue, opacity);

  // Draw larger rect
  let width = random(30, 40);
  let height = random(30, 40);
  rect(x, y, width, height);

  // Draw smaller rect
  width = random(10, 20);
  height = random(10, 20);
  x = x + random(-10, 10);
  y = y + random(-10, 10);
  rect(x, y, width, height);
}

function eraserBrush(x, y) {
  fill(bgColor);
  circle(x, y, 50);
}
