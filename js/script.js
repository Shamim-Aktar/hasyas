var app = angular.module("hayas", ["ngRoute"]);
app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "login.html",
      controller: "loginCtrl"
    })
    .when("/dashboard", {
      templateUrl: "dashboard.html",
      controller: "homeCtrl"
      /*authentified:true*/
    })
    .when("/projectdetails", {
      templateUrl: "projectdetail.html"
    })
    .when("/user", {
      templateUrl: "user.html",
      controller: "userCtrl"
    })
    .when("/lead", {
      templateUrl: "lead.html",
      controller: "userCtrl"
    })
    .when("/information", {
      templateUrl: "information.html"
    })
    .when("/register", {
      templateUrl: "register.html",
      controller: "RegisterCtrl"
    });

  /*  $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});*/
});

app.controller("myCtrl", function($scope, $http, $location) {
  var url =
    "http://goenkainc.com/meghmani/?utm_source=facebook&utm_medium=search&utm_campaign=Brand"; // remove the ?*/

  /*var queryString = url.substring( url.indexOf('?')+1 )*/ 
  $scope.curdate=new Date();
  // console.log( $scope.curdate)
  $scope.queryStringsrc = url.match(
    new RegExp("=(.*?)($|&)", "i")
  )[1];
  // console.log($scope.queryStringsrc);
  /*alert(queryString)*/
  $scope.urlprotocol = $location.protocol();
  // console.log($scope.weburl);
  // console.log($scope.urlport);

  $scope.insertData = function() {
    $http.post("information.php", {
        name:  $scope.name,
        email: $scope.email,
        mobile:$scope.mobile_number,
        source:$scope.queryStringsrc,
        state: $scope.state,
        city:  $scope.city,
        country: $scope.country,
        comment: $scope.comment,
        createdAt:$scope.curdate
      })
      .then(function(data) {
        // console.log(data);

        // console.log($scope.user);
      });
  };
});



app.controller("RegisterCtrl", function($scope, $http) {
  $scope.insertuserData = function() {
    $http
      .post("register.php", {
        username: $scope.username,
        useremail: $scope.useremail,
        password: $scope.password
      })
      .then(function(data) {
        // console.log($scope.username);
        // console.log(data);
        $scope.username = "";
        $scope.useremail = "";

        $scope.password = "";

        $scope.userdata = data.data;
        // console.log($scope.userdata);
      });
  };
});






    app.filter('daterange', function()
    {
        return function(details, start_date, end_date){
            var result = [];

          var start_date=(start_date && !isNaN(Date.parse(start_date)))?Date.parse(start_date):0
          var end_date=(end_date && !isNaN(Date.parse(end_date)))?Date.parse(start_date):new Date().getTime();
          // console.log(details, start_date, end_date); 

          if(details && details.length>0){
            $.each(details, function(index, details){
                var detailDate=new Date(details.createdAt).getTime();

                // console.log('detailDate', detailDate, detailDate >= start_date, detailDate <= end_date);
            

                    if (detailDate >= start_date && detailDate <= end_date) {
                          //  console.log('details', details);  
                         result.push(details);
                      }

            })

            return result;

            }
          }

        
    });



app.run(function($rootScope, $location, loginService) {
  //prevent going to homepage if not loggedin
  var routePermit = [
    "/dashboard",
    "/projectdetails",
    "/lead",
    "/information",
    "/user"
  ];
  $rootScope.$on("$routeChangeStart", function(event) {
    /* event.preventDefault();*/

    // console.log(routePermit);
    if (routePermit.indexOf($location.path()) != -1) {
      var connected = loginService.islogged();
      connected.then(function(response) {
        // console.log(response);
        if (!response.data) {
          $location.path("/");
        }
      });
    }
    /* event.preventDefault();*/
  });
  //prevent going back to login page if session is set
  var sessionStarted = ["/"];
  $rootScope.$on("$routeChangeStart", function() {
    if (sessionStarted.indexOf($location.path()) != -1) {
      var cantgoback = loginService.islogged();
      cantgoback.then(function(response) {
        if (response.data) {
          $location.path("/");
        }
      });
    }
  });
});

app.controller("homeCtrl", [
  "$scope",
  "loginService",
  "$http",
  function($scope, loginService,$http) {
    //logout
    $scope.logout = function() {
      loginService.logout();
    };
    function init(){
      $scope.facebookCount = 0;
      
      $http.get("detail.php").then(function(response){
        $scope.details=response.data;
        $scope.details.forEach(user => {
          if(user.u_source === "facebook") {
            $scope.facebookCount++;
          }
        });
      }); 
    };
    init();

    //fetch login user
    var userrequest = loginService.fetchuser();
    userrequest.then(function(response) {
      $scope.user = response.data[0];
    });
  }
]);

/*app.controller('logincontroller', function($scope, $http, $location){
  $scope.login=function(){
    console.log("triggered");
 $http.post("login.php",{'theusername':$scope.username, 'thepassword':$scope.password})
.then(function(response) {
        var mssg = response.MESSAGE;
        $scope.creddata=response;

        
        console.log($scope.creddata);

            if($scope.creddata.error == true){
          $scope.successLogin = false;
          $scope.errorLogin = true;
          $scope.errorMsg = $scope.creddata.message;
        }


        else{
          $scope.errorLogin = false;
          $scope.successLogin = true;
          $scope.successMsg = $scope.creddata.message;


          if($scope.successLogin===true){
           
            $location.path('/dashboard');
          
          }
}
*/
/*  if($scope.creddata.trim()==='correct'){
          
          $location.path('/dashboard');
        } else {
          $scope.errorMsg = "Login not correct";
        }*/

/*  }).catch(function error(response, status, headers, config) {
        $scope.errorMsg = 'Unable to LOGIN';})
      

            
  }})*/

/*  app.filter("dateFilter", function() {
       return function datefilter(items, from, to) {
       var result = [];
       angular.forEach(items, function(value){
           if (Date.parse(value.date) > Date.parse(from) && Date.parse(to) > Date.parse(value.date))  {
               result.push(value);
            }
        });
        return result;
        };
    });*/
