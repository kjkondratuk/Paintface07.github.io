(function() {
    'use strict';
    angular.module('homepage').config(Configuration);

    Configuration.$inject = [ '$stateProvider', '$urlRouterProvider' ];

    function Configuration($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home', {
            url: '/home',
            controller: "HomepageController",
            controllerAs: "ctrl",
            views: {
                "": {
                    templateUrl: '/dist/src/layout/layout.tpl.html'
                }, "header@home": {
                    templateUrl: '/dist/src/layout/header.tpl.html'
                }, "sidebar@home": {
                    templateUrl: '/dist/src/layout/sidebar.tpl.html'
                }, "body@home": {
                    templateUrl: '/dist/src/layout/body.tpl.html'
                }, "footer@home": {
                    templateUrl: '/dist/src/layout/footer.tpl.html'
                }
            }
        });
    }
})();
