import TicTacToeGame from "../Models/Game/TicTacToeGame";
import PlayerProps from "../Models/PlayerProps/PlayerProps";
import Player from "../Models/Player/Player";
import {action, computed, observable} from "mobx"
import PlayerImpl from "../Models/Player/PlayerImpl";
import GameStatus from "../Models/Game/GameStatus";

class TicTacToeGameImpl implements TicTacToeGame {
    @observable private _board = [
        [
            PlayerProps.EMPTY,
            PlayerProps.EMPTY,
            PlayerProps.EMPTY,
        ],
        [
            PlayerProps.EMPTY,
            PlayerProps.EMPTY,
            PlayerProps.EMPTY,
        ],
        [
            PlayerProps.EMPTY,
            PlayerProps.EMPTY,
            PlayerProps.EMPTY,
        ],
    ];

    @observable private _currentPlayer = this.player1;

    @observable private _gameStatus: GameStatus = GameStatus.ON_GOING;

    private _player1 = new PlayerImpl('Player 1', PlayerProps.X);

    private _player2= new PlayerImpl('Player 2', PlayerProps.O);

    @action makeMove(x: number, y: number): void {
        if(this._gameStatus === GameStatus.ON_GOING && this._board[y][x] === PlayerProps.EMPTY){
            this._board[y][x] = this.currentPlayer.prop;
            if(this.checkWin(x, y)) {
                this._gameStatus = GameStatus.PLAYER_WON;
                return;
            }
            if(this.checkDraw()){
                this._gameStatus = GameStatus.DRAW;
                return;
            }
            this.nextPlayer();
        }
    }

    @computed get board(): Array<Array<PlayerProps>> {
        return this._board;
    }

    @computed get gameStatus(): any {
        return this._gameStatus;
    }

    @computed get currentPlayer(): Player {
        return this._currentPlayer;
    }

    private get player1(): Player {
        return this._player1;
    }

    private nextPlayer(): void {
        this._currentPlayer =
            this._currentPlayer.id === this._player1.id
            ? this._player2
            : this._player1
    }

    private checkWin(x: number, y: number): boolean {
       return this.checkRow(y)
           || this.checkCol(x)
           || this.checkMainDiag()
           || this.checkSecondaryDiag();
    }

    private checkSecondaryDiag() {
        return this._board.every((row, index) => row[this._board.length - 1 - index] === this._currentPlayer.prop);
    }

    private checkRow(row: number) {
        return this._board[row].every((prop: PlayerProps) => prop === this._currentPlayer.prop);
    }

    private checkCol(x: number) {
        return this._board.every((row) => row[x] === this._currentPlayer.prop);
    }

    private checkMainDiag() {
        return this._board.every((row, index) => row[index] === this._currentPlayer.prop);
    }

    private checkDraw(): boolean {
        return this._board.flat(2).findIndex((prop) => prop === PlayerProps.EMPTY) === -1;
    }
}

const store = new TicTacToeGameImpl();

export default store;