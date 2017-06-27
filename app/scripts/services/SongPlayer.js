(function() {
    function SongPlayer(Fixtures) {
         var SongPlayer = {};


         var currentAlbum = Fixtures.getAlbum();

         /**
         * @function getSongIndex
         * @desc gets the index of a song
         * @param song
         */
         var getSongIndex = function(song) {
             return currentAlbum.songs.indexOf(song);
         };

         SongPlayer.currentSong = null;

         /**
         * @desc Buzz object audio file
         * @type {Object}
         */
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

         /**
         * @function playSong
         * @desc Starts playing the currentBuzzObject
         * @param {Object} song
         */
         var playSong = function(song) {
             currentBuzzObject.play();
             song.playing = true;
         };

         /**
         * @function stopSong
         * @desc Stops the currentBuzzObject
         * @param {Object} song
         */
         var stopSong = function(song) {
             currentBuzzObject.stop();
             song.playing = null;
         };

         /**
         * @method play
         * @desc Play current song
         * @param {Object} song
         */
         SongPlayer.play = function(song) {
             song = song || SongPlayer.currentSong;
             if (SongPlayer.currentSong !== song) {
                 setSong(song);
                 playSong(song);
               } else if (SongPlayer.currentSong === song) {
                   if (currentBuzzObject.isPaused()) {
                       playSong(song);
                   }
               }
        };

        /**
        * @method pause
        * @desc Pause current song
        * @param {Object} song
        */
        SongPlayer.pause = function(song) {
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
        };

        /**
        * @method previous
        * @desc Gets the index of the currently playing song and then decreaces that index by one.
        */
        SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;

            if (currentSongIndex < 0) {
                stopSong(SongPlayer.currentSong);
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };

        /**
        * @method next
        * @desc Gets the index of the currently playing song and then advances it by one.
        */
        SongPlayer.next = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;

            if (currentSongIndex >= currentAlbum.songs.length) {
                stopSong(SongPlayer.currentSong);
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
