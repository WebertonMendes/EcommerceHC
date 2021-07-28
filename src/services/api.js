import axios from 'axios';

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/WebertonMendes/EcommerceHC'
})

export default api;