// JavaScript source code
var actualMushroom: GameObject;
var thisMushroom: GameObject;

function Update() 
{
	transform.parent = null;
	transform.Translate(Vector3.up * 2 * Time.deltaTime, Space.World);
    CloseAnim();
}

function CloseAnim() 
{
	yield WaitForSeconds(0.5);
	thisMushroom.SetActive(false);
    actualMushroom.SetActive(true);
    thisMushroom.GetComponent(MeshRenderer).enabled = false;
}