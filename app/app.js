#!/usr/bin/env node
import argv from 'optimist'
import fs from 'fs'

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
  let nameFile
  params.map(function(item, i) {s
    nameFile = `${argument.c}.${item}`
    fs.writeFile(`${nameFile}.js`, 'componentJS', (err) => {
      if (err) throw err
    })
  })

//   fs.writeFile(`${argument.c}.tpl.html`, `<h1>Component ${argument.c}</h1>`, (err) => {
//     if (err) throw err
//   })
// }
