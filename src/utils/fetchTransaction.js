import axios from "axios";

const fetchTransaction = axios.create({
  baseURL: 'https://61ab37ec264ec200176d4028.mockapi.io',
})

export default fetchTransaction;