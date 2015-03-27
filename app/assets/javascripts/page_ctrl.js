(function () {
  "use strict";

  angular.module("app").controller("pageCtrl", function($scope) {

    $scope.purpleHippo = "Hello!";
    $scope.greenHippo = "Hippo";
    
    window.scope = $scope;
  });
})();