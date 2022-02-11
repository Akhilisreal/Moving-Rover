canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

images_array = ["image 1.jpeg", "image 2.jpeg", "Image 3.jpeg"];

random_number = Math.floor(Math.random() * 3);
console.log(random_number);

background_image = images_array[random_number];

rover_image = "rover.png";
rover_width = 100;
rover_height = 125;

rover_x = 400;
rover_y = 300;

function add() {
    background_image_tag = new Image();
    background_image_tag.onload = uploadbackground;
    background_image_tag.src = background_image;
    rover_image_tag = new Image();
    rover_image_tag.onload = uploadrover;
    rover_image_tag.src = rover_image;
}

function uploadbackground() {
    ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_image_tag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_Keydown);

function my_Keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    if (keypressed == "87") {
        up();
        console.log("up");
    }

    if (keypressed == "83") {
        down();
        console.log("down");
    }

    if (keypressed == "65") {
        left();
        console.log("left");
    }

    if (keypressed == "68") {
        right();
        console.log("right");
    }
}

function up() {
    if (rover_y >= 50) {
        rover_y = rover_y - 10;
        console.log("When w key is pressed, x =" + rover_x + "y =" + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("When s key is pressed, x =" + rover_x + "y =" + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function left() {
    if (rover_x >= 50) {
        rover_x = rover_x - 10;
        console.log("When a key is pressed, x =" + rover_x + "y =" + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When a key is pressed, x =" + rover_x + "y =" + rover_y);
        uploadbackground();
        uploadrover();
    }
}