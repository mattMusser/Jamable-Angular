(function() {
    function SongPlayer(Fixtures) {
         var SongPlayer = {};

         var currentAlbum = Fixtures.getAlbum();

         var getSongIndex = function(song) {
             return currentAlbum.songs.indexOf(song);
         };

         SongPlayer.currentSong = null;

         var currentBuzzObject = null;

         /**
         * @function setSong
         * @desc Stops currently playing song and Loads new audio file as currentBuzzObject
         * @param {Object} song
         */

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

         var stopSong = function(song) {
             currentBuzzObject.stop();
             song.Playing = null;
         };

         SongPlayer.play = function(song) {
             song = song || SongPlayer.currentSong;
             if (SongPlayer.currentSong !== song) {
                 setSong(song);
                 playSong(song);
               } else if (SongPlayer.currentSong === song) {
                   if (currentBuzzObject.isPaused()) {
                       playSong(song); //when was this changed from currentBuzzObject.play(); to playSong(song);?
                   }
               }
        };

        SongPlayer.pause = function(song) {
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
        };

        SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;

            if (currentSongIndex < 0) {
                stopSong(song);
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };

        SongPlayer.next = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;

            if (CurrentSongIndex < 0) {
                stopSong(song);
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };

         return SongPlayer;
    }

    angular
        .module('blocjams')
        .factory('SongPlayer', ['Fixtures', SongPlayer]);
})();
