import {AppController} from '../features/app/appCtrl';
import {HomeController} from '../features/home/homeCtrl';
import {UserController} from '../features/user/userCtrl';

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
export function config($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider, $locationProvider: ng.ILocationProvider): void {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      abstract: true,
      template: require('../features/app/app.jade'),
      controller: AppController,
      controllerAs: 'app'
    })
    .state('app.home', {
      url: '/',
      template: require('../features/home/home.jade'),
      controller: HomeController,
      controllerAs: 'home'
    })
    .state('app.user', {
      url: '/user',
      template: require('../features/user/user.jade'),
      controller: UserController,
      controllerAs: 'home'
    });

  //$locationProvider.html5Mode(true);

}