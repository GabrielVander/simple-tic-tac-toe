import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import TicTacToe from "../TicTacToe/TicTacToe";
import './GamePage.css';

function GamePage() {
    return (
        <div className='gamePage'>
            <Navbar
                bg="dark"
                variant="dark"
                fixed="top"
                expand="lg"
            >
                <Navbar.Brand href="home">Tic Tac Toe</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/*<Nav.Link href="home">Home</Nav.Link>*/}
                        {/*<Nav.Link href="features">Features</Nav.Link>*/}
                        {/*<Nav.Link href="pricing">Pricing</Nav.Link>*/}
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search match" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <TicTacToe/>
        </div>
    );
}

export default GamePage;