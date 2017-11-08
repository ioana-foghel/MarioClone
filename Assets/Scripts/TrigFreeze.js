// JavaScript source code
var mainCam: GameObject;
var backwall: GameObject;

function OnTriggerEnter() {
    mainCam.GetComponent("FollowCamera").enabled = false;
    backwall.SetActive(true);
}