'use strict';

/**
 * @ngdoc function
 * @name prototiposApp.controller:MiembrosCtrl
 * @description
 * # MiembrosCtrl
 * Controller of the prototiposApp
 */
angular.module('prototiposApp')

    .controller('MiembrosCtrl', function($scope, $http, $modal) {
        $http.get('http://localhost:9000/miembros.json').success(function(data) {
            $scope.miembros = data;
        })

        $scope.gridOptions = {
            data: 'miembros',
            showGroupPanel: true,
            enabledCellSelection: true,
            enableRowSelection: false,
            enableCellEdit: true,

            columnDefs: [{
                field: 'no',
                displayName: 'No.'
            }, {
                field: 'nombre',
                displayName: 'Nombre'
            }, {
                field: 'fidelidad',
                displayName: 'Puntos de Fidelidad'
            }, {
                field: 'fechaUnion',
                displayName: 'Fecha de Unión'
            }, {
                field: 'tipoMiembro',
                displayName: 'Tipo de Membresia'
            }]
        };

        $scope.showModa = function() {
            $scope.nuevoMiembro = {}
            var modalInstance = $modal.open({
                templateUrl: 'views/add-miembros.html',
                controller: 'AddNuevoMiembroCtrl',
                resolve: {
                    nuevoMiembro: function() {
                        return $scope.nuevoMiembro;
                    }
                }
            });

		    modalInstance.result.then(function(selecedItem) {
		        $scope.miembros.push({
		            no: $scope.miembros.length + 1,
		            nombre: $scope.nuevoMiembro.nombre,
		            tipoMiebro: $scope.nuevoMiembro.tipoMiembro,
		            fidelidad: $scope.nuevoMiembro.fidelidad,
		            fechaUnion: $scope.nuevoMiembro.fechaUnion
		        });
		    });
        }
    })

.controller('AddNuevoMiembroCtrl', function($scope, $modalInstance, nuevoMiembro) {

	$scope.nuevoMiembro=nuevoMiembro;
	$scope.salvarNuevoMiembro=function(){
		$modalInstance.close(nuevoMiembro)
	}

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    }

});
