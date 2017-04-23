"use strict";

exports.controllerTemplate = function (name) {
  return "(function (angular) {\n  'use strict'\n\n  angular\n    .module('" + name + "')\n    .controller('" + name + "Controller', " + name + "Controller)\n\n    " + name + "Controller.$inject = []\n\n    function " + name + "Controller() {\n      var vm = this\n      vm.$onInit = _onInit\n\n      function _onInit () { }\n    }\n\n})(window.angular)\n";
};