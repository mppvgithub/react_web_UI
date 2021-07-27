
import React, { useState, useEffect } from "react";
import "../index.css";
import "../App.css";
import { WebServiceRequest } from '../api/webService';
let logo = '../images/logo.png';
import { update_menu, get_addMenu, del_menu, add_menu } from "../store/actions";
import { Redirect, Link } from 'react-router-dom';
import { Button, Container, Row, Col, Tabs, Tab, Figure, Alert, Carousel as React_Carousel, Pagination, Accordion, Card, Badge, ListGroup, Navbar, Nav, NavDropdown, ResponsiveEmbed, Image, Form, FormControl, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
import { useDispatch, useSelector } from 'react-redux';

let dental = '../images/dental.png';
let delete_img = '../images/delete.png';

export default function Cart() {

    const dispatch = useDispatch();
    const [total, setTotal] = useState(0)

    //Access Redux Store State
    const dataReducer = useSelector((state) => state.dataReducers);
    console.log("IN STORE dataReducer -->", dataReducer)

    const { menus } = dataReducer;
    console.log("menus", menus)


    useEffect(() => {
        get_store_data()
        // console.log("Logged email password", Login_values.email, Login_values.password)
    }, [])

    useEffect(() => {
        tot_cal()
    }, [dataReducer])

    const tot_cal = async () => {
        console.log("menu update")
        var tot = 0
       await menus.map((val, key) => {
            tot = tot + (val.itemAmount * val.itemSelcted)

        })
        setTotal(tot)
    }
    const get_store_data = () => {

        var data = localStorage.getItem('menus');
        if (data !== null) {
            //Initially save data to store , before rendering data
            dispatch(get_addMenu(JSON.parse(data)));
        }
    }




    const onDelete = async (item, index) => {

        await dispatch(del_menu(item.itemId));

        await menus.map((val, key) => {
            if (val.itemId == item.itemId) {
                menus.splice(key, 1)
            }
        })
        await localStorage.setItem('menus', JSON.stringify(menus))

        toast.success(item.itemName + " Removed!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    }

    const update_menu_item = async (item, index, value) => {

        console.log("index", index, value)
        menus[index].itemSelcted = value
        dispatch(update_menu(menus[index]));
        localStorage.setItem('menus', JSON.stringify(menus))
    }

    return (

        <Container className="container">
            <Row style={{ width: "100%", marginLeft: "5px", marginTop: "100px", }}>
                <div style={{ width: "100%", }} className="hotel-card">
                    <div style={{ marginTop: '1rem', marginLeft: '1rem', textAlign: "left" }}>
                        <text style={{ fontSize: 20, color: "red" }}>Your cart items</text>
                    </div>
                    <div style={{ marginLeft: '1rem', textAlign: "left" }}>
                        <text style={{ fontSize: 15 }}>You can modify your products</text>
                    </div>
                    <div class="row" style={{ marginTop: '1rem', marginLeft: '1rem', marginRight: '1rem', }}>

                        {
                            menus.map(function (item, index) {
                                return (
                                    <Card style={{ marginRight: 10, marginBottom: 10, height: "200px", width: "180px", alignItems: "center", justifyContent: "center", }}>
                                        <div style={{ width: "100%", textAlign: "right", paddingRight: 5 }}>
                                            <img
                                                onClick={() => { onDelete(item) }}
                                                src={delete_img}
                                                style={{ height: "25px", width: "25px" }}
                                                alt="Image"
                                            />
                                        </div>
                                        <div>
                                            <img
                                                src={dental}
                                                style={{ height: "70px", width: "70px" }}
                                                alt="Image"
                                            />
                                        </div>
                                        <text>{item.itemName}</text>
                                        <text style={{ color: "green", fontSize: 12 }}>${item.itemAmount}</text>

                                        <div className="input-group mb-3" style={{ paddingRight: 10, paddingLeft: 10 }}>
                                            <div className="input-group-prepend">
                                                <Button disabled={item.itemSelcted == 1 ? true : false} variant="primary" className="input-group-text decrement-input" style={{ fontSize: "16px", cursor: "pointer" }} onClick={() => { update_menu_item(item, index, item.itemSelcted - 1) }} >-</Button>
                                            </div>
                                            <text className="form-control text-center" >{item.itemSelcted}</text>
                                            <div className="input-group-append">
                                                <Button variant="success" className="input-group-text increment-input" style={{ fontSize: "16px", cursor: "pointer" }} onClick={() => { update_menu_item(item, index, item.itemSelcted + 1) }} >+</Button>
                                            </div>
                                        </div>

                                    </Card>
                                )
                            })
                        }

                    </div>
                </div>

            </Row>
            <Row style={{ flexDirection: "row-reverse", padding: 20 }}>
                <Button
                    // onClick={() => { clear_storage() }}
                    style={{
                        backgroundColor: "#9851c2", borderColor: "#9851c2", alignItems: "center", justifyContent: "center",
                    }}
                >
                    <text style={{ fontSize: 15 }}>  Place Order </text>
                </Button>
                <Button
                    // onClick={() => { clear_storage() }}
                    style={{
                        alignItems: "center", justifyContent: "center", marginRight: 20
                    }}
                >
                    <text style={{ fontSize: 15 }}>  Total: ${parseFloat(total).toFixed(2)} </text>
                </Button>


            </Row>

        </Container>
    );
}
