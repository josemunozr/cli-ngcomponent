"use strict";

exports.moduleTemplate = function (name) {
  return "(function (angular) {\n  'use strict'\n\n  angular\n    .module('" + name + "', [])\n\n})(window.angular)\n";
};