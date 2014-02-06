﻿var horizontal : boolean;
var vertical : boolean;
var distanceToTravel : float;
var platformSpeed : float;
var platformObject : GameObject;

private var reversing : boolean;
private var startingPosition : Vector3;
private var currentPosition : Vector3;

function Start(){
	startingPosition = platformObject.transform.position;
	reversing = false;

	// Both are checked
	if (horizontal && vertical || !horizontal && !vertical){
		horizontal = true;
		vertical = false;
	}
}

function Update(){
	currentPosition = platformObject.transform.position;
	
	if (horizontal){
		/* If it's already at its destination */
		if (!reversing){
			if (startingPosition.x + distanceToTravel <= currentPosition.x){
				platformSpeed = platformSpeed * -1;
				reversing = true;
			}
		}else{
			if (startingPosition.x >= currentPosition.x){
				platformSpeed = platformSpeed * -1;
				reversing = false;
			}
		}
			platformObject.transform.Translate(Time.deltaTime * platformSpeed, 0, 0);
	}else{
		/* If it's already at its destination */
		if (!reversing){
			if (startingPosition.y + distanceToTravel <= currentPosition.y){
				platformSpeed = platformSpeed * -1;
				reversing = true;
			}
		}else{
			if (startingPosition.y >= currentPosition.y){
				platformSpeed = platformSpeed * -1;
				reversing = false;
			}
		}
			platformObject.transform.Translate(0, Time.deltaTime * platformSpeed, 0);
	}
}