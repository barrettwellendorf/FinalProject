let slider;
let input;
let button;
let myString;
let sel;
let itemSelected;
let grayscaleValue;
let gameState = 1;
let arrowImage;
let img;
let brightness;
let recharge;
let on;


function preload() {
}

function setup() {
  createCanvas(600,600);

  input = createInput();
  input.position(width/2 - input.width/2, height/2-50);

  button = createButton('submit');
  button.position(input.x + input.width, height/2-50);
  button.mousePressed(buttonFunction);


  myString = '';
  grayscaleValue = 150;
  background(grayscaleValue);
}


function draw() {
  if (gameState === 1) {
    background(grayscaleValue);
    textSize(20);
    textAlign(CENTER);
    fill(255);
    text('Enter Your Name', random(width/2-3, width/2+3), height/2-70);
  } else if (gameState === 2) {
    removeElements();
    background(grayscaleValue);
    grayscaleValue--;
    if (grayscaleValue <= 0) {
      grayscaleValue = 0;
      gameState = 3;
    }
  } else if (gameState === 3) {
    fill(255);
    textSize(40);
    textAlign(CENTER);
    text('Welcome '+ myString, width/2, height/2);
    image(arrowImage, width/2, height/2+30, 50, 50);
  } else if (gameState === 4){
    background(0);

    fill(grayscaleValue);
    text('Goodbye '+myString, width/2, height/2);
    grayscaleValue--;
  }
  console.log(grayscaleValue);
}


function buttonFunction() {
  gameState = 2;
  myString = input.value();
}

function mousePressed() {
  if (gameState=== 3) {
    grayscaleValue = 255;
    gameState=4;
  }
}
