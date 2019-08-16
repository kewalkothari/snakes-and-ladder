var ConfigureGame = (function () {
    let mainBoardStructure;
    let snakesAndLadder;
    let players;
    let view;

    var ConfigureGame = function () {
        initializeGame();
    }

    var initializeGame = function() {
        let PLAYERS_COUNT = 2;

        addImports().then(function () {
            generateBoardStructure();
            createPlayers(PLAYERS_COUNT);
            createSnakesAndLadders();
            generateView();
        });
    }

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

        mainBoardStructure = new MainBoardStructure(boardStructure.flat());
    }

    var createPlayers = function(playerCount) {
        players = new Players();

        for (let x = 0; x < playerCount; x++) {
            players.addPlayer(new Player());
        }
    }

    var createSnakesAndLadders = function () {
        snakesAndLadder = new SnakesAndLadder();

        snakesAndLadder.addSnake(new Snake(58, 21));
        snakesAndLadder.addSnake(new Snake(87, 45));
        snakesAndLadder.addSnake(new Snake(97, 38));

        snakesAndLadder.addLadder(new Ladder(24, 56));
        snakesAndLadder.addLadder(new Ladder(43, 65));
        snakesAndLadder.addLadder(new Ladder(49, 74));
    }

    var generateView = function () {
        let laddersArr = snakesAndLadder.getLadders();
        let snakesArr = snakesAndLadder.getSnakes();

        view = new ViewGeneration(mainBoardStructure, laddersArr, snakesArr, players);
    }

    var addImports = function () {
        return includeFiles(['js/structure.js', 'js/player.js', 'js/view-generation.js', 'js/game.js']);
    }

    ConfigureGame.prototype.getPlayers = function () {
        return players;
    }

    ConfigureGame.prototype.getViewInstance = function () {
        return view;
    }

    ConfigureGame.prototype.getSnakesAndLadderInstance = function () {
        return snakesAndLadder;
    }

    return ConfigureGame;
}());
