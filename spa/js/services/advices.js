appServices
	.service('Advices', function ($http, StrainResource, cache)
	{
		return {
			all: function (obj)
			{
				function appendTransform(defaults, transform)
				{
					defaults = angular.isArray(defaults) ? defaults : [defaults];
					return defaults.concat(transform);
				}

				function doTransform(data)
				{
					var val = [];
					angular.forEach(data, function (value)
					{
						if (value.strain)
						{
							StrainResource.get(value.strain._id).then(function (data)
							{
								value.strain = data;
							});
						}
						this.push(value);
					}, val)
					return val;
				}

				var advices = $http({
					url              : 'https://cannasos.com/api/advices',
					method           : 'GET',
					params           : obj,
					transformResponse: appendTransform($http.defaults.transformResponse, function (value)
					{
						return doTransform(value);
					})
				})
				return advices;
			}
		}
	})


	.service('StrainResource', function ($q, $http, cache)
	{
		return {
			get: function (strainId)
			{
				function appendTransform(defaults, transform)
				{
					defaults = angular.isArray(defaults) ? defaults : [defaults];
					return defaults.concat(transform);
				};


				function doTransform(data)
				{
					cache.put('strain' + strainId, data);
					return data;
				};

				var deferred = $q.defer();
				if (cache.get('strain' + strainId))
				{
					deferred.resolve(cache.get('strain' + strainId));
				}
				else
				{
					$http({
						url              : 'https://cannasos.com/api/strains',
						method           : 'GET',
						params           : {_id: strainId},
						transformResponse: appendTransform($http.defaults.transformResponse, function (value)
						{
							return doTransform(value);
						})
					}).success(function (data)
					{
						deferred.resolve(data);
					})
				}
				;
				return deferred.promise;
			}
		}
	});