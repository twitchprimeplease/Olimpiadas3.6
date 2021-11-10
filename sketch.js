class Enemy{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.largo=75;
    this.ancho=45;
  }
  createEnemy(){
    fill(191, 19, 4);
    rect(this.x,this.y,this.largo,this.ancho);
    noFill();

  }
}

class Hero{
  constructor(x,y){
    this.x=x;
    this.y=y;

  }

  createHero(){
    fill(69, 89, 54);
    circle(this.x,this.y,75);
    noFill();
  }
  moving(mX){
    this.x=mX;
  }

}

function setup() {
  createCanvas(700, 500);
  cait = new Hero (100,450);
}

function draw() {
  background(220);
  cait.createHero();
}

function mouseMoved (){
  cait.moving (mouseX);

}
