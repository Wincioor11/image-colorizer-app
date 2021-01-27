import React, { Component } from 'react'
import logo from '../images/logo.png'
import {Navbar} from 'react-bootstrap';


export class NavbarHeader extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" style={headerStyle}>
                <Navbar.Brand href="/">
                <img
                    alt=""
                    src={logo}
                    width="50"
                    height="50"
                    // className="d-inline-block align-top"
                />{' '}
                Image Colorizer App by Michał Winciorek
                </Navbar.Brand>
            </Navbar>
        )
    }
}

const headerStyle={
    marginBottom: '2vh',
    height: '10vh',
}

export default Navbar
