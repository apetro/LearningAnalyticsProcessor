/*******************************************************************************
 * Copyright (c) 2015 Unicon (R) Licensed under the
 * Educational Community License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may
 * obtain a copy of the License at
 *
 * http://www.osedu.org/licenses/ECL-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS IS"
 * BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 *******************************************************************************/
'use strict';

angular
.module('LAP')
.controller('IndexCtrl',

function MasterCtrl($scope, $state, $translate, $translatePartialLoader, $http, runs, SessionService) {
  
  if(!SessionService.isAuthenticated()){
    $state.go("login");
  }

  $translatePartialLoader.addPart('overview');
  $translate.refresh();
    
  $scope.runs = runs;
  $scope.isAuthenticated = SessionService.isAuthenticated();
  $scope.logout = function() {
	  SessionService.logout()
	    .then( function(data) {
	        $state.go('login', {loggedOutMessage:'USER_INITIATED'});
	        return;
	    },
	    function (error) {
	        $state.go('login', {loggedOutMessage:'USER_INITIATED'});
	        return;
	    }
	  );
  }

});