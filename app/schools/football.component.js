function returnFootball(articlesObject) {
  const articlesArray = articlesObject.data.results
  const footballArticles = articlesArray.map(item => {
    return {
      topic: item.subsection,
      title: item.title,
      abstract: item.abstract,
      url: item.short_url
    }
  })
  return footballArticles
}

angular.
  module('myModule').
  controller('footballController', function ($scope, $http) {
    $http({
      method: 'GET',
      url: 'https://api.nytimes.com/svc/topstories/v2/sports.json?apikey=' + process.env.API_KEY,
        }).then(function successCallback(response) {
          const data = returnFootball(response)
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
