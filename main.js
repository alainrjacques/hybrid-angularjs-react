import "@/main";
import { hybridAppStore } from "@/hybridAppStore";
import { mapRoutesToAngularjs } from "./src/routes/helpers";
import { routeRecords } from "./src/routes/management";
import { buildReactApp } from "./src/buildReactApp";
import { Book3 } from "./src/components/Book";
var app = angular.module("myapp", ["ngRoute", "app.components"]);

angular.module("app.components", []);

angular
  .module("app.components")
  .component("reactEmbedded", buildReactApp(Book3, [], []))
  .component("reTest", buildReactApp(Book3, [], []));

app
  .controller(
    "MainController",
    function ($scope, $route, $routeParams, $location) {
      $scope.$route = $route;
      $scope.$location = $location;
      $scope.$routeParams = $routeParams;
      console.log("$route".$route);
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
    console.log("routeRecords", routeRecords);
    mapRoutesToAngularjs($routeProvider, routeRecords);
    console.log("$routeProvider", $routeProvider);

    $locationProvider.html5Mode(true);
  });

app.run(function ($rootScope, $route) {
  console.log("$route.routes", $route.routes);
  $rootScope.$on("$locationChangeSuccess", function () {
    console.log("LOCATION CHANGE");
    hybridAppStore
      .getState()
      .setUrlRoute(window.location.pathname + window.location.search);
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
});
