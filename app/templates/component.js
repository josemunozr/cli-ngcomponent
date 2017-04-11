exports.componentTemplate =  (name) => {
  return `
(function (angular) {
  'use strict'

  var component = {
    templateUrl: ''
  }

  angular
    .module('${name}')
    .component('${name}', ${name})

})(window.angular);
`
}
