"use strict";

exports.componentTemplate = function (name) {
  return "(function (angular) {\n  'use strict'\n\n  angular\n    .module('" + name + "')\n    .component('" + name + "', {\n      templateUrl : './" + name + ".tpl.html',\n      controller : '" + name + "Controller',\n      controllerAs : '$ctrl',\n      bindings : {}\n    })\n\n})(window.angular)\n";
};