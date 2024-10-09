
document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start');
    const canvasDiv = document.getElementById('canvas');
    const retryButton = document.getElementById('retry');

    // setting click to reveal game canvas
    startButton.addEventListener('click', function() {
        //reveals 'canvas' div, including new button
        canvasDiv.style.display = 'block'; 
        //hid the button
        startButton.style.display = 'none'; 
        retryButton.style.display = 'inline-block';
    });

    retryButton.addEventListener('click', function (){
        resetGame();
    });
});

function resetGame(){
    x=0;
    y=0;
    gameOver= false;
    gameOverText="";
}

let bg;
//variable the alien image
let alien;
let x = 0;
let y = 0; 
//obstacle ufo variables
let ufo; 
let ufoPos = [];

//game over
let gameFont;
let gameOver = false;
let gameOverText = "";
let gameOverBG;

//the button reveal
let startButton;
let canvasDiv;

function preload (){
    alien = loadImage("images/akien.png");
    bg = loadImage("images/spacebg.jpg");
    ufo = loadImage("images/ufo.png");
    gameFont = loadFont('fonts/Explorien.otf')
}

function setup (){
    var canvas = createCanvas(400,400);
    canvas.parent('canvas');
    //resized alien image but kept ratio to fit better in canvas
    alien.resize(50,0);
    //placed and resized ufo obstacles
    ufo.resize (100,0);
    ufoPos.push({x:0, y:150});
    ufoPos.push({x:300, y:300});
    ufoPos.push({x:220, y:10});
    ufoPos.push({x:120, y:250});
}

function draw (){
    if (gameOver === false) {
        background(bg);
        image(alien,x,y); 
        drawUFOs();
        checkCollide();
    } else { 
        background (gameOverBG);
        textFont(gameFont);
        textSize(22);
        textAlign(CENTER,CENTER);
        fill("white");
        text(gameOverText, width / 2, height / 2);
    }
}

function drawUFOs (){
    image(ufo, ufoPos[0].x, ufoPos[0].y);
    image(ufo, ufoPos[1].x, ufoPos[1].y);
    image(ufo, ufoPos[2].x, ufoPos[2].y);
    image(ufo, ufoPos[3].x, ufoPos[3].y);
    }

//move your pet alien
function keyPressed (){
    if(gameOver === false) {
        if (keyCode===RIGHT_ARROW){
            x+=10;
        } else if (keyCode===LEFT_ARROW){
            x-=10;
        } else if (keyCode===UP_ARROW){
            y-=10;
        } else if (keyCode===DOWN_ARROW){
        y+=10;
        }
    }
    
}

//check collision/enter/game over
function checkCollide (){
    if (x < ufoPos[0].x + 50 && x + 50 > ufoPos[0].x && y< ufoPos[0].y +50 && y +50 > ufoPos[0].y){
        gameOver=true;
        print ("ufo 1");
        print (x,y);
        gameOverText = "That's Private Property!";
        gameOverBG = (0);
    } else if (x < ufoPos[1].x + 50 && x + 50 > ufoPos[1].x && y < ufoPos[1].y +50 && y +50 > ufoPos[1].y) {
        gameOver=true;
        print ("ufo 2");
        print (x,y);
        gameOverText = "That's Private Property!";
        gameOverBG = (0);
    } else if (x < ufoPos[2].x + 50 && x + 50 > ufoPos[2].x && y < ufoPos[2].y +50 && y +50 > ufoPos[2].y) {
        gameOver=true;
        print ("ufo 3");
        print (x,y);
        gameOverText = "That's Private Property!";
        gameOverBG = (0);
    } else if (x < ufoPos[3].x + 50 && x + 50 > ufoPos[3].x && y < ufoPos[3].y +50 && y +50 > ufoPos[3].y) {
        gameOver=true;
        print ("ufo 4, HOME!");
        print (x,y);
        gameOverText = "You Made It!!";
        gameOverBG = ("#14203a");
    }
}

