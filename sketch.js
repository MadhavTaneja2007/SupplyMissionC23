var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint  = Matter.Constraint;
var log1, log2, log3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	log1 = createSprite(width/2 + 50,groundSprite.y - 60, 20,100,{isStatic:true})
	log1.shapeColor = 'red';
	World.add(world, log1);

	log2 = createSprite(width/2 ,groundSprite.y - 10, 100,20,{isStatic:true})
	log2.shapeColor = 'red';
	World.add(world, log2);
	
	log3 = createSprite(width/2 - 50,groundSprite.y - 60, 20,100,{isStatic:true})
	log3.shapeColor = 'red';
	World.add(world, log3);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 	
  drawSprites();
  if(packageSprite.y === ground.y){
	packageSprite.restitution  = 0.3
  }
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	packageSprite.restitution = 0.5
    
  }
}



