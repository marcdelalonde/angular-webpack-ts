import 'angular';
import 'angular-route';

//angular.module('app.controllers', []);
import {config as routesConfig} from './routes';

// load our default (non specific) css
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/_home.scss';

angular.module('app', ['ngRoute'])
	.config(routesConfig);

angular.bootstrap(document, ['app'], {
   strictDi: true
});