var _gameConfiguration;

/**
 * Player class.
 */
var Player = (function () {

    /**
     * Constructor
     */
    var Player = function () {
        this.currentPosition = 1;
    }

    /**
     * Sets the new position for the player.
     * @param {int} newPosition 
     */
    Player.prototype.setPosition = function (newPosition) {
        this.currentPosition = newPosition;
    }

    return Player;
}());

/**
 * Class contains multiple players along with metadata.
 */
var Players = (function () {
    var currentPlayer;
    var gameInProgress;
    var playerDetails;

    /**
     * Constructor
     */
    var Players = function () {
        currentPlayer = 1;
        gameInProgress = true;
        playerDetails = [];
    }

    /**
     * Adds new player.
     * @param {Player} player 
     */
    Players.prototype.addPlayer = function (player) {
        playerDetails.push(player);
    }

    /**
     * Returns array of players.
     */
    Players.prototype.getPlayers = function () {
        return playerDetails;
    }

    /**
     * Returns the index for the current player.
     */
    Players.prototype.getCurrentPlayerIndex = function () {
        return currentPlayer;
    }

    /**
     * Sets the index for the current player.
     * @param {int} index 
     */
    Players.prototype.setCurrentPlayerIndex = function (index) {
        currentPlayer = index;
    }

    /**
     * Returns true/false if the game is in progress.
     */
    Players.prototype.isGameInProgress = function () {
        return gameInProgress;
    }

    /**
     * Finishes the game and sets the flags.
     */
    Players.prototype.finishGame = function () {
        gameInProgress = false;
    }

    return Players;
}());