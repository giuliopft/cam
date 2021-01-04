'use strict';

import { BlackCard, WhiteCard } from './card'
import { User } from './user'
import { games } from '../app'

interface Settings {
    readonly whiteCardsPerPlayer: number;
}

class Player {
    readonly user: User;
    private _points: number;
    readonly whiteCards: WhiteCard[];
    constructor(user: User, points: number, whiteCards: WhiteCard[]) {
        this.user = user;
        this._points = points;
        this.whiteCards = whiteCards;
    }

    get points(): number {
        return this._points;
    }

    set points(points) {
        if (points > 0) {
            this._points = Math.floor(points);
        } else {
            throw new Error("Players cannot have less than 0 points");
        }
    }
}

/*class Round {
    constructor(czar,) {
        //TODO Create here
    }
}*/

export class Game {
    readonly admin: Player;
    readonly players: Player[];
    readonly blackCards: Set<BlackCard>
    readonly whiteCards: Set<WhiteCard>
    readonly settings: Settings;
    readonly id: String;

    constructor(admin: Player, players: Player[], blackCards: Set<BlackCard>, whiteCards: Set<WhiteCard>, settings: Settings) {
        this.admin = admin;
        this.players = players;
        this.blackCards = blackCards;
        this.whiteCards = whiteCards;
        this.settings = settings;
        this.id = this._generateId();
    }

    private _generateId(): String {
        let id = ``;
        for (let i = 0; i < 8; i++) {
            id += String.fromCodePoint(Math.floor(Math.random() * 26 + 65));
        }
        for (let game of games) {
            if (game.id.valueOf() === id.valueOf()) {
                return this._generateId();
            }
        }
        return id;
    }

    nextRound() {
        //TODO This
    }
}