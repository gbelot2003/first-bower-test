'use strict';

/**
 * @ngdoc function
 * @name prototiposApp.controller:GaleriaCtrl
 * @description
 * # GaleriaCtrl
 * Controller of the prototiposApp
 */
angular.module('prototiposApp')
    .controller('GaleriaCtrl', function($scope) {
        var pictures = $scope.pictures = [];

        var baseURL = "http://lorempixel.com/300/180/";

        var titles = ["Comida Sana", "Salud y trabajo", "Vida en la Ciudad", "Mantente activo", "Cuida tu aspecto", "¡¡Vida Nopturna!!"];

        var keywords = ["food/", "business/", "city/", "sports/", "fashion/", "nightlife/"];

        var dummyText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.";

        $scope.addPics = function(i) {
            pictures.push({
                url: baseURL + keywords[i],
                title: titles[i],
                summary: dummyText
            })
        };

        for (var i = 0; i < 5; i++) {
            $scope.addPics(i);
        }

        $scope.rate = 0;
        $scope.max = 10;
        $scope.isReadonly = false;

    });