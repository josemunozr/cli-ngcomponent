(function (angular) {
  'use strict'

  angular
    .module('module')
    .controller('component', component)

    component.$inject = []

    function component() {
      var vm = this
    }

})(window.angular);
