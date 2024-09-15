function setup() {
    createCanvas(600, 600); //area de trabalho
    background ("blue");
  }
  
  function draw() {
    
    stroke  ('white') //borda
    fill("red");
    //console.log(mouseIsPressed);
    
    if(mouseIsPressed){
      rect(mouseX,mouseY,20,30)
    }
  }
      