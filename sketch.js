
var ball,ballImg


function preload(){
    ballImg=loadImage("pics/gun1.png")
}

function setup(){
createCanvas(400,400)

ball=createSprite(200,200,20,20)
ball.addImage(ballImg)
ball.scale=0.1
}


function draw(){
    background(0)

    drawSprites()
}