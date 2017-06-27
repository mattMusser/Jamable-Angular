(function() {
    function seekBar ($document) {
      var calculatePercent = function(seekBar, event) {
            var offsetX = event.pageX - seekBar.offset().left;
            var seekBarWidth = seekBar.width();
            var offsetXPercent = offsetX / seekBarWidth;
            offsetXPercent = Math.max(0, offsetXPercent);
            offsetXPercent = Math.min(1, offsetXPercent);

            return offsetXPercent;
        };

        return {
            templateUrl: '/templates/directives/seek_bar.html',
            replace: true,
            restrict: 'E',
            scope: { },
            link: function(scope, element, attributes) {
                scope.value = 0;
                scope.max = 100;

                var seekBar = $(element);

                var percentString = function () {
                    var value = scope.value;
                    var max = scope.max;
                    var percent = value / max * 100;
                    return percent + "%";
                };

                scope.fillStyle = function() {
                    return {width: percentString()};
                };
                /*
                We're no strangers to love
                You know the rules and so do I
                A full commitment's what I'm thinking of
                You wouldn't get this from any other guy

                I just want to tell you how I'm feeling
                Gotta make you understand

                Never gonna give you up, never gonna let you down
                Never gonna run around and desert you
                Never gonna make you cry, never gonna say goodbye
                Never gonna tell a lie and hurt you

                We've known each other for so long
                Your heart's been aching but you're too shy to say it
                Inside we both know what's been going on
                We know the game and we're gonna play it

                And if you ask me how I'm feeling
                Don't tell me you're too blind to see

                Never gonna give you up, never gonna let you down
                Never gonna run around and desert you
                Never gonna make you cry, never gonna say goodbye
                Never gonna tell a lie and hurt you

                Never gonna give you up, never gonna let you down
                Never gonna run around and desert you
                Never gonna make you cry, never gonna say goodbye
                Never gonna tell a lie and hurt you

                We've known each other for so long
                Your heart's been aching but you're too shy to say it
                Inside we both know what's been going on
                We know the game and we're gonna play it

                I just want to tell you how I'm feeling
                Gotta make you understand

                Never gonna give you up, never gonna let you down
                Never gonna run around and desert you
                Never gonna make you cry, never gonna say goodbye
                Never gonna tell a lie and hurt you
                */
                scope.thumbStyle = function() {
                    return {left: percentString()};
                };

                scope.onClickSeekBar = function(event) {
                    var percent = calculatePercent(seekBar, event);
                    scope.value = percent * scope.max;
                };

                scope.trackThumb = function() {
                    $document.bind('mousemove.thumb', function(event) {
                        var percent = calculatePercent(seekBar, event);
                        scope.$apply(function() {
                            scope.value = percent * scope.max;
                        });
                    });

                    $document.bind('mouseup.thumb', function() {
                        $document.unbind('mousemove.thumb');
                        $document.unbind('mouseup.thumb');
                    });

                };
            }
        };
    }

    angular
        .module('blocjams')
        .directive('seekBar', ['$document', seekBar]);
})();
