var myApp = angular.module('myApp', ['meDuoshuo']);

myApp.config(['$duoshuoProvider', function($duoshuoProvider){
    $duoshuoProvider.setShortName('isayme');
}]).controller('democontrol', ['$scope', function($scope){
    $scope.test = 'new';
}]);