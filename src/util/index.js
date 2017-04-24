import shell from 'shelljs'
import fs from 'fs'
import camelcase from 'lodash.camelcase'
import moduleTemplate from '../templates/module'
import controllerTemplate from '../templates/controller'
import componentTemplate from '../templates/component'

const _createDir = (nameDir) => {
  shell.mkdir('-p', nameDir.toLowerCase())
}

const _crearFile = (nameFile, templateFile) => {
  console.log(`creating ${nameFile} file...`)
  fs.writeFile(nameFile, templateFile, (err) => {
    if (err) throw err
  })
}

const _getTamplate = (item, arg) => {
  if (item == 'module.js')
    return moduleTemplate(camelcase(arg))

  if (item == 'component.js')
    return componentTemplate(camelcase(arg))

  if (item == 'controller.js')
    return controllerTemplate(camelcase(arg))

  if (item == 'tpl.html')
    return `<h1>Component ${camelcase(arg)}</h1>`

}


const util = {
  createDir : _createDir,
  crearFile : _crearFile,
  getTamplate : _getTamplate

}

export default util
