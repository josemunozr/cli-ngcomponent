#!/usr/bin/env node
import argv from 'optimist'
import util from './util'

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
      generateFiles('module.js', 'component.js', 'controller.js', 'tpl.html')
    }
  }else{
    console.log(new Error('Add necessary params'))
  }


function generateFiles(...params) {
  if (args.d)
    util.createDir(args.c)

  params.map((item, i) => {
    let file = ''

    file = `${args.c}.${item}`

    if(args.dir) {
      file = `${args.c.toLowerCase()}/${file}`
    }
    util.crearFile(file.toLowerCase(), util.getTamplate(item, args.c))

  })
}
