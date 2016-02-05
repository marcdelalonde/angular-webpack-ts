import 'angular';
import 'angular-ui-router';
import {config as routesConfig} from './routes/routes';

// load our default (non specific) css
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/app.scss';

angular.module('app', ['ui.router'])
	.config(routesConfig);

angular.bootstrap(document, ['app'], {
   strictDi: true
});