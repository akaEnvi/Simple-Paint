//FireBrush

function setup() {
  createCanvas(800, 800);
  background("white");
  noStroke();
}

function draw() {
  if (mouseIsPressed) FireBrush(mouseX, mouseY);
}

function FireBrush() {
  if (mouseIsPressed) {
    let diameter = random(10, 30);
    let green = 0;
    let opacity = 100;

    if (diameter < 20) {
      opacity = random(10, 40);
    } else {
      green = random(100, 200);
      opacity = random(40, 70);
    }

    // Define fill color
    fill(random(200, 255), green, 0, opacity);

    // Randomize x and y
    let x = mouseX + random(-20, 20);
    let y = mouseY + random(-20, 20);
    circle(x, y, diameter);
  }
}
