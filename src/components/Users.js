import { WebServiceRequest } from "../api/webService";
import React from "react";

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
  url = this.url,
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

export class Users extends React.Component{
  constructor() {
    super()
    // this.handleCategoryChange = this.handleCategoryChange.bind(this);
    // this.setSearchString = this.setSearchString.bind(this);
    // this.handleSearch = this.handleSearch.bind(this);

      this.state = {
        data:[],
        category:'',
        searchString:'',
      };    
  }
  componentDidMount(){
    let defaultUrl = '/user';
    console.log("here");
    
    callRestAPIGet({ url: WebServiceRequest.BASE_URL_USER+defaultUrl, params:{} }).then((data) =>{
      console.log(data)
      this.setState({data:data.data})
    });
  };
  handleCategoryChange(event) {
    if(event.target.value !== "null")
    this.setState({category: event.target.value});
  }

  setSearchString(event) {
    this.setState({searchString: event.target.value});
  }

  // handleSearch(event) {
  //   event.preventDefault();
  //   let url = '/product/search';
    
  //   let params = {
  //     category: this.state.category,
  //     searchString:this.state.searchString
  //   }
  //   callRestAPIGet({ url: WebServiceRequest.BASE_URL_USER+url, params }).then((data) =>{
  //     console.log("search data",data.data.data)
  //     this.setState({data:data.data.data})
  //   }).catch((err)=>{
  //     this.setState({data:[]})

  //   });

  // }

  render(){
    return (
    <div><h2>Users</h2>

    <ol>
    {this.state.data && this.state.data.map((item, i) => <li>{item.name}---{item.email}---{item.type}  </li>)}

    </ol>

    </div>);

  }


}

  export default Users;