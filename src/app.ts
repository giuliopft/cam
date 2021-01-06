'use strict';

import { BiMap } from '@jsdsl/bimap';
import express from 'express';
import { Game } from './backend/game';
import { User } from './backend/user';

const app = express();
const port = 41726;
const users: BiMap<User, string> = new BiMap();
export const games: BiMap<Game, string> = new BiMap();

app.use(express.static(__dirname + '/static'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

function generateUserToken(): string {
    function shortRandom(): string {
        return Math.random().toString(36).substr(2);
    }
    let r: string = shortRandom() + shortRandom() + shortRandom() + shortRandom();
    if (users.hasValue(r)) {
        return generateUserToken();
    }
    return r;
}