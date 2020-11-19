import axios from "axios";

const instance = axios.create({
    baseURL:"https://yash-tinder-clone.herokuapp.com/",
});

export default instance;