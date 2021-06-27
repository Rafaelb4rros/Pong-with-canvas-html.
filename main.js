const canvas = document.getElementById("cnv")
const ctx = canvas.getContext('2d')

var speed = 3;
var speedX = speed;
var speedY = speed;
var bolinhaHei = 6;
var bolinhaWid = 4;
var bolinhaX = 150;
var bolinhaY = 60;

var playerX = 15;
var playerY = 60;
var playerWid = 6;
var playerHei = 25;
var playerSpeed = 6;

var placarMc = document.querySelectorAll(".placar")[1];
var placarPl = document.querySelectorAll(".placar")[0];


(function update() {
    window.onkeydown = function(e) {
        switch(e.keyCode){
            case 40:
                playerY += playerSpeed; 
                break;
            case 38:
                playerY -= playerSpeed;
        }
    }

var machineX = 279;
var machineY = bolinhaY;
var machineWid = 6;
var machineHei = 25;

    ctx.clearRect(0,0,800,600)
    ctx.beginPath();
    ctx.fillStyle = "#fff"
    ctx.fillRect(bolinhaX, bolinhaY, bolinhaHei, bolinhaWid)

    ctx.beginPath();
    ctx.fillStyle = "#fff"
    ctx.fillRect(playerX, playerY, playerWid, playerHei)

    ctx.beginPath();
    ctx.fillStyle = "#fff"
    ctx.fillRect(machineX, machineY, machineWid, machineHei)

    if(bolinhaX < machineX + machineWid &&
        bolinhaX + machineWid > machineX &&
      bolinhaY + bolinhaHei > machineY &&
        bolinhaY < machineY + machineHei)
        
      {
      speedX *= -1
    }

 
    if(bolinhaX < playerX + playerWid &&
        bolinhaX + playerWid > playerX &&
      bolinhaY + bolinhaHei > playerY &&
        bolinhaY < playerY + playerHei)
      {
        speedX *= -1
    } 


   if(bolinhaX >= 294 || bolinhaX <= 0) {
        speedX *= -1;
        if(bolinhaX <= 0) {
            placarMc.innerHTML++;
        }
        if(bolinhaX >=294) {
            placarPl.innerHTML++;
        }
    } 
    if(bolinhaY >= 146 || bolinhaY <= 0) {
        speedY *= -1;
    }

    

    bolinhaX = bolinhaX + speedX;
    bolinhaY = bolinhaY + speedY;

    if(placarPl.innerHTML == 5 || placarMc.innerHTML == 5){

        placarPl.innerHTML = 0;
        placarMc.innerHTML = 0;
    
    }
    requestAnimationFrame(update)
})();
