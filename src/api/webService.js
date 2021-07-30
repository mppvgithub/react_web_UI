
const BASE_URL_PRODUCT = "http://localhost:4000";
const BASE_URL_USER = "http://localhost:4001";

import axios from "axios";

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
  return callWebService(options);
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
  return callWebService(options);
};

export const WebServiceRequest = {
  BASE_URL_PRODUCT,
  BASE_URL_USER,
  callRestAPIGet,
  callRestAPIPost
};
