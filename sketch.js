
let sketch;

function setup() {
  sketch = createCanvas(700, 400);
  sketch.parent("p5");
}

function draw() {

  for(let i = 0; i < 20; i++){
  stroke(random(295), random(205), random(375));
  strokeWeight(random(2, 10));
  point(random(width), random(height));
  }
}
