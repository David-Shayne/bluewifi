/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* addressd by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import classnames from 'classnames';
// reactstrap components
import emailjs from 'emailjs-com';
import {
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from 'reactstrap';

// core components
import PagesNavbar from '../components/Navbars/PagesNavbar.js';
import Footer from '../components/Footer/Footer.js';

class BookPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      name: '',
      address: '',
      email: '',
      successAlertIsOpen: false,
      recaptchaCompleted: false,
      captchaAlertIsOpen: false
    };

    this.sendEmail = this.sendEmail.bind(this);
  }

  componentDidMount() {
    document.body.classList.toggle('register-page');
  }
  componentWillUnmount() {
    document.body.classList.toggle('register-page');
  }

  sendEmail(e) {
    e.preventDefault();

    if (this.state.recaptchaCompleted) {
      emailjs
        .sendForm(
          'gmail',
          'installation',
          document.querySelector('#installation_form'),
          'user_RfMWYQ64opzY6fWBL7yZe'
        )
        .then(
          (result) => {
            console.log(result);
            this.setState({
              successAlertIsOpen: true,
              name: '',
              address: '',
              email: '',
              text: ''
            });
          },
          (error) => {
            console.log(error.text);
            alert('there was an error');
          }
        );
    } else {
      this.setState({ captchaAlertIsOpen: true });
    }
  }

  render() {
    return (
      <>
        <PagesNavbar />

        <div className='wrapper'>
          <div className='page-header'>
            <div className='page-header-image' />
            <div className='content'>
              <Container>
                <Row>
                  
                  
                  <Col lg='5' md='6' style={{ margin: '0 auto' }}>
                    <Card className='card-register'>
                      <CardHeader
                        style={{
                          paddingBottom: '1rem'
                        }}
                      >
                        <CardTitle
                          tag='h4'
                          style={{
                            padding: '1rem 0',
                            margin: '0 auto',
                            color: 'white',
                            width: '100%',
                            textAlign: 'center',
                            background:
                              'linear-gradient(to bottom left, #2D66F5, #2183F7, #2D66F5)'
                          }}
                          className='text-uppercase'
                        >
                          contact
                        </CardTitle>
                      </CardHeader>
                      <CardBody>
                        <div
                          className='h2'
                          style={{
                            color: 'rgba(255,255,255 ,0.8)',
                            marginBottom: '2'
                          }}
                        >
                          Get in touch
                        </div>
                        <p
                          style={{
                            fontSize: '1rem',
                            color: 'grey',
                            marginTop: '-1.75rem',
                            marginBottom: '2rem'
                          }}
                        >
                          <i>Choose how you'd like to contact us</i>
                        </p>
                        <div style={{paddingLeft: '3.33%', marginBottom: '6.66%'}}><div className="mt-4"><img src={require('../assets/img/whatsapp.svg')} style={{opacity: 0.5, transform:'scale(0.9)'}} alt="whatsapp"/><a href="https://wa.me/+27684394063" style={{color: 'white', opacity: 0.9}} className="ml-3">Click here to start a chat</a></div>
                        
                        <div className="mt-4"><img alt="phone" src={require('../assets/img/phone.svg')} style={{opacity: 0.5}}/><a href="tel:+27684394063" style={{color: 'white', opacity: 0.9}} className="ml-3">+27 68 439 4063</a></div>
                        <div className="mt-4"><img alt = "gmail" src={require('../assets/img/gmail.svg')} style={{opacity: 0.5}}/><a href="mailto:support@bluewifi.co.za, business@bluewifi.co.za" style={{color: 'white', opacity: 0.9}} className="ml-3">support@bluewifi.co.za</a></div>
                        <div className="mt-2"><img alt="gamil2" src={require('../assets/img/gmail.svg')} style={{opacity: 0}}/><a href="mailto:support@bluewifi.co.za, business@bluewifi.co.za" style={{color: 'white', opacity: 0.9}} className="ml-3">business@bluewifi.co.za</a></div>
                        </div>
                        </CardBody>
                    </Card>
                  </Col>
                  <Col lg='2' md='3' style={{ margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <h2 style={{fontSize: '3rem'}}className='or'><b>OR</b></h2>
                  </Col>
                  <Col lg='5' md='6' style={{ margin: '0 auto' }}>
                    <Card className='card-register'>
                      <CardHeader
                        style={{
                          paddingBottom: '1rem'
                        }}
                      >
                        <CardTitle
                          tag='h4'
                          style={{
                            padding: '1rem 0',
                            margin: '0 auto',
                            color: 'white',
                            width: '100%',
                            textAlign: 'center',
                            background:
                              'linear-gradient(to bottom left, #2D66F5, #2183F7, #2D66F5)'
                          }}
                          className='text-uppercase'
                        >
                          book now
                        </CardTitle>
                      </CardHeader>
                      <CardBody>
                        <div
                          className='h2'
                          style={{
                            color: 'rgba(255,255,255 ,0.8)',
                            marginBottom: '2'
                          }}
                        >
                          Schedule an installation
                        </div>
                        <p
                          style={{
                            fontSize: '1rem',
                            color: 'grey',
                            marginTop: '-1.75rem',
                            marginBottom: '2rem'
                          }}
                        >
                          <i>Installation cost: R550</i>
                        </p>
                        <Form
                          className='form'
                          id='installation_form'
                          onSubmit={this.sendEmail}
                        >
                          <InputGroup
                            className={classnames({
                              'input-group-focus': this.state.fullNameFocus
                            })}
                          >
                            <InputGroupAddon addonType='prepend'>
                              <InputGroupText>
                                <i className='tim-icons icon-single-02' />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder='Full Name'
                              type='text'
                              name='name'
                              required
                              onFocus={(e) =>
                                this.setState({
                                  fullNameFocus: true
                                })
                              }
                              value={this.state.name}
                              onChange={(e) =>
                                this.setState({
                                  name: e.target.value
                                })
                              }
                              onBlur={(e) =>
                                this.setState({
                                  fullNameFocus: false
                                })
                              }
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              'input-group-focus': this.state.emailFocus
                            })}
                          >
                            <InputGroupAddon addonType='prepend'>
                              <InputGroupText>
                                <i className='tim-icons icon-email-85' />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder='Email or Phone Number'
                              type='text'
                              name='email'
                              required
                              value={this.state.email}
                              onChange={(e) =>
                                this.setState({
                                  email: e.target.value
                                })
                              }
                              onFocus={(e) =>
                                this.setState({
                                  emailFocus: true
                                })
                              }
                              onBlur={(e) =>
                                this.setState({
                                  emailFocus: false
                                })
                              }
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              'input-group-focus': this.state.passwordFocus
                            })}
                          >
                            <InputGroupAddon addonType='prepend'>
                              <InputGroupText>
                                <i className='tim-icons icon-square-pin' />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              required
                              placeholder='Address'
                              type='text'
                              name='address'
                              onFocus={(e) =>
                                this.setState({
                                  passwordFocus: true
                                })
                              }
                              value={this.state.address}
                              onChange={(e) =>
                                this.setState({
                                  address: e.target.value
                                })
                              }
                              onBlur={(e) =>
                                this.setState({
                                  passwordFocus: false
                                })
                              }
                            />
                          </InputGroup>

                          <ReCAPTCHA
                            sitekey='6Le1cM4ZAAAAACY7p2R7SsxWpXvW1D7aWUS2BNxy'
                            theme='dark'
                            style={{ margin: '1.3rem 0' }}
                            onChange={() =>
                              this.setState({
                                recaptchaCompleted: true
                              })
                            }
                          />
                          <Alert
                            style={{
                              marginTop: '1rem'
                            }}
                            color='danger'
                            isOpen={this.state.captchaAlertIsOpen}
                            toggle={() =>
                              this.setState({
                                captchaAlertIsOpen: false
                              })
                            }
                          >
                            Please redo Captcha and try again
                          </Alert>

                          <Button
                            className='btn-round'
                            type='submit'
                            color='info'
                            size='lg'
                          >
                            Send
                          </Button>
                          <Alert
                            color='info'
                            isOpen={this.state.successAlertIsOpen}
                            toggle={() =>
                              this.setState({
                                successAlertIsOpen: false
                              })
                            }
                            style={{
                              position: 'relative',
                              zIndex: '10000'
                            }}
                          >
                            <strong>Ticket Sent!</strong> You should recieve
                            help shortly via email.
                          </Alert>
                        </Form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>

                <div className='register-bg' />
              </Container>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default BookPage;
