appDirectives.directive('paging', [
    '$templateCache',
    '$location',
    function ($templateCache, $location) {
        return {
            replace: true,
            template: $templateCache.get("paging.html"),
            scope: {
                page: '@',
                pagesCount: '@',
                perPages: '@'
            },
            link: function ($scope) {

                $scope.paging = function (i) {
                    var url = {page: i, perPage: $scope.perPages}
                    $location.search(url);
                }

                if($location.search().page){
                    var currentPage = $location.search().page;
                }else{
                    var currentPage = $scope.page;
                }
                
                $scope.countPages = [];
                for (var i = 1; i <= $scope.pagesCount; i++) {
                    if (i != currentPage) {
                        $scope.countPages.push({item: i, current: false});
                    } else {
                        $scope.countPages.push({item: i, current: true});
                        var url = {page: currentPage, perPage: $scope.perPages}
                        $location.search(url);
                    }
                }
            }
        }
    }])