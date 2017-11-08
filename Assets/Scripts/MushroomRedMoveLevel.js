// JavaScript source code
var leftPoint: float;
var rightPoint: float;

function Start()
{
    leftPoint = 3;
	rightPoint = 7;
}

function Update() 
{
    transform.parent = null;
    transform.position = Vector3(leftPoint + Mathf.PingPong(Time.time * 2, rightPoint - leftPoint), transform.position.y, transform.position.z);
}