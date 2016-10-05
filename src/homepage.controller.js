(function() {
    'use strict';
    console.log('Instantiating controller');

    angular.module('homepage').controller('HomepageController', HomepageController);

    HomepageController.$inject = [ 'ConfigService', 'ArticleService' ];

    function HomepageController(ConfigService, ArticleService) {
        var vm = this;

        console.log('In controller.');

        ConfigService.getHomepageConfig().then(function(result) {
            console.log('returned successfully');
            vm.model = result.data;
            vm.model.displayArticles = [];
            console.log(result.data);
            for(var a in vm.model.articles) {
                ArticleService.getArticleByName(vm.model.articles[a]).then(function (result) {
                    vm.model.displayArticles.push(result.data);
                    console.log(vm.model);
                }, function (error) {
                    console.log('returned article with error');
                    vm.error = result;
                });
            }
        }, function(result) {
            console.log('returned with error');
            vm.error = result;
        });
    }
})();