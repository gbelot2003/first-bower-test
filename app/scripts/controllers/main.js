'use strict';

/**
 * @ngdoc function
 * @name prototiposApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototiposApp
 */
angular.module('prototiposApp')
  .controller('MainCtrl', function ($scope) {
  	var baseUrl= 'http://lorempixel.com/940/420/';
  	$scope.setInterval=5000;

  	$scope.slides = 
  		[{ 
	  		title:'Aprende Matematicas',
	  		image:baseUrl+'sports/',
	  		text:'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>'
	  	},
	  	{ 
	  		title:'Buena Alimentacion',
	  		image:baseUrl+'food/',
	  		text:'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>'
	  	},
	  	{ 
	  		title:'En Contacto con la naturaleza',
	  		image:baseUrl+'nature/',
	  		text:'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>'
	  	}];

	var baseURL='http://lorempixel.com/200/200/';
	$scope.contenido=[
		{
			img:baseURL+'people',
			title:'Sobre Nosotros',
			summary:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
		},
		{
			img:baseURL+'business',
			title:'Nuestros Servicios',
			summary:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
		},
		{
			img:baseURL+'transport',
			title:'Contactenos',
			summary:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
		}
	];

  });
