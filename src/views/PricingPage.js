import React from 'react';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
  NavLink
} from 'reactstrap';

// core components
import PagesNavbar from '../components/Navbars/PagesNavbar.js';
import Footer from '../components/Footer/Footer.js';
import { Link } from 'react-router-dom';
class PricingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };

    this.toggleModal = this.toggleModal.bind(this);
  }
  componentDidMount() {
    document.body.classList.toggle('landing-page');
  }
  componentWillUnmount() {
    document.body.classList.toggle('landing-page');
  }
  toggleModal() {
    this.setState((state) => ({ modalIsOpen: !state.modalIsOpen }));
  }
  render() {
    return (
      <>
        <PagesNavbar />
        

        <div className='wrapper' style={{ paddingTop: '16vh' }}>
          <div className='section' >
            <Container className='align-items-center' >
              
              
              

              <Row style={{ display: 'flex', justifyContent: 'space-between'}} className='mt-3' >
                
                <Col md='4' className='col mt-5 mb-3'>
                <Card className='card-coin card-plain'>
                    <CardHeader>
                      <img
                        alt='...'
                        className='img-center img-fluid coin'
                        src={require('../assets/img/bronze.png')}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row className="center">
                        <Col className='text-center' md='12'>
                          <h4 style={{fontSize: '1.5rem'}}><b>Starter<br/> 2.5 Mbps</b></h4>
                          <hr
                            className='line-info'
                            style={{
                              background: '#247CF7'
                            }}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup style={{opacity: 0.8}}>
                          <ListGroupItem>Up to 2.5 mbps</ListGroupItem>
                          <ListGroupItem>Unlimited Data</ListGroupItem>
                          <ListGroupItem>Excellent Service</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className='text-center'>
                    <NavLink to='/book' tag={Link}>
                  <Button className='nav-link  d-lg-block center' style={{margin: '0 auto', fontSize: '1.3rem'}} color='info'>
                    R254
                  </Button>
                </NavLink>
                    </CardFooter>
                  </Card> 
                  
                
                
                  
                </Col>
                <Col md='4' className='col mt-5 mb-3'>
                <Card className='card-coin card-plain'>
                    <CardHeader>
                      <img
                        alt='...'
                        className='img-center img-fluid coin'
                        src={require('../assets/img/silver.png')}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row className="center">
                        <Col className='text-center' md='12'>
                          <h4 style={{fontSize: '1.5rem'}}><b>Standard<br/>4 Mbps</b></h4>
                          <hr
                            className='line-info'
                            style={{
                              background: '#247CF7'
                            }}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup style={{opacity: 0.8}}>
                          <ListGroupItem>Up to 4 mbps</ListGroupItem>
                          
                          <ListGroupItem>Excellent Service</ListGroupItem>
                          <ListGroupItem>Emergency Repairs</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className='text-center'>
                    <NavLink to='/book' tag={Link}>
                  <Button className='nav-link  d-lg-block center' style={{margin: '0 auto', fontSize: '1.3rem'}} color='info'>
                    R399
                  </Button>
                </NavLink>
                    </CardFooter>
                  </Card> 
                  
                
                
                  
                </Col>
                <Col md='4' className='col mt-5 mb-3'>
                <Card className='card-coin card-plain'>
                    <CardHeader>
                      <img
                        alt='...'
                        className='img-center img-fluid coin'
                        src={require('../assets/img/gold.png')}
                        
                      />
                    </CardHeader>
                    <CardBody>
                      <Row className="center">
                        <Col className='text-center' md='12'>
                          <h4 style={{fontSize: '1.5rem'}}><b>Premium<br/>6 Mbps</b></h4>
                          <hr
                            className='line-info'
                            style={{
                              background: '#247CF7'
                            }}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup style={{opacity: 0.8}}>
                          <ListGroupItem>Up to 6 mbps</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                          <ListGroupItem>Emergency Repairs</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className='text-center'>
                    <NavLink to='/book' tag={Link}>
                  <Button className='nav-link  d-lg-block center' style={{margin: '0 auto', fontSize: '1.3rem'}} color='info'>
                    R549
                  </Button>
                </NavLink>
                    </CardFooter>
                  </Card> 
                  
                
                
                  
                </Col>
</Row>
<Row style={{justifyContent: 'center', marginTop: '2rem'}}>
                <Col md='4' className='col mt-5 mb-3'>
                <Card className='card-coin card-plain'>
                    <CardHeader>
                      <img
                        alt='...'
                        className='img-center img-fluid coin'
                        src={require('../assets/img/Diamond.png')}
                        
                      />
                    </CardHeader>
                    <CardBody>
                      <Row className="center">
                        <Col className='text-center' md='12'>
                          <h4 style={{fontSize: '1.5rem'}}><b>Business<br/>10+ Mbps</b></h4>
                          <hr
                            className='line-info'
                            style={{
                              background: '#247CF7'
                            }}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup style={{opacity: 0.8}}>
                          <ListGroupItem>Up to 10+ mbps</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                          <ListGroupItem>Emergency Repairs</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className='text-center'>
                    <NavLink to='/book' tag={Link}>
                  <Button className='nav-link  d-lg-block center' style={{margin: '0 auto', fontSize: '1.3rem'}} color='info'>
                    R799+
                  </Button>
                </NavLink>
                    </CardFooter>
                  </Card> 
                  
                
                
                  
                </Col>
              </Row>
              <div style={{marginBottom: '-1vh'}}><h2 className='text-center mt-3 mb-1'><i>Installation price is R550*</i></h2>

              <NavLink to='/terms' tag={Link}>
                <div style={{textAlign: 'center', opacity: 0.5, color: 'white'}}>*See terms and conditions</div>
                </NavLink>


                </div>
              
            </Container>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default PricingPage;
