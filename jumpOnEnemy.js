var enemyModel : GameObject;
var bounceHeight : float = 2;
private var player : GameObject;

function Start(){
	player = GameObject.FindWithTag("playerCharacter");
}

function OnTriggerEnter(other : Collider){
	if (other.gameObject.tag == "playerCharacter"){
		Destroy(enemyModel.gameObject);
		player.rigidbody.AddForce(0, bounceHeight * 200, 0);
	}
}