import template from './<%= name %>.component.html';
import controller from './<%= name %>.controller';

let <%= name %>Component = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default <%= name %>Component;
