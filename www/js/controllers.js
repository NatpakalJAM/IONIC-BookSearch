angular.module('starter.controllers', [])

/*.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/search.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})*/

.controller('searchController',function($scope,$http,$state){
  console.log('Search Controller START.');

  $scope.from = {};

  $scope.btnsearchname = function() {
    console.log('Pressed.');
    console.log($scope.from);
    console.log($scope.from.txt_search);
    $http(
      {
      url: 'http://127.0.0.1/cartoonbook/webservice/ws_search.php',
      method: 'POST',
      data:{
              'var_name': $scope.from.txt_search
           }
      }
    )
    .then(function(response) {
      console.log(response);
      console.log(response.data.results);
      if(response.data.results == "success") {
        $state.go('app.browseBySearch',{BSearch:$scope.from.txt_search});
        }
      else if($scope.from.txt_search == null){
        $state.go('app.noBrowse');
      }
    },function(error) {
      console.log(error);
    });
  }
})

.controller('listController',function($scope,$http,$state){
  $http.get('http://127.0.0.1/cartoonbook/webservice/ws_list.php')
  .then(function(response){
    console.log('List Controller START.');
    console.log(response);
    console.log(response.data.results);
    $scope.myDataArray = response.data.results;
  },function(error){
    console.log(error);
  });

  $scope.btnDetail = function (data) {
    console.log(data);
    console.log('Pressed.');
    $state.go('app.detail',{BName:data.BName,
                        BNameEN:data.BNameEN,
                        BNum:data.BNum,
                        BType:data.BType,
                        BGenre:data.BGenre,
                        BPub:data.BPub,
                        DSale:data.DSale,
                        BPrice:data.BPrice,
                        Synopsis:data.Synopsis,
                        BPic1:data.BPic1});
  }
})

.controller('listSearchController',function($scope,$http,$state,$stateParams){
  $scope.txtBSearch = $stateParams.BSearch;

  $http(
    {
      url: 'http://127.0.0.1/cartoonbook/webservice/ws_listFromSearch.php',
      method: 'POST',
      data:{
              'var_name': $scope.txtBSearch
           }
    }
  )
  .then(function(response) {
    $http.get('http://127.0.0.1/cartoonbook/webservice/ws_listFromSearch.php')
      console.log('ListSearch Controller START.');
      console.log(response);
      console.log(response.data.results);
      $scope.myDataArray = response.data.results;
  },function(error) {

  });

  /*$scope.btnBack = function () {
    console.log('back pressed.');
    $state.go('app.search');
  }*/

  $scope.btnDetail = function (data) {
    console.log(data);
    console.log('Pressed.');
    $state.go('app.detailSearch',{BName:data.BName,
                        BNameEN:data.BNameEN,
                        BNum:data.BNum,
                        BType:data.BType,
                        BGenre:data.BGenre,
                        BPub:data.BPub,
                        DSale:data.DSale,
                        BPrice:data.BPrice,
                        Synopsis:data.Synopsis,
                        BPic1:data.BPic1});
  }
})

.controller('detailController',function ($scope,$state,$stateParams,$ionicPopup) {
  console.log('Detail Controller START.');
  console.log($stateParams);

  $scope.txtBName = $stateParams.BName;
  $scope.txtBNameEN = $stateParams.BNameEN;
  $scope.txtBNum = $stateParams.BNum;
  $scope.txtBType = $stateParams.BType;
  $scope.txtBGenre = $stateParams.BGenre;
  $scope.txtBPub = $stateParams.BPub;
  $scope.txtDSale = $stateParams.DSale;
  $scope.txtBPrice = $stateParams.BPrice;
  $scope.txtSynopsis = $stateParams.Synopsis;
  $scope.txtBPic1 = $stateParams.BPic1;

  $scope.btnBack = function () {
    console.log('back pressed.');
    $state.go('app.browse');
  }

  $scope.btnCall = function () {
    console.log('btn Synopsis');

    var confirmPopup = $ionicPopup.confirm({
      title: 'Synopsis',
      template: $stateParams.Synopsis
    });

    confirmPopup.then(function(res) {
      if(res) {
        console.log('OK');
      } else {
        console.log('Cancel');
      }
    });

  }
})

.controller('detailSearchController',function ($scope,$state,$stateParams,$ionicPopup) {
  console.log('Detail Controller START.');
  console.log($stateParams);

  $scope.txtBName = $stateParams.BName;
  $scope.txtBNameEN = $stateParams.BNameEN;
  $scope.txtBNum = $stateParams.BNum;
  $scope.txtBType = $stateParams.BType;
  $scope.txtBGenre = $stateParams.BGenre;
  $scope.txtBPub = $stateParams.BPub;
  $scope.txtDSale = $stateParams.DSale;
  $scope.txtBPrice = $stateParams.BPrice;
  $scope.txtSynopsis = $stateParams.Synopsis;
  $scope.txtBPic1 = $stateParams.BPic1;

  $scope.btnBack = function () {
    console.log('back pressed.');
    $state.go('app.browseBySearch');
  }

  $scope.btnCall = function () {
    console.log('btn Synopsis');

    var confirmPopup = $ionicPopup.confirm({
      title: 'Synopsis',
      template: $stateParams.Synopsis
    });

    confirmPopup.then(function(res) {
      if(res) {
        console.log('OK');
      } else {
        console.log('Cancel');
      }
    });
  }
})

.controller('aboutController',function($scope,$http){
  $http.get('http://127.0.0.1/cartoonbook/webservice/ws_about.php')
  .then(function(response){
    console.log('About Controller START.');
    console.log(response);
    console.log(response.data.results);
    $scope.myDataArray = response.data.results;
  },function(error){
    console.log(error);
  });
})
