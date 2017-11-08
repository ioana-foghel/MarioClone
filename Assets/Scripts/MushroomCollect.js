// JavaScript source code
var growSound: AudioSource;
//var thePlayer: GameObject;

function OnTriggerEnter(col: Collider) {
    if (col.gameObject.tag == "Player") {
        this.transform.position = Vector3(0, -1000, 0);
        GlobalScore.currentScore += 200;
        growSound.Play();
        //thePlayer.transform.localScale += new Vector3(0.3, 0.3, 0.3);
    }
}