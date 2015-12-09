import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Resource from 'angular-resource';
import <%= name %>Component from './<%= name %>.component';
import <%= name %>Factory from './<%= name %>.factory';
import config from '../../config';

let <%= name %>Module = angular.module('<%= name %>', [
  uiRouter,
  Resource
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('app.<%= name %>', {
      url: '/<%= name %>',
      views: {
	      'menuContent': {
	        templateUrl: config.pathHtml + '<%= name %>/<%= name %>.html',
		    }
	    }
    });
})

.directive('<%= name %>View', <%= name %>Component)
.factory('<%= name %>.factory', <%= name %>Factory); 

export default <%= name %>Module;
