import template from './menu.html';
import controller from './menu.controller';

let menuComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default menuComponent;
