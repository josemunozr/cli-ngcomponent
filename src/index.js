#!/usr/bin/env node
import argv from 'optimist'
import shell from 'shelljs'
import fs from 'fs'
import camelcase from 'lodash.camelcase'
import {moduleTemplate} from './templates/module'
import {controllerTemplate} from './templates/controller'
import {componentTemplate} from './templates/component'

const args = argv
              .usage('Create files necessary for a component\nUsage : ngcomponent [-c|-d|--help]')
              .default('c', 'test')
              .alias('c', 'create')
              .alias('d', 'dir')
              .describe('c', 'Create files')
              .describe('d', 'Create a directory')
              .describe('help', 'Get help to use CLI')
              .argv

  if(args._.length == 0){
    if (args.c == true) { args.c = 'test' }

    if (args.help) {
      console.log(argv.help())
    }else{
      createFiles('module.js', 'component.js', 'controller.js', 'tpl.html')
    }
  }else{
    console.log(new Error('Add necessary params'))
  }


function createFiles(...params) {
  if (args.d)
    createDir(args.c)

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
