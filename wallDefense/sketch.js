let projectileX = 0;
let projectileSpeed = 7;
let projectileVelocity = 0;
let cooldown = 3;
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
  //the turret itself
  fill('orange')
  circle(0, mouseY, 90)
  stroke('orange')
  rect(0, mouseY-15, 90, 30)
  stroke('black');
  fill('black');
  circle(90, mouseY, 30)
  text(cooldown, 15, mouseY+4)

  if(frameCount === 60){
    frameCount = 0;
    if(cooldown > 0){
      cooldown -= 1;
    }
  }
  
  if(cooldown === 0 & mouseIsPressed === true & projectileActive === false){
      projectileVelocity = mouseY;
      projectileX = 75;
      projectileActive = true;
          cooldown = 3;
  }
  if(projectileActive === true){
    //projectile
    stroke('black');
    fill('grey');
    circle(projectileX, projectileVelocity, 25)
    projectileX += projectileSpeed;
    if(projectileX >= windowWidth){
      projectileActive = false;
      projectileX = 0;
    }
  }
}
