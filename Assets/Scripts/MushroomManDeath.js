// JavaScript source code
var mushroomMan: GameObject;

function OnTriggerEnter (col: Collider) 
{
	this.GetComponent("BoxCollider").enabled = false;
	mushroomMan.GetComponent("MushroomManMove").enabled = false;
	mushroomMan.transform.localScale -= new Vector3(0, 0.8, 0);
    mushroomMan.transform.localPosition -= new Vector3(0, 0.4, 0);
    GlobalScore.currentScore += 100;
	yield WaitForSeconds(0.5);
	mushroomMan.transform.position = Vector3(0, -1000, 0);
}