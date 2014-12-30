appControllers

    .controller("AdvicesCtrl", function ($scope, AdvicesResolve) {
        $scope.advices = AdvicesResolve.data;
    })

    .controller("AdvicesShowCtrl", function ($scope, Advice) {
        $scope.advice = Advice.data[0];
    });

