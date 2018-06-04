
app.factory("insertservice",function($scope, $http, $location){


 var url = 'http://goenkainc.com/meghmani/?utm_source=facebook&utm_medium=search&utm_campaign=Brand';

  
/*var queryString = url.substring( url.indexOf('?')+1 )*/// remove the ?*/
$scope.queryStringsrc=url.match(new RegExp("=(.*?)($|\&)", "i"))[1];
console.log($scope.queryStringsrc);
/*alert(queryString)*/

$scope.urlprotocol = $location.protocol();
console.log($scope.weburl);
console.log($scope.urlport); 
return{
         insertData:function(){  
           $http.post(  
                "information.php",  
                {'name':$scope.name,'email':$scope.email,'mobile': $scope.mobile_number,'source':$scope.queryStringsrc,
                'state':$scope.state,'city':$scope.city,'country':$scope.country,
                'comment':$scope.comment}  
           ).then(function(data){  
                console.log(data);
                

                $scope.name = null;  
                $scope.email = null;  
                $scope.mobile_number=null;
                $scope.state=null;
                $scope.city=null;
                $scope.country=null;
                $scope.comment=null;
                $scope.user=data.data;
                 console.log($scope.user); 
           }); 
      }
  }
  }
    });