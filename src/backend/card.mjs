'use strict';

class Card {
    constructor(text) {
        if (this.constructor == Card) {
            throw new Error("Can't instantiate Card, you need to choose between BlackCard and WhiteCard")
        } else {
            this._text = text;
        }
    }

    get text() {
        return this._text;
    }
}

export class BlackCard extends Card {
    constructor(text) {
        if (!text.includes(`___`)) { 
            throw new Error("Can't create a black card without gaps")
        } else {
            super(text);
        }
    }

    get gaps() {
        return (this._text.match(/___/g) || []).length;
    }
}

export class WhiteCard extends Card {
    constructor(text) {
        super(text);
    }
}