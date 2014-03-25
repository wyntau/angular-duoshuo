var myApp = angular.module('myApp', ['ngDuoshuo']);

myApp.config(['$duoshuoProvider', function($duoshuoProvider){
    $duoshuoProvider.setShortName('isayme');
}]).controller('democontrol', ['$scope', function($scope){
    $scope.test = 'new';
}]);