let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController as vm',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.form', {
      url: '/form',
      controller: 'FormController as vm',
      templateUrl: 'templates/form.tpl.html'
    })
    .state('root.contacts', {
      url: './contacts',
      controller: 'ContactsController as vm',
      templateUrl: 'templates/contacts.tpl.html'
    })
  ;

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;
