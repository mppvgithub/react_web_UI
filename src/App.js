import React, { useState, useEffect, Link } from "react";
// import "./style.css";
import axios from "axios";
import userComponent from './user'
import ownerComponent from './owner'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { render } from "@testing-library/react";
export default function App() {
  axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/todos/1";
  const [inputtxt, setInputtxt] = useState("");
  const [post_records, setPostRecord] = useState([]);
  const [post_title, setPost_title] = useState({ title: "Intial object" })

  useEffect(() => {
    // get_func()
  }, [])

  const changetext = text => {
    setInputtxt(text);
  };

  const get_func = async () => {
    // axios.get("/posts").then(async result => {
    //   const data = await result.data[0];
    //   // await console.log("data", data);
    //   //   data.map(async(val,key) => {
    //   //  await setPostRecord(post_records => [...post_records, val.id]);
    //   //   })
    //   await setPostRecord(post_records => [...post_records, data]);
    //   await console.log("post_records", post_records);
    // });
    axios.get("/posts").then(async result => {
      let data = await result.data;
      await console.log("data", data);
      setPostRecord([])
      data.map(async (val, key) => {
        await setPostRecord(post_records => [...post_records, val.title]);
      })
      // await setPostRecord(JSON.parse(data));
      await console.log("post_records", post_records);
    });
  };

  const post_func = () => {
    axios.post("/posts", {
      title: "ABC",
      body: "boday of data",
      userId: "1"
    }).then(async result => {
      let data = await result.data;
      console.log("data", data);
      setPost_title({})
      //  await setPost_title(post_title => [...post_title, data.title]);
      setPost_title({ title: data.title })
      // await setPostRecord(JSON.parse(data));
    });
  }

  const reset_data = () => {
    setInputtxt("")
    setPostRecord([])
    setPost_title({ title: "Intial object" })
  }

  const home = () => {
    return (
      <div>
        <h3>Home router</h3>
        <div style={{ backgroundColor: "#a3a3a3" }}>
          <p>{post_records}</p>
        </div>
      </div>)
  }

  const exactHome = () => {
    return <div>Exact Home router</div>
  }


  const user = () => {
    return <div>User router</div>
  }

  const user_id = () => {
    return <div>UserId router</div>
  }

  const owner = () => {
    return <div>Owner router</div>
  }
  const nomatch = () => {
    return <div>Nomatch router</div>
  }
  const menus = [{ name: "check", path: "/" }, { name: "owner", path: "/owner" }, { name: "user", path: "/user" }]

  const link_menus = menus.map((val, key) => {
        return (
          
            <Link to={val.path} key={key}>{val.name}</Link>
          
        )
    })
  

  return (
    <div>
      <h1>Axios, Router</h1>
      <p>
        <input type="text" onChange={text => { changetext(text.target.value); }} />You are Entering... :)
      </p>
      <p>useState data: {inputtxt}</p>
      <p> userState object:  {post_title.title}</p>
      <button onClick={() => { post_func(); }}>Axios Post</button>
      <button onClick={() => { get_func(); }} > Axios Get </button>
      <button onClick={() => { setPostRecord([]) }} > Clear data </button>
      <button onClick={() => { reset_data() }} > Reset </button>
      {
        // post_records.map(val => <div style={{backgroundColor:"lightgreen"}}>{val.id}</div>)
        // post_records.map(function (item) {
        //   return <div style={{ backgroundColor: "lightgreen" }}> {item.id} </div>
        // })
      }
      <div style={{ backgroundColor: "lightyellow" }}>
        <p>{post_records}</p>
      </div>
      <BrowserRouter>
        
          {/* {link_menus} */}
          {
            menus.map((val, key) => {
        return (
          
            <Link to={val.path} key={key}>{val.name}</Link>
          
        )
    })
          }
       


        <div>
          {/* <Switch> */}
          <Route exact path="/" component={exactHome} />
          <Route path="/" component={home} />
          <Route exact path="/user" component={userComponent} />
          <Route exact path="/user:id" render={() => <h6>seperate user with id</h6>} />
          <Route component={nomatch} />
          <Route exact path="/owner" component={ownerComponent} />
          {/* </Switch> */}
        </div>


      </BrowserRouter>
    </div>
  );
}
