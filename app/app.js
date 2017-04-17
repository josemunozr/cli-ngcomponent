#!/usr/bin/env node
import argv from 'optimist'
import shell from 'shelljs'
import fs from 'fs'
import camelcase from 'lodash.camelcase'
import {moduleTemplate} from './app/templates/module'
import {controllerTemplate} from './app/templates/controller'
import {componentTemplate} from './app/templates/component'

const args = argv
              .usage('Create files necessary for a component\nUsage : ngcomponent [-c|-d|--help]')
              .default('c', 'test')
              .alias('c', 'create')
              .alias('d', 'dir')
              .describe('c', 'Create files')
              .describe('d', 'Create a directory')
              .describe('help', 'Get help to use CLI')
              .argv

if (args.help) {
  console.log(argv.help())
}else{
  if (args.d){ createDir(args.c) }
  createFiles('module.js', 'component.js', 'controller.js', 'tpl.html')
}


function createFiles(...params) {
  params.map((item, i) => {
    let file = ''

    file = `${args.c}.${item}`

    if(args.dir) {
      file = `${args.c.toLowerCase()}/${file}`
    }
    crearFile(file.toLowerCase(), getTamplate(item, args.c))

  })
}

function getTamplate(item, arg) {
  if (item == 'module.js')
    return moduleTemplate(camelcase(arg))

  if (item == 'component.js')
    return componentTemplate(camelcase(arg))

  if (item == 'controller.js')
    return controllerTemplate(camelcase(arg))

  if (item == 'tpl.html')
    return `<h1>Component ${camelcase(arg)}</h1>`

}

function createDir(nameDir) {
  shell.mkdir('-p', nameDir.toLowerCase())
}

function crearFile(nameFile, templateFile) {
  console.log(`creating ${nameFile} file...`)
  fs.writeFile(nameFile, templateFile, (err) => {
    if (err) throw err
  })
}
