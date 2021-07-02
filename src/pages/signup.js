
import React, { useState } from "react";
import "../index.css";
import "../App.css";

import header_ill from '../header_ill.svg'
import { WebServiceRequest } from '../constant'
import logo from '../images/logo.png'
import axios from 'axios';


import ScrollMenu from 'react-horizontal-scrolling-menu';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { InputLabel, Select, FormControl as UI, TextField, InputAdornment, IconButton, OutlinedInput } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Button, Container, Row, Col, Tabs, Tab, Figure, Alert, Carousel as React_Carousel, Pagination, Accordion, Card, Badge, ListGroup, Navbar, Nav, NavDropdown, ResponsiveEmbed, Image, Form, FormControl, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import { TabPanel, TabContext } from '@material-ui/lab';
// import Footer from './footer';
export default function SignUp() {
  const [isValid, setIsValid] = useState(false);
  const [value, setValue] = useState(0);

  const [key, setKey] = useState('home');

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [ph_no, setPh_no] = useState("")
  const [pwd_hide, setPwd_hide] = useState(true);
  const [username, setUsername] = useState("")


  const [values, setValues] = useState({
    password: '',
    showPassword: false,
    type:"Buyer"
  });
  const handleChange = (event) => {
    // const name = event.target.name;
    setValues({
      ...values,
      type: event.target.value,
    });
  };
  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function alertprimary() {
    setIsValid(!isValid)
  }

  let callRestAPIGet = ({
    url,
    method = 'GET',
    data,
    params,
    timeout
  }) => {
    const options = {
      method,
      url,
      data,
      params,
      timeout
    };
    return WebServiceRequest.callWebService(options);
  };

  let callRestAPIPost = ({
    url,
    method = 'POST',
    data,
    params,
    timeout
  }) => {
    const options = {
      method,
      url,
      data,
      params,
      timeout
    };
    return WebServiceRequest.callWebService(options);
  };


  function on_register() {
    var details = {
      "email": email,
      "password": pwd,
      "ph_number": ph_no,
      "name": username,
      "type": values.type
    };
    console.log("send details", details)

    callRestAPIGet({ url: WebServiceRequest.BASE_URL_USER + "/user/1" })
      .then(res => console.log(res))
      .catch(err => console.log("api err", err))



    callRestAPIPost({ url: WebServiceRequest.BASE_URL_USER + "/user", data: details })
      // .then((response) => response.json())
      .then(async (res) => {
        console.log("clientdata res", res)
      }).catch((error) => {
        console.log("error", error)
      });
  }

 
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (

    <Container className="constainer">



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

                  {/* <OutlinedInput
                   style={{width:"500px"}}
                   label="Password"
                    // type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                   
                    onChange={handleChange('password')}
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
                    // labelWidth={70}
                  /> */}

                </div>

                <div style={{ width: "100%", height: "100%", textAlign: "center", marginTop: "50px", marginBottom: "100px" }}>

                  <Button
                    style={{
                      width: "500px", height: "50px", backgroundColor: "#9851c2"
                    }}
                  // color="#9851c2"
                  >
                    <text style={{ fontSize: 22 }}>LogIn</text>

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
