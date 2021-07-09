/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import {
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col
} from 'reactstrap';


import {FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton} from 'react-share'

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <Container>
                    <Row>
                        <Col md="3">
                            <p className="title" style={{fontSize: '2rem'}}>Blue Wifi</p>
                        </Col>
                        <Col md="3">
                            <Nav>
                            <NavItem>
                                    <NavLink to="/pricing" tag={Link}>
                                    <h6>Pricing List</h6>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/book" tag={Link}>
                                    <h6>Book Now</h6>
                                    </NavLink>
                                </NavItem>
                                
                                <NavItem>
                                    <NavLink to="/contact" tag={Link}>
                                        <h6>Contact Us</h6>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col md="3">
                            <Nav>
                            <NavItem>
                                    <NavLink to="/issue" tag={Link}>
                                        <h6>Having an issue?</h6>
                                    </NavLink>
                                </NavItem>
                                
                                <NavItem>
                                    <NavLink to="/terms" tag={Link}>
                                        <h6>Terms and conditions</h6>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink to="/aup" tag={Link}>
                                        <h6>Acceptable Use Policy</h6>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>

                        <Col md="3">
                            <h3 className="title">Spread the word:</h3>
                            <div className="btn-wrapper profile">
                             
                                
                                <FacebookShareButton url="https://www.bluewifi.co.za"><FacebookIcon size="50" round/></FacebookShareButton>
                                <WhatsappShareButton url="https://www.bluewifi.co.za" style={{marginLeft: '1rem'}}><WhatsappIcon size="50" round/></WhatsappShareButton>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;
