'use strict';

import path from 'path';
import express from 'express';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();
const port = 41726;

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`Yey! ${port}`)
})