
import React, { useState, useEffect } from "react";
import "../index.css";
import "../App.css";
import { WebServiceRequest } from '../api/webService';
let logo = '../images/logo.png';
import { get_addQuotes, get_addMenu, deleteQuote, add_menu } from "../store/actions";
import { Redirect, Link } from 'react-router-dom';
import { InputLabel, Select, FormControl as UI, TextField, InputAdornment, IconButton, OutlinedInput } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Button, Container, Row, Col, Tabs, Tab, Figure, Alert, Carousel as React_Carousel, Pagination, Accordion, Card, Badge, ListGroup, Navbar, Nav, NavDropdown, ResponsiveEmbed, Image, Form, FormControl, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './footer';
import { useDispatch, useSelector } from 'react-redux';

let dental = '../images/dental.png';

export default function About() {

  const dispatch = useDispatch();


  //Access Redux Store State
  const dataReducer = useSelector((state) => state.dataReducers);
  console.log("IN STORE dataReducer -->", dataReducer)

  const { menus } = dataReducer;
  console.log("menus", menus)

  const [items_selected, setItems_selected] = useState([])
  const [Login_values, setLogin_Values] = useState({
    password: localStorage.getItem('loginPassword') || '',
    email: localStorage.getItem('loginEmail') || '',
  });

  const numberOfProducts = [
    { name: 'item1', itemId: "1", itemPrice: "10" },
    { name: 'item2', itemId: "2", itemPrice: "10" },
    { name: 'item3', itemId: "3", itemPrice: "10" },
    { name: 'item4', itemId: "4", itemPrice: "10" },
    { name: 'item5', itemId: "5", itemPrice: "10" },
    { name: 'item6', itemId: "6", itemPrice: "10" },
    { name: 'item7', itemId: "7", itemPrice: "10" },
    { name: 'item8', itemId: "8", itemPrice: "10" },
    { name: 'item9', itemId: "9", itemPrice: "10" },
    { name: 'item10', itemId: "10", itemPrice: "100" },
    { name: 'item11', itemId: "11", itemPrice: "105" },
    { name: 'item12', itemId: "12", itemPrice: "105" },
    { name: 'item13', itemId: "13", itemPrice: "107" },
    { name: 'item14', itemId: "14", itemPrice: "170" }
  ];
  useEffect(() => {
    get_store_data()
    selected_id()
    // console.log("Logged email password", Login_values.email, Login_values.password)
  }, [])

  useEffect(() => {
    selected_id()
  }, [dataReducer])

  const selected_id = async () => {
    console.log("menu update")
    var tot = []
    await menus.map((val, key) => {
      tot.push(val.itemId)

    })
    setItems_selected(tot)
    console.log("items_selected", items_selected)
  }

  const get_store_data = () => {

    var data = localStorage.getItem('menus');
    if (data !== null) {
      //Initially save data to store , before rendering data
      dispatch(get_addMenu(JSON.parse(data)));
    }
  }

  const clear_storage = async () => {
    await localStorage.removeItem("menus")
    await alert("LS Cleared")
  }
  const addcart = async (item) => {
    //details to save in store
    var details = {
      "itemAmount": item.itemPrice,
      "itemId": item.itemId,
      "itemName": item.name,
      "itemSelcted": 1
    }
    console.log("Add data", details)
    var menu_arr = []

    var menus = await localStorage.getItem('menus', (menus))
    console.log("local storage menus", menus)
    if (menus != null) {
      var temp_menu = []
      temp_menu = (JSON.parse(menus))
      console.log("available menus in LS", temp_menu)
      console.log("details to push in LS------", details)
      temp_menu.push(details)
      console.log("unshfted menus", menus)
      localStorage.setItem('menus', JSON.stringify(temp_menu))
      dispatch(add_menu(details));

      var menus = await localStorage.getItem('menus', (menus))
      console.log("result menus", menus)
    }
    else {
      menu_arr.push(details)
      console.log("menu_arr", menu_arr)
      await localStorage.setItem('menus', JSON.stringify(menu_arr))
      await dispatch(add_menu(details));


      var menus = await localStorage.getItem('menus', (menus))
      console.log("result menus", menus)
    }


    // dispatch(add_menu(details));

    // localStorage.getItem('menus', (err, menus) => {
    //   console.log("localStorage")
    //   console.log("async menu", menus)
    //   if (err) alert(err.message)

    //   else if (menus !== "null" && menus !== null) {
    //     menus = JSON.parse(menus)
    //     console.log("available menus", menus)
    //     console.log("details------", details)
    //     menus.unshift(details)

    //     localStorage.setItem('menus', JSON.stringify(menus), () => {
    //       dispatch(add_menu(details));
    //     });
    //   } else {
    //     menu_arr.push(details)
    //     console.log("menu_arr", menu_arr)
    //     localStorage.setItem('menus', JSON.stringify(menu_arr), () => {
    //       dispatch(add_menu(details));
    //     });
    //   }
    // })

    // to push details in store

  }

  return (

    <Container className="container">
      <Row style={{ width: "100%", marginLeft: "5px", marginTop: "100px", }}>
        <div style={{ width: "100%", }} className="hotel-card">
          <div style={{ marginTop: '1rem', marginLeft: '1rem', textAlign: "left" }}>
            <text style={{ fontSize: 20, color: "red" }}>Consumable & Disposable</text>
          </div>
          <div style={{ marginLeft: '1rem', textAlign: "left" }}>
            <text style={{ fontSize: 15 }}>Top Selling Consumables and Disposables</text>
          </div>
          <div class="row" style={{ marginTop: '1rem', marginLeft: '1rem', }}>

            {
              numberOfProducts.map(function (item) {
                return (
                  <Card style={{ marginRight: 10, marginBottom: 10, height: "150px", width: "150px", alignItems: "center", justifyContent: "center", }}>
                    <div>
                      <img
                        src={dental}
                        style={{ height: "75px", width: "75px" }}
                        alt="Image"
                      />
                    </div>
                    <div>
                      {
                        items_selected.includes(item.itemId) ?
                          <Button style={{ alignItems: "center", justifyContent: "center" }}>
                            <text style={{ fontSize: 12 }}>Added</text>
                          </Button>
                          :
                          <Button
                            onClick={() => { addcart(item) }}
                            style={{
                              backgroundColor: "#9851c2", alignItems: "center", justifyContent: "center"
                            }}
                          >
                            <text style={{ fontSize: 12 }}>Add cart</text>
                          </Button>
                      }

                    </div>
                  </Card>
                )
              })
            }

          </div>
        </div>

      </Row>
      <Row style={{ flexDirection: "row-reverse", padding: 20 }}>
        {/* <Button
          // onClick={() => { clear_storage() }}
          style={{
            backgroundColor: "#9851c2", alignItems: "center", justifyContent: "center",
          }}
        >
          <text style={{ fontSize: 15 }}>  Cart({menus.length}) </text>
        </Button> */}
        <Link to="/Cart" className="btn btn-primary"> Cart({menus.length}) </Link>

        <Button
          onClick={() => { clear_storage() }}
          style={{
            backgroundColor: "#9851c2", alignItems: "center", justifyContent: "center", marginRight: 10
          }}
        >
          <text style={{ fontSize: 15 }}>  Clear LS  </text>
        </Button>

      </Row>

    </Container>
  );
}
