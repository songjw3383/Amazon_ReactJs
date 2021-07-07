import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/challenge-55311/us-central1/api'
})

export default instance;