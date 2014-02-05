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
var jumpSpeed : float = 1.5;
var characterModel : GameObject;

private var distanceToGround : float;
private var jumpDelay : boolean = false;
private var currentlyJumping : boolean = false;

function Start(){
	distanceToGround = collider.bounds.extents.y;
}

function Update(){
	
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
	
	// attacking
	if (Input.GetKey(KeyCode.E)){
		Attack();
	}
	
	if (Input.anyKey == false && currentlyJumping == false){
		characterModel.animation.Play("Idle");
	}
}

function FixedUpdate(){
	// jumping
	// && currentlyJumping == false
	if (Input.GetKey(KeyCode.Space) && isGrounded()){
		Jump();
	}
}

function Jump(){
		characterModel.animation.Play("Jump");
		rigidbody.AddForce(0, jumpHeight * 100, 0);
		//rigidbody.velocity.y = jumpHeight * jumpSpeed;
		//transform.position += Vector3.up * Time.deltaTime * jumpHeight;
}

function Attack(){
	characterModel.animation.Play("Attack");
}

function isGrounded() : boolean{
	return Physics.Raycast(transform.position, -Vector3.up, distanceToGround + 0.1);
}