<?php 
$con=mysqli_connect('localhost','root','','hyas');
$sql = "SELECT * from user where u_source='facebook'";
$result = mysqli_query($con,$sql);
$rowcount=mysqli_num_rows($result);
?>
 <!-- <div class="row">

 </div -->
 <div id="dashboard" ng-controller="myCtrl">
<div class="text-center">
 <div class="row">
  <div class="col-md-4 col-md-offset-4">
    <h2>Welcome {{ user.user_name }} </h2>
   <!--  <h4>User Info:</h4>
    <p>Firstname: {{ user.firstname }}</p>
    <p>Lastname: {{ user.lastname }}</p>
    <p>Address: {{ user.address }}</p> -->
  <!--   <p>Username: </p> -->
   <!--  <p>Password: {{ user.password }}</p> -->
    <a href="" class="btn btn-danger" ng-click="logout()"><span class="glyphicon glyphicon-log-out"></span> Logout</a>
  </div>
</div>
  
 <hr>

</div>

        

  
    <div class="row">
      <div class="col-md-3">
        <div class="well">
          <h4 class="text-danger"><span class="label label-danger pull-right">- 9%</span> Total leads </h4>
        </div>
      </div>
      <div class="col-md-3">
        <div class="well">
          <h4 class="text-success"><span class="label label-success pull-right">+ 3%</span> Google Leads</h4>
        </div>
      </div>
      <div class="col-md-3">
        <div class="well">
          <h4 class="text-primary"><span class="label label-primary pull-right"><?php echo $rowcount ?></span> Facebook Leads</h4>
        </div>
      </div>
      <div class="col-md-3">
        <div class="well">
          <h4 class="text-success"><span class="label label-success pull-right">+ 24%</span> Other Sources </h4>
        </div>
      </div>
    </div><!--/row-->    
}
 <!--/col-12-->




</div>