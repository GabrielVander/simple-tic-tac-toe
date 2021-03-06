import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './TicTacToe.css';
import {inject, observer} from "mobx-react"
import TicTacToeGame from "../../Models/Game/TicTacToeGame";
import GameStatus from "../../Models/Game/GameStatus";
import Button from "react-bootstrap/Button";

interface Props {
    TicTacToeGame?: TicTacToeGame
}

@inject('TicTacToeGame')
@observer
class TicTacToe extends React.Component<Props> {
    render() {
        const {TicTacToeGame: game} = this.props;
        return (
            <Container className='ticTacToe-container' fluid='sm'>
                {game?.gameStatus === GameStatus.ON_GOING
                    ? <h2 className='text-center'>
                        Current turn: {game?.currentPlayer.name}
                    </h2>
                    : game?.gameStatus === GameStatus.PLAYER_WON
                        ? <h1 className='text-center'>
                            GAME OVER<br/>{game?.currentPlayer.name} won!
                        </h1>
                        : <h1 className='text-center'>
                            GAME OVER<br/>It's a draw!
                        </h1>
                }

                {game?.board.map((row, rowIndex) => (
                    <Row key={rowIndex} className={'ticTacToe-row' + (rowIndex !== 2 ? ' border-bottom' : '')}>
                        {row.map((prop, colIndex) => (
                            <Col
                                key={colIndex}
                                className={
                                    'ticTacToe-col ' +
                                    'text-center ' +
                                    'align-self-center' + (colIndex === 1 ? ' border-left border-right' : '')}
                                onClick={() => game?.makeMove(colIndex, rowIndex)}
                            >
                                {prop}
                            </Col>
                        ))}
                    </Row>
                ))}
                {game?.gameStatus !== GameStatus.ON_GOING &&
                    <Row className='justify-content-center'>
                        <Button variant='primary' onClick={() => game?.restart()} >Rematch</Button>
                    </Row>
                }
            </Container>
        );
    }
}

export default TicTacToe;