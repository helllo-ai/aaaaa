class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gamestate');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }


  update(state){
    database.ref('/').update({
      gamestate: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('Playercount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
      car1=createSprite(100,200)
      car2=createSprite(300,200)
      car3=createSprite(500,200)
      car4=createSprite(700,200)
      car1.addImage("carimage",car11)
      car2.addImage("carimage1",car22)
      car3.addImage("carimage2",car33)
      car4.addImage("carimage3",car44)
      arrow=[car1,car2,car3,car4]
      
    }
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();
    player.readRank();
   image (track1,0 ,-displayHeight*4 , displayWidth,displayHeight*4)
    if(allPlayers !== undefined){
      var display_position = 130;
      var index=0
      var x=0
      var y
      for(var plr in allPlayers){
       /* if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");

        display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        */
index=index+1
x=x+200
y= displayHeight-allPlayers[plr].distance
arrow[index-1].x=x
arrow[index-1].y=y
if(index===player.index)
{
  arrow[index-1].shapeColor="red"
  camera .position.x=displayWidth/2
  camera.position.y=arrow[index-1].y
  fill ("yellow")
  ellipse(x,y,60)
}
}
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    if(player.distance>3000){
     // gameState=2
     // game.update(2)
      player.rank+=1;
      Player.updateRank(player.rank)
      gameState=2
      game.update(2)

    }
    drawSprites()
  }
}
