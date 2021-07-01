//This is an example code for Navigator//
import React, { Component } from 'react';
import axios from "axios";
import userComponent from './user'
import ownerComponent from './owner'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


export default class App extends Component {
 
  constructor(props) {
    super(props)
    this.state = {
        inputtxt: '',
        post_records: [],
        post_title:{ title: "Intial object" },
        menus = [{ name: "check", path: "/" }, { name: "owner", path: "/owner" }, { name: "user", path: "/user" }]
    }
  }
   changetext = (text) => {
    this.setState({inputtxt:text});
  };

   get_func = async () => {
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
      this.setState({post_records:[]})
    //   data.map(async (val, key) => {
    //     await setPostRecord(post_records => [...post_records, val.title]);
    //   })
    data.map((val,key) => {
        this.state.post_records.push(val.title)
    })
      // await setPostRecord(JSON.parse(data));
      await console.log("post_records", post_records);
    });
  };

   post_func = () => {
    axios.post("/posts", {
      title: "ABC",
      body: "boday of data",
      userId: "1"
    }).then(async result => {
      let data = await result.data;
      console.log("data", data);
      this.setState({post_title:{ title: "Intial object" }})
      //  await setPost_title(post_title => [...post_title, data.title]);
      this.setState.post_title({ title: data.title })
      // await setPostRecord(JSON.parse(data));
    });
  }

   reset_data = () => {
    this.setState({inputtxt:""})
    this.setState({post_records:[]})
    this.setState({post_title:{ title: "Intial object" }})
   
  }

  home = () => {
    return (
      <div>
        <h3>Home router</h3>
        <div style={{ backgroundColor: "#a3a3a3" }}>
          <p>{post_records}</p>
        </div>
      </div>)
  }

  exactHome = () => {
    return <div>Exact Home router</div>
  }


  user = () => {
    return <div>User router</div>
  }

  user_id = () => {
    return <div>UserId router</div>
  }

  owner = () => {
    return <div>Owner router</div>
  }
  nomatch = () => {
    return <div>Nomatch router</div>
  }


  
  render() {
    // menus = [{ name: "check", path: "/" }, { name: "owner", path: "/owner" }, { name: "user", path: "/user" }]

   let link_menus = this.state.menus.map((val, key) => {
        return (
          
            <Link to={val.path} key={key}>{val.name}</Link>
          
        )
    })
    // const { navigate } = this.props.navigation;
    return (
      
    );
  }
}
