#pragma strict


var handPositionX : int = 0;
var handPositionY : int = 0;
var handPositionZ : int = 0;
var Distance : float; 

var array = new Array (
	Vector3(0, 0, 0), 
	Vector3(0, 0, 0),
	Vector3(0, 0, 0),
	Vector3(0, 0, 0),
	Vector3(0, 0, 0),
	Vector3(0, 0, 0),
	Vector3(0, 0, 0),
	Vector3(0, 0, 0),
	Vector3(0, 0, 0),
	Vector3(0, 0, 0),
	Vector3(0, 0, 0),
	Vector3(0, 0, 0),
	Vector3(0, 0, 0),
	Vector3(0, 0, 0),
	Vector3(0, 0, 0),
	Vector3(0, 0, 0),
	Vector3(0, 0, 0),
	Vector3(0, 0, 0),
	Vector3(0, 0, 0),
	Vector3(0, 0, 0),
	Vector3(0, 0, 0),
	Vector3(0, 0, 0)
	);

var strArray = new Array();


function Start () {
}

function Update () {

		
	var leftHandUpperArm = transform.Find("upperarm_l");
	var leftHandLowerArm1 = leftHandUpperArm.Find("lowerarm1_l");
	var leftHandLowerArm2 = leftHandLowerArm1.Find("lowerarm2_l");
	var leftHandLowerArm3 = leftHandLowerArm2.Find("lowerarm3_l");
	var handL = leftHandLowerArm3.Find("hand_l");
	var index1 = handL.Find("index1_l");
	var middle1 = handL.Find("middle1_l");
	var pinky1 = handL.Find("pinky1_l");
	var ring1 = handL.Find("ring1_l");
	var thumb1 = handL.Find("thumb1_l");
	
	
	var index2 = index1.Find("index2_l");
	var middle2 = middle1.Find("middle2_l");
	var pinky2 = pinky1.Find("pinky2_l");
	var ring2 = ring1.Find("ring2_l");
	var thumb2 = thumb1.Find("thumb2_l");
	
	
	var index3 = index2.Find("index3_l");
	var middle3 = middle2.Find("middle3_l");
	var pinky3 = pinky2.Find("pinky3_l");
	var ring3 = ring2.Find("ring3_l");
	var thumb3 = thumb2.Find("thumb3_l");
	
	//leftHandLowerArm1.Translate(array[1], Space.Self);
	//leftHandLowerArm2.Translate(array[2], Space.Self);
	//leftHandLowerArm3.Translate(array[3], Space.Self);
	handL.Translate(array[0], Space.World);
	index1.Translate(array[6], Space.World);
	middle1.Translate(array[10], Space.World);
	pinky1.Translate(array[18], Space.World);
	ring1.Translate(array[14], Space.World);
	thumb1.Translate(array[2], Space.World);
	
	index2.Translate(array[7], Space.World);
	middle2.Translate(array[11], Space.World);
	pinky2.Translate(array[19], Space.World);
	ring2.Translate(array[15], Space.World);
	thumb2.Translate(array[3], Space.World);
	
	index3.Translate(array[8], Space.World);
	middle3.Translate(array[12], Space.World);
	pinky3.Translate(array[20], Space.World);
	ring3.Translate(array[16], Space.World);
	thumb3.Translate(array[4], Space.World);
	
	
	array[1] = Vector3(0, 0, 0);
	array[2] = Vector3(0, 0, 0);
	array[3] = Vector3(0, 0, 0);
	array[4] = Vector3(0, 0, 0);
	array[5] = Vector3(0, 0, 0);
	array[6] = Vector3(0, 0, 0);
	array[7] = Vector3(0, 0, 0);
	array[8] = Vector3(0, 0, 0);
	array[9] = Vector3(0, 0, 0);
	array[10] = Vector3(0, 0, 0);
	array[11] = Vector3(0, 0, 0);
	array[12] = Vector3(0, 0, 0);
	array[13] = Vector3(0, 0, 0);
	array[14] = Vector3(0, 0, 0);
	array[15] = Vector3(0, 0, 0);
	array[16] = Vector3(0, 0, 0);
	array[17] = Vector3(0, 0, 0);
	array[18] = Vector3(0, 0, 0);
	array[19] = Vector3(0, 0, 0);
}

function SetCoordinates (str : String) {
	
	strArray = str.Split(" "[0]);
	
	var k = 0;
	for (var i = 0; i < strArray.length/3; i++) {
		array[i] = new Vector3(float.Parse("" + strArray[k]), float.Parse("" + strArray[k+1]), float.Parse("" + strArray[k+2]));
		k = k + 3;
	}
	
	Debug.Log(array[0]);
	Debug.Log(array[1]);
	Debug.Log(array[2]);
	Debug.Log(array[3]);
	Debug.Log(array[4]);
	Debug.Log(array[5]);
	Debug.Log(array[6]);
	Debug.Log(array[7]);
	Debug.Log(array[8]);
	Debug.Log(array[9]);
	Debug.Log(array[10]);
	Debug.Log(array[11]);
	Debug.Log(array[12]);
	Debug.Log(array[13]);
	Debug.Log(array[14]);
	Debug.Log(array[15]);
	Debug.Log(array[16]);
	Debug.Log(array[17]);
	Debug.Log(array[18]);
	Debug.Log(array[19]);
}