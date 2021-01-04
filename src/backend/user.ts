'use strict';

import { RGBColor } from "./utils";

export class Avatar {
    readonly skin: RGBColor;
    readonly eyes: RGBColor;
    readonly mouth: RGBColor;
    constructor(skin: RGBColor, eyes: RGBColor, mouth: RGBColor) {
        this.skin = skin;
        this.eyes = eyes;
        this.mouth = mouth;
    }
}

export class User {
    static count = -1;
    readonly name: string;
    readonly avatar: Avatar;
    readonly id: number;
    constructor(name: string, avatar: Avatar) {
        this.name = name;
        this.avatar = avatar;
        this.id = ++User.count;
    }
}