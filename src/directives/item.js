angular.module('directives')
    .directive('item', function() {
        return {
            restrict: 'A',
            require: "^itemlistCtrl", 
            //templateUrl: 'templates/directiveA.template.html',
            template: '<span ng-class="{"item-selected" : isSelected}" ng-click="select(item)"> {{item.name}} <span>',
            scope:{
                item:"=@item",                
            },
            link: function(scope, element, attrs, parentCtrl) {                
                scope.select = parentCtrl.selectItem;
                scope.isSelected = parentCtrl.isItemSelected;
            }
    };
});
