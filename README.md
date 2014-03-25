## angular-duoshuo
The duoshuo directive for angular

### Usage

1. config the `shortName` for duoshuo.
2. add directive `<div duoshuo="{{duoshuo_thread_key}}"></div>`, and replace `duoshuo_thread_key` with your own duoshuo_thread_key.

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
        <div duoshuo="duoshuo_thread_key"></div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
    <script src="angular-duoshuo.js"></script>
    <script src="demo.js"></script>
</body>
</html>
```

### License
MIT