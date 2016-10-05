(function() {
    'use strict';
    console.log('Instantiating service');

    angular.module('homepage').service('ConfigService', ConfigService);

    ConfigService.$inject = [ '$http' ];

    function ConfigService($http) {
        console.log('in config service');

        this.getHomepageConfig = function() {
            return $http.get('/dist/src/config/homepage.json');
        };
    }
})();