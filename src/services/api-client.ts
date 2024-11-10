import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f5017446047c4630a3b115844938acfa'
    }
})