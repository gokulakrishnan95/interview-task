angular.module('angular-select', []).directive('selectdirective', function ($rootScope) {
    return {
        replace: true,
        restrict: 'E',
        scope: {
            values: "=",
            selecteditem: "=",
            key: "@",
            onscroll: "&",
            totalrecords: "="
        },

        template: `<div class="selectdirective col-lg-4" uib-dropdown keyboard-nav="true" auto-close="outsideClick" ng-class="{ active: showList }">
        <button type="button " ng-click="showdropdown=!showdropdown;" aria-label="Left Align" class="btn btn-primary btn-block" uib-dropdown-toggle>
					{{selecteditem[key]}} <span class="caret"></span>
		</button>
              
                <div class="search dropdown col-lg-12" uib-dropdown-menu role="menu" ng-show="showdropdown">
                    <div uib-dropdown-menu class="input-group">
                        <input type="text" ng-model="searchKey" class="form-control" placeholder="Type 3 characters to start search" ng-change="textChanged(searchKey)">
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="button"><i class="glyphicon glyphicon-search"></i></button>
                        </span>
                    </div><!-- /input-group -->
                                    
                <ul class="dropdown list-unstyled option-list">       
                    <li ng-repeat="item in values | filter : searchKey" ng-click="selectItem(item)" ng-if="values.length > 0">
                        <span>{{item[key]}}</span>
                        <i class="glyphicon glyphicon-ok" ng-show="selecteditem[key] === item[key]"></i>
                    </li>
                    <li ng-if="values.length == 0">
                        No Records
                    </li>
                </ul>
            </div>
            </div>`,
        link: function (scope, elm, attr) {

            scope.showList = false;

            scope.selectItem = function (item) {
                scope.selecteditem = item;
                scope.showdropdown = false;
            };

            scope.isActive = function (item) {
                return item[scope.key] === scope.selecteditem[scope.key];
            };

         

            $rootScope.$on("documentClicked", function (inner, target) {

                var isSearchBox = ($(target[0]).is(".selectdirective")) || ($(target[0]).parents(".selectdirective").length > 0);

                if (!isSearchBox)
                    scope.$apply(function () {
                        scope.showList = false;
                    });
            });

           

        }
    };
});

