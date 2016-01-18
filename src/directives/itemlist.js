angular.module('directives')
    .directive('itemList', function() {
        return {
            restrict: 'E',
            //templateUrl: 'templates/directiveA.template.html',
            template: '<ul> <li ng-repeat="item in items" item="item"></li></ul>',
            scope:{
                items:"=@items",
                select:"=&onSelect"                
            },
            controller: "ItemlistCtrl",
            controllerAs: "vm",
            link: function(scope, element, attrs, parentCtrl) {                
                scope.select = function() {parentCtrl.select(this); }
                scope.isSelected = parentCtrl.isItemSelected;
            }
    };
});