'use strict';

import express from 'express';
import { Game } from './backend/game';
import { User } from './backend/user';

const app = express();
const port = 41726;
const users : Set<User> = new Set();
export const games : Set<Game> = new Set();

app.use(express.static(__dirname + '/static'));

app.listen(port, () => {
    console.log(`Yey! ${port}`)
})