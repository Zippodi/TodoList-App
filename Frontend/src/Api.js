import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5093", // Use your actual API base URL
});

export default api;
