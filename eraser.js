let canvas = 400;
let bgcolor = "white";
let logosize = 185;

function setup() {
  createCanvas(400, 400);
  background(bgcolor);
  noStroke();
  fill("tomato");
  rect(10, 10, logosize);

  fill("yellowgreen");
  rect(205, 10, logosize);

  fill("skyblue");
  rect(10, 205, logosize);

  fill("orange");
  rect(205, 205, logosize);
}

function draw() {
  fill(bgcolor);
  if (mouseIsPressed) {
    circle(mouseX, mouseY, 30);
  }
}
