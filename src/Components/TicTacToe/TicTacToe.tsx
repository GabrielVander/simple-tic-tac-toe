import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PlayerProps from "../../Models/PlayerProps/PlayerProps";
import './TicTacToe.css';

function TicTacToe() {
    return (
        <Container className='game-container' fluid='sm'>
            <Row className='game-row border-bottom'>
                <Col
                    className='border-right text-center align-self-center'
                >
                    {PlayerProps.O}
                </Col>
                <Col className='border-right text-center align-self-center'>
                    {PlayerProps.O}
                </Col>
                <Col className='text-center align-self-center'>
                    {PlayerProps.O}
                </Col>
            </Row>
            <Row className='game-row border-bottom'>
                <Col className='border-right text-center align-self-center'>
                    {PlayerProps.X}
                </Col>
                <Col className='border-right text-center align-self-center'>
                    {PlayerProps.O}
                </Col>
                <Col className='text-center align-self-center'>
                    {PlayerProps.X}
                </Col>
            </Row>
            <Row className='game-row'>
                <Col className='border-right text-center align-self-center'>
                    {PlayerProps.X}
                </Col>
                <Col className='border-right text-center align-self-center'>
                    {PlayerProps.X}
                </Col>
                <Col className='text-center align-self-center'>
                    {PlayerProps.O}
                </Col>
            </Row>
        </Container>
    );
}

export default TicTacToe;