function preload(){

}

function setup(){
    //create canvas
canvas=createCanvas(400,400)
canvas.position(500,200)
//create live webcam view
tintcolor=""
}

function draw(){
//image(var,x,y,w,h)
image(video,0,0,400,400)

tint(tintcolor)
}

function take_snapshot(){
    save("ethan.png")
}