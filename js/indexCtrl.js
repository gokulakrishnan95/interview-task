
appRoot.controller('indexCtrl', ['$scope',  function ($scope) {

    var fetchingRecords = false;

   
    $scope.userslist = [];

    $scope.userslist =
        [
          {
            "Value": "1",
            "Key": "Rahul",
          },
          {
            "Value": "2",
            "Key": "Sudan",
          },
          {
            "Value": "3",
            "Key": "Mayank",
          },
          {
            "Value": "4",
            "Key": "Arunraj",
          }


        ]

    $scope.user = {
        "Value": "1",
            "Key": "search",
    };

 

}]);
