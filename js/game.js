class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                     
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 90 === 0) {
                     fruit1 = createSprite(random(100, 1000), 0, 100, 100);
                     fruit1.velocityY = 6;
                     fruit1.addImage("fruit1",fruit1_img);
                 }
                 if (frameCount % 91 === 0) {
                     fruit2 = createSprite(random(100, 1000), 0, 100, 100);
                     fruit2.velocityY = 6;
                 }
                     fruit2.addImage("fruit1",fruit2_img);
                     if (frameCount % 92 === 0) {
                     fruit3 = createSprite(random(100, 1000), 0, 100, 100);
                     fruit3.velocityY = 6;
                     fruit3.addImage("fruit1",fruit3_img);
                     }
                     if (frameCount % 93 === 0) {
                     fruit4 = createSprite(random(100, 1000), 0, 100, 100);
                     fruit4.velocityY = 6;
                     fruit4.addImage("fruit1",fruit4_img);
                     }
                     if (frameCount % 94 === 0) {
                     fruit5 = createSprite(random(100, 1000), 0, 100, 100);
                     fruit5.velocityY = 6;
                     fruit5.addImage("fruit1",fruit5_img);
                     }
                     /*var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: 
                         break;
                         case 2: fruitGroup.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruitGroup.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruitGroup.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruitGroup.addImage("fruit1", fruit5_img);
                         break;
                     }*/
                     //fruitGroup.add(fruits);
                     
                 
                 
                  if (player.index !== null) {
                     //fill code here, to destroy the objects.
                     //fruitGroup.destroy();
                  }
                  if(player1.isTouching(fruit1)){
                      player1score=player1score+1;
                    fruit1.destroy();
                    player.updateplayer1Score();
                  }
                  if(player1.isTouching(fruit2)){
                    player1score=player1score+1;
                    fruit2.destroy();
                    player.updateplayer1Score();
                  }
                  if(player1.isTouching(fruit3)){
                    player1score=player1score+1;
                    fruit3.destroy();
                    player.updateplayer1Score();
                  }
                  if(player1.isTouching(fruit4)){
                    player1score=player1score+1;
                    fruit4.destroy();
                    player.updateplayer1Score();
                  }
                  if(player1.isTouching(fruit5)){
                    player1score=player1score+1;
                    fruit5.destroy();
                    player.updateplayer1Score();
                  }

                  if(player2.isTouching(fruit1)){
                    player2score=player2score+1;
                    fruit1.destroy();
                    player.updateplayer2Score();
                  }
                  if(player2.isTouching(fruit2)){
                    player2score=player2score+1;
                    fruit2.destroy();
                    player.updateplayer2Score();
                  }
                  if(player2.isTouching(fruit3)){
                    player2score=player2score+1;
                    fruit3.destroy();
                    player.updateplayer2Score();
                  }
                  if(player2.isTouching(fruit4)){
                    player2score=player2score+1;
                    fruit4.destroy();
                    player.updateplayer2Score();
                  }
                  if(player2.isTouching(fruit5)){
                    player2score=player2score+1;
                    fruit5.destroy();
                    player.updateplayer2Score();
                  }
                

         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }
}