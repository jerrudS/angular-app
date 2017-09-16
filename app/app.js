'use strict';

var app = angular.module("myModule", ["chart.js"]);

app.controller("dataController", function($scope) {
  var schoolInfo = [
    { name:'University of Illinois', location:'Champaign, IL', logo:'images/illinois.png' },
    { name:'Indiana University', location:'Bloomington, IN', logo:'images/indiana.png'  },
    { name:'University of Iowa', location:'Iowa City, IA', logo:'images/iowa.png' },
    { name:'University of Maryland', location:'College Park, MD', logo:'images/maryland.png' },
    { name:'Michigan State University', location:'East Lansing, MI', logo:'images/michigan-state.png' },
    { name:'University of Michigan', location:'Ann Arbor, MI', logo:'images/michigan.png' },
    { name:'University of Minnesota', location:'Minneapolis, MN', logo:'images/minnesota.png' },
    { name:'University of Nebraska', location:'Lincoln, NE', logo:'images/nebraska.png'  },
    { name:'Northwestern University', location:'Evanston, IL', logo:'images/northwestern.png' },
    { name:'Ohio State University', location:'Columbus, OH', logo:'images/ohio-state.png' },
    { name:'Penn State University', location:'State College, PA', logo:'images/penn-state.png' },
    { name:'Purdue University', location:'West Lafayette, IN', logo:'images/purdue.png' },
    { name:'Rutgers University', location:'New Brunswick, NJ', logo:'images/rutgers.png' },
    { name:'University of Wisconsin', location:'Madison, WI', logo:'images/wisconsin.png' }
  ]
  $scope.schools = schoolInfo;
});

app.controller("pieController", function ($scope) {
  $scope.colors = ["rgb(255,128,0)", "rgb(153,0,0)", "rgb(255,255,0)", "rgb(255,0,0)", "rgb(0,153,0)", "rgb(255,255,51)", "rgb(102,0,0)", "rgb(255,26,0)", "rgb(51,0,102)", "rgb(257,0,0)", "rgb(0,0,51)", "rgb(204,204,0)", "rgb(255,51,51)", "rgb(258,0,0)"];
  $scope.labels = ['University of Illinois', 'Indiana University', 'University of Iowa', 'University of Maryland', 'Michigan State University', 'University of Michigan', 'University of Minnesota', 'University of Nebraska', 'Northwestern University', 'Ohio State University', 'Penn State University', 'Purdue University', 'Rutgers University', 'University of Wisconsin'];
  $scope.data = [18, 24, 25, 29, 20, 36, 19, 19, 8, 30, 48, 3, 1, 28];
});
