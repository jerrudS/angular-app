angular.
  module('myModule').
  component('formElement', {
    template:
      '<div class="jumbotron welcome">' +
        '<form name="form" class="form-group" novalidate>' +
          '<label>Name: <input class="form-control" type="text" name="uName" ng-model="user.name" required="" /></label><br />' +
          '<div ng-show="form.$submitted || form.uName.$touched">' +
            '<div ng-show="form.uName.$error.required">What\'s your name?</div>' +
          '</div>' +
          '<label>E-mail: <input class="form-control" type="email" name="uEmail" ng-model="user.email" required="" /></label><br />' +
          '<div ng-show="form.$submitted || form.uEmail.$touched">' +
            '<span ng-show="form.uEmail.$error.required">What\'s your email.</span>' +
            '<span ng-show="form.uEmail.$error.email">This is not a valid email.</span>' +
          '</div>' +
          '<label>Favorite Big Ten School:<input class="form-control" type="text" name="uPref" ng-model="user.preference" required="" /></label><br />' +
          '<div ng-show="form.$submitted || form.uPref.$touched">' +
            '<div ng-show="form.uPref.$error.required">What\'s your favorite school?</div>' +
          '</div>' +
          '<button id="save-button" class="btn btn-primary" type="submit" ng-click="$ctrl.update(user)">Save</button>' +
        '</form>' +
      '</div>',
    controller: function formController() {
      this.master = {};

      this.update = function(user) {
        this.master = angular.copy(user);
        console.log(this.master)
      };
      this.reset = function(form) {
        if (form) {
          form.$setPristine();
          form.$setUntouched();
        }
        this.user = angular.copy(this.master);
      };

      this.reset();
    }
  });
