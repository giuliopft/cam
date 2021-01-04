'use strict';

abstract class Card {
    readonly text: string;
    constructor(text: string) {
        this.text = text;
    }
}

export class BlackCard extends Card {
    constructor(text: string) {
        if (!text.includes(`___`)) {
            throw new Error("Can't create a black card without gaps")
        } else {
            super(text);
        }
    }

    get gaps(): number {
        return (this.text.match(/___/g) || []).length;
    }
}

export class WhiteCard extends Card {
    constructor(text: string) {
        super(text);
    }
}