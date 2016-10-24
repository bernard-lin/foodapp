angular.module('foodServices', [])

.factory('Pictures', ['$http', function($http) {

  // Sends request to server to get all photos
  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/places'
    });
  };

  // Sends request to server to add one photo
  var addOne = function(picture) {
    return $http({
      method: 'POST',
      url: '/places',
      data: picture
    });
  };

  // Sends request to server to increment numbers of likes for one photo
  var like = function(picture) {
    return $http({
      method: 'PUT',
      url: '/places',
      data: picture
    });
  };

  return {
    getAll: getAll,
    addOne: addOne,
    like: like
  };

}])

.factory('Locations',['$http', function($http) {

  var loc = {};

  // Map location is saved in the loc object
  var saveLoc = function(location) {
    loc = location;
  };

  // Returns the loc object (called in display.js)
  var getLoc = function() {
    return loc;
  };

  return {
    saveLoc: saveLoc,
    getLoc: getLoc
  };

}]);
