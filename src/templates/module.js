const moduleTemplate =  (name) => {
  return `(function (angular) {
  'use strict'

  angular
    .module('${name}', [])

})(window.angular)
`
}

export default moduleTemplate
