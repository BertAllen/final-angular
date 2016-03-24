app.controller("ArtCollector", function($scope) {

    $scope.gallery = [];
    $scope.myGreatArt = function(art) {
        $scope.gallery.push(art);
        $scope.art = {};
  } 

    $scope.sellArt = function(index) {
        $scope.gallery.splice(index, 1);
}
  
    
})