'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', function ($scope) {
        $scope.width = 800;
        $scope.height = 400;
        $scope.yAxis = "Sales";
        $scope.xAxis = "2014";
        $scope.min = 0;
        $scope.max = 4000;

        $scope.data = [
            {
                label: 'Январь',
                value: 50
            },
            {
                label: 'Февраль',
                value: 150
            }, {
                label: 'Март',
                value: 220
            }, {
                label: 'Апрель',
                value: 400
            }, {
                label: 'Май',
                value: 600
            }, {
                label: 'Июнь',
                value: 650
            }, {
                label: 'Июль',
                value: 759
            }, {
                label: 'Август',
                value: 900
            }, {
                label: 'Сентябрь',
                value: 1000
            }, {
                label: 'Октябрь',
                value: 1300
            }, {
                label: 'Ноябрь',
                value: 2700
            },
            {
                label: 'December',
                value: 3900
            },{
                label: 'Январь',
                value: 50
            },
            {
                label: 'Февраль',
                value: 150
            }, {
                label: 'Март',
                value: 220
            }, {
                label: 'Апрель',
                value: 400
            }, {
                label: 'Май',
                value: 600
            }, {
                label: 'Июнь',
                value: 650
            }, {
                label: 'Июль',
                value: 759
            }, {
                label: 'Август',
                value: 900
            }, {
                label: 'Сентябрь',
                value: 1000
            }, {
                label: 'Октябрь',
                value: 1300
            }, {
                label: 'Ноябрь',
                value: 2700
            },
            {
                label: 'December',
                value: 3900
            },{
                label: 'Январь',
                value: 50
            },
            {
                label: 'Февраль',
                value: 150
            }, {
                label: 'Март',
                value: 220
            }, {
                label: 'Апрель',
                value: 400
            }, {
                label: 'Май',
                value: 600
            }, {
                label: 'Июнь',
                value: 650
            }, {
                label: 'Июль',
                value: 759
            }, {
                label: 'Август',
                value: 900
            }, {
                label: 'Сентябрь',
                value: 1000
            }, {
                label: 'Октябрь',
                value: 1300
            }, {
                label: 'Ноябрь',
                value: 2700
            },
            {
                label: 'December',
                value: 3900
            },{
                label: 'Январь',
                value: 50
            },
            {
                label: 'Февраль',
                value: 150
            }, {
                label: 'Март',
                value: 220
            }, {
                label: 'Апрель',
                value: 400
            }, {
                label: 'Май',
                value: 600
            }, {
                label: 'Июнь',
                value: 650
            }, {
                label: 'Июль',
                value: 759
            }, {
                label: 'Август',
                value: 900
            }, {
                label: 'Сентябрь',
                value: 1000
            }, {
                label: 'Октябрь',
                value: 1300
            }, {
                label: 'Ноябрь',
                value: 2700
            },
            {
                label: 'December',
                value: 3900
            },{
                label: 'Январь',
                value: 50
            },
            {
                label: 'Февраль',
                value: 150
            }, {
                label: 'Март',
                value: 220
            }, {
                label: 'Апрель',
                value: 400
            }, {
                label: 'Май',
                value: 600
            }, {
                label: 'Июнь',
                value: 650
            }, {
                label: 'Июль',
                value: 759
            }, {
                label: 'Август',
                value: 900
            }, {
                label: 'Сентябрь',
                value: 1000
            }, {
                label: 'Октябрь',
                value: 1300
            }, {
                label: 'Ноябрь',
                value: 2700
            },
            {
                label: 'December',
                value: 3900
            },{
                label: 'Январь',
                value: 50
            },
            {
                label: 'Февраль',
                value: 150
            }, {
                label: 'Март',
                value: 220
            }, {
                label: 'Апрель',
                value: 400
            }, {
                label: 'Май',
                value: 600
            }, {
                label: 'Июнь',
                value: 650
            }, {
                label: 'Июль',
                value: 759
            }, {
                label: 'Август',
                value: 900
            }, {
                label: 'Сентябрь',
                value: 1000
            }, {
                label: 'Октябрь',
                value: 1300
            }, {
                label: 'Ноябрь',
                value: 2700
            },
            {
                label: 'December',
                value: 3900
            },
        ];

        $scope.max = 0;

        var arrLength = $scope.data.length;
        for (var i = 0; i < arrLength; i++) {
            // Найти максимальное значение на оси X
            if ($scope.data[i].value > $scope.max)
                $scope.max = $scope.data[i].value;
        }

    }]);