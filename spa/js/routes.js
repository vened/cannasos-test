app.config(
	function ($routeProvider)
	{
		$routeProvider
			.when('/advice', {
				templateUrl: 'advices.html',
				controller : 'AdvicesCtrl',
				resolve    : {
					AdvicesResolve: function ($route, Advices)
					{
						if ($route.current.params.page && $route.current.params.perPage)
						{
							return Advices.all({page: $route.current.params.page, perPage: $route.current.params.perPage, fields: 'title,strain'});
						}
						else
						{
							return Advices.all({page: 1, perPage: 5, fields: 'title,strain'})
						}
					}
				}
			})
			.when('/advice/:adviceId', {
				templateUrl: 'advice.html',
				controller : 'AdvicesShowCtrl',
				resolve    : {
					Advice       : function (Advices, $route)
					{
						//return Advice.get()
						return Advices.all({_id: $route.current.params.adviceId})
					}
				}
			})
			.otherwise({redirectTo: '/advice'});
	}
);