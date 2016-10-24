angular.module('Display', [])
.controller('DisplayCtrl', ['$scope','NgMap', 'Locations', function($scope, Map, Locations) {
  $scope.address = '';
  $scope.location = '';

  // Gets the location stored in the Locations factory
  $scope.getLocation = function() {
    var locInfo = Locations.getLoc();
    $scope.address = locInfo.address;
    $scope.location = locInfo.location;
  };

  // Gets map location upon controller mount
  $scope.getLocation();

  // Updates location every 50 msec
  setInterval($scope.getLocation,50);

}]);
