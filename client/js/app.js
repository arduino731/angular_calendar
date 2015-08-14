// MODULE
var app = angular.module('CalendarApp', ['ngRoute']);

// ROUTES
app.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        controller: 'DayController',
        templateUrl: 'pages/day.html',
    })
    
    .when('/:id', {
        controller: 'EventController',
        templateUrl: 'pages/event.html'
    })
    
    
    .otherwise({
  	    redirectTo: '/'
    });
    
});