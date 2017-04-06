#!/usr/bin/env node
'use strict';

var _optimist = require('optimist');

var _optimist2 = _interopRequireDefault(_optimist);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _module = require('./app/templates/module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_module2.default);
//
// const argument = argv
//                   .usage('Usage: ngcomponent -c [nameComponet] -dir')
//                   .demand(['c'])
//                   .argv
//
// console.log('creating component...')
//
// // if(argument.dir){
// //   //create directory
// // }
// createComponent('module', 'component', 'controller')
//
// function createComponent(...params) {
//   let nameFile
//   params.map(function(item, i) {s
//     nameFile = `${argument.c}.${item}`
//     fs.writeFile(`${nameFile}.js`, 'componentJS', (err) => {
//       if (err) throw err
//     })
//   })
//
//   fs.writeFile(`${argument.c}.tpl.html`, `<h1>Component ${argument.c}</h1>`, (err) => {
//     if (err) throw err
//   })
// }
