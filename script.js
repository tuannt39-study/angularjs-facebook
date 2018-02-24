var myApp = angular.module('myApp',[]);
myApp.controller('myController', ['$scope', '$window', function($scope, $window) {
  $scope.facebook = {
    username: '',
    email: ''
  }

  $scope.onFBLogin = function () {
    FB.login(function (response) {
      console.log(response);
      if (response.authResponse) {
        FB.api('/me', 'GET', {fields: 'email, first_name, name, id, picture'}, function (response) {
          console.log(response);
          $scope.$apply(function (){
            $scope.facebook.username = response.name;
            $scope.facebook.email = response.email;
            $scope.fb_image = response.picture.data.url;
          })
        });
      } else {
        // error
      }
    }, {
      scope: 'email, user_likes',
      return_scopes: true
    });
  };
}])
