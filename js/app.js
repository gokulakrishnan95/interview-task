var appRoot = angular.module('searchAndSelectApp', ['angular-select']);  

appRoot.run(function ($rootScope) {
    angular.element(document).on("click", function (e) {
        $rootScope.$broadcast("documentClicked", angular.element(e.target));
    });
});

