
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myengine
var myworld

var ball;
var bottom_ground
var leftside
var rightside



function setup() {
	createCanvas(1200,500);

	var ball_options={

		restitution:0.3,
		friction:0,
		density:1.2
	}




	myengine = Engine.create();
	myworld = myengine.world;

	//Create the Bodies Here.
	 ball = Matter.Bodies.circle(300,300,10,ball_options)
	bottom_ground=new Ground(600,670,1200,20)
	leftside= new Ground(1100,600,20,120)
	rightside=new Ground(1500,600,20,120)

	
	World.add(myworld,ball)
	World.add(myworld,bottom_ground)
	World.add(myworld,leftside)
	World.add(myworld,rightside)

	




  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.05})
	}
}



function draw() {
	background(0);
	Engine.update(myengine)
	
	bottom_ground.display()
	rightside.display()
	leftside.display()
	
 
  
  
  
 
}



