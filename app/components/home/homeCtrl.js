angular.module("myAppHomeCtrl", []).controller("homeCtrl", [
  "$scope",
  "homeContent",
  function ($scope, homeContent) {
    $scope.dataset = homeContent.getContent();
    $scope.header = homeContent.getHeader();
    $scope.subheading = homeContent.getSubheader();
    homeContent.getCartoes($scope);
  },
]);
