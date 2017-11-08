// JavaScript source code
function Start() {
    yield WaitForSeconds(4);
    GlobalLives.livesAmount += 3;
    Application.LoadLevel(2);
}
