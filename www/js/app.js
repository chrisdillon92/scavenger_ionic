// angular.module('scavenger', ['ionic', '$stateProvider', '$urlRouterProvider', 'AppController'])
angular.module('scavenger', ['ionic', 'ui.router'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}) // .run()
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'AppController as appCtrl'
    })
    .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'AppController as appCtrl'
    })
    .state('hunt', {
        url: '/hunt',
        templateUrl: 'templates/hunt.html',
        controller: 'AppController as appCtrl'
    })
    .state('huntsIndex', {
        url: '/huntsindex',
        templateUrl: 'templates/huntsIndex.html',
        controller: 'AppController as appCtrl'
    })

    $urlRouterProvider.otherwise('/login');
  // $urlRouterProvider.otherwise('/hunt');
});
