'use strict';

var app = angular.module("myModule", []);

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
