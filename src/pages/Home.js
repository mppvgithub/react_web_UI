import React, { useState } from "react";
import "../index.css";
import "../App.css";

import logo from '../logo.svg'
import header_ill from '../header_ill.svg'
// import man from '../man.jpeg'
import medical1 from '../images/medical1.jpg'
import medical2 from '../images/medical2.jpg'
import medical3 from '../images/medical3.jpg'
import dental from '../images/dental.png'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';

import { Button, Container, Row, Col, Figure, Alert, Carousel as React_Carousel, Pagination, Accordion, Card, Badge, ListGroup, Navbar, Nav, NavDropdown, ResponsiveEmbed, Image, Form, FormControl, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
// import Footer from './footer';
export default function Firstscreen() {
    const [isValid, setIsValid] = useState(false);

    const numberOfPicture = [
        { name: 'item1' },
        { name: 'item2' },
        { name: 'item3' },
        { name: 'item4' },
        { name: 'item5' },
        { name: 'item6' },
        { name: 'item7' },
        { name: 'item8' },
        { name: 'item9' },
        { name: 'item10' },
        { name: 'item11' },
        { name: 'item12' },
        { name: 'item13' },
        { name: 'item14' }
    ];

    function alertprimary() {
        setIsValid(!isValid)
    }
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (

        <Container className="constainer">

            {/* <Row style={{ marginTop: "75px", width: "100%", alignItems: "center", justifyContent: "center", height: "200px", backgroundColor: "#c1b3c9" }}> */}
            <React_Carousel>
                <React_Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={medical1}
                        alt="First slide"
                    />
                    <React_Carousel.Caption>
                        <h3 style={{ color: "#9851c2" }}>First slide label</h3>
                        <p style={{ color: "#9851c2" }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </React_Carousel.Caption>
                </React_Carousel.Item>
                <React_Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={medical2}
                        alt="Second slide"
                    />
                    <React_Carousel.Caption>
                        <h3 style={{ color: "#9851c2" }}>Second slide label</h3>
                        <p style={{ color: "#9851c2" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </React_Carousel.Caption>
                </React_Carousel.Item>
                <React_Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={medical3}
                        alt="Third slide"
                    />
                    <React_Carousel.Caption>
                        <h3 style={{ color: "#9851c2" }}>Third slide label</h3>
                        <p style={{ color: "#9851c2" }}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </React_Carousel.Caption>
                </React_Carousel.Item>
            </React_Carousel>
            {/* </Row> */}
            <div style={{ marginTop: 10 }}>
                <ScrollMenu
                    // arrowLeft={<div style={{ fontSize: "30px", backgroundColor:"red" }}>{" < "}</div>}
                    // arrowRight={<div style={{ fontSize: "30px", backgroundColor:"red" }}>{" > "}</div>}
                    wheel={true}
                    data={numberOfPicture.map((picture, index) => (
                        <Card style={{ width: '8rem', height: '8rem', alignItems: "center", justifyContent: "center", marginRight: 5 }}>
                            <div style={{ alignItems: "center", justifyContent: "center", }}>
                                <img
                                    src={dental}
                                    style={{ height: "50px", width: "50px" }}
                                    alt="Image"
                                />
                                <h6>{index} Lorum Ipsum</h6>
                            </div>
                        </Card>
                    ))}
                />
            </div>

            <Row style={{ width: "100%" }}>
                <div style={{ width: "75%", }}>
                    <div style={{ marginTop: '1rem', marginLeft: '1rem', }}>
                        <text style={{ fontSize: 20, color: "red" }}>Consumable & Disposable</text>
                    </div>
                    <div style={{ marginLeft: '1rem' }}>
                        <text style={{ fontSize: 15 }}>Top Selling Consumables and Disposables</text>
                    </div>
                    <div class="row" style={{ marginTop: '1rem', marginLeft: '1rem', }}>

                        {
                            numberOfPicture.map(function (item) {
                                return (
                                    <Card style={{ marginRight: 10, marginBottom: 10, height: "150px", width: "150px", alignItems: "center", justifyContent: "center", }}>
                                        <div>
                                            <img
                                                src={dental}
                                                style={{ height: "75px", width: "75px" }}
                                                alt="Image"
                                            />
                                        </div>
                                        <div>{item.name} Syringe</div>
                                    </Card>
                                )
                            })
                        }

                    </div>
                </div>
                <div style={{ width: "25%", }}>
                    <div style={{ marginTop: '1rem', marginLeft: '1rem', }}>
                        <text style={{ fontSize: 18, }}>Personal Protection Products</text>
                    </div>
                    <div class="row" style={{ marginTop: '1rem', marginLeft: '1rem', }}>

                        {
                            numberOfPicture.map(function (item, index) {
                                if (index < 3) {
                                    return (
                                        <Card style={{ marginRight: 10, marginBottom: 10, height: "150px", width: "88%", alignItems: "center", justifyContent: "center", }}>
                                            <div>
                                                <img
                                                    src={dental}
                                                    style={{ height: "75px", width: "75px" }}
                                                    alt="Image"
                                                />
                                            </div>
                                            <div>{item.name} Syringe</div>
                                        </Card>
                                    )
                                }

                            })
                        }

                    </div>
                </div>


            </Row>
            <div style={{ marginTop: '2rem', backgroundColor: "#c9c4cc" }}>
                <Carousel

                    showThumbs={true}
                    showStatus={false}

                    emulateTouch
                    // autoPlay
                    autoPlay={true}
                    useKeyboardArrows
                    transitionTime={1000}
                    // axis="vertical"
                    selectedItem={1}
                    interval={1000}
                    infiniteLoop={true}
                >
                    <div>
                  
                        <div className="text-container">
                        <img
                            src={dental}
                            style={{ height: "75px", width: "75px" }}
                            alt="Image"
                        />
                            <h2>Bugatti Chiron Super Sport 300</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua se. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.
            </p>
                        </div>
                    </div>
                    <div>
                      
                        <div className="text-container">
                        <img
                            src={dental}
                            style={{ height: "75px", width: "75px" }}
                            alt="Image"
                        />
                            <h2>Bugatti Chiron Super Sport 300</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua se. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.
            </p>
                        </div>
                    </div>
                    
                </Carousel>
            </div>





            <Row style={{ paddingTop: "80px" }}>
                <Col sm={5} >
                    <Image style={{ height: "180px", width: "180px" }} src={logo} responsive />
                    <h1 style={{ fontWeight: "bolder", fontSize: "60px" }}>Made with React</h1>
                    <h6>A collection of websites and applications using the React or React Native JavaScript library.</h6>
                    <InputGroup style={{ top: "20px" }} className="mb-3">
                        <FormControl
                            placeholder="username"
                            aria-label="username"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <InputGroup.Text id="basic-addon2">@ abc company*</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
                <Col sm={7} style={{ padding: 0 }}>
                    <Image style={{ height: "100%", width: "100%" }} src={header_ill} responsive />
                </Col>
            </Row>

            <Row className="centerinput">
                <InputGroup style={{ width: "500px" }} >
                    <FormControl
                        placeholder="username"
                        aria-label="username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <InputGroup.Text id="basic-addon2">@ abc company*</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
            </Row>
            <Row style={{}}>
                <Col className="cardbgend">
                    <Card style={{ width: '18rem', margin: "1rem" }}>
                        <Card.Body>
                            <Card.Title>PREMIUM</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Light Bootstrap Dashboard Pro</Card.Subtitle>
                            <Card.Text>Light Bootstrap Dashboard PRO React is a premium admin dashboard template designed to be beautiful and simple. It is built on top of React Bootstrap, using Light Bootstrap Dashboard PRO and it is fully responsive..</Card.Text>
                            <Row style={{ flexDirection: "row-reverse", paddingRight: "20px" }}>
                                <Button variant="outline-primary" style={{ borderRadius: 30, }} >Projects</Button>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', margin: "1rem" }}>
                        <Card.Body>
                            <Card.Title>PREMIUM</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Light Bootstrap Dashboard Pro</Card.Subtitle>
                            <Card.Text>Light Bootstrap Dashboard PRO React is a premium admin dashboard template designed to be beautiful and simple. It is built on top of React Bootstrap, using Light Bootstrap Dashboard PRO and it is fully responsive..</Card.Text>
                            <Row style={{ flexDirection: "row-reverse", paddingRight: "20px" }}>
                                <Button variant="outline-primary" style={{ borderRadius: 30, }} >Projects</Button>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', margin: "1rem" }}>
                        <Card.Body>
                            <Card.Title>PREMIUM</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Light Bootstrap Dashboard Pro</Card.Subtitle>
                            <Card.Text>Light Bootstrap Dashboard PRO React is a premium admin dashboard template designed to be beautiful and simple. It is built on top of React Bootstrap, using Light Bootstrap Dashboard PRO and it is fully responsive..</Card.Text>
                            <Row style={{ flexDirection: "row-reverse", paddingRight: "20px" }}>
                                <Button variant="outline-primary" style={{ borderRadius: 30, }} >Projects</Button>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="cardbg">
                    <Card style={{ width: '18rem', margin: "1rem" }}>
                        <Card.Body>
                            <Card.Title>PREMIUM</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Light Bootstrap Dashboard Pro</Card.Subtitle>
                            <Card.Text>Light Bootstrap Dashboard PRO React is a premium admin dashboard template designed to be beautiful and simple. It is built on top of React Bootstrap, using Light Bootstrap Dashboard PRO and it is fully responsive..</Card.Text>
                            <Row style={{ flexDirection: "row-reverse", paddingRight: "20px" }}>
                                <Button variant="outline-primary" style={{ borderRadius: 30, }} >Projects</Button>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', margin: "1rem" }}>
                        <Card.Body>
                            <Card.Title>PREMIUM</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Light Bootstrap Dashboard Pro</Card.Subtitle>
                            <Card.Text>Light Bootstrap Dashboard PRO React is a premium admin dashboard template designed to be beautiful and simple. It is built on top of React Bootstrap, using Light Bootstrap Dashboard PRO and it is fully responsive..</Card.Text>
                            <Row style={{ flexDirection: "row-reverse", paddingRight: "20px" }}>
                                <Button variant="outline-primary" style={{ borderRadius: 30, }} >Projects</Button>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', margin: "1rem" }}>
                        <Card.Body>
                            <Card.Title>PREMIUM</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Light Bootstrap Dashboard Pro</Card.Subtitle>
                            <Card.Text>Light Bootstrap Dashboard PRO React is a premium admin dashboard template designed to be beautiful and simple. It is built on top of React Bootstrap, using Light Bootstrap Dashboard PRO and it is fully responsive..</Card.Text>
                            <Row style={{ flexDirection: "row-reverse", paddingRight: "20px" }}>
                                <Button variant="outline-primary" style={{ borderRadius: 30, }} >Projects</Button>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="cardbgend">
                    <Card style={{ width: '18rem', margin: "1rem" }}>
                        <Card.Body>
                            <Card.Title>PREMIUM</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Light Bootstrap Dashboard Pro</Card.Subtitle>
                            <Card.Text>Light Bootstrap Dashboard PRO React is a premium admin dashboard template designed to be beautiful and simple. It is built on top of React Bootstrap, using Light Bootstrap Dashboard PRO and it is fully responsive..</Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                            <Row style={{ flexDirection: "row-reverse", paddingRight: "20px" }}>
                                <Button variant="outline-primary" style={{ borderRadius: 30, }} >Projects</Button>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row style={{ height: "10vh", alignItems: "center", justifyContent: "center", marginRight: "8rem" }}>
                <h5 className="page">PAGE</h5>
                <Pagination style={{ margin: 0 }}>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </Row>
            <Row style={{ height: "30vh", alignItems: "center", justifyContent: "center", }}>
                <div style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", display: "flex", width: 150 }}>
                    <Image style={{ height: "100px", width: "100px" }} src={logo} responsive />
                    <h5 style={{ textAlign: "center" }} >Vuejs Expo</h5>
                </div>
                <div style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", display: "flex", width: 150 }}>
                    <Image style={{ height: "100px", width: "100px" }} src={logo} responsive />
                    <h5 >Angular Expo</h5>
                </div>
            </Row>
            <Row style={{ width: "100%", alignItems: "center", justifyContent: "center" }}>
                <div className="b_div1">
                    <h3 className="b_top" >Made with React</h3>
                    <h6 className="smallfont">A collection of websites and applications using the React or React Native JavaScript library.</h6>
                </div>

                <div className="b_div">
                    <h3 className="b_top" >About us</h3>
                    <h6 className="smallfont">BLOG  </h6>
                    <h6 className="smallfont">ABOUT US </h6>
                    <h6 className="smallfont">CONTACT US</h6>
                </div>
                <div className="b_div">
                    <h3 className="b_top" >More Info</h3>
                    <h6 className="smallfont">ADVERTISE</h6>
                    <h6 className="smallfont">SUBMIT PRODUCT</h6>
                </div>
                <div className="b_div">
                    <h3 className="b_top" >Special Thanks</h3>
                    <h6 className="smallfont">IRA DESIGN</h6>
                    <h6 className="smallfont">CREATIVE TIM</h6>
                </div>
                <div className="b_div">
                    <h3 className="b_top" >Useful Links</h3>
                    <h6 className="smallfont">OFFICIAL WEBSITE</h6>
                    <h6 className="smallfont">OFFICIAL DOCUMENTATION</h6>
                    <h6 className="smallfont">REACT TEMPLATES</h6>
                    <h6 className="smallfont">GITHUB MADE WITH REACT</h6>
                </div>

            </Row>
            <Row style={{ height: "10vh" }}></Row>


        </Container>


    );
}
