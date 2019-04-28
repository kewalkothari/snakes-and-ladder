
var MainBoardStructure = (function () {
    let mainBoardStructureArr;
    function MainBoardStructure() {
        mainBoardStructureArr = [];
    }
    
    MainBoardStructure.prototype.getBoardStructureArr = function() {
        return mainBoardStructureArr;
    }

    MainBoardStructure.prototype.getIndex = function(position) {
        return mainBoardStructureArr.indexOf(position);
    }
    
    MainBoardStructure.prototype.setBoardStructureArr = function(mainBoardArr) {
        mainBoardStructureArr = mainBoardArr;
    }

    return MainBoardStructure;
}());

var Ladder = (function() {
    function Ladder(from, to) {
        this.from = from;
        this.to = to;
    }

    return Ladder;
}());

var Snake = (function() {
    function Snake(from, to) {
        this.from = from;
        this.to = to;
    }

    return Snake;
}());

var SnakesAndLadder = (function() {
    let snakes;
    let ladders;

    function SnakesAndLadder() {
        snakes = [];
        ladders = [];
    }

    SnakesAndLadder.prototype.addSnake = function(snake) {
        snakes.push(snake);
    }

    SnakesAndLadder.prototype.addLadder = function(ladder) {
        ladders.push(ladder);
    }

    SnakesAndLadder.prototype.getSnakes = function() {
        return snakes;
    }

    SnakesAndLadder.prototype.getLadders = function() {
        return ladders;
    }

    SnakesAndLadder.prototype.getLadderJump = function (position) {
        for(let x = 0; x < ladders.length; x++) {
            if(position === ladders[x].from) {
                return ladders[x].to;
            }
        }
        return position;
    }

    SnakesAndLadder.prototype.getSnakeDip = function(position) {
        for(let x = 0; x < snakes.length; x++) {
            if(position === snakes[x].from) {
                return snakes[x].to;
            }
        }
        return position;
    }
    
    return SnakesAndLadder;
}());
