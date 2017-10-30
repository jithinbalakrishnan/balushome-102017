angular.module('balushome')
    .config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/home.html"

        })
        .when("/about", {
            templateUrl: "templates/about.html"
        })
        .when("/gallery", {
            templateUrl: "templates/gallery-shopping.html"
        })
        .when("/contact", {
            templateUrl: "templates/contact.html"
        })
        .when("/blogs", {
            templateUrl: "templates/blogs.html"
        })
        .when("/services-upholstery", {
            templateUrl: "templates/services-upholstery.html"
        })
        .when("/services-reupholstery", {
            templateUrl: "templates/services-reupholstery.html"
        })
        .otherwise({redirectTo :'/'});



});