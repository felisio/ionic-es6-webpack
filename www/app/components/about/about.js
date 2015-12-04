import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Resource from 'angular-resource';
import aboutComponent from './about.component';
import aboutFactory from './about.factory';
import config from '../../config';

let aboutModule = angular.module('about', [
  uiRouter,
  Resource
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('app.about', {
      url: '/about',
      views: {
	      'menuContent': {
	        templateUrl: `${config.pathHtml}about/about.html`
		    }
	    }
    });
})

.directive('aboutView', aboutComponent)
.factory('about.factory', aboutFactory); 

export default aboutModule;
