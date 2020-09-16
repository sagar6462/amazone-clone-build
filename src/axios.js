import axios from "axios";

const instance = axios.create({
  baseURL: "....", // THIS API [cloud fucntion] URL
});

export default instance;
