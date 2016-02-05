import {HomeController} from './features/home/homeCtrl';

config.$inject = ['$routeProvider'];
export function config($routeProvider: ng.route.IRouteProvider): void {
    $routeProvider.when('/', {
        template: require('./features/home/home.jade'),
        controller: HomeController,
        controllerAs: 'home'
    });
}