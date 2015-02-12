angular.module('starter.services', [])
  .factory('Bills', function ($http) {

    return {
      all: function () {
        $http.get('https://blooming-inlet-6469.herokuapp.com/api/bills')
          .success(function (newBills) {
            return newBills;
          })
          .error(function (err) {
            alert('Server Error');
          });
      },
      addBill: function (newBill) {
        $http.post('https://blooming-inlet-6469.herokuapp.com/api/bill', newBill)
          .success(function () {
            return newBill;
          })
          .error(function (err) {
            alert('Server error');
          });
      }
    }
  });