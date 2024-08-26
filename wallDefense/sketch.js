let cannonballX = 0;
let cannonballSpeed = 5;
let cannonballVelocity = 0;
let cooldown = 5;
let projectileActive = false;

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

  if(frameCount === 60){
    frameCount = 0;
    if (cooldown > 0){
      cooldown -= 1;
    }
  }

  if(cooldown < 0 || projectileActive === true){
    cannonballVelocity = mouseY;
    
    //projectile
    stroke('grey');
    fill('grey');
    circle(90, cannonballX, 17)
    
    projectileActive = true;
    cooldown = 5;
    if(cannonballX >= windowWidth){
      projectileActive = false;
    }
  }
}
