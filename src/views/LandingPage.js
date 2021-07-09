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

import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from 'reactstrap';

// core components
import PagesNavbar from '../components/Navbars/PagesNavbar.js';
import Footer from '../components/Footer/Footer.js';

class LandingPage extends React.Component {
  state = {
    comingSoonModalIsOpen: false
  };
  componentDidMount() {
    document.body.classList.toggle('landing-page');
  }
  componentWillUnmount() {
    document.body.classList.toggle('landing-page');
  }
  render() {
    const invis = {opacity: 0, width: 0, height: 0, pointerEvents: 'none', position: 'absolute'};
    return (
      <>
        <PagesNavbar />
        <div className='wrapper'>
          <header className='page-header'>
            
            <div className='content-center'>
              <h1 style={invis}><strong>Blue Wifi</strong></h1>
              <h2 style={invis}>Good prices, best connection</h2>
              <h2 style={invis}>Bringing internet to those who need it.</h2>
              <Row className='row-grid justify-content-between align-items-center text-left'>
                <Col lg='6' md='6'>
                  <div className='btn-wrapper my-3 main-prie'>
                    <h2 className='main-price text-style-main' href='/pricing'>
                      <span
                        style={{
                          fontSize: '8rem',
                          fontWeight: 'bolder'
                        }}
                      >
                        R249
                      </span>
                      <span>p/m</span>
                    </h2>
                  </div>

                  <div style={{paddingTop: '1vh', paddingBottom: '1vh'}}><h2><p style={{ fontWeight: 'bold', margin: '-1.5rem auto' }} className='text-white'>
                      2.5 mbps
                    </p></h2>
                    <h2><p style={{ fontWeight: 'bold', margin: '-1.5rem auto'  }} className='text-white'>
                      R550 Installation
                    </p></h2>
                    <h2><p style={{ fontWeight: 'bold', margin: '-1.5rem auto'  }} className='text-white'>
                      Save on a <span style={{fontSize: '3rem'}}>FREE</span> router!
                    </p></h2></div>
                  <p>
                    <i>Fast. Affordable. Reliable.</i>
                  </p>
                  <a href='/book'>
                    <Button
                      className='nav-link  d-lg-block mt-2 action-btn'
                      color='info'
                    >
                      Get it now!
                    </Button>
                  </a>
                </Col>
                <Col lg='4' md='5'>
                  <img
                    alt='Blue Wifi'
                    className='img-fluid'
                    src={require('../assets/img/wifi.svg')}
                    style={{transform: 'scale(1)'}}
                  />
                </Col>
              </Row>
            </div>
          </header>
          <section className='section section-lg'>
            <section className='section'>
              
              <Container>
                <Row className='row-grid justify-content-between'>
                  <Col className='mt-lg-5' md='5'>
                    <Row>
                      <Col className='px-2 py-2' lg='6' sm='12'>
                        <Card className='card-stats'>
                          <CardBody>
                            <Row>
                              <Col md='4' xs='5'>
                                <div className='icon-big text-center icon-warning'>
                                  <i className='tim-icons icon-trophy text-warning' />
                                </div>
                              </Col>
                              <Col md='8' xs='7'>
                                <div className='numbers'>
                                  <CardTitle tag='p'>Great</CardTitle>
                                  <p />
                                  <p className='card-category'>Service</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className='px-2 py-2' lg='6' sm='12'>
                        <Card className='card-stats upper bg-default'>
                          <CardBody>
                            <Row>
                              <Col md='4' xs='5'>
                                <div className='icon-big text-center icon-warning'>
                                  <i className='tim-icons icon-coins text-white' />
                                </div>
                              </Col>
                              <Col md='8' xs='7'>
                                <div className='numbers'>
                                  <CardTitle tag='p'>R249</CardTitle>
                                  <p />
                                  <p className='card-category'>per month</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col className='px-2 py-2' lg='6' sm='12'>
                        <Card className='card-stats'>
                          <CardBody>
                            <Row>
                              <Col md='4' xs='5'>
                                <div className='icon-big text-center icon-warning'>
                                  <i className='tim-icons icon-gift-2 text-info' />
                                </div>
                              </Col>
                              <Col md='8' xs='7'>
                                <div className='numbers'>
                                  <CardTitle tag='p'>R550</CardTitle>
                                  <p />
                                  <p className='card-category'>Installation</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className='px-2 py-2' lg='6' sm='12'>
                        <Card className='card-stats'>
                          <CardBody>
                            <Row>
                              <Col md='4' xs='5'>
                                <div className='icon-big text-center icon-warning'>
                                  <i className='tim-icons icon-credit-card text-success' />
                                </div>
                              </Col>
                              <Col md='8' xs='7'>
                                <div className='numbers'>
                                  <CardTitle tag='p'>Super</CardTitle>
                                  <p />
                                  <p className='card-category'>Speeds</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col md='6'>
                    <div className='pl-md-5'>
                      <h2>
                        Unlimited Data <br />
                        Unlimited Power
                      </h2>
                      <p>
                        Blue Wifi brings you the best, most comprehensive wifi
                        right to your doorstep. Feel it's amazing coverage and
                        connection, without buffering, and without trouble. Gain
                        unlimited data from only R249 a month and feel the power
                        of Blue.
                      </p>
                      <br />
                      <p>
                        We pride ourselves in excellent service and quick
                        responses to any issues. Connect to Blue and connect to
                        life.
                      </p>
                      <br />
                      <a
                        className='font-weight-bold text-info mt-5'
                        href='/pricing'
                      >
                        Monthly Pricing{' '}
                        <i className='tim-icons icon-minimal-right text-info' />
                      </a>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </section>
          <section className='section section-lg'>
            
            
            <Container>
              <Row className='justify-content-center'>
                <Col lg='12'>
                  <h2
                    className='text-center'
                    style={{
                      margin: '0 auto',
                      marginBottom: '-5vh'
                    }}
                  >
                    Bringing you only the best
                  </h2>
                  <Row className='row-grid justify-content-center'>
                    <Col lg='3'>
                      <div className='info'>
                        <div className='icon icon-primary'>
                          <i className='tim-icons icon-money-coins' />
                        </div>
                        <h4 className='info-title'>Low Cost</h4>
                        <hr className='line-primary' />
                        <p>
                          From only R400 a month, Blue Wifi offers you the best
                          experience at the best price.
                        </p>
                      </div>
                    </Col>
                    <Col lg='3'>
                      <div className='info'>
                        <div className='icon icon-warning'>
                          <i className='tim-icons icon-chart-pie-36' />
                        </div>
                        <h4 className='info-title'>Vast Coverage</h4>
                        <hr className='line-warning' />
                        <p>
                          We bring you the best coverage and connection you
                          could ever dream of. When we come to your area, you
                          will have full speeds and a great connection, all the
                          time.
                        </p>
                      </div>
                    </Col>
                    <Col lg='3'>
                      <div className='info'>
                        <div className='icon icon-success'>
                          <i className='tim-icons icon-single-02' />
                        </div>
                        <h4 className='info-title'>Personal Assistance</h4>
                        <hr className='line-success' />
                        <p>
                          We pride ourselves in giving the best, down to Earth
                          service you could ever imagine. We are only a text,
                          phone call or email away from getting you back online
                          in an instant.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className='section section-lg section-safe' style={{marginBottom: '10rem'}}>
            
            <Container>
              <Row className='row-grid justify-content-between'>
                <Col md='5'>
                  <img
                    alt='...'
                    className='img-fluid floating'
                    src={require('../assets/img/data.svg')}
                  />
                  <Card className='card-stats bg-danger'>
                    <CardBody>
                      <div className='justify-content-center'>
                        <div className='numbers'>
                          <CardTitle tag='p'>100%</CardTitle>
                          <p className='card-category text-white'>Safe</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className='card-stats bg-info'>
                    <CardBody>
                      <div className='justify-content-center'>
                        <div className='numbers'>
                          <CardTitle tag='p'>Unlimited</CardTitle>
                          <p className='card-category text-white'>Data</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className='card-stats bg-default'>
                    <CardBody>
                      <div className='justify-content-center'>
                        <div className='numbers'>
                          <CardTitle tag='p'>Fast</CardTitle>
                          <p className='card-category text-white'>Speeds</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md='6'>
                  <div className='px-md-5'>
                    <hr className='line-success' />
                    <h3>Awesome features</h3>
                    <p>
                      Here are some great features you can look forward to when
                      using our wifi
                    </p>
                    <ul className='list-unstyled mt-5'>
                      <li className='py-2'>
                        <div className='d-flex align-items-center'>
                          <div className='icon icon-success mb-2'>
                            <i className='tim-icons icon-vector' />
                          </div>
                          <div className='ml-3'>
                            <h5>Connection from anywhere</h5>
                          </div>
                        </div>
                      </li>
                      <li className='py-2'>
                        <div className='d-flex align-items-center'>
                          <div className='icon icon-success mb-2'>
                            <i className='tim-icons icon-tap-02' />
                          </div>
                          <div className='ml-3'>
                            <h5>Easy to use network</h5>
                          </div>
                        </div>
                      </li>
                      <li className='py-2'>
                        <div className='d-flex align-items-center'>
                          <div className='icon icon-success mb-2'>
                            <i className='tim-icons icon-single-02' />
                          </div>
                          <div className='ml-3'>
                            <h5>Super friendly support team</h5>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          
          <Footer/>
        </div>
        
        </>
    );
  }
}

export default LandingPage;
