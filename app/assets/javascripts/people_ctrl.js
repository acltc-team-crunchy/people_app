(function () {
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope, $http) {

  $scope.setup = function() {
    $http.get("/api/v1/people.json").then(function(response) {
      $scope.people = response.data;
    });
    console.log("hey what's up?");
  }

  $scope.addPerson = function(name, bio) {
    var person = {
      name: name,
      bio: bio,
      bioVisible: false
    }
    $scope.people.push(person);
  }

  $scope.toggleBio = function(person) {
    person.bioVisible = !person.bioVisible;
  }

  $scope.deletePerson = function(index) {
    $scope.people.splice(index, 1);
  }


  window.$scope = $scope;
  });
})();