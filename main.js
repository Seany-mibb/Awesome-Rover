canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_x = 10;
rover_y = 10;

nasa_Array = ["nasa1.jpg", "nasa2.jpg", "nasa3.jpg", "nasa4.jpg", "nasa5.jpg"];

var k = Math.floor(Math.random()*5);

background_image = nasa_Array[k];
rover_image = "rover.png";

rover_width = 100;
rover_height = 90;

function add()
{
    bg_imgTag = new Image();
    bg_imgTag.onload = uploadBackground;
    bg_imgTag.src = background_image;

    roverimgTag = new Image();
    roverimgTag.onload = uploadrover;
    roverimgTag.src = rover_image;
}

function uploadBackground()
{
    ctx.drawImage(bg_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover()
{
    ctx.drawImage(roverimgTag, rover_x, rover_y, rover_width, rover_height);
}

function left()
{
    if(rover_x >= 0)
    {
        rover_x -= 5;
        console.log("x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function up()
{
    if(rover_y >= 0)
    {
        rover_y -= 5;
        console.log("x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right()
{
    if(rover_x <= 700)
    {
        rover_x += 5;
        console.log("x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function down()
{
    if(rover_y <= 500)
    {
        rover_y += 5;
        console.log("x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

window.addEventListener("keydown", my_keyDown);

function my_keyDown(e)
{
    keyPressed= e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '37')
    {
        left();
        console.log("left")
    }

    if(keyPressed == '38')
    {
        up();
        console.log("up")
    }

    if(keyPressed == '39')
    {
        right();
        console.log("right")
    }

    if(keyPressed == '40')
    {
        down();
        console.log("down")
    }
}