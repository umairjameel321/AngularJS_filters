/// <reference path="angular.min.js" />

// steps
// create a module
var theModule = angular
    .module("myModule", [])
    .controller("myController", function($scope){

        var employees = [
            {name: "umair", dataofbirth: new Date("November 28, 1991"), gender: "Male"},
            {name: "umair", dataofbirth: new Date("November 28, 1991"), gender: "Male"},
            {name: "umair", dataofbirth: new Date("November 28, 1991"), gender: "Male"},
            {name: "umair", dataofbirth: new Date("November 28, 1991"), gender: "Male"},
        ];

        $scope.employees = employees;
        $scope.rowLimit = 2;

    });

