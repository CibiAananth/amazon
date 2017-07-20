/**
 * Created by Cibi on 6/27/2017.
 */
/**
 * Created by Cibi on 6/26/2017.
 */
var app=angular.module("myapp",[]);
app.controller("womenFormalCtrl",function ($scope) {
    $scope.item = [
        {
            Title: 'Men Full sleeve shirt',
            BrandName: 'Tommy Hilfigher',
            Price: 2500,
            Rating: '4',
            img: '../img/mform1.jpg'
        },
        {
            Title: 'Men half sleeve shirt',
            BrandName: 'Peter England',
            Price: 2590,
            Rating: '3',
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
        for (var i=0;i<$scope.guest.length;i++){
            if (id==$scope.guest[i].name&&pass==$scope.guest[i].password){

                $scope.user=$scope.guest[i].name;
                $scope.new="";
                $scope.pass="";
            }
        }
        console.log($scope.guest);
    };



    /*
     ------------------------------------------------------------------add-----------------------------------------------
     */
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