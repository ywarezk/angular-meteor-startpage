/**
 * initiate angular app and define routes
 * 
 * Created January 22nd 2015
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez LTD
 */

angular.module('MessageApp', ['ui.router', 'angular-meteor']);
angular.module('MessageApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider.state('layout', {
        templateUrl: 'client/views/layout.tpl',
        controller: 'IndexCtrl',
        url: '/'
    });
    $urlRouterProvider.otherwise('/');
}]);
