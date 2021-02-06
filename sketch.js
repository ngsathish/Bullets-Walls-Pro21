var bull, wall
var speed, weight

var thickness

function setup() {
  createCanvas(1600, 400);
  bull = createSprite(1200, 50, 10, 6);
  bull.shapeColor = "white"
  speed = random(-223, -321);
  weight = random(30, 52);
  thickness = random(22, 83);
  wall1 = createSprite(800, 200, 1600, 10);
  wall2 = createSprite(800, 100, 1600, 10);
  wall3 = createSprite(800, 300, 1600, 10);
  inviwall = createSprite(0, 200, thickness, 400);
  inviwall.visible = true;
  damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
}

function draw() {
  background("blue");

  if (bull.isTouching(inviwall)) {
    bull.collide(inviwall)
    if (damage < 10) {
      inviwall.shapeColor = "green";
    }
    else if (damage > 10) {
      inviwall.shapeColor = "red";
    }
  }

  bull.velocityX = speed;
  wall1.shapeColor = "80,80,80";
  wall2.shapeColor = "80,80,80";
  wall3.shapeColor = "80,80,80";
  drawSprites();
}