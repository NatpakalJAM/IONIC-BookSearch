angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }

    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  $stateProvider.state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
    //controller: 'AppCtrl'
  })

  $stateProvider.state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller: 'searchController'
      }
    }
  })

  $stateProvider.state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html',
          controller: 'listController'
      }
    }
  })

  $stateProvider.state('app.browseBySearch', {
      url: '/browseBySearch:/{BSearch}',
      views: {
      'menuContent': {
        templateUrl: 'templates/browseBySearch.html',
        controller: 'listSearchController'
      }
    }
  })

  $stateProvider.state('app.noBrowse', {
      url: '/noBrowse',
      views: {
        'menuContent': {
          templateUrl: 'templates/noBrowse.html'
      }
    }
  })

  $stateProvider.state('app.detail', {
    url: '/Detail:/{BName}/{BNameEN}/{BNum}/{BType}/{BGenre}/{BPub}/{DSale}/{BPrice}/{Synopsis}/{BPic1}',
    views: {
      'menuContent': {
        templateUrl: 'templates/detail.html',
        controller: 'detailController'
      }
    }
  })

  $stateProvider.state('app.detailSearch', {
    url: '/DetailSearch:/{BName}/{BNameEN}/{BNum}/{BType}/{BGenre}/{BPub}/{DSale}/{BPrice}/{Synopsis}/{BPic1}',
    views: {
      'menuContent': {
        templateUrl: 'templates/detail.html',
        controller: 'detailSearchController'
      }
    }
  })

  $stateProvider.state('app.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/about.html',
        controller: 'aboutController'
      }
    }
  })
;
  /*state PAGE naja eiei*/
  $urlRouterProvider.otherwise('/app/browse');
});
