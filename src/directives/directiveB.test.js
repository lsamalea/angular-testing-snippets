describe('directiveB', function () {
    var element,
        name = 'Homer';
    beforeEach(function () {
        module('directives');
        element = angular.element('<directive-b/>');
    	inject(function ($rootScope, $compile) {
            var scope = $rootScope.$new();
			scope.name = name;
			$compile(element)(scope);
			scope.$digest();
		});
    });
    it('says hello', function () {
        expect(element.text()).toBe('Hello Homer');
    });
});