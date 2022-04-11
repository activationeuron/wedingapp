import axios from 'axios';

const url =
  process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api' : '/api';

const request = axios.create({ baseURL: url });

export default request;
