(function() {
    'use strict';

    angular.module('homepage').controller('HomepageController', HomepageController);

    function HomepageController() {
        console.log('IN CONTROLLER');
        var vm = this;
        vm.heading = 'The ol\' "homepage"';
    }
})();