#!/usr/bin/env node
import argv from 'optimist'
import shell from 'shelljs'
import fs from 'fs'
import {moduleTemplate} from './app/templates/module'
import {controllerTemplate} from './app/templates/controller'
import {componentTemplate} from './app/templates/component'

const argument = argv
                  .usage('Usage: ngcomponent -c [nameComponet] --dir')
                  .demand(['c'])
                  .argv

console.log('creating component...')

if(argument.dir){
  createDir(argument.c)
}

createComponents('module.js', 'component.js', 'controller.js', 'tpl.html')

function createComponents(...params) {
  params.map((item, i) => {
    let file = ''

    file = `${argument.c}.${item}`

    if(argument.dir) {
      file = `${argument.c}/${file}`
    }

    crearFile(file, getTamplate(item, argument.c))

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

function createDir(nameDir) {
  shell.mkdir('-p',nameDir)
}

function crearFile(nameFile, templateFile) {
  fs.writeFile(nameFile, templateFile, (err) => {
    if (err) throw err
  })
}
