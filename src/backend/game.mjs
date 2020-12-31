'use strict';

import { BlackCard, WhiteCard } from './card.mjs'
import { User } from './user.mjs'
import { games } from '../app.mjs'

const protoSettings = {
    whiteCardsPerPlayer = 10,
}

class Player {
    constructor(user, points, whiteCards) {
        this._user = user;
        this.points = points;
        this._whiteCards = whiteCards;
    }

    get user() {
        return this._user;
    }

    get points() {
        return this.points;
    }

    set points(points) {
        this.points = points;
    }

    get whiteCards() {
        return this._whiteCards;
    }

    addWhiteCards(...whiteCards) {
        this._whiteCards.push(whiteCards);
    }
}

class Round {
    constructor(czar,) {
        //TODO Create here
    }
}

class Game {
    constructor(admin, players, blackCards, whiteCards, settings) {
        this._admin = admin;
        this._players = players;
        this._blackCards = blackCards;
        this._whiteCards = whiteCards;
        this._settings = settings;
        this._id = this._generateId();
    }

    get admin() {
        return this._admin;
    }

    get players() {
        return this._players;
    }

    get blackCards() {
        return this._blackCards;
    }

    get whiteCards() {
        return this._whiteCards;
    }

    get settings() {
        return this._settings;
    }

    get id() {
        return this._id;
    }

    _generateId() {
        let id = ``;
        for (let i = 0; i < 8; i++) {
            id += String.fromCodePoint(Math.floor(Math.random() * 26 + 65));
        }
        for (let game in games) {
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