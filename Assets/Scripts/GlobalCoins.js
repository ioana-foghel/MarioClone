// JavaScript source code
import UnityEngine.UI;

var coinDisplay: GameObject;
static var coinCount: int;
var internalCoin: int;

function Update() {
	internalCoin =  coinCount;
	coinDisplay.GetComponent(Text).text = "Coins: " + coinCount;
}
