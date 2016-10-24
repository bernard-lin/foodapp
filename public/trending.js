angular.module('Trending', [])
.controller('TrendingCtrl', ['$scope', 'Pictures', function($scope, Pictures) {

  $scope.pics = [];

  $scope.getPics = function() {
    // Calls the factory method that sends a get request to the server
    Pictures.getAll()
    .then(function(resp) {
      $scope.pics = [];
     // Logic to throw out anything that is not actually saved in the database
      for(var key in resp) {
        for(var key2 in resp[key]) {
          if (typeof resp[key][key2] === 'object' && !Array.isArray(resp[key][key2])){
            if (key2 === 'headers') continue;
            var pic = resp[key][key2];
            pic.databaseID = key2;
            $scope.pics.push(pic);
          }
        }
      }
    });
  };

  // Gets the pictures when the controller is mounted
  $scope.getPics();

  // Called every time a like button is clicked
  $scope.like = function(databaseID) {

    // Find the databaseID associated wtih the pic that was liked
    for(var i = 0; i < $scope.pics.length; i++) {
      if($scope.pics[i].databaseID === databaseID) {
        var picture = $scope.pics[i];
      }
    }

    // Increment like counter
    picture.likes++;

    // Send updated information to database via a put request
    Pictures.like(picture);
  };

}]);
