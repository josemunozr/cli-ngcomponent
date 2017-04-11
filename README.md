# CLI-NgComponent

CLI (Command Line Interface) to create component for angularjs1.5+

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

#### 'test.tpl.html'
```javascript
<h1>Component test</h1>
```

### Licence
Licensed under the MIT license.
