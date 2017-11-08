// JavaScript source code
static var livesAmount: int =3;
var internalLives: int;
var lifeTextBox: GameObject;


function Update() {
    internalLives = livesAmount;
    lifeTextBox.GetComponent(UI.Text).text = "" + internalLives;

    if (internalLives == 0)
    {
        GameOverScene();
    }
}

function GameOverScene() {
    yield WaitForSeconds(2.9);
    Application.LoadLevel(3);
}