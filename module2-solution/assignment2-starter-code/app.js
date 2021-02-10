(function() {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
		.controller('AlreadyBoughtController', AlreadyBoughtController)
		.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
	ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        this.items = ShoppingListCheckOffService.getToBuyItems();
        this.CheckOff = function(i) { ShoppingListCheckOffService.CheckOff(i); };
    }

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        this.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var ToBuyArray = [{
                name: "oranges",
                quantity: "10"
            },
			{
                name: "apples",
                quantity: "7"
            },
			{
                name: "bananas",
                quantity: "5"
            },
			{
                name: "pears",
                quantity: "3"
            },
            {
                name: "watermelon",
                quantity: "1"
            }
        ];
        var AlreadyBoughtArray = [];
        this.getToBuyItems = function() {
            return ToBuyArray;
        };
        this.getAlreadyBoughtItems = function() {
            return AlreadyBoughtArray;
        };
		this.CheckOff = function(i) {
            AlreadyBoughtArray.push(ToBuyArray[i]);
            ToBuyArray.splice(i, 1);
        };
    }
})();