
import React, { useState, useEffect } from "react";
import "../index.css";
import "../App.css";
import { WebServiceRequest } from '../api/webService';
let logo = '../images/logo.png';
import Home from './Home';
import { Redirect, Link } from 'react-router-dom';
import { InputLabel, Select, FormControl as UI, TextField, InputAdornment, IconButton, OutlinedInput } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Button, Container, Row, Col, Tabs, Tab, Figure, Alert, Carousel as React_Carousel, Pagination, Accordion, Card, Badge, ListGroup, Navbar, Nav, NavDropdown, ResponsiveEmbed, Image, Form, FormControl, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './footer';
export default function SignUp() {
    const [isValid, setIsValid] = useState(false);
    const [key, setKey] = useState('home');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [ph_no, setPh_no] = useState("")
    const [username, setUsername] = useState("")
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
        type: "Buyer"
    });

    const [Login_values, setLogin_Values] = useState({
        password: '',
        email: '',
    });
    useEffect(() => {
        
        console.log("Logged email password", Login_values.email, Login_values.password)
    }, [])

    const handleChange = (event) => {
        // const name = event.target.name;
        setValues({
            ...values,
            type: event.target.value,
        });
    };
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const on_login = () =>  {
        // console.log("login clicked")
        // localStorage.setItem("loginEmail", Login_values.email)
        // localStorage.setItem("loginPassword", Login_values.password)
        const loginData = {
            email:Login_values.email,
            password:Login_values.password
        };
        WebServiceRequest.callRestAPIPost({url:WebServiceRequest.BASE_URL_USER+"/login",data:loginData}).then((response)=>{
            console.log(response);
        })
        // return (
        //     <Redirect to={{
        //         'pathname' : "/About",
        //         'state' : ''
        //     }} />
        // )

    }
    function on_register() {
        var details = {
            "email": email,
            "password": pwd,
            "ph_number": ph_no,
            "name": username,
            "type": "buyer"
        };
        console.log("details", details)

        WebServiceRequest.callRestAPIGet({ url: WebServiceRequest.BASE_URL_USER + "/user/1" })
            .then(res => console.log(res))
            .catch(err => console.log("api err", err))

        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        WebServiceRequest.callRestAPIPost({ url: WebServiceRequest.BASE_URL_USER + "/user", data: details }).then((response) => response.json())
            .then(async (res) => {
                console.log("clientdata res", res)
            }).catch((error) => {
                console.log("error", error)
            });
    }

    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (

        <Container className="container">
            <Row style={{ width: "100%", marginLeft: "5px", marginTop: "100px", padding: "30px" }}>
                <div   >
                    <Tabs
                        style={{ width: "1080px" }}
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                    >
                        <Tab eventKey="home" title="Login">
                            <div className="hotel-card">

                                <div style={{ width: "100%", height: "100%", textAlign: "center", marginTop: "50px" }}>
                                    <img
                                        src={logo}
                                        style={{ height: "170px", width: "200px", }}
                                        alt="Image"
                                    />
                                </div>
                                <div style={{ width: "100%", height: "100%", textAlign: "center", marginTop: "50px" }}>
                                    <TextField
                                        style={{ width: "500px" }}

                                        label="Email Address"
                                        variant="outlined"
                                        value={Login_values.email}
                                        onChange={(val) => setLogin_Values({ ...Login_values, email: val.target.value })}
                                    />
                                </div>

                                <div style={{ width: "100%", height: "100%", textAlign: "center", marginTop: "50px", }}>
                                    <TextField
                                        style={{ width: "500px", }}

                                        label="Password"
                                        variant="outlined"
                                        value={Login_values.password}
                                        type={"password"}
                                        onChange={(val) => setLogin_Values({ ...Login_values, password: val.target.value })}

                                    // endAdornment={
                                    //     <InputAdornment position="end">
                                    //         <IconButton
                                    //             aria-label="toggle password visibility"
                                    //             onClick={handleClickShowPassword}
                                    //             onMouseDown={handleMouseDownPassword}
                                    //             edge="end"
                                    //         >
                                    //             {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    //         </IconButton>
                                    //     </InputAdornment>
                                    // }
                                    />
                                </div>

                                <div style={{ width: "100%", height: "100%", textAlign: "center", marginTop: "50px", marginBottom: "100px" }}>

                                    <Button
                                        onClick={on_login}
                                        style={{
                                            width: "500px", height: "50px", backgroundColor: "#9851c2"
                                        }}
                                    >
                                        <text style={{ fontSize: 22 }}>Log In</text>

                                    </Button>
                                </div>



                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="Register">
                            <div className="hotel-card">

                                <div style={{ width: "100%", height: "100%", textAlign: "center", marginTop: "50px" }}>
                                    <img
                                        src={logo}
                                        style={{ height: "170px", width: "200px", }}
                                        alt="Image"
                                    />
                                </div>
                                <div style={{ width: "100%", height: "100%", textAlign: "center", marginTop: "50px" }}>
                                    <TextField
                                        style={{ width: "500px" }}

                                        label="User Name"
                                        variant="outlined"
                                        value={username}
                                        onChange={(val) => setUsername(val.target.value)}
                                    />
                                </div>
                                <div style={{ width: "100%", height: "100%", textAlign: "center", marginTop: "50px" }}>
                                    <TextField
                                        style={{ width: "500px" }}

                                        label="Email Address"
                                        variant="outlined"
                                        value={email}
                                        onChange={(val) => setEmail(val.target.value)}
                                    />
                                </div>

                                <div style={{ width: "100%", height: "100%", textAlign: "center", marginTop: "50px", }}>
                                    <TextField
                                        style={{ width: "500px", }}

                                        label="Password"
                                        variant="outlined"
                                        value={pwd}
                                        type={"password"}
                                        onChange={(val) => setPwd(val.target.value)}

                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />

                                </div>

                                <div style={{ width: "100%", height: "100%", textAlign: "center", marginTop: "50px" }}>
                                    <TextField
                                        style={{ width: "500px" }}

                                        label="Phone Number"
                                        variant="outlined"
                                        value={ph_no}
                                        onChange={(val) => setPh_no(val.target.value)}
                                    />
                                </div>

                                <div style={{ width: "100%", height: "100%", textAlign: "center", marginTop: "50px" }}>
                                    <UI variant="filled" style={{ width: "500px" }}
                                    >
                                        <InputLabel htmlFor="filled-age-native-simple">User Type</InputLabel>
                                        <Select
                                            native
                                            value={values.type}
                                            onChange={handleChange}
                                        // inputProps={{
                                        //   name: 'User Type',
                                        //   id: 'filled-age-native-simple',
                                        // }}
                                        >
                                            {/* <option aria-label="None" value="" /> */}
                                            <option value={"Buyer"}>Buyer</option>
                                            <option value={"Seller"}>Seller</option>
                                            {/* <option value={30}>Others</option> */}
                                        </Select>
                                    </UI>
                                </div>
                                <div style={{ width: "100%", height: "100%", textAlign: "center", marginTop: "50px", marginBottom: "100px" }}>
                                    <Button
                                        style={{
                                            width: "500px", height: "50px", backgroundColor: "#9851c2"
                                        }}
                                        onClick={on_register}
                                    // color="#9851c2"
                                    >
                                        <text style={{ fontSize: 22 }}>Register</text>
                                    </Button>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </Row>
        </Container>
    );
}
