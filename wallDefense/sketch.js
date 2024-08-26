let projectileX = 0;
let projectileSpeed = 5;
let projectileVelocity = 0;
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
    if(cooldown > 0){
      cooldown -= 1;
    }
  }
  
  if(cooldown === 0 & mouseIsPressed === true){
    projectileVelocity = mouseY;
    projectileX = 0;
    projectileActive = true;
    while(projectileActive === true){
      //projectile
      stroke('grey');
      fill('grey');
      circle(90, projectileX, projectileVelocity)
      projectileX += projectileSpeed;
      if(projectileX >= windowWidth){
        projectileActive = false;
        projectileX = 0;
        cooldown = 5;
      }
    }
  }
}
