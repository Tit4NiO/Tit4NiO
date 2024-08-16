let cor;
let circuloX; // horizontal
let circuloY; // vertical

function setup() {
  createCanvas(800, 500);
  background(" rgba(0,1,7,0.95)");
  cor = color(random(0, 255), random(0, 255), random(0, 255));

  circuloX = [0, 0, 0];
  circuloY = [random(height), random(height), random(height)];
}

function draw() {
  fill(cor);

  for (let contador in circuloX) {
    circle(circuloX[contador], circuloY[contador], 80);
    circuloX[contador] += random(0, 10);
    circuloY[contador] += random(-5, 5);

    if (circuloX[contador] >= width) {
      circuloX[contador] = 0;
      circuloY[contador] = random(height);
    }
  }

  if (mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 10000));
  }
}
