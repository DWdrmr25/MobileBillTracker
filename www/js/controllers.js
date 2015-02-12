angular.module('starter.controllers', [])

.controller('BillsCtrl', function ($scope, $http, $state, Bills) {
  $http.get('https://blooming-inlet-6469.herokuapp.com/api/bills')
    .success(function (newBills) {
      $scope.bills = newBills;

      var total = 0;

      for (var i = 0; i < newBills.length; i++) {
        total += newBills[i].amount;
      }

      $scope.expenses = total;

    })
    .error(function (err) {
      alert('Server Error');
    });

  $scope.addBill = function (newBill) {
    if (newBill == undefined) {
      alert('Please fill out the Bill form');
    } else {
      $scope.bills.push(newBill);
      Bills.addBill(newBill);
      $state.go('tab.dash');
    }
  };
  
  // Bills Page
  /*$http.get('http://localhost:3000/api/bills')
    .success(function (newBills) {
      $scope.bills = newBills;
    })
    .error(function (err) {
      alert('Server Error');
    });*/

})

.controller('AccountCtrl', function ($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('StatsCtrl', function ($scope) {

});