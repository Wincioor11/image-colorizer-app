import React, { Component } from 'react'
import {ModalFooter, Container, Navbar, Col, Row} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';


export class Footer extends Component {
    
    render() {
        return (
            <ModalFooter variant="secondary" style={footerStyle}>
                <Container fluid style={{height: '100%'}}>
                    <Row>
                        <Col xs={12} md={8}>
                            <Navbar.Text style={copyRightStyle}>(c) Michał Winciorek, 2020 | All rights reserved </Navbar.Text>
                        </Col>
                        <Col xs={6} md={4}> 
                            <div style={socialIconsStyle}>
                                <SocialIcon style={{height: '6vh', width: '6vh'}} url="http://github.com/Wincioor11" />{' '}
                                <SocialIcon style={{height: '6vh', width: '6vh'}} url="https://www.linkedin.com/in/michal-winciorek/" />
                            </div>
                        </Col>
                    </Row>
                    
                    
                </Container>
            </ModalFooter>
        )
    }
}

const footerStyle={
    background: '#282c34',
    textAlign: 'left',
    marginTop: '2vh',
    height: '10vh',
}
const copyRightStyle={
    color: '#ffffff',
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    height: '100%'
}
const socialIconsStyle={
    paddingLeft: 240,
    paddingRight: 20,
    textAlign: 'right',
    // margin: 0,
    // marginBottom: '1vh',
    // marginTop:  '1vh',

}

export default Footer
