// JavaScript source code
var actualCoin: GameObject;
var thisCoin: GameObject;

function Update() 
{
	transform.parent = null;
	transform.Translate(Vector3.up * 2 * Time.deltaTime, Space.World);
    CloseAnim();
}

function CloseAnim() 
{
	yield WaitForSeconds(0.2);
	thisCoin.SetActive(false);
    actualCoin.SetActive(true);
    thisCoin.GetComponent(MeshRenderer).enabled = false;
}