<?php
	
$conn = new mysqli("localhost", "root", "", "hyas");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$out = array('error' => false);

$user = json_decode(file_get_contents('php://input'));

$username = $user->username;
$password = $user->password;

$sql = "SELECT * FROM userregister WHERE user_name='$username' AND password='$password'";
$query = $conn->query($sql);

if($query->num_rows>0){
	$out['username']=$username;
	$out['message'] = 'Login Successful';
	
}
else{
	$out['error'] = true;
	$out['message'] = 'Invalid Login';
}

echo json_encode($out);

?>