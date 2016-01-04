var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
document.body.appendChild(canvas);
canvas.width = 600;
canvas.height = 400;

mainImage = new Image();
mainImage.ready = false; // default state for mainImage
mainImage.onload = checkReady; //function to check if mainImage is ready
mainImage.src = "images/pac.png";

function checkReady () {
	this.ready = true;
	playGame(); // refactor this shit code :)
}

function playGame () {
	render(); // launches the render function
}

function render () {
	context.fillStyle = "gray";
	context.fillRect(0, 0, canvas.width, canvas.height);
}