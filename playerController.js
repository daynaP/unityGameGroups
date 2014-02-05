/////////////////////////////////////////////////////////////////////////////
// HUD/GUI
var currentHealth = 3;
var maxHealth = 3;

function OnGUI(){
	GUI.Label(Rect(10,10,100,100),currentHealth.ToString());
}

/////////////////////////////////////////////////////////////////////////////
// Taking damage / enemy collision
function OnCollisionEnter(hit: Collision){
	if (hit.gameObject.tag == "enemy"){
		currentHealth = currentHealth - 1;
	}
}

/////////////////////////////////////////////////////////////////////////////
// Movement control
var speed : float = 5;
var jumpHeight : float = 6;
var characterModel : GameObject;

private var grounded : boolean = true;
private var jumpDelay : boolean = false;
private var currentlyJumping : boolean = false;

function FixedUpdate(){
	
	if (grounded){
		// x axis movement
		if (Input.GetKey(KeyCode.A)){
			transform.rotation.y = 15;
			transform.position += Vector3.left * Time.deltaTime * speed;
			if (currentlyJumping == false){
				characterModel.animation.Play("Walk");
			}
		}else if (Input.GetKey(KeyCode.D)){
			transform.rotation.y = 0;
			transform.position += Vector3.right * Time.deltaTime * speed;
			if (currentlyJumping == false){
				characterModel.animation.Play("Walk");
			}
		}
	}
	
	grounded = false;
	
	// attacking
	if (Input.GetKey(KeyCode.E)){
		Attack();
	}
	
	if (Input.anyKey == false && currentlyJumping == false){
		characterModel.animation.Play("Idle");
	}
}

// jumping
// && currentlyJumping == false
if (Input.GetKey(KeyCode.Space)){
	Jump();
}

function OnCollisionStay (){
	grounded = true;
}

function Jump(){
		characterModel.animation.Play("Take off");
		transform.position += Vector3.up * Time.deltaTime * jumpHeight;
			//currentlyJumping = false;
}

function Attack(){
	characterModel.animation.Play("Attack");
}