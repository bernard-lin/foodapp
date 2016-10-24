angular.module('Map', ['ngMap'])
.controller('MapCtrl', ['$scope','NgMap', 'Locations', function($scope, NgMap, Locations) {

  $scope.address = '';
  $scope.location = '';

  var mapModule = this;

//  Limit search results to individual places. Keep in mind that there are still
// individual place markers for general places like zip codes & towns
  mapModule.types = "['establishment']";

//Change map location based on location submitted through search box
  mapModule.placeChanged = function() {
    mapModule.place = this.getPlace();
    console.log('location', mapModule.place.geometry.location);
    mapModule.map.setCenter(mapModule.place.geometry.location);
    $scope.address = mapModule.place;
    $scope.location = mapModule.place.geometry.location;
    var location = {
      address: mapModule.place.formatted_address,
      location: mapModule.place.geometry.location
    };

    Locations.saveLoc(location);
  };

//render Map
  NgMap.getMap().then(function(map) {
    mapModule.map = map;
  });

}]);
