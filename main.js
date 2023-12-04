
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	
	gameover_sound=loadSound("gameover.wav");
	coin_sound=loadSound("coin.wav");
	kick_sound=loadSound("kick.wav");
    mariodie_sound=loadSound("mariodie.wav");
	jump_sound=loadSound("jump.wav");
	
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas")
	instializeInSetup(mario);

	video=createCapture(VIDEO);
	video.size(600,300);
	video.parent("game_console")

	poseNet=ml5.poseNet(video,modalLoaded);
	poseNet.on("pose",gotPoses);
}
function modalLoaded(){
	console.log("Modal Loaded!")
}
function gotPoses(results){
	if(results.length > 0){
		// console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}

function draw() {
	game()
}






