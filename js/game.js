/**
 * Triggers when the dice is rolled.
 */
var diceTriggered = function () {
    let game = new SnakesAndLadderGame();
    game = null;
}

/**
 * Class for snakes and ladder game logic.
 */
var SnakesAndLadderGame = (function () {
    let view;
    let players;

    /**
     * Constructor
     */
    var SnakesAndLadderGame = function () {
        view = _gameConfiguration.getViewInstance();
        players = _gameConfiguration.getPlayersInstance();
        let diceValue = generateDiceValue();
        triggerGame(diceValue);
    }


    /**
     * Checks if the player has won.
     * @param {int} currentPosition 
     */
    var hasPlayerWon = function (currentPosition) {
        if (currentPosition === 100) {
            let currentPlayerIndex = players.getCurrentPlayerIndex();
            view.playerWon(currentPlayerIndex)
            players.finishGame();
        }
    }

    /**
     * Triggers the game logic.
     * @param {int} diceValue 
     */
    var triggerGame = function (diceValue) {
        let currentPlayerIndex = players.getCurrentPlayerIndex();
        let playerIndex = currentPlayerIndex - 1;
        let playersArr = players.getPlayers();
        let currentPlayer = playersArr[playerIndex];
        let previousValue = currentPlayer.currentPosition;

        if (previousValue + diceValue <= 100) {
            currentPlayer.setPosition(previousValue + diceValue);
            let currentValue = currentPlayer.currentPosition;

            currentPlayer.setPosition(_snakesAndLadder.getLadderJump(currentValue));
            currentValue = currentPlayer.currentPosition;

            currentPlayer.setPosition(_snakesAndLadder.getSnakeDip(currentValue));
            currentValue = currentPlayer.currentPosition;

            view.updatePlayerLocation(previousValue, currentValue);
            hasPlayerWon(currentValue);
            changePlayer(diceValue);
        }

    }

    /**
     * Changes the player once the turn is over.
     * @param {int} diceValue 
     */
    var changePlayer = function (diceValue) {
        if (diceValue !== 6 && players.isGameInProgress()) {
            let currentIndex = players.getCurrentPlayerIndex();
            let newIndex = currentIndex === players.getPlayers().length ? 1 : currentIndex + 1;
            players.setCurrentPlayerIndex(newIndex);
            view.updateCurrentPlayerLabel(newIndex)
        }
        view = null;
        players = null;
    }

    /**
     * Generates the Dice value.
     */
    var generateDiceValue = function () {
        let diceValue = Math.floor((Math.random() * 6) + 1);
        view.updateDiceLabel(diceValue);
        return diceValue;
    }

    return SnakesAndLadderGame;
}());

