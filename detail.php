<?php 
 session_start();
$user_id = $_SESSION['user'];
$con=mysqli_connect('localhost','root','','hyas');
 
$query = mysqli_query($con, "select * from user where user_id ='".$_SESSION['user']."'");
 
$user_list = array();
while($rows = mysqli_fetch_assoc($query)){
	$user_list[] = $rows;
}
 
print json_encode($user_list);