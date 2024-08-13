let img1, img2;
let palavra = "Hello, World!";

function preload() {
  img1 = loadImage('earth_sm.jpg');
  img2 = loadImage('moon_sm.jpg');
}

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  // Map the mouse X position to a value between 0 and the length of the palavra
  let index = map(mouseX, 0, width, 0, palavra.length);
  
  // Calculate the color based on the index value
  let r = map(index, 0, palavra.length, 0, 255);
  let g = map(index, 0, palavra.length, 255, 0);
  let b = map(index, 0, palavra.length, 0, 255);
  background(r, g, b);
  
  // Display the images with the fade effect
  let opacity1 = map(index, 0, palavra.length, 255, 0);
  let opacity2 = map(index, 0, palavra.length, 0, 255);
  tint(255, opacity1);
  image(img1, 0, 0, width, height);
  tint(255, opacity2);
  image(img2, 0, 0, width, height);
}