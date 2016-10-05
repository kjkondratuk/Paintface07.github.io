(function() {
    'use strict';
    console.log('Instantiating article service');

    angular.module('homepage').service('ArticleService', ArticleService);

    ArticleService.$inject = [ '$sce', '$http' ];

    function ArticleService($sce, $http) {

        this.getArticleByName = function(articleName) {
            return $http.get(articleName).then(function(result) {
                var htmlContent = result.data.content.join('\n');
                result.data.content = $sce.trustAsHtml(htmlContent);
                return result;
            }, function(error) {
                console.log('error in article service');
            });
        };
    }
})();