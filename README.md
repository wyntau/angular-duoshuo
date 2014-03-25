## angular-duoshuo
The duoshuo directive for angular

### Status
angular-duoshuo support all duoshuo `data-*` option

### Usage

1. config the `shortName` for duoshuo.
2. add directive `<duoshuo data-thread-key="thread_key"></duoshuo>`, and replace `thread_key` with your own thread_key.

##### demo.js
```js
var myApp = angular.module('myApp', ['ngDuoshuo']);

myApp.config(['$duoshuoProvider', function($duoshuoProvider){
    $duoshuoProvider.setShortName('short_name');
}]).controller('democontrol', ['$scope', function($scope){
    $scope.test = 'new';
}]);
```

##### index.html
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>angular-duoshuo demo</title>
</head>
<body ng-app="myApp">
    <div ng-controller="democontrol">
        {{test}} should equal to <em>new</em>
        <duoshuo data-thread-key="thread_key"></duoshuo>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
    <script src="angular-duoshuo.js"></script>
    <script src="demo.js"></script>
</body>
</html>
```

### License
MIT