<?php
	session_start();

	$conn = new mysqli("localhost", "root", "", "hyas");

	$output = array();
	$sql = "SELECT * FROM userregister WHERE user_id = '".$_SESSION['user']."'";
	$query=$conn->query($sql);
	while($row=$query->fetch_array()){
		$output[] = $row;
	}

	echo json_encode($output);
?>