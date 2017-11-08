// JavaScript source code
var resetPoint: float;
var currentPoint: float;

function Update() {
    resetPoint = 6.5;
    currentPoint = transform.position.y;
    if (currentPoint >= resetPoint) {
        transform.position.y = -3.5; 
    }
    transform.Translate(Vector3.up * Time.deltaTime);
}
