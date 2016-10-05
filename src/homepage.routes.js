// (function() {
    'use strict';
    console.log('Instantiating routing config');
    angular.module('homepage').config(Configuration);

    Configuration.$inject = [ '$stateProvider', '$urlRouterProvider' ];

    function Configuration($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home', {
            url: '/home',
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
// })();
