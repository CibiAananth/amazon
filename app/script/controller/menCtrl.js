/**
 * Created by Cibi on 6/27/2017.
 */
var app=angular.module("myapp",[]);
app.controller("menCtrl",function ($scope) {

    $scope.guest=[
        {name:''}

        ];
    console.log(guest);

    $scope.newuser=function () {

    var ne ={
    name:$scope.new
    };
    $scope.guest.push(ne);
    console.log(ne);
    console.log(guest);
    }




})
