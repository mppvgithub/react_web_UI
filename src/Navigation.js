import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
  // Link
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';

import logo from './logo.svg'
import Search_img from './images/search.png'
import header_ill from './header_ill.svg'
// import man from './man.jpeg'
import { Button, Container, Row, Col, Figure, Alert, Pagination, Accordion, Card, Badge, ListGroup, Navbar, Nav, NavDropdown, ResponsiveEmbed, Image, Form, FormControl, InputGroup } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';


const checkHome = (Component, props = '') => () => {
  if (Component === Home) {
    // return (localStorage.getItem('_id')) ? (<Redirect to="/customers" />) : (<Component />);
    // if(localStorage.getItem('_id')) {
    //   return <Redirect to={{ 'pathname': '/customers', 'state': '' }} />
    // } else {
    return <Component />;
    // }
  } else {
    return <Component />;
  }

};

const handleSelect = (eventKey) => alert(`selected ${eventKey}`);



export default function Navigation() {
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    // this.setState({
    //   query: event.target.value
    // }, () => {
    //   this.filterArray();
    setQuery(event.target.value);
  }
  const searchClick = () => {
    alert(query)
  }

  return (
    <Router>
      <Navbar fixed="top" bg="#9851c2" expand="xl" style={{ padding: 0, justifyContent: "space-around", backgroundColor: "#9851c2", height:'75px' }}>
        <Row className="Navbarrow">
          <Image style={{ height: "50px", }} src={logo} responsive />
          <Navbar.Brand href="/">MedicOcean</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="About">About</Nav.Link>
              <Nav.Link href="Services">Services</Nav.Link>
              <Nav.Link href="Contact">Contact us</Nav.Link>
              <Nav.Link href="SignUp">SignUp / SignIn</Nav.Link>
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
              {/* <Icon.GitHub  /> */}


              <Button style={{ borderRadius: 30 }} variant="primary">+ Support Projects</Button>

            </Row>
          </Navbar.Collapse>

        </Row>

      </Navbar>
      <Switch>
        <Route exact path="/" render={checkHome(Home)} />
        <Route exact path="/About" render={checkHome(About)} />
        <Route exact path="/Services" render={checkHome(Services)} />
        <Route exact path="/Contact" render={checkHome(Contact)} />
        <Route exact path="/SignUp" render={checkHome(SignUp)} />
        {/* <Route exact path="/customers" render={ (props) => <Home {...props} /> } />
          <Route exact path={"/customers/edit/:id"} render={ (props) => <EditCustomer {...props} /> } />

          <Route exact path="/todolist" render={ (props) => <Todo {...props} />  } />
          <Route exact path="/menus" render={ (props) => <PaypalExpress {...props} /> } />
          <Route exact path="/checkout" render={ (props) => <Checkout {...props} /> } />

          <Route path="*" render={ () => <p style={{ "textAlign" : "center", "marginTop" : "25px" }}>Page Not Found</p> } /> */}
      </Switch>

    </Router>
  );
}