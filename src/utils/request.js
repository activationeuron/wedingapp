import axios from 'axios';

const url =
  process.env.NODE_ENV === 'development'
    ? 'http://afaanwedsmariam.love:8000/api'
    : 'http://afaanwedsmariam.love:8000/api';

const request = axios.create({ baseURL: url });

export default request;
