import axios from "axios";

const api = axios.create({
  baseURL: `https://api.reddit.com/`,
});

export default api;
