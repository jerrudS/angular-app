angular.
  module('myModule').
  component('formElement', {
    template:
      '<div class="jumbotron welcome">' +
        '<form novalidate class="form-group">' +
          '<label>Name: <input class="form-control" type="text" ng-model="user.name" /></label><br />' +
          '<label>E-mail: <input class="form-control" type="email" ng-model="user.email" /></label><br />' +
          '<label>Favorite Big Ten School:<input class="form-control" type="text" ng-model="user.preference" /></label><br />' +
          '<button id="save-button" class="btn btn-primary" type="submit" ng-click="$ctrl.update(user)">Save</button>' +
        '</form>' +
      '</div>',
    controller: function formController() {
      this.master = {};

      this.update = function(user) {
        this.master = angular.copy(user);
        console.log(this.master)
      };
    }
  });
