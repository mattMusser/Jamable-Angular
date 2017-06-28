(function() {
    function timecode() {
        return function(seconds) {
            var seconds = Number.parseFloat(seconds);

            if (Number.isNaN(seconds)) {
                return '00:00';
            }

            var output = buzz.toTimer(seconds);

          return output;
        };
    }

    angular
        .module('blocjams')
        .filter('timecode', timecode);
})();
