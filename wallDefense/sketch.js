let cannonballX = 0;

function  preload(){

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  frameRate(60);

}

function draw() {
  clear();

  background(0,0,75);
  //the base
  fill('orange')
  circle(0,mouseY, 75)
  //the barrel
  stroke('orange')
  rect(0, mouseY-10, 75, 20)
  stroke('black');
  fill('black');
  circle(75, mouseY, 20)

  //projectile
  stroke('grey');
  fill('grey');
  circle(90, cannonballX, 17)
}
