// JavaScript source code
var qBlock: GameObject;
var deadBlock: GameObject;
var mushroom: GameObject;

function OnTriggerEnter (col: Collider) 
{
	qBlock.SetActive(false);
	deadBlock.SetActive(true);
	yield WaitForSeconds(0.2);
	mushroom.SetActive(true);
}
