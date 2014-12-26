app.config(
    function ($routeProvider) {
        $routeProvider
            .when('/advice', {
                templateUrl: 'advices.html',
                controller: 'AdvicesCtrl',
                resolve: {
                    AdvicesResolve: function (Advices, $route) {
                        if ($route.current.params.page && $route.current.params.perPage) {
                            return Advices.all($route.current.params.page, $route.current.params.perPage)
                        } else {
                            return Advices.all(1, 5)
                        }
                    },
                    StrainResolve: function (Strains) {
                        return Strains.all();
                    }
                }
            })
            .when('/advice/:adviceId', {
                templateUrl: 'advice.html',
                controller: 'AdvicesShowCtrl',
                resolve: {
                    Advice: function (Advices, $route) {
                        return Advices.get($route.current.params.adviceId)
                    },
                    StrainResolve: function (Strains) {
                        return Strains.all();
                    }
                }
            })
            .otherwise({redirectTo: '/advice'});
    }
);