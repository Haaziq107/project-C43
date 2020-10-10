var player,playerImage,backgroundImage,homePage,Start;
var gameState=1;
var start,startImage;
var block,blockImage;
var blockGroup;
var bot,botImage;

function preload(){
    playerImage=loadImage("bs images/player.png");
    coinsImage=loadImage("bs images/coins.png");
    gemsImage=loadImage("bs images/gems.png");
    homepageImage=loadImage("bs images/homepage.png");
    mapImage=loadImage("bs images/map.png");
    haaziqImage=loadImage("bs images/haaziq.png");
    startImage=loadImage("bs images/start.png");
    blockImage=loadImage("bs images/block.png")
    botImage=loadImage("bs images/bot.png")


}
function setup(){
    canvas=createCanvas(1200,800);
    edge=createEdgeSprites();

    start=createSprite(600,400);
    start.addImage(startImage);
    start.scale=0.5;

    player=createSprite(600,700);
    player.addImage(playerImage);
    player.scale=0.5;

    bot=createSprite(600,100);
    bot.velocityX=-10;
    bot.addImage(botImage);
    bot.scale=0.5;
    
    bot1=createSprite(1100,100);
    bot1.velocityX=-10;
    bot1.addImage(botImage);
    bot1.scale=0.5;

    bot2=createSprite(100,100);
    bot2.velocityX=-10;
    bot2.addImage(botImage);
    bot2.scale=0.5;

    blockGroup=new Group();

    for(var i=100; i<1200; i=i+200 ){
        block=createSprite(i,400);
        block.addImage(blockImage);
        block.scale=0.5;
        blockGroup.add(block);
    }



}

function draw(){
    background("black")

    if(gameState === 1){
        player.visible=false;
        bot.visible=false;
        bot1.visible=false;
        bot2.visible=false;
        start.visible=true;
        blockGroup.setVisibleEach(false);
    
    if(mousePressedOver(start)){
        gameState=2;
    }
    }
    if(gameState === 2){
        start.visible=false;
        player.visible=true;
        blockGroup.setVisibleEach(true);
        bot.visible=true;
        bot1.visible=true;
        bot2.visible=true;
        bot.bounceOff(edge);
        bot1.bounceOff(edge);
        bot2.bounceOff(edge);
    }
    drawSprites();
}