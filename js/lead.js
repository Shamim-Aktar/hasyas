app.controller("userCtrl", [
  "$scope",
  "$http",
  "$location",

  function($scope, $http,  $location) {
    $scope.weburl = $location.absUrl();
    $scope.path = $scope.weburl.split("/")[3];

    $scope.projectname = $scope.weburl;
    $scope.urlhost = $location.host();
    $scope.urlport = $location.port();
    $scope.dateFilter = false;
    /*$scope.source=$location.search();*/

    var url =
      "http://goenkainc.com/meghmani/?utm_source=facebook&utm_medium=search&utm_campaign=Brand"; // remove the ?

    /*var queryString = url.substring( url.indexOf('?')+1 )*/ $scope.queryStringsrc = url.match(
      new RegExp("=(.*?)($|&)", "i")
    )[1];
    // console.log($scope.queryStringsrc);
    /*alert(queryString)*/

    $scope.urlprotocol = $location.protocol();
    // console.log($scope.weburl);
    // console.log($scope.urlport);

    $http.get("detail.php").then(function(response) {
      $scope.details = response.data;
      // console.log($scope.details);
    });


      $scope.Datebasedfilter = function(start_date, end_date){
        var details = angular.copy($scope.details);
        var startDate = start_date.getTime()+19800000,endDate = end_date.getTime()+19800000;
        if(startDate <= endDate) {
          $scope.dateFilter = true;
          end_date = end_date ? end_date : new Date();
          $scope.filteredDetails = details.filter((item)=>{
            var createdDate = new Date(item.createdAt).getTime();
            return createdDate >= startDate && createdDate <= endDate;
          });
        }else {
          alert("End date should be grater than start date");
        }
        
      }


     // $scope.date = new Date();
    $scope.remove = function(id) {
      for (i in $scope.details) {
        if ($scope.details[i].id == id) {
          // console.log(i);i
          $scope.details.splice(i+1, 1);
        }
      }
    };

     /* $scope.filtereddata=function($scope, $filter){
        $scope.resultdata=$filter('daterange')(start_date, end_date);
      }
 */
  }
]);