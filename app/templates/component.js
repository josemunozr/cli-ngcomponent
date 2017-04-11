exports.componentTemplate =  (name) => {
  return `
(function (angular) {
  'use strict'

  var ${name} = {
    templateUrl: './${name}.tpl.html',
    controller: '${name}Controller'
  }

  angular
    .module('${name}')
    .component('${name}', ${name})

})(window.angular);
`
}
