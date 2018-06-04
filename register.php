<?php
 
$con=mysqli_connect('localhost','root','','hyas');

$data = json_decode(file_get_contents("php://input"));


 if(count($data)>0){
$username=mysqli_real_escape_string($con, $data->username);
$useremail=mysqli_real_escape_string($con, $data->useremail);
$password=mysqli_real_escape_string($con, $data->password);

/*echo "'.$username'";*/

/*$username=$_POST('');
$useremail=$_POST('');
$password=$_POST('');*/

$query="insert into userregister(user_name, email, password)values('$username','$useremail','$password')";

echo "'.$query'";
 if(mysqli_query($con, $query)){
        echo "data inserted";
      }
      else{
        echo 'code fat gaya';
      }
    }

    echo json_encode($data);
?>