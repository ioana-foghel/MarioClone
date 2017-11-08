// JavaScript source code
var fadeScreen: GameObject;
var thePlayer: GameObject;
var timeScore: int;
var timeLeftInt: int;

function OnTriggerEnter() {
    fadeScreen.SetActive(true);
    fadeScreen.GetComponent("Animator").enabled = true;
    timeLeftInt = CountingDown.timeLeft;
    timeScore = timeLeftInt * 10;
    GlobalScore.currentScore += timeScore;
    yield WaitForSeconds(0.495);
    fadeScreen.GetComponent("Animator").enabled = false;
    Application.LoadLevel(4);
}