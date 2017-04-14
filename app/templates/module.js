exports.moduleTemplate =  (name) => {
  return `(function (angular) {
  'use strict'

  angular
    .module('${name}', [])

})(window.angular)
`
}
