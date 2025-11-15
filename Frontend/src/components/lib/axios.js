import axios from 'axios'

const api = axios.create({
    baseURL:"https://note-app-n37m.onrender.com"
});

export default api;