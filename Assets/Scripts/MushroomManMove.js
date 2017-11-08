// JavaScript source code
var leftPoint: float;
var rightPoint: float;

function Start()
{
    leftPoint = 13;
	rightPoint = 25;
}

function Update() 
{
	transform.position = Vector3(leftPoint + Mathf.PingPong(Time.time * 2, rightPoint - leftPoint), transform.position.y, transform.position.z);
}