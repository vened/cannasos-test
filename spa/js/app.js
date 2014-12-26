'use strict';

var app = angular.module('app', [
    'ngResource',
    'ngRoute',
    'app.templates',
    'app.controllers',
    'app.services',
    'app.directives'
]);

app.config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

var appControllers = angular.module('app.controllers', []);
var appServices = angular.module('app.services', []);
var appDirectives = angular.module('app.directives', []);