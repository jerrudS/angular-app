function returnFootball(articlesObject) {
  const articlesArray = articlesObject.data.response.docs
  const footballArticles = articlesArray.filter(item => {
    return item.section_name == 'College Football'
  })
  return footballArticles
}

angular.
  module('myModule').
  controller('footballController', function ($scope, $http) {
    $http({
      method: 'GET',
      url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=2f7492be6cb34d96a6dd00a0c41cddb6',
        }).then(function successCallback(response) {
          console.log(returnFootball(response))
        },
        function errorCallback(response) {
          console.log(response)
    })
  });
