
/* eslint-disable no-var */
/* eslint-disable object-curly-newline */

/* global Chart */

/**
 * --------------------------------------------------------------------------
 * CoreUI Free Boostrap Admin Template (v2.1.11): main.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
// random Numbers
var random = function random() {
  return Math.random() * 2 + 2;
}; // eslint-disable-next-line no-unused-vars


// eslint-disable-next-line no-var
var lineChart = new Chart($('#canvas-1'), {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Loss of Control',
      backgroundColor: 'rgba(119, 153, 204, 1)',
      borderColor: 'rgba(192, 25, 51, 1)',
      pointBackgroundColor: 'rgba(192, 25, 51, 1)',
      pointBorderColor: '#fff',
      data: [random(), random(), random(), random(), random(), random(), random()]
    }]
  },
  options: {
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero:true,
              stepSize: 1,
              suggestedMax: 5
          }
      }]
  }
  }
// eslint-disable-next-line semi
}); // eslint-disable-next-line no-unused-vars

//# sourceMappingURL=charts.js.map
