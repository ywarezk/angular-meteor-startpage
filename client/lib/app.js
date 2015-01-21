angular.module('MessageApp', ['ui.router', 'angular-meteor']);
angular.module('MessageApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider.state('layout', {
        templateUrl: 'client/views/layout.tpl',
        controller: 'IndexCtrl',
        url: '/'
    });
    $urlRouterProvider.otherwise('/');
}]);
