// JavaScript source code
var coinAudio: AudioSource;

function OnTriggerEnter(col: Collider) {
	transform.position = Vector3(0, -1000, 0);
	coinAudio.Play();
    GlobalCoins.coinCount += 1;
    GlobalScore.currentScore += 10;
}