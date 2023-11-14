/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (() => {

eval("var app = angular.module(\"myapp\", [\"ngRoute\"]);\r\n\r\napp\r\n  .controller(\r\n    \"MainController\",\r\n    function ($scope, $route, $routeParams, $location) {\r\n      $scope.$route = $route;\r\n      $scope.$location = $location;\r\n      $scope.$routeParams = $routeParams;\r\n    }\r\n  )\r\n\r\n  .controller(\"BookController\", function ($scope, $routeParams) {\r\n    $scope.name = \"BookController\";\r\n    $scope.params = $routeParams;\r\n  })\r\n\r\n  .config(function ($routeProvider, $locationProvider) {\r\n    $routeProvider\r\n      .when(\"/Book/:bookId\", {\r\n        templateUrl: \"book.html\",\r\n        controller: \"BookController\",\r\n      })\r\n      .when(\"/React/:bookId\", {\r\n        template: \"\",\r\n      });\r\n\r\n    $locationProvider.html5Mode(true);\r\n  });\r\n\n\n//# sourceURL=webpack://hybrid-angularjs-react/./main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./main.js"]();
/******/ 	
/******/ })()
;