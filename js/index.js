var app = angular.module("price", []);
app.controller("priceDataCtrl", [
  "$scope",
  function($scope) {
    $scope.items = [
      {
        title: "1st Package",
        button: "Sign Up",
        url: "#",
        data: [
          "$15 / Month",
          "75 GB of Space",
          "50 GB of Disk Space",
          "10 Domains",
          "2 Users"
        ]
      },
      {
        title: "2nd Package",
        button: "Sign Up",
        url: "#",
        data: [
          "$20 / Month",
          "100 GB Space",
          "75 GB of Disk Space",
          "12 Domains",
          "3 Users"
        ]
      },
      {
        title: "3rd Package",
        button: "Sign Up",
        url: "#",
        data: [
          "$25 / Month",
          "125 GB of Space",
          "100 GB of Disk Space",
          "14 Domains",
          "4 Users"
        ]
      }
    ];

    //  $scope.items.push();
  }
]);