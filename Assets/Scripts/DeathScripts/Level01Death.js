// JavaScript source code
var deathSound: AudioSource;
var levelMusic: GameObject;
var camFollow: GameObject;
var thePlayer: GameObject;

function OnTriggerEnter(col: Collider)
{
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
    GlobalCoins.coinCount = 0;
    Application.LoadLevel(0);
}
