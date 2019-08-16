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
    let snakesAndLadder

    var SnakesAndLadderGame = function () {
        view = _gameConfiguration.getViewInstance();
        players = _gameConfiguration.getPlayers();
        snakesAndLadder = _gameConfiguration.getSnakesAndLadderInstance();
        let diceValue = generateDiceValue();
        triggerGame(diceValue);
    }

    var hasPlayerWon = function (currentPosition) {
        if (currentPosition === 100) {
            let currentPlayerIndex = players.getCurrentPlayerIndex();
            view.playerWon(currentPlayerIndex)
            players.finishGame();
        }
    }

    var triggerGame = function (diceValue) {
        let currentPlayerIndex = players.getCurrentPlayerIndex();
        let playerIndex = currentPlayerIndex - 1;
        let playersArr = players.getPlayers();
        let currentPlayer = playersArr[playerIndex];
        let previousValue = currentPlayer.currentPosition;

        if (previousValue + diceValue <= 100) {
            currentPlayer.setPosition(previousValue + diceValue);
            let currentValue = currentPlayer.currentPosition;

            currentPlayer.setPosition(snakesAndLadder.getLadderJump(currentValue));
            currentValue = currentPlayer.currentPosition;

            currentPlayer.setPosition(snakesAndLadder.getSnakeDip(currentValue));
            currentValue = currentPlayer.currentPosition;

            view.updatePlayerLocation(previousValue, currentValue);
            hasPlayerWon(currentValue);
            changePlayer(diceValue);
        }

    }

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

    var generateDiceValue = function () {
        let diceValue = Math.floor((Math.random() * 6) + 1);
        view.updateDiceLabel(diceValue);
        return diceValue;
    }

    return SnakesAndLadderGame;
}());

