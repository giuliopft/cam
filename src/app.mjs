'use strict';

import path from 'path';
import express from 'express';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();
const port = 41726;
const users = new Set();
export const games = new Set();

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`Yey! ${port}`)
})