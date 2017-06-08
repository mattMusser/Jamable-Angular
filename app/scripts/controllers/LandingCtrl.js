(function() {
    function LandingCtrl() {
        this.heroTitle = "Turn the Music UP!";
    }

    angular
        .module('blocjams')
        .controller('LandingCtrl', LandingCtrl);
})();
