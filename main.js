var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var larguraGrogu = 100;
var alturaGrogu  = 100;

var fundoCanvas = "local.webp";
var imagemGrogu = "grogu.png";

var groguX = 10;
var groguY = 10;

function add(){
    fundoCanvasTag = new Image();
    fundoCanvasTag.onload = uploadFundo; //isso aqui é uma função
    fundoCanvasTag.src=fundoCanvas;

    imagemGroguTag = new Image();
    imagemGroguTag.onload = uploadGrogu;
    imagemGroguTag.src=imagemGrogu;
}

function uploadFundo(){
    ctx.drawImage(fundoCanvasTag, 0, 0, canvas.width, canvas.height);
}

function uploadGrogu(){
    ctx.drawImage(imagemGroguTag, groguX, groguY, larguraGrogu, alturaGrogu);
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e){
    keyPressed = e.keyCode;
    if(keyPressed=="38"){
        up();
    }
    if(keyPressed=="40"){
        down();
    }
    if(keyPressed=="37"){
        left();
    }
    if(keyPressed=="39"){
        right();
    }
}

function up(){
    if(groguY>=0){
        groguY=groguY-10;
        uploadFundo();
        uploadGrogu();
    }
}

function down(){
    if(groguY<=500){
        groguY=groguY+10;
        uploadFundo();
        uploadGrogu();
    }
}

function left(){
    if(groguX>=0){
        groguX=groguX-10;
        uploadFundo();
        uploadGrogu();
    }
}

function right(){
    if(groguX<=700){
        groguX=groguX+10;
        uploadFundo();
        uploadGrogu();
    }
}