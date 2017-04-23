/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function() {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    );

  if ('serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      // updatefound is fired if service-worker.js changes.
      registration.onupdatefound = function() {
        // updatefound is also fired the very first time the SW is installed,
        // and there's no need to prompt for a reload at that point.
        // So check here to see if the page is already controlled,
        // i.e. whether there's an existing service worker.
        if (navigator.serviceWorker.controller) {
          // The updatefound event implies that registration.installing is set:
          // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
          var installingWorker = registration.installing;

          installingWorker.onstatechange = function() {
            switch (installingWorker.state) {
              case 'installed':
                // At this point, the old content will have been purged and the
                // fresh content will have been added to the cache.
                // It's the perfect time to display a "New content is
                // available; please refresh." message in the page's interface.
                break;

              case 'redundant':
                throw new Error('The installing ' +
                                'service worker became redundant.');

              default:
                // Ignore
            }
          };
        }
      };
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  }

  // Your custom JavaScript goes here
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawCharts);

  function drawCharts() {
    drawChartOne();
    // drawChartTwo();
  }

  function resize () {
    drawChartOne();
  }
  if (window.addEventListener) {
      window.addEventListener('resize', resize);
  }
  else {
      window.attachEvent('onresize', resize);
  }

  function drawChartOne() {
    // var data = google.visualization.arrayToDataTable([
    //   ['Year', 'Walk', 'Scoot', 'Bike', 'Car'],
    //   ['May', 2, 3, 5, 20],
    //   ['June', 6, 4, 5, 15],
    //   ['July', 8, 5, 5, 12]
    // ]);
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Walk', 'Scoot', 'Bike', 'Car'],
      ['Start', 2, 3, 5, 20],
      ['May', 2, 3, 5, 20]
    ]);

    var options_fullStacked = {
      isStacked: 'relative',
      pointsVisible: true,
      pointSize: 3,
      backgroundColor: 'transparent',
      chartArea: {
        top: '5%',
        left: '10%',
        width: '68%',
        height: '90%'
      },
      colors: ['#00C853', '#00E676', '#69F0AE', '#004D40'],
      areaOpacity: 0.4,
      height: 200,
      legend: {
        position: 'right',
        textStyle: {
          color: '#FFFFFF',
          bold: true
        }
      },
      hAxis: {
        baselineColor: '#004D40',
        textPosition: 'none'
      },
      vAxis: {
        minValue: 0,
        format: '##%',
        textStyle: {
          color: '#FFFFFF',
          bold: true
        },
        ticks: [0, 0.25, 0.50, 0.75, 1.0],
        textPosition: 'out'
      }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options_fullStacked);
  }

  function drawChartTwo() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Bicycle', 'Walking', 'Scooting', 'By car'],
      ['Start', 0, 12, 8, 10],
      ['Finish', 0, 12, 8, 10]
    ]);

    var options_fullStacked = {
      isStacked: 'relative',
      backgroundColor: 'transparent',
      chartArea: {
        top: 0,
        left: 0
      },
      colors: ['#004D40', '#69F0AE', '#00E676', '#00C853'],
      areaOpacity: 1.0,
      height: 300,
      legend: {position: 'none'},
      hAxis: {
        baselineColor: '#004D40',
        textPosition: 'none'
      },
      vAxis: {
        minValue: 0,
        ticks: [],
        textPosition: 'in'
      }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div_2'));
    chart.draw(data, options_fullStacked);
  }
})();
