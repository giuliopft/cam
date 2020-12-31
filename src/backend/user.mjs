'use strict';

export class Avatar {
    constructor(color, eyes, mouth) {
        this._color = color;
        this._eyes = eyes;
        this._mouth = mouth;
    }
    get color() {
        return this._color;
    }
    get eyes() {
        return this._eyes;
    }
    get mouth() {
        return this._mouth;
    }
}

export class User {
    static count = -1;
    constructor(name, avatar) {
        this._name = name;
        this._avatar = avatar;
        this._id = ++User.count;
    }
    get name() {
        return this._name;
    }
    get eyes() {
        return this._eyes;
    }
    get id() {
        return this._id;
    }
}