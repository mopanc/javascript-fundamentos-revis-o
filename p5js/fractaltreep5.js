//fractal tree p5.js

let slider;
let angle;


function setup() {
  createCanvas(400, 400);
	slider = createSlider(0, 0, 50, 1);
	angleMode(DEGREES);
	//noLoop();

  
}

function draw() {
  background(240,250,255);
	stroke(80,50,10);
	translate(200, 400);
	branch(100);


	
}

function branch(len) {
	angle = slider.value();
	line(0,0,0, -len);
	translate(0, -len);

		if(len>8) {
			push();
				rotate(angle);
				branch(len*0.7);
			pop();
			push();
				rotate(-25);
				branch(len*0.5);
			pop();

			push();
				rotate(0);
				line(0,0,0,-len);
			pop();
			
			push();
				rotate(-angle);
				branch(len*0.7);
			pop();
			push();
				rotate(25);
				branch(len*0.5);
			pop();

  } 
	else {	

    x = random(0,3);


    if (x > 0.55) { 
      fill(2,120,2);
      noStroke();
      ellipse(0, 0, 10, 4);
		}
			else if (x > 0.55) { 
      fill(2,200,2);
      noStroke();
      ellipse(0, 0, 10, 4);

		} 
			if (x < 0.01) {
      fill(255,255,195);
      noStroke();
      ellipse(-len,0,12,12);
			}

		
		}
}