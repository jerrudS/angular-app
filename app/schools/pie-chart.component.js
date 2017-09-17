angular.
  module('myModule').
  component('pieChart', {
    template:
      '<div>' +
        '<h3 id="pie-title">Number of National Championships: Big Ten Schools</h3>' +
        '<canvas id="pie" class="chart chart-pie" chart-data="$ctrl.data" chart-colors="$ctrl.colors" chart-labels="$ctrl.labels" chart-options="options"></canvas>' +
      '</div>',
    controller: function PieChartController() {
      this.colors = ["rgb(255,128,0)", "rgb(153,0,0)", "rgb(255,255,0)", "rgb(255,0,0)", "rgb(0,153,0)", "rgb(255,255,51)", "rgb(102,0,0)", "rgb(255,26,0)", "rgb(51,0,102)", "rgb(257,0,0)", "rgb(0,0,51)", "rgb(204,204,0)", "rgb(255,51,51)", "rgb(258,0,0)"];
      this.labels = ['University of Illinois', 'Indiana University', 'University of Iowa', 'University of Maryland', 'Michigan State University', 'University of Michigan', 'University of Minnesota', 'University of Nebraska', 'Northwestern University', 'Ohio State University', 'Penn State University', 'Purdue University', 'Rutgers University', 'University of Wisconsin'];
      this.data = [18, 24, 25, 29, 20, 36, 19, 19, 8, 30, 48, 3, 1, 28];
    }
  });
