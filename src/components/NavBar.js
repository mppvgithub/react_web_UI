import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
let logo = './logo.svg';
let Search_img = './images/search.png';
// import man from './man.jpeg'
import { Button, Container, Row, Col, Figure, Alert, Pagination, Accordion, Card, Badge, ListGroup, Navbar, Nav, NavDropdown, ResponsiveEmbed, Image, Form, FormControl, InputGroup } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';


export default function NavBar() {
  const [query, setQuery] = useState("");
  const [Login_values, setLogin_Values] = useState({
    email: localStorage.getItem('loginEmail') || '',
  });
  useEffect(()=>{
    setLogin_Values({ ...Login_values, email: localStorage.getItem('loginEmail') || "" })
  },[])
  

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }
  const searchClick = () => {
    alert(query)
  }
  return (
    <Navbar fixed="top" bg="#9851c2" expand="xl" style={{ padding: 0, justifyContent: "space-around", backgroundColor: "#9851c2", height: '75px' }}>
      <Row className="Navbarrow">
        <Image style={{ height: "50px", }} src={logo} responsive />
        <Navbar.Brand href="/">MedicOcean</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={{color:"#fff"}} href="about">Products</Nav.Link>
            <Nav.Link href="services">Services</Nav.Link>
            <Nav.Link href="contact">Contact us</Nav.Link>
            <Nav.Link href="signUp">SignUp {Login_values.email ==""?"/ SignIn":""}</Nav.Link>
          </Nav>
          <input type="text" style={{ borderRadius: 5, backgroundColor: "#d9aef2", height: "40px", marginRight: 5 }} id="filter" placeholder="Search for..." onChange={handleInputChange} value={query} />
          <Button style={{ borderRadius: 5, backgroundColor: "#c469fa", alignItems: "center", justifyContent: "center" }}
            onClick={searchClick}
          >
            <Image src={Search_img} style={{ height: "20px", width: "20px" }} />
          </Button>

          <Row style={{ marginLeft: "10px", justifyContent: "flex-end", alignItems: "center" }}>
            <Nav.Link style={{ color: "#000", }} href="#home">Blog</Nav.Link>
            <Icon.Facebook style={{ marginRight: "20px" }} />
            <Icon.Twitter style={{ marginRight: "20px" }} />
            <Button style={{ borderRadius: 30 }} variant="primary">{Login_values.email !="" ? Login_values.email:"User eMail"}</Button>
          </Row>
        </Navbar.Collapse>

      </Row>

    </Navbar>
  );
}

