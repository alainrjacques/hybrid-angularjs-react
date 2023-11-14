var app = angular.module("myapp", ["ngRoute"]);

app
  .controller(
    "MainController",
    function ($scope, $route, $routeParams, $location) {
      $scope.$route = $route;
      $scope.$location = $location;
      $scope.$routeParams = $routeParams;
    }
  )

  .controller("BookController", function ($scope, $routeParams) {
    $scope.name = "BookController";
    $scope.params = $routeParams;
  })

  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when("/Book/:bookId", {
        templateUrl: "book.html",
        controller: "BookController",
      })
      .when("/React/:bookId", {
        template: "",
      });

    $locationProvider.html5Mode(true);
  });
