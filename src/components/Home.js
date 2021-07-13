import React, { useState } from "react";
import "../index.css";
import "../App.css";
import { WebServiceRequest } from '../api/webService';

let medical1 = '../images/medical1.jpg';
let medical2 = '../images/medical2.jpg';
let medical3 = '../images/medical3.jpg';
let dental = '../images/dental.png';
let machine = '../images/machine.png';
let cement = '../images/cement.png';
let freedom = '../images/freedom.jpg';
let den_off = '../images/den_off.jpg';
let client1 = '../images/client1.jpeg';
let client2 = '../images/client2.jpeg';

import { Modal } from '@material-ui/core';

import ScrollMenu from 'react-horizontal-scrolling-menu';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';
import { InputLabel, Select, FormControl as UI, TextField, InputAdornment, IconButton, OutlinedInput } from '@material-ui/core';

import { Button, Container, Row, Col, Figure, Alert, Carousel as React_Carousel, Pagination, Accordion, Card, Badge, ListGroup, Navbar, Nav, NavDropdown, ResponsiveEmbed, Image, Form, FormControl, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
// import Footer from './footer';
export default function Home() {
    const [isValid, setIsValid] = useState(false);
    const [modal, setIsmodal] = useState(false);
    const [email, setEmail] = useState('');

    const [values, setValues] = useState({
        product_name:"",
        data1:"",
        data2:"",
        data3:"",
        data4:""
    });

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
    const image_text = [
        {
            title: 'Bugatti Chiron Super Sport 300',
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua se Utenim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
        {
            title: 'item1',
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua se Utenim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
        {
            title: 'item1',
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua se Utenim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },

    ];

    function alertprimary() {
        setIsValid(!isValid)
    }

    const handleOpen = () => {
        setIsmodal(true);
    };

    const handleClose = () => {
        setIsmodal(false);
    };

    function on_submit() {
        // var details = {
        //     "email": email,
        //     "password": pwd,
        //     "ph_number": ph_no,
        //     "name": username,
        //     "type": "buyer"
        // };
        // console.log("details", details)

        // WebServiceRequest.callRestAPIGet({ url: WebServiceRequest.BASE_URL_USER + "/user/1" })
        //     .then(res => console.log(res))
        //     .catch(err => console.log("api err", err))

        // var formBody = [];
        // for (var property in details) {
        //     var encodedKey = encodeURIComponent(property);
        //     var encodedValue = encodeURIComponent(details[property]);
        //     formBody.push(encodedKey + "=" + encodedValue);
        // }
        // formBody = formBody.join("&");

        // WebServiceRequest.callRestAPIPost({ url: WebServiceRequest.BASE_URL_USER + "/user", data: details }).then((response) => response.json())
        //     .then(async (res) => {
        //         console.log("clientdata res", res)
        //     }).catch((error) => {
        //         console.log("error", error)
        //     });
        handleClose()
            
    }

    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (

        <Container className="constainer">

            {/* <Row style={{ marginTop: "75px", width: "100%", alignItems: "center", justifyContent: "center", height: "200px", backgroundColor: "#c1b3c9" }}> */}
            <React_Carousel >
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
            <div style={{ marginTop: "10px", padding: "10px", textAlign: "right" }} className="hotel-card-scroll">
                <button type="button" onClick={handleOpen} className="hotel-card-Add_btn">
                    <text style={{ color: "#fff" }}> +ADD </text>
                </button>

                <ScrollMenu
                    style={{ borderRadius: "10px", marginLeft: "10px", marginRight: "10px", alignIem: "center" }}
                    // arrowLeft={<div style={{ fontSize: "30px", backgroundColor:"red" }}>{" < "}</div>}
                    // arrowRight={<div style={{ fontSize: "30px", backgroundColor:"red" }}>{" > "}</div>}
                    wheel={true}
                    data={numberOfPicture.map((picture, index) => (
                        <Card style={{ borderRadius: "10px", width: '8rem', height: '8rem', alignItems: "center", justifyContent: "center", marginRight: 5 }}>
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
            <Modal
                open={modal}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                style={{ textAlign: "center", marginTop: "80px", marginLeft: "60vh" }}
            >
                <Col style={{ height: "500px", width: "500px", backgroundColor: "#fff", borderRadius: "10px", flexDirection: "column" }}>
                    <Row style={{ width: "500px", height: "70px", alignItem:"center", justifyContent: "center", marginTop: "30px", }}>
                        <text style={{ fontSize: 20, marginTop: '25px', color:"#9851c2", fontWeight: 'bold' }}>ADD PRODUCT</text>
                    </Row>


                    <Row style={{ width: "500px", height: "70px", textAlign: "center", marginTop: "20px", alignItem:"center", justifyContent: "center" }}>
                        <TextField
                            style={{ width: "300px", height: "20px", }}

                            label="Product Name"
                            variant="outlined"
                            value={values.product_name}
                            onChange={(val) => setValues({ ...values, product_name: val.target.value })}
                        />
                    </Row>
                    <Row style={{ width: "500px", height: "70px", textAlign: "center",alignItem:"center", justifyContent: "center" }}>
                        <TextField
                            style={{ width: "300px", height: "20px", }}

                            label="Input Data"
                            variant="outlined"
                            value={values.data1}
                            onChange={(val) => setValues({ ...values, data1: val.target.value })}
                        />
                    </Row>
                    <Row style={{ width: "500px", height: "70px", textAlign: "center",alignItem:"center", justifyContent: "center" }}>
                        <TextField
                            style={{ width: "300px", height: "20px", }}

                            label="Input Data"
                            variant="outlined"
                            value={values.data2}
                            onChange={(val) => setValues({ ...values, data2: val.target.value })}
                        />
                    </Row>
                    <Row style={{ width: "500px", height: "70px", textAlign: "center",alignItem:"center", justifyContent: "center" }}>
                        <TextField
                            style={{ width: "300px", height: "20px", }}

                            label="Input Data"
                            variant="outlined"
                            value={values.data3}
                        onChange={(val) => setValues({ ...values, data3: val.target.value })}
                        />
                    </Row>

                    <Row style={{ width: "500px", height: "70px", textAlign: "center", marginTop: "10px", marginBottom: "20px", alignItem:"center", justifyContent: "center" }}>
                        <Button
                            style={{
                                width: "300px", height: "50px", backgroundColor: "#9851c2"
                            }}
                        onClick={on_submit}
                        // color="#9851c2"
                        >
                            <text style={{ fontSize: 22 }}>SUBMIT</text>
                        </Button>
                    </Row>


                </Col>
            </Modal>
            <Row style={{ width: "100%", marginLeft: "5px", marginTop: "10px", }}>
                <div style={{ width: "71%", }} className="hotel-card">
                    <div style={{ marginTop: '1rem', marginLeft: '1rem', backgroundColor: "yellow", textAlign: "left" }}>
                        <text style={{ fontSize: 20, color: "red" }}>Consumable & Disposable</text>
                    </div>
                    <div style={{ marginLeft: '1rem', textAlign: "left" }}>
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
                <div style={{ width: "27%", }} className="hotel-card">
                    <div style={{ marginTop: '1rem', marginLeft: '1rem', textAlign: "left" }}>
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
            <div className="hotel-card-Carousel" style={{ marginTop: '2rem', backgroundColor: "#003863" }}>
                <Carousel
                    style={{ alignItems: "center", justifyContent: "center" }}
                    showThumbs={true}
                    showStatus={false}

                    emulateTouch
                    // autoPlay
                    autoPlay={true}
                    useKeyboardArrows
                    transitionTime={1000}
                    // axis="vertical"
                    selectedItem={1}
                    interval={5000}
                    infiniteLoop={true}
                >
                    {
                        image_text.map(function (item, index) {
                            return (
                                <div style={{ position: "relative", }}>
                                    <div style={{ alignItems: "center", marginTop: "25px", justifyContent: "center" }}>
                                        <img
                                            src={dental}
                                            style={{ height: "75px", width: "75px" }}
                                            alt="Image"
                                        />
                                        <h2 style={{ color: "#fff" }}>{item.title}</h2>
                                        <text style={{ paddingLeft: "5px", color: "#fff", paddingRight: "5px", fontSize: 15, textAlign: "center" }}>{item.desc}{item.desc}{item.desc}</text>
                                    </div>
                                </div>
                            )
                        })
                    }

                </Carousel>
            </div>

            <Row style={{ width: "100%", marginLeft: "5px", marginTop: "10px", }}>
                <div className="hotel-card">
                    <div style={{ marginTop: '1rem', marginLeft: '1rem', textAlign: "left" }}>
                        <text style={{ fontSize: 20, color: "red" }}>Medical Device & Equipment</text>
                    </div>
                    <div style={{ marginLeft: '1rem', textAlign: "left" }}>
                        <text style={{ fontSize: 15 }}>Advanced Medical Devices and Equipment</text>
                    </div>
                    <div class="row" style={{ marginTop: '1rem', marginLeft: '1rem', }}>

                        {
                            numberOfPicture.map(function (item) {
                                return (
                                    <div className="hotel-card-Equipment">
                                        <div style={{ margonTop: "6px" }}>
                                            <img
                                                src={machine}
                                                style={{ height: "170px", width: "170px" }}
                                                alt="Image"
                                            />
                                        </div>
                                        <div style={{ marginTop: "5px" }}>
                                            <h6 >Oxygen Concentrator</h6>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </Row>
            <Row style={{ width: "100%", padding: "10px", marginLeft: "5px", marginTop: "10px" }} className="hotel-card-Freedom">
                <div style={{ width: "33%" }}>
                    <div>
                        <h4>MedicOcean - Freedom</h4>
                    </div>

                    <div style={{ marginTop: "15px" }}>
                        <img className="freedom-image"
                            src={freedom}
                            // style={{ height: "170px", width: "99%",  }}
                            alt="Image"
                        />
                    </div>


                </div>
                <div style={{ width: "33%" }}>
                    <div>
                        <h4>Xerox Vortran Ventilator</h4>
                    </div>

                    <div style={{ marginTop: "15px" }}>
                        <img className="freedom-image"
                            src={freedom}
                            // style={{ height: "170px", width: "99%",  }}
                            alt="Image"
                        />
                    </div>


                </div>
                <div style={{ width: "33%" }}>
                    <div>
                        <h4>Roche Diagnostic Products</h4>
                    </div>

                    <div style={{ marginTop: "15px" }}>
                        <img className="freedom-image"
                            src={freedom}
                            // style={{ height: "170px", width: "99%",  }}
                            alt="Image"
                        />
                    </div>


                </div>
            </Row>

            <Row style={{ width: "100%", marginLeft: "5px", marginTop: "10px", }}>
                <div style={{ width: "71%", }} className="hotel-card">
                    <div style={{ marginTop: '1rem', marginLeft: '1rem', textAlign: "left" }}>
                        <text style={{ fontSize: 20, color: "red" }}>Dental</text>
                    </div>
                    <div style={{ marginLeft: '1rem', textAlign: "left" }}>
                        <text style={{ fontSize: 15 }}>Largest Catalogue of Dental Products</text>
                    </div>
                    <div class="row" style={{ marginTop: '1rem', marginLeft: '1rem', }}>

                        {
                            numberOfPicture.map(function (item, index) {
                                if (index < 6)
                                    return (
                                        <div className="hotel-card-Equipment">
                                            <div style={{ margonTop: "6px" }}>
                                                <img
                                                    src={cement}
                                                    style={{ height: "170px", width: "220px" }}
                                                    alt="Image"
                                                />
                                            </div>
                                            <div style={{ marginTop: "5px" }}>
                                                <h6 >Dental Product</h6>
                                            </div>
                                        </div>
                                    )
                            })
                        }

                    </div>
                </div>
                <div style={{ width: "27%", }} className="hotel-card">
                    <div style={{ marginTop: '1rem', marginLeft: '1rem', textAlign: "left" }}>
                        <text style={{ fontSize: 18, textAlign: "left" }}>Dental Offer</text>
                    </div>
                    <div class="row" style={{ marginTop: '1rem', marginLeft: '0.4rem', }}>

                        {
                            numberOfPicture.map(function (item, index) {
                                if (index < 2) {
                                    return (
                                        <div className="hotel-card-Equipment">

                                            <img
                                                className="freedom-image"
                                                src={den_off}
                                                style={{ width: "270px" }}
                                                alt="Image"
                                            />

                                        </div>
                                    )
                                }

                            })
                        }

                    </div>
                </div>


            </Row>
            <Row style={{ width: "100%", padding: "10px", marginLeft: "5px", marginTop: "12px", alignItems: "center", justifyContent: "center", flexDirection: "row" }} className="hotel-card-Freedom">
                <text style={{ fontSize: 30 }}> What Our <text style={{ color: "#474aff" }}> Clients </text> Say About Us </text>
            </Row>
            <Row className="hotel-card-clinet-row" style={{ width: "100%", marginLeft: "5px", marginTop: "10px", flexDirection: "row" }}>
                <Row className="hotel-card-clinet" style={{ width: "50%", padding: "20px" }}>
                    <div style={{ width: "25%", textAlign: "center", }}>
                        <img

                            src={client1}
                            style={{ marginTop: "15px", height: '110px', width: "110px", borderRadius: '110px' }}
                            alt="Image"
                        />
                    </div>
                    <div style={{ width: "75%", }}>
                        <div style={{ marginTop: "15px", marginLeft: "15px", textAlign: "left" }}>
                            <text style={{ color: "blue", fontSize: 18 }}>Dr. Anil sing</text>
                        </div>
                        <div style={{ marginTop: "3px", marginLeft: "15px", textAlign: "left" }}>
                            <text style={{ fontSize: 15, marginTop: '5px' }}>Anil mark Imaging, New Delhi</text>
                        </div>

                        <div style={{ marginTop: "20px", marginBottom: '30px', marginLeft: "15px", marginRight: '10px', textAlign: "left" }}>
                            <text style={{ fontSize: 13, marginTop: '5px' }}>MedicOcean is fast emerging as a high end technology aggregator in addition to being a single point of contact for all medical supplies and consumables. We are excited to join hands with MedicOcean for Molecular Imaging products.</text>

                        </div>
                    </div>
                </Row>
                <Row className="hotel-card-clinet" style={{ width: "50%", padding: "20px" }}>
                    <div style={{ width: "25%", textAlign: "center", }}>
                        <img

                            src={client2}
                            style={{ marginTop: "15px", height: '110px', width: "110px", borderRadius: '110px' }}
                            alt="Image"
                        />
                    </div>
                    <div style={{ width: "75%", }}>
                        <div style={{ marginTop: "15px", marginLeft: "15px", textAlign: "left" }}>
                            <text style={{ color: "blue", fontSize: 18 }}>Dr. Anil sing</text>
                        </div>
                        <div style={{ marginTop: "3px", marginLeft: "15px", textAlign: "left" }}>
                            <text style={{ fontSize: 15, marginTop: '5px' }}>Anil mark Imaging, New Delhi</text>
                        </div>

                        <div style={{ marginTop: "20px", marginBottom: '30px', marginLeft: "15px", marginRight: '10px', textAlign: "left" }}>
                            <text style={{ fontSize: 13, marginTop: '5px' }}>MedicOcean is fast emerging as a high end technology aggregator in addition to being a single point of contact for all medical supplies and consumables. We are excited to join hands with MedicOcean for Molecular Imaging products.</text>

                        </div>
                    </div>
                </Row>


            </Row>


            <Row style={{ width: "100%", alignItems: "center", justifyContent: "center", marginTop: "20px", textAlign: "left" }}>
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
