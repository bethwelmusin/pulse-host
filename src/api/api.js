import axios from "axios";

const api = axios.create({
  baseURL: "https://your-api-domain.com/api",  
  
});

export default api;
