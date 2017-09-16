angular.
  module('myModule').
  component('schoolsTable', {
      template:
        '<div class="table-responsive">' +
          '<h3>Big Ten Schools Table:</h3>' +
          '<p><span ng-bind="name"></span>, type to search for your favorite Big Ten School:<input type="text" ng-model="searchText" /></p>' +
          '<table class="table table-bordered">' +
            '<thead>' +
              '<tr class="info">' +
                '<th>School Name</th>' +
                '<th>Location</th>' +
                '<th>Logo</th>' +
              '</tr>' +
            '</thead>' +
            '<tbody>' +
              '<tr ng-repeat="school in $ctrl.schools | filter:searchText | orderBy: \'name\'">' +
                '<td>{{ school.name }}</td>' +
                '<td>{{ school.location }}</td>' +
                '<td><img id="logo" src="{{ school.logo }}" alt="this school\'s logo"/></td>' +
              '</tr>' +
            '</tbody>' +
          '</table>' +
        '</div>',
      controller: function SchoolsTableController() {
        this.schools = [
          { name:'University of Illinois', location:'Champaign, IL', logo:'images/illinois.png' },
          { name:'Indiana University', location:'Bloomington, IN', logo:'images/indiana.png'  },
          { name:'University of Iowa', location:'Iowa City, IA', logo:'images/iowa.png' },
          { name:'University of Maryland', location:'College Park, MD', logo:'images/maryland.png' },
          { name:'Michigan State University', location:'East Lansing, MI', logo:'images/michigan-state.png' },
          { name:'University of Michigan', location:'Ann Arbor, MI', logo:'images/michigan.png' },
          { name:'University of Minnesota', location:'Minneapolis, MN', logo:'images/minnesota.png' },
          { name:'University of Nebraska', location:'Lincoln, NE', logo:'images/nebraska.png'  },
          { name:'Northwestern University', location:'Evanston, IL', logo:'images/northwestern.png' },
          { name:'Ohio State University', location:'Columbus, OH', logo:'images/ohio-state.png' },
          { name:'Penn State University', location:'State College, PA', logo:'images/penn-state.png' },
          { name:'Purdue University', location:'West Lafayette, IN', logo:'images/purdue.png' },
          { name:'Rutgers University', location:'New Brunswick, NJ', logo:'images/rutgers.png' },
          { name:'University of Wisconsin', location:'Madison, WI', logo:'images/wisconsin.png' }
        ];
      }
    });
