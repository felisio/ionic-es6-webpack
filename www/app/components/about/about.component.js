import template from './about.component.html';
import controller from './about.controller';

let aboutComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default aboutComponent;
