import axios from "axios";


const requestClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 30000,
    headers: {
      Accept: 'application/json',
      //'Authorization': 'token <your-token-here> 
    }
  });
  export default requestClient;