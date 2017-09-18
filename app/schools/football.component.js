angular.
  module('myModule').
  controller('footballController', function ($scope, $http) {
    $http({
      method: 'GET',
      url: '/articles',
        }).then(function successCallback(response) {
          const data = response.data
          const dataObj = data.map(item => {
            return {
              title: item.title,
              abstract: item.abstract,
              url: item.url
            }
          })
          $scope.data = dataObj
        },
        function errorCallback(response) {
          console.log(response)
    })
  });
