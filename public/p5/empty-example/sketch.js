document.addEventListener('DOMContentLoaded', addListeners);

let sides = 3;
let vertexPos = [];

function setup() {



	var myCanvas = createCanvas(800, 600);
	myCanvas.parent('myContainer');
	background(108);
}

function draw() {
  push();
  translate(width*0.5, height*0.5);
  polygon(0, 0, 200, sides); 
  pop();



  push();
  translate(width*0.5, height*0.5);
  strokeWeight(2);
  drawEveryLine(vertexPos);
  pop();  

  push();
  translate(width*0.5, height*0.5);
  strokeWeight(2);
  for (var i = 0; i < vertexPos.length; i++) {
  	if(i % 2 === 0){
  		fill('blue');
  	}else{
  		fill('orange');
  	}
  	ellipse(vertexPos[i].x, vertexPos[i].y, 40,40);
  }
  pop();
}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  vertexPos = [];
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertexPos.push({x: sx, y: sy});
    vertex(sx, sy);
  }
  noFill();
  strokeWeight(2);

  endShape(CLOSE);
}

function degreesPerTurn(sides){
	return (180*(sides-2)/n);
}

function addSide(){
	clear();
	background(108);
	console.log(sides);
	if(sides<20){
		sides += 1;			
	}
}

function delSide(){
	clear();
	background(108);
	console.log(sides);
	if(sides>1){
		sides -= 1;			
	}

}

//Draw a line from each vertex to each other vertex
function drawEveryLine(V){
	console.log(V);
	for(let i = 0; i < V.length; i++){
		for(let j = 0; j < V.length; j++){
			// if the vertices aren't equal, draw a line between the vertices
			if(i !== j || (V[i].x !== V[j].x && V[i].y !== V[j].y)){
				line(V[i].x, V[i].y, V[j].x, V[j].y);
			}
		}	
	}
}

function addListeners(){
	let addBtn = document.querySelector("#addBtn");
	let delBtn = document.querySelector("#delBtn");

	addBtn.addEventListener('click', addSide);
	delBtn.addEventListener('click', delSide);
}