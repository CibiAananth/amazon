/**
 * Created by Cibi on 6/26/2017.
 */
var app=angular.module("myapp",[]);
app.controller("menFormalCtrl",function ($scope) {
    $scope.item = [
        {
            Title: 'Men Full sleeve shirt',
            BrandName: 'Tommy Hilfigher',
            Price: 2500,
            Rating: 4,
            img: '../img/mform1.jpg'
        },
        {
            Title: 'Men half sleeve shirt',
            BrandName: 'Peter England',
            Price: 2590,
            Rating: 3,
            img: '../img/mform2.jpg'
        }


    ];
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
    $scope.lc=localStorage.getItem("username");
    $scope.pas=localStorage.getItem("password");

           if ($scope.lc==$scope.new&&$scope.pas==$scope.pass   ){

               $scope.user=$scope.lc;
$scope.new="";
$scope.pass="";
           }


console.log($scope.user);
    };/*$scope.lc=localStorage.getItem("username");
$scope.pas=localStorage.getItem("password");
*/console.log($scope.lc+$scope.pas);

/*
------------------------------------------------------------------add-----------------------------------------------
*/

    {'info'

        [{"id":"11","name":"brown","description":"fasdfasd","size":"fasdf","color":"5a72fb","created_at":"2015-09-08 22:33:33","updated_at":"2015-09-08 22:33:33","images":"[\"236.jpg\",\"239.jpg\",\"294.jpg\",\"748.jpg\",\"157.jpg\",\"446.jpg\",\"871.jpg\",\"778.jpg\"]"},{"id":"13","name":"fasdf","description":"asdfghjkl","size":"fasdf","color":"5a72fb","created_at":"2015-09-09 11:48:31","updated_at":"2015-09-09 11:48:31","images":"[\"910.jpg\",\"504.jpg\",\"784.jpg\"]"}]}







    $scope.page1="https://www.google.co.in";
$scope.page2="https://www.facebook.com";

$scope.ur= ["https://www.google.co.in","https://www.facebook.com"];




console.log($scope.ur[0],$scope.ur[1]);
    $scope.addproduct = function () {

        var newitem =
            {
                Title: $scope.title,
                BrandName: $scope.brand,
                Price: $scope.price,
                Rating: $scope.rating,
                img:$scope.image,

            };

$scope.item.push(newitem);

            $scope.brand= "",
            $scope.price= "",
            $scope.rating= "",
            $scope.image="",
            $scope.title="",
        alert("successfully added")
        console.log($scope.item);
    }

/*
  ----------------------------------------------------------------------------------delete-----------------------------------------
*/

$scope.delete=function (title) {

for (i=0;i<=$scope.item.length;i++) {
    if($scope.item[i].Title==title) {
        $scope.item.splice(i, 1);
    }
}
}

/*
--------------------------------------------------------------------------edit-----------------------------------------
*/
$scope.edit=function (title) {

    for (i = 0; i <= $scope.item.length; i++) {
        if ($scope.item[i].Title == title) {
                $scope.price = $scope.item[i].Price,
                $scope.title = $scope.item[i].Title;
                $scope.rating = $scope.item[i].Rating;
                $scope.brand = $scope.item[i].BrandName;
        }

    }
}

});