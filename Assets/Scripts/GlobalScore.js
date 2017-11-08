// JavaScript source code
static var currentScore: int;
var internalScore: int;
var scoreDisplay: GameObject;

function Update() {
    internalScore = currentScore;
    scoreDisplay.GetComponent(UI.Text).text = "Score: " + internalScore;
}