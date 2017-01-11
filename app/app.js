angular.module("components", []).directive("navigation", function() {
    return { restrict: 'E', templateUrl: '/app/components/navigation.html', replace: true }
});

angular.module("components").directive("slide1", function() {
    return {
        restrict: 'E',
        templateUrl: '/app/components/slide1.html',
        replace: true,
    }
});

angular.module("components").directive("slide2", function() {
    return {
        restrict: 'E',
        templateUrl: '/app/components/slide2.html',
        replace: true,
    }
});

angular.module("components").directive("slide3", function() {
    return {
        restrict: 'E',
        templateUrl: '/app/components/slide3.html',
        replace: true,
    }
});

var app = angular.module("Landing", ["components"]);