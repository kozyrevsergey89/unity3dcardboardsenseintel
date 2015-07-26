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

		
	var righHandUpperArm = transform.Find("upperarm_r");
	var righHandLowerArm1 = righHandUpperArm.Find("lowerarm1_r");
	var righHandLowerArm2 = righHandLowerArm1.Find("lowerarm2_r");
	var righHandLowerArm3 = righHandLowerArm2.Find("lowerarm3_r");
	var handR = righHandLowerArm3.Find("hand_r");
	var index1 = handR.Find("index1_r");
	var middle1 = handR.Find("middle1_r");
	var pinky1 = handR.Find("pinky1_r");
	var ring1 = handR.Find("ring1_r");
	var thumb1 = handR.Find("thumb1_r");
	
	
	var index2 = index1.Find("index2_r");
	var middle2 = middle1.Find("middle2_r");
	var pinky2 = pinky1.Find("pinky2_r");
	var ring2 = ring1.Find("ring2_r");
	var thumb2 = thumb1.Find("thumb2_r");
	
	
	var index3 = index2.Find("index3_r");
	var middle3 = middle2.Find("middle3_r");
	var pinky3 = pinky2.Find("pinky3_r");
	var ring3 = ring2.Find("ring3_r");
	var thumb3 = thumb2.Find("thumb3_r");
	
//	righHandLowerArm1.Translate(array[1], Space.Self);
//	righHandLowerArm2.Translate(array[2], Space.Self);
//	righHandLowerArm3.Translate(array[3], Space.Self);
	handR.Translate(array[0], Space.World);
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