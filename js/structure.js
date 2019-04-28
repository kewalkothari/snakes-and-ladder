/**
 * Class contains the array and index mapping of the board structure.
 */
var MainBoardStructure = (function () {
    let mainBoardStructureArr;

    /**
     * Constructor
     */
    function MainBoardStructure() {
        mainBoardStructureArr = [];
    }

    /**
     * Returns the board structure array.
     */
    MainBoardStructure.prototype.getBoardStructureArr = function () {
        return mainBoardStructureArr;
    }

    /**
     * Returns the index of the position.
     * @param {number} position 
     */
    MainBoardStructure.prototype.getIndex = function (position) {
        return mainBoardStructureArr.indexOf(position);
    }

    /**
     * Sets the board structure array.
     * @param {number[]} mainBoardArr 
     */
    MainBoardStructure.prototype.setBoardStructureArr = function (mainBoardArr) {
        mainBoardStructureArr = mainBoardArr;
    }

    return MainBoardStructure;
}());


/**
 * Class contains ladder information.
 */
var Ladder = (function () {

    /**
     * Constructor
     * @param {int} from 
     * @param {int} to 
     */
    function Ladder(from, to) {
        this.from = from;
        this.to = to;
    }

    return Ladder;
}());


/**
 * Class contains snake information.
 */
var Snake = (function () {

    /**
     * Constructor
     * @param {int} from 
     * @param {int} to 
     */
    function Snake(from, to) {
        this.from = from;
        this.to = to;
    }

    return Snake;
}());


/**
 * Class contains details of all snakes and ladders.
 */
var SnakesAndLadder = (function () {
    let snakes;
    let ladders;

    /**
     * Constructor
     */
    function SnakesAndLadder() {
        snakes = [];
        ladders = [];
    }

    /**
     * Add snake.
     * @param {Snake} snake 
     */
    SnakesAndLadder.prototype.addSnake = function (snake) {
        snakes.push(snake);
    }

    /**
     * Add ladder.
     * @param {Ladder} ladder 
     */
    SnakesAndLadder.prototype.addLadder = function (ladder) {
        ladders.push(ladder);
    }

    /**
     * Returns the array of all snakes.
     */
    SnakesAndLadder.prototype.getSnakes = function () {
        return snakes;
    }

    /**
     * Returns the array of all ladders.
     */
    SnakesAndLadder.prototype.getLadders = function () {
        return ladders;
    }

    /**
     * Returns the new position if the ladder jumps.
     * @param {int} position 
     */
    SnakesAndLadder.prototype.getLadderJump = function (position) {
        for (let x = 0; x < ladders.length; x++) {
            if (position === ladders[x].from) {
                return ladders[x].to;
            }
        }
        return position;
    }

    /**
     * Returns the new position if the snake dips.
     * @param {int} position 
     */
    SnakesAndLadder.prototype.getSnakeDip = function (position) {
        for (let x = 0; x < snakes.length; x++) {
            if (position === snakes[x].from) {
                return snakes[x].to;
            }
        }
        return position;
    }

    return SnakesAndLadder;
}());
