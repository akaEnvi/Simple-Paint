//IceBrush

function setup() {
  createCanvas(800, 800);
  background("white");
  noStroke();
}

function draw() {
  if (mouseIsPressed) iceBrush(mouseX, mouseY);
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
