import { WebServiceRequest } from "../api/webService";
import React, { useEffect } from "react";

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

export class Products extends React.Component{
  constructor() {
    super()
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.setSearchString = this.setSearchString.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

      this.state = {
        data:[],
        category:'',
        searchString:'',
      };    
  }
  componentDidMount(){
    let defaultUrl = '/product/list/1';
    console.log("here");
    
    callRestAPIGet({ url: WebServiceRequest.BASE_URL_PRODUCT+defaultUrl, params:{} }).then((data) =>{
      console.log(data)
      this.setState({data:data.data.data})
    });
  };
  handleCategoryChange(event) {
    if(event.target.value !== "null")
    this.setState({category: event.target.value});
  }

  setSearchString(event) {
    this.setState({searchString: event.target.value});
  }

  handleSearch(event) {
    event.preventDefault();
    let url = '/product/search';
    
    let params = {
      category: this.state.category,
      searchString:this.state.searchString
    }
    callRestAPIGet({ url: WebServiceRequest.BASE_URL+url, params }).then((data) =>{
      console.log("search data",data.data.data)
      this.setState({data:data.data.data})
    }).catch((err)=>{
      this.setState({data:[]})

    });

  }

  render(){
    return (
    <div><h2>Products</h2>
      <form onSubmit={this.handleSearch}>
        <label>
          Search String---->
          <input
            name="searchString"
            type="text"
            value={this.state.searchString}
            onChange={this.setSearchString} />
        </label>
        <br />
        <label>
          Select Category:
          {/* to be made as input array from categories */}
          <select value={this.state.category} onChange={this.handleCategoryChange}>
            <option value="null"></option>
            <option value="parent1">parent1</option>
            <option value="parent2">parent2</option>
            <option value="parent3">parent3</option>
            <option value="parent4">parent4</option>
          </select>
        </label>
        <input type="submit" value="Search" />
      </form>
    <ol>
    {this.state.data && this.state.data.map((item, i) => <li>{item.displayName}    {item.price}</li>)}

    </ol>

    </div>);

  }


}

  export default Products;