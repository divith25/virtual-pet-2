//Create variables here
var dog
function preload()
{
  dogimage=loadAnimation("dogimg.png")
  dogsitimage=loadAnimation("dogimg1.png")
  milkimage=loadAnimation("Milk.png")
}

function setup() {
  createCanvas(800, 700);
  
  
dog=createSprite(600,500,50,50)
dog.addAnimation("image",dogimage)
dog.addAnimation("image1",dogsitimage)
dog.scale=0.5

this.button1 = createButton('add food');
this.button1.position(displayWidth/3 + 30, displayHeight/2);

this.button = createButton('feed');
this.button.position(displayWidth/2 + 30, displayHeight/2);

this.button3 = createButton('stand');
this.button3.position(displayWidth/2.5 + 30, displayHeight/2);


}


function draw() { 
  
  background("blue")

  this.button.mousePressed(()=>{
    dog.changeAnimation("image1",dogsitimage)
    dog.scale=0.5
    console.log("sit")
    bottle.x=500
  })

  this.button1.mousePressed(()=>{
bottle=createSprite(100,500,30,40)
bottle.addAnimation("milk",milkimage)
bottle.scale=0.2
})

this.button3.mousePressed(()=>{
  bottle.visible=false
  dog.changeAnimation("image",dogimage)
})



  drawSprites();
  //add styles here
  fill("white")
  text("last fed:",500,100)

}



