const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render

var myEngine, myWorld;
var box1,box2,box3,box4,box5;
var stand1,stand2;
var polygon;

function preload(){
  polygonImg = loadImage("polygon.png")
}

function setup() {
  createCanvas(1200,400);
  
  myEngine = Engine.create();
  myWorld = myEngine.world;

  var options = {
    isStatic: true
  }
  polygon = Bodies.circle(100,200,20,options);
  World.add(myWorld,polygon); 

  
  stand1 = new Ground(390,300,250,10);
  stand2 = new Ground(700,200,200,10);
    
  //level1
  block1 = new Block(300,275,30,40)
  block2 = new Block(330,275,30,40)
  block3 = new Block(360,275,30,40)
  block4 = new Block(390,275,30,40)
  block5 = new Block(420,275,30,40)
  block6 = new Block(450,275,30,40)
  block7 = new Block(480,275,30,40)

    //level2
  block8 = new Block(330,235,30,40)
  block9 = new Block(360,235,30,40)
  block10 = new Block(390,235,30,40)
  block11= new Block(420,235,30,40)
  block12 = new Block(450,235,30,40)

      //level3
  block13 = new Block(360,195,30,40)
  block14 = new Block(390,195,30,40)
  block15 = new Block(420,195,30,40)
  
//top
  block16= new Block(390,155,30,40)


  //second stand
    //level1
    block21 = new Block(640,175,30,40)
    block22 = new Block(670,175,30,40)
    block23 = new Block(700,175,30,40)
    block24 = new Block(730,175,30,40)
    block25 = new Block(760,175,30,40)

  
      //level2
    block26 = new Block(670,135,30,40)
    block27 = new Block(700,135,30,40)
    block28 = new Block(730,135,30,40)
  
        //top
    block29 = new Block(700,95,30,40)



  var render = Render.create({ 
    element: document.body, 
    engine: myEngine, 
    options: { 
      width: 1200,
      height: 400, 
      showAngleIndicator: true
    } 
  }); 
  Render.run(render);


}

function draw() {
  background("black");  
  Engine.update(myEngine);
  
    stand1.display()
    stand2.display()
    fill("blue");
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    //block1.display()
    fill("pink")
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()

    fill("turquoise")
    block13.display()
    block14.display()
    block15.display()

    fill("grey")
    block16.display()

    fill("blue");
    block21.display()
    block22.display()
    block23.display()
    block24.display()
    block25.display()

    //block1.display()
    fill("pink")
    block26.display()
    block27.display()
    block28.display()


    fill("turquoise")
    block29.display()

    imageMode(CENTER)
    image(polygonImg,polygon.body.position.x,polygon.body.position.y,20,20)





}
