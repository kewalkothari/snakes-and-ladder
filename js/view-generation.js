/**
 * Class contains all view related tasks.
 */
var ViewGeneration = (function () {

    let playersObj;
    /**
     * Constructor
     * @param {MainBoardStructure} mainBoardStructure 
     * @param {Ladder[]} laddersArr 
     * @param {Snake[]} snakesArr 
     * @param {Players} players 
     */
    var ViewGeneration = function (mainBoardStructure, laddersArr, snakesArr, players) {
        playersObj = players;
        addBoardToView(mainBoardStructure);
        addLaddersToView(mainBoardStructure, laddersArr);
        addSnakesToView(mainBoardStructure, snakesArr);
        initPlayers(players)
    }

    /**
     * Updates View for the player won.
     * @param {int} playerId 
     */
    ViewGeneration.prototype.playerWon = function (playerId) {
        document.getElementById("player-info").innerHTML = '<span class="player' + playerId + '">Player: ' + playerId + ' Won!</span>';
        document.getElementById("dice-roll").disabled = true;
    }

    /**
     * Updates the player location in view.
     * @param {int} previousPosition 
     * @param {int} CurrentPosition 
     */
    ViewGeneration.prototype.updatePlayerLocation = function (previousPosition, currentPosition) {
        let previousBlock = "block" + previousPosition;
        let previousBlockElement = document.getElementById(previousBlock);

        let newBlock = "block" + currentPosition;
        let newBlockElement = document.getElementById(newBlock);

        let className = "player" + playersObj.getCurrentPlayerIndex();
        previousBlockElement.getElementsByClassName(className)[0].classList.add("player-inactive");
        newBlockElement.getElementsByClassName(className)[0].classList.remove("player-inactive");
    }

    /**
     * Updates the current player label.
     * @param {int} playerId 
     */
    ViewGeneration.prototype.updateCurrentPlayerLabel = function (playerId) {
        document.getElementById("player-info").innerHTML = '<span class="player' + playerId + '">Current Player: ' + playerId + '</span>';
    }

    /**
     * Updates the Dice label.
     * @param {int} diceValue 
     */
    ViewGeneration.prototype.updateDiceLabel = function (diceValue) {
        var displayText = "<span>Dice Value: " + diceValue + "</span>";
        document.getElementById("game-play").innerHTML = displayText;
    }

    /**
     * Initializes view for the players.
     * @param {Players} players 
     */
    var initPlayers = function (players) {
        let block1 = document.getElementById("block1");
        let playersArr = players.getPlayers();

        for (let x = 1; x <= playersArr.length; x++) {
            let className = "player" + x;
            block1.getElementsByClassName(className)[0].classList.remove("player-inactive");
        }
        document.getElementById("player-info").innerHTML = '<span class="player1">Current Player: 1</span>';
    }

    /**
     * Adds the board to view.
     * @param {MainBoardStructure} mainBoardStructure 
     */
    var addBoardToView = function (mainBoardStructure) {
        let mainBoard = document.getElementById("main-board");
        let mainBoardStructureArr = mainBoardStructure.getBoardStructureArr();

        for (let x = 0; x < mainBoardStructureArr.length; x++) {

            mainBoard.innerHTML += '<div class="block-board" id=block' + mainBoardStructureArr[x] + '>' + mainBoardStructureArr[x] +
                `<br/><br/><span id="player1" class="player-inactive player1">*</span>
                                        <span id="player2" class="player-inactive player2">*</span>
                                        <span id="player3" class="player-inactive player3">*</span>
                                        <span id="player4" class="player-inactive player4">*</span>` + '</div>';
        }
    }

    /**
     * Adds the ladders to view.
     * @param {MainBoardStructure} mainBoardStructure 
     * @param {Ladder[]} laddersArr 
     */
    var addLaddersToView = function (mainBoardStructure, laddersArr) {
        laddersArr.forEach(ladder => {
            let coordinates = generateCoordinates(mainBoardStructure, ladder.from, ladder.to);
            var mainBoard = document.getElementById("main-board");

            mainBoard.innerHTML += `
            <span class="floater">
                <svg height="600" width="600">
                        <line x1="${coordinates.fromXaxis}" y1="${coordinates.fromYaxis}" x2="${coordinates.toXaxis}" y2="${coordinates.toYaxis}" style="stroke:rgb(128,128,128);stroke-width:2" />
                </svg>
            </span>`;
        });
    }

    /**
     * Adds the snakes to view.
     * @param {MainBoardStructure} mainBoardStructure 
     * @param {Snakes[]} snakesArr 
     */
    var addSnakesToView = function (mainBoardStructure, snakesArr) {
        snakesArr.forEach(ladder => {
            let coordinates = generateCoordinates(mainBoardStructure, ladder.from, ladder.to);
            let mainBoard = document.getElementById("main-board");

            mainBoard.innerHTML += `
            <span class="floater">
                <svg height="600" width="600">
                        <line x1="${coordinates.fromXaxis}" y1="${coordinates.fromYaxis}" x2="${coordinates.toXaxis}" y2="${coordinates.toYaxis}" style="stroke:rgb(210,105,30);stroke-width:2" />
                </svg>
            </span>`;
        });
    }

    /**
     * Generates the co-ordinates for the blocks.
     * @param {MainBoardStructure} mainBoardStructure 
     * @param {int} fromBlock 
     * @param {int} toBlock 
     */
    var generateCoordinates = function (mainBoardStructure, fromBlock, toBlock) {
        fromBlockIndex = mainBoardStructure.getIndex(fromBlock);
        toBlockIndex = mainBoardStructure.getIndex(toBlock);

        fromBlockRow = 10 - Math.ceil(fromBlockIndex / 10);
        fromBlockCol = fromBlockIndex % 10;
        
        toBlockRow = 10 - Math.ceil(toBlockIndex / 10);
        toBlockCol = toBlockIndex % 10;

        fromXAxis = ((fromBlockCol) * 60) + 30;
        fromYAxis = 540 - ((fromBlockRow) * 60) + 30;

        toXAxis = ((toBlockCol) * 60) + 30;
        toYAxis = 540 - ((toBlockRow) * 60) + 30;

        return {
            fromXaxis: fromXAxis,
            fromYaxis: fromYAxis,
            toXaxis: toXAxis,
            toYaxis: toYAxis
        };
    }

    return ViewGeneration;
}());