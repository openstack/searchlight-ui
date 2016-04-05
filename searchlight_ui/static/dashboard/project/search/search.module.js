/**
 * (c) Copyright 2015 Hewlett-Packard Development Company, L.P.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may obtain
 * a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @ngname horizon.dashboard.project.search
   *
   * @description
   * Provides the services and widgets required
   * to support and display the project search panel.
   */
  angular
    .module('horizon.dashboard.project.search', [])
    .config(config);

  config.$inject = [
    '$provide',
    '$windowProvider',
    '$routeProvider'
  ];

  /**
   * @name horizon.dashboard.project.search.basePath
   * @description Base path for the project dashboard
   *
   * @param {function} $provide ng provide service
   *
   * @param {function} $windowProvider NG window provider
   *
   * @returns {undefined}
   */
  function config($provide, $windowProvider, $routeProvider) {
    var path = $windowProvider.$get().STATIC_URL + 'dashboard/project/search/';
    $provide.constant('horizon.dashboard.project.search.basePath', path);

    $routeProvider
      .when('/project/search/', {
        templateUrl: path + 'table/search-table.html'
      });
  }

})();
