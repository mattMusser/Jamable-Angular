(function(){
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('landing', {
                url: '/',
                templateUrl: '/templates/landing.html'
            })
            .state('album', {
                url: '/album',
                templateUrl: '/templates/album.html'
            });
            .state('collection', {
                url: '/collection',
                templateUrl: '/templates/collection'
            });
    }

    angular
        .module('blocjams', ['ui.router'])
        .config(config);
})();
