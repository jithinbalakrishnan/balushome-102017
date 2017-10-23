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
        }).when("/blogs", {
            templateUrl: "templates/blogs.html"
        })
        .when("/services-upholstery", {
            templateUrl: "templates/services-upholstery.html"
        })
        .otherwise({redirectTo :'/'});

});