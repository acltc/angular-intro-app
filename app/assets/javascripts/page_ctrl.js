(function () {
  "use strict";

  angular.module("app").controller("pageCtrl", function($scope) {

    $scope.purpleHippo = "Hello!";
    $scope.greenHippo = "Hippo";
    
    $scope.reviews = [
      {
        text: "AngularJS is the best thing since sliced bread!",
        stars: 5,
        reviewer: "Emily Jackson"
      },
      {
        text: "I love AngularJS, especially when I'm programming!",
        stars: 4,
        reviewer: "Max Burlington"
      },
      {
        text: "AngularJS is waaaaay better than Chinese Checkers.",
        stars: 3,
        reviewer: "Ursula Watson"
      }
    ];

    $scope.addReview = function(newName, newStars, newText) {
      var review = {
        reviewer: newName,
        stars: newStars,
        text: newText
      };
      $scope.reviews.push(review);
    }

    $scope.isPositive = function(review) {
      return review.indexOf("bad") === -1
    }

    window.scope = $scope;
  });
})();