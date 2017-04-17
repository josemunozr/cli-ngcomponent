# CLI-NgComponent

CLI (Command Line Interface) to create component files for angularjs1.5+

## Install
```javascript
  npm install -g cli-ngcomponent
```
### Example

```javascript
  ngcomponent -c nameComponent
  //creates:
  //nameComponent.module.js
  //nameComponent.controller.js
  //nameComponent.component.js
  //nameComponent.tpl.html

  ngcomponent -c nameComponent --dir
  //creates:
  //nameComponent/nameComponent.module.js
  //nameComponent/nameComponent.controller.js
  //nameComponent/nameComponent.component.js
  //nameComponent/nameComponent.tpl.html

```
#### ngcomponent --help
```javascript
Create files necessary for a component
Usage : ngcomponent [-c|-d|--help]

Options:
  -c, --create  Create files         [default: "test"]
  -d, --dir     Create a directory
  --help        Get help to use CLI
```

### Result

#### 'test.module.js'
```javascript
(function (angular) {
  'use strict'

  angular
    .module('test', [])

})(window.angular)
```

#### 'test.controller.js'
```javascript
(function (angular) {
  'use strict'
  angular
    .module('test')
    .controller('testController', testController)

    testController.$inject = []

    function testController() {
      var vm = this
    }
})(window.angular)
```

### 'test.component.js'
```javascript
(function (angular) {
'use strict'

angular
  .module('test')
  .component('test', {
    templateUrl : './test.tpl.html',
    controller : 'testController',
    controllerAs : '$ctrl',
    bindings : {}
  })

})(window.angular)
```

#### 'test.tpl.html'
```javascript
<h1>Component test</h1>
```

### Licence
Licensed under the MIT license.
