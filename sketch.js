function setup() {
  createCanvas(700, 400);
}

function draw() {

  
  for(let i = 0; i < 20; i++){
    // define color aleatorio 
    stroke(random(255), random(255), random(255));
    // defino un grosor aleatorio
    strokeWeight(random(2, 20));
    // dibujo un punto aleatorio
    point(random(width), random(height));
  }
}