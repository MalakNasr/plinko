const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var plinko = [], particle =[], division = [];
var divisionHeight = 300;
var ground;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground= new Ground(240, 800, 480, 10)
  for(var i = 0; i <= width; i = i+100){
    division.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
  }
  for(var i = 50; i <= width; i = i+50){
    plinko.push(new Plinko(i, 275, 5));
  }
  for(var i = 75; i <= width-20; i = i+50){
    plinko.push(new Plinko(i, 375, 5));
  }
  for(var i = 50; i <= width; i = i+50){
    plinko.push(new Plinko(i, 175, 5));
  }
  for(var i = 75; i <= width-20; i = i+50){
    plinko.push(new Plinko(i, 75, 5));
  }
}

function draw() {
  background(0,0,0);  
  drawSprites();
  Engine.update(engine);
  ground.display();
  for(var i = 0; i < division.length; i++){
    division[i].display();
  }

  for(var i = 0; i < plinko.length; i++){
    plinko[i].display();
  }
  if(frameCount %60 === 0 ){
    particle.push(new Particle(random(width/2-20, width/2+20), 5, 5));
  }
  for(var i = 0; i < particle.length; i++){
    particle[i].display();
  }
}