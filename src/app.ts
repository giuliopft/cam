'use strict';

import { BiMap } from '@jsdsl/bimap';
import express from 'express';
import { Game } from './backend/game';
import { User } from './backend/user';
import { createServer } from "http";
import { Server, Socket } from "socket.io"

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
const port = 41726;

const users: BiMap<User, string> = new BiMap();
export const games: BiMap<Game, string> = new BiMap();

app.use(express.static(__dirname + '/static'));
io.on('connection', (socket: Socket) => {
    socket.on('disconnect', () => {
        //TODO Add remove associated user
    })
});
httpServer.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

//I should not need this anymore, but I'll leave it here for some time
/* function generateUserToken(): string {
    function shortRandom(): string {
        return Math.random().toString(36).substr(2);
    }
    let r: string = shortRandom() + shortRandom() + shortRandom() + shortRandom();
    if (users.hasValue(r)) {
        return generateUserToken();
    }
    return r;
} */