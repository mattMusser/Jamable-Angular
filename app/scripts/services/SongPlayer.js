(function() {
    function SongPlayer() {
         var SongPlayer = {};

         SongPlayer.currentSong = null;

         /**
         * @function setSong
         * @desc Stops currently playing song and Loads new audio file as currentBuzzObject
         * @param {Object} song
         */

         var currentBuzzObject = null;

         var setSong = function(song) {
             if (currentBuzzObject) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
             }

             currentBuzzObject = new buzz.sound(song.audioUrl, {
                  formats: ['mp3'],
                  preload: true
             });

             SongPlayer.currentSong = song;
         }

         SongPlayer.currentSong = null;

         var playSong = function(song) {
             currentBuzzObject.play();
             song.playing = true;
         };

         SongPlayer.play = function(song) {
             if (SongPlayer.currentSong !== song) {
                 setSong(song);
                 playSong(song);
               } else if (SongPlayer.currentSong === song) {
                   if (currentBuzzObject.isPaused()) {
                       currentBuzzObject.play();
                   }
               }
        };

        SongPlayer.pause = function(song) {
            currentBuzzObject.pause();
            song.playing = false;
        }

         return SongPlayer;
    }

    angular
        .module('blocjams')
        .factory('SongPlayer', SongPlayer);
})();
