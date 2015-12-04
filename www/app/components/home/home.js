import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Resource from 'angular-resource';
import homeComponent from './home.component';
import homeFactory from './home.factory';
import config from '../../config';

let homeModule = angular.module('home', [
  uiRouter,
  Resource
])
 
.config(($stateProvider, $urlRouterProvider) => {  
  "ngInject";

  $stateProvider
    .state('app.home', {
      url: '/home',
      views: {
	      'menuContent': {
	        templateUrl: `${config.pathHtml}home/home.html`
		    }
	    }
    });
})

.directive('home', homeComponent)
.factory('home.factory', homeFactory); 

export default homeModule;
