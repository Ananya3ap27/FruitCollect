var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var fruit1,fruit2,fruit3,fruit4,fruit5,fruitCount  ;
var player1score=0,player2score=0;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;


function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  fruit1=createSprite(0,0,10,10);
  fruit2=createSprite(0,0,10,10);
  fruit3=createSprite(0,0,10,10);
  fruit4=createSprite(0,0,10,10);
  fruit5=createSprite(0,0,10,10);
  
}

function draw() {
  background(back_img);

  player1score.on("value", function (data) {
    player1score = data.val();
})
player2score.on("value", function (data) {
  player2score = data.val();
})
 
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
   stroke ("white");
   text ("player 1 : "+ player1score,100,100);
   text ("player 2 : "+ player2score,300,100);
}