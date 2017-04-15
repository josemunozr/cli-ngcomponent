#!/usr/bin/env node
import argv from 'optimist'
import shell from 'shelljs'
import fs from 'fs'
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
      file = `${args.c}/${file}`
    }

    crearFile(file, getTamplate(item, args.c))

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
  console.log(`creating ${nameFile} file...`)
  fs.writeFile(nameFile, templateFile, (err) => {
    if (err) throw err
  })
}
