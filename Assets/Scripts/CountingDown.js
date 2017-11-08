// JavaScript source code
import UnityEngine.UI;

var totalTime: int;
var timeDisplay: GameObject;
var calculatingTime: int;
var deathSound: AudioSource;
var levelMusic: GameObject;
var camFollow: GameObject;
var thePlayer: GameObject;
var keepZero: int;
static var timeLeft: int;

function Start() {
    totalTime = 301;
}

function Update() {
    timeLeft = totalTime;
    if (keepZero == 0) {
        timeDisplay.GetComponent(UI.Text).text = "" + totalTime;
    }
    if (calculatingTime == 0) {
        DeductTime();
    }
    if (totalTime == 0) {
        TimeUp();
    }
}

function DeductTime() {
    calculatingTime = 1;
    totalTime -= 1;
    yield WaitForSeconds(1);
    calculatingTime = 0;
}

function TimeUp() {
    totalTime -= 1;
    keepZero = 1;
    timeDisplay.GetComponent(UI.Text).text = "0";
    GlobalLives.livesAmount -= 1;
    levelMusic.SetActive(false);
    deathSound.Play();
    camFollow.GetComponent("FollowCamera").enabled = false;
    thePlayer.GetComponent("ThirdPersonUserControl").enabled = false;
    thePlayer.GetComponent("ThirdPersonCharacter").enabled = false;
    //thePlayer.transform.localScale -= new Vector3(0.0, 1.7, 0.0);
    thePlayer.GetComponent("CapsuleCollider").enabled = false;
    yield WaitForSeconds(3);
    GlobalScore.currentScore = 0;
    Application.LoadLevel(4);
}