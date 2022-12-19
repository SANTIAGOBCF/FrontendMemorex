import axios from "axios";

const instance = axios.create({
  baseURL: "https://rescatadog.herokuapp.com/api/",
});

export default instance;