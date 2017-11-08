// JavaScript source code
var lifeSound: AudioSource;
var growSound: AudioSource;
var thePlayer: GameObject;


function OnTriggerEnter(col: Collider) {
    if (col.gameObject.tag == "Player") {
        this.transform.position = Vector3(0, -1000, 0);
        lifeSound.Play();
        GlobalLives.livesAmount += 1;
        growSound.Play();
        thePlayer.transform.localScale += new Vector3(0.3, 0.3, 0.3);
    }
}