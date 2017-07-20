
/**
 * Created by Cibi on 6/27/2017.
 */
var app=angular.module("myapp",[]);
app.controller("UserLoginCtrl",function ($scope) {
    $scope.guest=[
        {name:'',
            password:''}

    ];


$scope.adduser=function () {

    var ne ={
        name:$scope.regname,
        password:$scope.regpass,
    };
    $scope.guest.push(ne);
    console.log(ne);
    $scope.regname="";
    $scope.regpass="";
    $scope.regemail="";
    $scope.regconfirm="";
};

$scope.verifylogin=function (id,pass) {
    for (var i=0;i<$scope.guest.length;i++){
        if (id==$scope.guest[i].name&&pass==$scope.guest[i].password){

            $scope.user=$scope.guest[i].name;
            $scope.new="";
            $scope.pass="";
        }
    }
    console.log($scope.guest);
};

});