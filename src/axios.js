import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-build/us-central1/api", // THIS API [cloud fucntion] URL
});

export default instance;
