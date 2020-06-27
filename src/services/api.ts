import axios from 'axios'

const api = axios.create({
    baseURL: 'https://deckofcardsapi.com/'
})

export default api;
