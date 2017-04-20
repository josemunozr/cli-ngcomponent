exports.componentTemplate =  (name) => {
  return `(function (angular) {
  'use strict'

  angular
    .module('${name}')
    .component('${name}', {
      templateUrl : './${name}.tpl.html',
      controller : '${name}Controller',
      controllerAs : '$ctrl',
      bindings : {}
    })

})(window.angular)
`
}
