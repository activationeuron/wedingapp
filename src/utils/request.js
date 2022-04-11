import axios from 'axios';

const url =
  process.env.NODE_ENV === 'development'
    ? 'http://172.105.156.217:8000/api'
    : '/api';

const request = axios.create({ baseURL: url });

export default request;
