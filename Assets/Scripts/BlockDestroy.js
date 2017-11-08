// JavaScript source code
var Xpos: float;
var Ypos: float;
var Zpos: float;
var waiting: float;

function Start()
{
    Xpos = transform.position.x;
    Ypos = transform.position.y;
    Zpos = transform.position.z;
	waiting = 0.02;
}

function OnTriggerEnter (col: Collider) {
 if (col.gameObject.tag == "Player") {

	this.transform.position = Vector3(Xpos, Ypos + 0.1, Zpos);
	yield WaitForSeconds(waiting);
	this.transform.position = Vector3(Xpos, Ypos + 0.2, Zpos);
	yield WaitForSeconds(waiting);
	transform.GetComponent(Collider).isTrigger = false;
	this.transform.position = Vector3(Xpos, Ypos + 0.3, Zpos + 0.5);
	yield WaitForSeconds(waiting);
	this.transform.position = Vector3(Xpos, Ypos + 0.4, Zpos + 1.0);
	yield WaitForSeconds(waiting);
	this.transform.position = Vector3(Xpos, Ypos - 0.1, Zpos + 1.5);
	yield WaitForSeconds(waiting);
	this.transform.position = Vector3(Xpos, Ypos - 0.6, Zpos + 2.0);
	yield WaitForSeconds(waiting);
	this.transform.position = Vector3(Xpos, Ypos - 1.6, Zpos + 2.0);
	yield WaitForSeconds(waiting);
	this.transform.position = Vector3(Xpos, Ypos - 2.6, Zpos + 2.0);
	yield WaitForSeconds(waiting);
	this.transform.position = Vector3(Xpos, Ypos - 4.0, Zpos + 2.0);
	yield WaitForSeconds(0.25);
	transform.GetComponent(Collider).isTrigger = true;
	Destroy(gameObject);
 }	
}
