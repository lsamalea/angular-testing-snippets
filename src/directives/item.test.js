describe('item', function () {

    var innerScope,
        parentScope,       
        directiveUse = "<li item='obj'></li",
        obj = { name: 'First'}, 
        linkTemplateToScope ; // function

    beforeEach(module('directives'));

    beforeEach(inject(function ($rootScope,$compile, $interpolate) {

        parentScope = $rootScope.$new();
        parentScope = angular.extend(parentScope, obj);
          
        var html = $interpolate(directiveUse)(parentScope);        
        
        var element = angular.element(html);
        var tpl = $compile(element);        
        innerScope = parentScope.$new();
        
        // functions
        
        linkTemplateToScope = function(scope){
            var el = tpl(scope); //el == element
            $rootScope.$digest();            
            return el;
        }
    }));

    describe('selecting techniques', function () {
        
        var element;
        
        beforeEach(inject(function () {
            element = linkTemplateToScope(parentScope);
        }));
        
        it('should have content equal obj name', function () {            
            expect(element.val()).toEqual(obj.name);
        });
    });
    
   
    describe('testing user interation', function () {
        
        it('should add a new item after submit', function () {    
            
            var element = linkTemplateToScope(innerScope);
            var $input = element.find('input').eq(0);
            var value = 'Olga Tagnon';      
            $input.val(value);
            
            var count = element.find('li').length;
            
            // Trigger submit using Enter key
            element.isolateScope().onSubmit({
                which: 13,
                preventDefault: function() {},
                target: $input[0]
            });
            
            innerScope.$digest();
            
            var newCount = element.find('li').length;

            expect(count).toBe(newCount - 1);
        });
        
        it('should add a the item in the end of the list after submit', function () {    
            
            var element = linkTemplateToScope(innerScope);
            // this directive create a isolated scope, you could use innerScope.$$childTail to get it... but element has a function for it
            //var isolatedScope = innerScope.$$childTail;
            var $input = element.find('input').eq(0);
            var value = 'Olga Tagnon';      
            $input.val(value);
            
            // Trigger submit using Enter key
            element.isolateScope().onSubmit({
                which: 13,
                preventDefault: function() {},
                target: $input[0]
            });
            
            innerScope.$digest(); 
            
            var li = element.find('li').last();

            expect(li.html()).toBe(value);
        });
        
    });

    
    
    
});
