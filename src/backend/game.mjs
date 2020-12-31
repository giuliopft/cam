'use strict';

import { BlackCard, WhiteCard } from './card.mjs'
import { User } from './user.mjs'

try {
    let card1 = new BlackCard(`alpha`);
} catch (e) {
    console.log(e);
}
let card2 = new BlackCard(`alpha ___`);
let user = new User(`Giulio`, null);
let user2 = new User(`Giulio`, null);
let user3 = new User(`Giulio`, null);
let user4 = new User(`Giulio`, null);
console.log(`${user.id}, ${user2.id}, ${user3.id}, ${user4.id}`)