var dog, happyDog, database, foodS, foodStock

function preload()
{
  dog=LoadImage(Dog.png)
  dogHappy=LoadImage(happyDog.png)
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  console.log(database);
  dog = createSprite(550,250,10,10);
  dog.addImage(dog)
  dog.scale=0.2

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogHappy)
  }


  drawSprites();
  

}





function readStock(data){
  foodS=data.val()
}
function writeStock(x){
  database.red('/').update({
    Food:x
  })
}