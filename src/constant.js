import axios from "axios";
export const BASE_URL = "http://192.168.43.102:4001"

const BASE_URL_PRODUCT = "http://localhost:4000";
const BASE_URL_USER = "http://192.168.43.102:4001";


const callWebService = (options) => {
    const axiosInstance = axios.create({
        baseURL: options.url,
        withCredentials: true,
        timeout: options.timeout || 1000 * 50
    });
    return axiosInstance(options);
};


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

export const WebServiceRequest = {
    callWebService,
    BASE_URL_PRODUCT,
    BASE_URL_USER,
};