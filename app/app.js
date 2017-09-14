var app = angular.module("myModule", []);

app.controller("dataController", function($scope) {
  var schoolInfo = [
    { name:'University of Illinois', location:'Champaign, IL' },
    { name:'Indiana University', location:'Bloomington, IN' },
    { name:'University of Iowa', location:'Iowa City, IA' },
    { name:'University of Maryland', location:'College Park, MD' },
    { name:'Michigan State University', location:'East Lansing, MI' },
    { name:'University of Michigan', location:'Ann Arbor, MI' },
    { name:'University of Minnesota', location:'Minneapolis, MN' },
    { name:'University of Nebraska', location:'Lincoln, NE' },
    { name:'Northwestern University', location:'Evanston, IL' },
    { name:'Ohio State University', location:'Columbus, OH' },
    { name:'Penn State University', location:'State College, PA' },
    { name:'Purdue University', location:'West Lafayette, IN' },
    { name:'Rutgers University', location:'New Brunswick, NJ' },
    { name:'University of Wisconsin', location:'Madison, WI' }
  ]
  $scope.schools = schoolInfo;
});
