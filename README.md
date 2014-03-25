## angular-duoshuo
The duoshuo directive for angular

### Usage

1. config the `shortName` for duoshuo.
2. add directive `<div duoshuo="{{threadKey}}"></div>`, and replace `threadKey` with your own threadKey.

##### javascript
```js
var myApp = angular.module('myApp', ['ngDuoshuo']);

myApp.config(['$duoshuoProvider', function($duoshuoProvider){
    $duoshuoProvider.setShortName('short_name');
}]).controller('democontrol', ['$scope', function($scope){
    $scope.test = 'new';
}]);
```

##### html
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
        <div duoshuo="thread_key"></div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
    <script src="angular-duoshuo.js"></script>
    <script src="demo.js"></script>
</body>
</html>
```

### License
MIT