import PlayerProps from "../PlayerProps/PlayerProps";
import Player from "../Player/Player";
import GameStatus from "./GameStatus";

interface TicTacToeGame {
    board: Array<Array<PlayerProps>>
    currentPlayer: Player
    gameStatus: GameStatus

    makeMove(x: number, y: number): void
}

export default TicTacToeGame;