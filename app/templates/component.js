exports.componentTemplate =  (name) => {
  return `
(function (angular) {
  'use strict'

  var component = {
    templateUrl: './${name}.tpl.html'
  }

  angular
    .module('${name}')
    .component('${name}', ${name})

})(window.angular);
`
}
