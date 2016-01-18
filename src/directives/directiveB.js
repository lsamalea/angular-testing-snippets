angular.module('directives')
    .directive('directiveB', function() {
        return {
            restrict: 'E',
            template: '<div>Hello {{name}}</div>',
            // link: function(scope, element) {   
            //     scope.title1  = 'Nina';
            // }
    };
})