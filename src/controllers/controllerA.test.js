describe("controllerA",function(){
    var controller,
        $rootScope,
        scope,
        createController;
    
	beforeEach(module('controllers'));
	
    beforeEach(inject(function(_$rootScope_,$controller){        
        $rootScope = _$rootScope_;
        
        createController = function(scope){
            controller = $controller("controllerA", {$scope: scope});    
        }
    }));
    
	it("testing scope", inject(function($controller, $rootScope){        
		scope = $rootScope.$new();  
        createController(scope);
		expect(scope.title).toEqual("controllerA Title");
	}));
	
});