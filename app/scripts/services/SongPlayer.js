(function() {
    function SongPlayer() {
         var SongPlayer = {};

         SongPlayer.play = function(song) {

             var currentBuzzObject = new buzz.sound(song.audioUrl, {
                 formats: ['mp3'],
                 preload: true
             });
             console.log(song.audioUrl);
             currentBuzzObject.play();

         };

         return SongPlayer;
    }

    angular
        .module('blocjams')
        .factory('SongPlayer', SongPlayer);
})();
