exports.componentTemplate =  (name) => {
  return `
(function (angular) {
  'use strict'

  var ${name} = {
    templateUrl: './${name}.tpl.html'
  }

  angular
    .module('${name}')
    .component('${name}', ${name})

})(window.angular);
`
}
