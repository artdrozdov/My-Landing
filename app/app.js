angular.module("components", []).directive("navigation", function() {
    return { restrict: 'E', templateUrl: '/app/components/navigation.html' }
});

angular.module("Landing", ["components"]);