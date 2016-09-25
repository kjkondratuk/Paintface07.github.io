(function() {
    'use strict';
    angular.module('homepage').config(Configuration);

    Configuration.$inject = [ '$stateProvider', '$urlRouterProvider' ];

    function Configuration($stateProvider, $urlRouterProvider) {
        $stateProvider.state({

        });

        $urlRouterProvider.otherwise('/');
    }
})();
