appControllers

    .controller("AdvicesCtrl", function ($scope, $location, AdvicesResolve, StrainResolve) {
        $scope.advices = AdvicesResolve.data;
        $scope.strains = StrainResolve;
    })

    .controller("AdvicesShowCtrl", function ($scope, Advice, StrainResolve) {
        $scope.advice = Advice.data[0];
        $scope.strains = StrainResolve;
    });

