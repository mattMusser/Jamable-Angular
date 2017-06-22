(function() {
    function SongPlayer() {
         var SongPlayer = {};

         SongPlayer.play = function(song) {
             var currentBuzzObject = new buzz.soung(song.audioUrl, {
                 formats: ['mp3'],
                 preload: true
             });

             currentBuzzObject.play();
         };
         
         return SongPlayer;
    }

    angular
        .module('blocjams')
        .factory('SongPlayer', Songplayer);
})();
