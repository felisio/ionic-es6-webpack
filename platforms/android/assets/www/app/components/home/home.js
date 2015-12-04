import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter
])
 
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('app.home', {
      url: '/home',
      views: {
	      'menuContent': {
	        templateUrl: 'app/components/home/home.html',
		  }
	    }
    });
})

.directive('home', homeComponent);

export default homeModule;
