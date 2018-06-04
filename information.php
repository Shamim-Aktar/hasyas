<?php
 session_start();
$user_id = $_SESSION['user'];
$con=mysqli_connect('localhost','root','','hyas');
mysqli_query($con, "SET SESSION sql_mode = ''");
$data = json_decode(file_get_contents("php://input"));
 if(count($data)>0){
$name=mysqli_real_escape_string($con, $data->name);

$email=mysqli_real_escape_string($con, $data->email);
$mobile=mysqli_real_escape_string($con, $data->mobile);
$source=mysqli_real_escape_string($con, $data->source);
$state=mysqli_real_escape_string($con, $data->state);

$city=mysqli_real_escape_string($con, $data->city);
$country=mysqli_real_escape_string($con, $data->country);
$comment=mysqli_real_escape_string($con, $data->comment);
$createdAt=mysqli_real_escape_string($con, $data->createdAt);
//echo $source;
//echo $createdAt;
$query="INSERT INTO `user`(`user_id`, `u_name`, `u_email`, `u_mobile`, `u_source`,`state`, `city`, `country`, `comment`, `createdAt`) VALUES ('$user_id','$name', '$email', '$mobile','$source', '$state', '$city', '$country', '$comment','$createdAt')";
#$query="insert into user(user_id,u_name, u_email, u_mobile, state, city, country, comment) values('1',$name', '$email', '$mobile', '$state', '$city', '$country', '$comment')";


 if(mysqli_query($con, $query)){
        echo "data inserted";
      }
      else{
        echo 'code fat gaya';
      }
    }

    echo json_encode($data);
?>