appServices
    .service('Advices', function ($http) {
        return {
            all: function (page, perPage) {
                return $http.get('https://cannasos.com/api/advices?page=' + page + '&perPage=' + perPage + '&fields=title')
            },
            get: function (id) {
                return $http.get('https://cannasos.com/api/advices?_id=' + id)
            }
        };
    }
)
    .service('Strains', function ($http, serviceCache) {
        return {
            all: function () {
                //serviceCache.clear()
                if (serviceCache.get('Strains')) {
                    return serviceCache.get('Strains')
                } else {
                    $http.get('https://cannasos.com/api/strains?page=1&perPage=5').success(function (data) {
                        serviceCache.set('Strains', data)
                    })
                    return serviceCache.get('Strains');
                }
            }
        };
    }
);