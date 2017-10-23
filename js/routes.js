var route = angular.module('route', ['ngRoute']);

route.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/home.html"
        })
        .when("/about", {
            templateUrl: "templates/about.html"
        })
        .when("/contact", {
            templateUrl: "templates/contact.html"
        })
        .otherwise({redirectTo :'/'});

});