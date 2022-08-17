canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverwidth=100;
roverheight=100;
roverx=10;
rovery=10;
nasa=["1.jfif","2.jfif","3.jpg","4.jpg","5.jpg"];
randomnumber=Math.floor(Math.random()*5);
backgroundimg=nasa[randomnumber];
roverimg="rover.png";

function add()
{
   bg=new Image();
   bg.onload=uploadbackground;
   bg.src=backgroundimg;

   rover=new Image();
   rover.onload=uploadrover;
   rover.src=roverimg;
}

function uploadbackground()
{
  ctx.drawImage(bg,0,0,canvas.width,canvas.height);
  
}

function uploadrover()
{
 ctx.drawImage(rover,roverx,rovery,roverwidth,roverheight);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
keypressed=e.keyCode;
console.log(keypressed);

if(keypressed=='37')
{
left();
console.log("left");
}

if(keypressed=='38')
{
up();
console.log("up");
}

if(keypressed=='39')
{
right();
console.log("right");
}

if(keypressed=='40')
{
down();
console.log("down");
}
}

function up()
{
if(rovery>=0)
{
rovery=rovery-10;
console.log("when up arrow is pressed roverx="+roverx,"rovery="+rovery);
uploadbackground();
uploadrover();
}
}

function down()
{
if(rovery<=600)
{
rovery=rovery+10;
console.log("when down arrow is pressed roverx="+roverx,"rovery="+rovery);
uploadbackground();
uploadrover();
}
}

function left()
{
if(roverx>=0)
{
roverx=roverx-10;
console.log("when left arrow is pressed roverx="+roverx,"rovery="+rovery);
uploadbackground();
uploadrover();
}
}

function right()
{
if(roverx<=1000)
{
roverx=roverx+10;
console.log("when right arrow is pressed roverx="+roverx,"rovery="+rovery);
uploadbackground();
uploadrover();
}
}