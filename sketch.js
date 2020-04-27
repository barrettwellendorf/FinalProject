let snakeButton;
let wolfButton;
let clownButton;
let gameState = 0;
let img;
let brightness;
let recharge;
let on;
let s = 'Which of the following do you fear the most?';


function preload() {
  if (gameState === 1) {
    img = loadImage('darkforestSnake.jpg');
  } else if (gameState === 2) {
    img = loadImage('darkforestClown.jpg');
  } else if (gameState === 3) {
    img = loadImage('darkforestWolf.jpg');
  }
}

if (gameState === 0) {
  function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background('red');

    textSize(30);
    fill(0);
    text(s, window.innerWidth/2 - 130, window.innerHeight/2 - 300, 350, 500);

    snakeButton = createButton('Snakes');
    snakeButton.position(window.innerWidth/2 - 200, window.innerHeight/2);
    snakeButton.mousePressed(snakeFunction);

    clownButton = createButton('Clowns');
    clownButton.position(window.innerWidth/2, window.innerHeight/2);
    clownButton.mousePressed(clownFunction);

    wolfButton = createButton('Wolves');
    wolfButton.position(window.innerWidth/2 + 200, window.innerHeight/2);
    wolfButton.mousePressed(wolfFunction);

    function snakeFunction() {
      gameState = 1;
    }

    function clownFunction() {
      gameState = 2;
    }

    function wolfFunction() {
      gameState = 3;
    }
    console.log(gameState);

  }
}
else {
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  pixelDensity(1);
  img.loadPixels();
  loadPixels();
  on = true;
  brightness = 70;
  recharge = 0;
  }

  function mousePressed(){
    on = !on
    brightness = recharge;
  }

  function draw() {
    if (on === true){
      brightness = brightness - .5;
      if (brightness <= 1) {
        brightness = 1;
      }
    }
    else {
      brightness = 0;
      recharge = recharge + 2.5;
      if (recharge >= 100){
        recharge = 100;
      }
    }

    for (let x = 0; x < img.width; x++) {
      for (let y = 0; y < img.height; y++) {
        let loc = (x + y * img.width) * 4;
        let r, g, b;
        r = img.pixels[loc];
        let maxdist = brightness;
        let d = dist(x, y, mouseX, mouseY);
        let adjustbrightness = (255 * (maxdist - d)) / maxdist;
        r += adjustbrightness;
        r = constrain(r, 0, 255);
        let pixloc = (y * width + x) * 4;
        pixels[pixloc] = r;
        pixels[pixloc + 1] = r;
        pixels[pixloc + 2] = r;
        pixels[pixloc + 3] = 255;
      }
    }
    updatePixels();
    console.log(recharge);
  }
}

function snakeFunction() {
  gameState = 1;
}

function clownFunction() {
  gameState = 2;
}

function wolfFunction() {
  gameState = 3;
}
