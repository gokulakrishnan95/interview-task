
appRoot.controller('indexCtrl', ['$scope',  function ($scope) {

    var fetchingRecords = false;

   
    $scope.userslist = [];

    $scope.userslist =
        [
          {
            "id": "1",
            "name": "Rahul",
          },
          {
            "id": "2",
            "name": "Sudan",
          },
          {
            "id": "3",
            "name": "Mayank",
          },
          {
            "id": "4",
            "name": "Arunraj",
          }


        ]

    $scope.user = {
          "name": "search",
    };

 

}]);
