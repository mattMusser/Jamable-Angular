(function() {
    function seekBar () {
        return {
            templateUrl: '/templates/directives/seek_bar.html',
            replace: true,
            restrict: 'E'
        };
    }

    angular
        .module('blocjams')
        .directive('seekBar', seekBar);
})();
