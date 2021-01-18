var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1,car2,car3,car4
 var car11,car22,car33,car44
 var track1
var arrow=[]
var form, player, game;
function preload(){
  car11=loadImage("car1.png")
  car22=loadImage("car2.png")
  car33=loadImage("car3.png")
  car44=loadImage("car4.png")
  track1=loadImage("track.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  
}
