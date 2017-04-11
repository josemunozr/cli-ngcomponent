exports.controllerTemplate =  (name) => {
  return `
((function (angular) {
  'use strict'

  angular
    .module('${name}')
    .controller('${name}Controller', ${name}Controller)

    ${name}Controller.$inject = []

    function ${name}Controller() {
      var vm = this
    }

})(window.angular);
`
}
