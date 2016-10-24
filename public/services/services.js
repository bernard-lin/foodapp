angular.module('foodServices', [])

.factory('Pictures', ['$http', function($http) {

  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/places'
    });
  };

  var addOne = function(picture) {
    return $http({
      method: 'POST',
      url: '/places',
      data: picture
    });
  };

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
  var saveLoc = function(location) {
    loc = location;
  };

  var getLoc = function() {
    return loc;
  };

  return {
    saveLoc: saveLoc,
    getLoc: getLoc
  };

}]);
