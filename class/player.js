const { Food } = require("./food");

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {

        // Fill this in
        const item = this.currentRoom.getItemByName(itemName);

        if(item){
            this.items.push(item);
            this.currentRoom.removeItem(item);
            return true;
        }else{
            return false;
        }
}

    dropItem(itemName) {

        // Fill this in
        const itemIndex = this.items.findIndex(item => item.name === itemName);

        if(itemIndex !== -1){
            const item = this.items.splice(itemIndex, 1)[0];
            this.currentRoom.addItem(item);
            return true;
        }else{
            return false;
        }
    }

    eatItem(itemName) {
        // Fill this in
        const item = this.getItemByName(itemName);

        if(item instanceof Food){
            const index = this.items.indexOf(item);
            
            if(index !== -1){
                this.items.splice(index, 1);
                return true;
            }
        }
        return false;
    }

    getItemByName(name) {

        // Fill this in
        return this.items.find(item => item.name === name);
    }
}

module.exports = {
  Player,
};
