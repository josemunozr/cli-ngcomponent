#!/usr/bin/env node
import argv from 'optimist'
import fs from 'fs'
import {moduleTemplate} from './app/templates/module'
import {controllerTemplate} from './app/templates/controller'
import {componentTemplate} from './app/templates/component'

const argument = argv
                  .usage('Usage: ngcomponent -c [nameComponet] -dir')
                  .demand(['c'])
                  .argv

console.log('creating component...')

// if(argument.dir){
//   //create directory
// }

createComponent('module', 'component', 'controller')

function createComponent(...params) {
  params.map(function(item, i) {
    fs.writeFile(`${argument.c}.${item}.js`, getTamplate(item, argument.c) , (err) => {
      if (err) throw err
    })
  })

  fs.writeFile(`${argument.c}.tpl.html`, `<h1>Component ${argument.c}</h1>`, (err) => {
    if (err) throw err
  })
}

function getTamplate(item, arg) {
  if (item == 'module')
    return moduleTemplate(arg)

  if (item == 'component')
    return componentTemplate(arg)

  if (item == 'controller')
    return controllerTemplate(arg)

}
