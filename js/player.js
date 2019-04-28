var _gameConfiguration;

var Player = (function () {
    var Player = function() {
        this.currentPosition = 1;
    }

    Player.prototype.setPosition = function(newPosition) {
        this.currentPosition = newPosition;
    }

    return Player;
}());

var Players = (function () {
    var currentPlayer;
    var gameInProgress;
    var playerDetails;

    var Players = function() {
        currentPlayer = 1;
        gameInProgress = true;
        playerDetails = [];
    }

    Players.prototype.addPlayer = function(player) {
        playerDetails.push(player);
    }

    Players.prototype.getPlayers = function() {
        return playerDetails;
    }

    Players.prototype.getCurrentPlayerIndex = function() {
        return currentPlayer;
    }

    Players.prototype.setCurrentPlayerIndex = function(index) {
        currentPlayer = index;
    }

    Players.prototype.isGameInProgress = function() {
        return gameInProgress;
    }

    Players.prototype.finishGame = function() {
        gameInProgress = false;
    }

    return Players;
}());