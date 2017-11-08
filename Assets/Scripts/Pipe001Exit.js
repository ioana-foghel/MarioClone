// JavaScript source code
var pipeSound: AudioSource;
var fadeScreen : GameObject;
var mainCam : GameObject;
var secondCam : GameObject;
var pipeEntry : GameObject;
var mainPlayer : GameObject;

function OnTriggerEnter (col : Collider) {
	pipeSound.Play();
	fadeScreen.SetActive(true);
	fadeScreen.GetComponent("Animator").enabled=true;
	yield WaitForSeconds(0.495);
	fadeScreen.GetComponent("Animator").enabled=false;
	mainCam.SetActive(true);
	secondCam.SetActive(false);
	mainPlayer.transform.position = Vector3(26, 1.5, 0.5);
	pipeEntry.GetComponent("Animator").enabled=true;
	fadeScreen.GetComponent("Animator").enabled=true;
	yield WaitForSeconds(0.495);
	fadeScreen.GetComponent("Animator").enabled=false;
	yield WaitForSeconds(1);
	pipeEntry.GetComponent("Animator").enabled=false;
	fadeScreen.SetActive(false);
}
