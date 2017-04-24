"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var moduleTemplate = function moduleTemplate(name) {
  return "(function (angular) {\n  'use strict'\n\n  angular\n    .module('" + name + "', [])\n\n})(window.angular)\n";
};

exports.default = moduleTemplate;