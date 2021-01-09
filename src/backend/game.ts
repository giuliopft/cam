'use strict';

import { BlackCard, WhiteCard } from './card'
import { User } from './user'
import { games } from '../app'

interface Settings {
    readonly whiteCardsPerPlayer: number;
    readonly maxScore: number;
}

export class Player {
    readonly user: User;
    private _score: number = 0;
    readonly whiteCards: WhiteCard[] = [];
    readonly game: Game;

    constructor(user: User, game: Game) {
        this.user = user;
        this.game = game;
    }

    get score(): number {
        return this._score;
    }

    set score(score) {
        if (score > 0) {
            this._score = Math.floor(score);
        } else {
            throw new Error("Players cannot have negative scores");
        }
    }

    play(whiteCard: WhiteCard) {
        if (!this.whiteCards.includes(whiteCard)) {
            throw new Error(`That player doesn't have that card`)
        }
        this.whiteCards.splice(this.whiteCards.lastIndexOf(whiteCard), 1);
        this.game.round?.whiteCards.get(this)?.push(whiteCard);
    }
}

export class Round {
    readonly czar: Player;
    readonly blackCard: BlackCard;
    readonly whiteCards: Map<Player, WhiteCard[]>

    constructor(czar: Player, blackCard: BlackCard, whiteCards: Map<Player, WhiteCard[]>) {
        this.czar = czar;
        this.blackCard = blackCard;
        this.whiteCards = whiteCards;
    }
}

export class Game {
    readonly admin: Player;
    readonly players: Player[] = [];
    readonly blackCards: BlackCard[]; //This (instead of a Set) will help us with random stuff
    readonly whiteCards: WhiteCard[]; //Same here
    readonly settings: Settings;
    readonly id: String;
    private _round: Round | null = null;

    constructor(admin: Player, blackCards: BlackCard[], whiteCards: WhiteCard[], settings: Settings) {
        this.admin = admin;
        this.players.push(admin);
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
        if (games.hasValue(id)) {
            return this._generateId();
        }
        return id;
    }

    get round(): Round | null {
        return this._round;
    }

    nextRound(winner: Player | null = null): Round | null {
        let next: Round;
        let map: Map<Player, WhiteCard[]> = new Map();
        this.players.forEach(player => map.set(player, []));
        if (winner != null && this._round != null) { //If the game has already begun
            //After giving a point to the winner, return null if (s)he's also won the game
            if (++winner.score == this.settings.maxScore) {
                return null;
            }
            //Choosing next czar
            let czar: Player = this.players[(this.players.indexOf(this._round.czar) + 1) % this.players.length];
            map.delete(czar);
            next = new Round(czar,
                //Choosing a random black card
                this.blackCards[Math.floor(Math.random() * this.blackCards.length)],
                //Empty map (it will be filled later, as players choose which card(s) to play)
                map);
        } else { //If the game hasn't begun yet
            let czar: Player = this.players[0];
            map.delete(czar);
            next = new Round(czar,
                //Choosing a random black card
                this.blackCards[Math.floor(Math.random() * this.blackCards.length)],
                //Empty map (it will be filled later, as players choose which card(s) to play)
                map);
        }
        this._giveWhiteCards();
        this._round = next;
        return this._round;
    }

    private _giveWhiteCards(): void {
        for (let player of this.players) {
            let i: number = this.settings.whiteCardsPerPlayer - player.whiteCards.length;
            let j: number = this.whiteCards.length;
            for (let whiteCard of this.whiteCards) {
                if (i <= 0) break;
                if (Math.random() <= (i / j)) {
                    player.whiteCards.push(whiteCard);
                    i--;
                }
                j--;
            }
        }
    }
}