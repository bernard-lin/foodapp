angular.module("foodApp", ['FileUpload','ngRoute','foodServices','Map', 'Trending', 'Display'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/display', {
    templateUrl: 'views/display.html',
    controller: 'DisplayCtrl',
    activeNav: 'display'
  })
  .when('/trending', {
    templateUrl: 'views/trending.html',
    controller: 'TrendingCtrl',
    activeNav: 'trending'
  })
  .when('/upload', {
    templateUrl: 'views/upload.html',
    controller: 'UploadCtrl',
    activeNav: 'upload'
  })
  .otherwise({
    redirectTo: '/trending'
  });
}])
.controller('DefaultCtrl',['$scope', '$location', function($scope, $location) {
  $scope.isActive = function(route) {
    return route === $location.path();
  };
}]);
