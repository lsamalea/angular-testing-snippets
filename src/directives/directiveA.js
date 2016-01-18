angular.module('directives')
    .directive('directiveA', function() {
        return {
            restrict: 'E',
            // templateUrl: 'templates/directiveA.template.html',
            template: '<h1>{{title1}}</h1><div class="ce">    <h2>{{title2}}</h2>         <ul>        <li ng-repeat="name in names">{{name}}</li>    </ul></div>',
            scope:{
                title1:"@",
                title2:"@",
                names: "="
            },
            link: function(scope, element) {
                scope.onSubmit = function(event) {
                    if (event.which === 13) {
                        var input = event.target;
                        scope.names.push(input.value);
                     }
                }

            }
    };
})