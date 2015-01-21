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
