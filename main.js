const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
    constructor(field) {
        this.field = field;
    }

    print() {
        for (let i = 0; i < this.field.length; i++) {
            console.log(this.field[i].join(""));
        }
    }
}

const myField = new Field([
    ["*", "░", "O"],
    ["░", "O", "░"],
    ["░", "^", "░"],
]);

myField.print();
