/**
 * controller for the root view
 * 
 * Created January 21st, 2015
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez LTD
 */

angular.module('MessageApp').controller('IndexCtrl', function($scope, $meteorCollection){
    
    /**
     * controller constructor
     */
    function _init(){
        $scope.messages = $meteorCollection(Messages);
        $scope.newMessage = '';
    }
    
    /**
     * when the user send a text message
     */
    $scope.sendText = function(){
        Messages.insert({message: $scope.newMessage});
        $scope.newMessage = '';    
    };
    
    _init();
    
});
