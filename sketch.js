// images: background(highschool, classes 6-7, house, practice areas)
// self-drawn: characters (boys+girls), life bars (stats)
var database,form, gameState="start", banner_img,player, classroomImg;

function preload()
{
  banner_img = loadImage("images/game_banner_placeholder.png");
  classroomImg = loadImage("images/classroom_base.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

  database = firebase.database();
  
  form = new Form();
  player = new Player();
  game = new Game();
  
  game.getState();

 
}


function draw() {

  background(0);
  
  drawSprites();
  form.display();
 
  if(gameState==="play"){
      game.play()
  }
}



