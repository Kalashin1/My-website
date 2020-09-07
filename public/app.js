let myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

// configuring routing
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $routeProvider    
    .when('/services', {
        templateUrl : "views/services.html",
        controller : "servicesCtrl"
    })
    .when('/', {
        templateUrl: 'views/landing.html',
        controller : 'myCtrl'
    })
    .when('/contact', {
        templateUrl : "views/contact.html",
        controller : "contactCtrl"
    })
    .when('/about', {
        templateUrl : "views/about.html",
        controller : "servicesCtrl"
    })
    .when('/portfolio', {
        templateUrl : "views/portfolio.html",
        controller : "portfolioCtrl"
    })
    .when('/contact-success', {
        templateUrl : 'views/contact-success.html',
        controller : 'contactCtrl'
    })
    .otherwise({
        redirectTo : '/'
    });

    $locationProvider.html5Mode(true).hashPrefix('!')
}])

// BANNER DIRECTIVE
myApp.directive('banner', [function(){
    return {
        restrict: 'E',
        scope: {
            title: "="
        },
        templateUrl: "directives/banner.html",
        controller : function($scope){
        }
    }
}])

// SERVICES DIRECTIVE
myApp.directive('services', [function(){
    return {
        restrict : 'E',
        scope: {
            services : "=",
            title : "="
        },
        templateUrl : 'directives/services.html',
        controller : function($scope){}
    }
}])


// SKILLS DIRECTIVE
myApp.directive('skills', [function(){
    return {
        restrict : 'E',
        scope: {
            front : '=',
            back: '=',
            elwidth: '=',
            title : "="
        },
        templateUrl : 'directives/skills.html',
        controller : function($scope){
        }
    }
}])



// INFON DIRECTIVE ON ABOUT PAGE
myApp.directive('info', [function(){
    return {
        restrict : 'E',
        scope : {
            title: '='
        },
        templateUrl : 'directives/info.html',
        controller : function($scope){}
    }
}])

// CERTIFICATE DIRECTIVE
myApp.directive('cert', [function(){
    return {
        restrict : 'E',
        scope : {
            title : '='
        },
        templateUrl : 'directives/cert.html',
        controller : function(){}
    }
}])


// PROJECTS DIRECTIVE
myApp.directive('portfolio', [function(){
    return {
        restrict : 'E',
        scope : {
            title : '=',
            all : '=',
        },
        templateUrl : 'directives/projects.html',
        controller : ($scope, $location, $window)=>{
            $scope.template = 'template'
            $scope.tools = 'tools'
            $scope.ux = 'ux'
            $scope.setFilter = function(val){
                $scope.filterVar = val
            }
            $scope.visitWork = (url)=>{
                $window.location.href= url;
            }
        }
    }
}])

// myCtrl
myApp.controller('myCtrl', ['$scope', function($scope){
    $scope.footer = document.querySelector('.page-footer');
    $scope.footer.style.display = 'none';
    $scope.nav = document.querySelector('.nav-wrapper');
    $scope.nav.style.display = 'none'
}])

// SERVICES CONTROLLER
myApp.controller('servicesCtrl', ['$scope', '$http', function ($scope, $http) { 
    let footer = document.querySelector('.page-footer');
    footer.style.display = 'block';
    $scope.nav = document.querySelector('.nav-wrapper');
    $scope.nav.style.display = 'block'

    $http.get('assets/json/services.json').then(data =>{
        $scope.services = data.data.services
        $scope.front = data.data.front;
        $scope.back = data.data.back;
        $scope.name = 'Kala'
    });
}])


// portforlio controller
myApp.controller('portfolioCtrl',['$scope', '$http', function($scope, $http){
    $scope.footer = document.querySelector('.page-footer');
    $scope.footer.style.display = 'block';
    $scope.nav = document.querySelector('.nav-wrapper');
    $scope.nav.style.display = 'block'

    $http.get('assets/json/portfolio.json').then(data =>{
        $scope.template = data.data.template;
        $scope.tools = data.data.tools;
        $scope.ux = data.data['ux/ui'];
        $scope.all = [];

        $scope.data = data.data;
        for(var k in $scope.data){
            for(var i in $scope.data[k]){
                $scope.data[k][i].forEach(obj =>{
                    $scope.all.push(obj);
                    
                })
            }
        }
    })
    
}])

// contact controller
myApp.controller('contactCtrl', ['$scope', '$location', function($scope, $location){
    $scope.footer = document.querySelector('.page-footer');
    $scope.footer.style.display = 'block';
    $scope.nav = document.querySelector('.nav-wrapper');
    $scope.nav.style.display = 'block'

    

    $scope.sendMail = function(obj, e){
        e.preventDefault();
        contactForm.reset();
        $location.path('contact-success')
        // DECLARING OUR SERVICE AND TEMPLATE ID, THESE RESOURCES ARE USED BY EMAIL JS
        const serviceID = 'default_service';
        const templateID = 'Template_01';

        emailjs.send(serviceID, templateID, obj)
        .then(() => {
        
        }, (err) => {
        alert(JSON.stringify(err));
        });

        
        

      
    }

   
    $scope.goHome = function(){
        $location.path('/')
    }
    $scope.title = "Contact Me";
   
}]);
myApp.controller('footerCtrl', ['$scope', '$window', function($scope, $window){
    $scope.visitSocialPage = (socialMedia)=>{
        $window.location.href = socialMedia;
    }
}])