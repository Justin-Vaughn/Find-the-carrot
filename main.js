// TODO: Add random generator to make a gameboard (Width x Height) + carrot placement
// TODO: Make a % of the game board holes

const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
    constructor(field) {
        this._field = field;
    }

    get field() {
        return this._field;
    }

    play() {    // loops until the player wins, falls in a hole, or goes out of bounce
        try {
            let col = 0;    // starting pos
            let row = 0;    // startig pos
            const gameBoard = this.field;
            let playing = true;

            while(playing === true) {
                this.print()    // prints gameboard each loop
                const position = prompt("Where would you like to go?: ").toLowerCase();

                if (position === "u") { // player moves up
                    col--;

                    if (gameBoard[col][row] === "^") {  // if player found the carrot
                        playing = false;
                    } else if (gameBoard[col][row] === "O"){
                        throw Error("You fell in a hole!");
                    }

                    gameBoard[col][row] = "*";
                } else if (position === "d") {  // player moves down
                    col++;

                    if (gameBoard[col][row] === "^") {  // if player found the carrot
                        playing = false;
                    } else if (gameBoard[col][row] === "O"){
                        throw Error("You fell in a hole!");
                    }

                    gameBoard[col][row] = "*";
                } else if (position === "l") {  // player moves left
                    row--;

                    if (gameBoard[col][row] === "^") {  // if player found the carrot
                        playing = false;
                    } else if (gameBoard[col][row] === "O"){
                        throw Error("You fell in a hole!");
                    }

                    gameBoard[col][row] = "*";
                } else if (position === "r") {  // player moves right
                    row++;

                    if (gameBoard[col][row] === "^") {  // if player found the carrot
                        playing = false;
                    } else if (gameBoard[col][row] === "O"){
                        throw Error("You fell in a hole!");
                    }

                    gameBoard[col][row] = "*";
                } else {
                    throw Error("Invalid input");
                }
            }
            console.log("\n\n\n\n\nCongrats you found the carrot!\n\n\n\n\n");
        } catch(e) {
            console.log("\n\n\n\n\n" + e + "\n\n\n\n\n");
        }

    }

    print() {   // print method displays the game board
        for (let i = 0; i < this._field.length; i++) {
            console.log(this._field[i].join(""));
        }
    }

    isValidSpace(col, row) {
        const space = this._field[col][row];
        return space !== "O";
    }
}

const myField = new Field([
    ["*", "░", "O", "░", "░", "O"],
    ["░", "O", "░", "░", "O", "░"],
    ["░", "O", "░", "░", "O", "O"],
    ["░", "░", "O", "O", "░", "░"],
    ["░", "O", "░", "O", "░", "O"],
    ["░", "░", "░", "░", "░", "░"],
    ["░", "░", "O", "░", "░", "░"],
    ["░", "O", "░", "O", "O", "░"],
    ["░", "░", "░", "O", "░", "░"],
    ["░", "░", "░", "░", "O", "O"],
    ["░", "O", "░", "░", "░", "O"],
    ["░", "░", "░", "O", "O", "░"],
    ["░", "░", "O", "░", "░", "O"],
    ["░", "O", "░", "^", "░", "░"],
    ["░", "░", "░", "░", "O", "O"],
    ["░", "░", "O", "O", "░", "░"],
    ["░", "O", "░", "░", "O", "░"],
    ["░", "░", "░", "░", "░", "░"],
    ["░", "░", "O", "░", "░", "░"],
    ["░", "O", "░", "░", "░", "O"],
    ["░", "░", "░", "░", "░", "░"],
    ["░", "░", "O", "░", "O", "░"],
    ["░", "O", "░", "░", "░", "O"],
    ["░", "O", "░", "O", "░", "░"],
]);

myField.play()