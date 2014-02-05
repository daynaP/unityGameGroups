var horizontal : boolean;
var vertical : boolean;
var distanceToTravel : float;
var platformSpeed : float;
var platformObject : GameObject;

private var startingPositionX = transform.position.x;
private var startingPositionY = transform.position.y;

function Start(){
	// Both are checked
	if (horizontal && vertical || !horizontal && !vertical){
		horizontal = true;
		vertical = false;
	}
}

function Update(){
	Debug.Log(startingPositionY);
	
	if (horizontal){
		platformObject.transform.Translate(Time.deltaTime * platformSpeed, 0, 0);
	}else{
		platformObject.transform.Translate(0, Time.deltaTime * platformSpeed, 0);
	}
}