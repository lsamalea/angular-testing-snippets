angular.module("directives")
       .controller("ItemlistCtrl",ItemlistCtrl);

ItemlistCtrl.$inject = ["$scope"];

function ItemlistCtrl($scope){

}

ItemlistCtrl.prototype.itemSelected = null;

ItemlistCtrl.prototype.isItemSelected = function(item){
        return item == this.itemSelected;
}  

ItemlistCtrl.prototype.selectedItem = function(item){
        this.itemSelected = item;
}  