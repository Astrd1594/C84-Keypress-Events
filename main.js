window.addEventListener("keydown", keyDown);
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var imgTag;
var img;
var imgWidth = 300;
var imgHeight = 100;
var imgX = 100;
var imgY = 100;
console.log(img);
function add(){
	imgTag = new Image();
	imgTag.onload = uploadImg;
	imgTag.src = img;
}
function uploadImg(){
	ctx.drawImage(imgTag, imgX, imgY, imgWidth, imgHeight);
}
function keyDown(e){
	var keyPressed = e.keyCode;
	if(keyPressed >= 65 && keyPressed <= 90){
		alphabet();
		console.log("alphabet");
		document.getElementById("div").innerHTML = "You pressed an alphabet key";

	}
	if(keyPressed >= 37 && keyPressed <= 40){
		arrow();
		console.log("arrow");
		document.getElementById("div").innerHTML = "You pressed an arrow key";

	}
	if(keyPressed >= 48 && keyPressed <= 57){
		number();
		console.log("number");
		document.getElementById("div").innerHTML = "You pressed a number key";

	}
	if(keyPressed >= 17 && keyPressed <= 27){
		special();
		console.log("special");
		document.getElementById("div").innerHTML = "You pressed a special key";
	}
	if(keyPressed >= 0 && keyPressed <= 31){
		other();
		console.log("other");
		document.getElementById("div").innerHTML = "You pressed a symbol or another key";

	}
}
function alphabet(){
	imgTag = "Alpkey.png";
	add();
}
function number(){
	imgTag = "numkey.png";
	add();
}
function arrow(){
	imgTag = "Arrkey.png";
	add();
}
function special(){
	imgTag = "spkey.png";
	add();
}
function other(){
	imgTag = "otherkey.png";
	add();
}