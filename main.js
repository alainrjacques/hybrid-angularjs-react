import angular from "angular";
import { mapRoutesToAngularjs } from "./src/routes/helpers";
import { routeRecords } from "./src/routes/management";
import { buildReactApp } from "./src/buildReactApp";
var app = angular.module("myapp", ["ngRoute"]);

angular.module("app.components", []);

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
    $routeProvider.when("/Book/:bookId", {
      templateUrl: "book.html",
      controller: "BookController",
    });
    // .when("/React/:bookId", {
    //   template: "",
    // });
    console.log(routeRecords);
    mapRoutesToAngularjs($routeProvider, routeRecords);

    $locationProvider.html5Mode(true);
  });
routeRecords.forEach((route) => {
  if (!route.angularjsOptions) return;
  angular
    .module("app.components")
    .component(
      route.angularjsOptions.name,
      buildReactApp(
        route.angularjsOptions.Component,
        [],
        route.angularjsOptions.bindingNames
      )
    );
});
