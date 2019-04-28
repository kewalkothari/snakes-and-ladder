window.onload = function (e) {
    _gameConfiguration = new ConfigureGame();
}

/**
 * Configures the initial game setup.
 */
var ConfigureGame = (function () {
    let mainBoardStructure;
    let snakesAndLadder;
    let players;
    let view;

    /**
     * Constructor
     */
    var ConfigureGame = function () {

        let boardStructure = generateBoardStructure();

        mainBoardStructure = new MainBoardStructure();
        mainBoardStructure.setBoardStructureArr(boardStructure);

        snakesAndLadder = new SnakesAndLadder();
        _snakesAndLadder = snakesAndLadder;
        snakesAndLadder.addSnake(new Snake(58, 21));
        snakesAndLadder.addSnake(new Snake(87, 45));
        snakesAndLadder.addSnake(new Snake(97, 38));

        snakesAndLadder.addLadder(new Ladder(24, 56));
        snakesAndLadder.addLadder(new Ladder(43, 65));
        snakesAndLadder.addLadder(new Ladder(49, 74));

        let laddersArr = snakesAndLadder.getLadders();
        let snakesArr = snakesAndLadder.getSnakes();

        players = new Players();
        players.addPlayer(new Player());
        players.addPlayer(new Player());

        view = new ViewGeneration(mainBoardStructure, laddersArr, snakesArr, players);
    }

    /**
     * Returns the instance of players class.
     */
    ConfigureGame.prototype.getPlayersInstance = function () {
        return players;
    }

    /**
     * Returns the instance of view class.
     */
    ConfigureGame.prototype.getViewInstance = function () {
        return view;
    }

    /**
     * Generate the board structure.
     */
    var generateBoardStructure = function () {
        let counter = 1;
        let tempSingleRow = [];
        let boardStructure = [];

        for (let x = 100; x >= 1; x--) {

            tempSingleRow.push(x);

            if (x % 10 == 1) {

                if (counter % 2 !== 0) {
                    boardStructure.push(tempSingleRow);
                } else {
                    boardStructure.push(tempSingleRow.reverse());
                }

                counter++;
                tempSingleRow = [];
            }
        }

        return boardStructure.flat();
    }

    return ConfigureGame;
}());
