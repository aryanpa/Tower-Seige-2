const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,base1,base2;
var block1,block2,block3,block4,block5,block6,block7,
    block8,block9,block10,block11,block12,
    block13,block14,block15,
    block16;
var block17,block18,block19,block20,block21,
    block22,block23,block24,
    block25;
var polygon,polygon_img;
var slingShot;  

    

function preload(){

polygon_img = loadImage("polygon.png");

}

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,790,800,20);

    base1 = new Ground(400,650,200,10);
    base2 = new Ground(620,600,150,10);

//base1 pyramid    

//bottom level
    block1 = new Block(325,627,25,35);
    block2 = new Block(350,627,25,35);
    block3 = new Block(375,627,25,35);
    block4 = new Block(400,627,25,35);
    block5 = new Block(425,627,25,35);
    block6 = new Block(450,627,25,35);
    block7 = new Block(475,627,25,35);

//level three
    block8 = new Block(350,592,25,35);
    block9 = new Block(375,592,25,35);
    block10 = new Block(400,592,25,35);
    block11 = new Block(425,592,25,35);
    block12 = new Block(450,592,25,35);

// level two
    block13 = new Block(375,557,25,35);
    block14 = new Block(400,557,25,35);
    block15 = new Block(425,557,25,35);

//top
    block16 = new Block(400,522,25,35);

//base2 pyramid

//bottom
    block17 = new Block(570,577,25,35);
    block18 = new Block(595,577,25,35);
    block19 = new Block(620,577,25,35);
    block20 = new Block(645,577,25,35);
    block21 = new Block(670,577,25,35);

//level two
    block22 = new Block(595,542,25,35);
    block23 = new Block(620,542,25,35);
    block24 = new Block(645,542,25,35);

//top
    block25 = new Block(620,507,25,35);

var options={
    density: 0.5
}

    polygon = Bodies.circle(200,400,20,options);
    World.add(world,polygon);
    
    slingShot = new SlingShot(this.polygon,{x:200,y:400});
    
}

function draw(){
    background(0);
    Engine.update(engine);

    textSize(20);
    fill("white");
    text("Drag The Hexagonal Stone And Release It, To Launch It Towards The Blocks",50,100);


    ground.display();

    base1.display();
    base2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display();
    block15.display();

    block16.display();

    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    block22.display();
    block23.display();
    block24.display();

    block25.display();
    
    
    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);

    slingShot.display();

}

function mouseDragged(){

Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});

}

function mouseReleased(){

slingShot.fly();

}

function keyPressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(polygon,{x:200,y:400});
      slingShot.attach(polygon);
    }
  }
