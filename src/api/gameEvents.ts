import { WhiteCard } from "../backend/card";
import { Game, Player, Round } from "../backend/game";

abstract class GameEvent {
    readonly game: Game;

    constructor(game: Game) {
        this.game = game;
    }
}

class WhiteCardPlayedEvent extends GameEvent {
    readonly player: Player;
    readonly whiteCard: WhiteCard;
    readonly last: boolean;

    constructor(game: Game, player: Player, whiteCard: WhiteCard, last: boolean) {
        super(game);
        this.player = player;
        this.whiteCard = whiteCard;
        this.last = last;
    }
}

class WinnerSelectedEvent extends GameEvent {
    readonly player: Player;
    readonly whiteCard: WhiteCard;
    readonly hasWonGame: boolean;
    
    constructor(game: Game, player: Player, whiteCard: WhiteCard, hasWonGame: boolean) {
        super(game);
        this.player = player;
        this.whiteCard = whiteCard;
        this.hasWonGame = hasWonGame;
    }
}

class PlayerLeftEvent extends GameEvent {
    readonly player: Player;
    
    constructor(game: Game, player: Player) {
        super(game);
        this.player = player;
    }
}

class PlayerJoinedEvent extends GameEvent {
    readonly player: Player;
    
    constructor(game: Game, player: Player) {
        super(game);
        this.player = player;
    }
}


class NewRoundEvent extends GameEvent {
    readonly round: Round;
    readonly first: boolean;

    constructor(game: Game, round: Round, first: boolean) {
        super(game);
        this.round = round;
        this.first = first;
    }
}