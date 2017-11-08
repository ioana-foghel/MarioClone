// JavaScript source code
var PipeEntry: GameObject;
var StoodOn: int;

var mainCam: GameObject;
var secondCam: GameObject;
var mainPlayer: GameObject;

var fadeScreen: GameObject;
var pipeSound: AudioSource;

function OnTriggerEnter (col: Collider) {
	StoodOn = 1;
}

function OnTriggerExit (col: Collider) {
	StoodOn = 0;
}

function Update() {
	if (Input.GetButtonDown("GoDown")) {
		if (StoodOn == 1) {
			transform.position = Vector3(0, -1000, 0);
			WaitingForPipe();
		}
	}
}

function WaitingForPipe() {
	pipeSound.Play();
	fadeScreen.SetActive(true);
	PipeEntry.GetComponent("Animator").enabled = true;
	yield WaitForSeconds(1.5);
	fadeScreen.GetComponent("Animator").enabled = true;
	yield WaitForSeconds(0.495);
	fadeScreen.GetComponent("Animator").enabled = false;
	PipeEntry.GetComponent("Animator").enabled = false;
	secondCam.SetActive(true);
	mainCam.SetActive(false);
	mainPlayer.transform.position = Vector3(11.78, -18.5, 0);
	fadeScreen.GetComponent("Animator").enabled = true;
	yield WaitForSeconds(0.495);
	fadeScreen.GetComponent("Animator").enabled = false;
	fadeScreen.SetActive(false);
}