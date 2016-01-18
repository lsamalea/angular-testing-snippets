describe('directiveA', function () {

    var innerScope,
        parentScope,       
        directiveUse = "<directive-a title1='{{title1}}' title2='{{title2}}' names='{{names}}'></directive-a>", // 
        linkTemplateToScope ; // function

    beforeEach(module('directives'));

    beforeEach(inject(function ($rootScope,$compile, $interpolate) {

        parentScope = $rootScope.$new();
        var obj = {
                   title1: 'Big Ban Theory', 
                   title2: 'McDonald', 
                   names: ['Nina', 'Pinta', 'Santa Maria']
                   };
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
        
        it('should return an element using find()', function () {            
            var h2 = element.find('h2');
            expect(h2[0]).toBeDefined();
        });

        it('should return an element using querySelector and css selector', function () {
            var elementByClass = element[0].querySelector('.ce');
            expect(elementByClass).not.toBeNull();
        });
        
        it('should return an element using querySelector and css selector (not use toBeDefined)', function () {
            var elementByClass = element[0].querySelector('.cetete');  /// this class is not use in the directive 
            expect(elementByClass).toBeDefined(); // this is true... because value null is defined. 
        } );

        it('should ????????????????', function () {
            var h1 = element.find('h1');
            expect(h1.text()).toBe(parentScope.title1);
        });

        it('should ????????????????', function () {
            var h2 = element.find('h2');
            expect(h2.text()).toBe(parentScope.title2);
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
